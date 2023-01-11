import React from 'react';
import '../css/footer.css';
import  logo_white from  '../img/logo_white.png';



//Componente de clase Footer
class Footer extends React.Component {
   
    render(){
      return    <div className="footer" >
                    <div className="footer_container">
                        <a href="index.html" className="footer_logo " target="_self">
                            <img src={logo_white} className="footer_logoimg " alt="GPS Skies" />
                        </a>
                    
                        <div className="footer_links">    
                            <div className="footer_list">
                                <div className="link">
                                    <a itemprop="url" className="link_content" target="_self" href=" ">
                                        Seguridad
                                    </a>
                                </div>
                            
                                <div className="link">
                                    <a itemprop="url" className="link_content " target="_self" href=" ">
                                        Aviso Legal
                                    </a>
                                </div>
                            
                                <div className="link">
                                    <a itemprop="url" href=" " className="link_content " target="_blank" title="Cláusulas Generales de Contratación" >
                                        Cláusulas Generales de Contratación
                                    </a>
                                </div>
                            
                                <div className="link">
                                    <a itemprop="url" className="link_content" target="_self" href=" ">
                                        Mapa del Sitio
                                    </a>
                                </div>
                            
                                <div className="link">
                                    <a itemprop="url" className="link_content" target="_self" href=" ">
                                        Libro de Reclamaciones
                                    </a>
                                </div>
                            
                                <div className="link">
                                    <a itemprop="url" href="tel:015950000" className="link_content" target="_self">
                                        Llámanos (01) 595-0000
                                    </a>
                                </div>
                            </div>
                        </div>
                    
                    
                    
                        <div className="footer_social">
                    
                            <div className="footer_sociallinks">
                                <a href="https://www.facebook.com/SKIESGPS" target="_blank" aria-label="Facebook" title="Facebook">
                                    <i aria-hidden="true" title="Facebook" className="fab fa-facebook-f"></i>
                                </a>
                    
                                <a href="https://www.instagram.com/gps_skies" target="_blank"  aria-label="Twitter" title="Twitter">
                                    <i aria-hidden="true" title="Twitter" className="fab fa-instagram"></i>
                                </a>
                    
                                <a href="https://twitter.com/gps_skies" target="_blank"  aria-label="Instagram" title="Instagram">
                                    <i aria-hidden="true" title="Instagram" className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    
                    
                        <div className="footer_derechos">
                            <p className="footer_copyright">© 2022 GPS SKIES. All rights reserved.</p>
                        </div>
                    </div>
                    </div>
  
    }
  
  }


  export default Footer;