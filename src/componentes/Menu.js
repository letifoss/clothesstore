import React from 'react';
import '../styles/Menu.css';
import logo from '../imagenes/logoropa.png'

function Menu () {
    return(
    <>
    <nav class="menu">
        <img src={logo} width={50} />
        <a href="">Mujeres</a>
        <a href="">Hombres</a>
        <a href="">Jeans</a>
        <a href="">Ofertas</a>
    </nav>
    <div class="alerta d-flex align-items-center">
        <p>Envío gratis en compras de más de $ 100 </p>
    </div>
    </>
    )
}

export default Menu;