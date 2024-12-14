import { Link, useLocation } from 'react-router-dom';
import "./HeaderStyle.css";

function Header() {
    const location = useLocation();

    return (
        <header>
            
            <div className='logo-container'>

                <img src="/logo-header.svg" alt="Logo da Digital" className='logo' />


                <div className='search-bar'>
                    <input
                        type="text"
                        placeholder='Pesquisar produto...'
                        className="search-input"
                    />
                </div>


                <div className='cadastro'>
                    <a href="#" className='link-cadastro'>Cadastre-se</a>
                    
                </div>

                <div className='button'>
                    <button className='button-login'> Entrar</button>
                </div>


                <div className='cart-icon'>
                    <img src="/car.png" alt="Carrinho de compras" />
                </div>
            </div>


            <nav className='nav-bar'>
                <Link
                    to="/"
                    className={location.pathname === "/" ? "link active" : "link"}
                >
                    Home
                </Link>
                <Link
                    to="/Produtos"
                    className={location.pathname === "/Produtos" || location.pathname === "/Produto" ? "link active" : "link"}
                >
                    Produtos
                </Link>
                <Link
                    to="/Categorias"
                    className={location.pathname === "/Categorias" ? "link active" : "link"}
                >
                    Categorias
                </Link>
                <Link
                    to="/MeusProdutos"
                    className={location.pathname === "/MeusProdutos" ? "link active" : "link"}
                >
                    Meus Pedidos
                </Link>
            </nav>
            
        </header>
    );
};

export default Header;