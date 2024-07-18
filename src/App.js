import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Menu from './componentes/Menu';
import Footer from './componentes/Footer';
import Inicio from './paginas/Inicio';
import Cart from './componentes/Cart'; 
import './App.css';
import './styles/Menu.css';


import Mujeres from './paginas/Mujeres';
import Hombres from './paginas/Hombres';
import Ofertas from './paginas/Ofertas';
import Contacto from './paginas/Contacto';

function App() {
  const [cart, setCart] = useState([]);

  // agregar un producto al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // remover un producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };


  return (
    <div className="App">
      <Router>
        <Menu cartLength={cart.length}/>
        <Routes>
          <Route path="/" element={<Inicio addToCart={addToCart} />} />
          <Route path="/mujeres" element={<Mujeres addToCart={addToCart} />} />
          <Route path="/hombres" element={<Hombres addToCart={addToCart}/>} />
          <Route path="/ofertas" element={<Ofertas addToCart={addToCart}/>} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
