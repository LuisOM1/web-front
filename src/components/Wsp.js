import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'
import '../css/wsp.css';


//Componente funcional Wsp
function Wsp() {

return (
    
    < FloatingWhatsApp  phone='+51902534606' zIndex={100} size={55} headerTitle={'¡Bienvenido!'} 
    popupMessage={'Hola, ¿cómo podemos ayudarte?'}  showOnIE= {false} />
                
);
}
  
  export default Wsp;