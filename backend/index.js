import express from 'express';
import dotenv from 'dotenv';



dotenv.config();
const app = express();
const MONGO_URL=process.env.MONGO_URL;
app.use(express.json());
dotenv.config();

app.use(cors());
const client = new MongoClient(process.env.MONGO_URL);


const dbName = 'test';
const collectionName = 'blogs';

app.get('/search', async (req, res) => {
  const query = req.query.q;
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const results = await collection.aggregate([
      {
        $search: {
          index: 'default',
          text: {
            query,
            path: ['title', 'author'], 
          },
        },
      },
      { $limit: 10 },
    ]).toArray();

    return res.json(results);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Search failed');
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
