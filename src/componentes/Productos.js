import React, { useState } from "react";
import '../styles/Productos.css';


function Productos({ producto, addToCart }) {
    const { id, imagen, nombre, precio } = producto;
    const [agregado, setAgregado] = useState(false);


    const [alerta, setAlerta] = useState(false);
        
    const handleAddToCart = () => {
        addToCart(producto);
        setAgregado(true); 
        setAlerta(true);
        setTimeout(() => {
            setAlerta(false);
        }, 1500);
    };

    const [tamañoproducto, setTamañoProducto] = useState(false);
    const ampliarproducto = () => {
        setTamañoProducto(!tamañoproducto)
    }

    return (
        <div onClick={ampliarproducto} className={`producto ${tamañoproducto ? 'productoampliado' : ''} d-flex flex-column align-items-center justify-content-center overflow-hidden text-center position-relative`}>
            <img src={imagen} alt={nombre} width={150} height={180} className="mt-1 productoimg" />
            <h6>{nombre}</h6>
            <p className="border border-dark rounded p-1">{precio}</p>
            <button className="p-1 mb-3" onClick={handleAddToCart}>
                Agregar al carrito 🛒
            </button>
            {alerta && (
                <div className="alert alert-success position-absolute" role="alert">
                    ¡Agregado al carrito!
                </div>
            )}
        </div>
    );
};

export default Productos;
