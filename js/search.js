let sbtn = document.getElementById('sbtn');
let close2 = document.getElementById('close2');
let sn = document.querySelector('.s-n');
sbtn.addEventListener('click',()=>{
sn.classList.add('showSN');
close2.style.display='block';
})
close2.addEventListener('click',()=>{
  close2.style.display='none';
  sn.classList.remove('showSN');
})