// // models/Blog.js
// import mongoose from 'mongoose';

// const ProductSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       trim: true,
//     },
//     description: {
//       type: String,
      
//     },
//     price:{
//       type:String,
//     },
   
//     imageUrl: {
//       type: String, // Cloudinary image URL
//     },
//     videoUrl: {
//       type: String, // Optional Cloudinary video URL
//     },
//     tags: {
//       type: [String],
//       default: [],
//     },
//   },
//   {
//     timestamps: true, // Automatically adds createdAt and updatedAt
//   }
// );

// const Product = mongoose.model('Products', ProductSchema);

// export default  Product;



// models/productSchema.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String, // Cloudinary image URL
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;

