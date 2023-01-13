import React from 'react';
import '../css/ventajas.css';




//Componente funcional Cardsv
function Cardsv ({icono,titulo,parrafo}){
    const icono_style = { fontSize: '23px', color: 'white'};
     
      return (  
        
        <div className="cardv">
            <div className="cardv_center" >
                <div className="cardv_icono">
                    <div className='cardv_icono_circle'>
                        <i className={icono} style={icono_style}></i>
                    </div>
                </div>
                <div className="cardv_text">
                    <h3>{titulo}</h3>
                    <p>{parrafo}</p>
                </div>
            </div>
        </div>
  
      );
  
  }


  export default Cardsv;