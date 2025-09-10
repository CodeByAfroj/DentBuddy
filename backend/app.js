// // app.js
// import express from 'express';
// import dotenv from 'dotenv';
// import uploadRoutes from './routes/uploadRoutes.js';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from "cors"
// import { MongoClient }  from 'mongodb';

// const app = express();
// app.use(bodyParser.json())
// const PORT=process.env.PORT||5000;
// const MONGO_URL=process.env.MONGO_URL;
// app.use(express.json());
// dotenv.config();

// app.use(cors());
// //mongo client to directly interact with database
// const client = new MongoClient(process.env.MONGO_URL);
// const dbName = 'product';
// const collectionName = 'products';
// app.get('/api/search', async (req, res) => {
//   const query = req.query.q;
//   try {
//     await client.connect();
//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);

//     const results = await collection.aggregate([
//       {
//         $search: {
//           index: 'default',
//           text: {
//             query,
//             path: ['title', 'price'], 
//           },
//         },
//       },
//       { $limit: 10 },
//     ]).toArray();

//     return res.json(results);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send('Search failed');
//   }
// });

// mongoose.connect(MONGO_URL)
// .then(()=>{
//     console.log("Database connected")
//     app.listen(PORT,()=>{
//         app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
//     })
//   })

// app.use('/api', uploadRoutes);



// app.js
import express from "express";
import dotenv from "dotenv";
import uploadRoutes from "./routes/uploadRoutes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { MongoClient } from "mongodb";

dotenv.config(); // Load env first

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", uploadRoutes);

// MongoClient for search
const client = new MongoClient(MONGO_URL);
const dbName = "test";
const collectionName = "products";

app.get("/api/search", async (req, res) => {
  const query = req.query.q;
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const results = await collection
      .aggregate([
        {
          $search: {
            index: "title",
            text: {
              query,
              path: ["title"],
            },
          },
        },
        { $limit: 10 },
      ])
      .toArray();

    return res.json(results);
  } catch (err) {
    console.error("❌ Search error:", err.message);
    return res.status(500).send("Search failed");
  }
});

// Connect DB and Start server
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("✅ Database connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err.message);
  });

