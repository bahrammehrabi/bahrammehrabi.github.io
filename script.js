const btn=document.getElementById('lang');
if(btn){let de=false;btn.onclick=()=>{de=!de;btn.textContent=de?'EN':'DE';document.querySelectorAll('[data-en][data-de]').forEach(x=>x.textContent=de?x.dataset.de:x.dataset.en)}}
