import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// import { updateData } from '../../../mongoDB';


    export const authOptions = {
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_ID,
                clientSecret: process.env.GOOGLE_SECRET,
            }),
        ],
        database: process.env.DATABASE_URL,
        session: {
            jwt: true,  
        },
        jwt: {
            // secret: process.env.JWT_SECRET,
            secret: 'doziyrgsueb',
        },
    };


export default NextAuth(authOptions);