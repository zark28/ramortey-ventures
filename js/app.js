//function for nav bar mobile
const navSlide = () => {

  //storing slected elemnts in variables
  const burger = document.querySelector(".burger");
  const navBar = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  // listining to an event
  burger.addEventListener("click", () => {
    navBar.classList.toggle("nav-active");

    burger.classList.toggle("toggle");

// setting transition and delay for each link
   links.forEach((link,index) =>{
    if(link.style.animation){
      link.style.animation = ""
    }else{
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .2}s`
    }
   });
      
    
    });

};

navSlide();
