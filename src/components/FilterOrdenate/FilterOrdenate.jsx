import "./FilterOrdenate.css"

function FilterOrdenate() {
    return (
        <>
            <div className="filterContainer">
                <div className="resultado">
                    <h4>
                        Resultados para "Tênis" - <span>389 produtos</span>
                    </h4>
                </div>

                <div className="ordem">
                    <form action="#">
                        <label htmlFor="ordenate">Odernar Por:</label>
                        <select id="ordanate">
                            <option value="relevantes">mais relevantes</option>
                            <option value="MaiorPreco">maior preço</option>
                            <option value="MenorPreco">menor preço</option>
                        </select>
                    </form>

                </div>

            </div>
        </>
    )
}

export default FilterOrdenate;