import React from 'react'
import PropTypes from 'prop-types'

class FormularioCalculo extends React.Component{

    // constructor(props){
    //     super(props);
    // }

    render() {

        return (
            <div className="column">
                <div className="field">
                    <label htmlFor="peso">Peso (kilos)</label>
                    <input type="number" name="peso" id="peso" className="caja_texto"/>
                </div>
                <div class="field">
                    <label htmlFor="">Altura (cm)</label>
                    <input type="number" name="altura" id="altura" className="caja_texto"/>
                </div>
            </div>
        )
    }
}
FormularioCalculo.propTypes = {
    html : PropTypes.element.isRequired,
    nombres : PropTypes.array.isRequired,
    notas : PropTypes.object.isRequired,
    sumarNumeros : PropTypes.func.isRequired,
    miCompontenVer:PropTypes.object
};

export default FormularioCalculo
