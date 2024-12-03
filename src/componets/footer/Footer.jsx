import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="row">
                    <div className="footer-log">
                        <img src="/logo-footer.png" alt="logo da Digital College" />
                    </div>
                    <div className="descrition">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                    <div className="icons-midias">
                        <img src="/facebook.png" alt="Facebook" />
                        <img src="/instagram.png" alt="Instagram" />
                        <img src="/twiter.png" alt="Twitter" />
                    </div>
                </div>

                <div className="informaçoes">
                    <div className="info">
                        <h1>Informação</h1>
                        <div className="infolinks">
                            <Link to="/">Sobre Drip Store</Link>
                            <Link to="/">Segurança</Link>
                            <Link to="/">Wishlist</Link>
                            <Link to="/">Blog</Link>
                            <Link to="/">Trabalhe conosco</Link>
                            <Link to="/">Meus Pedidos</Link>
                        </div>
                    </div>

                    <div className="categoria">
                        <h1>Categorias</h1>
                        <div className="categorialinks">
                            <Link to="/">Camisetas</Link>
                            <Link to="/">Calças</Link>
                            <Link to="/">Bonés</Link>
                            <Link to="/">Headphones</Link>
                            <Link to="/">Tênis</Link>
                        </div>
                    </div>

                    <div className="contato">
                        <h1>Contato</h1>
                        <div className="linksContatos">
                            <Link to="/">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</Link>
                            <Link to="/">(85) 3051-3411</Link>
                        </div>
                    </div>
                </div>
                
                <div className="line"></div>
                <div className="fotterCopyright">
                    <p>@ 2024 Digital College</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;