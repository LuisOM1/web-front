import React, {useState} from 'react';
import '../css/cards.css';
import '../css/modal.css';


//Componente funcional Cards
function Cards ({nivel, precio, tiempo}){

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
                <li> <i className='fas fa-check'></i> Videotutoriales</li>
                <li> <i className='fas fa-check'></i> Asesoría personalizada</li>
                <li> <i className='fas fa-check'></i> Soporte personalizado</li>
              </ul>
            </div>

            <div className='precios_card_boton' >
              <button onClick={openModal}>Seleccionar</button>
            </div>

            { isOpen &&(
              <div className='modal'>
                <div className='modal_container'>
                  <button onClick={closeModal} className="btnclose">×</button>
                  <form>
                    <div className="col-lg-12">
                      <h3>Contacta un asesor</h3> 
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <span>
                          <input type="text" name="nombre" size="40" id="nombre" aria-required="true" aria-invalid="false" placeholder="Nombre*"></input>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <span>
                          <input type="text" name="ruc" size="40" id="ruc" aria-required="true" aria-invalid="false" placeholder="RUC*"></input>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <span>
                          <input type="text" name="telefono" size="40" id="telefono" aria-required="true" aria-invalid="false" placeholder="Teléfono*"></input>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button className="btncontactar" type="submit" name="submit">Contactar</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            
          </div>
                
  
      );
  
  }


  export default Cards;