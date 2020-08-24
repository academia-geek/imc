import React, { Component } from 'react'
import Tabla from './TablaIMC'
export default class CuerpoDetalleIMC extends Component {


    render() {
        return (
            <div className="columns is-mobile panel-block">
                <div className="column is-half is-offset-one-quarter">
                    <Tabla datosTabla={
                        {
                            cabecera: { cabecera1: "IMC", cabecera2: "Situación" },
                            data: [
                                { imc: "Menor de 18.5", situacion: "Bajo peso" },
                                { imc: "18.5 - 24.9", situacion: "Normopeso" },
                                { imc: "25 - 26.9", situacion: "Sobrepeso grado I" },
                                { imc: "27 - 29.9", situacion: "Sobrepeso grado II" },
                                { imc: "30 - 34.9", situacion: "Obesidad de tipo I" },
                                { imc: "35 - 39.9", situacion: "Obesidad de tipo II" },
                                { imc: "40 - 49.9", situacion: "Obesidad de tipo III (mórbida)" },
                                { imc: "Mayor a 50", situacion: "Obesidad de tipo IV (extrema)" },
                            ]
                        }
                    } />
                </div>
            </div>
        )
    }
}
