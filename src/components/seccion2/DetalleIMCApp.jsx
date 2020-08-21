import React,{Component} from 'react';

export default class DetalleIMCApp extends Component{
    // {nombre:"Oscar", apellido: "Mesa", edad: 29}
    
    constructor(props){
        console.log(props);
        super(props);
        this.nombre = "oscar mesa";
    }

    render(){
        return (<section>
                    <h1>Detalle</h1>
                    <button onClick={function(){
                        alert("Hola")
                    }}>Saludar!!!</button>
                </section>
        );
    }
}