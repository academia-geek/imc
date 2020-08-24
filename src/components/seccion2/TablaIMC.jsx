import React, { Component } from 'react';

class TablaIMC extends Component {
    render() {
        let {
            cabecera,
            data
        } = this.props.datosTabla;
        return (
            <div className="table-container">
                <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <thead>
                    <tr>
                        <th>{cabecera.cabecera1}</th>
                        <th>{cabecera.cabecera2}</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                        data.map((fila, i) => {
                            return (<tr key={i}>
                                <td>{fila.imc}</td>
                                <td>{fila.situacion}</td>
                            </tr>)
                        })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TablaIMC;