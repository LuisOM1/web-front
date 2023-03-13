import Wsp from './Wsp';
import Header from './Header';
import Footer from './Footer';
import Contacto from './Contacto';
import GoTop from './GoTop';
import SliderNav from './SliderNav';
import AnimationScroll from './AnimationScroll';
import HeaderHiden from './HeaderHiden';
import React, {useState, useEffect} from 'react';
import Loading from './Loading';


function Contact() {
  const [loading, setLoading] = useState(false);

  const mostrarCarga = ()=>{
    setLoading(true);
    setTimeout(()=>{
    setLoading(false);
    }, 1000);
  }

  useEffect (()=> {
    mostrarCarga();
  },[])

  return (
    <div>
      { loading ? <Loading/>:
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
      }
    </div>
  );
}

export default Contact;