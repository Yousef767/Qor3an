let links = document.querySelectorAll('.link')


links.forEach((e)=>{
  e.addEventListener('click',()=>{
    links.forEach((e)=>{e.classList.remove('active')})
    e.classList.add('active')
  })
})


let nav = document.querySelector('nav');
let menu = document.querySelector('.menu');

menu.addEventListener('click',()=>{
  nav.classList.toggle('activeMenu');
})
