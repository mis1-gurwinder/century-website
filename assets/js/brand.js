/* =====================================================================
   CENTURY BRAND MOTION
   Smooth scrolling, word-by-word headline reveals, magnetic buttons,
   the product parade, stacked section cards and hero depth.
   ===================================================================== */
(function(){
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,FINE=matchMedia('(pointer:fine)').matches;
const home=document.getElementById('v-home');

/* 1. performance: pause every animation in sections that are off screen */
const offIO=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('off',!e.isIntersecting)),{rootMargin:'120px 0px'});
document.querySelectorAll('main section, main .ticker, main .bigmq, footer').forEach(e=>offIO.observe(e));

/* 2. headlines rise word by word out of a mask */
function split(el){if(el.dataset.split)return;el.dataset.split='1';let i=0;
 (function walk(node){[...node.childNodes].forEach(ch=>{
  if(ch.nodeType===3){const parts=ch.textContent.split(/(\s+)/);if(!ch.textContent.trim())return;const f=document.createDocumentFragment();
   parts.forEach(w=>{if(!w)return;if(/^\s+$/.test(w)){f.appendChild(document.createTextNode(' '));return}
    const o=document.createElement('span');o.className='sw';const n=document.createElement('span');n.className='si';n.style.setProperty('--i',i++);n.textContent=w;o.appendChild(n);f.appendChild(o)});
   ch.replaceWith(f)}
  else if(ch.nodeType===1&&ch.tagName!=='BR'&&!ch.classList.contains('w'))walk(ch)})})(el);
 el.classList.add('split')}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('split-in');else e.target.classList.remove('split-in')}),{threshold:.15});
const SEL='main h2:not(.pt-name):not(.hh), .phead h1, .pd-info h1, .f2-h, .hero .hh, .pslider .hh';
function splitAll(){document.querySelectorAll(SEL).forEach(h=>{if(h.closest('.rc-card,.card,.sh-card,.qc-n'))return;const fresh=!h.dataset.split;split(h);if(fresh&&!h.closest('.slide'))io.observe(h)})}
splitAll();addEventListener('hashchange',()=>setTimeout(splitAll,420));

/* 2b. hero numbers count up each time their slide comes in ("35%" more protein) */
document.querySelectorAll('.slide').forEach(sl=>{const si=[...sl.querySelectorAll('.hh .si')].find(x=>/^\d+%$/.test(x.textContent));if(!si)return;const end=parseInt(si.textContent);si.classList.add('cnt');
 let raf=0;const run=()=>{cancelAnimationFrame(raf);if(RM){si.textContent=end+'%';return}const t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/1100),e=1-Math.pow(1-k,3);si.textContent=Math.round(end*e)+'%';if(k<1)raf=requestAnimationFrame(f)})(t0)};
 new MutationObserver(()=>{if(sl.classList.contains('active'))run()}).observe(sl,{attributes:true,attributeFilter:['class']})});

/* 3. section numbers, like chapters of the brand story */
let k=0;home&&home.querySelectorAll('.sec-head').forEach(s=>{if(s.querySelector('.idx'))return;const e=document.createElement('span');e.className='idx';e.textContent=String(++k).padStart(2,'0');s.prepend(e)});

/* 4. magnetic buttons */
if(FINE&&!RM)document.addEventListener('pointermove',e=>{const b=e.target.closest&&e.target.closest('.btn');document.querySelectorAll('.btn.mag').forEach(x=>{if(x!==b){x.classList.remove('mag');x.style.translate=''}});
 if(!b)return;const r=b.getBoundingClientRect();b.classList.add('mag');b.style.translate=`${((e.clientX-r.left)/r.width-.5)*10}px ${((e.clientY-r.top)/r.height-.5)*8}px`},{passive:true});

/* 5. product parade: every pack, on the move */
const par=document.getElementById('parade');
if(par&&typeof P!=='undefined'){const packs=P.map(p=>`<a class="pr-pk" href="#product/${p.id}" aria-label="${p.name}"><img decoding="async" data-lz="${IMG[p.img[0]]}" alt=""></a>`).join('');
 const names=['Soya Chunks','Makhana','Fine Besan','Indori Poha','Unpolished Pulses','Jaggery Powder','Chilli Flakes','Oregano'].map((w,i)=>`<span class="${i%2?'o':''}">${w}</span>`).join('');
 par.querySelector('.pr-a').innerHTML=`<div class="pr-tr">${packs}${packs}</div>`;
 par.querySelector('.pr-b').innerHTML=`<div class="pr-tr rev">${names}${names}</div>`}

