import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
    const client = new MongoClient("mongodb+srv://ramadhan:HMBEgq3l4pA7j9Hw@cluster0.5zt6g.mongodb.net/auth-demo?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    await client.connect();
    return client;
}