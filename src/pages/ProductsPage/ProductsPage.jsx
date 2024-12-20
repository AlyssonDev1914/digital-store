import React from "react";
import ProductListingPage from "../../components/ProductListingPage/ProductListingPage";
import Section from "../../components/section/Section";
import BuyBoxGallery from "../../components/BuyBox/BuyBoxGallery"; 
import BuyBox from "../../components/BuyBox/BuyBox";

import styled from "styled-components";

function ProductsPage() {

    const imagensProdutos = [
        { src: '/BuyBox-Sneakers1.png' },  
        { src: '/BuyBox-Sneakers2.png' },  
        { src: '/BuyBox-Sneakers3.png' }, 
        { src: '/BuyBox-Sneakers4.png' },  
        { src: '/BuyBox-Sneakers5.png' },  
    ];

    const product = {
        name: 'Tênis Nike Revolution 6 Next Nature Masculino',
        description: 'Casual | Nike | REF:38416711',
        stars: ['/Stars.png'],
        rating: ['/4.7star.png'],
        reviewsCount: '90',
        discountPrice: '219,00',
        price: '219,00',
        productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        sizes: ['39', '40', '41', '42', '43'],
        colors: ['azul', 'rosa', 'black', 'roxa']
    };

    const ProductCard = [
        {
            image: "/product-thumb-1.png",
            type: "Tênis",
            name: "K-Swiss V8 - Masculino",
            price: 200,
            priceDiscount: 50,
            hasDiscountTag: true,
        },
        {
            image: "/product-thumb-1.png",
            type: "Tênis",
            name: "K-Swiss V8 - Masculino",
            price: 200,
            priceDiscount: 50,
            hasDiscountTag: true,
        },
        {
            image: "/product-thumb-1.png",
            type: "Tênis",
            name: "K-Swiss V8 - Masculino",
            price: 200,
            priceDiscount: 50,
            hasDiscountTag: false,
        },
        {
            image: "/product-thumb-1.png",
            type: "Tênis",
            name: "K-Swiss V8 - Masculino",
            price: 200,
            priceDiscount: 50,
            hasDiscountTag: false,
        },
    ];

    const PageContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 90vw;
        margin: auto;
    `;

    const ItemProduto = styled.div`
        display: flex;
        margin-bottom: 80px;
        gap: 40px;
    `;

    
    const Paginas = styled.p`
        font-size: 14px;
        color: var(--dark-gray-2);
        margin-top: 30px;
        margin-left: 110px; 
        margin-bottom: 30px ;
        font-family: 'Inter', sans-serif;
    `;

    return (
        <PageContainer>
            
            <Paginas>Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</Paginas>

            <ItemProduto>
                <BuyBoxGallery images={imagensProdutos} /> 
                <BuyBox
                    name={product.name}
                    description={product.description}
                    stars={product.stars}
                    rating={product.rating}
                    reviewsCount={product.reviewsCount}
                    discountPrice={product.discountPrice}
                    price={product.price}
                    productDescription={product.productDescription}
                    sizes={product.sizes}
                    colors={product.colors}
                />
            </ItemProduto>

            <Section title={'Produtos relacionados'} link={{ text: 'ver todos', href: '/produtos' }}>
                <ProductListingPage products={ProductCard} />
            </Section>
        </PageContainer>
    );
}

export default ProductsPage;
