const slider = document.querySelector('#slider-container-cards');
let sliderSeccion = document.querySelectorAll('.slider-card');
let sliderSeccionFinal = sliderSeccion[sliderSeccion.length -1];

const btnPrev = document.querySelector('#btn_prev');
const btnNext = document.querySelector('#btn_next')

slider.insertAdjacentElement('afterbegin', sliderSeccionFinal);

function Next(){
    let sliderSeccionPrimero = document.querySelectorAll('.slider-card')[0];
    slider.style.marginLeft ='-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider.style.transition='none';
        slider.insertAdjacentElement('beforeend',sliderSeccionPrimero);
        slider.style.marginLeft = '-100%';
    }, 500);
}

    btnNext.addEventListener('click',function(){
        Next();
    });


    function Prev(){
        let sliderSeccion = document.querySelectorAll('.slider-card');
        let sliderSeccionFinal = sliderSeccion[sliderSeccion.length -1];
        slider.style.marginLeft ='0%';
        slider.style.transition = 'all 0.5s';
        setTimeout(function(){
            slider.style.transition='none';
            slider.insertAdjacentElement('afterbegin',sliderSeccionFinal);
            slider.style.marginLeft = '-100%';
        }, 500);
    }
    
        btnPrev.addEventListener('click',function(){
            Prev();
        });