/* 6. stacked section cards: each chapter slides over the last */
if(home){let z=2;['#mani','#jagHi','section.has-leaves:has(#rng)','#rcps','#parade','.why','.cta'].forEach(s=>{let e=null;try{e=home.querySelector(s)}catch(_){}
 if(e){e.classList.add('stk');e.style.zIndex=z++}})}

/* 7. hero depth: the wordmark drifts, packs follow the pointer.
   Values are written to the few elements that move, never to a big container. */
const hero=document.querySelector('.hero');
if(hero){const m=document.createElement('div');m.className='hero-mark';m.setAttribute('aria-hidden','true');m.textContent='Century';hero.prepend(m);
 const copy=hero.querySelector('.hero-copy'),homeV=document.getElementById('v-home');let lastSy=-1;
 const setVar=(els,k,v)=>els.forEach(e=>e&&e.style.setProperty(k,v));
 const movers=()=>[m,hero.querySelector('#stage'),hero.querySelector('.slide.active .sv'),...hero.querySelectorAll('.hero-copy')];
 let tk=false;addEventListener('scroll',()=>{if(tk||!homeV.classList.contains('on'))return;const sy=Math.min(1,scrollY/innerHeight);if(sy>=1&&lastSy>=1)return;tk=true;requestAnimationFrame(()=>{tk=false;const v=Math.min(1,scrollY/innerHeight);lastSy=v;setVar([m,...hero.querySelectorAll('.hero-copy')],'--sy',v.toFixed(3))})},{passive:true});
 if(FINE&&!RM){let pr=false,ev=null;hero.addEventListener('pointermove',e=>{ev=e;if(pr)return;pr=true;requestAnimationFrame(()=>{pr=false;const r=hero.getBoundingClientRect();const mx=((ev.clientX-r.left)/r.width-.5).toFixed(3),my=((ev.clientY-r.top)/r.height-.5).toFixed(3);const els=movers();setVar(els,'--mx',mx);setVar(els,'--my',my)})});
  hero.addEventListener('pointerleave',()=>{const els=movers();setVar(els,'--mx',0);setVar(els,'--my',0)})}}

/* 8. "Every Century product": spotlight + deck slider.
   The current pack stands on a lit plinth with its ingredients orbiting it; the next packs wait in a fanned deck.
   Drag/swipe the stage, use the arrows or keys, or tap a deck card. Colour follows the product. */
