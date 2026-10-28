// One-time copy of the old cPanel uploads/images folder into Vercel Blob.
// Remove this route once the migration is done.
const express = require("express");
const { put, head } = require("@vercel/blob");

const router = express.Router();
const SOURCE = "https://nodejs.fairy-tale.bg/uploads/";

router.post("/__migrate-uploads", express.json({ limit: "1mb" }), async (req, res) => {
  const paths = Array.isArray(req.body.paths) ? req.body.paths.slice(0, 40) : [];
  const results = [];
  for (const p of paths) {
    if (typeof p !== "string" || !p.startsWith("images/") || p.includes("..")) {
      results.push({ path: p, status: "rejected" });
      continue;
    }
    try {
      const exists = await head(p).then(() => true).catch(() => false);
      if (exists) {
        results.push({ path: p, status: "exists" });
        continue;
      }
      const url = SOURCE + p.split("/").map(encodeURIComponent).join("/");
      const r = await fetch(url);
      if (!r.ok) {
        results.push({ path: p, status: "source " + r.status });
        continue;
      }
      const buf = Buffer.from(await r.arrayBuffer());
      await put(p, buf, {
        access: "public",
        addRandomSuffix: false,
        contentType: r.headers.get("content-type") || undefined,
      });
      results.push({ path: p, status: "copied", bytes: buf.length });
    } catch (err) {
      results.push({ path: p, status: "error " + err.message });
    }
  }
  res.json(results);
});

module.exports = router;
