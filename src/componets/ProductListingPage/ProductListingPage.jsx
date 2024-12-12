import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Definindo o componente de ProductListing 
function ProductListingPage({ products }) {
    const ListingContainer = styled.div`
        display:flex;
        flex-direction: row;

        align-items: center;
        justify-content: center;
    `;
    const Listing = styled.div`
        width: 90vw;
            display: flex;
            flex-direction:row;
            flex-wrap: wrap;
            justify-content: space-between;
    `;
    return (
        <ListingContainer>
            <Listing>

                {products.map((produto, index) => {
                    return (
                        <div id={`productCard_${index}`} key={index}>
                            <Link to={'/Produto'}>
                                <ProductCard imagem={produto.image} name={produto.name} price={produto.price} {...(produto.priceDiscount && { priceDiscount: produto.priceDiscount })} />
                            </Link>

                        </div>
                    )
                })}
            </Listing>
        </ListingContainer>
    );
};

export default ProductListingPage;