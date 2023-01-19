import React from 'react';
import '../css/cards.css';


//Componente de clase Cards
class Cards extends React.Component {
    state ={
      nivel: this.props.nivel,
      precio: this.props.precio,
      tiempo: this.props.tiempo
    }
   
    render(){
      return    <div>
                  <div className='precios_card_head'>
                    <h5>{this.state.nivel}</h5>
                  </div>
                  <div className='precios_card_precio'>
                    <h2>{this.state.precio}</h2>
                    <span>{this.state.tiempo}</span>
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
                    <button>Seleccionar</button>
                  </div>
                </div>
                
  
    }
  
  }


  export default Cards;