import { MongoClient, ServerApiVersion } from 'mongodb';

const uri =
  'mongodb+srv://ramadhan:IBxLuKaP6RqsG6I0@cluster0.5zt6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

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

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      // Connect to the MongoDB cluster
      client = await MongoClient.connect('mongodb+srv://ramadhan:IBxLuKaP6RqsG6I0@cluster0.5zt6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0?directConnection=true');
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Could not connect to database!', error: error });
      return;
    }

    const db = client.db('my-site');
    const messageCollection = db.collection('messages');

    try {
      // Insert the new message into the messages collection
      const result = await messageCollection.insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Storing message failed!', error: error });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message!', message: newMessage });
  }
}

export default handler;
