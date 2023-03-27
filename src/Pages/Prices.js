import Wsp from '../Components/Wsp';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import GoTop from '../Functions/GoTop';
import Precios from '../Components/Precios';
import SliderNav from '../Components/SliderNav';
import AnimationScroll from '../Functions/AnimationScroll';
import HeaderHiden from '../Functions/HeaderHiden';
import Loading from '../Components/Loading';
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