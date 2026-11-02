(function(){
  var burger=document.getElementById('burger'),nav=document.getElementById('mainnav');
  if(burger&&nav){burger.addEventListener('click',function(){nav.classList.toggle('open');burger.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false');});}
  var langBtn=document.getElementById('langBtn'),langMenu=document.getElementById('langMenu');
  if(langBtn&&langMenu){
    langBtn.addEventListener('click',function(e){e.stopPropagation();langMenu.classList.toggle('open');langBtn.setAttribute('aria-expanded',langMenu.classList.contains('open')?'true':'false');});
    /* A tap on a menu link must not be swallowed by the outside-click closer:
       stop it inside the menu so navigation always proceeds. */
    langMenu.addEventListener('click',function(e){e.stopPropagation();});
    document.addEventListener('click',function(e){if(!e.target.closest||!e.target.closest('.lang')){langMenu.classList.remove('open');langBtn.setAttribute('aria-expanded','false');}});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'){langMenu.classList.remove('open');langBtn.setAttribute('aria-expanded','false');}});
  }
  var top=document.getElementById('toTop');
  if(top){
    window.addEventListener('scroll',function(){top.classList.toggle('show',window.scrollY>400);},{passive:true});
    top.addEventListener('click',function(){window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});});
  }
  /* Inquiry forms on this site POST to Formspree; no JS intercept. */
})();

(function(){var slides=document.querySelectorAll('.carousel .slide');if(slides.length){var i=0,timer=null;function show(n){slides[i].classList.remove('on');i=(n+slides.length)%slides.length;slides[i].classList.add('on');}function auto(){clearInterval(timer);timer=setInterval(function(){show(i+1);},5000);}var pv=document.querySelector('.carousel .prev'),nx=document.querySelector('.carousel .next');if(pv)pv.addEventListener('click',function(){show(i-1);auto();});if(nx)nx.addEventListener('click',function(){show(i+1);auto();});auto();}})();
