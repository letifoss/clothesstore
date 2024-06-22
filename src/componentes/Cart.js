import React from 'react';
import '../styles/Cart.css'


function Cart({ cart, removeFromCart }) {
    const totalPrice = cart.reduce((total, product) => total + parseFloat(product.precio.replace('$', '')), 0);

    return (
        <div className="cart">
            <h3>Carrito de Compras</h3>
            <div className="cart-items">
                {cart.length === 0 ? (
                    <p>Todavía no tienes productos en el carrito.</p>
                ) : (
                    cart.map(product => (
                        <div key={product.id} className="cart-item">
                            <img src={product.imagen} alt={product.nombre} />
                            <div className="item-info">
                                <h4>{product.nombre}</h4>
                                <p>Precio: {product.precio}</p>
                                <button onClick={() => removeFromCart(product.id)}>Quitar</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {cart.length > 0 && (
                <div className="cart-summary d-flex flex-column align-items-center justify-content-center mt-4">
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                    <button>Proceder al pago <i className=" p-2 bi bi-arrow-right-circle"> </i> </button>
                </div>
            )}
        </div>
    );
}

export default Cart;
