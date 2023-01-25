import React from 'react';
import '../css/nosotros.css';
import  img_real from  '../img/img_real.jpg';
import  img_nosotros from  '../img/img_nosotros.jpg';
import { Link } from 'react-router-dom';



//Componente de clase Nosotros
class Nosotros extends React.Component {

    render(){
      return    <div className="section-nosotros">
                    <div className="divborder">
                        <div className="column-left-nos">
                        <div className="div-imgs">
                            <img id="img-nos1"  src={img_real} alt="" /> 
                            <img id="img-nos2" src={img_nosotros} alt="" />
                        </div>
                        </div>
                    
                        <div className="column-right-nos">
                        <div className="text-nosotros">
                            <h2>Mas de 10 años brindando el mejor servicio</h2>
                            <div className="textp">Desde hace 12 años venimos trabajando para ofrecerte un servicio 
                            transparente y de calidad acorde a las nuevas necesidades y a la evolución de la 
                            tecnología. Nuestros servicios marcan la diferencia, y nuestros clientes nos 
                            recomiendan.
                            </div>
                            <ul className="list-nosotros">
                                <li>
                                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                                    Somos líderes en el rastreo satelital.
                                </li>
                                <li>
                                    <i className="fa fa-check-circle " aria-hidden="true"></i>
                                    Tenemos precios según tu necesidad.
                                </li>
                                <li>
                                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                                    Te brindamos un servicio diferenciado.
                                </li>
                            </ul>

                            <Link to={`/about`} > 
                            <div className="button-info-nos">
                                ¿Quieres saber mas de nosotros? 
                                <span className="icon fas fa-angle-double-right"></span>
                            </div>
                            </Link>
                            
                        </div>
                        </div>
                    </div>
                    </div>
  
    }
  
  }


  export default Nosotros;