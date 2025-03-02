import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://ramadhan:HMBEgq3l4pA7j9Hw@cluster0.5zt6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&tls=true";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version


const client = new MongoClient(uri);

export async function connectToDatabase() {
    await client.connect();
    return client.db("auth-demo");
}