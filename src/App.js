import './App.css';
import Menu from './componentes/Menu';
import Footer from './componentes/Footer';
import Inicio from './paginas/Inicio';
import Mujeres from './paginas/Mujeres';
import Hombres from './paginas/Hombres';
import Ofertas from './paginas/Ofertas';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <Menu />
      </header>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/mujeres" element={<Mujeres /> } />
        <Route path="/hombres" element={<Hombres />} />
        <Route path="/ofertas" element={<Ofertas />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
      </Router>
    </div>
  );
}

export default App;
