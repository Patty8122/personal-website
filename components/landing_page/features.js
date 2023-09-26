import React from "react";
import styles from './features.module.css';
import Link from 'next/link';

const Features = (userdata) => {
    return (
        <div className="">
            <div className="container-fluid bg-dark  m-0 p-0" >
                <div className="row p-5 justify-content-center" >
                    <div className="col-sm-2 p-2">
                        <div className="card white h-100">
                            <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-9 p-3 ">
                                        <img src="/images/student.png" alt="" className={styles.featureImages} />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link className="btn btn-primary"
                                        href={{ pathname: '/coursesPage', userdata: userdata }}
                                    > My Coursework </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 p-2">
                        <div className="card white h-100">
                            <div className="card-body" >
                                <div className="row justify-content-center">
                                    <div className="col-9 p-3 ">
                                        <div className="">
                                            <img src="/images/experience.png" alt="" className={styles.featureImages} />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link className="btn btn-primary"
                                        href={{ pathname: '/experiencePage', userdata: userdata }}
                                    > Experience </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 p-2">
                        <div className="card white h-100">
                            <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-9 p-3 ">
                                        <div className="">
                                            <img src="/images/machine-learning.png" alt="" className={styles.featureImages} />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link className="btn btn-primary"
                                        href={{ pathname: '/mlProjectsPage', userdata: userdata }}
                                    > Machine Learning Projects </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 p-2">
                        <div className="card white h-100">
                            <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-9 p-3 ">
                                        <div className="">
                                            <img src="/images/mobile.png" alt="" className={styles.featureImages} />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link className="btn btn-primary"
                                        href={{ pathname: '/webProjectsPage', userdata: userdata }}
                                    > Web Development Projects </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 p-2">
                        <div className="card white h-100">
                            <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-9 p-3 ">
                                        <div className="">
                                            <img src="/images/high-performance.png" alt="" className={styles.featureImages} />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link className="btn btn-primary"
                                        href={{ pathname: '/hpcProjectsPage', userdata: userdata }}
                                    > Embedded Systems Projects </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Features;

