$(function () {
    $('.full-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: '.full-slider__arrows',
    })     
})

window.addEventListener('DOMContentLoaded', () => {
   const card = document.querySelector('.card');

    document.addEventListener('scroll', () => {
        if(scrollY > card.offsetHeight){
            card.classList.add('scroll-block');
        }else{
            card.classList.remove('scroll-block');
        }
        
    });

    const elem = document.querySelector('.first');

    document.addEventListener('scroll', function() {
    const posTop = elem.getBoundingClientRect().top;
    
    // Блок достиг верхней границы экрана (или выше)
     elem.classList.toggle('first-active', posTop <= 0);
    
    // Блок только появляется снизу (или выше)
    // elem.classList.toggle('visible', posTop < window.innerHeight);
    
    // Блок целиком находится в видимой зоне
    //elem.classList.toggle('visible', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);
    });
    


})