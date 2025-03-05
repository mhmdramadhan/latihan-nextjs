import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";



export default NextAuth({
    session:{
        jwt: true
    },
    providers: [
        Providers.Credentials({
            authorize: async (credentials) => {
                const db = await connectToDatabase();

                const usersCollection = db.collection('users');

                const user = await usersCollection.findOne({
                    email: credentials.email,
                    password: credentials.password
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