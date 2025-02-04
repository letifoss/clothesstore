import React, { useState } from "react";
import '../styles/Productos.css';

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from "axios";


function Productos({ producto, addToCart }) {
    const [preferenceId, setPreferenceId] = useState(null);
    initMercadoPago('APP_USR-60223253-0ccc-4320-b5b9-b935227bb9f1', {
        language: 'es-AR',
    });
    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:3000/create_preference", {
                title: {nombre},
                quantity: 1,
                price: {precio},
            });
        const {id} = response.data;
        return id;
        } catch (error) {
            console.error(error);
        }

};

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        }
    }

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
        <div id = "productos" onClick={ampliarproducto} className={`producto d-flex flex-column align-items-center justify-content-center overflow-hidden text-center position-relative`}>
            <img src={imagen} alt={nombre} width={150} height={180} className="mt-1 productoimg" />
            <h6>{nombre}</h6>
            <p className="border border-dark rounded p-1">{precio}</p>
            <button className="p-1 mb-3" onClick={handleBuy}>
                Comprar 🛒
            </button>
            {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} /> }
            {alerta && (
                <div className="alert alert-success position-absolute" role="alert">
                    ¡Agregado al carrito!
                </div>
            )}

        </div>
    );
};

export default Productos;
