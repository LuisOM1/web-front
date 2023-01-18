import React from 'react';
import '../css/about.css';
import Header from './Header';
import Footer from './Footer';
import  img_about from  '../img/img_about.jpg';


//Componente funcional About
function About (){

      return (  
        <div>
            < Header />
            < div className='about'>
              <div className='about_container'>
                <div className='about_text'>
                  <span className="about_sub_title">Sobre Nosotros</span>
                  <h2>Bridamos servicios de calidad <br></br>
                    <span>desde 2015</span>
                  </h2>
                  <p>Fundada por el Ing. David de la Cruz, Skies, nació para revolucionar la 
                    industria del GPS en el marco mundial. Crecimos con la finalidad de brindar 
                    un servicio seguro y confiable en miras de solucionar la problematica actual. 
                  </p>

                  <div className='about_objectives'>
                    <div className='about_mision'>
                      <h3>Mision</h3>
                      <p>Ofrecer soluciones tecnológicas y humanas, que nos permitan ofrecer 
                        información más precisa, completa, confiable y en tiempo real que optimicen 
                        los procesos administrativos y financieros de sus activos; impactando su 
                        rentabilidad.
                      </p>
                    </div>
                    <div className='about_vision'>
                      <h3>Vision</h3>
                      <p>Ser líderes en soluciones tecnológicas Innovadoras , para el transporte 
                        vehicular Seguridad Electronica logrando ser reconocidos a nivel nacional 
                        por la capacidad creativa e innovadora en tecnologías de información y 
                        comunicación enfocadas en la administración Satelital y m2m.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='about_img'>
                    <img src={img_about} alt=""></img>
                </div>
              </div>
            </div>
            < Footer />
        </div>
       
      );
  
  }


  export default About;