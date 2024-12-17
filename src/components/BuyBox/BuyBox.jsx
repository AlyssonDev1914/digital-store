import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "./BuyBox.css";

function BuyBox(props) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSizeClick = (size) => {
   
    setSelectedSize(size === selectedSize ? null : size);
  };

  const handleColorClick = (color) => {
   
    setSelectedColor(color === selectedColor ? null : color);
  };

  return (
    <Container>
        
      <div className="by-text">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      
      <div className="avaliaçao">
        <div className="img">
          {props.stars && props.stars.map((star, index) => (
            <img key={index} src={star} alt={`avaliação ${index + 1}`} />
          ))}
        </div>
        <div className="notas">
          <span>{props.rating} <img src="/4.7star.png" alt="star" /></span>
          <p className="reviewCount">( 90 Avaliações ) </p>
        </div>
      </div>
      
      <div className="preço">
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
            <button
              key={index}
              style={{ backgroundColor: color }}
              className={selectedColor === color ? 'active' : ""}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      </div>
      
      <div className="by-btn">
        <Button>Comprar</Button>
      </div>
    </Container>
  );
}

export default BuyBox;
