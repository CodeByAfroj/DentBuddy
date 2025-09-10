// upload.js
import multer from 'multer';

// Use memory storage to access file buffer
const storage = multer.memoryStorage();
const upload = multer({ storage });

export default upload;
