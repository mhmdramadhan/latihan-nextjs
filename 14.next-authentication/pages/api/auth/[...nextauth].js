import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";

export default NextAuth({
    session: {
        strategy: "jwt", // Ensure this is set correctly
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            authorize: async (credentials) => {
                const client = await connectToDatabase();
                const usersCollection = client.db("auth-demo").collection('users');

                const user = await usersCollection.findOne({
                    email: credentials.email,
                });

                if (!user) {
                    throw new Error('No user found!');
                }

                const isValid = await verifyPassword(credentials.password, user.password);

                if (!isValid) {
                    throw new Error('Could not log you in!');
                }

                return { email: user.email };
            }
        })
    ],
});