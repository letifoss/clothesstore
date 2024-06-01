import React from "react";
import '../styles/Menu.css';
import logo from '../imagenes/logoropa.png'
import { useState } from "react";
import { Link } from "react-router-dom";


function Menudesplegable() {
    const [desplegar, setDesplegar] = useState(false);

    const desplegarMenu = () => {
        setDesplegar(!desplegar);
    };

    return (
        <div className="d-flex justify-content-center">
            <button onClick={desplegarMenu} className={!desplegar ? 'botonmenu d-flex justify-content-center align-items-center' : 'd-none'  }>Ver menú</button>
            {desplegar && (
                <nav className="menu">
                    <img src={logo} width={50} alt="Logo" />
                    <Link to="/inicio">Inicio</Link>
                    <Link to="/mujeres">Mujeres</Link>
                    <Link to="/hombres">Hombres</Link>
                    <Link to="/ofertas">Ofertas</Link>
                    <Link to="/contacto">Contacto</Link>

                    <button className="botonmenu" onClick={desplegarMenu}>Ocultar menú</button>
                </nav>
            )}
        </div>
    );
}

export default Menudesplegable;