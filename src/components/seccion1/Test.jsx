import React, { Component } from 'react'

export default class Test extends Component {
    
    saludar(){
        alert("Hola desde test");
    }

    render() {
        return (
            <div>
                la altura es {this.props.altura}
            </div>
        )
    }
}
