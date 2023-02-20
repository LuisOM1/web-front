import React, {useState} from 'react';
import '../css/cards.css';
import '../css/modal.css';
import Wsp from './Wsp';

//Componente funcional Cards
function Cards ({nivel, precio, tiempo, iconx}){

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  
  // Para que no se pueda hacer scroll con el modal abierto
  if (isOpen){
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  
      return (  

          <div>
            <div className='precios_card_head'>
              <h5>{nivel}</h5>
            </div>
            <div className='precios_card_precio'>
              <h2>{precio}</h2>
              <span>{tiempo}</span>
            </div>
            <div className='precios_card_items'>
              <ul>
                <li> <i className='fas fa-check'></i> 300 Documentos/mes </li>
                <li> <i className='fas fa-check'></i> 02 Establecimientos </li>
                <li> <i className='fas fa-check'></i> 02 Almacenes</li>
                <li> <i className='fas fa-check'></i> 04 Usuarios</li>
                <li> <i className='fas fa-check'></i> 5,000 Productos</li>
                <li> <i className='fas fa-check'></i> Certificado digital</li>
                <li> <i className='fas fa-check'></i> Todos los módulos</li>
                <li> <i className='fas fa-check'></i> Web, Android, IOS</li>
                <li> <i className={iconx}></i> Videotutoriales</li>
                <li> <i className={iconx}></i> Asesoría personalizada</li>
                <li> <i className={iconx}></i> Soporte personalizado</li>
              </ul>
            </div>

            <div className='precios_card_boton' >
              <button onClick={openModal}>Seleccionar</button>
            </div>

            { isOpen &&(
                <Wsp/>
            )}
            
          </div>
                
  
      );
  
  }


  export default Cards;