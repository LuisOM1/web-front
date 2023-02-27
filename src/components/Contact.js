import Wsp from './Wsp';
import Header from './Header';
import Footer from './Footer';
import Contacto from './Contacto';
import GoTop from './GoTop';
import SliderNav from './SliderNav';
import AnimationScroll from './AnimationScroll';

function Contact() {
  return (
    <div>
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