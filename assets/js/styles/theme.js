/* =====================================================================
   CENTURY BRAND THEME, written entirely in JSS.
   Brand system:
   - Type: Poppins only. Black/ExtraBold upright headlines, ExtraLight Italic accents.
   - Colour: Century green, Century yellow, kitchen cream, ink.
   - Signature: the Century underline. The yellow bar under "ur" in the logo
     marks the key words of every headline and draws in as it appears.
   - Texture: a fine paper grain over the whole site.
   ===================================================================== */
window.CENTURY_STYLES=window.CENTURY_STYLES||{};

window.CENTURY_STYLES.tokens={
  color:{
    cream:'#FBF5E6', cream2:'#F3E9D0', paper:'#FFFDF6',
    green:'#136C37', greenDeep:'#0C4D27', forest:'#072A16',
    yellow:'#FDB913', yellowSoft:'#FFE7A3',
    ink:'#11160F', ink2:'#4B5449', line:'rgba(17,22,15,.12)'
  },
  font:{body:'"Poppins",system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif'},
  radius:{s:'12px',m:'22px',l:'34px',pill:'999px'},
  ease:'cubic-bezier(.2,.8,.2,1)', spring:'cubic-bezier(.3,1.4,.5,1)'
};

window.CENTURY_STYLES.theme=function(t){
  var c=t.color,f=t.font,r=t.radius,E=t.ease;
  var merge=function(){return Object.assign.apply(null,[{}].concat([].slice.call(arguments)))};
  /* type helpers: one family, many voices */
  var black=function(size){return{fontFamily:f.body,fontWeight:900,fontStyle:'normal',letterSpacing:'-.045em',lineHeight:.94,fontSize:size,textTransform:'none'}};
  var heavy=function(size){return{fontFamily:f.body,fontWeight:800,fontStyle:'normal',letterSpacing:'-.035em',lineHeight:1,fontSize:size,textTransform:'none'}};
  var thinItalic={fontWeight:200,fontStyle:'italic',letterSpacing:'-.02em'};
  var eyebrow={fontFamily:f.body,fontWeight:600,fontSize:'12px',letterSpacing:'.16em',textTransform:'uppercase'};
  /* the Century underline as a background, so it wraps cleanly line by line */
  var underline=function(col,from,to){return{backgroundImage:'linear-gradient('+col+','+col+')',backgroundRepeat:'no-repeat',backgroundPosition:'0 '+(from||'88%'),backgroundSize:'0% '+(to||'.16em'),WebkitBoxDecorationBreak:'clone',boxDecorationBreak:'clone',transition:'background-size .9s '+E+' .25s',paddingBottom:'.04em'}};
  var grain='url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'180\' height=\'180\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/><feColorMatrix values=\'0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .55 0\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/></svg>")';

  return {
    '@global':{
      /* ---------- tokens (light brand base) ---------- */
      ':root':{'--bg':c.cream,'--surface':c.cream2,'--surface-2':'#EADFC2','--ink':c.ink,'--ink-2':c.ink2,'--line':c.line,'--card':c.paper,'--shadow':'0 30px 60px -34px rgba(7,42,22,.45)','--green':c.green,'--green-deep':c.greenDeep,'--yellow':c.yellow},
      'html':{background:'var(--bg)',scrollbarColor:c.green+' '+c.cream2},
      'body':{background:'var(--bg)',fontFamily:f.body,color:'var(--ink)',fontWeight:400},
      '::selection':{background:c.yellow,color:c.ink},
      'h1, h2, h3, h4, .hh, .f2-h, .sc-name, .qc-n, .big':{fontFamily:f.body+'!important'},

      /* ---------- headline system ---------- */
      'h2':black('clamp(40px,6vw,88px)'),
      'h3':merge(heavy('22px'),{letterSpacing:'-.02em',lineHeight:1.15}),
      '.lede':{fontWeight:300,fontSize:'clamp(17px,1.5vw,20px)',lineHeight:1.6},
      'h1:has(.bar)::after, h2:has(.bar)::after':{display:'none!important'},
      '.bar':merge(underline(c.yellow,'86%','.18em'),{display:'inline!important'}),
      '.bar::after':{display:'none!important'},
      '.seen .bar, .seen.bar, .slide.active .bar, .view.on .phead .bar, .pd-info .bar':{backgroundSize:'100% .18em'},
      '.sec-head':{gap:'18px!important',marginBottom:'56px!important'},
      '.sec-head h2':{maxWidth:'15ch'},
      '.sec-head .lede':{maxWidth:'52ch'},

      /* ---------- header: cream pill, ink links, yellow active underline ---------- */
      'header.top':{background:'rgba(251,245,230,.82)!important',border:'1px solid rgba(17,22,15,.08)!important',borderRadius:'18px!important',boxShadow:'0 14px 40px -24px rgba(7,42,22,.5)!important',backdropFilter:'blur(16px) saturate(1.3)!important',WebkitBackdropFilter:'blur(16px) saturate(1.3)!important'},
      'header.top .brand .lg':{display:'block!important'},'header.top .brand .lw':{display:'none!important'},
      'nav.main a':{fontWeight:500,fontSize:'14.5px',color:c.ink2+'!important',letterSpacing:'-.005em'},
      'nav.main a[aria-current="page"]':{color:c.ink+'!important',fontWeight:600},
      'nav.main a::after':{height:'4px!important',borderRadius:'2px',background:c.yellow+'!important'},
      '.top .btn':{background:c.green+'!important',color:'#fff!important'},
      '.prog':{background:c.yellow+'!important',height:'3px!important'},

      /* ---------- buttons ---------- */
      '.btn':{fontFamily:f.body,fontWeight:600,letterSpacing:'-.005em',borderRadius:r.pill,padding:'16px 28px',fontSize:'15px',textTransform:'none'},
      '.btn-y':{background:c.yellow+'!important',color:c.ink+'!important'},
      '.btn-g':{background:c.green+'!important',color:'#fff!important'},
      '.btn-o':{boxShadow:'inset 0 0 0 2px currentColor!important',background:'transparent!important'},
      '.btn-y:hover':{boxShadow:'0 14px 30px -12px rgba(253,185,19,.95)!important'},

      /* ---------- hero ---------- */
      '.hero h1':merge(black('clamp(58px,8.2vw,132px)'),{lineHeight:'.9!important'}),
      '.hero h1 .bar':merge(thinItalic,{color:c.yellow+'!important',backgroundImage:'none!important'}),
      '.hero .hh, .pslider .hh':black('clamp(44px,6.4vw,100px)'),
      '.hero .lede, .pslider .lede':{fontWeight:300},
      '.hero::after':{content:'""',position:'absolute',inset:0,zIndex:1,pointerEvents:'none',background:'radial-gradient(90% 70% at 80% 45%,rgba(255,255,255,.10),transparent 60%)'},
      '.hero .slider':{position:'relative',zIndex:2},
      '.s-dots button':{height:'4px!important'},
      '.seal':{position:'absolute',zIndex:5,width:'clamp(96px,10vw,140px)',aspectRatio:'1',pointerEvents:'none'},
      '.seal svg':{width:'100%',height:'100%',animation:'sealSpin 18s linear infinite',overflow:'visible'},
      '.seal text':{fontFamily:f.body,fontWeight:700,fontSize:'10.6px',letterSpacing:'.22em',textTransform:'uppercase'},
      '.seal .core':{position:'absolute',inset:'28%',borderRadius:'50%',display:'grid',placeItems:'center',fontFamily:f.body,fontWeight:900,fontSize:'clamp(13px,1.3vw,17px)',letterSpacing:'-.03em',lineHeight:1,textAlign:'center'},
      '.hero .seal':{right:'clamp(16px,4vw,56px)',top:'clamp(20px,5vh,56px)'},
      '.hero .seal text':{fill:'#fff'},
      '.hero .seal .core':{background:c.yellow,color:c.ink},
      '@keyframes sealSpin':{to:{transform:'rotate(360deg)'}},

      /* ---------- marquees ---------- */
      '.ticker':{background:c.yellow+'!important',padding:'20px 0!important'},
      '.ticker span':merge(heavy('clamp(22px,2.8vw,36px)'),{color:c.forest+'!important',fontStyle:'normal!important'}),
      '.ticker span::after':{background:c.forest+'!important',width:'14px!important',height:'14px!important',borderRadius:'50%!important'},
      '.bigmq':{background:c.forest,overflow:'hidden',padding:'clamp(26px,4vw,48px) 0',whiteSpace:'nowrap',position:'relative'},
      '.bigmq-tr':{display:'inline-flex',alignItems:'center',animation:'tick 40s linear infinite',willChange:'transform'},
      '.bigmq-tr span':merge(black('clamp(64px,10vw,170px)'),{color:c.cream,padding:'0 .25em',display:'inline-flex',alignItems:'center',gap:'.25em'}),
      '.bigmq-tr span.o':{color:'transparent',WebkitTextStroke:'2px '+c.yellow},
      '.bigmq-tr span.i':merge(thinItalic,{color:c.yellow}),
      '.bigmq-tr span::after':{content:'""',width:'.32em',height:'.12em',borderRadius:'.06em',background:c.yellow,display:'inline-block'},

      /* ---------- pinned product showcase ---------- */
      '.pt':{position:'relative',height:'1050svh',background:c.forest,color:c.cream},
      '.pt-sticky':{position:'sticky',top:0,height:'100svh',overflow:'hidden'},
      '.pt-glow':{position:'absolute',left:'50%',top:'46%',width:'min(78vw,880px)',aspectRatio:'1',transform:'translate(-50%,-50%)',borderRadius:'50%',background:'radial-gradient(closest-side,var(--pt-glow,rgba(253,185,19,.4)),transparent 70%)',transition:'background .8s'},
      '.pt-ghost':merge(black('clamp(120px,24vw,420px)'),{position:'absolute',left:'50%',top:'44%',transform:'translate(-50%,-50%)',whiteSpace:'nowrap',color:'transparent',WebkitTextStroke:'1.5px rgba(251,245,230,.10)',pointerEvents:'none',transition:'opacity .5s'}),
      '.pt-stage':{position:'absolute',left:0,right:0,top:'9svh',bottom:'28svh',display:'grid',placeItems:'center'},
      '.pt-img':{gridArea:'1/1',height:'min(60svh,540px)',width:'auto',maxWidth:'70vw',objectFit:'contain',opacity:0,transform:'translateY(70px) scale(.85) rotate(-6deg)',filter:'drop-shadow(0 40px 40px rgba(0,0,0,.55))!important',transition:'opacity 1.1s '+E+', transform 1.5s '+E},
      '.pt-img.pt-wide':{height:'min(40svh,360px)',maxWidth:'72vw'},
      '.pt-duo':{display:'block',width:'min(62vw,720px)',height:'min(52svh,470px)',position:'relative'},
      '.pt-duo img':{position:'absolute',width:'62%',height:'auto',filter:'drop-shadow(0 40px 40px rgba(0,0,0,.55))'},
      '.pt-duo img:first-child':{left:0,top:0,transform:'rotate(-6deg)'},
      '.pt-duo img:last-child':{right:0,bottom:0,transform:'rotate(5deg)'},
      '.pt-img.on':{opacity:1,transform:'none',cursor:'pointer',animation:'ptFloat 8s ease-in-out infinite'},
      '@keyframes ptFloat':{'0%,100%':{translate:'0 0'},'50%':{translate:'0 -10px'}},
      '.pt-names':{position:'absolute',left:'clamp(16px,4vw,56px)',right:'34%',bottom:'calc(clamp(96px,13svh,130px) + 44px)',height:'1.9em',fontSize:'clamp(48px,7.4vw,124px)'},
      '.pt-name':merge(black('inherit'),{position:'absolute',left:0,bottom:0,margin:0,color:c.cream,opacity:0,transform:'translateY(45%)',transition:'opacity 1s, transform 1.2s '+E}),
      '.pt-name.on':{opacity:1,transform:'none'},
      '.pt-tags':{position:'absolute',left:'clamp(16px,4vw,56px)',bottom:'clamp(96px,13svh,130px)',width:'min(58vw,760px)',overflow:'hidden'},
      '.pt-tr':{display:'inline-flex',whiteSpace:'nowrap',animation:'tick 40s linear infinite'},
      '.pt-tr span':merge(eyebrow,{fontSize:'13px',color:c.cream,padding:'0 18px',display:'inline-flex',alignItems:'center',gap:'18px'}),
      '.pt-tr span::after':{content:'""',width:'12px',height:'4px',borderRadius:'2px',background:c.yellow},
      '.pt-desc':{position:'absolute',right:'clamp(84px,7vw,110px)',bottom:'calc(clamp(96px,13svh,130px) + 44px)',width:'min(320px,32vw)',fontSize:'15px',color:'rgba(251,245,230,.78)',fontWeight:300},
      '.pt-desc b':{display:'block',color:c.yellow,fontWeight:700,marginBottom:'8px'},
      '.pt-count':merge(eyebrow,{position:'absolute',right:'clamp(16px,4vw,56px)',top:'calc(100px + 3svh)',color:'rgba(251,245,230,.6)',fontVariantNumeric:'tabular-nums'}),
      '.pt-count b':{color:c.cream},
      '.pt-bar':{position:'absolute',left:'clamp(16px,4vw,56px)',top:'calc(100px + 3svh + 8px)',width:'140px',height:'4px',borderRadius:'2px',background:'rgba(251,245,230,.15)'},
      '.pt-bar i':{display:'block',height:'100%',borderRadius:'2px',background:c.yellow,transformOrigin:'left',transform:'scaleX(var(--pt-p,0))'},
      '.pt-skip':{position:'absolute',left:'50%',bottom:'clamp(28px,5svh,44px)',transform:'translateX(-50%)',background:c.yellow,color:c.ink+'!important',borderRadius:r.pill,padding:'14px 24px',textDecoration:'none',fontWeight:600,fontSize:'14px',whiteSpace:'nowrap',zIndex:3,transition:'transform .3s '+t.spring},
      '.pt-skip:hover':{transform:'translateX(-50%) scale(1.05)'},

      /* ---------- manifesto: words light up as you scroll ---------- */
      '.mani':{background:c.cream,padding:'clamp(90px,14vw,190px) 0',position:'relative',overflow:'hidden'},
      '.mani-eyebrow':merge(eyebrow,{color:c.green,display:'inline-flex',alignItems:'center',gap:'12px',marginBottom:'28px'}),
      '.mani-eyebrow::before':{content:'""',width:'40px',height:'6px',borderRadius:'3px',background:c.yellow},
      '.mani-txt':{fontFamily:f.body,fontWeight:600,fontSize:'clamp(28px,4.2vw,62px)',lineHeight:1.18,letterSpacing:'-.035em',margin:0,maxWidth:'22ch',color:c.ink},
      '.mani-txt .mw':{opacity:'var(--o,.14)',transition:'opacity .25s'},
      '.mani-txt em':merge(thinItalic,{fontWeight:200}),
      '.mani-sign':{marginTop:'40px',display:'flex',alignItems:'center',gap:'16px',fontWeight:300,fontSize:'18px',color:c.ink2},
      '.mani-sign img':{height:'34px',width:'auto'},
      '.mani .seal':{right:'clamp(16px,6vw,90px)',top:'clamp(40px,8vw,110px)',width:'clamp(110px,12vw,170px)'},
      '.mani .seal text':{fill:c.green},
      '.mani .seal .core':{background:c.green,color:c.yellow},

      /* ---------- jaggery spotlight ---------- */
      '.jag h2':black('clamp(44px,6vw,92px)'),
      '.jag-chip':{fontWeight:600},

      /* ---------- Our range: colour-blocked cards ---------- */
      'section.has-leaves:has(#rng)':{background:c.cream2},
      '.rng-bg':{display:'none'},
      '.rng-track .cat':{borderRadius:r.l+'!important',padding:'30px 28px 0!important',minHeight:'400px!important',boxShadow:'0 30px 50px -40px rgba(7,42,22,.6)'},
      '.rng-track .cat h3':merge(black('clamp(30px,2.6vw,40px)'),{color:'inherit'}),
      '.rng-track .cat p':{color:'inherit!important',opacity:.78,fontWeight:300},
      '.rng-track .cat:nth-child(4n+1)':{background:c.green+'!important',color:c.cream},
      '.rng-track .cat:nth-child(4n+2)':{background:c.yellow+'!important',color:c.ink},
      '.rng-track .cat:nth-child(4n+3)':{background:c.paper+'!important',color:c.ink},
      '.rng-track .cat:nth-child(4n+4)':{background:c.forest+'!important',color:c.cream},
      '.rng-track .cat:hover':{transform:'translateY(-8px) rotate(-.6deg)!important'},
      '.rng-ui .s-arr':{background:c.ink+'!important',borderColor:c.ink+'!important'},
      '.rng-dots button::after':{background:c.green+'!important'},

      /* ---------- recipes slider (from the packs) ---------- */
      '.rcps':{background:c.green,color:c.cream,padding:'clamp(80px,10vw,140px) 0',overflow:'hidden'},
      '.rcps .sec-head h2':{color:c.cream},
      '.rcps .sec-head .lede':{color:'rgba(251,245,230,.8)'},
      '.rcps .bar':merge(underline(c.yellow,'86%','.18em')),
      '.rc-view':{overflow:'visible'},
      '.rc-track':{display:'flex',gap:'22px',transition:'transform .8s '+E,touchAction:'pan-y',cursor:'grab'},
      '.rc-card':{flex:'0 0 clamp(270px,26vw,360px)',borderRadius:r.l,background:c.forest,padding:'26px',display:'flex',flexDirection:'column',gap:'14px',textDecoration:'none',color:c.cream,position:'relative',overflow:'hidden',minHeight:'440px',transition:'transform .5s '+t.spring+', background .3s'},
      '.rc-card:hover':{transform:'translateY(-10px) rotate(-1deg)',background:'#0a3a1f'},
      '.rc-card small':merge(eyebrow,{color:c.yellow}),
      '.rc-card h3':merge(black('clamp(26px,2.3vw,34px)'),{color:c.cream,margin:0}),
      '.rc-card p':{margin:0,fontWeight:300,color:'rgba(251,245,230,.75)',fontSize:'15px'},
      '.rc-card .rc-n':{marginTop:'auto',display:'flex',alignItems:'center',justifyContent:'space-between',fontWeight:600,fontSize:'14px'},
      '.rc-card .rc-n i':{fontStyle:'normal',color:c.yellow},
      '.rc-card img':{position:'absolute',right:'-14%',bottom:'52px',height:'52%',width:'auto',transform:'rotate(8deg)',filter:'drop-shadow(0 20px 20px rgba(0,0,0,.45))!important',transition:'transform .6s '+t.spring,opacity:.95},
      '.rc-card:hover img':{transform:'rotate(2deg) translateY(-10px) scale(1.05)'},
      '.rc-steps':{display:'flex',gap:'6px',position:'relative',zIndex:2},
      '.rc-steps button':{flex:1,height:'14px',padding:'5px 0',border:0,background:'transparent',cursor:'pointer',position:'relative'},
      '.rc-steps button::before':{content:'""',position:'absolute',left:0,right:0,top:'5px',height:'4px',borderRadius:'2px',background:'rgba(251,245,230,.18)'},
      '.rc-steps button::after':{content:'""',position:'absolute',left:0,right:0,top:'5px',height:'4px',borderRadius:'2px',background:c.yellow,transformOrigin:'left',transform:'scaleX(0)'},
      '.rc-steps button.done::after':{transform:'scaleX(1)'},
      '.rc-steps button.on::after':{animation:'rcFill var(--sd,3200ms) linear forwards'},
      '.rc-card.hold .rc-steps button.on::after':{animationPlayState:'paused'},
      '@keyframes rcFill':{to:{transform:'scaleX(1)'}},
      '.rc-stxt':{position:'relative',zIndex:2,display:'grid',maxWidth:'60%',minHeight:'7.5em'},
      '.rc-st':{gridArea:'1/1',margin:0,fontSize:'14px',lineHeight:1.5,fontWeight:300,color:'rgba(251,245,230,.9)',opacity:0,transform:'translateY(10px)',transition:'opacity .45s, transform .5s '+E},
      '.rc-st.on':{opacity:1,transform:'none'},
      '.rc-st b':{display:'block',color:c.yellow,fontWeight:700,fontSize:'12px',letterSpacing:'.12em',textTransform:'uppercase',marginBottom:'4px'},
      '.rc-ui':{display:'flex',alignItems:'center',gap:'14px',marginTop:'34px'},
      '.rc-ui .s-arr':{background:c.yellow+'!important',borderColor:c.yellow+'!important'},
      '.rc-ui .s-arr::before':{borderColor:c.ink+'!important'},
      '.rc-prog':{flex:'0 0 160px',height:'4px',borderRadius:'2px',background:'rgba(251,245,230,.2)',overflow:'hidden'},
      '.rc-prog i':{display:'block',height:'100%',background:c.yellow,transformOrigin:'left',transform:'scaleX(var(--rc,0))',transition:'transform .6s '+E},

      /* ---------- other home sections ---------- */
      '.horeca':{background:'#2a1a12!important'},
      '.why .gcard .num':black('52px'),
      '.scale':{background:c.cream+'!important'},
      '.legacy .tl .y':{fontWeight:900,letterSpacing:'-.03em'},
      '.cta':{background:c.yellow+'!important',color:c.ink+'!important'},
      '.cta h2':merge(black('clamp(40px,5.4vw,84px)'),{color:c.ink}),
      '.cta .btn-y':{background:c.ink+'!important',color:c.yellow+'!important'},
      '.cta .btn-o':{color:c.ink+'!important'},
      '.packrow a span':{fontWeight:600},

      /* ---------- inner pages ---------- */
      '.phead':{background:c.cream2+'!important'},
      '.phead h1, .pd-info h1':merge(black('clamp(52px,8vw,124px)'),{lineHeight:'.9!important'}),
      '.card':{background:c.paper+'!important',borderRadius:r.m+'!important',borderColor:'transparent!important',boxShadow:'0 24px 44px -36px rgba(7,42,22,.55)'},
      '.card .ph':{background:c.cream2+'!important'},
      '.card h3':heavy('20px'),
      '.chip':{fontWeight:500,background:'transparent!important',borderColor:c.line+'!important'},
      '.chip[aria-pressed="true"]':{background:c.green+'!important',borderColor:c.green+'!important',color:'#fff!important'},
      '.filters':{background:'var(--bg)!important'},
      '.svc h2, .rcp-head h2':black('clamp(34px,4vw,58px)'),
      '.steps li::before':{fontWeight:900},
      '.ntab':{background:c.paper+'!important'},
      '.pd-stage':{background:'radial-gradient(circle at 50% 58%,'+c.yellowSoft+',transparent 60%),'+c.cream2+'!important'},

      /* ---------- footer ---------- */
      'footer':{background:c.forest+'!important',position:'relative'},
      '.f2-h':merge(black('clamp(44px,6vw,96px)'),{color:c.cream}),
      '.f2-h em':merge(thinItalic,{color:c.yellow}),
      '.f-word':merge(black('clamp(90px,19vw,300px)'),{color:c.cream+'!important',WebkitTextStroke:'0!important',opacity:1,letterSpacing:'-.06em!important'}),
      '.f-word span:nth-child(5), .f-word span:nth-child(6)':{position:'relative'},
      '.f-word span:nth-child(5)::after, .f-word span:nth-child(6)::after':{content:'""',position:'absolute',left:'2%',right:'2%',bottom:'-.02em',height:'.1em',background:c.yellow,borderRadius:'.02em'},
      'footer .seal':{right:'clamp(16px,5vw,70px)',top:'-60px',width:'clamp(110px,11vw,150px)'},
      'footer .seal text':{fill:c.yellow},
      'footer .seal .core':{background:c.yellow,color:c.forest},

      /* ---------- loader ---------- */
      '#loader':{background:c.forest+'!important'},
      '#loader .ld-tag':{fontWeight:200,fontStyle:'italic'},
      '#loader .ld-tag em':{fontWeight:800,fontStyle:'normal'}
    },
    '@media (max-width:880px)':{
      '@global .pt-names':{right:'clamp(16px,4vw,56px)',bottom:'calc(clamp(96px,13svh,130px) + 40px)',fontSize:'clamp(40px,12vw,68px)'},
      '@global .pt-desc':{display:'none'},
      '@global .pt-skip':{left:'16px',transform:'none',padding:'12px 18px',fontSize:'13px'},
      '@global .pt-skip:hover':{transform:'none'},
      '@global .pt-tags':{width:'calc(100% - 32px)'},
      '@global .pt-stage':{bottom:'40svh',top:'13svh'},
      '@global .pt-img':{height:'min(44svh,420px)'},
      '@global .pt-duo':{width:'90vw',height:'min(40svh,360px)'},
      '@global .pt-duo img':{width:'64%'},
      '@global .hero .seal':{display:'none'},
      '@global .hero h1':{fontSize:'clamp(40px,11.5vw,54px)!important'},
      '@global .hero .lede':{fontSize:'15px',lineHeight:1.55},
      '@global .hero .hh, .pslider .hh':{fontSize:'clamp(36px,10.5vw,50px)!important'},
      '@global .mani .seal':{position:'relative',right:'auto',top:'auto',margin:'0 0 24px'},
      '@global .f-word':{fontSize:'clamp(56px,18vw,110px)!important'},
      '@global .rc-card':{flex:'0 0 80vw'}
    },
    '@media (prefers-reduced-motion:reduce)':{
      '@global .seal svg, .pt-tr, .bigmq-tr':{animation:'none'},
      '@global .mani-txt .mw':{opacity:'1!important'}
    }
  };
};
