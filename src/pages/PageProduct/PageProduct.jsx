import React from 'react';

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
      };
      .row-opt5 {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap; 
    

      }

      .col-3 {
        flex: 1 1 25%; 
      }

      .col-9 {
        flex: 1 1 75%; 
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: end;
      

      }

     
      .product-listing-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }

  
    `;

 
  
    return (  
            <PageProduct>
              <div className='corBg'>
                <div className='row'>
                  <FilterOrdenate/>
                </div>
                <div className='row-opt5'>
                 <div className='col-3'>
                  <FilterBy/>
                 </div>
                 <div className='col-9' >
                 <div className="product-listing-container">
                  <ProductListingPage products={Produtos}/>
                </div>

                 </div>
                </div>
              </div>
            </PageProduct>
    );
}

export default PageProduct;
