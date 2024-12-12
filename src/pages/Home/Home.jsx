import React from "react";
import Gallery from "../../componets/Gallery/Gallery";
import Section from "../../componets/section/Section";
import ProductOptions from "../../componets/ProductOptions/ProductOptions";
import CollectionIcon from "../../componets/collectionIcon/collectionIcon";
import ProductListingPage from "../../componets/ProductListingPage/ProductListingPage";
import Promotion from "../../componets/Promotion/Promotion";



const Home = () => {
    return ( 
      <>
        <Gallery />
        <Section title="Coleções em destaque" >
          <ProductOptions />
        </Section>
        <Section title="Coleções em destaque" titleAlign ="center">
           <CollectionIcon/>
        </Section>
        <Section title="Produtos em alta" link={{ href: "/produtos", text: "Ver todos", }}>
          <ProductListingPage/>
        </Section>
       <Promotion/>        
      </>
    );
}

export default Home;
