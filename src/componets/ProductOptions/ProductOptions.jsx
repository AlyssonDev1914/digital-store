import { Link } from "react-router-dom";
import "./ProductOptions.css";

function ProductOptions() {
    return (
        <>
            <div className="container-total text-center flex-direction-row">
                <div className="ProductOptionsContainer">
                    <div className="row d-flex justify-content-around ">
                        <div className="container-box">
                            <div className="content-text">
                                <span className="text-price">30% OFF</span>
                                <h3 className="text-title">Novo drop Supreme</h3>
                                <Link to="/Produto">
                                    <button>Comprar</button>
                                </Link>
                            </div>
                            <img className="img1" src="./supreCard.png" alt="Supreme" />
                        </div>
                        <div className="container-box">
                            <div className="content-text">
                                <span className="text-price">30% OFF</span>
                                <h3 className="text-title">Coleção Adidas</h3>
                                <Link to="/Produto">
                                    <button>Comprar</button>
                                </Link>
                            </div>
                            <img className="img2" src="./shoeCard.png" alt="Adidas Shoes" />
                        </div>
                        <div className="container-box">
                            <div className="content-text">
                                <span className="text-price">30% OFF</span>
                                <h3 className="text-title">Novo Beats Bass</h3>
                                <Link to="/Produto">
                                    <button>Comprar</button>
                                </Link>
                            </div>
                            <img className="img3" src="./fone.png" alt="Beats Headphones" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductOptions;