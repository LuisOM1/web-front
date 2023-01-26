import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import  logo from  '../img/logo.png';



//Componente funcional Header
function Header(){
   const [click, setClick] = useState(false);

   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);

    // Para que no se pueda hacer scroll con el menu movil abierto
    if (click){
        document.body.classList.add('active-menum');
    } else {
        document.body.classList.remove('active-menum');
    }
         
      return  (  <div>
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
                            <a href="https://www.facebook.com/SKIESGPS" target="_blank" className=" icon icon--facebook" rel="noreferrer"> 
                                <i className="fab fa-facebook-f"></i> 
                            </a>
                        </li>
                        <li> 
                            <a href="https://www.instagram.com/gps_skies" target="_blank" className="icon icon--instagram" rel="noreferrer"> 
                                <i className="fab fa-instagram"></i> 
                            </a>
                        </li>
                        <li> 
                            <a href="https://twitter.com/gps_skies" target="_blank" className="icon icon--twitter" rel="noreferrer">
                            <i className="fab fa-twitter"></i> 
                            </a>
                        </li>
                        </ul>
                    </div>            
                    </div>
                </div>


                <header>
                    <div id="head-inferior">
                        <Link to={`/web-front`} id="logo">
                            <img src={logo} alt="GpsSkies" />
                        </Link>

                        <nav>
                            <div className='menu-icon' onClick={handleClick}>
                               <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                            </div>
                            <ul className={click ? "menu-list" : "menu-list.close"} >
                                <li>
                                    <Link to={`/web-front`}  onClick={closeMobileMenu}> INICIO </Link>
                                </li>
                                <li>
                                    <Link to={`/about`}  onClick={closeMobileMenu}> NOSOTROS</Link>
                                </li>
                                <li>
                                    <Link to={`/prices`}  onClick={closeMobileMenu}> PRECIOS</Link>
                                </li>
                                <li>
                                    <Link to={`/contact`}  onClick={closeMobileMenu}> CONTACTO</Link>
                                </li>
                                <li>
                                    <Link to={`/login`}  id="btningresar"  onClick={closeMobileMenu}>INGRESAR</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>



                </div>
  
      );
  
  }


  export default Header;