"use strict"


const 
    burgerTrigger = document.querySelector('.menu-burger'),
    burgerClose = document.querySelector('.header__burger--close'),
    burgerItem = document.querySelector('.header__inner'),
    headerLinks = document.querySelectorAll('.header__link'),
    body = document.querySelector('body');

function linkEvCl(e){
    burgerItem.classList.toggle('active');
    body.classList.toggle('active');
}

if(burgerTrigger)
    burgerTrigger.addEventListener('click', linkEvCl)

if(burgerClose)
    burgerClose.addEventListener('click', linkEvCl)

if(burgerItem)
    burgerClose.addEventListener('click', linkEvCl)

if(headerLinks.length)
    headerLinks.forEach((item)=>{
        item.addEventListener('click', linkEvCl)
    })

// burgerTrigger.style.display = '';