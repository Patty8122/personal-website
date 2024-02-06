import React from "react";
import styles from './features.module.css';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


const Features = (userdata) => {
    return (
        <div className={"container-fluid bg-dark  m-0 p-0 justify-content-center align-items-center"} >
            <div className="container-fluid row pt-4 pb-2 pl-0 pr-0 m-0 justify-content-center align-items-center" >
                <div className="col-sm-6 col-md-4 col-lg-2 p-2">
                    <div className="card white h-100 p-0 m-0">
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
                <div className="col-sm-6 col-md-4 col-lg-2 p-2">
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
                <div className="col-sm-6 col-md-4 col-lg-2 p-2">
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
                <div className="col-sm-6 col-md-4 col-lg-2 p-2">
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
                <div className="col-sm-6 col-md-4 col-lg-2 p-2">
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

            <div className="container-fluid row pt-0 pb-0 pl-0 pr-0 m-0 justify-content-center text-white font-weight-bold" >
                    Get in touch with me!   
            </div>
                <div className={styles.iconContainer} >
                            <a href="https://www.linkedin.com/in/divyapattisapu" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className={styles.whiteIcon} />
                            </a>
                            <a href="https://www.github.com/Patty8122" target="_blank" rel="noopener noreferrer">
                                <FaGithub className={styles.whiteIcon}/>
                            </a>

                            <a href="mailto:divyapattisapu@gmail.com" target="_blank" rel="noopener noreferrer">
                                <FaEnvelope className={styles.whiteIcon}/>
                            </a>
                </div>



                  
        </div>



    );
}

export default Features;

