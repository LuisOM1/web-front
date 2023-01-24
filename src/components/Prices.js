import Wsp from './Wsp';
import Header from './Header';
import Footer from './Footer';
import GoTop from './GoTop';
import Precios from './Precios';
import SliderNav from './SliderNav';

function Prices() {
  return (
    <div>
      < Wsp />
      < Header />
      < SliderNav  titleSliderNav="Precios"/>
      < Precios />
      < Footer/>
      < GoTop />
    </div>
  );
}

export default Prices;