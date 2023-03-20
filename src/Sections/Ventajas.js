import React from 'react';
import '../css/ventajas.css';
import '../css/animacion.css';
import Cardsv from '../Sections/Cardsv';



//Componente funcional Ventajas
function Ventajas (){
    const cardsv = [
        { id:1, icono:'fas fa-pencil-ruler', titulo:'DISEÑO CREATIVO', parrafo:'Plataforma con la mejor interfaz para el usuario.'},
        { id:2, icono:'fa-solid fa-chart-pie', titulo:'REPORTES', parrafo:'Obtén reportes de tus ventas, compras, inventario y finanzas.'},
        { id:3, icono:'fa-solid fa-cart-shopping', titulo:'COMPRAS', parrafo:'Registra tus compras y genera tus órdenes de compra.'},
        { id:4, icono:'fas fa-clock', titulo:'TIEMPO REAL', parrafo:'La plataforma realiza los registros y emisiones en tiempo real por segundos.'},
        { id:5, icono:'fas fa-check-square', titulo:'AUTORIZADO', parrafo:'Plataforma autorizada por SUNAT.'},
        { id:6, icono:'fa-solid fa-shuffle', titulo:'ADAPTABLE', parrafo:'El sistema se personaliza de acuerdo a las necesidades de tu empresa.'},
        { id:7, icono:'fa-solid fa-truck-ramp-box', titulo:'INVENTARIO', parrafo:'Podrás registrar y controlar tu stock de productos.'},
        { id:8, icono:'fa-solid fa-gears', titulo:'AUTOMATIZADO', parrafo:'Registra, almacena y genera tus comprobantes de manera rápida y segura.'},
        { id:9, icono:'fa-solid fa-envelope-open-text', titulo:'FÁCIL ENVIO', parrafo:'Envia tus comprobantes por WhatsApp y correo.'},
        { id:10, icono:'fa-solid fa-receipt', titulo:'FACTURACIÓN', parrafo:'Emite boletas, facturas, notas de crédito, débito y guías de remisión.'},
        { id:11, icono:'fas fa-headset', titulo:'SOPORTE 24/7', parrafo:'Resolveremos tus consultas las 24 horas del día, los 7 días a la semana.'},
        { id:12, icono:'fas fa-lock', titulo:'RESPALDO DE DATOS', parrafo:'Tus datos estarán seguros y respaldados por el equipo altamente calificado.'}
      ]
     
      return (  <div className='ventajas'>
                    <div className='ventajas_container'>
                        <div className='ventajas_title'>
                            <h2 className='mostrar4s'>Ventajas del Sistema</h2>
                        </div>

                        <div className='ventajas_cards'>
                            {  cardsv.map(card => (
                                <div className='cardv izquierda' key={card.id}>
                                <Cardsv icono={card.icono} titulo={card.titulo} parrafo={card.parrafo} />
                                </div>
                                ))
                            } 
                        </div>

                    </div>
                </div>
                
  
      );
  
  }


  export default Ventajas;