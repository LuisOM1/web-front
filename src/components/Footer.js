import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';
import  logo from  '../img/logo.png';



//Componente de clase Footer
class Footer extends React.Component {
   
    render(){
      return    <div className="footer" >
                    <div className='footer_sup'>
                        <div className="footer_container">
                            <Link to={`/web-front`} className="footer_logo" target="_self">
                                <img src={logo} className="footer_logoimg " alt="GPS Skies" />
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
                                        <a className="link_content" target="_self" href=" ">
                                            Solicitar Demo
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
                                    <p className='horario_text'><span className="horario_title" > Horario:</span>Lunes-Viernes: 9:00 am - 7:00 pm<br></br> 
                                    Domingos: 9:00 am - 7:00 pm</p>
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
  
    }
  
  }


  export default Footer;