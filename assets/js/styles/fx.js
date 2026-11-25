/* =====================================================================
   CENTURY FX (JSS)
   Light, transform/opacity-only motion used across every page:
   - private label packing line (Our Services)
   - page header line reveal, button sheen, glowing form fields,
     step connectors, glass value cards
   Everything pauses when off screen or hidden, and stops for reduced motion.
   ===================================================================== */
window.CENTURY_STYLES=window.CENTURY_STYLES||{};
window.CENTURY_STYLES.fx=function(t){
 var c=t.color,E='cubic-bezier(.22,1,.36,1)';
 return {'@global':{

  /* ---------- private label packing line ---------- */
  '.pl-anim':{position:'relative',overflow:'hidden',isolation:'isolate',
    background:'radial-gradient(120% 90% at 50% 0%,#1f8a4c 0%,'+c.green+' 45%,#0a4424 100%)!important',
    boxShadow:'inset 0 1px 0 rgba(255,255,255,.25), 0 30px 60px -34px rgba(7,42,22,.8)'},
  '.pl-anim:not(.run) *, .off .pl-anim *':{animationPlayState:'paused!important'},
  '.pl-grid':{position:'absolute',inset:0,zIndex:-1,opacity:.35,
    backgroundImage:'radial-gradient(rgba(255,255,255,.35) 1px,transparent 1.4px)',backgroundSize:'22px 22px',
    WebkitMaskImage:'radial-gradient(80% 70% at 50% 40%,#000,transparent)',maskImage:'radial-gradient(80% 70% at 50% 40%,#000,transparent)'},
  '.pl-top':{position:'absolute',left:'5%',right:'5%',top:'6%',display:'flex',justifyContent:'space-between',alignItems:'center',gap:'10px',zIndex:3},
  '.pl-live':{display:'inline-flex',alignItems:'center',gap:'8px',padding:'7px 12px',borderRadius:'999px',fontSize:'12px',fontWeight:600,color:'#fff',
    background:'linear-gradient(145deg,rgba(255,255,255,.18),rgba(255,255,255,.05))',boxShadow:'inset 0 0 0 1px rgba(255,255,255,.28), inset 0 1px 0 rgba(255,255,255,.4)'},
  '.pl-live i':{width:'8px',height:'8px',borderRadius:'50%',background:c.yellow,boxShadow:'0 0 0 0 rgba(253,185,19,.7)',animation:'plPing 1.6s '+E+' infinite'},
  '.pl-count':{fontSize:'12px',fontWeight:500,color:'rgba(255,255,255,.75)',textAlign:'right'},

  /* the moving packs: 4 packs, 2 s apart, cross the centre in turn */
  '.pl-lane':{position:'absolute',left:0,right:0,bottom:'21%',height:'44%',zIndex:2},
  '.pl-pack':{position:'absolute',left:0,bottom:0,width:'22%',height:'100%',borderRadius:'12px 12px 16px 16px',
    animation:'plMove 8s linear infinite',animationDelay:'calc(var(--i) * -2s)',willChange:'transform',
    boxShadow:'inset 0 1px 0 rgba(255,255,255,.45), inset 0 -16px 22px -14px rgba(0,0,0,.35), 0 16px 22px -14px rgba(0,0,0,.6)'},
  '.pl-pack.y':{background:'linear-gradient(160deg,#ffd45a,'+c.yellow+' 55%,#e3a100)'},
  '.pl-pack.g':{background:'linear-gradient(160deg,#2f9a5c,#14703a 55%,#0c5129)'},
  '.pl-pack.c':{background:'linear-gradient(160deg,#fff7e4,#f1e2bf 55%,#dcc79a)'},
  '.pl-pack.r':{background:'linear-gradient(160deg,#d8673f,#b8492b 55%,#8e3219)'},
  '.pl-seal':{position:'absolute',left:'6%',right:'6%',top:'5%',height:'7%',borderRadius:'3px',
    background:'repeating-linear-gradient(90deg,rgba(255,255,255,.35) 0 3px,rgba(0,0,0,.08) 3px 6px)'},
  '.pl-win':{position:'absolute',left:'18%',right:'18%',bottom:'9%',height:'26%',borderRadius:'50% 50% 40% 40%',
    background:'radial-gradient(circle at 30% 40%,#f6dd9a 0 14%,transparent 15%),radial-gradient(circle at 62% 55%,#f2cf78 0 13%,transparent 14%),radial-gradient(circle at 45% 75%,#e9c46a 0 12%,transparent 13%),rgba(255,255,255,.55)',
    boxShadow:'inset 0 0 0 2px rgba(255,255,255,.6)'},
  '.pl-lab, .pl-blank':{position:'absolute',left:'7%',right:'7%',top:'20%',height:'40%',borderRadius:'8px'},
  '.pl-blank':{border:'2px dashed rgba(255,255,255,.75)',animation:'plBlank 8s linear infinite',animationDelay:'calc(var(--i) * -2s)'},
  '.pl-pack.c .pl-blank':{borderColor:'rgba(7,42,22,.4)'},
  '.pl-lab':{display:'grid',placeContent:'center',textAlign:'center',background:'#fff',color:'#0b3d20',
    boxShadow:'0 6px 12px -6px rgba(0,0,0,.45)',animation:'plLabel 8s linear infinite',animationDelay:'calc(var(--i) * -2s)',opacity:0},
  '.pl-lab b':{fontSize:'clamp(7px,1.15vw,12px)',fontWeight:800,letterSpacing:'.01em',lineHeight:1.12,padding:'0 4%'},
  '.pl-lab small':{fontSize:'clamp(6px,.85vw,9px)',fontWeight:700,color:c.green,lineHeight:1.2,marginTop:'3px',padding:'0 4%'},
  '.pl-pack.g .pl-lab':{background:c.yellow},
  '@keyframes plMove':{'0%':{transform:'translate3d(-100%,0,0)'},'100%':{transform:'translate3d(454.5%,0,0)'}},
  '@keyframes plLabel':{'0%, 49.6%':{opacity:0,transform:'scale(.6)'},'50.4%':{opacity:1,transform:'scale(1.12)'},'56%':{opacity:1,transform:'scale(1)'},'100%':{opacity:1,transform:'scale(1)'}},
  '@keyframes plBlank':{'0%, 49.6%':{opacity:1},'50.4%, 100%':{opacity:0}},

  /* the label stamp presses each time a pack reaches the centre (every 2 s) */
  '.pl-stamp':{position:'absolute',left:'50%',top:0,width:'clamp(64px,9vw,96px)',height:'calc(35% + 14px)',zIndex:4,
    animation:'plPress 2s '+E+' infinite',willChange:'transform'},
  '.pl-arm':{position:'absolute',left:'50%',bottom:'26px',width:'12px',height:'240px',marginLeft:'-6px',borderRadius:'4px',
    background:'linear-gradient(90deg,#9aa7a0,#e9efec 45%,#8c9892)'},
  '.pl-head':{position:'absolute',left:0,right:0,bottom:0,height:'28px',borderRadius:'8px',display:'grid',placeItems:'center',
    fontSize:'10px',fontWeight:800,letterSpacing:'.14em',color:'#0b3d20',background:'linear-gradient(180deg,#ffe08a,'+c.yellow+')',
    boxShadow:'inset 0 1px 0 rgba(255,255,255,.7), 0 10px 18px -8px rgba(0,0,0,.6)'},
  '.pl-flash':{position:'absolute',left:'-30%',right:'-30%',bottom:'-26px',height:'52px',borderRadius:'50%',pointerEvents:'none',
    background:'radial-gradient(closest-side,rgba(255,236,170,.9),rgba(255,236,170,0))',opacity:0,animation:'plFlash 2s linear infinite'},
  '@keyframes plPress':{'0%':{transform:'translate3d(-50%,0,0)'},'16%':{transform:'translate3d(-50%,-46px,0)'},'84%':{transform:'translate3d(-50%,-46px,0)'},'100%':{transform:'translate3d(-50%,0,0)'}},
  '@keyframes plFlash':{'0%':{opacity:.95},'14%':{opacity:0},'100%':{opacity:0}},
  '@keyframes plPing':{'0%':{boxShadow:'0 0 0 0 rgba(253,185,19,.7)'},'100%':{boxShadow:'0 0 0 10px rgba(253,185,19,0)'}},

  /* conveyor belt */
  '.pl-belt':{position:'absolute',left:'-2%',right:'-2%',bottom:'14%',height:'7%',overflow:'hidden',zIndex:1,borderRadius:'6px',
    background:'#0b2a18',boxShadow:'inset 0 2px 0 rgba(255,255,255,.12), 0 14px 24px -12px rgba(0,0,0,.7)'},
  '.pl-belt i':{position:'absolute',top:0,bottom:0,left:'-100%',width:'200%',animation:'plBelt 6.56s linear infinite',willChange:'transform',
    background:'repeating-linear-gradient(90deg,rgba(255,255,255,.14) 0 14px,transparent 14px 34px)'},
  '@keyframes plBelt':{'0%':{transform:'translate3d(0,0,0)'},'100%':{transform:'translate3d(50%,0,0)'}},

  /* certification chips */
  '.pl-chips':{position:'absolute',left:'5%',right:'5%',bottom:'3.5%',display:'flex',gap:'8px',flexWrap:'wrap',zIndex:3},
  '.pl-chips span':{fontSize:'11px',fontWeight:600,color:'#fff',padding:'5px 10px',borderRadius:'999px',
    background:'linear-gradient(145deg,rgba(255,255,255,.16),rgba(255,255,255,.04))',boxShadow:'inset 0 0 0 1px rgba(255,255,255,.25)',
    animation:'plBob 4s ease-in-out infinite alternate'},
  '.pl-chips span:nth-child(2)':{animationDelay:'-1.3s'},'.pl-chips span:nth-child(3)':{animationDelay:'-2.6s'},
  '@keyframes plBob':{'0%':{transform:'translateY(0)'},'100%':{transform:'translateY(-4px)'}},

  /* ---------- page headers: line mask reveal + soft glass glow ---------- */
  '.phead':{position:'relative',overflow:'hidden',isolation:'isolate'},
  '.phead::before':{content:'""',position:'absolute',zIndex:-1,right:'-10vmax',top:'-24vmax',width:'48vmax',height:'48vmax',borderRadius:'50%',pointerEvents:'none',
    background:'radial-gradient(closest-side,rgba(253,185,19,.22),rgba(253,185,19,0))'},
  '.phead::after':{content:'""',position:'absolute',zIndex:-1,left:'-14vmax',bottom:'-30vmax',width:'44vmax',height:'44vmax',borderRadius:'50%',pointerEvents:'none',
    background:'radial-gradient(closest-side,rgba(19,108,55,.14),rgba(19,108,55,0))'},
  '.ml':{display:'block',overflow:'hidden',paddingBottom:'.12em',marginBottom:'-.12em'},
  '.ml > span':{display:'block'},

  /* ---------- buttons: light sheen on hover (transform only) ---------- */
  '.btn-y, .btn-g':{overflow:'hidden'},
  '.btn-y::after, .btn-g::after':{display:'block!important',content:'""!important',position:'absolute!important',top:0,bottom:0,left:0,width:'40%!important',
    background:'linear-gradient(100deg,rgba(255,255,255,0),rgba(255,255,255,.45),rgba(255,255,255,0))!important',transform:'translateX(-160%) skewX(-18deg)!important',
    transition:'transform .7s '+E+'!important',pointerEvents:'none',animation:'none!important',opacity:'1!important',height:'auto!important',inset:'auto!important',zIndex:1},
  '.btn-y:hover::after, .btn-g:hover::after, .btn-y:focus-visible::after, .btn-g:focus-visible::after':{transform:'translateX(320%) skewX(-18deg)!important'},

  /* ---------- glowing form fields (Contact) ---------- */
  '.enq input, .enq select, .enq textarea':{transition:'box-shadow .25s '+E+', border-color .25s '+E+', background-color .25s '+E},
  '.enq input:focus, .enq select:focus, .enq textarea:focus':{borderColor:c.green+'!important',background:'#fff!important',
    boxShadow:'0 0 0 4px rgba(19,108,55,.14), 0 10px 24px -14px rgba(19,108,55,.55)!important',outline:'none'},

  /* ---------- step connectors (Our Services, free sample) ---------- */
  '#v-services .steps li':{position:'relative'},
  '#v-services .steps li::before':{position:'relative',zIndex:1,boxShadow:'0 0 0 6px rgba(253,185,19,.18)'},

  /* ---------- more fluid glass: steps, regions, benefits, chips ---------- */
  '.steps li, .regions > div, .ben > div':{background:'linear-gradient(145deg,rgba(255,255,255,.92),rgba(255,255,255,.55) 55%,rgba(255,255,255,.75))!important',
    boxShadow:'inset 0 1px 0 #fff, 0 24px 46px -32px rgba(7,42,22,.45)!important',border:'0!important',borderRadius:'22px!important',
    transition:'transform .25s '+E+', box-shadow .25s '+E},
  '.steps li:hover, .regions > div:hover, .ben > div:hover':{transform:'translateY(-3px)'},
  '.certs span, .who span, .bestfor span':{background:'linear-gradient(145deg,rgba(255,255,255,.95),rgba(255,255,255,.6))!important',
    boxShadow:'inset 0 1px 0 #fff, 0 8px 18px -12px rgba(7,42,22,.45)!important',border:'1px solid rgba(255,255,255,.9)!important',
    transition:'transform .25s '+E},
  '.certs span:hover, .who span:hover, .bestfor span:hover':{transform:'translateY(-2px)'},

  /* ---------- About values as glass cards with an icon ---------- */
  '.values > div':{borderRadius:'24px',padding:'26px 24px'},
  '.val-ic':{width:'44px',height:'44px',padding:'10px',borderRadius:'14px',background:c.green,stroke:c.yellow,fill:'none',strokeWidth:1.8,
    strokeLinecap:'round',strokeLinejoin:'round',marginBottom:'16px',display:'block',boxShadow:'0 10px 20px -12px rgba(19,108,55,.9)'},

  /* ---------- Services: bullet ticks pop ---------- */
  '.svc li':{transition:'transform .25s '+E},
  '.svc li:hover':{transform:'translateX(4px)'}
 },
 '@media (min-width:768px)':{
  '@global #v-services .steps li:not(:last-child)::after':{content:'""',position:'absolute',top:'50px',left:'84px',right:'-22px',height:'2px',
    background:'repeating-linear-gradient(90deg,'+c.yellow+' 0 8px,transparent 8px 14px)',transformOrigin:'0 50%',transform:'scaleX(0)',transition:'transform 1s '+E},
  '@global #v-services .steps.seen li:not(:last-child)::after':{transform:'scaleX(1)'},
  '@global #v-services .steps.seen li:nth-child(2)::after':{transitionDelay:'.25s'}
 },
 '@media (max-width:575.98px)':{
  '@global .pl-top':{display:'none'},
  '@global .pl-chips span':{fontSize:'10px',padding:'4px 8px'}
 },
 '@media (prefers-reduced-motion:reduce)':{
  '@global .pl-anim *':{animation:'none!important'},
  '@global .pl-pack':{transform:'none'},
  '@global .pl-pack:nth-child(1)':{left:'4%'},'@global .pl-pack:nth-child(2)':{left:'28%'},
  '@global .pl-pack:nth-child(3)':{left:'52%'},'@global .pl-pack:nth-child(4)':{left:'76%'},
  '@global .pl-lab':{opacity:'1!important'},'@global .pl-blank':{display:'none'},
  '@global .pl-stamp':{transform:'translate3d(-50%,-46px,0)'},
  '@global .btn-y::after, .btn-g::after':{display:'none!important'}
 }};
};
