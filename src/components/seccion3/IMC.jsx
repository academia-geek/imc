import React, { Component } from 'react';
import FormularioCalculo from './FormularioCalculo';
import VerCalculo from './VerCalculoIMC';
class IMC extends Component {
    constructor(props){
        super(props);
        this.state = {
            peso : 0,
            altura : 0
        }
    }
    render() {
        return (
            <div>
                <FormularioCalculo 
                    nombres={["oscar", "cristian", "sebastian", "monica", "andrea"]} 
                    notas={{nota1:2,nota2:3,nota3:5}}
                    html={<input type="number"/>}
                    sumarNumeros={(n1,n2) => {
                        let suma = n1 + n2;
                        return suma;
                    }}
                    miCompontenVer = {miCompontenVer}
                    test = {this}
                    />
                <VerCalculo altura={this.state.altura} peso={this.state.peso}/>
            </div>
        );
    }
}

export default IMC;