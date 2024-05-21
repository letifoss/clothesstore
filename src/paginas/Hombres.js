import React from "react";

//imagenes categoria hombres//
import Buzoazul from '../imagenes/hombres/buzoazul.jpg';
import Buzoverde from '../imagenes/hombres/buzoverde.jpg';

import Productos from "../componentes/Productos";

import '../styles/Productos.css';

function Hombres(){
    return(
        <section className='d-flex flex-column align-items-center'>
        <h3 className="text-center mt-5 mb-4">Hombres</h3>
          <div className='seccionproductos d-flex flex-wrap align-items-center'>
          <Productos 
          imagen={Buzoazul}
          nombre='Buzo azul para hombre'
          precio='35 USD'
          />
          <Productos 
          imagen={Buzoverde}
          nombre='Buzo verde para hombre'
          precio='37 USD'
          />
          </div>
        </section>
    )

}

export default Hombres;