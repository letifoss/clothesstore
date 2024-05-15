import React from 'react';
import '../styles/Menu.css';
import logo from '../imagenes/logoropa.png'
import { useState } from 'react';
import Menudesplegable from './Menudesplegable';



function Menu() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    if (windowWidth < 425) {
        return (
            <>
                <Menudesplegable />
                <div className="alerta d-flex align-items-center">
                    <p>Envío gratis en compras de más de $100</p>
                </div>
            </>
        );
    } else {
        return (
            <>
                <nav className="menu">
                    <img src={logo} width={50} alt="Logo" />
                    <a href="">Mujeres</a>
                    <a href="">Hombres</a>
                    <a href="">Jeans</a>
                    <a href="">Ofertas</a>
                </nav>
                <div className="alerta d-flex align-items-center">
                    <p>Envío gratis en compras de más de $100</p>
                </div>
            </>
        );
    }
}

export default Menu;
