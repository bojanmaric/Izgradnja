const navSlide=()=>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-menu');
    burger.addEventListener('click',()=>{
       
        nav.classList.toggle('nav-active');
    });

    
    nav.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
    

}
navSlide()


