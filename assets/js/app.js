const menu = document.querySelector('.burger__menu')
const header = document.querySelector('.header')

menu.addEventListener('click', ()=>{
  header.classList.toggle('header__active')
})


const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    spaceBetween: 95,
  });