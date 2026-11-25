// /* =====================================================================
//    CENTURY FLUID GLASS + MOTION
//    Motion (motion.dev) drives reveals and button / card feedback, following
//    restrained rules: opacity 0 -> 1 with a 12px (8px on phones) rise,
//    ease [0.22, 1, 0.36, 1], 1s, 0.1s delay, triggered at 15% visibility,
//    2-4 sibling cards stagger 0.1s. Reveals replay each time a section returns.
//    Reduced motion keeps everything visible and still.
//    ===================================================================== */
// (function(){
// const M=window.Motion,RM=matchMedia('(prefers-reduced-motion: reduce)').matches,FINE=matchMedia('(hover:hover) and (pointer:fine)').matches;
// const EASE=[.22,1,.36,1];

// /* 1. glass layers on every glass surface */
// const DARK='.gcard, .f2-act, .dk-card, .dk-stage, .rc-card, .f2-cb, .know',LIGHT='header.top, .card, .enq, .c-list, .cm-card, .steps li, .regions > div, .ben > div, .certs span, .who span, .bestfor span';
// function glassify(root){(root||document).querySelectorAll(DARK+','+LIGHT).forEach(el=>{if(el.querySelector(':scope > .fg-l'))return;
//  el.classList.add('fg');if(getComputedStyle(el).position==='static')el.style.position='relative';if(el.matches(LIGHT))el.classList.add('fg-light');const l=document.createElement('i');l.className='fg-l';l.setAttribute('aria-hidden','true');el.appendChild(l)})}
// glassify();new MutationObserver(ms=>{if(ms.some(m=>m.addedNodes.length))requestAnimationFrame(()=>glassify())}).observe(document.getElementById('grid')||document.body,{childList:true});
// addEventListener('hashchange',()=>setTimeout(glassify,450));

// /* pointer light that flows across the glass */
// if(FINE&&!RM){let raf=0,ev=null;document.addEventListener('pointermove',e=>{ev=e;if(raf)return;raf=requestAnimationFrame(()=>{raf=0;const el=ev.target.closest&&ev.target.closest('.fg');if(!el)return;
//  const r=el.getBoundingClientRect();el.style.setProperty('--gx',(ev.clientX-r.left).toFixed(0)+'px');el.style.setProperty('--gy',(ev.clientY-r.top).toFixed(0)+'px')})},{passive:true})}

// /* 2. aurora colour fields behind sections */
// const AUR=[['.allp',0],['.why',0],['.rcps',0],['.horeca',0],['footer#foot',0],['#v-products section[style*="padding-top:20px"]',1],['#v-contact section',1],['.scale',1]];
// AUR.forEach(([s,lt])=>document.querySelectorAll(s).forEach(sec=>{if(sec.querySelector(':scope > .aur'))return;sec.classList.add('aur-host');
//  const a=document.createElement('div');a.className='aur'+(lt?' lt':'');a.setAttribute('aria-hidden','true');a.innerHTML='<i></i><i></i><i></i>';sec.prepend(a)}));

// /* 3. liquid glass lens that follows the cursor over the hero */
// /* the lens lives inside the first (hero) slider only; fine pointers only */
// const heroEl=document.querySelector('.hero');
// if(FINE&&!RM&&M&&heroEl){if(getComputedStyle(heroEl).position==='static')heroEl.style.position='relative';
//  const lens=document.createElement('div');lens.className='lens';lens.setAttribute('aria-hidden','true');heroEl.appendChild(lens);
//  let on=false,raf=0,ev=null;
//  const place=()=>{raf=0;const r=heroEl.getBoundingClientRect(),s=lens.offsetWidth/2;M.animate(lens,{x:ev.clientX-r.left-s,y:ev.clientY-r.top-s},{type:'spring',stiffness:180,damping:22,mass:.6})};
//  heroEl.addEventListener('pointermove',e=>{ev=e;if(!on){on=true;lens.classList.add('on')}if(!raf)raf=requestAnimationFrame(place)},{passive:true});
//  heroEl.addEventListener('pointerleave',()=>{on=false;lens.classList.remove('on')});
//  addEventListener('blur',()=>{on=false;lens.classList.remove('on')});
//  /* hide while scrolling so scrolling stays fast; it returns on the next mouse move over the hero */
//  addEventListener('scroll',()=>{if(on){on=false;lens.classList.remove('on')}},{passive:true})}

