import Wsp from './Wsp';
import Header from './Header';
import Footer from './Footer';
import Contacto from './Contacto';
import GoTop from './GoTop';
import SliderNav from './SliderNav';
import AnimationScroll from './AnimationScroll';
import HeaderHiden from './HeaderHiden';

function Contact() {
  return (
    <div>
      < HeaderHiden />
      < AnimationScroll />
      < Wsp />
      < Header />
      < SliderNav titleSliderNav="Contáctanos"/>

      < Contacto />
      < Footer/>
      < GoTop />
    </div>
  );
}

export default Contact;