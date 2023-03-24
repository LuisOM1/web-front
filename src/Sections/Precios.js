import React, {useState}from 'react';
import Cards from '../Sections/Cards';
import '../css/precios.css';
import '../css/cards.css';
import '../css/animacion.css';



function Precios(){

  const cards_mensual = [
    { id:1, nivel:'Principiante', precio:'S/ 45.00', tiempo:'+IGV / Mensual', iconx:'fas fa-times', docs:'300 Documentos/mes'},
    { id:2, nivel:'Microempresa', precio:'S/ 55.00', tiempo:'+IGV / Mensual', iconx:'fas fa-check', docs:'500 Documentos/mes'},
    { id:3, nivel:'Emprendedor', precio:'S/ 69.00', tiempo:'+IGV / Mensual', iconx:'fas fa-check', docs:'1000 Documentos/mes'},
    { id:4, nivel:'Corporativo', precio:'S/ 89.00', tiempo:'+IGV / Mensual', iconx:'fas fa-check', docs:'+1000 Documentos/mes'}
  ]

  const cards_3m = [
    { id:1, nivel:'Principiante', precio:'S/ 135.00', tiempo:'+IGV / 03 Meses', iconx:'fas fa-times', docs:'300 Documentos/mes'},
    { id:2, nivel:'Microempresa', precio:'S/ 165.00', tiempo:'+IGV / 03 Meses', iconx:'fas fa-check', docs:'500 Documentos/mes'},
    { id:3, nivel:'Emprendedor', precio:'S/ 207.00', tiempo:'+IGV / 03 Meses', iconx:'fas fa-check', docs:'1000 Documentos/mes'},
    { id:4, nivel:'Corporativo', precio:'S/ 267.00', tiempo:'+IGV / 03 Meses', iconx:'fas fa-check', docs:'+1000 Documentos/mes'}
  ]

  const cards_6m = [
    { id:1, nivel:'Principiante', precio:'S/ 270.00', tiempo:'+IGV / 06 Meses', iconx:'fas fa-times', docs:'300 Documentos/mes'},
    { id:2, nivel:'Microempresa', precio:'S/ 330.00', tiempo:'+IGV / 06 Meses', iconx:'fas fa-check', docs:'500 Documentos/mes'},
    { id:3, nivel:'Emprendedor', precio:'S/ 414.00', tiempo:'+IGV / 06 Meses', iconx:'fas fa-check', docs:'1000 Documentos/mes'},
    { id:4, nivel:'Corporativo', precio:'S/ 534.00', tiempo:'+IGV / 06 Meses', iconx:'fas fa-check', docs:'+1000 Documentos/mes'}
  ]

  const cards_12m = [
    { id:1, nivel:'Principiante', precio:'S/ 495.00', tiempo:'+IGV / 12 Meses', iconx:'fas fa-times', docs:'300 Documentos/mes'},
    { id:2, nivel:'Microempresa', precio:'S/ 605.00', tiempo:'+IGV / 12 Meses', iconx:'fas fa-check', docs:'500 Documentos/mes'},
    { id:3, nivel:'Emprendedor', precio:'S/ 759.00', tiempo:'+IGV / 12 Meses', iconx:'fas fa-check', docs:'1000 Documentos/mes'},
    { id:4, nivel:'Corporativo', precio:'S/ 979.00', tiempo:'+IGV / 12 Meses', iconx:'fas fa-check', docs:'+1000 Documentos/mes'}
  ]

  

  const[activetab, setActivetab]= useState("1");
  const cambiartab = (numerotab) =>{
    if(activetab !== numerotab){
      setActivetab(numerotab);
    }
  }
  
  
    return(
  
            <div className='precios'>
              <div className='container_precios'>
              
                <div className='precios_head'>
                  <div className='precios_head_title'>
                    <h2>Nuestros Precios</h2>
                    <h3>Planes a tu medida</h3>
                  </div>
                </div>
                <div className='precios_options'>
                  <div className='precios_buttons arriba'> 
                    <button className={(activetab == "1" ? "activetab button": "button")} onClick={()=>cambiartab("1")} >MENSUAL</button> 
                    <button className={(activetab == "2" ? "activetab button": "button")} onClick={()=>cambiartab("2")} >03 MESES </button> 
                    <button className={(activetab == "3" ? "activetab button": "button")} onClick={()=>cambiartab("3")} >06 MESES </button> 
                    <button className={(activetab == "4" ? "activetab button": "button")} onClick={()=>cambiartab("4")} >ANUAL <label>DESCUENTO</label></button>
                  </div>
                </div>
    
                <div>
                  <div  className={activetab == 1 ? "contenttab  active-contenttab" : "contenttab"}>
                    <div className='precios_contents mostrar4s'>
                      {  cards_mensual.map(card => (
                          <div className='precios_cards' key={card.id}>
                            <Cards nivel={card.nivel} precio={card.precio} tiempo={card.tiempo} iconx={card.iconx} docs={card.docs} />
                          </div>
                          ))
                      } 
                    </div>
                  </div>
                  <div className={activetab == 2 ? "contenttab  active-contenttab" : "contenttab"}>
                    <div className='precios_contents'>
                      {  cards_3m.map(card => (
                          <div className='precios_cards' key={card.id}>
                            <Cards nivel={card.nivel} precio={card.precio} tiempo={card.tiempo} iconx={card.iconx} docs={card.docs} />
                          </div>
                          ))
                      } 
                    </div>
                  </div>
                  <div className={activetab == 3 ? "contenttab  active-contenttab" : "contenttab"}>
                    <div className='precios_contents'>
                      {  cards_6m.map(card => (
                          <div className='precios_cards' key={card.id}>
                            <Cards nivel={card.nivel} precio={card.precio} tiempo={card.tiempo} iconx={card.iconx} docs={card.docs} />
                          </div>
                          ))
                      } 
                    </div>
                  </div>
                  <div className={activetab == 4 ? "contenttab  active-contenttab" : "contenttab"}>
                    <div className='precios_contents'>
                      {  cards_12m.map(card => (
                          <div className='precios_cards' key={card.id}>
                            <Cards nivel={card.nivel} precio={card.precio} tiempo={card.tiempo} iconx={card.iconx} docs={card.docs} />
                          </div>
                          ))
                      } 
                    </div>
                  </div>
                </div>
                <div className='precios_notas'>
                  <div className='precios_notas_texto'>
                    <p>*** Promociones y descuentos válidos hasta agotar stock. Costo de configuración: S/ 80.00. ***</p>
                  </div>
                </div>
  
   
              </div>
            </div>
             
    );
  }

  export default Precios;