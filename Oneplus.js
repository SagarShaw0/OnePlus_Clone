let menu = document.querySelector('#menu-icon');
let navlist1 = document.querySelector('.navlist1');
let navlist2 = document.querySelector('.navlist2');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navlist1.classList.toggle('open');
    navlist2.classList.toggle('open');
}