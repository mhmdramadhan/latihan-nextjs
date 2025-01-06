import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email address' });
      return;
    }

    // Connect to MongoDB
    const client = await MongoClient.connect(
      'mongodb+srv://ramadhan:MW0SUzn4AuJU1kDb@cluster0.5zt6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    const db = client.db('newsletter');

    await db.collection('emails').insertOne({ email });

    client.close();

    // Store in a database
    res.status(201).json({ message: 'Signed up!' });
  }
}

export default handler;
