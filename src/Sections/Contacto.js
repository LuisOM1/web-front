import React, {useState} from 'react';
import '../css/contacto.css';
import '../css/modal.css';


//Componente funcional Contacto
function Contacto (){

  //Formulario de Contacto
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [description, setDescription] = useState('');
  //Modal que contiene mensaje de confirmacion
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.classList.add('active-modal');
  }

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove('active-modal');
  }

  //Funcion para enviar email
  const submit =(e)=>{
    fetch("https://formsubmit.co/ajax/ventas@facturaskies.com", {
    method: "POST",
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      Nombre: name,
      Email: email,
      Telefono: tel,
      Comentario: description
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .then(openModal)
    .catch(error => console.log(error));

    //Limpiar formulario
    setName('');
    setEmail('');
    setTel('');
    setDescription('');

    e.preventDefault();
  }

  //Tabs de opciones
  const[activetab, setActivetab]= useState("1");
  
  const cambiartab = (numerotab) =>{
    if(activetab !== numerotab){
      setActivetab(numerotab);
    }
  }

  const urlmap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8548956863765!2d-78.5764406!3d-9.076981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab8114296c3111%3A0x77de33701a8a00ac!2sGPS%20SKIES%20RASTREO%20SATELITAL%20GPS!5e0!3m2!1ses!2spe!4v1672761758581!5m2!1ses!2spe" ;
  
return (  

    <div className="contacto">
      <div className='contacto_container'>
        <div className="contacto_container_left">
          <div className="contacto_form">
            <div className="contacto_form_head">
              <h2>¿Tienes alguna consulta?</h2>
              <p>Escribenos y te contactaremos lo mas pronto posible</p>
            </div>
            
            <form onSubmit={submit}>
              <div className="contacto_form_fila">
                <div className="col-1-1">
                  <div className="contacto_form-group"> 
                    <span className="span_name">
                      <input type="text" name="Nombre" size="40" className=" " id="name" 
                      aria-required="true" aria-invalid="false" placeholder="Nombre*" autoComplete='off'
                      value={name} onChange={(e) => setName(e.target.value)} required/>
                    </span><br/> 
                  </div>
                </div>
                
                <div className="col-1-2">
                  <div className="contacto_form-group"> 
                    <span className="span_email">
                      <input type="email" name="Email" size="40" className=" " id="email" 
                      aria-required="true" aria-invalid="false" placeholder="Email*" autoComplete='off'
                      value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="contacto_form_fila">
                <div className="col-2">
                  <div className="contacto_form-group"> 
                    <span className="span_tel">
                      <input type="tel" name="Teléfono" size="40" className=" " id="phone" 
                      aria-required="true" aria-invalid="false" placeholder="Teléfono*" autoComplete='off'
                      value={tel} onChange={(e) => setTel(e.target.value)} required/>
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="contacto_form_fila">
                <div className="col-3">
                  <div className="contacto_form-group"> 
                    <span className="span_comments">
                      <textarea name="Comentario" cols="40" rows="4" className="" id="comments" aria-required="true" aria-invalid="false" placeholder="Por favor, describe lo que necesitas.*" autoComplete='off' value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="contacto_form_fila">
                <div className="col-4"> 
                  <button type="submit">Enviar</button>
                </div>
              </div>
            </form>

            { isOpen &&(
                <div className='modal'>
                  <div className='modal_container'>
                    <div className='modal_content_center'>
                      <div className='modal_icon'>
                        <div className='modal_check'>
                          <i className="fa-solid fa-check"></i>
                        </div>
                      </div>
                      <h2 className="modal_title">Completado!</h2>
                      <div className="modal_text">Gracias por tu mensaje. Ha sido enviado.</div>
                      <button className="btnOk" onClick={closeModal} >OK</button>
                    </div>
                  </div>
                </div>
              )}

          </div>
        </div>
    

      <div className="contacto_container_right">
        <div className="contacto_ubicacion">
          <ul className="contacto_options">
              <li id="option1" className={(activetab == "1" ? "option option-active": "option")} onClick={()=>cambiartab("1")}>Ubicanos</li>
              <li id="option2" className={(activetab == "2" ? "option option-active": "option")} onClick={()=>cambiartab("2")}>Google Maps</li>
          </ul>
    
          <div className="contacto_contents">
            <div id="content1" className={activetab == 1 ? "content content-active" : "content"}>
              <ul>
                <li>
                    <div className="icon"> 
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info">
                        <h4> Dirección </h4>
                        <p> Prolong. Alfonso ugarte 1918 Miraflores Bajo, Chimbote, Santa, Ancash</p>
                    </div>
                </li>
                <li>
                    <div className="icon"> 
                        <i className="fas fa-envelope-open"></i>
                    </div>
                    <div className="info">
                        <h4> Envianos un email </h4>
                        <p> ventas@facturaskies.com </p>
                    </div>
                </li>
                <li>
                    <div className="icon"> 
                        <i className="fas fa-phone"></i>
                    </div>
                    <div className="info">
                        <h4> Central telefónica </h4>
                        <p> +51 970 951 302 </p>
                    </div>
                </li>
                <li>
                    <div className="icon"> 
                        <i className="fab fa-whatsapp"></i>
                    </div>
                    <div className="info">
                        <h4> Whatsapp </h4>
                        <p> +51 970 951 302 </p>
                    </div>
                </li>
              </ul>
            </div>
    
            <div id="content2" className={activetab == 2 ? "content content-active" : "content"}>
              <iframe src={urlmap} title="mapGpsSkies" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

);
  
  }


  export default Contacto;