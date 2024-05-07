import './App.css';
import Menu from './componentes/Menu';
import Footer from './componentes/Footer';
import Productos from './componentes/Productos';

// imagenes categoria mujeres //
import Buzoblanco from './imagenes/mujeres/buzoblanco.jpg';
import Buzoceleste from './imagenes/mujeres/buzoceleste.jpg';
import Canguronegro from './imagenes/mujeres/canguronegro.jpg';
import Deportivogris from './imagenes/mujeres/deportivogris.jpg';
import Pantalonnegro from './imagenes/mujeres/pantalonnegro.jpeg';
import Pantalonrojo from './imagenes/mujeres/pantalonrojo.jpeg';

//imagenes categoria hombres//

import Buzoazul from './imagenes/hombres/buzoazul.jpg';
import Buzoverde from './imagenes/hombres/buzoverde.jpg';


function App() {
  return (
    <div className="App">
      <header>
        <Menu />
      </header>
      <section>
      <h3 className="text-center mt-5">Conozca todos nuestros productos</h3>
        <div className='d-flex flex-wrap  justify-content-center justify-content-lg-start align-items-center ml-5'>
        <Productos 
        imagen={Buzoblanco}
        nombre='Buzo blanco para mujer'
        precio='20 USD'
        />
        <Productos 
        imagen={Buzoceleste}
        nombre='Buzo azul para mujer'
        precio='30 USD'
        />
        <Productos 
        imagen={Canguronegro}
        nombre='Canguro negro para mujer'
        precio='42 USD'
        />
        <Productos 
        imagen={Deportivogris}
        nombre='Pantalon deportivo gris para mujer'
        precio='25 USD'
        />
        <Productos 
        imagen={Pantalonnegro}
        nombre='Pantalon negro para mujer'
        precio='30 USD'
        />
        <Productos 
        imagen={Pantalonrojo}
        nombre='Pantalon rojo para mujer'
        precio='30 USD'
        />
        <Productos 
        imagen={Buzoazul}
        nombre='Buzo azul para hombre'
        precio='35 USD'
        />
        <Productos 
        imagen={Buzoverde}
        nombre='Buzo verde para hombre'
        precio='37 USD'
        />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
