import React from 'react';
import '../styles/Menu.css';
import logo from '../imagenes/logoropa.png'


import { Link } from 'react-router-dom';


function Menu({ cartLength }) {
    return (
        <>
<nav className="navbar navbar-expand-sm bg-light">
    <a className="navbar-brand" href="/">
        <img src={logo} width={50} alt="Logo" />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/mujeres">Mujeres</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/hombres">Hombres</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/ofertas">Ofertas</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
        </ul>
        <div className="ml-auto mr-2 d-flex flex-row justify-content-center align-items-center">
                <div><Link className="cartmenu" to="/cart">🛒</Link></div>
                <div>{cartLength}</div>
                
        </div>
    </div>
</nav>

          <div className="alerta alert-warning d-flex align-items-center" role="alert">
            <p>Envío gratis en compras de más de $100</p>
          </div>
        </>
      );
    }


export default Menu;
