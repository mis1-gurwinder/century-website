/* =====================================================================
   CENTURY FLUID GLASS (JSS)
   Layout comes from Bootstrap 5 grid; every visual style lives here.
   - Glass surfaces: translucent gradient panes, a gradient hairline rim,
     a specular top edge and a soft light that follows the pointer.
   - Aurora: slow, blurred-looking colour fields behind sections (pure
     gradients, transform-only animation, paused off screen).
   - Liquid lens: a refracting glass drop that follows the cursor over the hero.
   ===================================================================== */
window.CENTURY_STYLES=window.CENTURY_STYLES||{};
window.CENTURY_STYLES.glass=function(t){
 var c=t.color,EASE='cubic-bezier(.22,1,.36,1)';
 var G={
  /* dark glass, on green / brown sections */
  dBg:'linear-gradient(145deg,rgba(255,255,255,.15) 0%,rgba(255,255,255,.05) 46%,rgba(255,255,255,.09) 100%)',
  dRim:'linear-gradient(145deg,rgba(255,255,255,.55),rgba(255,255,255,.06) 38%,rgba(255,255,255,.02) 62%,rgba(253,185,19,.45))',
  dShadow:'inset 0 1px 0 rgba(255,255,255,.28), inset 0 -18px 30px -24px rgba(0,0,0,.6), 0 26px 50px -28px rgba(0,0,0,.75)',
  /* light glass, on cream sections */
  lBg:'linear-gradient(145deg,rgba(255,255,255,.86) 0%,rgba(255,255,255,.52) 55%,rgba(255,255,255,.7) 100%)',
  lRim:'linear-gradient(145deg,rgba(255,255,255,1),rgba(255,255,255,.2) 45%,rgba(19,108,55,.28))',
  lShadow:'inset 0 1px 0 #fff, 0 24px 50px -30px rgba(7,42,22,.45), 0 2px 6px -2px rgba(7,42,22,.08)'
 };
 var dark={background:G.dBg+'!important',boxShadow:G.dShadow+'!important',border:'0!important',color:'#fff'};
 var light={background:G.lBg+'!important',boxShadow:G.lShadow+'!important',border:'0!important'};
 return {'@global':{
  /* ---------- glass layers injected by glass.js into each .fg element ---------- */
  '.fg':{isolation:'isolate'},
  '.fg-l':{position:'absolute',inset:0,borderRadius:'inherit',pointerEvents:'none',zIndex:2},
  '.fg-l::before':{content:'""',position:'absolute',inset:0,borderRadius:'inherit',padding:'1px',background:G.dRim,
    WebkitMask:'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',WebkitMaskComposite:'xor',maskComposite:'exclude'},
  '.fg-light .fg-l::before':{background:G.lRim},
  '.fg-l::after':{content:'""',position:'absolute',inset:0,borderRadius:'inherit',opacity:0,transition:'opacity .5s '+EASE,
    background:'radial-gradient(260px circle at var(--gx,50%) var(--gy,0%),rgba(255,255,255,.22),transparent 60%)'},
  '.fg-light .fg-l::after':{background:'radial-gradient(260px circle at var(--gx,50%) var(--gy,0%),rgba(253,185,19,.18),transparent 60%)'},
  '.fg:hover .fg-l::after, .fg:focus-visible .fg-l::after':{opacity:1},

  /* ---------- glass surfaces ---------- */
  'header.top':{background:'rgba(251,245,230,.62)!important',backdropFilter:'blur(18px) saturate(1.8)!important',WebkitBackdropFilter:'blur(18px) saturate(1.8)!important',
    boxShadow:'inset 0 1px 0 rgba(255,255,255,.9), 0 18px 40px -26px rgba(7,42,22,.55)!important',border:'0!important'},
  '.gcard, .gcard.glass':Object.assign({},dark,{borderRadius:'26px!important',height:'100%',width:'100%'}),
  '.gcards.row':{display:'flex!important',gridTemplateColumns:'none',gap:'0!important'},
  '.f2-acts.row':{display:'flex!important',gridTemplateColumns:'none',gap:'0!important',marginBottom:'46px'},
  '.f2-act':Object.assign({},dark,{borderRadius:'20px!important',height:'100%',minHeight:'76px'}),
  '.dk-card':Object.assign({},dark,{background:'linear-gradient(145deg,rgba(255,255,255,.16),rgba(255,255,255,.05) 50%,rgba(16,70,40,.85)),#16422a!important'}),
  '.dk-stage':{boxShadow:G.dShadow+', 0 0 0 1px rgba(255,255,255,.06)!important',border:'0!important'},
  '.rc-card':Object.assign({},dark,{background:'linear-gradient(160deg,rgba(255,255,255,.14),rgba(255,255,255,.03) 50%,rgba(7,42,22,.55))!important'}),
  '.f2-cb':Object.assign({},dark,{borderRadius:'999px!important'}),
  '.card':Object.assign({},light,{borderRadius:'26px!important'}),
  '.card .ph':{background:'radial-gradient(70% 60% at 50% 60%,rgba(253,185,19,.22),transparent 70%),rgba(243,233,208,.55)!important'},
  '.enq, .c-list':Object.assign({},light,{borderRadius:'28px!important',padding:'clamp(20px,3vw,32px)!important'}),
  '.chip':{background:'rgba(255,255,255,.55)!important',boxShadow:'inset 0 1px 0 #fff, 0 6px 14px -10px rgba(7,42,22,.4)',borderColor:'rgba(255,255,255,.9)!important'},
  '.chip[aria-pressed="true"]':{background:c.green+'!important',boxShadow:'inset 0 1px 0 rgba(255,255,255,.35), 0 10px 20px -12px rgba(19,108,55,.8)'},
  /* glass buttons */
  '.btn-o':{background:'linear-gradient(145deg,rgba(255,255,255,.22),rgba(255,255,255,.06))!important',boxShadow:'inset 0 0 0 1px rgba(255,255,255,.45), inset 0 1px 0 rgba(255,255,255,.6)!important'},
  '.btn-y, .btn-g, .top .btn':{backgroundImage:'linear-gradient(180deg,rgba(255,255,255,.28),rgba(255,255,255,0) 52%)!important',boxShadow:'inset 0 1px 0 rgba(255,255,255,.55), 0 12px 24px -14px rgba(0,0,0,.55)!important'},
  '.s-arr':{backgroundImage:'linear-gradient(145deg,rgba(255,255,255,.18),rgba(255,255,255,0) 60%)!important',boxShadow:'inset 0 0 0 1px rgba(255,255,255,.22), inset 0 1px 0 rgba(255,255,255,.35)!important'},
  '.btn:focus-visible, .s-arr:focus-visible, .gcard:focus-visible, .f2-act:focus-visible, .dk-card:focus-visible, .card:focus-visible':{outline:'3px solid '+c.yellow+'!important',outlineOffset:'3px'},

  /* ---------- aurora colour fields ---------- */
  '.aur-host':{position:'relative',isolation:'isolate'},
  '.aur':{position:'absolute',inset:0,zIndex:-1,overflow:'hidden',pointerEvents:'none'},
  '.aur i':{position:'absolute',width:'60vmax',height:'60vmax',borderRadius:'50%',opacity:.55,willChange:'transform',animation:'aurDrift 28s ease-in-out infinite alternate'},
  '.aur i:nth-child(1)':{left:'-18vmax',top:'-22vmax',background:'radial-gradient(closest-side,rgba(46,160,90,.55),rgba(46,160,90,0))'},
  '.aur i:nth-child(2)':{right:'-20vmax',top:'10%',background:'radial-gradient(closest-side,rgba(253,185,19,.30),rgba(253,185,19,0))',animationDuration:'34s',animationDelay:'-9s'},
  '.aur i:nth-child(3)':{left:'25%',bottom:'-30vmax',background:'radial-gradient(closest-side,rgba(19,108,55,.6),rgba(19,108,55,0))',animationDuration:'40s',animationDelay:'-17s'},
  '.aur.lt i':{opacity:.7},
  '.aur.lt i:nth-child(1)':{background:'radial-gradient(closest-side,rgba(19,108,55,.16),rgba(19,108,55,0))'},
  '.aur.lt i:nth-child(2)':{background:'radial-gradient(closest-side,rgba(253,185,19,.22),rgba(253,185,19,0))'},
  '.aur.lt i:nth-child(3)':{background:'radial-gradient(closest-side,rgba(126,200,150,.18),rgba(126,200,150,0))'},
  '@keyframes aurDrift':{'0%':{transform:'translate3d(0,0,0) scale(1)'},'50%':{transform:'translate3d(6vmax,4vmax,0) scale(1.12)'},'100%':{transform:'translate3d(-4vmax,7vmax,0) scale(.95)'}},
  '.off .aur i':{animationPlayState:'paused!important'},


  /* ---------- Motion reveal starting state (set only when JS + Motion run) ---------- */
  '.m-pre':{opacity:0},
  /* grid children may shrink, so wide tables scroll inside their box on phones */
  '.pd-sec.two > *':{minWidth:0},

  /* ---------- small label next to a heading, e.g. Soya  Plant Protein ---------- */
  '.cat h3 small, .ps-copy .hh small':{display:'block',fontSize:'.42em',fontWeight:600,letterSpacing:'.08em',textTransform:'uppercase',opacity:.85,marginTop:'4px'},
  '.cat h3 small':{fontSize:'11px'},

  /* ---------- spotlight: tick for Century, cross for refined sugar ---------- */
  '.vs-col b':{display:'flex!important',alignItems:'center',gap:'10px'},
  '.vs-ic':{flex:'0 0 26px',width:'26px',height:'26px',fill:'none',strokeWidth:2.6,strokeLinecap:'round',strokeLinejoin:'round'},
  '.vs-ic circle':{strokeWidth:0},
  '.vs-ic.ok circle':{fill:'#1f9d55'},'.vs-ic.ok path':{stroke:'#fff'},
  '.vs-ic.no circle':{fill:'#e03131'},'.vs-ic.no path':{stroke:'#fff'},
  '.vs-ic path':{strokeDasharray:24,strokeDashoffset:0},
  '.vs-col:not(.me) b':{color:'#ffd5d5'},

  /* ---------- scroll progress bar (transform only) ---------- */
  '.sprog':{position:'fixed',left:0,top:0,right:0,height:'3px',zIndex:9999,pointerEvents:'none',transformOrigin:'0 50%',transform:'scaleX(0)',
    background:'linear-gradient(90deg,'+c.yellow+',#ffe08a 50%,'+c.yellow+')',boxShadow:'0 0 10px rgba(253,185,19,.6)'},

  /* ---------- filter chips: sliding glass pill under the active chip ---------- */
  '#filters':{position:'relative',isolation:'isolate'},
  '#filters.has-pill .chip[aria-pressed="true"]':{background:'transparent!important',boxShadow:'none!important',color:'#fff!important'},
  '.chip-pill':{position:'absolute',left:0,top:0,zIndex:-1,borderRadius:'999px',pointerEvents:'none',background:c.green,
    boxShadow:'inset 0 1px 0 rgba(255,255,255,.35), 0 10px 22px -12px rgba(19,108,55,.85)'},

  /* ---------- About: contract manufacturing & private labelling ---------- */
  '.cmpl':{padding:'clamp(56px,8vw,110px) 0'},
  '.cm-cards':{marginTop:'8px'},
  '.cm-card':Object.assign({},light,{borderRadius:'24px!important',padding:'28px 24px',height:'100%',transition:'transform .25s '+EASE}),
  '.cm-card svg':{width:'46px',height:'46px',padding:'10px',borderRadius:'14px',background:c.green,stroke:c.yellow,fill:'none',strokeWidth:1.8,strokeLinecap:'round',strokeLinejoin:'round',marginBottom:'18px',
    boxShadow:'inset 0 1px 0 rgba(255,255,255,.3), 0 10px 20px -12px rgba(19,108,55,.9)'},
  '.cm-card h3':{fontSize:'clamp(18px,1.6vw,21px)',marginBottom:'8px'},
  '.cm-card p':{margin:0,color:'var(--ink-2)',fontSize:'15px',lineHeight:1.6},
  '.know':Object.assign({},dark,{marginTop:'28px',borderRadius:'26px!important',padding:'clamp(22px,3vw,32px) clamp(22px,3.5vw,40px)',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:'18px',
    background:'linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.02) 55%),'+c.green+'!important'}),
  '.know p':{margin:0,color:'#fff',fontSize:'clamp(17px,1.7vw,21px)',fontWeight:500},
  '.know b':{color:c.yellow,fontWeight:700}
 },
 '@media (max-width:767.98px)':{
  '@global .aur i':{width:'90vmax',height:'90vmax',opacity:.45}
 },
 '@media (prefers-reduced-motion:reduce)':{
  '@global .aur i':{animation:'none!important'},
  '@global .m-pre':{opacity:'1!important'},
  '@global .sprog':{display:'none'}
 }};
};
