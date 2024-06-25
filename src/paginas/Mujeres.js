import React from "react";
import Productos from '../componentes/Productos';

// Importa las imágenes que necesites
import Buzoblanco from '../imagenes/mujeres/buzoblanco.jpg';
import Buzoceleste from '../imagenes/mujeres/buzoceleste.jpg';
import Canguronegro from '../imagenes/mujeres/canguronegro.jpg';
import Deportivogris from '../imagenes/mujeres/deportivogris.jpg';
import Pantalonnegro from '../imagenes/mujeres/pantalonnegro.jpeg';
import Pantalonrojo from '../imagenes/mujeres/pantalonrojo.jpeg';


function Mujeres({ addToCart }) {
    const productos = [
        { id: 1, imagen: Buzoblanco, nombre: 'Buzo blanco para mujer', precio: '20 USD' },
        { id: 2, imagen: Buzoceleste, nombre: 'Buzo azul para mujer', precio: '30 USD' },
        { id: 3, imagen: Canguronegro, nombre: 'Canguro negro para mujer', precio: '42 USD' },
        { id: 4, imagen: Deportivogris, nombre: 'Pantalón deportivo gris para mujer', precio: '25 USD' },
        { id: 5, imagen: Pantalonnegro, nombre: 'Pantalón negro para mujer', precio: '30 USD' },
        { id: 6, imagen: Pantalonrojo, nombre: 'Pantalón rojo para mujer', precio: '30 USD' },
    ];

    return (
        <section className='d-flex flex-column align-items-center'>
            <h3 className="text-center mt-5">Mujeres</h3>
            <div className='seccionproductos d-flex flex-wrap justify-content-center align-items-center'>
                {productos.map(producto => (
                    <Productos key={producto.id} producto={producto} addToCart={addToCart} />
                ))}
            </div>
        </section>
    );
}

export default Mujeres;
