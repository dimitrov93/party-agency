const multer = require('multer');

// Attachments are kept in memory: Vercel Functions have no persistent disk.
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 4 * 1024 * 1024 },
});

const prepareAttachments = (req) => {
  const attachments = [];
  if (req.files) {
    req.files.forEach((file) => {
      attachments.push({
        filename: file.originalname,
        content: file.buffer,
        contentType: file.mimetype,
      });
    });
  }
  return attachments;
};

module.exports = {
  upload,
  prepareAttachments,
};
