// // const form = document.getElementsByClassName('login_form');
// // const username = document.getElementsByClassName('for_login_form2');
// // const password = document.getElementsByClassName('for_login_form1');
// const form2 = document.getElementById('login_form');
// const username = document.getElementById('for_login_form2');
// const password = document.getElementById('for_login_form1');



// form2.addEventListener('submit',e=>{
    
    
//     e.preventDefult();

//     validinput();


// });

// const seteror =(element,message)=>{
//     const inputcontrol =element.parentElement;
//     const errorDisplay =inputcontrol.querySelector('.error');
//     errorDisplay.innertext=message;
//     inputcontrol.classlist.add('eror');
  
//     inputcontrol.classlist.remove('succses'); 
// }
// const setsuccses=element=>{
//     const inputcontrol =element.parentElement;
//     const erorDisplay =inputcontrol.querySelector('.error');
//     errorDisplay.innertext='';
//     inputcontrol.classlist.add('succses');
//     inputcontrol.classlist.remove('eror');
// }


// const validinput=()=>{

//     const usernamevalue=username.value.trim();
//     const passwordvalue=password.value.trim();
    

//     if (usernamevalue.lenght <4 ) {
//         seteror(username,'user name is required')
//         username.classlist.add('eror');

//     }
//     else{
//         setsuccses(username);
//         username.classlist.add('succses');
//     }
//     if (passwordvalue==='') {
//         seteror(passwordvalue,'password is required')
//         password.classlist.add('eror');
//     }
//     else if( passwordvalue.lenght<8 ){
//         seteror(passwordvalue,'password must be at least 8 chars')
//         password.classlist.add('eror');
//     }
//     else{
//         setsuccses(passwordvalue);
//         password.classlist.add('succses');
//     }


// }



const li =document.querySelectorAll(".nav") ;
const sec =document.querySelectorAll("section") ;


function activemenu(){
  let len=sec.length
  while(--len&& window.scrollY +100< sec[len].offsetTop ){}
  li.forEach(ltx => ltx.classList.remove("nav_act"));
  li[len].classList.add("nav_act");
}
activemenu();
window.addEventListener("scroll",activemenu);





let navbar = document.querySelector('.nav_bar')
document.querySelector('#menu_btn').onclick=()=>{
     navbar.classList.toggle('active_nav')
     loginform.classList.remove('active_log')
     searchform.classList.remove('active_search')
}

let loginform = document.querySelector('.login_form')
document.querySelector('#user_btn').onclick=()=>{
    loginform.classList.toggle('active_log')
    navbar.classList.remove('active_nav')
    searchform.classList.remove('active_search')
}


let searchform = document.querySelector('.search_form')
document.querySelector('#search_btn').onclick=()=>{
    searchform.classList.toggle('active_search')
    navbar.classList.remove('active_nav')
    loginform.classList.remove('active_log')
}

let theame =document.querySelector('#theame')
theame.onclick=()=>{
    theame.classList.toggle('fa-sun')


    if (theame.classList.contains('fa-sun')) {
        document.body.classList.add('active')
    }else{
        document.body.classList.remove('active')
    }
}


var swiper = new Swiper(".review_slider", {
    cssMode: true,
    loop:true,
    // spaceBetween: 20,
    centeredSlides: true,
    // autoplay: {
    //   delay: 4500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

// llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll