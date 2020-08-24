import React from 'react'
import PropTypes from 'prop-types'

class FormularioCalculo extends React.Component {

    // constructor(props){
    //     super(props);
    // }

    calcularIMC(e){
        let peso = document.querySelector("#peso").value;
        let altura = document.querySelector("#altura").value;
    }

    render() {

        return (
            <div className="column">
                <div className="field">
                    <label htmlFor="peso" className="label">Peso (kilos)</label>
                    <div className="control">
                        <input className="input caja_texto" type="number" name="peso" id="peso" placeholder="Peso" />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="altura" className="label">Altura (cm)</label>
                    <div className="control">
                        <input className="input caja_texto" type="number" name="altura" id="altura" placeholder="Altura" />
                    </div>
                </div>


                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" onClick={this.calcularIMC}>Calcular</button>
                    </div>
                </div>
            </div>
        )
    }
}
FormularioCalculo.propTypes = {
    html: PropTypes.element.isRequired,
    nombres: PropTypes.array.isRequired,
    notas: PropTypes.object.isRequired,
    sumarNumeros: PropTypes.func.isRequired,
    miCompontenVer: PropTypes.object
};

export default FormularioCalculo
