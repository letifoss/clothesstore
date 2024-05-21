import React, { useState, useEffect } from 'react';

import '../App.css';
import '../styles/Cotizacionapi.css'

const Cotizacionapi = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cotizaciones-brou-v2-e449.fly.dev/currency/latest');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRates(data.rates);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='d-flex justify-content-center'>
    <div className='cotizacion'>
      <h4 className='text-center'>Cotización al dia de hoy</h4>
      <ul>
        {Object.keys(rates).map((currency) => (
          <li key={currency}>
            <strong>{currency}</strong>: Venta - {rates[currency].buy}, Compra - {rates[currency].sell}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Cotizacionapi;
