import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google';
// import { authOptions } from "../api/auth/[...nextauth]";


export default function SignIn({ providers }) {
    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </>
    )
}

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

export async function getServerSideProps(context) {
    // const session = await getServerSession(context.req, context.res, authOptions);
    const session = await getServerSession(context.req, context.res, authOptions);

    // If the user is already logged in, redirect.
    // Note: Make sure not to redirect to the same page
    // To avoid an infinite loop!
    if (session) {
        return { redirect: { destination: "/" } };
    }

    const providers = await getProviders();

    return {
        props: { providers: providers ?? [] },
    }
}