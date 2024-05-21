import React from 'react';
import '../styles/Menu.css';
import logo from '../imagenes/logoropa.png'
import { useState } from 'react';
import Menudesplegable from './Menudesplegable';
import { Link } from 'react-router-dom';



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
                    <Link to="/inicio">Inicio</Link>
                    <Link to="/mujeres">Mujeres</Link>
                    <Link to="/hombres">Hombres</Link>
                    <Link to="/ofertas">Ofertas</Link>
                </nav>
                <div className="alerta d-flex align-items-center">
                    <p>Envío gratis en compras de más de $100</p>
                </div>
            </>
        );
    }
}

export default Menu;
