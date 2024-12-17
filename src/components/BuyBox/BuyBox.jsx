import { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import "./BuyBox.css";

const colors = {
    warning: '#ffb31f', 
    error: '#e74c3c',  
    lightGray3: '#d3d3d3', 
    darkGray: '#2c3e50',
    secondary: '#8e44ad', 
};


const ContainerBuyBox = styled.div`
    max-width: 700px;
  
`;

function BuyBox(props) {
    const ColorButton = styled.button`
        width: 31px;
        height: 31px;
        margin: 10px;
        border-radius: 50%;
        border: 2px solid transparent;
        cursor: pointer;
        outline: none;
        transition: 0.4s ease-in-out;
        background: ${props => {
            if (props.id === 'azul') return 'lightskyblue';
            if (props.id === 'rosa') return colors.error;
            if (props.id === 'black') return colors.darkGray;
            if (props.id === 'roxa') return colors.secondary;
            return 'transparent';
        }};
        border: ${props => props.isSelected ? `2px solid ${colors.primary}` : '2px solid transparent'};
        transform: ${props => props.isSelected ? 'scale(1.3)' : 'scale(1)'};

        &:hover {
            transform: scale(1.3);
            border: 2px;
        }
    `;

    const Button = styled.button`
        width: 220px;
        height: 3rem;
        border-radius: 9px;
        border: none;
        outline: none;
        background: ${colors.warning};
        color: var(--light-gray-3);
        cursor: pointer;
        font-size: 16px;
    `;

    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size === selectedSize ? null : size);
    };

    const handleColorClick = (color) => {
        setSelectedColor(color === selectedColor ? null : color);
    };

    return (
        <ContainerBuyBox>
            <div className="by-text">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>

            <div className="avaliacao">
                <img src="/Stars.png" alt="Estrelas de avaliação" className="stars" />
                <img src="/4.7star.png" alt="4.7 estrelas" />
                <p className="reviewCount">(90 Avaliações)</p>
            </div>

            <div className="preco">
                <p><span>R$</span>{props.discountPrice}</p>
                <p>R${props.price}</p>
            </div>

            <div className="descr">
                <span>Descrição do produto</span>
                <p>{props.productDescription}</p>
            </div>

            <div className="tamanho">
                <span>Tamanho</span>
                <div className="tamanhos">
                    {props.sizes && props.sizes.map((size, index) => (
                        <button
                            key={index}
                            onClick={() => handleSizeClick(size)}
                            className={selectedSize === size ? 'active' : ""}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <div className="cor">
                <span>Cores Disponíveis</span>
                <div className="cores">
                    {props.colors && props.colors.map((color, index) => (
                        <ColorButton
                            key={index}
                            id={color} 
                            className={selectedColor === color ? 'active' : ""}
                            onClick={() => handleColorClick(color)}
                            isSelected={selectedColor === color} 
                        />
                    ))}
                </div>
            </div>

            <div className="buybtn">
                <Button>COMPRAR</Button>
            </div>
        </ContainerBuyBox>
    );
}

export default BuyBox;
