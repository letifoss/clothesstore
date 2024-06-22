import React, { useState } from "react";
import '../styles/Productos.css';

function Productos({ producto, addToCart }) {
    const { id, imagen, nombre, precio } = producto;
    const [agregado, setAgregado] = useState(false);

    const handleAddToCart = () => {
        addToCart(producto);
        setAgregado(true); 
    };

    return (
        <div className="productos">
            <div className="producto d-flex flex-column align-items-center justify-content-center overflow-hidden text-center">
                <img src={imagen} alt={nombre} width={150} height={180} className="mt-3" />
                <h6>{nombre}</h6>
                <p className="border border-dark rounded p-1">{precio}</p>
                <button className="p-1 mb-3" onClick={handleAddToCart} disabled={agregado}>
                    {agregado ? 'Agregado al carrito ✔️' : 'Agregar al carrito 🛒'}
                </button>
            </div>
        </div>
    );
}

export default Productos;
