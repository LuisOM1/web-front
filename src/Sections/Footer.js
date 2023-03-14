import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';
import '../css/animacion.css';
import  logo from  '../img/logo.png';
import {isMobile} from '../Functions/isMobile';


//Componente funcional Footer
function Footer() {
   //Para que me redirija directamente al QR de Watsapp en web
    var url_message = 'http://';
    url_message += isMobile() ? 'api' : 'web';
    url_message += `.whatsapp.com/send?phone=+51902534606&text=Hola, me gustaría solicitar demo del sistema`;
    
    
      return(   <div className="footer" >
                    <div className='footer_sup'>
                        <div className="footer_container">
                            <Link to={`/web-front`} className="footer_logo" target="_self">
                                <img src={logo} className="footer_logoimg mostrar4s" alt="GPS Skies" />
                            </Link>
                        
                            <div className="footer_links">    
                                <div className="footer_list">
                                    <div className="link">
                                        <Link to={`/web-front`} className="link_content"> Inicio </Link>
                                    </div>
                                
                                    <div className="link">
                                        <Link to={`/about`}  className="link_content"> Nosotros</Link>
                                    </div>
                                
                                    <div className="link">
                                        <Link to={`/prices`}  className="link_content"> Precios</Link>
                                    </div>

                                    <div className="link">
                                        <Link to={`/contact`}  className="link_content"> Contacto</Link>
                                    </div>

                                    <div className="link">
                                        <a href={url_message} target='_blank' className="link_content" 
                                        rel="noreferrer"> Solicitar Demo
                                        </a>
                                    </div>
                                
                                    <div className="link">
                                        <a className="link_content" target="_blank" href="https://goo.gl/maps/aUsKaTiJv9i8gpH66" rel="noreferrer">
                                            Mapa del Sitio
                                        </a>
                                    </div>
                                
                                    <div className="link">
                                        <a href="tel:+51902534606" className="link_content" target="_blank" rel="noreferrer">
                                            Llámanos (01) 730-4000
                                        </a>
                                    </div>
                                </div>

                              
                                <div className='footer_horario'>
                                    <p><span className="horario_title" > Horario:</span> <span className='horario_text'>Lunes-Viernes: 9:00 am - 7:00 pm<br></br> 
                                    Domingos: 9:00 am - 7:00 pm</span></p>
                                </div>
                        
                            </div>
                        
                        
                        
                            <div className="footer_social">
                        
                                <div className="footer_sociallinks">
                                    <a href="https://www.facebook.com/SKIESGPS" target="_blank" aria-label="Facebook" title="Facebook" rel="noreferrer">
                                        <i aria-hidden="true" title="Facebook" className="fab fa-facebook-f"></i>
                                    </a>
                        
                                    <a href="https://www.instagram.com/gps_skies" target="_blank"  aria-label="Twitter" title="Instagram" rel="noreferrer">
                                        <i aria-hidden="true" title="Instagram" className="fab fa-instagram"></i>
                                    </a>
                        
                                    <a href="https://twitter.com/gps_skies" target="_blank"  aria-label="Instagram" title="Twitter" rel="noreferrer">
                                        <i aria-hidden="true" title="Twitter" className="fab fa-twitter"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='footer_f'>
                        <div className="footer_derechos">
                            <p className="footer_copyright">© 2022 GPS SKIES. All rights reserved.</p>
                        </div>
                    </div>

                </div>
  
      )
  
  }


  export default Footer;