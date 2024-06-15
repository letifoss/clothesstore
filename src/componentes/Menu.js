import React from 'react';
import '../styles/Menu.css';
import logo from '../imagenes/logoropa.png'
import { useState } from 'react';
import Menudesplegable from './Menudesplegable';
import { Link } from 'react-router-dom';




function Menu() {
    return (
        <>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
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
            </div>
          </nav>
          <div className="alerta alert-warning d-flex align-items-center" role="alert">
            <p>Envío gratis en compras de más de $100</p>
          </div>
        </>
      );
    }


export default Menu;
