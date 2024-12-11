import React from "react";
import ProductData from "../productsData/ProductData";

const ProductListingPage = () => {
  return (
    <div className="product-listing">
      <div className="products">
        {ProductData.map((produto, index) => (
          <div key={index} className="product-item">
            {/* Imagem do produto */}
            <img
              src={`/images/${produto.image}`} // Referência correta à pasta public
              className="product-image"
              alt={produto.name}
            />
            {/* Tipo do produto */}
            <p className="product-type">{produto.type}</p>
            {/* Nome do produto */}
            <h3 className="product-name">{produto.name}</h3>
            {/* Preço antigo e preço com desconto */}
            <div className="product-price">
              <span className="price-old">{`R$ ${produto.price.toFixed(2)}`}</span>
              {produto.priceDiscount ? (
                <span className="price-new">{`R$ ${produto.priceDiscount.toFixed(2)}`}</span>
              ) : (
                <span className="price-no-discount">{`R$ ${produto.price.toFixed(2)}`}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
