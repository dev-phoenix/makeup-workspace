"use strict"


const 
    burgerTrigger = document.querySelector('.header__burger'),
    burgerClose = document.querySelector('.header__burger--close'),
    burgerItem = document.querySelector('.header__inner'),
    headerLinks = document.querySelectorAll('.header__link'),
    body = document.querySelector('body');

function linkEvCl(e){
    burgerItem.classList.toggle('active');
    body.classList.toggle('active');
}

burgerTrigger.addEventListener('click', linkEvCl)

burgerClose.addEventListener('click', linkEvCl)

headerLinks.forEach((item)=>{
    item.addEventListener('click', linkEvCl)
})

// burgerTrigger.style.display = '';