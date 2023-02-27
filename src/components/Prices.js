import Wsp from './Wsp';
import Header from './Header';
import Footer from './Footer';
import GoTop from './GoTop';
import Precios from './Precios';
import SliderNav from './SliderNav';
import AnimationScroll from './AnimationScroll';

function Prices() {
  return (
    <div>
      < AnimationScroll />
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