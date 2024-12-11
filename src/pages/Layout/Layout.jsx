
import Header from "../../componets/header/Header";
import Footer from "../../componets/footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Rotas from '../../Rotas/Rotas';


const Layout = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Rotas />
                <Footer />
            </BrowserRouter>
        </>
    )
};

export default Layout;

