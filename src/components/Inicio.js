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
import AnimationScroll from './AnimationScroll';

function Inicio() {
  return (
    <div>
      < AnimationScroll />
      < Wsp />
      < Header />
      < Slider />
      < Nosotros />
      < Ventajas />
      < Clientes />
      < Precios/>
      < Contacto />
      
      < Footer/>
      < GoTop />
    </div>
  );
}

export default Inicio;