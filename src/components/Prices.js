import Wsp from './Wsp';
import Header from './Header';
import Footer from './Footer';
import GoTop from './GoTop';
import Precios from './Precios';
import SliderNav from './SliderNav';
import AnimationScroll from './AnimationScroll';
import HeaderHiden from './HeaderHiden';

function Prices() {
  return (
    <div>
      < HeaderHiden />
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