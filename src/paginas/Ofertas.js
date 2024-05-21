import React from "react";
import Productos from "../componentes/Productos";
import '../App.css';
import '../styles/Productos.css'

// imagenes categoria mujeres //

import Buzoceleste from '../imagenes/mujeres/buzoceleste.jpg';
import Canguronegro from '../imagenes/mujeres/canguronegro.jpg';
import Pantalonnegro from '../imagenes/mujeres/pantalonnegro.jpeg';


//imagenes categoria hombres//

import Buzoverde from '../imagenes/hombres/buzoverde.jpg';

function inicio(){
    return(
        <section className='d-flex flex-column align-items-center'>
        <h3 className="text-center mt-5 mb-4">OFERTAS</h3>
        <h6 className="mb-4 text-center">Los productos que se muestran a continuación tienen un 40% OFF pagando contado</h6>
          <div className='seccionproductos d-flex flex-wrap justify-content-center align-items-center'>
          <Productos 
          imagen={Canguronegro}
          nombre='Canguro negro para mujer'
          precio='42 USD' 
          />
          <Productos 
          imagen={Buzoceleste}
          nombre='Buzo azul para mujer'
          precio='30 USD'
          />
          <Productos 
          imagen={Buzoverde}
          nombre='Buzo verde para hombre'
          precio='37 USD'
          />
          <Productos 
          imagen={Pantalonnegro}
          nombre='Pantalon negro para mujer'
          precio='30 USD'
          />
          </div>
        </section>
    )

}

export default inicio;