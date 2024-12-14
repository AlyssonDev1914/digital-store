import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

function ProductCard({ image, type, name, price, priceDiscount, hasDiscountTag }) {
  const discountPrice = priceDiscount ? price - price * (priceDiscount / 100) : null;

  return (
    <div className="product-card">
      {hasDiscountTag && (
        <div className="discount-tag">
         30%
        </div>
      )}
      <div className="product-card-image">
        <img src={image} alt={name} />
      </div>
      
      <div className="product-card-details">
      <p className='cardType'>{type}</p>
        <h3 className="product-name">{name}</h3>
        <div className="product-price">
          {priceDiscount ? (
            <>
              <span className="price-old">{`R$ ${price.toFixed(2)}`}</span><span className="price-new">{`R$ ${discountPrice.toFixed(2)}`}</span>
            </>
          ) : (
            <span className="price">{`R$ ${price.toFixed(2)}`}</span>
          )}
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceDiscount: PropTypes.number,
  hasDiscountTag: PropTypes.bool,
};

export default ProductCard;
