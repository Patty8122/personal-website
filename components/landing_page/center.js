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

    const handleModalClick = () => {
        // Toggle the modal state when the modal is clicked
        setIsOpen(true);

        // Get the modal element
        
        if (isOpen) {
          // Get the height of the navbar when the modal is opened
          var navbarHeight = document.querySelector('.navbar');

          if (navbarHeight) {
            // Set the margin-top for the modal
            navbarHeight = navbarHeight.clientHeight + 20;
            document.querySelector('.ReactModal__Overlay').style.marginTop = navbarHeight + 'px';
          }
    
        }
      };



    return (
        <div className="container-fluid pt-5 pb-0 mb-0 mt-3">
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-6 order-last pt-2">
                    <h1 className={styles.headers + " justify-content-center"}> 
                    <span> Hi, I'm Divya! </span>
                    <span className={styles.blogTitleEmoji}>👋</span>  </h1> 
                    {/* add emoji wave */}
                    <br />
                    <h5 className={styles.headers + " justify-content-center"}> 
                        I'm currently a student at the University of Chicago, majoring Computer Science.
                        <br />
                        I specialize in full-stack development, data science, and machine learning. 
                    </h5>
                    {/* <h5 className={styles.headers}>API, Bootstrap, C++, Docker, ES6, Figma, GoLang, HiveQL, Impala, JavaScript!</h5> */}
                    


                    <div className={"row " + styles.centerContent}>
                        <div className="col-6 ">
                            <button type="button" className={"btn btn-secondary  mt-4 mb-4 " + styles.Resume} onClick={handleModalClick}>Check Out My Resume</button>
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




