import Wsp from './Wsp';
import Header from './Header';
import Slider from './Slider';
import Nosotros from './Nosotros';
import Precios from './Precios';
import Footer from './Footer';
import Contacto from './Contacto';
import Ventajas from './Ventajas';
import Clientes from './Clientes';
import GoTop from './GoTop';
import AnimationScroll from './AnimationScroll';
import HeaderHiden from './HeaderHiden';
import Loading from './Loading';
import React, {useState, useEffect} from 'react';

function Inicio() {
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