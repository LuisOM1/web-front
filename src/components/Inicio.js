import Wsp from './Wsp';
import Header from './Header';
import Slider from './Slider';
import Nosotros from './Nosotros';
import Precios from './Precios';
import Footer from './Footer';
import Contacto from './Contacto';
import Ventajas from './Ventajas';
import Clientes from './Clientes';
import GoTop from './GoTop';

function Inicio() {
  return (
    <div>
      < Wsp />
      < Header />
      < Slider />
      < Nosotros />
      < Ventajas />
      < Precios/>
      < Contacto />
      < Clientes />
      
      < Footer/>
      < GoTop />
    </div>
  );
}

export default Inicio;