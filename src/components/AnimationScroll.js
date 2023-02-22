

// Componente para realizar efectos al hacer scroll
export default function AnimationScroll() {

    window.addEventListener('scroll', function() {
        let elements = document.getElementsByClassName('precios_contents');
        let screenSize = window.innerHeight;
       
        for(var i = 0; i < elements.length; i++) {
            let element = elements[i];
            if(element.getBoundingClientRect().top < screenSize) {
            element.classList.add('fadeMostrar');
            } else {
            element.classList.remove('fadeMostrar');
            }
        }
    })

}


   
    
    
 




   