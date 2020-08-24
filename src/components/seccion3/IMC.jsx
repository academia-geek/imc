import React, { Component } from 'react';
import FormularioCalculo from './FormularioCalculo';
import VerCalculo from './VerCalculoIMC';
class IMC extends Component {
    constructor(props){
        super(props);
        this.state = {
            peso : 0,
            altura : 1,
            contador : 0
        }
    }

    incrementar = () => this.setState({contador:this.state.contador+1})

    render() {
        return (
            <>
                <p>Valor del contador : {this.state.contador}</p>
                <button onClick={this.incrementar}>incrementar</button>
                <FormularioCalculo C_IMC = {this} />
                <VerCalculo altura={this.state.altura} peso={this.state.peso}/>
            </>
        );
    }
}

export default IMC;