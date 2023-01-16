import React from "react";
import '../css/modal.css';

//Componente de clase Modalcontacta
class Modalcontacta extends React.Component {

    render(){
      return   <div className='modal'>
                <div className='modal_container'>
                  <form>
                    <div class="col-lg-12">
                      <h3>Contacta un asesor</h3>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <span class="wpcf7-form-control-wrap nombre">
                          <input type="text" name="nombre" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" id="nombre" aria-required="true" aria-invalid="false" placeholder="Nombre*"></input>
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <span class="wpcf7-form-control-wrap ruc">
                          <input type="text" name="ruc" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" id="ruc" aria-required="true" aria-invalid="false" placeholder="RUC*"></input>
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <span class="wpcf7-form-control-wrap telefono">
                          <input type="text" name="telefono" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" id="telefono" aria-required="true" aria-invalid="false" placeholder="Teléfono*"></input>
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <button className="btncontactar" type="submit" name="submit">Contactar</button>
                    </div>
                  </form>
                </div>
              </div>
  
    }
  
  }

export default Modalcontacta;
  