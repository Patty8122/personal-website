import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

import Sidebar from '../components/sidebar';
import RootLayout from './layout';

import Nav from '../components/landing_page/nav';
import Center from '../components/landing_page/center';
import Features from '../components/landing_page/features';
import Animation from '../components/wavesanimation';


import { useState } from 'react';
import { useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const userSend = async (user) => {

    const res = await fetch('/api/auth', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({"name": user.name, "imageURL": user.image, "email": user.email}),
    });

    const data = await res.json();

    console.log(data);
    return data;

};



export default function Home() {
    const { data, status } = useSession();
    const [userSent, setUserSent] = useState(false);
    
    
    useEffect(() => {
        if (status === 'authenticated' && data && data.user && !userSent) {
            console.log(data.user)
            console.log(userSend(data.user));

        setUserSent(true);
      }
    }, [status, userSent]);
  

    if (status === 'loading') return <h1> Loading... please wait</h1>;
    if (status === 'authenticated') {
        return (
            <div>
                <Nav/>
                <Center />
                <Features userdata={data}/>
            </div>
        );
    }
    return (

        <div>
                <Nav/>
                <Center />
                <Features />
        </div>
    );
}


