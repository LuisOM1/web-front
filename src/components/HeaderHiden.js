import '../css/headerHiden.css';

// Componente para ocultar y mostrar el header al hacer scroll
export default function HeaderHiden() {

    let headerInf = document.getElementsByClassName('header');
    let elementsTop = document.getElementsByClassName('top');


    const isMobile = function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
    return true;
    return false;
    };


    // evento scroll
    window.addEventListener("scroll", function() {
        // donde nos encontramos actualmente
        let desplazamientoActual = window.pageYOffset;

        for( var i = 0; i < headerInf.length; i++) {
            let header = headerInf[i];
            let top = elementsTop[i];
            // ocultar o mostrar el menu superior negro
            if(desplazamientoActual > 40 && !isMobile()) {
                header.classList.add('mostrarMenu');
                top.classList.add('masTop');
                
            } else {
                header.classList.remove('mostrarMenu');
                top.classList.remove('masTop');
            }
        }

        
    });
    
}








