import React from 'react';
import Image from 'next/image';
import styles from './nav.module.css';
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Dropdown from './dropdown';
import { signOut } from 'next-auth/react';


const Nav2 = (userdata, signInOut) => {

    if (userdata === undefined) {
        return (
            <div className={styles.navbarCustom}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm p-0 m-0">
                    <div className="container-fluid" justify-content="space-between">
                    <Link className="navbar-brand" href={{ pathname: '/landingPage', query: userdata }}>
                            <Image src="/images/logo_white.png" width="216" height="46" alt="" className="d-inline-block align-middle mr-2" />
                        </Link>

                   </div>
                </nav>
            </div>
        )
    }
    else {
        console.log("userdata: ", userdata);
        return (
            <div className={styles.navbarCustom}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm p-0 m-0">
                    <div className="container-fluid" justify-content="space-between">
                    <Link  className="navbar-brand" href={{ pathname: '/landingPage', query: userdata }}>
                            <Image src="/images/easy3.png" width="60" height="20" alt="" className="d-inline-block align-middle mr-2" />
                            Divya Pattisapu
                        </Link>
                        <Dropdown userdata={userdata} />

                    </div>
                </nav>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.5.0/js/bootstrap.bundle.min.js"></script>

            </div>
        )
    }
}

export default Nav2;