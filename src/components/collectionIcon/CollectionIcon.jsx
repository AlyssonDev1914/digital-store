import React from "react";
import { Link } from "react-router-dom";
import "./CollectionIcon.css"

function CollectionIcon() {
    return (
        <>
        <div className="container">
            <div className="items">
                <Link to={'/produtos'} className="links">
                <div className="imgIcon">
                 <img className="icons" src="./tshirt.png" alt="icone de camisa" />
                </div>
                <div className="sub-titulo">
                    <h6 className="subDesc">Camisetas</h6>
                </div>
                </Link>
            </div>
            <div className="items">
                <Link to={'/produtos'} className="links">
                <div className="imgIcon">
                 <img className="icons" src="./calça.png" alt="icone de calça" />
                </div>
                <div className="sub-titulo">
                    <h6 className="subDesc">Calça</h6>
                </div>
                </Link>
            </div>
            <div className="items">
                <Link to={'/produtos'} className="links">
                <div className="imgIcon">
                 <img className="icons" src="./calça.png" alt="icone de Bonés" />
                </div>
                <div className="sub-titulo">
                    <h6 className="subDesc">Bonés</h6>
                </div>
                </Link>
            </div>
            <div className="items">
                <Link to={'/produtos'} className="links">
                <div className="imgIcon">
                 <img className="icons" src="./foneIcon.png" alt="icone de Headphoes" />
                </div>
                <div className="sub-titulo">
                    <h6 className="subDesc">Headphones</h6>
                </div>
                </Link>
            </div>
            <div className="items">
                <Link to={'/produtos'} className="links">
                <div className="imgIcon">
                 <img className="icons" src="./shoesIcon.png" alt="icone de tênis" />
                </div>
                <div className="sub-titulo">
                    <h6 className="subDesc">Tênis</h6>
                </div>
                </Link>
            </div>
           
        </div>
        </>
    )

}

export default CollectionIcon;