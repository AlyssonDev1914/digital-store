
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
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

