import Nav from '../components/landing_page/nav';
import Center from '../components/landing_page/center';
import Features from '../components/landing_page/features';



const landing_page_display = () => {
    return (
        <>

<div className="container-fluid m-0 p-0">
            <Nav showDP={true}/>
            <Center />
            <Features />
        </div>
        </>
    )

}


export default landing_page_display;
