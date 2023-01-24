import Wsp from './Wsp';
import Header from './Header';
import Footer from './Footer';
import Contacto from './Contacto';
import GoTop from './GoTop';
import SliderNav from './SliderNav';

function Contact() {
  return (
    <div>
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