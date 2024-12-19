$(function () {
    $('.full-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: '.full-slider__arrows',
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 590,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              },
            },
          ],
    })  
    
    
    $('.parents-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        appendArrows: '.parents__arrows',
        // centerMode: true
        responsive: [
            {
              breakpoint: 1800,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              },
            },
          ],
    })   
    
    $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
     });
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
    
    if(elem){
    // Блок достиг верхней границы экрана (или выше)
    elem.classList.toggle('first-active', posTop <= 0);
      }
    
    
    // Блок только появляется снизу (или выше)
    // elem.classList.toggle('visible', posTop < window.innerHeight);
    
    // Блок целиком находится в видимой зоне
    //elem.classList.toggle('visible', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);
    });
    

    const accardionBtn = document.querySelectorAll('.questions-accardion__btn');

    if(accardionBtn){
      accardionBtn.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('btn-active');
        })
    })
    }
       



    const modalBtn = document.querySelectorAll('.btn-lend');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('.modal-form__close');
    const test = calcScroll();


    if(modalBtn){
        modalBtn.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                modal.classList.add('show');
                modal.classList.remove('hide');
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${test}px`;
            })
        });
    }
    
    if(modalCloseBtn){
        modalCloseBtn.addEventListener('click', ()=>{
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });

    }
    
    if(modal){
        modal.addEventListener('click', (e)=>{
            if(e.target == modal){
                modal.classList.add('hide');
                modal.classList.remove('show');
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });
    }
   

    document.addEventListener('keydown', (e)=>{
        if(e.code == 'Escape' && modal.classList.contains('show')){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    })

        // //УБИРАЕМ ДЁРГАНИЕ МОДАЛЬНОГО ОКНА ПРИ ПОЯВЛЕНИИ
        function calcScroll(){
            let div = document.createElement('div');
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';
            
            document.body.append(div);

            let scrollWidth = div.offsetWidth - div.clientWidth;
            
            div.remove();
            
            return scrollWidth;
            }
            //УБИРАЕМ ДЁРГАНИЕ МОДАЛЬНОГО ОКНА ПРИ ПОЯВЛЕНИИ


            const menu = document.querySelector(".menu-lend");
            const mobile = document.querySelector(".nav-icon");
          
            if(mobile){
                mobile.addEventListener("click", function () {
                    this.classList.toggle("nav-icon--active");
                    menu.classList.toggle("nav--active");
                  });
            }
           


})//