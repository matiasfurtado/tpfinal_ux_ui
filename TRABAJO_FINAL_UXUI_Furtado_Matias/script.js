(function(){
 var btn=document.getElementById('menu-btn'),menu=document.getElementById('menu');
 if(btn&&menu){
  btn.addEventListener('click',function(){var o=menu.classList.toggle('open');btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú');btn.textContent=o?'✕':'☰'});
  menu.addEventListener('click',function(e){if(e.target.tagName==='A'){menu.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.textContent='☰'}});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&menu.classList.contains('open')){menu.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.textContent='☰';btn.focus()}});
 }
 var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
 var els=document.querySelectorAll('.reveal');
 if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});
  els.forEach(function(el){io.observe(el)});
 }else{els.forEach(function(el){el.classList.add('in')})}
 var links=document.querySelectorAll('#menu a[href^="#"]');
 if('IntersectionObserver' in window){
  var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.removeAttribute('aria-current');if(l.getAttribute('href')==='#'+e.target.id)l.setAttribute('aria-current','true')})}})},{rootMargin:'-40% 0px -55% 0px'});
  document.querySelectorAll('main section[id]').forEach(function(s){so.observe(s)});
 }
})();
