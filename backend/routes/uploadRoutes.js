// // routes/uploadRoutes.js
// import express from 'express';

// import multer from "multer";
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// import {getOneImageUrl,uploadImage,getAllImageUrls,create,update,Delete,show,showAll } from '../controller/uploadController.js';

// const router = express.Router();

// router.get('/images', getAllImageUrls);
// router.get('/image/:id', getOneImageUrl);
// router.post('/upload', upload.single('image'), uploadImage);

// router.post("/create",create);
// router.put("/update/:id",update)
// router.delete("/delete/:id",Delete)
// router.get("/show/:id",show)
// router.get("/showall",showAll)

// export default router;


// routes/uploadRoutes.js
import express from "express";
import multer from "multer";

// Multer setup: storing file in memory (for Cloudinary stream upload)
const storage = multer.memoryStorage();
const upload = multer({ storage });

import {
  getOneImageUrl,
  uploadImage,
  getAllImageUrls,
  create,
  update,
  Delete,
  show,
  showAll,
} from "../controller/uploadController.js";

const router = express.Router();

// Image routes
router.get("/images", getAllImageUrls);
router.get("/image/:id", getOneImageUrl);
router.post("/upload", upload.single("image"), uploadImage);

// Product routes
router.post("/create", create);
router.put("/update/:id", update);
router.delete("/delete/:id", Delete);
router.get("/show/:id", show);
router.get("/showall", showAll);

export default router;
