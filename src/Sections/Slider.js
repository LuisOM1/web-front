import React, {useState} from 'react';
import '../css/slider.css';
import {isMobile} from '../Functions/isMobile';
import  peru from  '../img/peru.svg';

//Componente funcional Slider
function Slider() {
   const [name, setName] = useState('');
   const [ruc, setRuc] = useState('');
   const [tel, setTel] = useState('');

   //Para que me redirija directamente al QR de Watsapp en web
    var msgForm = 'http://';
    msgForm += isMobile() ? 'api' : 'web';
    msgForm += `.whatsapp.com/send?phone=+51902534606&text=Hola, mi nombre es ${name} con numero de RUC: ${ruc}, teléfono: ${tel} y deseo mayor información del sistema`;
    

   function sendWsp(e){
        window.open(msgForm);
        e.preventDefault();
        setName('');
        setRuc('');
        setTel('');
    }

      return (    <div className="slider top"> 
                    <div className="slider_container">
                        
                        <div className="slider_container_left">
                            <div className="slider_text">
                                <h2>Facturación Electrónica</h2><br/>
                                <p> Plataforma de gestión de ventas, compras e inventarios utilizada
                                    por <strong>miles de empresas</strong> en todo el <strong>Perú</strong>
                                    <img alt="🇵🇪" src={peru}/>
                                </p>
                            </div>
                        </div>

                    
                        <div className="slider_container_right">
                        <div className="slider_form">

                            <div className="form-circle" >
                            <div className="headform">
                                <h4>¿Necesitas información?</h4>
                                <p> Ingresa tus datos y nos comunicaremos contigo</p>
                            </div>
                            
                            <div role="form" className="wpcf7" id="guardarform" lang="es-PE" dir="ltr">
                                
                                <form onSubmit={sendWsp}>
                                    <div className="resto-form">
                                        <div className="col">
                                            <div className="form-group">
                                                <span className="input-control-wrap">
                                                    <input type="text" name="nombre" size="40" className="input-form-control" 
                                                    id="nombre" aria-required="true" aria-invalid="false" placeholder="Nombre*" 
                                                    value={name} onChange={(e) => setName(e.target.value)} required/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <span className="input-control-wrap">
                                                    <input type="text" name="ruc" size="40" className="input-form-control" 
                                                    id="ruc" aria-required="true" aria-invalid="false" placeholder="RUC*" 
                                                    value={ruc} onChange={(e) => setRuc(e.target.value)} required/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <span className="input-control-wrap">
                                                    <input type="text" name="telefono" size="40" className="input-form-control"
                                                    id="telefono" aria-required="true" aria-invalid="false" placeholder="Teléfono*" 
                                                    value={tel} onChange={(e) => setTel(e.target.value)} required/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col"> 
                                        <button type="submit" name="submit">Solicitar Información</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>


   )
  
  }


  export default Slider;