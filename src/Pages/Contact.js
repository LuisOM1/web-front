import Wsp from '../Components/Wsp';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Contacto from '../Components/Contacto';
import GoTop from '../Functions/GoTop';
import SliderNav from '../Components/SliderNav';
import AnimationScroll from '../Functions/AnimationScroll';
import HeaderHiden from '../Functions/HeaderHiden';
import React, {useState, useEffect} from 'react';
import Loading from '../Components/Loading';


function Contact() {
  const [loading, setLoading] = useState(true);

  const mostrarCarga = ()=>{
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