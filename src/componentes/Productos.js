import React from "react";
import '../styles/Productos.css';


function Productos (props) {


    return (
        <div>
            <div className="productos">
            <a className="producto d-flex flex-column align-items-center justify-content-center overflow-hidden text-center">
                <img src={props.imagen} alt={props.nombre} width={150} height={180} className="mt-3" />
                <h6>{props.nombre}</h6>
                <p className="border border-dark rounded p-1">{props.precio}</p>
                <button className="p-1 mb-3">Agregar al carrito 🛒 </button>
            </a>
            </div>
        </div>
    )
}

export default Productos;