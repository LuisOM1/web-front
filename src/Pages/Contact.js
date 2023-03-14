import Wsp from '../Sections/Wsp';
import Header from '../Sections/Header';
import Footer from '../Sections/Footer';
import Contacto from '../Sections/Contacto';
import GoTop from '../Functions/GoTop';
import SliderNav from '../Sections/SliderNav';
import AnimationScroll from '../Functions/AnimationScroll';
import HeaderHiden from '../Functions/HeaderHiden';
import React, {useState, useEffect} from 'react';
import Loading from '../Sections/Loading';


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