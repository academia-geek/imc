import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import Componente1 from './components/seccion3/CalculadorApp'
import Componente2 from './components/seccion2/DetalleIMCApp'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Componente1/>
    <Componente2 nombre = "oscar" apellido = "mesa" edad = {29}/>
  </React.StrictMode>,
  document.getElementById('main')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
