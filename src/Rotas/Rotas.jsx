import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductViewPage from "../pages/ProductViewPage/ProductViewPage"
import ProductListingPage from "../pages/ProductListingPage/ProductListingPage"

const Rotas = () =>{

    return (
        <>
        <Routes>
            <Route path= "/" element= {<Home/>}/>
            <Route path= "/product/:id" element= {<ProductViewPage/>}/>
            <Route path= "/produtos" element= {< ProductListingPage/>}/>
        </Routes>

        </>
    )


};
export default Rotas;