(function(){const root=document.getElementById('dk');if(!root||typeof P==='undefined')return;const sec=document.getElementById('allp');
 const TONE={soya:'#c8894a',mk:'#e8d9bd',besan:'#f2c94c',poha:'#bfe3ef',pulses:'#f0b93a',everyday:'#e7c98a',jaggery:'#a2602f',chilli:'#e0482f',oregano:'#8fae4a'};
 const BITS={soya:['#c8894a','#e2b47a'],mk:['#f6efe0','#e8d9bd'],besan:['#f2c94c','#e6b23a'],poha:['#ffffff','#e9eef0'],pulses:['#f0b93a','#d99a2b'],everyday:['#e7c98a','#c9a35e'],jaggery:['#8a4b22','#b8733f'],chilli:['#d63a2a','#f2683c'],oregano:['#6f8f3a','#9cb35a']};
 const key=p=>p.id.split('-')[0],tone=p=>TONE[key(p)]||'#FDB913',bits=p=>BITS[key(p)]||['#FDB913','#fff'];
 const N=P.length,D=4000,SHOW=4;let idx=0,t=null,hov=false,vis=false,hold=0,busy=false;
 const packs=document.getElementById('dkPacks'),deck=document.getElementById('dkDeck'),rail=document.getElementById('dkRail'),orb=document.getElementById('dkOrb'),word=document.getElementById('dkWord');
 document.getElementById('dkAll').textContent=String(N).padStart(2,'0');
 deck.innerHTML=P.map((p,k)=>`<button type="button" class="dk-card" data-k="${k}" aria-label="Show ${p.name}"><span class="dk-cimg"><img decoding="async" data-lz="${IMG[p.img[0]]}" alt=""></span><span class="dk-ctx"><small>${catName(p.cat)}</small><b>${p.name}</b></span></button>`).join('');
 rail.innerHTML=P.map(()=>'<i></i>').join('');
 const cards=[...deck.children],ticks=[...rail.children];
 function place(){cards.forEach((c,k)=>{const d=(k-idx-1+N)%N;c.style.setProperty('--d',d);c.classList.toggle('hid',d>=SHOW);c.tabIndex=d<SHOW?0:-1;c.setAttribute('aria-hidden',d>=SHOW)});
  ticks.forEach((x,k)=>{x.classList.toggle('done',k<idx);x.classList.toggle('on',k===idx)})}
 function pack(p,dir){const el=document.createElement('a');el.className='dk-pack in'+(dir<0?' rev':'');el.href='#product/'+p.id;el.setAttribute('aria-label','Open '+p.name);
  el.innerHTML=`<img decoding="async" src="${IMG[p.img[0]]}" alt="${p.name}"><i class="dk-scan" aria-hidden="true"></i>`;return el}
 function info(p){const box=document.getElementById('dkInfo');box.classList.remove('swap');void box.offsetWidth;box.classList.add('swap');
  document.getElementById('dkCat').textContent=catName(p.cat);document.getElementById('dkName').textContent=p.name;document.getElementById('dkLine').textContent=p.line;
  document.getElementById('dkChips').innerHTML=`<span>${p.wt}</span>${p.tag?`<span>${p.tag}</span>`:''}`;document.getElementById('dkGo').href='#product/'+p.id;
  document.getElementById('dkNow').textContent=String(idx+1).padStart(2,'0');
  word.textContent=p.name.split(' ')[0];word.classList.remove('swap');void word.offsetWidth;word.classList.add('swap');
  const b=bits(p);sec.style.setProperty('--tone',tone(p));orb.style.setProperty('--c1',b[0]);orb.style.setProperty('--c2',b[1])}
 function show(k,dir){const p=P[k];const old=packs.querySelector('.dk-pack:not(.out)');
  if(old){old.classList.remove('in','rev');old.classList.add('out');if(dir<0)old.classList.add('back');setTimeout(()=>old.remove(),700)}
  packs.appendChild(pack(p,dir));info(p);place()}
 function go(n,user){if(busy)return;busy=true;setTimeout(()=>busy=false,420);const dir=n<idx&&!(idx===N-1&&n===0)||(idx===0&&n===N-1)?-1:1;idx=((n%N)+N)%N;show(idx,dir);if(user)hold=Date.now();sched()}
 function sched(){clearTimeout(t);root.classList.remove('run');void root.offsetWidth;
  if(vis&&home&&home.classList.contains('on')){root.classList.add('run');t=setTimeout(()=>go(idx+1),D)}}
 root.querySelector('.dk-prev').onclick=()=>go(idx-1,true);root.querySelector('.dk-next').onclick=()=>go(idx+1,true);
 cards.forEach(c=>c.onclick=()=>{const k=+c.dataset.k;go(k,true)});
 root.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();go(idx-1,true)}else if(e.key==='ArrowRight'){e.preventDefault();go(idx+1,true)}});
 /* drag / swipe on the stage; the pack leans with the finger */
 const stage=document.getElementById('dkStage');let sx=null,sy=null,lean=false;
 stage.addEventListener('pointerdown',e=>{sx=e.clientX;sy=e.clientY;lean=false});
 addEventListener('pointermove',e=>{if(sx===null)return;const dx=e.clientX-sx,dy=e.clientY-sy;if(!lean&&Math.abs(dx)>8&&Math.abs(dx)>Math.abs(dy))lean=true;
  if(lean){const cur=packs.querySelector('.dk-pack:not(.out)');if(cur){cur.style.setProperty('--dx',dx+'px');cur.classList.add('drag')}}},{passive:true});
 const up=e=>{if(sx===null)return;const dx=e.clientX-sx;sx=null;const cur=packs.querySelector('.dk-pack:not(.out)');if(cur){cur.classList.remove('drag');cur.style.removeProperty('--dx')}
  if(lean&&Math.abs(dx)>50){go(idx+(dx<0?1:-1),true);const a=cur;if(a)a.addEventListener('click',ev=>ev.preventDefault(),{once:true,capture:true})}lean=false};
 addEventListener('pointerup',up);addEventListener('pointercancel',up);
 /* pointer parallax on the stage */
 if(FINE&&!RM)stage.addEventListener('pointermove',e=>{const r=stage.getBoundingClientRect();stage.style.setProperty('--px',((e.clientX-r.left)/r.width-.5).toFixed(3));stage.style.setProperty('--py',((e.clientY-r.top)/r.height-.5).toFixed(3))});
 stage.addEventListener('pointerleave',()=>{stage.style.setProperty('--px',0);stage.style.setProperty('--py',0)});
 new IntersectionObserver(es=>{vis=es[0].isIntersecting;sec.classList.toggle('dk-live',vis);sched()},{threshold:.1}).observe(root);
 addEventListener('hashchange',()=>setTimeout(sched,400));
 show(0,1);sched()})();
})();
