import React from "react"
import styled from "styled-components"

function FilterGroup({ title, options, typeIpn }) {
    const FilterGroup = styled.div`
    display: flex;
    flex-direction: column;
    `;
    return (
        <div className="containerFilter">
            <div className="title-options">{title}</div>

            <div className="filter-itens d-flex flex-direction-column">
                {options.map(option => (
                    <div className="d-flex containerGroup">
                        <input type={typeIpn} value={options.value} name={typeIpn == 'radio' ? title : option.text} id={option.text} />
                        <label htmlFor="option.text">{option.text}</label>

                    </div>

                ))}
            </div>

        </div>
    )
}

export default FilterGroup