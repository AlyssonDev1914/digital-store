import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ProductListingPage({ products }) {
    const ListingContainer = styled.div`
        width: 1440px; 
        display: flex;
        justify-content: center; 
        flex-wrap: wrap; 
    `;

    const Listing = styled.div`
        width: 1440px; 
        display: flex;
        justify-content: center; 
        flex-wrap: wrap;
        gap: 30px; 
    `;

    return (
        <ListingContainer>
            <Listing>
                {products.map((produto, index) => (
                    <div id={`productCard_${index}`} key={index}>
                        <Link to={`/product/${produto.id}`}> 
                            <ProductCard 
                                image={produto.image} 
                                type={produto.type} 
                                name={produto.name} 
                                price={produto.price} 
                                priceDiscount={produto.priceDiscount} 
                                hasDiscountTag={produto.hasDiscountTag} 
                            />
                        </Link>
                    </div>
                ))}
            </Listing>
        </ListingContainer>
    );
};

export default ProductListingPage;
