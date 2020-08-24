import React from 'react'
import PropTypes from 'prop-types'; 

function VerCalculoIMC(props) {
    let imc = calcularIMC(props).toFixed(2);
    return (
        <div className="column">
            <h3>IMC</h3>
            <h3>{imc}</h3>
        </div>
    )
}

function calcularIMC({peso,altura}){
    return peso / Math.pow(altura,2);
}

VerCalculoIMC.propTypes = {
    peso : PropTypes.number.isRequired,
    altura : PropTypes.number.isRequired
};

export default VerCalculoIMC
