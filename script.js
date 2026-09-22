const btn=document.getElementById('lang');let de=false;btn.onclick=()=>{de=!de;btn.textContent=de?'EN':'DE';document.querySelectorAll('[data-en][data-de]').forEach(x=>x.textContent=de?x.dataset.de:x.dataset.en)};
let ticking=false;
ticking=true;}
},{passive:true});
