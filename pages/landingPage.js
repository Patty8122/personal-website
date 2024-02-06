import Nav from '../components/landing_page/nav';
import Center from '../components/landing_page/center';
import Features from '../components/landing_page/features';
import styles from '../styles/landingPage.module.css';
import { FaLinkedin } from 'react-icons/fa';


const landing_page_display = () => {
    return (
            <div className={"container-fluid m-0 p-0 " + styles.main}>
                    <Nav showDP={true}/>
                    <Center />
                    <Features />
            </div>
    )

}


export default landing_page_display;
