import React from 'react';
import '../css/ventajas.css';
import Cardsv from './Cardsv';



//Componente funcional Ventajas
function Ventajas (){
    const cardsv = [
        { id:1, icono:'fas fa-pencil-ruler', titulo:'DISEÑO CREATIVO', parrafo:'Plataforma  con la mejor interfaz para el usuario.'},
        { id:2, icono:'fas fa-file', titulo:'REPORTES COMPLETOS', parrafo:'Consulta reportes en HTML o en archivo Excel en todo momento.'},
        { id:3, icono:'fas fa-laptop', titulo:'RESPUESTA ONLINE', parrafo:'Realiza tus consultas desde cualquier parte del mundo.'},
        { id:4, icono:'fas fa-clock', titulo:'TIEMPO REAL', parrafo:'La plataforma realiza transmisiones en tiempo real por segundos.'},
        { id:5, icono:'fas fa-check-square', titulo:'FISCALIZADOS', parrafo:'Homologados y autorizados por el MTC y SUTRAN.'},
        { id:6, icono:'fas fa-tachometer-alt', titulo:'CONTROL DE VELOCIDAD', parrafo:'Controla la velocidad de todas tus unidades.'},
        { id:7, icono:'fas fa-toggle-on', titulo:'APAGADO DE MOTOR', parrafo:'Podrás apagar tu(s) unidad(es) desde cualquier lugar donde te encuentres.'},
        { id:8, icono:'fas fa-map-marked-alt', titulo:'GEOZONAS', parrafo:'Podrás delimitar una zona geográfica para gestionar la circulación de su vehículo y alertar si sale de la geozona.'},
        { id:9, icono:'fas fa-bell', titulo:'ALERTAS', parrafo:'Notificaciones de alertas mediante whatsapp.'},
        { id:10, icono:'fas fa-mobile-alt', titulo:'RASTREO DE CELULARES', parrafo:'Te brindamos la mejor herramienta de rastreo en dispositivos moviles.'},
        { id:11, icono:'fas fa-headset', titulo:'SOPORTE 24/7', parrafo:'Resolveremos tus consultas las 24 horas del día, los 7 días a la semana.'},
        { id:12, icono:'fas fa-lock', titulo:'RESPALDO DE DATOS', parrafo:'En Skies, tus datos estarán seguros y respaldados por el equipo altamente calificado.'}
      ]
     
      return (  <div className='ventajas'>
                    <div className='ventajas_container'>
                        <div className='ventajas_title'>
                            <h2>Ventajas del Sistema</h2>
                        </div>

                        <div className='ventajas_cards'>
                            {  cardsv.map(card => (
                                <div className='cardv' key={card.id}>
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