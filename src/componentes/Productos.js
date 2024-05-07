import React from "react";
import '../styles/Productos.css';


function Productos (props) {
    return (
        <div>
            <div className="productos mw-100">
            <a className="producto d-flex flex-column align-items-center justify-content-center overflow-hidden text-center">
                <img src={props.imagen} alt={props.nombre} width={150} height={180} className="mt-3" />
                <h5>{props.nombre}</h5>
                <p className="border border-dark rounded p-1">{props.precio}</p>
            </a>
            </div>
        </div>
    )
}

export default Productos;