import { hashPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const { email, password } = data;

        if (!email || !email.includes('@') || !password || password.trim().length < 7) {
            res.status(422).json({ message: 'Invalid input - password should also be at least 7 characters long.' });
            return;
        }

        const client = await connectToDatabase();

        const existingUser = await client.db("auth-demo").collection('users').findOne({ email });

        if (existingUser) {
            res.status(422).json({ message: 'User exists already!' });
            client.close();
            return;
        }
        // return res.status(201).json(db);


        const hashedPassword = await hashPassword(password)

        const result = await client.db("auth-demo").collection('users').insertOne({
            email: email,
            password: hashedPassword
        });

        // Save to database
        res.status(201).json({ message: 'User created!', result });
    }
}

export default handler;