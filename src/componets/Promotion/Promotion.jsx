import { Link } from 'react-router-dom';
import './Promotion.css'
function Promotion() {
    return (
        <div className="PromotionContainer">
            <div className="childrenPromo">
                <div className="row card-promo d-flex align-items-center ">
                    <div className="col image-promo-col">
                        <div className="circle" ></div>
                        <img src="./Laye1.png" alt="Air Jordan promoção" className='img-promo' />
                    </div>
                    <div className="col">

                        <p className="text-x-small-bold">Oferta especial</p>
                        <h2 className="h2-title-desktop-bold">Air Jordan edição de colecionador</h2>
                        <p className="text-small-desktop">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        </p>
                        <Link to={'/Produtos'}>
                            <button className="btn-ofertas text-small-bold">Ver Ofertas</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotion;