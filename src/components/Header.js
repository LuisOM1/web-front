import React from 'react';
import '../css/header.css';
import  logo from  '../img/logo.png';




//Componente de clase Header
class Header extends React.Component {
   
    render(){      
      return    <div>
                    <div className="head-superior">
                    <div className="container-left">
                    <ul>
                        <li>
                        <i className="far fa-envelope-open" aria-hidden="true"></i> contacto@gps.com
                        </li>
                        <li> 
                        <i className="fab fa-whatsapp" aria-hidden="true"></i> +51 970 951 302
                        </li>
                        <li> 
                        <i className="fas fa-phone" aria-hidden="true"></i> (01) 730 4000
                        </li>
                    </ul>
                    </div>
                    <div className="container-right">
                    <div className="info">
                        <ul>
                        <li> <i className="far fa-clock"></i> Atención: 9:00 AM – 7:00 PM
                        </li>
                        <li> 
                            <a href="https://www.facebook.com/SKIESGPS" target="_blank" className=" icon icon--facebook"> 
                                <i className="fab fa-facebook-f"></i> 
                            </a>
                        </li>
                        <li> 
                            <a href="https://www.instagram.com/gps_skies" target="_blank" className="icon icon--instagram"> 
                                <i className="fab fa-instagram"></i> 
                            </a>
                        </li>
                        <li> 
                            <a href="https://twitter.com/gps_skies" target="_blank" className="icon icon--twitter">
                            <i className="fab fa-twitter"></i> 
                            </a>
                        </li>
                        </ul>
                    </div>            
                    </div>
                </div>


                <header>
                    <div id="head-inferior">
                        <a href="#" id="logo">
                        <img src={logo} alt="" />
                        </a>

                        <nav>
                        <a href="#" id="menu-icon">
                            <i className="fa fa-bars"></i>
                        </a>
                        <ul>
                            <li>
                            <a href="#"> INICIO </a>
                            </li>
                            <li>
                            <a href="#"> NOSOTROS</a>
                            </li>
                            <li>
                            <a href="#"> PRECIOS</a>
                            </li>
                            <li>
                            <a href="#"> CONTACTO</a>
                            </li>
                            <li>
                            <a href="#" id="btningresar">INGRESAR</a></li>
                        </ul>
                        </nav>
                    </div>
                    </header>



                </div>
  
    }
  
  }


  export default Header;