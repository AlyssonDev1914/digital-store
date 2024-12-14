import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductListingPage from "../../components/ProductListingPage/ProductListingPage";
import FilterBy from "../../components/FilterGroup/FilterBy";
import FilterOrdenate from "../../components/FilterOrdenate/FilterOrdenate";

function PageProduct () {
    let Produtos=[
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
          hasDiscountTag: true,
        },
        {
          image: "/product-thumb-1.png",
          type: "Tênis",
          name: "K-Swiss V8 - Masculino",
          price: 200,
          priceDiscount: 50,
          hasDiscountTag:false,
        },
        {
          image: "/product-thumb-1.png",
          type: "Tênis",
          name: "K-Swiss V8 - Masculino",
          price: 200,
          priceDiscount: 50,
          hasDiscountTag:false,
        },
        {
          image: "/product-thumb-1.png",
          type: "Tênis",
          name: "K-Swiss V8 - Masculino",
          price: 200,
          priceDiscount: 50, 
          hasDiscountTag:false,
        },
        {
          image: "/product-thumb-1.png",
          type: "Tênis",
          name: "K-Swiss V8 - Masculino",
          price: 200,
          priceDiscount: 50,
          hasDiscountTag:false, 
        },
        {
          image: "/product-thumb-1.png",
          type: "Tênis",
          name: "K-Swiss V8 - Masculino",
          price: 200,
          priceDiscount: 50,
          hasDiscountTag:false, 
        },
        {
          image: "/product-thumb-1.png",
          type: "Tênis",
          name: "K-Swiss V8 - Masculino",
          price: 200,
          priceDiscount: 50,
          hasDiscountTag:false, 
        },
        {
          image: "/product-thumb-1.png",
          type: "Tênis",
          name: "K-Swiss V8 - Masculino",
          price: 200,
          priceDiscount: 50,
          hasDiscountTag:false, 
        },
        {
          image: "/product-thumb-1.png",
          type: "Tênis",
          name: "K-Swiss V8 - Masculino",
          price: 149.9,
          priceDiscount: 50,
          hasDiscountTag:false, 
        },
        {
          image: "/product-thumb-1.png",
          type: "Tênis",
          name: "K-Swiss V8 - Masculino",
          price: 149.9,
          priceDiscount: 50,
          hasDiscountTag:false, 
        },
      ];
  
    const PageProduct = styled.div`
      background-color: var(--light-gray-3);
      .corBg {
        width: 90vw;
        margin: auto;
        padding-top: 40px;
      }
    `;
  
    const PageContent = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start; 
      gap: 20px;
      .filter-container {
        flex: 1; 
      }
      .products-container {
        flex: 3; 
      }
    `;
  
    return (  
      <PageProduct>
        <div className="corBg">
          <FilterOrdenate />
          <PageContent>
            <div className="filter-container">
              <FilterBy />
            </div>
            <div className="products-container">
              <ProductListingPage products={Produtos} />
            </div>
          </PageContent>
        </div>
      </PageProduct>
    );
}

export default PageProduct;
