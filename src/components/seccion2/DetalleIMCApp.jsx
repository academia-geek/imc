import React,{Component} from 'react';

export default class DetalleIMCApp extends Component{
    // {nombre:"Oscar", apellido: "Mesa", edad: 29}
    constructor(props){
        console.log(props);
        super(props);
        this.state = {
            numero : 10,
            edad : props.edad
        }
        this.sumar = this.sumar.bind(this);
    }

    sumar(e){
        this.setState({numero : this.state.numero + 1})
    }

    render(){
        console.log("Entro y numero vale "+this.state.numero)
        return (<section>
                    <h1>Detalle</h1>
                    <button onClick={this.sumar}>Sumar</button>
                    <input type="text"/>
                    <p>Numero = {this.state.numero}</p>
                </section>
        );
    }
}