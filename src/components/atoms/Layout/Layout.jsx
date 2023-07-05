import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header/>
            <div id="wrap">
                <main>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </>
    )
};
export default Layout