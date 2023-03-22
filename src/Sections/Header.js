import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../css/header.css';
import  logo from  '../img/logo.png';
import {isMobile} from '../Functions/isMobile';


//Componente funcional Header
function Header(){
   const [menu, setMenu] = useState(false);

   const handleClick = () => setMenu(!menu);
   const closeMobileMenu = () => setMenu(false);

   //Para que me redirija directamente al QR de Watsapp en web
    var msg_solicitarDemo = 'http://';
    msg_solicitarDemo += isMobile() ? 'api' : 'web';
    msg_solicitarDemo += `.whatsapp.com/send?phone=+51902534606&text=Hola, me gustaría solicitar demo del sistema`;
    

    // Para que no se pueda hacer scroll con el menu movil abierto
    if (menu){
        document.body.classList.add('active-menum');
    } else {
        document.body.classList.remove('active-menum');
    }
         
    return  (   <div className='head'>
                    <div className="head-superior">
                        <div className='container_head-superior'>
                            <div className="container-left">
                                <ul>
                                    <li>
                                        <i className="far fa-envelope-open" aria-hidden="true"></i> ventas@facturaskies.com
                                    </li>
                                    <li> 
                                        <i className="fab fa-whatsapp" aria-hidden="true"></i> +51 970 951 302
                                    </li>
                                    <li> 
                                        <i className="fas fa-phone" aria-hidden="true"></i> +51 970 951 302
                                    </li>
                                </ul>
                            </div>

                            <div className="container-right">
                                <ul>
                                    <li className='headersup_horario'> 
                                        <i className="far fa-clock"></i> Atención: 9:00 AM – 7:00 PM
                                    </li>
                                    <li className='headersup_social'> 
                                        <a href="https://www.facebook.com/SKIESGPS" target="_blank" className=" icon icon--facebook" rel="noreferrer"> 
                                            <i className="fab fa-facebook-f"></i> 
                                        </a>
                                    </li>
                                    <li className='headersup_social'> 
                                        <a href="https://www.instagram.com/gps_skies" target="_blank" className="icon icon--instagram" rel="noreferrer"> 
                                            <i className="fab fa-instagram"></i> 
                                        </a>
                                    </li>
                                    <li className='headersup_social'> 
                                        <a href="https://twitter.com/gps_skies" target="_blank" className="icon icon--twitter" rel="noreferrer">
                                            <i className="fab fa-twitter"></i> 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <header className='header'>
                        <div className='container_header'>
                                <Link to={`/web-front`} id="logo">
                                    <img src={logo} alt="GpsSkies" />
                                </Link>

                                <nav>
                                    <div className='menu-icon' onClick={handleClick}>
                                        <i className={menu ? 'fas fa-times' : 'fas fa-bars'}/>
                                    </div>
                                    <ul className={menu ? "menu-list" : "menu-list.close"} >
                                        <li>
                                            <NavLink to={`/web-front`} className={({ isActive }) => isActive? "active": ''} 
                                            title='Inicio' onClick={closeMobileMenu}> INICIO </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={`/about`} className={({ isActive }) => isActive? "active": ''} 
                                            title='Nosotros' onClick={closeMobileMenu}> NOSOTROS</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={`/prices`} className={({ isActive }) => isActive? "active": ''} 
                                            title='Precios' onClick={closeMobileMenu}> PRECIOS</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={`/contact`} className={({ isActive }) => isActive? "active": ''} 
                                            title='Contacto' onClick={closeMobileMenu}> CONTACTO</NavLink>
                                        </li>
                                        <li>
                                            <a href={msg_solicitarDemo} title='Solicitar Demo' target='_blank' id="btnSolicitar" 
                                            onClick={closeMobileMenu} rel="noreferrer"> SOLICITAR DEMO
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            
                        </div>
                    </header>

                </div>

    );
  
}


export default Header;