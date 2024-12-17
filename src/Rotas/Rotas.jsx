import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import PageProduct from "../pages/PageProduct/PageProduct";
import ProductsPage from "../pages/ProductsPage/ProductsPage";

const Rotas = () =>{

    return (
        <>
        <Routes>
            <Route path= "/" element= {<Home/>}/>
            <Route path= "/produtos" element= {<PageProduct/>}/>
            <Route path= "/product/:id" element= {<ProductsPage/>}/>
        </Routes>

        </>
    )


};
export default Rotas;

