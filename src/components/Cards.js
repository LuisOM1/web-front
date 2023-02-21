import '../css/cards.css';


//Componente funcional Cards
function Cards ({nivel, precio, tiempo, iconx}){

  //Para que me redirija directamente al QR de Watsapp en web
  const isMobile = function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
    return true;
    return false;
  };

  const sendPlanWsp = () => {
    var urlPlan_message = 'http://';
    urlPlan_message += isMobile() ? 'api' : 'web';
    urlPlan_message += `.whatsapp.com/send?phone=+51902534606&text=Hola, me gustaría solicitar un plan ${nivel} - ${tiempo}`;
    window.open(urlPlan_message);
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
          <button onClick={sendPlanWsp}>Seleccionar</button>
        </div>
        
      </div>
              

    );
  
  }


  export default Cards;