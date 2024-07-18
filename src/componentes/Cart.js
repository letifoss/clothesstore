import React, { useState } from 'react';
import '../styles/Cart.css'

function Cart({ cart, removeFromCart }) {
    const totalPrice = cart.reduce((total, product) => total + parseFloat(product.precio.replace('$', '')), 0);

    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [dir, setDir] = useState('');
    const [city, setCity] = useState('');

    const buildWhatsAppLink = () => {
        const baseURL = "https://wa.me/+59894451482"; 
        const message = cart.map(item => `${item.nombre} - ${item.precio}`).join("%0A");
        return `${baseURL}?text=Hola,%20mi%20nombre%20es%20${encodeURIComponent(name)}.%0ADirección%20de%20envío:%20${encodeURIComponent(dir)},%20${encodeURIComponent(city)}.%0ANúmero%20de%20contacto:%20${encodeURIComponent(tel)}.%0AHe%20elegido%20estos%20productos:%0A${message}.`;
    };

    const handleSendToWhatsApp = (e) => {
        e.preventDefault(); // Prevent form from submitting
        const whatsappLink = buildWhatsAppLink();
        window.open(whatsappLink, '_blank');
    };

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
                <div className="cart-summary d-flex flex-column align-items-center justify-content-center mt-2">
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                    <h6 className='mb-2'>Completá tus datos para continuar con el pedido</h6>
                    <form className=" d-flex flex-column align-items-center mb-3 mt-2" onSubmit={handleSendToWhatsApp}>
                        <div>
                            <input type="text" id="name" placeholder="Nombre completo" className='p-1 m-1' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <input type="tel" id="tel" placeholder="Número de contacto"  className='p-1 m-1' value={tel} onChange={(e) => setTel(e.target.value)} />
                        </div>
                        <div>
                            <input type="text" id="dir" placeholder="Dirección de envío*" className='p-1 m-1' value={dir} onChange={(e) => setDir(e.target.value)} />
                        </div>
                        <div>
                            <input type="text" id="city" placeholder="Barrio/Ciudad*"  className='p-1 m-1' value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <p>*No completar en caso de retiro en el local</p>
                        <button type="submit">Enviar pedido vía Whatsapp</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Cart;
