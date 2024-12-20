import styled from "styled-components";
import FilterGroup from "./FilterGroup";
import "./FilterBy.css"

function FilterBy(){
       const opt1=[
        {text:"Adidas", },
        {text:"Balanciaga", },
        {text:"K-Swiss", },
        {text:"Nike", },
        {text:"Puma", }
       ];

       const opt2=[
        { text:"Esporte e Lazer"},
        { text:"Casual"},
        { text:"Utilitario"},
        { text:"Corrida"},
       ];

       const opt3=[
        { text: "Masculino"},
        { text: "Feminino"},
        { text: "Unisex"},
       ];

       const opt4=[
        { text: "Novo"},
        { text: "Usado"},
       ]


    return(
        <>
        <div className="bodyFilter">
            <h2>Filtra por</h2>
            <hr className="hrfilter"/>
            <div className="titleFilter">
             <FilterGroup title={"Marca"} typeIpn="checkBox" options={opt1}></FilterGroup>
             <FilterGroup title={"Categorias"} typeIpn="checkBox" options={opt2}></FilterGroup>
             <FilterGroup title={"Genero"} typeIpn="checkBox" options={opt3}></FilterGroup>
             <FilterGroup title={"Marca"} typeIpn="radio" options={opt4}></FilterGroup>

            </div>
        </div>
        </>
    )

}

export default FilterBy;