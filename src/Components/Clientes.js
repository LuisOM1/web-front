import React from 'react';
import '../css/clientes.css';
import  cosmos from  '../img/clientes/cosmos.png';
import  doil from  '../img/clientes/doil.png';
import  etours from  '../img/clientes/etours.png';
import  tjomax from  '../img/clientes/tjomax.png';
import  ucv from  '../img/clientes/ucv.png';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

//Componente funcional Clientes
function Clientes (){
    const responsive = {
        0: { items: 1 },
        450: { items: 2 },
        750: { items: 3 },
        1070: { items: 4 },
        1250: { items: 5 },
    };
    
    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img src={cosmos} onDragStart={handleDragStart} role="presentation" alt=''/>,
        <img src={doil} onDragStart={handleDragStart} role="presentation" alt=''/>,
        <img src={etours} onDragStart={handleDragStart} role="presentation" alt=''/>,
        <img src={tjomax} onDragStart={handleDragStart} role="presentation" alt=''/>,
        <img src={ucv} onDragStart={handleDragStart} role="presentation" alt=''/>,
    ];
      return (  
        
        <div className='clientes'>
            <div className='clientes_container'>
                <div className='clientes_title'>
                    <h2>Nuestros clientes nos respaldan</h2>
                </div>
                <div className='clientes_sponsors'>      
                    <AliceCarousel
                        infinite
                        autoPlay={true}
                        autoPlayInterval={2000}
                        disableButtonsControls={true}
                        disableDotsControls={true}
                        mouseTracking
                        items={items}
                        responsive={responsive}
                    />
                </div>
                
            </div>
        </div>
  
      );
  
  }


  export default Clientes;