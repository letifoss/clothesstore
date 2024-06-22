import React from "react";
import Productos from '../componentes/Productos';

// Importa las imágenes que necesites
import Buzoblanco from '../imagenes/mujeres/buzoblanco.jpg';
import Buzoceleste from '../imagenes/mujeres/buzoceleste.jpg';
import Canguronegro from '../imagenes/mujeres/canguronegro.jpg';
import Deportivogris from '../imagenes/mujeres/deportivogris.jpg';
import Pantalonnegro from '../imagenes/mujeres/pantalonnegro.jpeg';
import Pantalonrojo from '../imagenes/mujeres/pantalonrojo.jpeg';
import Buzoazul from '../imagenes/hombres/buzoazul.jpg';
import Buzoverde from '../imagenes/hombres/buzoverde.jpg';

function Hombres({ addToCart }) {
    const productos = [
        { id: 7, imagen: Buzoazul, nombre: 'Buzo azul para hombre', precio: '35 USD' },
        { id: 8, imagen: Buzoverde, nombre: 'Buzo verde para hombre', precio: '37 USD' },
    ];

    return (
        <section className='d-flex flex-column align-items-center'>
            <h3 className="text-center mt-5">Conozca todos nuestros productos</h3>
            <div className='seccionproductos d-flex flex-wrap justify-content-center align-items-center'>
                {productos.map(producto => (
                    <Productos key={producto.id} producto={producto} addToCart={addToCart} />
                ))}
            </div>
        </section>
    );
}

export default Hombres;