// /* scroll progress bar: one transform, driven by Motion's scroll() */
// if(M&&!RM){const bar=document.createElement('div');bar.className='sprog';bar.setAttribute('aria-hidden','true');document.body.appendChild(bar);
//  M.scroll(p=>{bar.style.transform='scaleX('+p.toFixed(4)+')'})}

// /* sliding pill under the active product filter */
// const fil=document.getElementById('filters');
// if(fil){const pill=document.createElement('i');pill.className='chip-pill';pill.setAttribute('aria-hidden','true');fil.prepend(pill);fil.classList.add('has-pill');let first=true;
//  const place=()=>{const a=fil.querySelector('.chip[aria-pressed="true"]');if(!a||!a.offsetWidth)return;const v={x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight};
//   if(!M){Object.assign(pill.style,{transform:`translate(${v.x}px,${v.y}px)`,width:v.width+'px',height:v.height+'px'});return}
//   M.animate(pill,v,first||RM?{duration:0}:{type:'spring',stiffness:420,damping:34});first=false};
//  new MutationObserver(place).observe(fil,{subtree:true,attributes:true,attributeFilter:['aria-pressed']});
//  addEventListener('hashchange',()=>setTimeout(place,60));addEventListener('resize',()=>{first=true;place()});setTimeout(place,300)}

// if(!M||RM)return;

// /* 4. scroll reveals with Motion */
// const off=()=>innerWidth<768?8:12;
// function reveal(el,targets,stag){targets.forEach(x=>x.classList.add('m-pre'));
//  M.inView(el,()=>{M.animate(targets,{opacity:[0,1],y:[off(),0]},{duration:1,ease:EASE,delay:stag?M.stagger(.1,{startDelay:.1}):.1});
//   return ()=>{M.animate(targets,{opacity:0,y:off()},{duration:0})}},{amount:.15})}
// /* section heads: heading, copy and actions reveal together */
// document.querySelectorAll('.sec-head').forEach(h=>{h.classList.remove('reveal');h.classList.add('seen');reveal(h,[h],false)});
// /* 2-4 sibling cards stagger */
// [['.gcards','.m-grp'],['.f2-acts','.m-grp']].forEach(([g,k])=>document.querySelectorAll(g).forEach(grp=>reveal(grp,[...grp.querySelectorAll(':scope > '+k)],true)));
// /* contact blocks */
// document.querySelectorAll('.c-grid').forEach(g=>{const kids=[...g.children];kids.forEach(k=>{k.classList.remove('reveal');k.classList.add('seen')});reveal(g,kids,true)});

// /* 4b. About cards stagger, tick and cross draw in */
// document.querySelectorAll('.cm-cards').forEach(g=>reveal(g,[...g.querySelectorAll(':scope > .m-grp')],true));
// document.querySelectorAll('.know').forEach(k=>{k.classList.remove('reveal');k.classList.add('seen');reveal(k,[k],false)});
// const vs=document.querySelector('.jag-vs');
// if(vs){const ps=[...vs.querySelectorAll('.vs-ic path')],cs=[...vs.querySelectorAll('.vs-ic')];
//  M.inView(vs,()=>{M.animate(cs,{scale:[.6,1],opacity:[0,1]},{duration:.45,ease:EASE,delay:M.stagger(.12,{startDelay:.15})});
//   M.animate(ps,{strokeDashoffset:[24,0]},{duration:.5,ease:EASE,delay:M.stagger(.12,{startDelay:.35})});
//   return ()=>{M.animate(cs,{opacity:0},{duration:0});M.animate(ps,{strokeDashoffset:24},{duration:0})}},{amount:.4})}

// /* 5. hover / press feedback on buttons and clickable glass cards */
// const FB='.btn, .gcard, .f2-act';
// M.hover(FB,el=>{M.animate(el,{scale:1.01},{duration:.25,ease:EASE});return ()=>M.animate(el,{scale:1},{duration:.25,ease:EASE})});
// M.press(FB,el=>{M.animate(el,{scale:.99},{duration:.25,ease:EASE});return ()=>M.animate(el,{scale:1},{duration:.25,ease:EASE})});
// })();
