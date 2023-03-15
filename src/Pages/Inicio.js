import Wsp from '../Sections/Wsp';
import Header from '../Sections/Header';
import Slider from '../Sections/Slider';
import Nosotros from '../Sections/Nosotros';
import Precios from '../Sections/Precios';
import Footer from '../Sections/Footer';
import Contacto from '../Sections/Contacto';
import Ventajas from '../Sections/Ventajas';
import Clientes from '../Sections/Clientes';
import GoTop from '../Functions/GoTop';
import AnimationScroll from '../Functions/AnimationScroll';
import HeaderHiden from '../Functions/HeaderHiden';
import Loading from '../Sections/Loading';
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