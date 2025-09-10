// controllers/uploadController.js



// export const uploadImage = async (req, res) => {
//   console.log(req.file)
//   if (!req.file) return res.status(400).json({ error: "No file uploaded" });
//   try {
//     const result = await cloudinary.v2.uploader.upload(req.file.path, {
//       folder: "uploads",
//       resource_type: "auto",
//     });

//     res.status(200).json({ message: "Upload successful", url: result.secure_url });
//   } catch (error) {
//     res.status(500).json({ error: "Cloudinary error", details: error.message });
//   }
// };


// v---2

// import streamifier from 'streamifier';

// const streamUpload = (req) => {
//   return new Promise((resolve, reject) => {
//     const stream = cloudinary.uploader.upload_stream(
//       {
//         folder: 'uploads',
//         resource_type: 'auto',
//       },
//       (error, result) => {
//         if (result) {
//           resolve(result);
//         } else {
//           reject(error);
//         }
//       }
//     );
//     streamifier.createReadStream(req.file.buffer).pipe(stream);
//   });
// };

// export const uploadImage = async (req, res) => {
//   if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

//   try {
//     const result = await streamUpload(req);
    

//     res.status(200).json({
//       message: 'Upload successful',
//       url: result.secure_url, // This is what frontend will use
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Cloudinary error', details: error.message });
//   }
// };



// export const getAllImageUrls = async (req, res) => {
//   try {
//     // Fetch only the imageUrl field from all blog entries
//     const images = await Product.find({}, "imageUrl"); 

//     res.status(200).json({
//       message: "Fetched all image URLs successfully!",
//       imageUrls: images.map(product => product.imageUrl), // Extracting just the URLs
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching images", error });
//   }
// };

// export const getOneImageUrl = async (req, res) => {
//   try {
//     // Fetch only the imageUrl field from all blog entries
//     const {id} =req.params;
//     const product = await Product.findById(id).select("imageUrl");

//     res.status(200).json({
//       message: "Fetched all image URLs successfully!",
//       imageUrls:product.imageUrl, // Extracting just the URLs
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching images", error });
//   }
// };



// export const create = async(req,res)=>{
//   const { title, description, price, imageUrl } = req.body;

//   try {
//     const newProduct= new Product({
//       title,
//       description,
//       price,
//       imageUrl, // this is where you store the Cloudinary URL
//     });
//      const savedProduct = await newProduct.save();
//     return res.status(201).json(savedProduct)
//   } catch (error) {
//     return res.status(500).json({
//       message: 'Error while creating the product',
//       error: error.message,
//     });
//   }

// }

// export const update = async(req,res)=>{
//       try {
//         const id = req.params.id;
//         const productExist = await Product.findOne({_id:id})
//         if(!productExist)
//         {
//          return res.status(404).json({message:"products Not Found"});

//         }
//         const updateProduct = await Product.findByIdAndUpdate(id,req.body,{new:true})
//         res.status(201).json(updateProduct);
//       } catch (error) {
//         return res.status(500).json({
//           message: 'Error while updating the product ',
//           error: error.message,
//         });
//       }
// }

// export const Delete = async(req,res)=>{
//   try {
//     const id = req.params.id;
//     const productExist = await Product.findById({_id:id})
//     if(!productExist)
//     {
//       return res.status(404).json({message:"Product Not Found"});

//     }
//     await Product.findByIdAndDelete(id)
//      return res.status(201).json({message:"user deleted successfully"});
//   } catch (error) {
//     return res.status(500).json({
//       message: 'Error while deleting product',
//       error: error.message,
//     });
//   }
// }

// export const showAll = async(req,res)=>{
//   try {
//     const products = await Product.find();
//     if (products.length==0){
//         return res.status(404).json({message:"Product Not Found"});
//     }
//     return res.status(200).json(products);
  
//   } catch (error) {
//     return res.status(500).json({
//       message: ' Error while showing products ',
//       error: error.message,
//     });
//   }
// }

// export const show = async(req,res)=>{
//   try {
//       const{id}=req.params;
//     const product = await Product.findById(id);
//     if (product.length==0){
//         return res.status(404).json({message:"product Not Found"});
//     }
//     return res.status(200).json(product);
    
//   } catch (error) {
//     return res.status(500).json({
//       message: 'Error while showing product',
//       error: error.message,
//     });
//   }
// }


//v3


// controllers/uploadController.js
import cloudinary from "../cloudinary.js";
import Product from "../model/poductSchema.js";
import streamifier from 'streamifier';


// ----------------- Cloudinary Stream Upload -----------------
const streamUpload = (req) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "uploads",
        resource_type: "auto",
      },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    streamifier.createReadStream(req.file.buffer).pipe(stream);
  });
};

// ----------------- Upload Image -----------------
export const uploadImage = async (req, res) => {
  if (!req.file)
    return res.status(400).json({ error: "No file uploaded" });

  try {
    const result = await streamUpload(req);
    res.status(200).json({
      message: "Upload successful",
      url: result.secure_url, // Cloudinary URL
    });
  } catch (error) {
    res.status(500).json({ error: "Cloudinary error", details: error.message });
  }
};

// ----------------- Get All Image URLs -----------------
export const getAllImageUrls = async (req, res) => {
  try {
    const images = await Product.find({}, "imageUrl");
    res.status(200).json({
      message: "Fetched all image URLs successfully",
      imageUrls: images.map((p) => p.imageUrl),
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching images", error });
  }
};

// ----------------- Get Single Image URL -----------------
export const getOneImageUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).select("imageUrl");
    if (!product)
      return res.status(404).json({ message: "Product not found" });

    res.status(200).json({
      message: "Fetched image URL successfully",
      imageUrl: product.imageUrl,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching image", error });
  }
};

// ----------------- Create Product -----------------
export const create = async (req, res) => {
  const { title, description, price, imageUrl } = req.body;

  try {
    const newProduct = new Product({
      title,
      description,
      price,
      imageUrl,
    });
    const savedProduct = await newProduct.save();
    return res.status(201).json(savedProduct);
  } catch (error) {
    return res.status(500).json({
      message: "Error while creating the product",
      error: error.message,
    });
  }
};

// ----------------- Update Product -----------------
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const productExist = await Product.findById(id);

    if (!productExist)
      return res.status(404).json({ message: "Product not found" });

    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(500).json({
      message: "Error while updating the product",
      error: error.message,
    });
  }
};

// ----------------- Delete Product -----------------
export const Delete = async (req, res) => {
  try {
    const { id } = req.params;
    const productExist = await Product.findById(id);

    if (!productExist)
      return res.status(404).json({ message: "Product not found" });

    await Product.findByIdAndDelete(id);
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({
      message: "Error while deleting product",
      error: error.message,
    });
  }
};

// ----------------- Show All Products -----------------
export const showAll = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length==0)
      return res.status(404).json({ message: "No products found" });

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      message: "Error while fetching products",
      error: error.message,
    });
  }
};

// ----------------- Show One Product -----------------
export const show = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({
      message: "Error while fetching product",
      error: error.message,
    });
  }
};
