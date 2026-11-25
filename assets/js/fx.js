/* =====================================================================
   CENTURY FX (behaviour)
   Motion-driven touches for every page. Rules: transform and opacity only,
   nothing runs while off screen, and reduced motion keeps all content still.
   ===================================================================== */
(function(){
const M=window.Motion,RM=matchMedia('(prefers-reduced-motion: reduce)').matches,FINE=matchMedia('(hover:hover) and (pointer:fine)').matches;
const EASE=[.22,1,.36,1],off=()=>innerWidth<768?8:12;

/* 1. packing line runs only while it is on screen */
const pl=document.querySelectorAll('.pl-anim');
if(pl.length&&'IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('run',e.isIntersecting)),{rootMargin:'80px'});pl.forEach(x=>io.observe(x))}

/* About values become glass cards */
document.querySelectorAll('.values > div').forEach(d=>{if(d.querySelector(':scope > .fg-l'))return;d.classList.add('fg','fg-light');const l=document.createElement('i');l.className='fg-l';l.setAttribute('aria-hidden','true');d.appendChild(l)});

if(!M||RM)return;

/* 2. page headers: the title rises out of a mask, copy follows (hero entrance, 0.8s) */
document.querySelectorAll('.phead h1').forEach(h=>{if(h.querySelector('.ml'))return;const w=document.createElement('span');w.className='ml';const i=document.createElement('span');
 while(h.firstChild)i.appendChild(h.firstChild);w.appendChild(i);h.appendChild(w)});
function enterView(){const v=document.querySelector('.view.on');if(!v)return;
 const t=v.querySelector('.phead .ml > span'),l=v.querySelectorAll('.phead .lede');
 if(t)M.animate(t,{y:['105%','0%']},{duration:.8,ease:EASE});
 if(l.length)M.animate(l,{opacity:[0,1],y:[off(),0]},{duration:.8,ease:EASE,delay:.12});
 /* product page: media settles from 0.98, info rises */
 const pm=v.querySelector('.pd-media'),pi=v.querySelector('.pd-info');
 if(pm)M.animate(pm,{opacity:[0,1],scale:[.98,1]},{duration:.8,ease:EASE});
 if(pi)M.animate(pi,{opacity:[0,1],y:[off(),0]},{duration:.8,ease:EASE,delay:.08})}
addEventListener('hashchange',()=>setTimeout(enterView,200));setTimeout(enterView,60);

/* 3. scroll reveals that replay when you scroll back */
function reveal(el,targets,opts){if(!el||!targets.length)return;opts=opts||{};
 M.inView(el,()=>{M.animate(targets,opts.media?{opacity:[0,1],scale:[.98,1]}:{opacity:[0,1],y:[off(),0]},
  {duration:opts.dur||1,ease:EASE,delay:opts.stag?M.stagger(opts.stag,{startDelay:.1}):.1});
  return ()=>M.animate(targets,opts.media?{opacity:0,scale:.98}:{opacity:0,y:off()},{duration:0})},{amount:opts.amount||.15})}
/* services: picture settles, bullet points stagger (3 or 4 items) */
document.querySelectorAll('.svc').forEach(s=>{s.classList.remove('reveal');s.classList.add('seen');
 const img=s.querySelector('.svc-img'),txt=s.querySelector('.svc-img + div');
 if(img)reveal(img,[img],{media:true});
 if(txt){const head=[...txt.querySelectorAll(':scope > h2, :scope > .lede')];reveal(txt,head,{});
  const li=[...txt.querySelectorAll('ul > li')].slice(0,4);reveal(txt.querySelector('ul'),li,{stag:.1,amount:.3})}});
/* free sample steps and about values: 3 cards stagger */
document.querySelectorAll('#v-services .steps, .values').forEach(g=>{g.classList.remove('reveal');
 const kids=[...g.children].slice(0,4);reveal(g,kids,{stag:.1});
 M.inView(g,()=>{g.classList.add('seen');return ()=>g.classList.remove('seen')},{amount:.3})});

/* 4. magnetic primary buttons (fine pointers only) */
if(FINE){const MAG='.btn-y, .btn-g';let cur=null;
 document.addEventListener('pointermove',e=>{const b=e.target.closest&&e.target.closest(MAG);
  if(cur&&cur!==b){M.animate(cur,{x:0,y:0},{duration:.35,ease:EASE});cur=null}
  if(!b)return;cur=b;const r=b.getBoundingClientRect(),dx=(e.clientX-r.left-r.width/2)/r.width,dy=(e.clientY-r.top-r.height/2)/r.height;
  M.animate(b,{x:dx*8,y:dy*6},{duration:.3,ease:EASE})},{passive:true})}

/* 5. footer action tiles and contact rows lift slightly toward the pointer */
if(FINE){document.querySelectorAll('.cm-card, .values > div').forEach(c=>{
 M.hover(c,()=>{M.animate(c,{y:-4},{duration:.25,ease:EASE});return ()=>M.animate(c,{y:0},{duration:.25,ease:EASE})})})}
})();
