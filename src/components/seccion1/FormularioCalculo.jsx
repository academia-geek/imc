import React from 'react'

function FormularioCalculo(props) {
    console.log(props);
    let {
        nombres
    } = props;
    let htmlLi = "";
    nombres.forEach((nombre) => {
        htmlLi += `<li>${nombre}</li>`; 
    });
    console.log(htmlLi);
    return (
        <div className="column">
            <label htmlFor="peso">Peso (kilos)</label>
            {props.html}
            <input type="number" name="peso" id="peso" className="caja_texto"/>
            <br/>
            <label htmlFor="">Altura (cm)</label>
            <input type="number" name="altura" id="altura" className="caja_texto"/>
            <ul id="lista">
            {nombres.map((nombre,index) => {
                return <li key={index}>{nombre}</li>
            })}
            </ul>
        </div>
    )
}

export default FormularioCalculo
