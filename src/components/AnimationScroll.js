import '../css/animacion.css';

// Componente para realizar efectos al hacer scroll
export default function AnimationScroll() {

    window.addEventListener('scroll', function() {
        let animacion = document.getElementsByClassName('animacion');
        let fadeRight = document.getElementsByClassName('text-nosotros');
        let fadeImg = document.getElementsByClassName('div-imgs');
        let fadeLeft = document.getElementsByClassName('cardv');
        let screenSize = window.innerHeight;
       
        for(var i = 0; i < animacion.length; i++) {
            let element = animacion[i];
            if(element.getBoundingClientRect().top < screenSize) {
            animacion[i].classList.add('visible');
            } 
        }

        for(i = 0; i < fadeRight.length; i++) {
            let fRight = fadeRight[i];
            if(fRight.getBoundingClientRect().top < screenSize) {
            fadeRight[i].classList.add('fadeRight');
            } 
        }

        for(i = 0; i < fadeImg.length; i++) {
            let fImg = fadeImg[i];
            if(fImg.getBoundingClientRect().top < screenSize) {
            fadeImg[i].classList.add('mostrarImg');
            } 
        }

        for(i = 0; i < fadeLeft.length; i++) {
            let fleft = fadeLeft[i];
            if(fleft.getBoundingClientRect().top < screenSize) {
            fadeLeft[i].classList.add('fadeLeft');
            } 
        }

    })

}




   
    
    
 




   