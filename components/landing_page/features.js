import React from "react";
import styles from './features.module.css';
import Link from 'next/link';

const Features = (userdata) => {
    return (
        <div className="">

            {/* dark background container with white text and 5 cards inside with margin-top */}
            <div className="container-fluid bg-dark  m-0 p-0" >
                {/* <div className="row">
                    <div className="offset-2 pt-3 white">
                        <h5 className={styles.featuresHead}>Features</h5>
                    </div>
                </div> */}
                {/* add left padding */}
                <div className="row p-5 justify-content-center" >
                    <div className="col-sm-2 ">
                        <div className="card white h-100">
                            <div className="card-body">
                                <div className="text-center">
                                    {/* <h7 className="card-title">Courses Taken</h7> */}
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-9 p-3 ">
                                        <img src="/images/student.png" alt="" className={styles.featureImages} />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link className="btn btn-primary"
                                        href={{ pathname: '/coursesPage', query: userdata }}
                                    > My Coursework </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card white h-100">
                            <div className="card-body" >
                                <div className="text-center">
                                    {/* <h7 className="card-title">High Performance Computing Projects</h7> */}
                                </div>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                <div className="row justify-content-center">
                                    <div className="col-9 p-3 ">
                                        <div className="">
                                            <img src="/images/experience.png" alt="" className={styles.featureImages} />
                                        </div>
                                    </div>
                                </div>
                                {/* <a href="" className="btn btn-primary">Create AI checklists</a> */}
                                <div className="text-center">
                                    <Link className="btn btn-primary"
                                        href={{ pathname: '/experiencePage', query: userdata }}
                                    > Experience </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
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
                                        href={{ pathname: '/mlProjectsPage', query: userdata }}
                                    > Machine Learning Projects </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
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
                                        href={{ pathname: '/webProjectsPage', query: userdata }}
                                    > Web Development Projects </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card white h-100">
                            <div className="card-body">
                                <div className="text-center">
                                    {/* <h7 className="card-title justify-content-center">AI checklist App</h7> */}
                                </div>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                <div className="row justify-content-center">
                                    <div className="col-9 p-3 ">
                                        <div className="">
                                            <img src="/images/high-performance.png" alt="" className={styles.featureImages} />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                <Link className="btn btn-primary"
                                        href={{ pathname: '/hpcProjectsPage', query: userdata }}
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

