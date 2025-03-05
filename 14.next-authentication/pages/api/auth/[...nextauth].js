import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";



export default NextAuth({
    session: {
        strategy: "jwt", // Perubahan dari 'jwt: true' menjadi 'strategy: "jwt"'
    },
    providers: [
        Credentials({
            name: 'Credentials',
            authorize: async (credentials) => {
                const db = await connectToDatabase();
                console.log(db);
                const usersCollection = db.collection('users');

                const user = await usersCollection.findOne({
                    email: credentials.email,
                })

                if (!user) {
                    throw new Error('No user found!')
                }

                const isValid = await verifyPassword(credentials.password, user.password)

                if (!isValid) {
                    throw new Error('Could not log you in!')
                }

                return { email: user.email }
            }
        })
    ]
});