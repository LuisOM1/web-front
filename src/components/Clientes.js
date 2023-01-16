import React from 'react';
import '../css/clientes.css';
import  cosmos from  '../img/clientes/cosmos.png';
import  doil from  '../img/clientes/doil.png';
import  etours from  '../img/clientes/etours.png';
import  tjomax from  '../img/clientes/tjomax.png';
import  ucv from  '../img/clientes/ucv.png';

//Componente funcional Clientes
function Clientes (){
    
     
      return (  
        
        <div className='clientes'>
            <div className='clientes_container'>
                <div className='clientes_title'>
                    <h2>Nuestros clientes nos respaldan.</h2>
                </div>
                
                
                <div className='clientes_sponsors'>      
                    <ul>
                        <li><img src={cosmos} alt=" " ></img></li>
                        <li><img src={doil} alt=" " ></img></li>
                        <li><img src={etours} alt=" " ></img></li>
                        <li><img src={tjomax} alt=" " ></img></li>
                        <li><img src={ucv} alt=" " ></img></li>
                    </ul>

                </div>
            </div>

        </div>
  
      );
  
  }


  export default Clientes;