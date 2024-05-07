import React from "react";
import '../styles/Footer.css';
import logo from '../imagenes/logoropa.png'

function Footer(){
    return(
    <footer class="footer">
        <div class="seccion logo">
            <img src={logo} alt="logo" width={200} />
        </div>
        <div class="seccion">
            <h3>Quiénes somos</h3>
            <a href="">Acerca de nuestra empresa</a>
            <a href="">Nuestros equipo</a>
            <a href="">Únete a nosotros!</a>
            <a href="" className="font-weight-bold text-dark">Volver al inicio</a>
        </div>
        <div class="seccion">
            <h3>Ayuda</h3>
            <a href="">Ayuda al cliente</a>
            <a href="">Pedidos</a>
            <a href="">Envíos</a>
            <a href="">Devoluciones</a>
        </div>
        <div></div>
    </footer>
    )
}

export default Footer;