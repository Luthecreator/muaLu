// create function
const navSlide = function(){
    // select burger div and nav div from the DOM
    const burger = document.querySelector(".burger");
    console.log(burger)
    const nav = document.querySelector(".menu");
     console.log(nav)
    // select all the links
    const navLinks = nav.querySelectorAll(".menu li");
    console.log(navLinks)  

    // Toggle navigation
burger.addEventListener('click',function(){
    nav.classList.toggle("nav-active");

    navLinks.forEach((link,index) => {
       // console.log(link, index)
       if(link.style.animation === true){
           link.style.animation = '';
       }else{
           // Animate links
           link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`
       }
       
    });
    //burger Animation
    burger.classList.toggle("toggle")
 });
}
navSlide()