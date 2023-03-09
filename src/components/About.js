import React, {useState} from 'react';
import '../css/about.css';
import Header from './Header';
import Footer from './Footer';
import  img_about from  '../img/img_about.jpg';
import GoTop from './GoTop';
import CountUp from './CountUp';
import Wsp from './Wsp';
import SliderNav from './SliderNav';
import AnimationScroll from './AnimationScroll';
import HeaderHiden from './HeaderHiden';


//Componente funcional About
function About (){
	const [isOpen, setIsOpen] = useState(false);

	const openVideo = () => {
		setIsOpen(true);
		document.body.classList.add('active_video');  //Permite no realizar scroll
	}

	const closeVideo = () => {
		setIsOpen(false);
		document.body.classList.remove('active_video');
	}

	const container2 = [
		{ id:1, funfact_icon:'fas fa-tools', start:0, end:250, simbolo:'+', textp:'Instalaciones completadas'},
		{ id:2, funfact_icon:'fas fa-users', start:0, end:100, simbolo:'+', textp:'Clientes activos'},
		{ id:3, funfact_icon:'fas fa-trophy', start:0, end:3, simbolo:'+', textp:'Premios ganados'},
		{ id:4, funfact_icon:'fas fa-medal', start:0, end:100, simbolo:'%', textp:'Tasa de satisfacción'}
	]

      return (  
        <div>
			< HeaderHiden />
			< AnimationScroll />
			< Wsp />
            < Header />
			< SliderNav titleSliderNav="Nosotros"/>
            < div className='about'>
            	<div className='about_container'>
					<div className='about_container_1'>
						<div className='about_container_left'>
							<h4 className="about_sub_title">Sobre Nosotros</h4>
							<h2>Brindamos servicios de calidad
								<span> desde 2015</span>
							</h2>
							<p>Fundada por el Ing. David de la Cruz, Skies, nació para revolucionar la 
								industria del GPS en el marco mundial. Crecimos con la finalidad de brindar 
								un servicio seguro y confiable en miras de solucionar la problematica actual. 
							</p>
							
							<div className='about_mision'>
								<div className='about_objective'>
									<div className='icon_objective'>
										<i className="fa-solid fa-bullseye"></i>
									</div>
									<div className='about_objective_text'>
										<h3>Mision</h3>
										<p>Ofrecer soluciones tecnológicas y humanas, que nos permitan ofrecer 
											información más precisa, completa, confiable y en tiempo real que optimicen 
											los procesos administrativos y financieros de sus activos; impactando su 
											rentabilidad.
										</p>
									</div>
								</div>
							</div>
							<div className='about_vision'>
								<div className='about_objective'>
									<div className='icon_objective'>
										<i className="fa-solid fa-bullseye"></i>
									</div>
									<div className='about_objective_text'>
										<h3>Vision</h3>
										<p>Ser líderes en soluciones tecnológicas Innovadoras , para el transporte 
											vehicular Seguridad Electronica logrando ser reconocidos a nivel nacional 
											por la capacidad creativa e innovadora en tecnologías de información y 
											comunicación enfocadas en la administración Satelital y m2m.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className='about_container_right'>
							<img src={img_about} alt="David De La Cruz"></img>
						</div>
					</div>
                

				<div className='about_container_2'>   
					<div className='about_funfact'>
						{
							container2.map(container2 =>(
								<div className='about_funfact_block' key={container2.id}>
									<div className='about_funfact_icon'>
										<i className={container2.funfact_icon}></i>
									</div>
									<div className='about_funfact_text'>
										<h3><CountUp start={container2.start} end={container2.end} />{container2.simbolo}</h3>
										<p>{container2.textp}</p>
									</div>
								</div>
							))
						}
					</div>
				</div>


				<div className="about_container_3">
					<div className='about_video'>
						<div className='about_content1'>
							<span className="video_btn_border1"></span>
							<span className="video_btn_border2"></span>
							<div className='about_video_icon' onClick={openVideo}>
								<i className="fas fa-play"></i>
							</div>
						</div>
							
						{ isOpen &&(
							<div className='about_content2'>
								<div className='about_content2_container'>
									<button onClick={closeVideo} className="about_btnclose">×</button>
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
						)}
			
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