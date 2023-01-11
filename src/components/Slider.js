import React from 'react';
import '../css/slider.css';




//Componente de clase Slider
class Slider extends React.Component {
   
    render(){
      return    <div className="slider"> 
                    <div className="slider_container">
                        
                        <div className="slider_container_left">
                            <div className="slider_text">
                                <h2>Facturación Electrónica</h2><br/>
                                <p> Plataforma de gestión de ventas, compras e inventarios utilizada
                                    por <strong>miles de empresas</strong> en todo el <strong>Perú</strong>
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
                                <form action="/#guardarform" method="post" className="" novalidate="novalidate" data-status="init">
                        
                                <div className="resto-form">
                                    <div className="col">
                                        <div className="form-group">
                                            <span className="input-control-wrap">
                                                <input type="text" name="nombre" value="" size="40" className="input-form-control" 
                                                id="nombre" aria-required="true" aria-invalid="false" placeholder="Nombre*" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <span className="input-control-wrap">
                                                <input type="text" name="ruc" value="" size="40" className="input-form-control" 
                                                id="ruc" aria-required="true" aria-invalid="false" placeholder="RUC*" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <span className="input-control-wrap">
                                                <input type="text" name="telefono" value="" size="40" className="input-form-control"
                                                id="telefono" aria-required="true" aria-invalid="false" placeholder="Teléfono*" />
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



  
    }
  
  }


  export default Slider;