import Wsp from '../Sections/Wsp';
import Header from '../Sections/Header';
import Footer from '../Sections/Footer';
import GoTop from '../Functions/GoTop';
import Precios from '../Sections/Precios';
import SliderNav from '../Sections/SliderNav';
import AnimationScroll from '../Functions/AnimationScroll';
import HeaderHiden from '../Functions/HeaderHiden';
import Loading from '../Sections/Loading';
import React, {useState, useEffect} from 'react';



function Prices() {
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
        < SliderNav  titleSliderNav="Precios"/>
        < Precios />
        < Footer/>
        < GoTop />
      </div>
    }
    </div>
  );
}

export default Prices;