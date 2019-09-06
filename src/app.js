import './style/style.scss';

function scrollPage(divClass){
    let target = document.querySelector(divClass);
    let targetLeftposition = target.getBoundingClientRect().left;
    let targetTopposition = target.getBoundingClientRect().top;
    window.scrollTo({
     top: targetTopposition,
     left: targetLeftposition,
     behavior: 'smooth'
    });
   }
   
   let  nav = document.querySelector('.mobil_nav');
   let about = document.querySelector('.nav-order');
   let nav_list = document.querySelector('.nav-order');
   let closeNav = document.querySelector('.close');
   let openNav = document.querySelector('.open');
   let boton = document.querySelector('#boton');


   nav.addEventListener('click', (e) => {
    console.log(e.target.id)
    if(e.target.id === 'open' ){
        openNav.style.display = 'none';
        nav_list.style.transform = 'translateX(0)';
        closeNav.style.display = 'block';
    }

    if(e.target.id === 'close'){
        closeNav.style.display = 'none';
        nav_list.style.transform = 'translateX(-100%)';
        openNav.style.display = 'block';
    }
   });

   boton.addEventListener('click', () => {
    scrollPage('.about');
   });

   about.addEventListener('click', (e) => {
       if(e.target.id === 'about'){
        scrollPage('.about');
       }
       if(e.target.id === 'work'){
        scrollPage('.best-work');
       }
       if(e.target.id === 'blog')
       {
        scrollPage('.blog');
       }
       if(e.target.id === 'contact')
       {
        scrollPage('.footer');
       }
   })