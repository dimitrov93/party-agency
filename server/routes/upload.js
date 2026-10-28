const express = require("express");
const multer = require("multer");
const { put, list, del, copy } = require("@vercel/blob");

const router = express.Router();
require("dotenv").config();

const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.PRODUCTION_URL
    : process.env.LOCAL_URL;

// Files are kept in Vercel Blob under images/<type>/<album>/<albumName>/<file>,
// mirroring the old uploads/images folder layout on disk.
const ROOT = "images";

// Vercel Functions accept request bodies up to 4.5 MB.
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 4 * 1024 * 1024 },
});

const joinPath = (...parts) => parts.filter(Boolean).join("/");

async function listAll(prefix) {
  const blobs = [];
  let cursor;
  do {
    const res = await list({ prefix, cursor, limit: 1000 });
    blobs.push(...res.blobs);
    cursor = res.hasMore ? res.cursor : undefined;
  } while (cursor);
  return blobs;
}

// Group blobs that sit directly inside a folder under `prefix`.
function groupByFolder(blobs, prefix) {
  const folders = new Map();
  for (const blob of blobs) {
    const rest = blob.pathname.slice(prefix.length);
    const parts = rest.split("/");
    if (parts.length !== 2 || !parts[1]) continue;
    const [folder] = parts;
    if (!folders.has(folder)) folders.set(folder, []);
    folders.get(folder).push(blob);
  }
  return folders;
}

function toAlbum(folder, blobs, location) {
  const created = new Date(
    Math.min(...blobs.map((b) => new Date(b.uploadedAt).getTime()))
  );
  return {
    folder,
    location,
    images: blobs.map((b) => ({ url: b.url })),
    created,
  };
}

// single folder: /uploads/images/:type/:album/:albumName
router.get("/:type/:album/:albumName", async (req, res) => {
  const { type, album, albumName } = req.params;
  const prefix = joinPath(ROOT, type, album) + "/";
  try {
    const blobs = await listAll(joinPath(ROOT, type, album, albumName) + "/");
    const folders = groupByFolder(blobs, prefix);
    const files = folders.get(albumName) || [];
    if (!files.length) return res.status(200).json([]);
    res
      .status(200)
      .json([
        toAlbum(
          albumName,
          files,
          `${apiUrl}/uploads/images/${type}/${album}/${albumName}`
        ),
      ]);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error getting album" });
  }
});

// all folders: /uploads/images/:type/:albumName?
router.get("/:type/:albumName?", async (req, res) => {
  const { type, albumName } = req.params;
  const prefix = joinPath(ROOT, type, albumName) + "/";
  try {
    const blobs = await listAll(prefix);
    const folders = groupByFolder(blobs, prefix);
    const albums = [...folders.entries()].map(([folder, files]) =>
      toAlbum(
        folder,
        files,
        albumName
          ? `${apiUrl}/uploads/images/${type}/${albumName}/${folder}`
          : `${apiUrl}/uploads/images/${folder}`
      )
    );
    albums.sort((a, b) => b.created - a.created);
    res.status(200).json(albums);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error getting albums" });
  }
});

router.post("/", upload.array("file", 20), async (req, res) => {
  const { type, album, albumName } = req.body;
  try {
    const files = await Promise.all(
      (req.files || []).map(async (file) => {
        const blob = await put(
          joinPath(ROOT, type, album, albumName, file.originalname),
          file.buffer,
          {
            access: "public",
            addRandomSuffix: false,
            allowOverwrite: true,
            contentType: file.mimetype,
          }
        );
        return { filename: file.originalname, path: blob.url };
      })
    );
    res.send(files);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error uploading files" });
  }
});

// delete a folder
router.delete("/:type/:album/:albumName", async (req, res) => {
  const { type, album, albumName } = req.params;
  try {
    const blobs = await listAll(joinPath(ROOT, type, album, albumName) + "/");
    for (let i = 0; i < blobs.length; i += 100) {
      await del(blobs.slice(i, i + 100).map((b) => b.url));
    }
    res.status(200).send({ message: "Folder deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error deleting folder" });
  }
});

// rename a folder
router.put("/:type/:album/:oldAlbumName", async (req, res) => {
  const { type, album, oldAlbumName } = req.params;
  const { newAlbumName } = req.body;
  const oldPrefix = joinPath(ROOT, type, album, oldAlbumName) + "/";
  const newPrefix = joinPath(ROOT, type, album, newAlbumName) + "/";
  try {
    if (!newAlbumName) {
      return res.status(400).send({ message: "Missing new album name" });
    }
    const existing = await list({ prefix: newPrefix, limit: 1 });
    if (existing.blobs.length) {
      return res.status(500).send({ message: "Error renaming folder" });
    }
    const blobs = await listAll(oldPrefix);
    for (const blob of blobs) {
      await copy(blob.url, newPrefix + blob.pathname.slice(oldPrefix.length), {
        access: "public",
        addRandomSuffix: false,
      });
    }
    for (let i = 0; i < blobs.length; i += 100) {
      await del(blobs.slice(i, i + 100).map((b) => b.url));
    }
    res.status(200).send({ message: "Folder renamed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error renaming folder" });
  }
});

module.exports = router;
