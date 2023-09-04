import React from "react";
import styles from './center.module.css';

import Image from "next/image";
import Modal from 'react-modal';


const Center = () => {
    const customStyles = { overlay: { backgroundColor: 'rgba(0, 0, 0, 0.6)' }, content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)' } }
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <div className="container pt-5 pb-0 mb-3 mt-3">
            {/* <div className={styles.TidyUp}> */}
            {/* container only upto its end not entire page */}
            <div className="row align-items-center justify-content-center">

                <div className="col-sm-6 order-last ">
                    <h1> Hi, I'm Divya!</h1>
                    <h5>I am passionate about building software products</h5>
                    <h5>efficient in performance and fun!</h5>

                    <div className="row col-9">
                        {/* <div className="col-6">
                            <button type="button" className="btn btn-secondary justify-content-left ">Chat Now</button>
                        </div> */}
                        <div className="col-6"> 
                            <button type="button" className="btn btn-secondary align-items-center mt-4" onClick={() => setIsOpen(true)}>Check Out My Resume</button>
                            <Modal styles={customStyles} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}> <h1>Modal Content</h1> <button onClick={() => setIsOpen(false)}>x</button></Modal>
                        
                        </div>
                    </div>

                    </div>
                    <div className="col-sm-5 order-first">
                        <img src="/images/me.png" alt="" className={styles.imgContained}/>
                    </div>
                </div>

            </div>
        //
            );
}




            export default Center;




