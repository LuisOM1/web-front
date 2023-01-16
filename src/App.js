import './App.css';
import Wsp from './components/Wsp';
import Header from './components/Header';
import Slider from './components/Slider';
import Nosotros from './components/Nosotros';
import Precios from './components/Precios';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Ventajas from './components/Ventajas';
import Clientes from './components/Clientes';


function App() {
  return (
    <div>
      < Wsp />
      < Header />
      < Slider />
      < Nosotros />
      < Ventajas />
      < Precios/>
      < Contact />
      < Clientes />
      
      < Footer/>
    </div>
  );
}

export default App;
