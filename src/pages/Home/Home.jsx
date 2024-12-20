import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import Section from "../../components/section/Section";
import ProductOptions from "../../components/ProductOptions/ProductOptions";
import CollectionIcon from "../../components/collectionIcon/CollectionIcon";
import ProductListingPage from "../../components/ProductListingPage/ProductListingPage";
import Promotion from "../../components/Promotion/Promotion";
import styled from "styled-components";

const Home = () => {

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
      price: 149.9,
      priceDiscount: 50,
      hasDiscountTag: false,
    },
  ];

  const ContainerHome = styled.div`
      display: flex;
      align-content: center;
      flex-direction: column;
      justify-content: center;
      background-color: var(--light-gray-3);
      .produtosDestaqueImg{
        margin-bottom: 100px;
      }
      `;


  return (
    <ContainerHome>
      <Gallery />
      <Section title="Coleções em destaque">
        <ProductOptions />
      </Section>
      <Section title="Coleções em destaque" titleAlign="center">
        <CollectionIcon />
      </Section>
      <Section title="Produtos em alta" link={{ href: "/produtos", text: "Ver todos" }}>
        <ProductListingPage products={ProductCard} />
      </Section>
      <Promotion />
    </ContainerHome>
  );
};

export default Home;
