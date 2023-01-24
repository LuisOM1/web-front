import React from 'react';
import '../css/about.css';
import Header from './Header';
import Footer from './Footer';
import  img_about from  '../img/img_about.jpg';
import GoTop from './GoTop';
import CountUp from './CountUp';
import Wsp from './Wsp';
import SliderNav from './SliderNav';

//Componente funcional About
function About (){

      return (  
        <div>
			< Wsp />
            < Header />
			< SliderNav titleSliderNav="Nosotros"/>
            < div className='about'>
            	<div className='about_container'>
					<div className='about_container_1'>
						<div className='about_text'>
							<span className="about_sub_title">Sobre Nosotros</span>
							<h2>Brindamos servicios de calidad <br></br>
								<span>desde 2015</span>
							</h2>
							<p>Fundada por el Ing. David de la Cruz, Skies, nació para revolucionar la 
								industria del GPS en el marco mundial. Crecimos con la finalidad de brindar 
								un servicio seguro y confiable en miras de solucionar la problematica actual. 
							</p>

							
							<div className='about_mision'>
								<div className='about_objective_center'>
								<h3>Mision</h3>
								<p>Ofrecer soluciones tecnológicas y humanas, que nos permitan ofrecer 
									información más precisa, completa, confiable y en tiempo real que optimicen 
									los procesos administrativos y financieros de sus activos; impactando su 
									rentabilidad.
								</p>
								</div>
							</div>
							<div className='about_vision'>
								<div className='about_objective_center'>
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
                

				<div className='about_container_2'>   
					<div className='about_funfact'>
						<div className='about_funfact_block'>
							<div className='about_funfact_icon'>
								<i className="fas fa-tools"></i>
							</div>
							<div className='about_funfact_text'>
								<h3><CountUp start={0} end={250} />+</h3>
								<p>Instalaciones completadas</p>
							</div>
						</div>

						<div className='about_funfact_block'>
							<div className='about_funfact_icon'>
								<i className="fas fa-users"></i>
							</div>
							<div className='about_funfact_text'>
								<h3><CountUp start={0} end={100} />+</h3>
								<p>Clientes activos</p>
							</div>
						</div>

						<div className='about_funfact_block'>
							<div className='about_funfact_icon'>
								<i className="fas fa-trophy"></i>
							</div>
							<div className='about_funfact_text'>
								<h3><CountUp start={0} end={3} />+</h3>
								<p>Premios ganados</p>
							</div>
						</div>

						<div className='about_funfact_block'>
							<div className='about_funfact_icon'>
								<i className="fas fa-medal"></i>
							</div>
							<div className='about_funfact_text'>
								<h3><CountUp start={0} end={100} />%</h3>
								<p>Tasa de satisfacción</p>
							</div>
						</div>
					</div>
				</div>

				<div className="about_container_3">
					<div className="about_video">
						<iframe 
							width="560" 
							height="315" 
							src="https://www.youtube.com/embed/l0rau5crOls" 
							title="YouTube video player" 
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
							allowFullScreen>
						</iframe>
						
					</div>
				</div>		
	
              </div>
            </div>
            < Footer />
			< GoTop />
        </div>
       
      );
  
  }


  export default About;