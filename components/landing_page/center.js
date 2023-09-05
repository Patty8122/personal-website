import React from "react";
import styles from './center.module.css';

import Image from "next/image";
import Modal from 'react-modal';




const Center = () => {
    const customStyles = { overlay: { backgroundColor: 'rgba(0, 0, 0, 0.6)' }, content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)' } }
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        function handleEsc(e) {
            if (e.keyCode === 27) {
                setIsOpen(false)
            }
        }

        function handleClickOutside(e) {
            if (e.target.className === 'ReactModal__Overlay') {
                setIsOpen(false)
            }
        }

        window.addEventListener('keydown', handleEsc)
        window.addEventListener('click', handleClickOutside)

        return () => {
            window.removeEventListener('keydown', handleEsc)
            window.removeEventListener('click', handleClickOutside)
        }
    }, [])




    return (
        <div className="container-fluid pt-5 pb-0 mb-3 mt-3">
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-6 order-last ">
                    <h1> Hi, I'm Divya!</h1>
                    <h5>I am passionate about building software products, efficient in performance and fun!</h5>
                    <h5>Excited to attend Grace Hopper Celebration 2023 in Orlando :D</h5>
                    <div className="row">
                        <div className="col-6">
                            <button type="button" className="btn btn-secondary align-items-center mt-4" onClick={() => setIsOpen(true)}>Check Out My Resume</button>
                            <Modal styles={styles.customModalStyles} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                                <div className={"row align-items-between "}>
                                    <div className="col-11">
                                        <h2>Resume</h2>
                                    </div>
                                    <div className={"col-1 " + styles.crossSign}>
                                        <button onClick={() => setIsOpen(false)} className={styles.crossSign}><span> x </span></button>
                                    </div>
                                </div>
                                <iframe src='/assets/pdfs/DivyaPattisapuResume.pdf' frameborder="0"
                                    marginheight="0"
                                    marginwidth="0"
                                    width="100%"
                                    height="100%" 
                                    styles={styles.customModalStyles}/>
                            </Modal>
                        </div>
                    </div>

                </div>
                <div className="col-sm-5 order-first">
                    <img src="/images/me2.jpeg" alt="" className={styles.imgContained} />
                </div>
            </div>

        </div>
        //
    );
}




export default Center;




