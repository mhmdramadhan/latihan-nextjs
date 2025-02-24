import { MongoClient, ServerApiVersion } from 'mongodb';

// Create a MongoClient with a connection URI that includes the username and password
const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.5zt6g.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

// const uri =
//   'mongodb+srv://ramadhan:HPuzaJJeMABB15Xf@cluster0.5zt6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    try {
      await client.connect();
      const db = client.db();
      const collection = db.collection('messages');

      const result = await collection.insertOne({ email, name, message });

      res.status(201).json({ message: 'Message stored successfully!', result });
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Storing message failed!', error: error });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}

export default handler;
