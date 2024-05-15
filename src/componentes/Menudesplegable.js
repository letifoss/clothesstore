import React from "react";
import '../styles/Menu.css';
import logo from '../imagenes/logoropa.png'
import { useState } from "react";


function Menudesplegable() {
    const [desplegar, setDesplegar] = useState(false);

    const desplegarMenu = () => {
        setDesplegar(!desplegar);
    };

    return (
        <div className="d-flex justify-content-center">
            <button onClick={desplegarMenu} className={!desplegar ? 'botonmenu' : 'd-none'  }>Ver menú</button>
            {desplegar && (
                <nav className="menu">
                    <img src={logo} width={50} alt="Logo" />
                    <a href="">Mujeres</a>
                    <a href="">Hombres</a>
                    <a href="">Jeans</a>
                    <a href="">Ofertas</a>

                    <button className="botonmenu ocultar" onClick={desplegarMenu}>Ocultar menú</button>
                </nav>
            )}
        </div>
    );
}

export default Menudesplegable;