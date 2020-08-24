import React from 'react'
import PropTypes from 'prop-types'; 

function VerCalculoIMC(props) {
    let imc = Math.round(calcularIMC(props));
    return (
        <div className="column">
            <h3>IMC</h3>
            <h3>{imc}</h3>
        </div>
    )
}

function calcularIMC({peso,altura}){
    return peso / altura;
}

VerCalculoIMC.propTypes = {
    peso : PropTypes.number.isRequired,
    altura : PropTypes.number.isRequired
};

export default VerCalculoIMC
