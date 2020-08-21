import React from 'react'
import FormularioCalculo from './FormularioCalculo';
import VerCalculo from './VerCalculoIMC';
import BasculaIMC from './BasculaIMC';
export default function cuerpocalculo() {
    return (
        <section className="panel-block">
            <article className="columns is-mobile">
                <FormularioCalculo nombres={["oscar", "cristian", "sebastian", "monica", "andrea"]} html={<input type="number"/>}/>
                <VerCalculo altura={15} peso={89}/>
                <BasculaIMC/>
            </article>
        </section>
    )
}