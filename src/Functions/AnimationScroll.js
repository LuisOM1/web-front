import '../css/animacion.css';

// Componente para realizar efectos al hacer scroll
export default function AnimationScroll() {

    window.addEventListener('scroll', function() {
        let fadeRight = document.getElementsByClassName('derecha');
        let fadeMostrar = document.getElementsByClassName('mostrar');
        let fadeLeft = document.getElementsByClassName('izquierda');
        let fadeAbajo = document.getElementsByClassName('abajo');
        let fadeArriba = document.getElementsByClassName('arriba');
        let fadeMostrar4s = document.getElementsByClassName('mostrar4s');
        let screenSize = window.innerHeight;


        for( var i = 0; i < fadeRight.length; i++) {
            let fRight = fadeRight[i];
            if(fRight.getBoundingClientRect().top < screenSize) {
            fadeRight[i].classList.add('fadeRight');
            } 
        }

        for(i = 0; i < fadeMostrar.length; i++) {
            let fm = fadeMostrar[i];
            if(fm.getBoundingClientRect().top < screenSize) {
            fadeMostrar[i].classList.add('fadeMostrar');
            } 
        }

        for(i = 0; i < fadeLeft.length; i++) {
            let fleft = fadeLeft[i];
            if(fleft.getBoundingClientRect().top < screenSize) {
            fadeLeft[i].classList.add('fadeLeft');
            } 
        }

        for(i = 0; i < fadeAbajo.length; i++) {
            let fAb = fadeAbajo[i];
            if(fAb.getBoundingClientRect().top < screenSize) {
            fadeAbajo[i].classList.add('fadeAbajo');
            } 
        }

        for(i = 0; i < fadeArriba.length; i++) {
            let fAr = fadeArriba[i];
            if(fAr.getBoundingClientRect().top < screenSize -170) {
            fadeArriba[i].classList.add('fadeArriba');
            } 
        }

        for(i = 0; i < fadeMostrar4s.length; i++) {
            let fm4 = fadeMostrar4s[i];
            if(fm4.getBoundingClientRect().top < screenSize) {
            fadeMostrar4s[i].classList.add('fadeMostrar4s');
            } 
        }

    })

}




   
    
    
 




   