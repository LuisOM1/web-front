import Wsp from './Wsp';
import Header from './Header';
import Footer from './Footer';
import GoTop from './GoTop';
import Precios from './Precios';
import SliderNav from './SliderNav';
import AnimationScroll from './AnimationScroll';
import HeaderHiden from './HeaderHiden';
import Loading from './Loading';
import React, {useState, useEffect} from 'react';

function Prices() {
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