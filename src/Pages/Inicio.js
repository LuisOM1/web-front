import Wsp from '../Components/Wsp';
import Header from '../Components/Header';
import Slider from '../Components/Slider';
import Nosotros from '../Components/Nosotros';
import Precios from '../Components/Precios';
import Footer from '../Components/Footer';
import Contacto from '../Components/Contacto';
import Ventajas from '../Components/Ventajas';
import Clientes from '../Components/Clientes';
import GoTop from '../Functions/GoTop';
import AnimationScroll from '../Functions/AnimationScroll';
import HeaderHiden from '../Functions/HeaderHiden';
import Loading from '../Components/Loading';
import React, {useState, useEffect} from 'react';

function Inicio() {
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
          < AnimationScroll />
          < HeaderHiden />
          < Wsp />
          < Header />
          < Slider />
          < Nosotros />
          < Ventajas />
          < Clientes />
          < Precios/>
          < Contacto />
          
          < Footer/>
          < GoTop />
        </div>
      }
    </div>
  );
}

export default Inicio;