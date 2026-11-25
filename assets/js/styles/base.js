/* Century base styles, authored as a JSS object (converted from the original stylesheet). Order matters: later rules override earlier ones. */
window.CENTURY_STYLES = window.CENTURY_STYLES || {};
window.CENTURY_STYLES.properties = [
  { name: "--ang", syntax: "<angle>", inherits: false, initialValue: "0deg" },
];
window.CENTURY_STYLES.base = {
  "@global": {
    "@keyframes viewIn": {
      from: {
        opacity: "0",
        transform: "translateY(12px)",
      },
      to: {
        opacity: "1",
        transform: "none",
      },
    },
    "@keyframes barIn": {
      to: {
        transform: "scaleX(1)",
      },
    },
    "@keyframes rise": {
      from: {
        opacity: "0",
        transform: "translateY(120px)",
      },
    },
    "@keyframes drift": {
      "0%": {
        transform: "translate(0,0) scale(1)",
      },
      "50%": {
        transform: "translate(8vw,-6vh) scale(1.15)",
      },
      "100%": {
        transform: "translate(-6vw,8vh) scale(.92)",
      },
    },
    "@keyframes hdrIn": {
      from: {
        transform: "translateY(-100%)",
      },
    },
    "@keyframes fadeDown": {
      from: {
        opacity: "0",
        transform: "translateY(-14px)",
      },
    },
    "@keyframes curt": {
      "0%": {
        transform: "translateY(100%)",
      },
      "40%,55%": {
        transform: "translateY(0)",
      },
      "100%": {
        transform: "translateY(-100%)",
      },
    },
    "@keyframes curtLogo": {
      "30%": {
        opacity: "0",
        transform: "scale(.9)",
      },
      "45%,55%": {
        opacity: "1",
        transform: "none",
      },
      "75%": {
        opacity: "0",
      },
    },
    "@keyframes wordUp": {
      from: {
        opacity: "0",
        transform: "translateY(40px)",
        filter: "blur(8px)",
      },
    },
    "@keyframes chipIn": {
      from: {
        opacity: "0",
        transform: "scale(.6) translateY(20px)",
      },
    },
    "@keyframes bob": {
      "0%,100%": {
        translate: "0 0",
      },
      "50%": {
        translate: "0 -10px",
      },
    },
    "@keyframes tick": {
      to: {
        transform: "translateX(-50%)",
      },
    },
    "@keyframes shine": {
      to: {
        transform: "translateX(120%)",
      },
    },
    "@keyframes shine2": {
      from: {
        transform: "translateX(-120%)",
      },
      to: {
        transform: "translateX(120%)",
      },
    },
    "@keyframes ang": {
      to: {
        "--ang": "360deg",
      },
    },
    "@keyframes stageIn": {
      from: {
        opacity: "0",
        transform: "scale(.94)",
        "border-radius": "50%",
      },
    },
    "@keyframes spin": {
      to: {
        transform: "rotate(360deg)",
      },
    },
    "@keyframes swapIn": {
      from: {
        opacity: "0",
        transform: "rotateY(40deg) scale(.85)",
      },
    },
    "@keyframes pulse": {
      to: {
        transform: "scale(1.6)",
        opacity: "0",
      },
    },
    "@keyframes slideUp": {
      from: {
        opacity: "0",
        transform: "translateY(40px)",
        filter: "blur(8px)",
      },
      to: {
        opacity: "1",
        transform: "none",
        filter: "none",
      },
    },
    "@keyframes packIn": {
      from: {
        opacity: "0",
        transform: "translateY(140px) scale(.8) rotate(0)",
      },
      to: {
        opacity: "1",
        transform: "var(--t)",
      },
    },
    "@keyframes chipShow": {
      from: {
        opacity: "0",
        transform: "scale(.6) translateY(20px)",
      },
      to: {
        opacity: "1",
        transform: "none",
      },
    },
    "@keyframes fill": {
      to: {
        transform: "scaleX(1)",
      },
    },
    "@keyframes ldLogo": {
      from: {
        opacity: "0",
        transform: "translateY(20px) scale(.9)",
        filter: "blur(6px)",
      },
      to: {
        opacity: "1",
        transform: "none",
        filter: "none",
      },
    },
    "@keyframes ldBar": {
      from: {
        transform: "scaleX(0)",
      },
      to: {
        transform: "scaleX(1)",
      },
    },
    "@keyframes rip": {
      to: {
        transform: "scale(1)",
        opacity: "0",
      },
    },
    "@keyframes shim": {
      "0%,70%": {
        left: "-60%",
      },
      "100%": {
        left: "130%",
      },
    },
    "@keyframes bobI": {
      "0%,100%": {
        translate: "0 0",
      },
      "50%": {
        translate: "0 -9px",
      },
    },
    "@keyframes gs": {
      "0%,100%": {
        transform: "translateX(-50%) scale(1)",
        opacity: "1",
      },
      "50%": {
        transform: "translateX(-50%) scale(.82)",
        opacity: ".6",
      },
    },
    "@keyframes pRise": {
      "0%": {
        transform: "translateY(0) scale(.6)",
        opacity: "0",
      },
      "15%": {
        opacity: ".9",
      },
      "100%": {
        transform: "translateY(-300px) translateX(var(--x,0)) scale(1.1)",
        opacity: "0",
      },
    },
    "@keyframes wig": {
      "25%": {
        transform: "rotate(-8deg) scale(1.1)",
      },
      "50%": {
        transform: "rotate(6deg)",
      },
      "75%": {
        transform: "rotate(-3deg)",
      },
    },
    "@keyframes leaf": {
      "0%,100%": {
        transform: "translate(0,0) rotate(0)",
      },
      "33%": {
        transform: "translate(30px,-40px) rotate(40deg)",
      },
      "66%": {
        transform: "translate(-20px,-15px) rotate(-25deg)",
      },
    },
    "@keyframes twk": {
      "0%,100%": {
        transform: "scale(0) rotate(0)",
        opacity: "0",
      },
      "50%": {
        transform: "scale(1) rotate(90deg)",
        opacity: "1",
      },
    },
    "@keyframes ldPack": {
      from: {
        opacity: "0",
        transform: "translateY(60px) scale(.6) rotate(-10deg)",
      },
      to: {
        opacity: "1",
        transform: "none",
      },
    },
    "@keyframes pinB": {
      "0%,100%": {
        transform: "translateY(0)",
      },
      "50%": {
        transform: "translateY(-6px)",
      },
    },
    "@keyframes accIn": {
      from: {
        opacity: "0",
        transform: "translateY(-8px)",
      },
    },
    "@keyframes barGrow": {
      from: {
        transform: "scaleX(0)",
      },
      to: {
        transform: "scaleX(1)",
      },
    },
    "@keyframes draw": {
      to: {
        "stroke-dashoffset": "0",
      },
    },
    "@keyframes fadeIn": {
      to: {
        opacity: "1",
      },
    },
    "@keyframes pinDrop": {
      from: {
        opacity: "0",
        transform: "translateY(-140px)",
      },
      to: {
        opacity: "1",
        transform: "none",
      },
    },
    "@keyframes pinFloat": {
      "0%,100%": {
        transform: "translateY(0)",
      },
      "50%": {
        transform: "translateY(-8px)",
      },
    },
    "@keyframes rpl": {
      "0%": {
        transform: "scale(.3)",
        opacity: ".9",
      },
      "100%": {
        transform: "scale(3)",
        opacity: "0",
      },
    },
    "@keyframes shDrift": {
      to: {
        transform: "translate(18px,-12px) scale(1.15)",
        opacity: ".55",
      },
    },
    "@keyframes shSweep": {
      "0%,60%": {
        left: "-30%",
      },
      "100%": {
        left: "130%",
      },
    },
    "@keyframes shLand": {
      "0%": {
        transform: "translateY(-60%) rotate(var(--r0,-6deg))",
        opacity: "0",
      },
      "60%": {
        opacity: "1",
      },
      "100%": {
        transform: "none",
        opacity: "1",
      },
    },
    "@keyframes shNudge": {
      "50%": {
        transform: "translateX(8px)",
      },
    },
    "@keyframes jagPulse": {
      "50%": {
        transform: "translate(-50%,-50%) scale(1.08)",
        opacity: ".7",
      },
    },
    "@keyframes jagTilt": {
      "0%,100%": {
        transform: "rotate(-16deg) translateY(0)",
      },
      "45%,65%": {
        transform: "rotate(-34deg) translateY(10px)",
      },
    },
    "@keyframes jagTea": {
      "0%,40%": {
        background: "#7a4b2a",
      },
      "70%,100%": {
        background: "#a8672f",
      },
    },
    "@keyframes jagSteam": {
      "0%": {
        transform: "translateY(20%) scaleY(.6)",
        opacity: "0",
      },
      "50%": {
        opacity: "1",
      },
      "100%": {
        transform: "translateY(-30%) scaleY(1.1)",
        opacity: "0",
      },
    },
    "@keyframes jpCut": {
      "0%,12%": {
        transform: "rotate(45deg) scaleX(0)",
        opacity: "1",
      },
      "28%": {
        transform: "rotate(45deg) scaleX(1)",
        opacity: "1",
      },
      "34%,100%": {
        transform: "rotate(45deg) scaleX(1)",
        opacity: "0",
      },
    },
    "@keyframes jpSnip": {
      "0%,10%": {
        opacity: "0",
        transform: "translate(0,0) rotate(45deg)",
      },
      "13%": {
        opacity: "1",
        transform: "translate(0,0) rotate(45deg)",
      },
      "16%": {
        transform: "translate(18%,22%) rotate(38deg)",
      },
      "19%": {
        transform: "translate(40%,48%) rotate(48deg)",
      },
      "22%": {
        transform: "translate(62%,74%) rotate(38deg)",
      },
      "25%": {
        transform: "translate(84%,100%) rotate(48deg)",
      },
      "28%": {
        opacity: "1",
        transform: "translate(104%,124%) rotate(42deg)",
      },
      "32%,100%": {
        opacity: "0",
        transform: "translate(130%,150%) rotate(42deg)",
      },
    },
    "@keyframes jpCorner": {
      "0%,29%": {
        transform: "none",
        opacity: "1",
      },
      "42%": {
        transform: "translate(70%,160%) rotate(140deg)",
        opacity: "0",
      },
      "96%": {
        transform: "translate(70%,160%) rotate(140deg)",
        opacity: "0",
      },
      "100%": {
        transform: "none",
        opacity: "1",
      },
    },
    "@keyframes jpBody": {
      "0%,100%": {
        opacity: "1",
      },
    },
    "@keyframes jpTilt": {
      "0%,34%": {
        transform: "translate(0,0) rotate(-6deg)",
      },
      "47%": {
        transform: "translate(66%,-14%) rotate(100deg)",
      },
      "52%,78%": {
        transform: "translate(70%,-16%) rotate(108deg)",
      },
      "90%,100%": {
        transform: "translate(0,0) rotate(-6deg)",
      },
    },
    "@keyframes khTea": {
      "0%,52%": {
        background: "radial-gradient(ellipse at 40% 40%,#b07a48,#7c4b25 70%)",
        transform: "scale(.96)",
      },
      "80%,100%": {
        background: "radial-gradient(ellipse at 40% 40%,#cf9a63,#9c6534 70%)",
        transform: "scale(1)",
      },
    },
    "@keyframes rngPop": {
      from: {
        opacity: "0",
        translate: "0 60px",
      },
      to: {
        opacity: "1",
        translate: "0 0",
      },
    },
    "@keyframes khTea2": {
      "0%,52%": {
        opacity: ".82",
        transform: "scale(.97)",
      },
      "80%,100%": {
        opacity: "1",
        transform: "scale(1)",
      },
    },
  },
  "@global :root": {
    "--green": "#136C37",
    "--green-deep": "#0C4D27",
    "--yellow": "#FDB913",
    "--gray": "#9D9D9E",
    "--bg": "#FFFFFF",
    "--surface": "#F2F6F3",
    "--surface-2": "#E4EDE6",
    "--ink": "#000000",
    "--ink-2": "#3d4a42",
    "--line": "#d6e1d9",
    "--on-green": "#FFFFFF",
    "--card": "#FFFFFF",
    "--shadow": "0 18px 40px -22px rgba(12,77,39,.45)",
    "--r-s": "6px",
    "--r-m": "14px",
    "--r-l": "28px",
    "--max": "1200px",
    "box-sizing": "border-box",
    "padding-top": "env(safe-area-inset-top,0px)",
    "padding-bottom": "env(safe-area-inset-bottom,0px)",
  },
  "@media (prefers-color-scheme:dark)": {
    '@global :root:not([data-theme="light"])': {
      "--bg": "#0A1F12",
      "--surface": "#10291A",
      "--surface-2": "#173622",
      "--ink": "#F3F7F4",
      "--ink-2": "#B7C8BC",
      "--line": "#21432D",
      "--card": "#12301E",
      "--shadow": "0 18px 40px -22px rgba(0,0,0,.8)",
    },
  },
  '@global :root[data-theme="dark"]': {
    "--bg": "#0A1F12",
    "--surface": "#10291A",
    "--surface-2": "#173622",
    "--ink": "#F3F7F4",
    "--ink-2": "#B7C8BC",
    "--line": "#21432D",
    "--card": "#12301E",
    "--shadow": "0 18px 40px -22px rgba(0,0,0,.8)",
  },
  "@global *,*::before,*::after": {
    "box-sizing": "inherit",
  },
  "@global html": {
    "scroll-behavior": "smooth",
    "scroll-padding-top": "calc(env(safe-area-inset-top,0px) + 80px)",
  },
  "@global body": {
    margin: "0",
    background: "var(--bg)",
    color: "var(--ink)",
    "font-family":
      '"Poppins",system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif',
    "font-size": "17px",
    "line-height": "1.55",
    "-webkit-font-smoothing": "antialiased",
    "overflow-x": "hidden",
  },
  "@global img": {
    "max-width": "100%",
    display: "block",
  },
  "@global a": {
    color: "inherit",
  },
  "@global button": {
    font: "inherit",
    cursor: "pointer",
  },
  "@global :focus-visible": {
    outline: "3px solid var(--yellow)",
    "outline-offset": "3px",
    "border-radius": "4px",
  },
  "@global .wrap": {
    "max-width": "var(--max)",
    margin: "0 auto",
    padding: "0 24px",
  },
  "@global h1,h2,h3": {
    "line-height": "1.05",
    "letter-spacing": "-.02em",
    margin: "0",
    "font-weight": "800",
  },
  "@global h2": {
    "font-size": "clamp(32px,4.6vw,56px)",
  },
  "@global h3": {
    "font-size": "22px",
    "font-weight": "700",
    "letter-spacing": "-.01em",
  },
  "@global p": {
    margin: "0 0 1em",
  },
  "@global .lede": {
    "font-size": "clamp(18px,1.6vw,21px)",
    color: "var(--ink-2)",
    "max-width": "60ch",
    "font-weight": "300",
  },
  "@global .bar": {
    display: "inline-block",
    position: "relative",
  },
  "@global .bar::after": {
    content: '""',
    position: "absolute",
    left: "0",
    bottom: "-.18em",
    height: ".14em",
    width: "2.2em",
    background: "var(--yellow)",
    "transform-origin": "left",
    transition: "transform .6s cubic-bezier(.2,.8,.2,1)",
  },
  "@global .sec-head": {
    "margin-bottom": "44px",
    display: "grid",
    gap: "22px",
  },
  "@global .sec-head h2 .bar::after": {
    width: "1.6em",
  },
  "@global header.top": {
    position: "sticky",
    top: "0",
    "z-index": "50",
    background: "color-mix(in srgb,var(--bg) 88%,transparent)",
    "backdrop-filter": "saturate(1.4) blur(12px)",
    "-webkit-backdrop-filter": "saturate(1.4) blur(12px)",
    "border-bottom": "1px solid var(--line)",
    "padding-top": "env(safe-area-inset-top,0px)",
  },
  "@global .top .wrap": {
    display: "flex",
    "align-items": "center",
    height: "72px",
    gap: "28px",
  },
  "@global .brand img": {
    height: "34px",
    width: "auto",
  },
  "@global .brand .lw": {
    display: "none",
  },
  "@media  (prefers-color-scheme:dark)": {
    '@global :root:not([data-theme="light"]) .brand .lg': {
      display: "none",
    },
    '@global :root:not([data-theme="light"]) .brand .lw': {
      display: "block",
    },
  },
  '@global :root[data-theme="dark"] .brand .lg': {
    display: "none",
  },
  '@global :root[data-theme="dark"] .brand .lw': {
    display: "block",
  },
  "@global nav.main": {
    display: "flex",
    gap: "4px",
    "margin-left": "auto",
  },
  "@global nav.main a": {
    "text-decoration": "none",
    "font-weight": "500",
    padding: "10px 14px",
    position: "relative",
    color: "var(--ink-2)",
  },
  "@global nav.main a::after": {
    content: '""',
    position: "absolute",
    left: "14px",
    right: "14px",
    bottom: "4px",
    height: "3px",
    background: "var(--yellow)",
    transform: "scaleX(0)",
    "transform-origin": "left",
    transition: "transform .35s cubic-bezier(.2,.8,.2,1)",
  },
  "@global nav.main a:hover::after": {
    transform: "scaleX(.5)",
  },
  '@global nav.main a[aria-current="page"]': {
    color: "var(--ink)",
  },
  '@global nav.main a[aria-current="page"]::after': {
    transform: "scaleX(1)",
  },
  "@global .btn": {
    display: "inline-flex",
    "align-items": "center",
    gap: "10px",
    border: "0",
    "border-radius": "999px",
    padding: "14px 24px",
    "font-weight": "600",
    "text-decoration": "none",
    transition: "transform .2s,background .2s,box-shadow .2s",
  },
  "@global .btn:active": {
    transform: "scale(.97)",
  },
  "@global .btn-y": {
    background: "var(--yellow)",
    color: "#000",
  },
  "@global .btn-y:hover": {
    "box-shadow": "0 10px 24px -10px rgba(253,185,19,.9)",
  },
  "@global .btn-g": {
    background: "var(--green)",
    color: "#fff",
  },
  "@global .btn-g:hover": {
    background: "var(--green-deep)",
  },
  "@global .btn-o": {
    background: "transparent",
    color: "inherit",
    "box-shadow": "inset 0 0 0 2px currentColor",
  },
  "@global .top .btn": {
    padding: "11px 20px",
  },
  "@global .menu-t": {
    display: "none",
    background: "none",
    border: "0",
    padding: "10px",
    "margin-left": "auto",
    color: "var(--ink)",
  },
  "@global .menu-t span": {
    display: "block",
    width: "24px",
    height: "2.5px",
    background: "currentColor",
    margin: "5px 0",
    "border-radius": "2px",
    transition: "transform .3s,opacity .3s",
  },
  "@media (max-width:880px)": {
    "@global nav.main,.top .btn": {
      display: "none",
    },
    "@global  .menu-t": {
      display: "block",
    },
    "@global body.menu-open nav.main": {
      display: "flex",
      position: "fixed",
      inset: "72px 0 auto 0",
      top: "calc(72px + env(safe-area-inset-top,0px))",
      "flex-direction": "column",
      background: "var(--bg)",
      padding: "12px 24px 28px",
      "border-bottom": "1px solid var(--line)",
      "box-shadow": "var(--shadow)",
    },
    "@global body.menu-open nav.main a": {
      "font-size": "22px",
      padding: "14px 0",
    },
    "@global body.menu-open nav.main a::after": {
      left: "0",
      right: "auto",
      width: "44px",
    },
    "@global body.menu-open .menu-t span:nth-child(1)": {
      transform: "translateY(7.5px) rotate(45deg)",
    },
    "@global body.menu-open .menu-t span:nth-child(2)": {
      opacity: "0",
    },
    "@global body.menu-open .menu-t span:nth-child(3)": {
      transform: "translateY(-7.5px) rotate(-45deg)",
    },
  },
  "@global .view": {
    display: "none",
  },
  "@global .view.on": {
    display: "block",
    animation: "viewIn .5s cubic-bezier(.2,.8,.2,1)",
  },
  "@global section": {
    padding: "96px 0",
  },
  "@media (max-width:700px)": {
    "@global  section": {
      padding: "64px 0",
    },
  },
  "@global .hero": {
    background: "var(--green)",
    color: "#fff",
    padding: "72px 0 0",
    position: "relative",
    overflow: "hidden",
  },
  "@global .hero::before": {
    content: '""',
    position: "absolute",
    inset: "0",
    background:
      "radial-gradient(1200px 500px at 70% 110%,rgba(255,255,255,.10),transparent 60%)",
    "pointer-events": "none",
  },
  "@global .hero-grid": {
    display: "grid",
    "grid-template-columns": "minmax(0,5fr) minmax(0,6fr)",
    gap: "40px",
    "align-items": "end",
    position: "relative",
  },
  "@global .hero h1": {
    "font-size": "clamp(44px,6.6vw,92px)",
    "font-weight": "900",
    "letter-spacing": "-.035em",
    "line-height": ".95",
  },
  "@global .hero h1 .bar::after": {
    height: ".11em",
    bottom: "-.12em",
    width: "100%",
    background: "var(--yellow)",
    transform: "scaleX(0)",
  },
  "@global .slide.active .hero-copy h1 .bar::after": {
    animation: "barIn .9s 1.1s cubic-bezier(.2,.8,.2,1) forwards",
  },
  "@global .hero .lede": {
    color: "rgba(255,255,255,.86)",
    margin: "30px 0 34px",
  },
  "@global .hero-copy": {
    "padding-bottom": "96px",
    position: "relative",
    "z-index": "2",
  },
  "@global  .hero h1": {
    animation: "none",
  },
  "@global .hero-ctas": {
    display: "flex",
    gap: "12px",
    "flex-wrap": "wrap",
  },
  "@global .hero .btn-o": {
    color: "#fff",
  },
  "@global .stage": {
    position: "relative",
    height: "clamp(380px,46vw,560px)",
    perspective: "1400px",
  },
  "@global .shelf": {
    position: "absolute",
    left: "-6%",
    right: "-30vw",
    bottom: "0",
    height: "22px",
    background: "var(--yellow)",
    "border-radius": "3px 0 0 0",
  },
  "@global .shelf::after": {
    content: '""',
    position: "absolute",
    left: "0",
    right: "0",
    top: "22px",
    height: "40px",
    background: "linear-gradient(rgba(0,0,0,.18),transparent)",
  },
  "@global .packs": {
    position: "absolute",
    inset: "0 0 22px 0",
    "transform-style": "preserve-3d",
    transition: "transform .5s cubic-bezier(.2,.8,.2,1)",
  },
  "@global .pk": {
    position: "absolute",
    bottom: "0",
    "transform-origin": "50% 100%",
    opacity: "0",
    transform: "translateY(80px)",
    transition: "transform .7s cubic-bezier(.2,.8,.2,1),filter .5s",
    filter: "drop-shadow(0 22px 22px rgba(0,0,0,.35))",
    cursor: "pointer",
    background: "none",
    border: "0",
    padding: "0",
  },
  "@global .pk img": {
    height: "100%",
    width: "auto",
    "pointer-events": "none",
  },
  "@global .stage.in .pk": {
    opacity: "1",
    animation: "rise .9s cubic-bezier(.2,.9,.25,1.15) backwards",
  },
  "@global .pk.hl": {
    "z-index": "9 !important",
  },
  "@global .stage-cap": {
    position: "absolute",
    right: "0",
    top: "0",
    "text-align": "right",
    color: "#fff",
    "max-width": "260px",
  },
  "@global .stage-cap small": {
    display: "block",
    color: "var(--yellow)",
    "font-weight": "600",
    "font-size": "14px",
    "margin-bottom": "4px",
  },
  "@global .stage-cap b": {
    display: "block",
    "font-size": "24px",
    "line-height": "1.1",
    "font-weight": "800",
    transition: "opacity .3s",
  },
  "@global .stage-cap span": {
    display: "block",
    "font-size": "15px",
    opacity: ".8",
    "margin-top": "6px",
    transition: "opacity .3s",
  },
  "@media  (max-width:880px)": {
    "@global  .hero-grid": {
      "grid-template-columns": "1fr",
    },
    "@global  .hero-copy": {
      "padding-bottom": "0",
    },
    "@global  .stage": {
      height: "330px",
      "margin-top": "20px",
    },
    "@global  .stage-cap": {
      display: "none",
    },
  },
  "@global .cats": {
    display: "grid",
    "grid-template-columns": "repeat(4,1fr)",
    gap: "18px",
  },
  "@global .cat": {
    position: "relative",
    "border-radius": "var(--r-l)",
    background: "var(--surface)",
    padding: "26px 24px 0",
    "min-height": "340px",
    overflow: "hidden",
    "text-decoration": "none",
    display: "flex",
    "flex-direction": "column",
    transition: "background .3s",
  },
  "@global .cat:hover": {
    background: "var(--surface-2)",
  },
  "@global .cat h3": {
    "font-size": "26px",
  },
  "@global .cat p": {
    color: "var(--ink-2)",
    "font-size": "15px",
    margin: "8px 0 0",
  },
  "@global .cat .imgs": {
    "margin-top": "auto",
    position: "relative",
    height: "200px",
  },
  "@global .cat .imgs img": {
    position: "absolute",
    bottom: "-14px",
    height: "190px",
    width: "auto",
    "object-fit": "contain",
    transition: "transform .5s cubic-bezier(.2,.8,.2,1)",
    filter: "drop-shadow(0 12px 14px rgba(0,0,0,.2))",
  },
  "@global .cat .imgs img:nth-child(1)": {
    left: "50%",
    transform: "translateX(-90%) rotate(-7deg)",
  },
  "@global .cat .imgs img:nth-child(2)": {
    left: "50%",
    transform: "translateX(-10%) rotate(6deg)",
  },
  "@global .cat:hover .imgs img:nth-child(1)": {
    transform: "translateX(-100%) translateY(-14px) rotate(-11deg)",
  },
  "@global .cat:hover .imgs img:nth-child(2)": {
    transform: "translateX(0%) translateY(-14px) rotate(10deg)",
  },
  "@global .cat .imgs img.sq": {
    height: "170px",
    "border-radius": "12px",
  },
  "@global .cat .n": {
    order: "-1",
    "margin-bottom": "6px",
    "font-weight": "600",
    "font-size": "14px",
    color: "var(--green)",
  },
  '@global :root[data-theme="dark"] .cat .n': {
    color: "var(--yellow)",
  },
  "@media   (prefers-color-scheme:dark)": {
    '@global :root:not([data-theme="light"]) .cat .n': {
      color: "var(--yellow)",
    },
  },
  "@media (max-width:980px)": {
    "@global  .cats": {
      "grid-template-columns": "repeat(2,1fr)",
    },
  },
  "@media (max-width:560px)": {
    "@global   .cats": {
      "grid-template-columns": "1fr",
    },
    "@global  .cat": {
      "min-height": "300px",
    },
  },
  "@global .protein": {
    background: "var(--yellow)",
    color: "#000",
    overflow: "hidden",
  },
  "@global .protein .wrap": {
    display: "grid",
    "grid-template-columns": "1fr 1fr",
    gap: "48px",
    "align-items": "center",
  },
  "@global .big": {
    "font-size": "clamp(110px,17vw,230px)",
    "font-weight": "900",
    "line-height": ".8",
    "letter-spacing": "-.06em",
    color: "var(--green)",
  },
  "@global .big sup": {
    "font-size": ".4em",
    "vertical-align": ".95em",
    "letter-spacing": "0",
  },
  "@global .protein h2": {
    "font-size": "clamp(28px,3.4vw,44px)",
    margin: "18px 0 18px",
    "max-width": "16ch",
  },
  "@global .protein p": {
    "max-width": "46ch",
  },
  "@global .facts": {
    display: "flex",
    "flex-wrap": "wrap",
    gap: "8px",
    margin: "22px 0 28px",
    padding: "0",
    "list-style": "none",
  },
  "@global .facts li": {
    background: "rgba(0,0,0,.08)",
    "border-radius": "999px",
    padding: "7px 14px",
    "font-weight": "500",
    "font-size": "15px",
  },
  "@global .fan": {
    position: "relative",
    height: "440px",
  },
  "@global .fan img": {
    position: "absolute",
    bottom: "0",
    height: "380px",
    width: "auto",
    filter: "drop-shadow(0 24px 24px rgba(0,0,0,.25))",
    transition: "transform .6s cubic-bezier(.2,.8,.2,1)",
  },
  "@global .fan img:nth-child(1)": {
    left: "0",
    transform: "rotate(-10deg)",
  },
  "@global .fan img:nth-child(2)": {
    left: "22%",
    transform: "rotate(-3deg) translateY(-10px)",
  },
  "@global .fan img:nth-child(3)": {
    left: "44%",
    transform: "rotate(4deg) translateY(-4px)",
  },
  "@global .fan img:nth-child(4)": {
    left: "64%",
    transform: "rotate(11deg) translateY(8px)",
  },
  "@global .fan:hover img:nth-child(1)": {
    transform: "rotate(-14deg) translateX(-20px)",
  },
  "@global .fan:hover img:nth-child(4)": {
    transform: "rotate(15deg) translateX(20px) translateY(8px)",
  },
  "@media   (max-width:880px)": {
    "@global  .protein .wrap": {
      "grid-template-columns": "1fr",
    },
    "@global  .fan": {
      height: "300px",
    },
    "@global  .fan img": {
      height: "250px",
    },
  },
  "@global .horeca": {
    background: "#2a1a12",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
  },
  "@global .horeca .wrap": {
    display: "grid",
    "grid-template-columns": "1.1fr 1fr",
    gap: "56px",
    "align-items": "center",
  },
  "@global .horeca .lede": {
    color: "rgba(255,255,255,.8)",
  },
  "@global .sachets": {
    display: "grid",
    "grid-template-columns": "1fr 1fr",
    gap: "14px",
  },
  "@global .sachets figure": {
    margin: "0",
    "border-radius": "var(--r-m)",
    overflow: "hidden",
    position: "relative",
    "aspect-ratio": "1",
  },
  "@global .sachets figure:first-child": {
    "grid-row": "span 2",
    "aspect-ratio": "auto",
  },
  "@global .sachets img": {
    width: "100%",
    height: "100%",
    "object-fit": "cover",
    transition: "transform 1.2s cubic-bezier(.2,.8,.2,1)",
  },
  "@global .sachets figure:hover img": {
    transform: "scale(1.07)",
  },
  "@global .sachets figcaption": {
    position: "absolute",
    left: "12px",
    bottom: "12px",
    background: "rgba(0,0,0,.6)",
    "backdrop-filter": "blur(6px)",
    "-webkit-backdrop-filter": "blur(6px)",
    color: "#fff",
    "font-size": "14px",
    padding: "6px 12px",
    "border-radius": "999px",
  },
  "@global .chaayos": {
    display: "flex",
    gap: "16px",
    "align-items": "center",
    margin: "26px 0 30px",
    padding: "18px 20px",
    "border-left": "4px solid var(--yellow)",
    background: "rgba(255,255,255,.06)",
    "border-radius": "0 var(--r-m) var(--r-m) 0",
  },
  "@global .chaayos b": {
    "font-size": "18px",
  },
  "@media    (max-width:880px)": {
    "@global  .horeca .wrap": {
      "grid-template-columns": "1fr",
    },
  },
  "@global .legacy .wrap": {
    display: "grid",
    "grid-template-columns": "1fr 1fr",
    gap: "56px",
    "align-items": "center",
  },
  "@global .photo-stack": {
    position: "relative",
    "aspect-ratio": "4/3.3",
  },
  "@global .photo-stack img": {
    position: "absolute",
    "border-radius": "var(--r-m)",
    "object-fit": "cover",
    "box-shadow": "var(--shadow)",
  },
  "@global .photo-stack img:nth-child(1)": {
    inset: "0 18% 18% 0",
    width: "82%",
    height: "82%",
  },
  "@global .photo-stack img:nth-child(2)": {
    right: "0",
    bottom: "0",
    width: "52%",
    height: "50%",
    border: "6px solid var(--bg)",
  },
  "@global .tl": {
    "list-style": "none",
    padding: "0",
    margin: "30px 0 0",
    position: "relative",
  },
  "@global .tl::before": {
    content: '""',
    position: "absolute",
    left: "44px",
    top: "10px",
    bottom: "10px",
    width: "2px",
    background: "var(--line)",
  },
  "@global .tl li": {
    display: "grid",
    "grid-template-columns": "90px 1fr",
    gap: "18px",
    padding: "12px 0",
    position: "relative",
  },
  "@global .tl li::before": {
    content: '""',
    position: "absolute",
    left: "39px",
    top: "22px",
    width: "12px",
    height: "12px",
    "border-radius": "50%",
    background: "var(--yellow)",
    "box-shadow": "0 0 0 4px var(--bg)",
  },
  "@global .tl .y": {
    "font-weight": "800",
    "font-size": "22px",
    color: "var(--green)",
    "text-align": "left",
    "padding-left": "60px",
    "grid-column": "1/-1",
    "margin-bottom": "-12px",
  },
  '@global :root[data-theme="dark"] .tl .y': {
    color: "var(--yellow)",
  },
  "@media    (prefers-color-scheme:dark)": {
    '@global :root:not([data-theme="light"]) .tl .y': {
      color: "var(--yellow)",
    },
  },
  "@global .tl .t": {
    "grid-column": "1/-1",
    "padding-left": "60px",
    color: "var(--ink-2)",
  },
  "@global .certs": {
    display: "flex",
    "flex-wrap": "wrap",
    gap: "10px",
    "margin-top": "30px",
  },
  "@global .certs span": {
    border: "1.5px solid var(--green)",
    color: "var(--green)",
    "border-radius": "var(--r-s)",
    padding: "8px 14px",
    "font-weight": "700",
    "font-size": "14px",
  },
  '@global :root[data-theme="dark"] .certs span': {
    "border-color": "var(--yellow)",
    color: "var(--yellow)",
  },
  "@media     (prefers-color-scheme:dark)": {
    '@global :root:not([data-theme="light"]) .certs span': {
      "border-color": "var(--yellow)",
      color: "var(--yellow)",
    },
  },
  "@media     (max-width:880px)": {
    "@global  .legacy .wrap": {
      "grid-template-columns": "1fr",
    },
  },
  "@global .cta": {
    background: "var(--green)",
    color: "#fff",
    "text-align": "left",
  },
  "@global .cta .wrap": {
    display: "flex",
    "justify-content": "space-between",
    "align-items": "center",
    gap: "30px",
    "flex-wrap": "wrap",
  },
  "@global .cta h2": {
    "max-width": "18ch",
  },
  "@global .phead": {
    background: "var(--surface)",
    padding: "72px 0 56px",
  },
  "@global .phead h1": {
    "font-size": "clamp(40px,6vw,76px)",
    "font-weight": "900",
    "letter-spacing": "-.035em",
    "margin-bottom": "22px",
  },
  "@global .filters": {
    display: "flex",
    gap: "8px",
    "flex-wrap": "wrap",
    "margin-bottom": "36px",
    position: "sticky",
    top: "calc(72px + env(safe-area-inset-top,0px))",
    "z-index": "5",
    background: "var(--bg)",
    padding: "14px 0",
  },
  "@global .chip": {
    border: "1.5px solid var(--line)",
    background: "var(--bg)",
    color: "var(--ink)",
    "border-radius": "999px",
    padding: "9px 18px",
    "font-weight": "500",
    transition: "background .2s,border-color .2s,color .2s",
  },
  "@global .chip:hover": {
    "border-color": "var(--green)",
  },
  '@global .chip[aria-pressed="true"]': {
    background: "var(--green)",
    "border-color": "var(--green)",
    color: "#fff",
  },
  "@global .chip .c": {
    opacity: ".6",
    "margin-left": "6px",
    "font-size": "14px",
  },
  "@global .grid": {
    display: "grid",
    "grid-template-columns": "repeat(auto-fill,minmax(250px,1fr))",
    gap: "22px",
  },
  "@global .card": {
    background: "var(--card)",
    border: "1px solid var(--line)",
    "border-radius": "var(--r-m)",
    overflow: "hidden",
    "text-align": "left",
    padding: "0",
    color: "inherit",
    display: "flex",
    "flex-direction": "column",
    perspective: "900px",
    "text-decoration": "none",
  },
  "@global .card:hover": {
    "border-color": "var(--green)",
    "box-shadow": "var(--shadow)",
  },
  "@global .card .ph": {
    background: "var(--surface)",
    height: "290px",
    display: "grid",
    "place-items": "center",
    padding: "22px",
    position: "relative",
    overflow: "hidden",
  },
  "@global .card .ph img": {
    filter: "drop-shadow(0 14px 14px rgba(0,0,0,.18))",
  },
  "@global .card .ph img.full": {
    "border-radius": "10px",
    filter: "none",
  },
  "@global .card .tag": {
    position: "absolute",
    top: "14px",
    left: "14px",
    background: "var(--yellow)",
    color: "#000",
    "font-size": "13px",
    "font-weight": "600",
    padding: "4px 10px",
    "border-radius": "999px",
  },
  "@global .card .bd": {
    padding: "18px 20px 20px",
    display: "flex",
    "flex-direction": "column",
    gap: "4px",
    flex: "1",
  },
  "@global .card .hi": {
    color: "var(--ink-2)",
    "font-size": "15px",
  },
  "@global .card .meta": {
    display: "flex",
    "justify-content": "space-between",
    "align-items": "center",
    "margin-top": "auto",
    "padding-top": "14px",
    "font-size": "14px",
    color: "var(--ink-2)",
  },
  "@global .card .meta b": {
    color: "var(--green)",
    "font-weight": "600",
  },
  '@global :root[data-theme="dark"] .card .meta b': {
    color: "var(--yellow)",
  },
  "@media      (prefers-color-scheme:dark)": {
    '@global :root:not([data-theme="light"]) .card .meta b': {
      color: "var(--yellow)",
    },
  },
  "@global .svc": {
    display: "grid",
    "grid-template-columns": "1fr 1fr",
    gap: "56px",
    "align-items": "center",
    padding: "60px 0",
    "border-bottom": "1px solid var(--line)",
  },
  "@global .svc:last-child": {
    "border-bottom": "0",
  },
  "@global .svc:nth-child(even) .svc-img": {
    order: "2",
  },
  "@global .svc-img": {
    "border-radius": "var(--r-l)",
    overflow: "hidden",
    "aspect-ratio": "5/4",
    background: "var(--surface)",
  },
  "@global .svc-img img": {
    width: "100%",
    height: "100%",
    "object-fit": "cover",
  },
  "@global .svc-img.packs-bg": {
    display: "grid",
    "place-items": "center",
    background: "var(--green)",
  },
  "@global .svc-img.packs-bg div": {
    display: "flex",
    "align-items": "flex-end",
    "justify-content": "center",
    height: "62%",
    "max-width": "92%",
  },
  "@global .svc-img.packs-bg img": {
    height: "100%",
    width: "auto",
    margin: "0 -18px",
    filter: "drop-shadow(0 16px 16px rgba(0,0,0,.35))",
  },
  "@global .svc h2": {
    "font-size": "clamp(28px,3.4vw,42px)",
    "margin-bottom": "18px",
  },
  "@global .svc ul": {
    padding: "0",
    "list-style": "none",
    display: "grid",
    gap: "12px",
    margin: "22px 0",
  },
  "@global .svc li": {
    "padding-left": "28px",
    position: "relative",
  },
  "@global .svc li::before": {
    content: '""',
    position: "absolute",
    left: "0",
    top: ".62em",
    width: "16px",
    height: "4px",
    background: "var(--yellow)",
    "border-radius": "2px",
  },
  "@global .svc li b": {
    display: "block",
  },
  "@global .svc li span": {
    color: "var(--ink-2)",
    "font-size": "15.5px",
  },
  "@global .who": {
    display: "flex",
    "flex-wrap": "wrap",
    gap: "8px",
    "margin-top": "10px",
  },
  "@global .who span": {
    background: "var(--surface)",
    "border-radius": "999px",
    padding: "7px 14px",
    "font-size": "15px",
  },
  "@global .steps": {
    display: "grid",
    "grid-template-columns": "repeat(3,1fr)",
    gap: "22px",
    "counter-reset": "s",
  },
  "@global .steps li": {
    "list-style": "none",
    background: "var(--surface)",
    "border-radius": "var(--r-m)",
    padding: "28px 24px",
    "counter-increment": "s",
  },
  "@global .steps li::before": {
    content: "counter(s)",
    display: "grid",
    "place-items": "center",
    width: "44px",
    height: "44px",
    "border-radius": "50%",
    background: "var(--yellow)",
    color: "#000",
    "font-weight": "800",
    "margin-bottom": "18px",
    "font-size": "20px",
  },
  "@global  .steps": {
    padding: "0",
    margin: "0",
  },
  "@global .regions": {
    display: "grid",
    "grid-template-columns": "repeat(4,1fr)",
    gap: "14px",
    "margin-top": "30px",
  },
  "@global .regions div": {
    "border-top": "4px solid var(--green)",
    "padding-top": "12px",
  },
  "@global .regions b": {
    display: "block",
    "font-size": "20px",
  },
  "@global .regions span": {
    color: "var(--ink-2)",
    "font-size": "15px",
  },
  "@media      (max-width:880px)": {
    "@global  .svc": {
      "grid-template-columns": "1fr",
      gap: "28px",
    },
    "@global  .svc:nth-child(even) .svc-img": {
      order: "0",
    },
    "@global .steps,.regions": {
      "grid-template-columns": "1fr 1fr",
    },
  },
  "@media (max-width:520px)": {
    "@global   .steps": {
      "grid-template-columns": "1fr",
    },
  },
  "@global .gal": {
    "grid-auto-flow": "dense",
    display: "grid",
    "grid-template-columns": "repeat(4,1fr)",
    "grid-auto-rows": "200px",
    gap: "12px",
  },
  "@global .gal button": {
    border: "0",
    padding: "0",
    "border-radius": "var(--r-m)",
    overflow: "hidden",
    background: "var(--surface)",
  },
  "@global .gal img": {
    width: "100%",
    height: "100%",
    "object-fit": "cover",
    transition: "transform 1s cubic-bezier(.2,.8,.2,1)",
  },
  "@global .gal button:hover img": {
    transform: "scale(1.06)",
  },
  "@global .gal .w2": {
    "grid-column": "span 2",
    "grid-row": "span 2",
  },
  "@media (max-width:780px)": {
    "@global  .gal": {
      "grid-template-columns": "1fr 1fr",
      "grid-auto-rows": "150px",
    },
  },
  "@global .values": {
    display: "grid",
    "grid-template-columns": "repeat(3,1fr)",
    gap: "22px",
  },
  "@global .values div": {
    "border-top": "4px solid var(--yellow)",
    "padding-top": "18px",
  },
  "@global .values p": {
    color: "var(--ink-2)",
    "margin-top": "8px",
  },
  "@media  (max-width:780px)": {
    "@global  .values": {
      "grid-template-columns": "1fr",
    },
  },
  "@global .lb": {
    "max-width": "min(1200px,96vw)",
    background: "#000",
  },
  "@global .lb img": {
    width: "100%",
    "max-height": "86vh",
    "object-fit": "contain",
  },
  "@global .c-grid": {
    display: "grid",
    "grid-template-columns": "1fr 1.15fr",
    gap: "56px",
    "align-items": "start",
  },
  "@global .c-list": {
    display: "grid",
    gap: "26px",
  },
  "@global .c-list div small": {
    display: "block",
    color: "var(--ink-2)",
    "font-size": "14px",
    "margin-bottom": "2px",
  },
  "@global .c-list a,.c-list address": {
    "font-style": "normal",
    "font-size": "19px",
    "font-weight": "600",
    "text-decoration": "none",
    "line-height": "1.4",
  },
  "@global .c-list a:hover": {
    color: "var(--green)",
    "text-decoration": "underline",
    "text-decoration-color": "var(--yellow)",
    "text-decoration-thickness": "3px",
  },
  "@global form.enq": {
    background: "var(--surface)",
    "border-radius": "var(--r-l)",
    padding: "34px",
    display: "grid",
    gap: "16px",
  },
  "@global .row2": {
    display: "grid",
    "grid-template-columns": "1fr 1fr",
    gap: "16px",
  },
  "@global label": {
    display: "grid",
    gap: "6px",
    "font-size": "15px",
    "font-weight": "500",
  },
  "@global input,select,textarea": {
    font: "inherit",
    "font-size": "16px",
    padding: "13px 14px",
    "border-radius": "10px",
    border: "1.5px solid var(--line)",
    background: "var(--bg)",
    color: "var(--ink)",
    width: "100%",
  },
  "@global input:focus,select:focus,textarea:focus": {
    outline: "0",
    "border-color": "var(--green)",
    "box-shadow": "0 0 0 3px color-mix(in srgb,var(--yellow) 55%,transparent)",
  },
  "@global textarea": {
    "min-height": "120px",
    resize: "vertical",
  },
  "@global .err": {
    color: "#c0392b",
    "font-size": "14px",
    "min-height": "0",
  },
  "@global .f-actions": {
    display: "flex",
    gap: "10px",
    "flex-wrap": "wrap",
    "margin-top": "6px",
  },
  "@global .note": {
    "font-size": "14px",
    color: "var(--ink-2)",
  },
  "@media       (max-width:880px)": {
    "@global  .c-grid": {
      "grid-template-columns": "1fr",
    },
    "@global  .row2": {
      "grid-template-columns": "1fr",
    },
    "@global  form.enq": {
      padding: "24px",
    },
  },
  "@global footer": {
    background: "var(--green-deep)",
    color: "rgba(255,255,255,.82)",
    padding: "64px 0 32px",
    "font-size": "15px",
  },
  "@global .f-grid": {
    display: "grid",
    "grid-template-columns": "1.4fr 1fr 1fr 1.2fr",
    gap: "36px",
  },
  "@global footer img.fl": {
    height: "34px",
    width: "auto",
    "margin-bottom": "18px",
  },
  "@global footer h4": {
    color: "#fff",
    margin: "0 0 14px",
    "font-size": "16px",
  },
  "@global footer ul": {
    "list-style": "none",
    padding: "0",
    margin: "0",
    display: "grid",
    gap: "8px",
  },
  "@global footer a": {
    "text-decoration": "none",
  },
  "@global footer a:hover": {
    color: "var(--yellow)",
  },
  "@global .f-bot": {
    "border-top": "1px solid rgba(255,255,255,.15)",
    "margin-top": "44px",
    "padding-top": "22px",
    display: "flex",
    "justify-content": "space-between",
    "flex-wrap": "wrap",
    gap: "12px",
    "font-size": "14px",
  },
  "@global .theme-t": {
    background: "none",
    border: "1px solid rgba(255,255,255,.3)",
    color: "inherit",
    "border-radius": "999px",
    padding: "6px 14px",
  },
  "@media        (max-width:880px)": {
    "@global  .f-grid": {
      "grid-template-columns": "1fr 1fr",
    },
  },
  "@media  (max-width:520px)": {
    "@global   .f-grid": {
      "grid-template-columns": "1fr",
    },
  },
  "@global .toast": {
    visibility: "hidden",
    position: "fixed",
    left: "50%",
    bottom: "calc(24px + env(safe-area-inset-bottom,0px))",
    transform: "translate(-50%,120px)",
    background: "var(--ink)",
    color: "var(--bg)",
    padding: "12px 20px",
    "border-radius": "999px",
    transition: "transform .4s cubic-bezier(.2,.8,.2,1)",
    "z-index": "99",
    "font-weight": "500",
  },
  "@global .toast.on": {
    transform: "translate(-50%,0)",
    visibility: "visible",
  },
  "@global .wa": {
    position: "fixed",
    right: "20px",
    bottom: "calc(20px + env(safe-area-inset-bottom,0px))",
    "z-index": "40",
    width: "56px",
    height: "56px",
    "border-radius": "50%",
    background: "#25D366",
    display: "grid",
    "place-items": "center",
    "box-shadow": "0 10px 24px -8px rgba(0,0,0,.4)",
    transition: "transform .2s",
  },
  "@global .wa:hover": {
    transform: "scale(1.08)",
  },
  "@global .wa svg": {
    width: "30px",
    height: "30px",
    fill: "#fff",
  },
  "@global .reveal": {
    opacity: "0",
    transform: "translateY(24px)",
    transition:
      "opacity .8s cubic-bezier(.2,.8,.2,1),transform .8s cubic-bezier(.2,.8,.2,1)",
  },
  "@global .reveal.seen": {
    opacity: "1",
    transform: "none",
  },
  "@media (prefers-reduced-motion:reduce)": {
    "@global  *,*::before,*::after": {
      "animation-duration": ".01ms !important",
      "animation-delay": "0s !important",
      "transition-duration": ".01ms !important",
      "scroll-behavior": "auto !important",
    },
    "@global  .reveal": {
      opacity: "1",
      transform: "none",
    },
  },
  "@global .bgfx": {
    position: "fixed",
    inset: "0",
    "z-index": "-1",
    "pointer-events": "none",
    overflow: "hidden",
  },
  "@global .bgfx i": {
    position: "absolute",
    "border-radius": "50%",
    filter: "blur(80px)",
    opacity: ".16",
    animation: "drift 26s ease-in-out infinite alternate",
  },
  "@global .bgfx i:nth-child(1)": {
    width: "46vw",
    height: "46vw",
    background: "var(--green)",
    left: "-12vw",
    top: "10vh",
  },
  "@global .bgfx i:nth-child(2)": {
    width: "38vw",
    height: "38vw",
    background: "var(--yellow)",
    right: "-10vw",
    top: "45vh",
    "animation-duration": "32s",
    "animation-delay": "-8s",
  },
  "@global .bgfx i:nth-child(3)": {
    width: "30vw",
    height: "30vw",
    background: "var(--green)",
    left: "35vw",
    bottom: "-14vw",
    "animation-duration": "38s",
    "animation-delay": "-14s",
  },
  "@global  body": {
    background: "transparent",
  },
  "@global  html": {
    background: "var(--bg)",
  },
  "@global .hero canvas": {
    position: "absolute",
    inset: "0",
    width: "100%",
    height: "100%",
    "pointer-events": "none",
  },
  "@global  header.top": {
    animation: "hdrIn .9s cubic-bezier(.2,.8,.2,1) backwards",
    transition: "transform .45s cubic-bezier(.2,.8,.2,1),box-shadow .3s",
  },
  "@global header.top.hide": {
    transform: "translateY(-110%)",
  },
  "@global header.top.sc": {
    "box-shadow": "0 12px 30px -20px rgba(0,0,0,.45)",
  },
  "@global  .top .wrap": {
    transition: "height .35s cubic-bezier(.2,.8,.2,1)",
  },
  "@global header.top.sc .wrap": {
    height: "60px",
  },
  "@global .top .brand img": {
    transition: "height .35s",
  },
  "@global header.top.sc .brand img": {
    height: "28px",
  },
  "@global .prog": {
    position: "absolute",
    left: "0",
    bottom: "-1px",
    height: "3px",
    width: "100%",
    background: "var(--yellow)",
    "transform-origin": "left",
    transform: "scaleX(var(--sp,0))",
  },
  "@global .brand": {
    animation: "fadeDown .8s .25s backwards",
  },
  "@global  nav.main a": {
    animation: "fadeDown .6s backwards",
  },
  "@global nav.main a:nth-child(1)": {
    "animation-delay": ".35s",
  },
  "@global nav.main a:nth-child(2)": {
    "animation-delay": ".42s",
  },
  "@global nav.main a:nth-child(3)": {
    "animation-delay": ".49s",
  },
  "@global nav.main a:nth-child(4)": {
    "animation-delay": ".56s",
  },
  "@global nav.main a:nth-child(5)": {
    "animation-delay": ".63s",
  },
  "@global  .top .btn": {
    animation: "fadeDown .6s .72s backwards",
  },
  "@global  .filters": {
    transition: "top .45s cubic-bezier(.2,.8,.2,1)",
  },
  "@global body.hdr-h .filters": {
    top: "env(safe-area-inset-top,0px)",
  },
  "@global body.hdr-s:not(.hdr-h) .filters": {
    top: "calc(60px + env(safe-area-inset-top,0px))",
  },
  "@global .curtain": {
    position: "fixed",
    inset: "0",
    "z-index": "200",
    "pointer-events": "none",
    transform: "translateY(100%)",
    background: "var(--green)",
    display: "grid",
    "place-items": "center",
  },
  "@global .curtain::before": {
    content: '""',
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "14px",
    background: "var(--yellow)",
  },
  "@global .curtain img": {
    height: "44px",
    width: "auto",
    opacity: "0",
  },
  "@global .curtain.run": {
    animation: "curt .8s cubic-bezier(.7,0,.3,1) forwards",
  },
  "@global .curtain.run img": {
    animation: "curtLogo .8s ease forwards",
  },
  "@global  .bar::after": {
    transform: "scaleX(0)",
  },
  "@global .seen .bar::after,.seen.bar::after": {
    transform: "scaleX(1)",
    "transition-delay": ".35s",
  },
  "@global .view.on .phead .bar::after": {
    animation: "barIn .9s .45s cubic-bezier(.2,.8,.2,1) forwards",
  },
  "@global  .phead h1": {
    animation: "wordUp .9s .1s cubic-bezier(.2,.8,.2,1) backwards",
  },
  "@global .phead .lede": {
    animation: "wordUp .9s .25s cubic-bezier(.2,.8,.2,1) backwards",
  },
  "@global   .reveal": {
    filter: "blur(6px)",
  },
  "@global  .reveal.seen": {
    filter: "none",
    transition:
      "opacity .9s cubic-bezier(.2,.8,.2,1),transform .9s cubic-bezier(.2,.8,.2,1),filter .9s",
  },
  "@global .hero h1 .w": {
    display: "inline-block",
    opacity: "0",
  },
  "@global .slide.active h1 .w": {
    animation: "slideUp 1s cubic-bezier(.2,.8,.2,1) both",
  },
  "@global .glass": {
    background: "rgba(255,255,255,.14)",
    "backdrop-filter": "blur(14px) saturate(1.6)",
    "-webkit-backdrop-filter": "blur(14px) saturate(1.6)",
    border: "1px solid rgba(255,255,255,.28)",
    color: "#fff",
    "border-radius": "16px",
    "box-shadow": "0 18px 40px -20px rgba(0,0,0,.5)",
  },
  "@global .hchip": {
    position: "absolute",
    "z-index": "20",
    padding: "10px 14px",
    "font-size": "14px",
    "line-height": "1.25",
    animation:
      "chipIn .8s cubic-bezier(.3,1.4,.5,1) backwards,bob 6s ease-in-out infinite",
  },
  "@global .hchip b": {
    display: "block",
    "font-size": "20px",
    color: "var(--yellow)",
    "font-weight": "800",
  },
  "@global .hchip.a": {
    left: "-2%",
    top: "16%",
    "animation-delay": "1.2s,1.2s",
  },
  "@global .hchip.b": {
    right: "2%",
    top: "46%",
    "animation-delay": "1.4s,2.4s",
  },
  "@global .hchip.c": {
    left: "8%",
    bottom: "14%",
    "animation-delay": "1.6s,.4s",
  },
  "@media         (max-width:880px)": {
    "@global  .hchip": {
      "font-size": "12px",
      padding: "8px 10px",
    },
    "@global  .hchip b": {
      "font-size": "16px",
    },
    "@global  .hchip.b": {
      top: "4%",
      right: "4%",
    },
  },
  "@global .ticker": {
    background: "var(--green-deep)",
    color: "#fff",
    overflow: "hidden",
    padding: "18px 0",
    "white-space": "nowrap",
    position: "relative",
  },
  "@global .ticker .tr": {
    display: "inline-flex",
    gap: "0",
    animation: "tick 40s linear infinite",
    "will-change": "transform",
  },
  "@global .ticker span": {
    "font-weight": "700",
    "font-size": "clamp(18px,2.2vw,26px)",
    padding: "0 26px",
    display: "inline-flex",
    "align-items": "center",
    gap: "26px",
  },
  "@global .ticker span::after": {
    content: '""',
    width: "28px",
    height: "6px",
    "border-radius": "3px",
    background: "var(--yellow)",
  },
  "@global .cats .cat:nth-child(2)": {
    "transition-delay": ".08s",
  },
  "@global .cats .cat:nth-child(3)": {
    "transition-delay": ".16s",
  },
  "@global .cats .cat:nth-child(4)": {
    "transition-delay": ".24s",
  },
  "@global   .cat": {
    "transform-style": "preserve-3d",
  },
  "@global .fan.reveal img": {
    transition: "transform 1.1s cubic-bezier(.2,.9,.25,1.15),opacity .8s",
  },
  "@global .fan:not(.seen) img": {
    transform: "translateY(120px) rotate(0) scale(.8) !important",
    opacity: "0",
  },
  "@global  .fan img:nth-child(2)": {
    "transition-delay": ".1s",
  },
  "@global  .fan img:nth-child(3)": {
    "transition-delay": ".2s",
  },
  "@global  .fan img:nth-child(4)": {
    "transition-delay": ".3s",
  },
  "@global  .facts li": {
    transition: "transform .5s cubic-bezier(.3,1.5,.5,1),opacity .5s",
  },
  "@global .reveal:not(.seen) .facts li": {
    transform: "scale(.6)",
    opacity: "0",
  },
  "@global .facts li:nth-child(2)": {
    "transition-delay": ".1s",
  },
  "@global .facts li:nth-child(3)": {
    "transition-delay": ".2s",
  },
  "@global .facts li:nth-child(4)": {
    "transition-delay": ".3s",
  },
  "@global .why": {
    position: "relative",
    overflow: "hidden",
    color: "#fff",
    background: "#0b2a17",
  },
  "@global .why .bgp": {
    position: "absolute",
    inset: "-15% 0",
    "background-size": "cover",
    "background-position": "center",
    "will-change": "transform",
    opacity: ".55",
  },
  "@global .why::after": {
    content: '""',
    position: "absolute",
    inset: "0",
    background:
      "linear-gradient(180deg,rgba(6,30,15,.75),rgba(6,30,15,.35) 50%,rgba(6,30,15,.8))",
  },
  "@global .why .wrap": {
    position: "relative",
    "z-index": "2",
  },
  "@global .why .lede": {
    color: "rgba(255,255,255,.8)",
  },
  "@global .gcards": {
    display: "grid",
    "grid-template-columns": "repeat(4,1fr)",
    gap: "18px",
  },
  "@global .gcard": {
    "text-align": "left",
    padding: "26px 22px",
    "min-height": "250px",
    display: "flex",
    "flex-direction": "column",
    cursor: "pointer",
    transition:
      "transform .5s cubic-bezier(.2,.8,.2,1),background .4s,border-color .4s,opacity .9s,filter .9s",
  },
  "@global .gcard:hover,.gcard.open": {
    transform: "translateY(-8px)",
    background: "rgba(255,255,255,.2)",
    "border-color": "var(--yellow)",
  },
  "@global .gcard .num": {
    "font-size": "46px",
    "font-weight": "900",
    color: "var(--yellow)",
    "line-height": "1",
    "letter-spacing": "-.03em",
  },
  "@global .gcard h3": {
    margin: "10px 0 6px",
    "font-size": "20px",
  },
  "@global .gcard .tz": {
    opacity: ".85",
    "font-size": "15px",
  },
  "@global .gcard .more": {
    "margin-top": "auto",
    "padding-top": "14px",
    "font-size": "14.5px",
    filter: "blur(5px)",
    opacity: ".55",
    transition: "filter .5s,opacity .5s",
    "user-select": "none",
  },
  "@global .gcard:hover .more,.gcard.open .more": {
    filter: "none",
    opacity: "1",
  },
  "@global .gcard .hint": {
    "font-size": "12px",
    color: "var(--yellow)",
    "margin-top": "10px",
    transition: "opacity .3s",
  },
  "@global .gcard:hover .hint,.gcard.open .hint": {
    opacity: "0",
  },
  "@global .gcards .gcard:nth-child(2)": {
    "transition-delay": ".08s",
  },
  "@global .gcards .gcard:nth-child(3)": {
    "transition-delay": ".16s",
  },
  "@global .gcards .gcard:nth-child(4)": {
    "transition-delay": ".24s",
  },
  "@media  (max-width:980px)": {
    "@global  .gcards": {
      "grid-template-columns": "1fr 1fr",
    },
  },
  "@media   (max-width:520px)": {
    "@global   .gcards": {
      "grid-template-columns": "1fr",
    },
    "@global  .gcard": {
      "min-height": "0",
    },
  },
  "@global  .tl::before": {
    "transform-origin": "top",
    transform: "scaleY(0)",
    transition: "transform 1.4s .3s cubic-bezier(.2,.8,.2,1)",
  },
  "@global .seen .tl::before,.seen.tl::before": {
    transform: "scaleY(1)",
  },
  "@global  .tl li": {
    transition: "opacity .6s,transform .6s",
  },
  "@global .reveal:not(.seen) .tl li": {
    opacity: "0",
    transform: "translateX(-20px)",
  },
  "@global .tl li:nth-child(2)": {
    "transition-delay": ".35s",
  },
  "@global .tl li:nth-child(3)": {
    "transition-delay": ".7s",
  },
  "@global  .certs span": {
    transition: "transform .5s cubic-bezier(.3,1.5,.5,1),opacity .5s",
  },
  "@global .reveal:not(.seen) .certs span": {
    transform: "translateY(16px) scale(.8)",
    opacity: "0",
  },
  "@global .certs span:nth-child(2)": {
    "transition-delay": ".1s",
  },
  "@global .certs span:nth-child(3)": {
    "transition-delay": ".2s",
  },
  "@global .certs span:nth-child(4)": {
    "transition-delay": ".3s",
  },
  "@global .certs span:nth-child(5)": {
    "transition-delay": ".4s",
  },
  "@global .certs span:hover": {
    background: "var(--yellow)",
    color: "#000",
    "border-color": "var(--yellow)",
  },
  "@global  .card": {
    opacity: "0",
    transform: "translateY(70px) scale(.94)",
    transition:
      "opacity .8s cubic-bezier(.2,.8,.2,1) var(--d,0s),transform .9s cubic-bezier(.2,.8,.2,1) var(--d,0s),border-color .3s,box-shadow .3s",
    position: "relative",
  },
  "@global .card.in": {
    opacity: "1",
    transform: "none",
  },
  "@global .card.hide": {
    display: "none",
  },
  "@global  .card .ph": {
    height: "300px",
    padding: "18px",
  },
  "@global .card .fl": {
    height: "100%",
    width: "100%",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    transform:
      "translateY(calc(var(--p,0) * -26px)) rotate(calc(var(--p,0) * -3deg)) scale(calc(1 - var(--ap,0) * .07))",
    "will-change": "transform",
  },
  "@global  .card .ph img": {
    height: "auto",
    "max-height": "100%",
    width: "auto",
    "max-width": "100%",
    "object-fit": "contain",
    opacity: "0",
    transform: "translateY(50px) scale(.85) rotate(-6deg)",
    transition:
      "transform 1s cubic-bezier(.2,.9,.25,1.15) calc(var(--d,0s) + .15s),opacity .8s calc(var(--d,0s) + .15s)",
  },
  "@global .card.in .ph img": {
    opacity: "1",
    transform: "none",
  },
  "@global .card.in .ph img.tilt": {
    transition: "transform .25s ease-out",
  },
  "@global  .card .ph img.full": {
    width: "100%",
    height: "100%",
    "max-height": "none",
    "object-fit": "cover",
  },
  "@global .card .ph::after": {
    content: '""',
    position: "absolute",
    inset: "0",
    background:
      "linear-gradient(105deg,transparent 35%,rgba(255,255,255,.55) 50%,transparent 65%)",
    transform: "translateX(-120%)",
    "pointer-events": "none",
    "z-index": "3",
  },
  "@global .card.in .ph::after": {
    animation: "shine 1.3s calc(var(--d,0s) + .7s) ease",
  },
  "@global .card:hover .ph::after": {
    animation: "shine2 .9s ease",
  },
  "@global  .card .tag": {
    "z-index": "4",
    transform: "scale(0) rotate(-14deg)",
    transition:
      "transform .55s cubic-bezier(.3,1.6,.5,1) calc(var(--d,0s) + .5s)",
  },
  "@global .card.in .tag": {
    transform: "none",
  },
  "@global .card .bd>*": {
    opacity: "0",
    transform: "translateY(16px)",
    transition: "opacity .6s,transform .6s cubic-bezier(.2,.8,.2,1)",
  },
  "@global .card.in .bd>*": {
    opacity: "1",
    transform: "none",
  },
  "@global .card.in .bd>:nth-child(1)": {
    "transition-delay": "calc(var(--d,0s) + .3s)",
  },
  "@global .card.in .bd>:nth-child(2)": {
    "transition-delay": "calc(var(--d,0s) + .4s)",
  },
  "@global .card.in .bd>:nth-child(3)": {
    "transition-delay": "calc(var(--d,0s) + .5s)",
  },
  "@global .peek": {
    position: "absolute",
    left: "12px",
    right: "12px",
    bottom: "12px",
    "z-index": "4",
    "border-radius": "12px",
    padding: "10px 12px",
    "font-size": "13.5px",
    "line-height": "1.35",
    color: "var(--ink)",
    background: "color-mix(in srgb,var(--bg) 58%,transparent)",
    "backdrop-filter": "blur(14px) saturate(1.6)",
    "-webkit-backdrop-filter": "blur(14px) saturate(1.6)",
    border: "1px solid color-mix(in srgb,var(--bg) 60%,transparent)",
    transform: "translateY(140%)",
    transition:
      "transform .7s cubic-bezier(.2,.9,.25,1.1) calc(var(--d,0s) + .85s)",
  },
  "@global .card.in .peek": {
    transform: "none",
  },
  "@global .peek b": {
    display: "flex",
    gap: "8px",
    "align-items": "center",
    "font-weight": "600",
  },
  "@global .peek b::before": {
    content: '""',
    width: "14px",
    height: "4px",
    "border-radius": "2px",
    background: "var(--yellow)",
    flex: "none",
  },
  "@global .peek .mo": {
    display: "grid",
    gap: "3px",
    "max-height": "0",
    overflow: "hidden",
    opacity: "0",
    transition: "max-height .5s,opacity .4s,margin .4s",
    color: "var(--ink-2)",
  },
  "@global .card:hover .peek .mo,.card:focus-visible .peek .mo": {
    "max-height": "80px",
    opacity: "1",
    "margin-top": "6px",
  },
  "@global  .card .meta b": {
    display: "inline-flex",
    gap: "6px",
    "align-items": "center",
  },
  "@global .card .meta b::after": {
    content: '""',
    width: "18px",
    height: "3px",
    background: "currentColor",
    "border-radius": "2px",
    transition: "width .3s",
  },
  "@global .card:hover .meta b::after": {
    width: "30px",
  },
  "@global .card::before": {
    content: '""',
    position: "absolute",
    inset: "-1px",
    "border-radius": "inherit",
    padding: "2px",
    background:
      "conic-gradient(from var(--ang,0deg),transparent 0 70%,var(--yellow) 85%,var(--green) 95%,transparent)",
    "-webkit-mask":
      "linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0)",
    "-webkit-mask-composite": "xor",
    "mask-composite": "exclude",
    opacity: "0",
    transition: "opacity .4s",
    "pointer-events": "none",
    "z-index": "5",
  },
  "@global .card:hover::before": {
    opacity: "1",
    animation: "ang 2.4s linear infinite",
  },
  "@media  (max-width:560px)": {
    "@global   .card .ph": {
      height: "330px",
    },
  },
  "@global .pd": {
    padding: "36px 0 90px",
  },
  "@global .crumbs": {
    "font-size": "14px",
    color: "var(--ink-2)",
    "margin-bottom": "26px",
    display: "flex",
    gap: "8px",
    "flex-wrap": "wrap",
    animation: "fadeDown .6s .2s backwards",
  },
  "@global .crumbs a": {
    "text-decoration": "none",
  },
  "@global .crumbs a:hover": {
    color: "var(--green)",
    "text-decoration": "underline",
  },
  "@global .pd-grid": {
    display: "grid",
    "grid-template-columns": "1.05fr 1fr",
    gap: "56px",
    "align-items": "start",
  },
  "@global .pd-media": {
    position: "sticky",
    top: "90px",
  },
  "@global .pd-stage": {
    position: "relative",
    "aspect-ratio": "1/1.02",
    "border-radius": "var(--r-l)",
    background:
      "radial-gradient(circle at 50% 58%,color-mix(in srgb,var(--yellow) 38%,transparent),transparent 58%),var(--surface)",
    display: "grid",
    "place-items": "center",
    overflow: "hidden",
    animation: "stageIn 1s cubic-bezier(.2,.8,.2,1) backwards",
    perspective: "1000px",
  },
  "@global .pd-stage .ring": {
    position: "absolute",
    width: "80%",
    "aspect-ratio": "1",
    border: "2px dashed color-mix(in srgb,var(--green) 45%,transparent)",
    "border-radius": "50%",
    animation: "spin 40s linear infinite",
  },
  "@global .pd-stage .ring.r2": {
    width: "60%",
    "border-style": "dotted",
    "border-color": "color-mix(in srgb,var(--yellow) 70%,transparent)",
    "animation-direction": "reverse",
    "animation-duration": "28s",
  },
  "@global .pd-stage .mi": {
    position: "absolute",
    inset: "0",
    margin: "auto",
    "z-index": "2",
    height: "88%",
    width: "88%",
    "max-width": "88%",
    "object-fit": "contain",
    filter: "drop-shadow(0 30px 30px rgba(0,0,0,.28))",
    animation: "bob 5s ease-in-out infinite",
    transition: "transform .25s ease-out",
  },
  "@global .pd-stage .mi.full": {
    position: "absolute",
    inset: "0",
    margin: "auto",
    height: "88%",
    width: "88%",
    "max-width": "88%",
    "object-fit": "contain",
    animation: "none",
    filter: "none",
  },
  "@global .pd-stage .mi.swap": {
    animation:
      "swapIn .6s cubic-bezier(.2,.9,.25,1.1),bob 5s .6s ease-in-out infinite",
  },
  "@global .pd-stage .mi.full.swap": {
    animation: "swapIn .6s cubic-bezier(.2,.9,.25,1.1)",
  },
  "@global .pd-stage .g1,.pd-stage .g2": {
    position: "absolute",
    "z-index": "3",
    padding: "10px 14px",
    "font-size": "14px",
    color: "var(--ink)",
    background: "color-mix(in srgb,var(--bg) 60%,transparent)",
    "border-color": "color-mix(in srgb,var(--bg) 70%,transparent)",
  },
  "@global .pd-stage .g1": {
    left: "16px",
    top: "16px",
    animation: "chipIn .8s .8s cubic-bezier(.3,1.4,.5,1) backwards",
  },
  "@global .pd-stage .g2": {
    right: "16px",
    bottom: "16px",
    animation: "chipIn .8s 1s cubic-bezier(.3,1.4,.5,1) backwards",
  },
  "@global .pd-stage .g1 b,.pd-stage .g2 b": {
    display: "block",
    "font-size": "18px",
    color: "var(--green)",
  },
  '@global :root[data-theme="dark"] .pd-stage .g1 b,:root[data-theme="dark"] .pd-stage .g2 b':
    {
      color: "var(--yellow)",
    },
  "@media       (prefers-color-scheme:dark)": {
    '@global :root:not([data-theme="light"]) .pd-stage .g1 b,:root:not([data-theme="light"]) .pd-stage .g2 b':
      {
        color: "var(--yellow)",
      },
  },
  "@global .pd-thumbs": {
    display: "flex",
    gap: "10px",
    "margin-top": "14px",
    "justify-content": "center",
  },
  "@global .pd-thumbs button": {
    width: "72px",
    height: "72px",
    "border-radius": "12px",
    border: "2px solid var(--line)",
    background: "var(--surface)",
    padding: "5px",
    transition: "transform .3s,border-color .3s",
    animation: "wordUp .6s backwards",
  },
  "@global .pd-thumbs button:hover": {
    transform: "translateY(-4px)",
  },
  '@global .pd-thumbs button[aria-current="true"]': {
    "border-color": "var(--yellow)",
  },
  "@global .pd-thumbs img": {
    width: "100%",
    height: "100%",
    "object-fit": "contain",
  },
  "@global .pd-info .cat-chip": {
    display: "inline-block",
    background: "var(--green)",
    color: "#fff",
    "border-radius": "999px",
    padding: "6px 14px",
    "font-size": "14px",
    "font-weight": "600",
    animation: "chipIn .7s .2s backwards",
  },
  "@global .pd-info h1": {
    "font-size": "clamp(40px,5.4vw,70px)",
    "font-weight": "900",
    "letter-spacing": "-.035em",
    margin: "18px 0 8px",
  },
  "@global .pd-info h1 .w": {
    display: "inline-block",
    animation: "wordUp .9s cubic-bezier(.2,.8,.2,1) backwards",
  },
  "@global .pd-info .hn": {
    "font-size": "22px",
    color: "var(--ink-2)",
    animation: "wordUp .8s .45s backwards",
  },
  "@global .pd-info .ln": {
    "font-size": "20px",
    "font-weight": "600",
    color: "var(--green)",
    margin: "14px 0 18px",
    animation: "wordUp .8s .55s backwards",
  },
  '@global :root[data-theme="dark"] .pd-info .ln': {
    color: "var(--yellow)",
  },
  "@media        (prefers-color-scheme:dark)": {
    '@global :root:not([data-theme="light"]) .pd-info .ln': {
      color: "var(--yellow)",
    },
  },
  "@global .pd-info .ds": {
    animation: "wordUp .8s .65s backwards",
    "font-size": "18px",
  },
  "@global .qchips": {
    display: "grid",
    "grid-template-columns": "repeat(3,1fr)",
    gap: "10px",
    margin: "24px 0",
  },
  "@global .qchip": {
    "border-radius": "14px",
    padding: "14px",
    background: "color-mix(in srgb,var(--surface) 70%,transparent)",
    "backdrop-filter": "blur(10px)",
    "-webkit-backdrop-filter": "blur(10px)",
    border: "1px solid var(--line)",
    animation: "chipIn .7s cubic-bezier(.3,1.4,.5,1) backwards",
  },
  "@global .qchip small": {
    display: "block",
    color: "var(--ink-2)",
    "font-size": "13px",
  },
  "@global .qchip b": {
    "font-size": "16px",
  },
  "@global .qchip:nth-child(1)": {
    "animation-delay": ".75s",
  },
  "@global .qchip:nth-child(2)": {
    "animation-delay": ".85s",
  },
  "@global .qchip:nth-child(3)": {
    "animation-delay": ".95s",
  },
  "@global .pd-ctas": {
    display: "flex",
    gap: "10px",
    "flex-wrap": "wrap",
    animation: "wordUp .8s 1s backwards",
  },
  "@global .pd-sec": {
    padding: "64px 0 0",
  },
  "@global .pd-sec h2": {
    "font-size": "clamp(28px,3.4vw,40px)",
    "margin-bottom": "28px",
  },
  "@global .ben": {
    display: "grid",
    "grid-template-columns": "repeat(2,1fr)",
    gap: "16px",
  },
  "@global .ben div": {
    background: "var(--surface)",
    "border-radius": "var(--r-m)",
    padding: "22px",
    position: "relative",
    overflow: "hidden",
    transition: "transform .4s,opacity .7s,filter .7s",
  },
  "@global .ben div::before": {
    content: '""',
    position: "absolute",
    left: "0",
    top: "0",
    bottom: "0",
    width: "5px",
    background: "var(--yellow)",
    transform: "scaleY(0)",
    "transform-origin": "top",
    transition: "transform .7s .3s",
  },
  "@global .ben.seen div::before": {
    transform: "scaleY(1)",
  },
  "@global .ben div:hover": {
    transform: "translateY(-4px)",
  },
  "@global .ben b": {
    display: "block",
    "font-size": "18px",
  },
  "@global .ben.reveal:not(.seen) div": {
    opacity: "0",
    transform: "translateY(30px)",
  },
  "@global .ben div:nth-child(2)": {
    "transition-delay": ".1s",
  },
  "@global .ben div:nth-child(3)": {
    "transition-delay": ".2s",
  },
  "@global .ben div:nth-child(4)": {
    "transition-delay": ".3s",
  },
  "@global .bestfor": {
    display: "flex",
    "flex-wrap": "wrap",
    gap: "10px",
  },
  "@global .bestfor span": {
    background: "var(--yellow)",
    color: "#000",
    "font-weight": "600",
    "border-radius": "999px",
    padding: "10px 18px",
    transition: "transform .5s cubic-bezier(.3,1.6,.5,1),opacity .4s",
  },
  "@global .bestfor.reveal:not(.seen) span": {
    transform: "scale(0)",
    opacity: "0",
  },
  "@global .bestfor span:nth-child(2)": {
    "transition-delay": ".08s",
  },
  "@global .bestfor span:nth-child(3)": {
    "transition-delay": ".16s",
  },
  "@global .bestfor span:nth-child(4)": {
    "transition-delay": ".24s",
  },
  "@global .bestfor span:hover": {
    transform: "rotate(-3deg) scale(1.06)",
  },
  "@global .spec": {
    display: "grid",
    "grid-template-columns": "auto 1fr",
    "border-top": "1px solid var(--line)",
    margin: "0",
  },
  "@global .spec dt,.spec dd": {
    padding: "14px 0",
    "border-bottom": "1px solid var(--line)",
    margin: "0",
  },
  "@global .spec dt": {
    color: "var(--ink-2)",
    "padding-right": "30px",
  },
  "@global .spec dd": {
    "font-weight": "600",
  },
  "@global .two": {
    display: "grid",
    "grid-template-columns": "1fr 1fr",
    gap: "56px",
  },
  "@global .rel": {
    display: "grid",
    "grid-auto-flow": "column",
    "grid-auto-columns": "minmax(240px,1fr)",
    gap: "18px",
    "overflow-x": "auto",
    "padding-bottom": "12px",
    "scroll-snap-type": "x mandatory",
  },
  "@global .rel .card": {
    "scroll-snap-align": "start",
  },
  "@global .pd-bar": {
    position: "fixed",
    left: "0",
    right: "0",
    bottom: "0",
    "z-index": "45",
    padding: "12px 16px calc(12px + env(safe-area-inset-bottom,0px))",
    background: "color-mix(in srgb,var(--bg) 80%,transparent)",
    "backdrop-filter": "blur(14px)",
    "-webkit-backdrop-filter": "blur(14px)",
    "border-top": "1px solid var(--line)",
    display: "none",
    gap: "10px",
    "align-items": "center",
    transform: "translateY(110%)",
    transition: "transform .5s cubic-bezier(.2,.8,.2,1)",
  },
  "@global .pd-bar.on": {
    transform: "none",
  },
  "@global .pd-bar .btn": {
    flex: "1",
    "justify-content": "center",
    padding: "13px 12px",
  },
  "@media          (max-width:880px)": {
    "@global .pd-grid,.two": {
      "grid-template-columns": "1fr",
      gap: "28px",
    },
    "@global  .pd-media": {
      position: "relative",
      top: "0",
    },
    "@global  .pd-bar": {
      display: "flex",
    },
    "@global body.on-product .wa": {
      bottom: "calc(88px + env(safe-area-inset-bottom,0px))",
    },
    "@global  .ben": {
      "grid-template-columns": "1fr",
    },
    "@global  .qchips": {
      "grid-template-columns": "1fr 1fr 1fr",
    },
  },
  "@global  footer": {
    position: "relative",
    overflow: "hidden",
  },
  "@global .f-word": {
    "font-size": "clamp(80px,19vw,280px)",
    "font-weight": "900",
    "letter-spacing": "-.05em",
    "line-height": ".8",
    color: "transparent",
    "-webkit-text-stroke": "1.5px rgba(255,255,255,.22)",
    margin: "0 0 40px -.04em",
    "white-space": "nowrap",
    display: "flex",
    overflow: "hidden",
    "padding-bottom": ".06em",
  },
  "@global .f-word span": {
    display: "inline-block",
    transform: "translateY(110%)",
    transition: "transform 1s cubic-bezier(.2,.9,.25,1.1)",
  },
  "@global footer.seen .f-word span": {
    transform: "none",
  },
  "@global .f-word span:hover": {
    color: "var(--yellow)",
    "-webkit-text-stroke-color": "var(--yellow)",
    transition: "color .2s,transform .4s",
    transform: "translateY(-8px) !important",
  },
  "@global .f-line": {
    height: "4px",
    background: "var(--yellow)",
    transform: "scaleX(0)",
    "transform-origin": "left",
    transition: "transform 1.4s .3s cubic-bezier(.2,.8,.2,1)",
    "margin-bottom": "44px",
    "border-radius": "2px",
  },
  "@global footer.seen .f-line": {
    transform: "scaleX(1)",
  },
  "@global .f-grid>div": {
    opacity: "0",
    transform: "translateY(30px)",
    transition: "opacity .8s,transform .8s cubic-bezier(.2,.8,.2,1)",
  },
  "@global footer.seen .f-grid>div": {
    opacity: "1",
    transform: "none",
  },
  "@global .f-grid>div:nth-child(2)": {
    "transition-delay": ".12s",
  },
  "@global .f-grid>div:nth-child(3)": {
    "transition-delay": ".24s",
  },
  "@global .f-grid>div:nth-child(4)": {
    "transition-delay": ".36s",
  },
  "@global footer ul a": {
    position: "relative",
    display: "inline-block",
    transition: "transform .3s,color .3s",
  },
  "@global footer ul a:hover": {
    transform: "translateX(6px)",
  },
  "@global .totop": {
    position: "fixed",
    right: "22px",
    bottom: "calc(92px + env(safe-area-inset-bottom,0px))",
    "z-index": "40",
    width: "48px",
    height: "48px",
    "border-radius": "50%",
    border: "0",
    background: "var(--bg)",
    color: "var(--ink)",
    "box-shadow": "0 10px 24px -8px rgba(0,0,0,.35)",
    display: "grid",
    "place-items": "center",
    opacity: "0",
    transform: "scale(.6)",
    transition: "opacity .3s,transform .4s cubic-bezier(.3,1.5,.5,1)",
    "pointer-events": "none",
  },
  "@global .totop.on": {
    opacity: "1",
    transform: "none",
    "pointer-events": "auto",
  },
  "@global .totop svg": {
    position: "absolute",
    inset: "0",
    transform: "rotate(-90deg)",
  },
  "@global .totop circle": {
    fill: "none",
    stroke: "var(--yellow)",
    "stroke-width": "3",
    "stroke-dasharray": "138",
    "stroke-dashoffset": "calc(138 - 138 * var(--sp,0))",
  },
  "@global .totop i": {
    width: "12px",
    height: "12px",
    "border-left": "2.5px solid currentColor",
    "border-top": "2.5px solid currentColor",
    transform: "translateY(3px) rotate(45deg)",
  },
  "@global body.on-product .totop": {
    bottom: "calc(156px + env(safe-area-inset-bottom,0px))",
  },
  "@global  .wa": {
    animation: "chipIn .8s 1.6s cubic-bezier(.3,1.4,.5,1) backwards",
  },
  "@global .wa::before": {
    content: '""',
    position: "absolute",
    inset: "0",
    "border-radius": "50%",
    border: "2px solid #25D366",
    animation: "pulse 2.4s infinite",
  },
  "@media  (prefers-reduced-motion:reduce)": {
    "@global .card,.card .ph img,.card .bd>*,.card .tag,.peek,.f-grid>div,.f-word span":
      {
        opacity: "1 !important",
        transform: "none !important",
      },
    "@global .bgfx,.ticker .tr": {
      animation: "none !important",
    },
    "@global    .reveal": {
      filter: "none",
    },
  },
  "@global .sr-only": {
    position: "absolute",
    width: "1px",
    height: "1px",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    "white-space": "nowrap",
  },
  "@global .hero,.pslider": {
    transition: "background-color 1s ease,color .6s",
  },
  "@global .slider": {
    position: "relative",
    "touch-action": "pan-y",
  },
  "@global .slides": {
    display: "grid",
  },
  "@global .slide": {
    "grid-area": "1/1",
    opacity: "0",
    visibility: "hidden",
    transition: "opacity .55s ease,visibility 0s .55s",
    "min-width": "0",
  },
  "@global .slide.active": {
    opacity: "1",
    visibility: "visible",
    transition: "opacity .55s ease",
  },
  "@global .slide .a": {
    opacity: "0",
  },
  "@global .slide.active .a": {
    animation:
      "slideUp .7s cubic-bezier(.2,.8,.2,1) calc(var(--dl,0s) * .75) both",
  },
  "@global .hero .hh,.pslider .hh": {
    "font-size": "clamp(40px,5.2vw,72px)",
    "font-weight": "900",
    "letter-spacing": "-.035em",
    "line-height": ".98",
    margin: "0",
  },
  "@global .sv": {
    position: "relative",
    height: "clamp(380px,46vw,560px)",
  },
  "@global .sv img": {
    position: "absolute",
    bottom: "0",
    width: "auto",
    opacity: "0",
    filter: "drop-shadow(0 24px 24px rgba(0,0,0,.35))",
  },
  "@global .sv.sq img,.sv.ph img": {
    "border-radius": "18px",
    height: "auto",
  },
  "@global .sv.ph img": {
    left: "0",
    bottom: "8%",
    width: "100%",
    height: "78%",
    "object-fit": "cover",
  },
  "@global .slide.active .sv img": {
    animation:
      "packIn .85s cubic-bezier(.2,.9,.25,1.15) calc(var(--dl,0s) * .75) both",
  },
  "@global .slide.active .sv img:hover": {
    transform: "var(--t) translateY(-12px)",
    transition: "transform .4s",
  },
  "@global .sv .hchip": {
    opacity: "0",
  },
  "@global .slide.active .sv .hchip": {
    animation: "chipShow .8s .9s cubic-bezier(.3,1.4,.5,1) both",
  },
  "@global .s-ui": {
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "44px",
    "z-index": "6",
    display: "flex",
    "align-items": "center",
    gap: "14px",
    "pointer-events": "none",
  },
  "@global .s-ui>*": {
    "pointer-events": "auto",
  },
  "@global .s-dots": {
    display: "flex",
    gap: "8px",
  },
  "@global .s-dots button": {
    width: "34px",
    height: "5px",
    border: "0",
    padding: "0",
    "border-radius": "3px",
    background: "rgba(255,255,255,.3)",
    position: "relative",
    overflow: "hidden",
    transition: "width .4s",
  },
  "@global .s-dots button.on": {
    width: "56px",
  },
  "@global .s-dots button::after": {
    content: '""',
    position: "absolute",
    inset: "0",
    background: "var(--yellow)",
    transform: "scaleX(0)",
    "transform-origin": "left",
  },
  "@global .s-dots button.on::after": {
    animation: "fill var(--dur,6s) linear forwards",
  },
  "@global .slider.paused .s-dots button.on::after": {
    "animation-play-state": "paused",
  },
  "@global .s-dots button.done::after": {
    transform: "scaleX(1)",
  },
  "@global .s-arr": {
    width: "46px",
    height: "46px",
    "border-radius": "50%",
    border: "1px solid rgba(255,255,255,.35)",
    background: "rgba(255,255,255,.12)",
    "backdrop-filter": "blur(10px)",
    "-webkit-backdrop-filter": "blur(10px)",
    display: "grid",
    "place-items": "center",
    transition: "background .3s,transform .3s",
  },
  "@global .s-arr:hover": {
    background: "var(--yellow)",
    "border-color": "var(--yellow)",
    transform: "scale(1.08)",
  },
  "@global .s-arr::before": {
    content: '""',
    width: "10px",
    height: "10px",
    "border-left": "2.5px solid #fff",
    "border-bottom": "2.5px solid #fff",
    transform: "translateX(2px) rotate(45deg)",
  },
  "@global .s-arr.next::before": {
    transform: "translateX(-2px) rotate(-135deg)",
  },
  "@global .s-arr:hover::before": {
    "border-color": "#000",
  },
  "@global .dark-ink": {
    color: "#000",
  },
  "@global .dark-ink .lede": {
    color: "rgba(0,0,0,.75) !important",
  },
  "@global .dark-ink .s-dots button": {
    background: "rgba(0,0,0,.2)",
  },
  "@global .dark-ink .s-dots button::after": {
    background: "var(--green)",
  },
  "@global .dark-ink .s-arr": {
    "border-color": "rgba(0,0,0,.3)",
    background: "rgba(0,0,0,.06)",
  },
  "@global .dark-ink .s-arr::before": {
    "border-color": "#000",
  },
  "@global .dark-ink .btn-y": {
    background: "var(--green)",
    color: "#fff",
  },
  "@global .pslider": {
    background: "var(--green)",
    color: "#fff",
    overflow: "hidden",
    padding: "0",
  },
  "@global .ps-grid": {
    display: "grid",
    "grid-template-columns": "minmax(0,5fr) minmax(0,6fr)",
    gap: "40px",
    "align-items": "center",
    "padding-top": "40px",
  },
  "@global .ps-copy": {
    "padding-bottom": "70px",
  },
  "@global .pslider .sv": {
    height: "clamp(320px,38vw,470px)",
  },
  "@global .pslider .lede": {
    color: "rgba(255,255,255,.85)",
    margin: "20px 0 28px",
  },
  "@global .pcount": {
    display: "inline-block",
    background: "rgba(255,255,255,.16)",
    "border-radius": "999px",
    padding: "6px 14px",
    "font-weight": "600",
    "font-size": "14px",
    "margin-bottom": "16px",
  },
  "@global .dark-ink .pcount": {
    background: "rgba(0,0,0,.1)",
  },
  "@global .pslider .s-ui": {
    bottom: "34px",
  },
  "@media           (max-width:880px)": {
    "@global  .s-ui": {
      position: "relative",
      bottom: "auto !important",
      margin: "8px auto 22px",
    },
    "@global  .sv": {
      height: "300px",
    },
    "@global  .pslider .sv": {
      height: "280px",
    },
    "@global  .ps-grid": {
      "grid-template-columns": "1fr",
      gap: "10px",
      "padding-top": "36px",
    },
    "@global  .ps-copy": {
      "padding-bottom": "0",
    },
    "@global  .hero .hh,.pslider .hh": {
      "font-size": "clamp(36px,10vw,52px)",
    },
  },
  "@global   header.top": {
    position: "fixed",
    top: "calc(env(safe-area-inset-top,0px) + 12px)",
    left: "0",
    right: "0",
    margin: "0 auto",
    width: "calc(100% - 24px)",
    "max-width": "1400px",
    "padding-top": "0",
    border: "1px solid var(--line)",
    "border-radius": "20px",
    background: "color-mix(in srgb,var(--bg) 82%,transparent)",
    "box-shadow": "0 10px 30px -22px rgba(0,0,0,.35)",
    transition:
      "max-width .5s cubic-bezier(.2,.8,.2,1),top .4s,box-shadow .3s,border-radius .4s",
  },
  "@global  header.top.sc": {
    "max-width": "1180px",
    top: "calc(env(safe-area-inset-top,0px) + 8px)",
    "box-shadow": "0 16px 40px -18px rgba(0,0,0,.4)",
  },
  "@global header.top .wrap": {
    padding: "0 20px",
    "max-width": "none",
  },
  "@global  header.top.hide": {
    transform: "none",
  },
  "@global  .prog": {
    left: "20px",
    right: "20px",
    width: "auto",
    bottom: "-1px",
    "border-radius": "3px",
    height: "3px",
  },
  "@global main": {
    "padding-top": "calc(env(safe-area-inset-top,0px) + 96px)",
  },
  "@global   html": {
    "scroll-padding-top": "calc(env(safe-area-inset-top,0px) + 110px)",
  },
  "@global .filters,body.hdr-s .filters,body.hdr-h .filters,body.hdr-s:not(.hdr-h) .filters":
    {
      top: "calc(env(safe-area-inset-top,0px) + 84px)",
    },
  "@global   .pd-media": {
    top: "110px",
  },
  "@media            (max-width:880px)": {
    "@global    header.top": {
      width: "calc(100% - 20px)",
      "border-radius": "18px",
      top: "calc(env(safe-area-inset-top,0px) + 10px)",
    },
    "@global  header.top .wrap": {
      padding: "0 14px 0 18px",
    },
    "@global  main": {
      "padding-top": "calc(env(safe-area-inset-top,0px) + 92px)",
    },
    "@global  body.menu-open nav.main a": {
      animation: "fadeDown .4s backwards",
    },
    "@global body.menu-open nav.main a:nth-child(1)": {
      "animation-delay": ".03s",
    },
    "@global body.menu-open nav.main a:nth-child(2)": {
      "animation-delay": ".08s",
    },
    "@global body.menu-open nav.main a:nth-child(3)": {
      "animation-delay": ".13s",
    },
    "@global body.menu-open nav.main a:nth-child(4)": {
      "animation-delay": ".18s",
    },
    "@global body.menu-open nav.main a:nth-child(5)": {
      "animation-delay": ".23s",
    },
    "@global  body.menu-open nav.main": {
      position: "absolute",
      inset: "auto",
      top: "calc(100% + 8px)",
      left: "0",
      right: "0",
      border: "1px solid var(--line)",
      "border-radius": "18px",
      padding: "10px 22px 22px",
    },
  },
  "@global #loader": {
    position: "fixed",
    inset: "0",
    "z-index": "300",
    background: "var(--green)",
    display: "grid",
    "place-items": "center",
    transition: "transform .9s cubic-bezier(.7,0,.2,1)",
  },
  "@global #loader .in": {
    display: "grid",
    gap: "18px",
    "justify-items": "center",
  },
  "@global #loader img": {
    height: "52px",
    width: "auto",
    animation: "ldLogo 1s cubic-bezier(.2,.8,.2,1) both",
  },
  "@global #loader .lb2": {
    width: "180px",
    height: "5px",
    "border-radius": "3px",
    background: "rgba(255,255,255,.18)",
    overflow: "hidden",
  },
  "@global #loader .lb2 i": {
    display: "block",
    height: "100%",
    width: "100%",
    background: "var(--yellow)",
    "transform-origin": "left",
    animation: "ldBar 1.1s .2s cubic-bezier(.6,0,.2,1) both",
  },
  "@global #loader.out": {
    transform: "translateY(-100%)",
  },
  "@global #loader.gone": {
    display: "none",
  },
  "@global .cur,.cur-r": {
    position: "fixed",
    left: "0",
    top: "0",
    "z-index": "250",
    "pointer-events": "none",
    "border-radius": "50%",
    display: "none",
  },
  "@global .cur": {
    width: "8px",
    height: "8px",
    background: "var(--yellow)",
    margin: "-4px 0 0 -4px",
  },
  "@global .cur-r": {
    width: "38px",
    height: "38px",
    margin: "-19px 0 0 -19px",
    border: "2px solid var(--yellow)",
    display: "none",
    "place-items": "center",
    "font-size": "12px",
    "font-weight": "700",
    color: "#000",
    transition:
      "width .3s,height .3s,margin .3s,background .3s,border-color .3s,opacity .3s",
  },
  "@global .cur-r span": {
    opacity: "0",
    transition: "opacity .2s",
  },
  "@media (pointer:fine)": {
    "@global body.has-cur .cur": {
      display: "block",
    },
    "@global body.has-cur .cur-r": {
      display: "grid",
    },
  },
  "@global .cur-r.link": {
    width: "56px",
    height: "56px",
    margin: "-28px 0 0 -28px",
    background: "color-mix(in srgb,var(--yellow) 25%,transparent)",
  },
  "@global .cur-r.view": {
    width: "84px",
    height: "84px",
    margin: "-42px 0 0 -42px",
    background: "var(--yellow)",
    "border-color": "var(--yellow)",
  },
  "@global .cur-r.view span": {
    opacity: "1",
  },
  "@global .cur-r.down": {
    transform: "scale(.8)",
  },
  "@global .btn,.chip,.s-arr": {
    position: "relative",
    overflow: "hidden",
  },
  "@global .rip": {
    position: "absolute",
    "border-radius": "50%",
    "pointer-events": "none",
    background: "currentColor",
    opacity: ".28",
    transform: "scale(0)",
    animation: "rip .7s ease-out forwards",
    "z-index": "6",
  },
  "@global .btn-y::after,.btn-g::after": {
    content: '""',
    position: "absolute",
    top: "0",
    bottom: "0",
    width: "40%",
    left: "-60%",
    background:
      "linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent)",
    transform: "skewX(-20deg)",
    animation: "shim 4.5s 2s ease-in-out infinite",
    "pointer-events": "none",
  },
  "@global .card .halo": {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: "70%",
    "aspect-ratio": "1",
    "border-radius": "50%",
    background:
      "radial-gradient(circle,color-mix(in srgb,var(--yellow) 55%,transparent),transparent 65%)",
    transform: "translate(-50%,-50%) scale(.4)",
    opacity: "0",
    transition: "transform .7s cubic-bezier(.2,.8,.2,1),opacity .5s",
    "z-index": "0",
  },
  "@global .card.in .halo": {
    opacity: ".35",
    transform: "translate(-50%,-50%) scale(.85)",
  },
  "@global .card:hover .halo": {
    opacity: ".85",
    transform: "translate(-50%,-50%) scale(1.25)",
  },
  "@global  .card .fl": {
    position: "relative",
    "z-index": "1",
  },
  "@global .card .ph .gs": {
    position: "absolute",
    left: "50%",
    bottom: "14px",
    width: "46%",
    height: "16px",
    "border-radius": "50%",
    background: "radial-gradient(rgba(0,0,0,.28),transparent 70%)",
    transform: "translateX(-50%)",
    "z-index": "0",
  },
  "@global .card.in .ph .gs": {
    animation: "gs 4s ease-in-out infinite",
    "animation-delay": "calc(var(--d,0s) + 1.2s)",
  },
  "@global .card.in .ph img:not(.full)": {
    animation: "bobI 4s ease-in-out infinite",
    "animation-delay": "calc(var(--d,0s) + 1.2s)",
  },
  "@global .card:hover .ph img:not(.full)": {
    "animation-play-state": "paused",
  },
  "@global .pz": {
    position: "absolute",
    inset: "0",
    "pointer-events": "none",
    "z-index": "2",
    overflow: "hidden",
  },
  "@global .pz i": {
    position: "absolute",
    bottom: "-12px",
    "border-radius": "50%",
    background: "var(--yellow)",
    opacity: "0",
  },
  "@global .pz i:nth-child(even)": {
    background: "var(--green)",
  },
  "@global .card:hover .pz i": {
    animation: "pRise 2.4s linear infinite",
  },
  "@global .card h3": {
    background:
      "linear-gradient(var(--yellow),var(--yellow)) left bottom/0 4px no-repeat",
    "padding-bottom": "4px",
    transition: "background-size .5s cubic-bezier(.2,.8,.2,1)",
    "justify-self": "start",
    width: "fit-content",
  },
  "@global .card:hover h3": {
    "background-size": "100% 4px",
  },
  "@global .card:hover .tag": {
    animation: "wig .6s ease",
  },
  "@global .card .meta span": {
    transition: "transform .4s",
  },
  "@global .card:hover .meta span": {
    transform: "translateX(4px)",
  },
  "@global .sw": {
    display: "inline-block",
    overflow: "hidden",
    "vertical-align": "bottom",
    "padding-bottom": ".22em",
    "margin-bottom": "-.22em",
  },
  "@global .sw>span": {
    display: "inline-block",
    transition: "transform .9s cubic-bezier(.2,.8,.2,1)",
    "transition-delay": "calc(var(--i) * .07s + .05s)",
  },
  "@global .reveal:not(.seen) .sw>span": {
    transform: "translateY(115%) rotate(4deg)",
  },
  "@global  .photo-stack img": {
    transition:
      "clip-path 1.3s cubic-bezier(.7,0,.2,1),transform 1.3s cubic-bezier(.2,.8,.2,1)",
  },
  "@global  .photo-stack img:nth-child(2)": {
    "transition-delay": ".35s",
  },
  "@global .photo-stack.reveal:not(.seen) img": {
    "clip-path": "inset(100% 0 0 0)",
    transform: "scale(1.08)",
  },
  "@global .photo-stack.reveal.seen img": {
    "clip-path": "inset(0 0 0 0)",
  },
  "@global  .svc-img": {
    transition: "clip-path 1.3s cubic-bezier(.7,0,.2,1)",
  },
  "@global .svc.reveal:not(.seen) .svc-img": {
    "clip-path": "inset(0 100% 0 0 round 28px)",
  },
  "@global .svc.reveal.seen .svc-img": {
    "clip-path": "inset(0 0 0 0 round 28px)",
  },
  "@global  .svc-img img": {
    transition: "transform 6s ease",
  },
  "@global .svc-img:hover img": {
    transform: "scale(1.08)",
  },
  "@global  .gal button": {
    transition: "clip-path 1.1s cubic-bezier(.7,0,.2,1),transform .4s",
  },
  "@global .gal.reveal:not(.seen) button": {
    "clip-path": "inset(0 0 100% 0)",
  },
  "@global .gal.reveal.seen button": {
    "clip-path": "inset(0)",
  },
  "@global .gal button:nth-child(2)": {
    "transition-delay": ".08s",
  },
  "@global .gal button:nth-child(3)": {
    "transition-delay": ".16s",
  },
  "@global .gal button:nth-child(4)": {
    "transition-delay": ".24s",
  },
  "@global .gal button:nth-child(5)": {
    "transition-delay": ".32s",
  },
  "@global .gal button:nth-child(6)": {
    "transition-delay": ".4s",
  },
  "@global .gal button:nth-child(7)": {
    "transition-delay": ".48s",
  },
  "@global .gal button:nth-child(8)": {
    "transition-delay": ".56s",
  },
  "@global .gal button:nth-child(9)": {
    "transition-delay": ".64s",
  },
  "@global  .sachets figure": {
    transition: "clip-path 1.2s cubic-bezier(.7,0,.2,1)",
  },
  "@global .sachets.reveal:not(.seen) figure": {
    "clip-path": "inset(100% 0 0 0 round 14px)",
  },
  "@global .sachets.reveal.seen figure": {
    "clip-path": "inset(0 round 14px)",
  },
  "@global .sachets figure:nth-child(2)": {
    "transition-delay": ".15s",
  },
  "@global .sachets figure:nth-child(3)": {
    "transition-delay": ".3s",
  },
  "@global .packrow": {
    overflow: "hidden",
    padding: "30px 0 50px",
    "-webkit-mask":
      "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)",
    mask: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)",
  },
  "@global .packrow .tk": {
    display: "flex",
    gap: "34px",
    width: "max-content",
    animation: "tick 60s linear infinite",
  },
  "@global .packrow:hover .tk": {
    "animation-play-state": "paused",
  },
  "@global .packrow a": {
    position: "relative",
    display: "block",
    height: "230px",
    flex: "none",
    transition: "transform .5s cubic-bezier(.2,.8,.2,1)",
  },
  "@global .packrow a img": {
    height: "100%",
    width: "auto",
    filter: "drop-shadow(0 18px 16px rgba(0,0,0,.22))",
    transition: "transform .5s cubic-bezier(.2,.8,.2,1)",
  },
  "@global .packrow a img.sq": {
    "border-radius": "16px",
    height: "80%",
    "margin-top": "20%",
  },
  "@global .packrow a:nth-child(odd)": {
    transform: "translateY(16px)",
  },
  "@global .packrow a:hover img": {
    transform: "translateY(-16px) rotate(-4deg) scale(1.08)",
  },
  "@global .packrow a span": {
    position: "absolute",
    left: "50%",
    bottom: "-34px",
    transform: "translate(-50%,8px)",
    "white-space": "nowrap",
    background: "var(--ink)",
    color: "var(--bg)",
    "font-size": "13px",
    "font-weight": "600",
    padding: "5px 12px",
    "border-radius": "999px",
    opacity: "0",
    transition: "opacity .3s,transform .3s",
  },
  "@global .packrow a:hover span": {
    opacity: "1",
    transform: "translate(-50%,0)",
  },
  "@media (max-width:600px)": {
    "@global  .packrow a": {
      height: "170px",
    },
  },
  "@global .leaves": {
    position: "absolute",
    inset: "0",
    "pointer-events": "none",
    overflow: "hidden",
    "z-index": "0",
  },
  "@global .leaves svg": {
    position: "absolute",
    width: "44px",
    height: "44px",
    fill: "var(--green)",
    opacity: ".12",
    animation: "leaf 14s ease-in-out infinite",
  },
  "@global .leaves svg:nth-child(2n)": {
    fill: "var(--yellow)",
    opacity: ".25",
    "animation-duration": "18s",
  },
  "@global .has-leaves": {
    position: "relative",
  },
  "@global .has-leaves>.wrap": {
    position: "relative",
    "z-index": "1",
  },
  "@global footer::before": {
    content: '""',
    position: "absolute",
    inset: "0",
    background:
      "radial-gradient(500px circle at var(--mx,50%) var(--my,50%),rgba(253,185,19,.14),transparent 60%)",
    "pointer-events": "none",
    transition: "opacity .4s",
  },
  "@global .spk": {
    position: "absolute",
    "z-index": "3",
    width: "16px",
    height: "16px",
    background: "var(--yellow)",
    "clip-path":
      "polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%)",
    animation: "twk 2.6s ease-in-out infinite",
    "pointer-events": "none",
  },
  "@global .pd-stage .gsh": {
    position: "absolute",
    bottom: "7%",
    left: "50%",
    width: "50%",
    height: "22px",
    "border-radius": "50%",
    background: "radial-gradient(rgba(0,0,0,.3),transparent 70%)",
    transform: "translateX(-50%)",
    animation: "gs 5s ease-in-out infinite",
    "z-index": "1",
  },
  "@global  .qchip": {
    transition: "transform .35s cubic-bezier(.3,1.5,.5,1)",
  },
  "@global .qchip:hover": {
    transform: "translateY(-6px) rotate(-1.5deg)",
  },
  "@global  .spec dt,.spec dd": {
    transition: "background .3s,padding .3s",
  },
  "@global .spec dd:hover,.spec dt:hover+dd": {
    background: "color-mix(in srgb,var(--yellow) 18%,transparent)",
    "padding-left": "8px",
  },
  "@global  .cat h3": {
    transition: "transform .4s",
  },
  "@global .cat:hover h3": {
    transform: "translateX(6px)",
  },
  "@global  .regions div": {
    transition: "transform .4s,border-color .4s",
  },
  "@global .regions div:hover": {
    transform: "translateY(-6px)",
    "border-color": "var(--yellow)",
  },
  "@global  .steps li": {
    transition: "transform .4s cubic-bezier(.3,1.5,.5,1)",
  },
  "@global .steps li:hover": {
    transform: "translateY(-6px)",
  },
  "@global .steps li:hover::before": {
    animation: "wig .6s",
  },
  "@global  .values div": {
    transition: "transform .4s",
  },
  "@global .values div:hover": {
    transform: "translateY(-6px)",
  },
  "@global .c-list>div": {
    transition: "transform .4s",
  },
  "@global .c-list>div:hover": {
    transform: "translateX(8px)",
  },
  "@global  .who span": {
    transition: "transform .3s,background .3s",
  },
  "@global .who span:hover": {
    transform: "translateY(-4px) rotate(-2deg)",
    background: "var(--yellow)",
    color: "#000",
  },
  "@media   (prefers-reduced-motion:reduce)": {
    "@global  #loader": {
      display: "none",
    },
    "@global .btn-y::after,.btn-g::after,.packrow .tk,.leaves svg,.spk,.card.in .ph img,.card.in .ph .gs":
      {
        animation: "none !important",
      },
    "@global .sw>span,.photo-stack img,.svc-img,.gal button,.sachets figure": {
      transform: "none !important",
      "clip-path": "none !important",
    },
  },
  "@media             (max-width:880px)": {
    "@global    .pd-media": {
      top: "0 !important",
    },
  },
  "@global  #loader .in": {
    gap: "16px",
  },
  "@global #loader .ld-packs": {
    display: "flex",
    "align-items": "flex-end",
    "justify-content": "center",
    height: "130px",
    "margin-bottom": "10px",
  },
  "@global #loader .ld-packs img": {
    height: "110px",
    width: "auto",
    margin: "0 -10px",
    opacity: "0",
    filter: "drop-shadow(0 14px 14px rgba(0,0,0,.35))",
    animation:
      "ldPack .8s cubic-bezier(.2,.9,.25,1.3) var(--dl) both,bob 3s calc(var(--dl) + .8s) ease-in-out infinite",
  },
  "@global #loader .ld-packs img:nth-child(4)": {
    height: "130px",
    "z-index": "2",
  },
  "@global #loader .ld-packs img:nth-child(3),#loader .ld-packs img:nth-child(5)":
    {
      height: "120px",
      "z-index": "1",
    },
  "@global #loader img#ldLogo": {
    animation: "ldLogo 1s .2s cubic-bezier(.2,.8,.2,1) both",
  },
  "@global #loader .ld-tag": {
    color: "#fff",
    margin: "0",
    "font-size": "18px",
    "font-weight": "300",
    "letter-spacing": ".02em",
    animation: "ldLogo 1s 1.2s both",
  },
  "@global  #loader .lb2": {
    width: "220px",
  },
  "@global  #loader .lb2 i": {
    animation: "none",
    transform: "scaleX(0)",
  },
  "@global #loader .ld-pc": {
    color: "var(--yellow)",
    "font-weight": "700",
    "font-size": "14px",
    "font-variant-numeric": "tabular-nums",
  },
  "@global #loader.out .in": {
    opacity: "0",
    transform: "translateY(-30px)",
    transition: "opacity .4s,transform .5s",
  },
  "@media    (max-width:520px)": {
    "@global  #loader .ld-packs": {
      height: "96px",
    },
    "@global  #loader .ld-packs img": {
      height: "78px",
      margin: "0 -8px",
    },
    "@global  #loader .ld-packs img:nth-child(4)": {
      height: "94px",
    },
    "@global  #loader .ld-packs img:nth-child(3),#loader .ld-packs img:nth-child(5)":
      {
        height: "86px",
      },
  },
  "@global   footer": {
    padding: "80px 0 30px",
  },
  "@global .f2-cta": {
    display: "grid",
    "grid-template-columns": "1.1fr 1fr",
    gap: "40px",
    "align-items": "center",
    "padding-bottom": "36px",
  },
  "@global .f2-h": {
    color: "#fff",
    "font-size": "clamp(32px,4.4vw,58px)",
    "font-weight": "900",
    "letter-spacing": "-.03em",
    "line-height": "1",
  },
  "@global .f2-cta-l p": {
    margin: "16px 0 0",
    "max-width": "46ch",
    "font-size": "17px",
  },
  "@global .f2-cb": {
    display: "flex",
    gap: "8px",
    "flex-wrap": "wrap",
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(255,255,255,.16)",
    padding: "8px",
    "border-radius": "999px",
    "backdrop-filter": "blur(10px)",
    "-webkit-backdrop-filter": "blur(10px)",
    transition: "border-color .3s,box-shadow .3s",
  },
  "@global .f2-cb:focus-within": {
    "border-color": "var(--yellow)",
    "box-shadow": "0 0 0 4px rgba(253,185,19,.18)",
  },
  "@global .f2-cb input": {
    flex: "1",
    "min-width": "160px",
    background: "transparent",
    border: "0",
    color: "#fff",
    padding: "12px 16px",
    "font-size": "16px",
    "box-shadow": "none !important",
  },
  "@global .f2-cb input::placeholder": {
    color: "rgba(255,255,255,.55)",
  },
  "@global .f2-err": {
    "flex-basis": "100%",
    "font-size": "14px",
    color: "var(--yellow)",
    padding: "0 16px",
    "min-height": "0",
  },
  "@global .f2-err:empty": {
    display: "none",
  },
  "@global .f2-acts": {
    display: "grid",
    "grid-template-columns": "repeat(3,1fr)",
    gap: "14px",
    "margin-bottom": "46px",
  },
  "@global .f2-act": {
    display: "flex",
    gap: "14px",
    "align-items": "center",
    padding: "16px 18px",
    "border-radius": "18px",
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.12)",
    color: "#fff",
    transition:
      "transform .4s cubic-bezier(.3,1.5,.5,1),background .3s,border-color .3s",
    "min-width": "0",
  },
  "@global .f2-act:hover": {
    transform: "translateY(-6px)",
    background: "rgba(255,255,255,.12)",
    "border-color": "var(--yellow)",
    color: "#fff",
  },
  "@global .f2-act small": {
    display: "block",
    color: "rgba(255,255,255,.65)",
    "font-size": "13px",
  },
  "@global .f2-act b": {
    display: "block",
    "font-size": "16px",
    overflow: "hidden",
    "text-overflow": "ellipsis",
    "white-space": "nowrap",
  },
  "@global .f2-act>span:last-child": {
    "min-width": "0",
  },
  "@global .ic": {
    flex: "none",
    width: "46px",
    height: "46px",
    "border-radius": "14px",
    background: "var(--yellow)",
    display: "grid",
    "place-items": "center",
    transition: "transform .5s cubic-bezier(.3,1.6,.5,1)",
  },
  "@global .ic svg": {
    width: "22px",
    height: "22px",
    fill: "#000",
  },
  "@global .ic.icwa": {
    background: "#25D366",
  },
  "@global .ic.icwa svg": {
    fill: "#fff",
  },
  "@global .f2-act:hover .ic": {
    transform: "rotate(-12deg) scale(1.1)",
  },
  "@global .f2-grid": {
    display: "grid",
    "grid-template-columns": "1.2fr 1fr",
    gap: "48px",
    "align-items": "center",
  },
  "@global .f2-brand p": {
    margin: "0 0 18px",
  },
  "@global .f2-certs": {
    display: "flex",
    "flex-wrap": "wrap",
    gap: "6px",
  },
  "@global .f2-certs span": {
    border: "1px solid rgba(253,185,19,.5)",
    color: "var(--yellow)",
    "border-radius": "6px",
    padding: "4px 9px",
    "font-size": "12px",
    "font-weight": "700",
    transition: "background .3s,color .3s,transform .3s",
  },
  "@global .f2-certs span:hover": {
    background: "var(--yellow)",
    color: "#000",
    transform: "translateY(-3px)",
  },
  "@global .f2-col summary": {
    "list-style": "none",
    color: "#fff",
    "font-weight": "700",
    "font-size": "16px",
    "margin-bottom": "14px",
    cursor: "default",
    display: "flex",
    "justify-content": "space-between",
    "align-items": "center",
  },
  "@global .f2-col summary::-webkit-details-marker": {
    display: "none",
  },
  "@global .f2-col ul": {
    "list-style": "none",
    padding: "0",
    margin: "0",
    display: "grid",
    gap: "9px",
  },
  "@global .f2-col ul a": {
    display: "inline-flex",
    "align-items": "center",
    gap: "0",
    transition: "gap .3s,color .3s",
  },
  "@global .f2-col ul a::before": {
    content: '""',
    width: "0",
    height: "3px",
    "border-radius": "2px",
    background: "var(--yellow)",
    transition: "width .3s",
  },
  "@global .f2-col ul a:hover": {
    gap: "8px",
    color: "var(--yellow)",
    transform: "none",
  },
  "@global .f2-col ul a:hover::before": {
    width: "14px",
  },
  "@global .f2-packs": {
    display: "grid",
    "grid-template-columns": "1fr 1fr",
    gap: "10px",
  },
  "@global .f2-packs a": {
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    gap: "6px",
    padding: "10px 6px 8px",
    "border-radius": "14px",
    background: "rgba(255,255,255,.06)",
    "font-size": "13px",
    "text-align": "center",
    transition: "background .3s,transform .4s cubic-bezier(.3,1.5,.5,1)",
  },
  "@global .f2-packs .pi": {
    height: "70px",
    display: "grid",
    "place-items": "center",
  },
  "@global .f2-packs img": {
    height: "70px",
    width: "auto",
    filter: "drop-shadow(0 8px 8px rgba(0,0,0,.35))",
    transition: "transform .5s cubic-bezier(.3,1.5,.5,1)",
  },
  "@global .f2-packs img.sq": {
    height: "56px",
    "border-radius": "8px",
  },
  "@global .f2-packs a:hover": {
    background: "rgba(255,255,255,.13)",
    transform: "translateY(-4px)",
    color: "#fff",
  },
  "@global .f2-packs a:hover img": {
    transform: "rotate(-8deg) scale(1.12) translateY(-4px)",
  },
  "@global .f2-all": {
    display: "inline-block",
    "margin-top": "12px",
    "font-weight": "600",
    color: "var(--yellow) !important",
    "border-bottom": "2px solid currentColor",
  },
  "@global .f2-visit": {
    position: "relative",
    display: "block",
    "border-radius": "20px",
    overflow: "hidden",
    "aspect-ratio": "4/3.2",
    color: "#fff",
  },
  "@global .f2-visit img": {
    width: "100%",
    height: "100%",
    "object-fit": "cover",
    transition: "transform 1.2s cubic-bezier(.2,.8,.2,1)",
  },
  "@global .f2-visit:hover img": {
    transform: "scale(1.1)",
  },
  "@global .f2-visit .ov": {
    position: "absolute",
    inset: "0",
    padding: "18px",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "flex-end",
    gap: "4px",
    background: "linear-gradient(transparent 25%,rgba(4,25,12,.88))",
  },
  "@global .f2-visit .ic": {
    position: "absolute",
    top: "16px",
    left: "16px",
    width: "40px",
    height: "40px",
    animation: "pinB 2s ease-in-out infinite",
  },
  "@global .f2-visit b": {
    "font-size": "18px",
  },
  "@global .f2-visit .ov>span:not(.ic)": {
    "font-size": "14px",
    opacity: ".85",
  },
  "@global .f2-visit em": {
    "font-style": "normal",
    "font-weight": "600",
    color: "var(--yellow)",
    "font-size": "14px",
    "margin-top": "4px",
    transition: "letter-spacing .3s",
  },
  "@global .f2-visit:hover em": {
    "letter-spacing": ".03em",
  },
  "@global footer .f-word": {
    margin: "56px 0 24px",
  },
  "@global .f2-bot-r": {
    display: "flex",
    "align-items": "center",
    gap: "14px",
  },
  "@global .f2-sw": {
    width: "58px",
    height: "30px",
    "border-radius": "999px",
    border: "1px solid rgba(255,255,255,.3)",
    background: "rgba(255,255,255,.1)",
    position: "relative",
    padding: "0",
  },
  "@global .f2-sw .k": {
    position: "absolute",
    top: "3px",
    left: "3px",
    width: "22px",
    height: "22px",
    "border-radius": "50%",
    background: "var(--yellow)",
    transition: "transform .45s cubic-bezier(.3,1.5,.5,1),background .3s",
    "box-shadow": "inset -5px -3px 0 0 rgba(0,0,0,0)",
  },
  '@global .f2-sw[aria-checked="true"] .k': {
    transform: "translateX(28px)",
    background: "#f3f7f4",
    "box-shadow": "inset -6px -3px 0 0 #0C4D27",
  },
  "@global .f2-top": {
    background: "none",
    border: "0",
    color: "inherit",
    "font-weight": "600",
    display: "inline-flex",
    gap: "8px",
    "align-items": "center",
  },
  "@global .f2-top::after": {
    content: '""',
    width: "8px",
    height: "8px",
    "border-left": "2px solid currentColor",
    "border-top": "2px solid currentColor",
    transform: "rotate(45deg) translate(2px,2px)",
    transition: "transform .3s",
  },
  "@global .f2-top:hover": {
    color: "var(--yellow)",
  },
  "@global .f2-top:hover::after": {
    transform: "rotate(45deg) translate(-1px,-1px)",
  },
  "@global .f2-cta>*,.f2-acts>*,.f2-grid>*": {
    opacity: "0",
    transform: "translateY(34px)",
    transition: "opacity .8s,transform .9s cubic-bezier(.2,.8,.2,1)",
  },
  "@global footer.seen .f2-cta>*,footer.seen .f2-acts>*,footer.seen .f2-grid>*":
    {
      opacity: "1",
      transform: "none",
    },
  "@global footer.seen .f2-act:hover": {
    transform: "translateY(-6px)",
  },
  "@global .f2-cta>:nth-child(2)": {
    "transition-delay": ".12s",
  },
  "@global .f2-acts>:nth-child(1)": {
    "transition-delay": ".2s",
  },
  "@global .f2-acts>:nth-child(2)": {
    "transition-delay": ".3s",
  },
  "@global .f2-acts>:nth-child(3)": {
    "transition-delay": ".4s",
  },
  "@global .f2-grid>:nth-child(2)": {
    "transition-delay": ".12s",
  },
  "@global .f2-grid>:nth-child(3)": {
    "transition-delay": ".24s",
  },
  "@global .f2-grid>:nth-child(4)": {
    "transition-delay": ".36s",
  },
  "@media   (max-width:980px)": {
    "@global  .f2-acts": {
      "grid-template-columns": "1fr",
    },
  },
  "@media              (max-width:880px)": {
    "@global    footer": {
      padding: "56px 0 calc(110px + env(safe-area-inset-bottom,0px))",
    },
    "@global  .f2-cta": {
      "grid-template-columns": "1fr",
      gap: "22px",
    },
    "@global  .f2-cb": {
      "border-radius": "20px",
    },
    "@global  .f2-cb input": {
      "flex-basis": "100%",
    },
    "@global .f2-cb .btn": {
      flex: "1",
      "justify-content": "center",
    },
    "@global  .f2-grid": {
      "grid-template-columns": "1fr",
      gap: "0",
    },
    "@global .f2-brand": {
      "margin-bottom": "22px",
    },
    "@global .f2-col": {
      "border-top": "1px solid rgba(255,255,255,.14)",
    },
    "@global .f2-col:last-of-type": {
      "border-bottom": "1px solid rgba(255,255,255,.14)",
    },
    "@global  .f2-col summary": {
      cursor: "pointer",
      margin: "0",
      padding: "18px 0",
      "font-size": "18px",
    },
    "@global .f2-col summary::after": {
      content: '""',
      width: "22px",
      height: "22px",
      "border-radius": "50%",
      background: "var(--yellow)",
      "-webkit-mask":
        "linear-gradient(#000 0 0) center/12px 2px no-repeat,linear-gradient(#000 0 0) center/2px 12px no-repeat",
      mask: "linear-gradient(#000 0 0) center/12px 2px no-repeat,linear-gradient(#000 0 0) center/2px 12px no-repeat",
      transition: "transform .4s",
    },
    "@global .f2-col[open] summary::after": {
      transform: "rotate(135deg)",
    },
    "@global .f2-col[open]>*:not(summary)": {
      animation: "accIn .45s cubic-bezier(.2,.8,.2,1)",
    },
    "@global .f2-col ul,.f2-packs": {
      "padding-bottom": "18px",
    },
    "@global  .f2-all": {
      margin: "0 0 18px",
    },
    "@global  .f2-visit": {
      "margin-top": "6px",
      "aspect-ratio": "16/10",
    },
    "@global  .f-bot": {
      "flex-direction": "column-reverse",
      "align-items": "flex-start",
    },
    "@global  .f2-bot-r": {
      width: "100%",
      "justify-content": "space-between",
    },
  },
  "@global   .f2-visit": {
    "aspect-ratio": "16/9 !important",
  },
  "@global   .bar::after": {
    display: "none !important",
  },
  "@global h1:has(.bar)::after,h2:has(.bar)::after": {
    content: '""',
    display: "block",
    width: "72px",
    height: "6px",
    "border-radius": "3px",
    background: "var(--yellow)",
    "margin-top": ".32em",
    "transform-origin": "left",
    transition: "transform .8s cubic-bezier(.2,.8,.2,1) .35s",
  },
  "@global .reveal:not(.seen) h2:has(.bar)::after,h2.reveal:not(.seen):has(.bar)::after":
    {
      transform: "scaleX(0)",
    },
  "@global .hero h1:has(.bar)::after": {
    width: "96px",
    height: "8px",
    transform: "scaleX(0)",
  },
  "@global .slide.active .hero-copy h1:has(.bar)::after": {
    animation: "barGrow .9s 1s cubic-bezier(.2,.8,.2,1) forwards",
  },
  "@global .phead h1:has(.bar)::after": {
    width: "88px",
    height: "7px",
    transform: "scaleX(0)",
  },
  "@global .view.on .phead h1:has(.bar)::after": {
    animation: "barGrow .9s .45s cubic-bezier(.2,.8,.2,1) forwards",
  },
  "@media    (prefers-reduced-motion:reduce)": {
    "@global  h1:has(.bar)::after,h2:has(.bar)::after": {
      transform: "none !important",
      animation: "none !important",
    },
  },
  "@global  .packrow": {
    position: "relative",
  },
  "@global  .packrow .tk": {
    animation: "none !important",
    "will-change": "transform",
  },
  "@global .pr-btn": {
    position: "absolute",
    top: "50%",
    "z-index": "5",
    width: "54px",
    height: "54px",
    "margin-top": "-27px",
    background: "var(--green) !important",
    "border-color": "var(--green) !important",
    "box-shadow": "0 12px 26px -12px rgba(0,0,0,.5)",
  },
  "@global .pr-btn.prev": {
    left: "calc(env(safe-area-inset-left,0px) + clamp(8px,1.6vw,28px))",
  },
  "@global .pr-btn.next": {
    right: "calc(env(safe-area-inset-right,0px) + clamp(8px,1.6vw,28px))",
  },
  "@global .pr-btn:hover": {
    background: "var(--yellow) !important",
    "border-color": "var(--yellow) !important",
  },
  "@global   .packrow": {
    "-webkit-mask": "none",
    mask: "none",
  },
  "@global .pr-view": {
    overflow: "hidden",
    padding: "30px 0 50px",
    margin: "-30px 0 -50px",
    "-webkit-mask":
      "linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)",
    mask: "linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)",
  },
  "@global    .packrow": {
    overflow: "visible",
  },
  "@media  (max-width:600px)": {
    "@global  .pr-btn": {
      width: "42px",
      height: "42px",
      "margin-top": "-21px",
    },
  },
  "@media (min-width:1600px)": {
    "@global   .pr-btn": {
      width: "62px",
      height: "62px",
      "margin-top": "-31px",
    },
  },
  "@global   body": {
    "font-family":
      '"Poppins",system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif',
    "font-weight": "400",
    "font-size": "16.5px",
    "line-height": "1.6",
  },
  "@global  h1,h2,h3": {
    "font-family": '"Poppins",system-ui,sans-serif',
  },
  "@global h1,h2": {
    "font-weight": "800",
    "letter-spacing": "-.03em",
    "line-height": "1.08",
  },
  "@global  h3": {
    "font-weight": "700",
    "letter-spacing": "-.01em",
  },
  "@global  .lede": {
    "font-weight": "300",
  },
  "@global .phead .lede,.hero .lede,.pslider .lede": {
    "font-weight": "300",
  },
  "@global .hero h1,.phead h1,.pd-info h1": {
    "font-weight": "900",
    "letter-spacing": "-.035em",
    "line-height": "1.02",
  },
  "@global .hero h1 .bar": {
    "font-style": "italic",
    "font-weight": "800",
    color: "var(--yellow)",
  },
  "@global   .hero .hh,.pslider .hh": {
    "font-weight": "800",
    "letter-spacing": "-.03em",
    "line-height": "1.04",
  },
  "@global   nav.main a": {
    "font-weight": "500",
    "font-size": "15px",
  },
  "@global  .btn": {
    "font-weight": "600",
    "letter-spacing": ".005em",
  },
  "@global  .chip": {
    "font-weight": "500",
  },
  '@global  .chip[aria-pressed="true"]': {
    "font-weight": "600",
  },
  "@global .stage-cap small,.hchip": {
    "font-weight": "300",
  },
  "@global  .stage-cap b": {
    "font-weight": "800",
  },
  "@global  .stage-cap span": {
    "font-weight": "300",
    "font-style": "italic",
  },
  "@global   .hchip b": {
    "font-weight": "700",
  },
  "@global  .ticker span": {
    "font-weight": "800",
    "font-style": "italic",
    "letter-spacing": "-.01em",
  },
  "@global  .big": {
    "font-weight": "900",
  },
  "@global  .protein h2": {
    "font-weight": "800",
  },
  "@global   .facts li": {
    "font-weight": "500",
  },
  "@global   .cat h3": {
    "font-weight": "800",
  },
  "@global  .cat p": {
    "font-weight": "300",
  },
  "@global  .card h3": {
    "font-weight": "700",
  },
  "@global  .card .hi": {
    "font-weight": "300",
    "font-style": "italic",
  },
  "@global   .card .tag": {
    "font-weight": "600",
  },
  "@global  .peek b": {
    "font-weight": "600",
  },
  "@global  .peek .mo": {
    "font-weight": "300",
  },
  "@global  .card .meta span": {
    "font-weight": "300",
  },
  "@global   .card .meta b": {
    "font-weight": "600",
  },
  "@global  .gcard .num": {
    "font-weight": "900",
  },
  "@global  .gcard h3": {
    "font-weight": "700",
  },
  "@global  .gcard .tz": {
    "font-weight": "300",
    "font-style": "italic",
  },
  "@global  .gcard .more": {
    "font-weight": "400",
  },
  "@global  .gcard .hint": {
    "font-weight": "500",
    "font-style": "italic",
  },
  "@global  .tl .y": {
    "font-weight": "800",
  },
  "@global  .tl .t": {
    "font-weight": "300",
  },
  "@global .certs span,.f2-certs span": {
    "font-weight": "600",
    "letter-spacing": ".02em",
  },
  "@global  .chaayos b": {
    "font-weight": "700",
  },
  "@global  .sachets figcaption": {
    "font-weight": "500",
  },
  "@global  .svc h2": {
    "font-weight": "800",
  },
  "@global  .svc li b": {
    "font-weight": "600",
  },
  "@global  .svc li span": {
    "font-weight": "300",
  },
  "@global   .who span": {
    "font-weight": "400",
  },
  "@global .steps li h3": {
    "font-weight": "700",
  },
  "@global  .regions b": {
    "font-weight": "800",
  },
  "@global  .regions span": {
    "font-weight": "300",
    "font-style": "italic",
  },
  "@global .values h3": {
    "font-weight": "700",
  },
  "@global  .values p": {
    "font-weight": "300",
  },
  "@global .c-list small": {
    "font-weight": "300",
    "font-style": "italic",
  },
  "@global  .c-list a,.c-list address": {
    "font-weight": "600",
  },
  "@global  label": {
    "font-weight": "500",
  },
  "@global  input,select,textarea": {
    "font-family": "inherit",
    "font-weight": "400",
  },
  "@global  .note": {
    "font-weight": "300",
    "font-style": "italic",
  },
  "@global  .crumbs": {
    "font-weight": "300",
  },
  "@global .crumbs [aria-current]": {
    "font-weight": "500",
  },
  "@global  .pd-info .cat-chip": {
    "font-weight": "600",
  },
  "@global  .pd-info .hn": {
    "font-weight": "300",
  },
  "@global  .pd-info .ln": {
    "font-weight": "700",
    "font-style": "italic",
  },
  "@global  .pd-info .ds": {
    "font-weight": "300",
  },
  "@global  .qchip small": {
    "font-weight": "300",
  },
  "@global  .qchip b": {
    "font-weight": "600",
  },
  "@global  .ben b": {
    "font-weight": "600",
  },
  "@global  .bestfor span": {
    "font-weight": "500",
  },
  "@global  .spec dt": {
    "font-weight": "300",
  },
  "@global  .spec dd": {
    "font-weight": "600",
  },
  "@global  .pd-stage .g1,.pd-stage .g2": {
    "font-weight": "300",
  },
  "@global  .pd-stage .g1 b,.pd-stage .g2 b": {
    "font-weight": "700",
  },
  "@global  .packrow a span": {
    "font-weight": "600",
  },
  "@global  #loader .ld-tag": {
    "font-weight": "200",
    "letter-spacing": ".03em",
  },
  "@global #loader .ld-tag em": {
    "font-weight": "700",
    "font-style": "italic",
    color: "var(--yellow)",
  },
  "@global  #loader .ld-pc": {
    "font-weight": "600",
  },
  "@global  .f2-h": {
    "font-weight": "900",
    "letter-spacing": "-.035em",
  },
  "@global .f2-h em": {
    "font-style": "italic",
    "font-weight": "800",
    color: "var(--yellow)",
  },
  "@global .f2-cta-l p,.f2-brand p": {
    "font-weight": "300",
  },
  "@global  .f2-act small": {
    "font-weight": "300",
    "font-style": "italic",
  },
  "@global  .f2-act b": {
    "font-weight": "600",
  },
  "@global  .f2-visit b": {
    "font-weight": "700",
  },
  "@global  .f2-visit .ov>span:not(.ic)": {
    "font-weight": "300",
  },
  "@global  .f2-visit em": {
    "font-weight": "600",
    "font-style": "italic",
  },
  "@global  .f-word": {
    "font-weight": "900",
    "letter-spacing": "-.04em",
  },
  "@global   .f-bot": {
    "font-weight": "300",
  },
  "@global  .f2-top": {
    "font-weight": "500",
  },
  "@global  .toast": {
    "font-weight": "500",
  },
  "@global .why .lede,.sec-head .lede": {
    "font-weight": "300",
  },
  "@media               (max-width:880px)": {
    "@global   .hero h1": {
      "font-size": "clamp(38px,10.5vw,56px)",
    },
    "@global    .hero .hh,.pslider .hh": {
      "font-size": "clamp(32px,9vw,46px)",
    },
  },
  "@global  .hero .lede": {
    "max-width": "33ch",
  },
  "@global .mapv": {
    display: "grid",
    "place-items": "center",
  },
  "@global .mapcard": {
    position: "relative",
    width: "100%",
    "max-width": "580px",
    "aspect-ratio": "600/440",
    "border-radius": "28px",
    overflow: "hidden",
    background: "#0a3a1d",
    border: "1px solid rgba(255,255,255,.16)",
    "box-shadow": "0 40px 70px -35px rgba(0,0,0,.7)",
    opacity: "0",
    "--t": "rotate(-1.5deg)",
  },
  "@global .slide.active .mapcard": {
    animation: "packIn .85s .2s cubic-bezier(.2,.9,.25,1.15) both",
  },
  "@global .mapcard svg": {
    position: "absolute",
    inset: "0",
    width: "100%",
    height: "100%",
  },
  "@global .mapcard .blk rect": {
    fill: "rgba(255,255,255,.05)",
    stroke: "rgba(255,255,255,.08)",
  },
  "@global .mapcard .rd": {
    fill: "none",
    "stroke-linecap": "round",
    "stroke-dasharray": "900",
    "stroke-dashoffset": "900",
  },
  "@global .mapcard .r-main": {
    stroke: "#FDB913",
    "stroke-width": "16",
  },
  "@global .mapcard .r-side": {
    stroke: "rgba(255,255,255,.75)",
    "stroke-width": "9",
  },
  "@global .mapcard .r-thin": {
    stroke: "rgba(255,255,255,.35)",
    "stroke-width": "5",
  },
  "@global .slide.active .mapcard .rd": {
    animation: "draw 1.5s .55s ease forwards",
  },
  "@global .slide.active .mapcard .r-side": {
    "animation-delay": ".8s",
  },
  "@global .slide.active .mapcard .r-thin": {
    "animation-delay": "1s",
  },
  "@global .mapcard .mlbl": {
    fill: "rgba(255,255,255,.7)",
    font: '600 15px "Poppins",sans-serif',
    opacity: "0",
  },
  "@global .slide.active .mapcard .mlbl": {
    animation: "fadeIn .6s 1.6s forwards",
  },
  "@global .mapcard .pin": {
    fill: "#FDB913",
    opacity: "0",
    "transform-box": "fill-box",
    "transform-origin": "50% 100%",
  },
  "@global .mapcard .pin circle": {
    fill: "#0C4D27",
  },
  "@global .slide.active .mapcard .pin": {
    animation:
      "pinDrop .7s 1.3s cubic-bezier(.3,1.6,.5,1) both,pinFloat 2.2s 2.1s ease-in-out infinite",
  },
  "@global .mapcard .ripple circle": {
    fill: "none",
    stroke: "#FDB913",
    "stroke-width": "3",
    opacity: "0",
    "transform-box": "fill-box",
    "transform-origin": "center",
  },
  "@global .slide.active .mapcard .ripple circle": {
    animation: "rpl 2.4s 1.9s ease-out infinite",
  },
  "@global .slide.active .mapcard .ripple circle+circle": {
    "animation-delay": "3.1s",
  },
  "@global .mcoord,.maddr": {
    position: "absolute",
    padding: "10px 14px",
    "font-size": "13px",
    opacity: "0",
  },
  "@global .mcoord": {
    top: "16px",
    right: "16px",
    "font-weight": "500",
  },
  "@global .maddr": {
    left: "16px",
    right: "16px",
    bottom: "16px",
    display: "grid",
    gap: "2px",
  },
  "@global .maddr b": {
    color: "#FDB913",
    "font-size": "15px",
  },
  "@global .maddr span": {
    "font-weight": "300",
  },
  "@global .slide.active .mcoord": {
    animation: "chipShow .7s 1.8s cubic-bezier(.3,1.4,.5,1) both",
  },
  "@global .slide.active .maddr": {
    animation: "chipShow .7s 2s cubic-bezier(.3,1.4,.5,1) both",
  },
  "@media                (max-width:880px)": {
    "@global  .mapv": {
      height: "auto !important",
      padding: "14px 0 6px",
    },
    "@global  .mcoord": {
      "font-size": "11px",
      padding: "7px 10px",
    },
    "@global  .maddr": {
      padding: "9px 12px",
    },
    "@global  .maddr b": {
      "font-size": "13px",
    },
    "@global  .maddr span": {
      "font-size": "12px",
    },
  },
  "@global .scale": {
    background: "var(--surface)",
    overflow: "hidden",
  },
  "@global .conv": {
    "--p": "0",
    position: "relative",
    "margin-top": "20px",
  },
  "@global .conv-track": {
    position: "absolute",
    left: "10%",
    right: "10%",
    top: "34px",
    height: "6px",
    "border-radius": "3px",
    background: "var(--line)",
  },
  "@global .conv-fill": {
    position: "absolute",
    left: "0",
    top: "0",
    bottom: "0",
    width: "calc(var(--p) * 100%)",
    background: "linear-gradient(90deg,var(--green),var(--yellow))",
    "border-radius": "3px",
  },
  "@global .conv-pack": {
    position: "absolute",
    top: "50%",
    left: "calc(var(--p) * 100%)",
    width: "58px",
    height: "74px",
    transform: "translate(-50%,-78%) rotate(calc(var(--p) * 12deg - 6deg))",
    transition: "transform .2s",
  },
  "@global .conv-pack img": {
    width: "100%",
    height: "100%",
    "object-fit": "contain",
    filter: "drop-shadow(0 10px 10px rgba(0,0,0,.3))",
    animation: "bobI 1.4s ease-in-out infinite",
  },
  "@global .conv-items": {
    "list-style": "none",
    margin: "0",
    padding: "84px 0 0",
    display: "grid",
    "grid-template-columns": "repeat(5,1fr)",
    gap: "18px",
    position: "relative",
  },
  "@global .conv-items li": {
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "text-align": "center",
    gap: "8px",
    opacity: ".35",
    transform: "translateY(16px)",
    transition: "opacity .6s,transform .7s cubic-bezier(.2,.8,.2,1)",
  },
  "@global .conv-items li.lit": {
    opacity: "1",
    transform: "none",
  },
  "@global .ci": {
    position: "absolute",
    top: "10px",
    width: "54px",
    height: "54px",
    "border-radius": "50%",
    background: "var(--bg)",
    border: "3px solid var(--line)",
    display: "grid",
    "place-items": "center",
    transition:
      "background .5s,border-color .5s,transform .6s cubic-bezier(.3,1.6,.5,1)",
  },
  "@global  .conv-items li": {
    position: "relative",
    "padding-top": "0",
  },
  "@global .conv-items .ci": {
    top: "-84px",
    left: "50%",
    "margin-left": "-27px",
  },
  "@global .ci svg": {
    width: "24px",
    height: "24px",
    fill: "none",
    stroke: "var(--ink-2)",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    transition: "stroke .5s",
  },
  "@global li.lit .ci": {
    background: "var(--yellow)",
    "border-color": "var(--yellow)",
    transform: "scale(1.12)",
  },
  "@global li.lit .ci svg": {
    stroke: "#000",
  },
  "@global li.lit .ci::after": {
    content: '""',
    position: "absolute",
    inset: "-8px",
    "border-radius": "50%",
    border: "2px solid var(--yellow)",
    animation: "pulse 2.2s infinite",
  },
  "@global .conv-items b": {
    "font-size": "17px",
    "font-weight": "700",
    "line-height": "1.3",
  },
  "@global .conv-items .cs": {
    color: "var(--ink-2)",
    "font-weight": "300",
    "font-size": "15px",
    "line-height": "1.45",
  },
  "@media                 (max-width:880px)": {
    "@global  .conv-track": {
      left: "26px",
      right: "auto",
      top: "0",
      bottom: "0",
      width: "6px",
      height: "auto",
    },
    "@global  .conv-fill": {
      width: "auto",
      right: "0",
      height: "calc(var(--p) * 100%)",
      bottom: "auto",
      background: "linear-gradient(180deg,var(--green),var(--yellow))",
    },
    "@global  .conv-pack": {
      left: "50%",
      top: "calc(var(--p) * 100%)",
      width: "40px",
      height: "52px",
      transform: "translate(-50%,-50%) rotate(calc(var(--p) * 12deg - 6deg))",
      display: "none",
    },
    "@global  .conv-items": {
      "grid-template-columns": "1fr",
      padding: "0 0 0 76px",
      gap: "30px",
    },
    "@global   .conv-items li": {
      "align-items": "flex-start",
      "text-align": "left",
      "min-height": "54px",
      "justify-content": "center",
    },
    "@global  .conv-items .ci": {
      top: "50%",
      left: "-76px",
      margin: "-27px 0 0 2px",
    },
  },
  "@global .stats2": {
    background: "var(--yellow)",
    color: "#000",
  },
  "@global .stats2 .sec-head": {
    "justify-items": "center",
    "text-align": "center",
  },
  "@global .stats2 h2:has(.bar)::after": {
    background: "var(--green)",
    "margin-left": "auto",
    "margin-right": "auto",
  },
  "@global .rings": {
    display: "grid",
    "grid-template-columns": "repeat(4,1fr)",
    gap: "26px",
  },
  "@global .ring": {
    position: "relative",
    "aspect-ratio": "1",
    "max-width": "240px",
    width: "100%",
    margin: "0 auto",
    display: "grid",
    "place-items": "center",
  },
  "@global .ring svg": {
    position: "absolute",
    inset: "0",
    width: "100%",
    height: "100%",
    transform: "rotate(-90deg)",
  },
  "@global .ring circle": {
    fill: "none",
    "stroke-width": "7",
  },
  "@global .ring .rbg": {
    stroke: "rgba(0,0,0,.1)",
  },
  "@global .ring .rfg": {
    stroke: "var(--green)",
    "stroke-linecap": "round",
    "stroke-dasharray": "326.7",
    "stroke-dashoffset": "326.7",
    transition: "stroke-dashoffset 1.8s cubic-bezier(.2,.8,.2,1) var(--rd)",
  },
  "@global .ring.seen .rfg": {
    "stroke-dashoffset": "calc(326.7 * (1 - var(--v)))",
  },
  "@global .ring.reveal": {
    filter: "none",
  },
  "@global .ring.reveal:not(.seen)": {
    transform: "scale(.85)",
  },
  "@global .rv": {
    "text-align": "center",
    padding: "0 18%",
  },
  "@global .rv b": {
    display: "block",
    "font-size": "clamp(34px,4.2vw,54px)",
    "font-weight": "900",
    "letter-spacing": "-.04em",
    "line-height": "1",
    color: "var(--green-deep)",
  },
  "@global .rv small": {
    display: "block",
    "margin-top": "8px",
    "font-size": "clamp(12px,1.1vw,14px)",
    "font-weight": "400",
    "font-style": "italic",
    "line-height": "1.35",
  },
  "@global .ring:hover .rfg": {
    stroke: "var(--green-deep)",
    "stroke-width": "9",
  },
  "@media                  (max-width:880px)": {
    "@global  .rings": {
      "grid-template-columns": "1fr 1fr",
      gap: "16px",
    },
  },
  "@global .xrib": {
    position: "relative",
    height: "200px",
    overflow: "hidden",
    background: "var(--green-deep)",
  },
  "@global .rb": {
    position: "absolute",
    left: "-6%",
    right: "-6%",
    top: "50%",
    padding: "16px 0",
    "white-space": "nowrap",
    overflow: "hidden",
    "box-shadow": "0 14px 30px -16px rgba(0,0,0,.6)",
  },
  "@global .rb1": {
    background: "var(--yellow)",
    color: "#000",
    transform: "translateY(-50%) rotate(-4deg)",
    "z-index": "2",
  },
  "@global .rb2": {
    background: "#fff",
    color: "var(--green-deep)",
    transform: "translateY(-50%) rotate(3.5deg)",
  },
  "@global .rt": {
    display: "inline-flex",
    animation: "tick 36s linear infinite",
    "will-change": "transform",
  },
  "@global .rb2 .rt": {
    "animation-direction": "reverse",
    "animation-duration": "42s",
  },
  "@global .rt span": {
    "font-size": "clamp(18px,2.2vw,26px)",
    padding: "0 22px",
    display: "inline-flex",
    "align-items": "center",
    gap: "22px",
  },
  "@global .rb1 .rt span": {
    "font-weight": "800",
  },
  "@global .rb2 .rt span": {
    "font-weight": "300",
    "font-style": "italic",
  },
  "@global .rt span::after": {
    content: '""',
    width: "12px",
    height: "12px",
    "border-radius": "50%",
    background: "currentColor",
    opacity: ".85",
  },
  "@global .rb1 .rt span::after": {
    background: "var(--green)",
  },
  "@global .rb2 .rt span::after": {
    background: "var(--yellow)",
    opacity: "1",
  },
  "@media   (max-width:600px)": {
    "@global  .xrib": {
      height: "150px",
    },
    "@global  .rb": {
      padding: "11px 0",
    },
  },
  "@media     (prefers-reduced-motion:reduce)": {
    "@global  .rt": {
      animation: "none",
    },
  },
  "@global img.sq,.sv.sq img": {
    "border-radius": "0 !important",
    filter: "drop-shadow(0 18px 18px rgba(0,0,0,.32))",
  },
  "@global .sv.sq img": {
    height: "auto",
  },
  "@global  .cat .imgs img.sq": {
    height: "150px",
    width: "auto",
    bottom: "0",
  },
  "@global  .packrow a img.sq": {
    height: "78%",
    "margin-top": "22%",
  },
  "@global  .f2-packs img.sq": {
    height: "58px",
    "border-radius": "0",
  },
  "@global   .sachets figure": {
    background:
      "radial-gradient(circle at 50% 60%,rgba(253,185,19,.22),transparent 65%),rgba(255,255,255,.05)",
    border: "1px solid rgba(255,255,255,.1)",
    display: "grid",
    "place-items": "center",
  },
  "@global  .sachets img": {
    "object-fit": "contain !important",
    width: "84% !important",
    height: "84% !important",
    filter: "drop-shadow(0 20px 20px rgba(0,0,0,.45))",
    transition: "transform .8s cubic-bezier(.2,.8,.2,1) !important",
  },
  "@global  .sachets figure:hover img": {
    transform: "translateY(-10px) rotate(-3deg) scale(1.04) !important",
  },
  "@global .sachets.seen img": {
    animation: "bobI 4.5s ease-in-out infinite",
  },
  "@global .sachets figure:nth-child(2) img": {
    "animation-delay": "-1.5s",
  },
  "@global .sachets figure:nth-child(3) img": {
    "animation-delay": "-3s",
  },
  "@global .svc-img.cut": {
    background:
      "radial-gradient(circle at 50% 58%,color-mix(in srgb,var(--yellow) 40%,transparent),transparent 62%),var(--surface)",
    display: "grid",
    "place-items": "center",
  },
  "@global .svc-img.cut img": {
    "object-fit": "contain",
    width: "86%",
    height: "86%",
    filter: "drop-shadow(0 24px 22px rgba(0,0,0,.3))",
  },
  "@global   .card .ph img.full": {
    "border-radius": "0",
  },
  "@global  .sachets figure:first-child": {
    "grid-column": "1/-1",
    "grid-row": "auto",
    "aspect-ratio": "2/1",
  },
  "@global .sachets figure:first-child img": {
    width: "80% !important",
    height: "80% !important",
  },
  "@global  .pd-stage": {
    isolation: "isolate",
  },
  "@global .pdfx": {
    position: "absolute",
    inset: "0",
    width: "100%",
    height: "100%",
    "z-index": "1",
    "pointer-events": "none",
  },
  "@global .pdfx.front": {
    "z-index": "4",
  },
  "@global  .pd-stage .mi": {
    "z-index": "2",
  },
  "@global .pdfx-hint": {
    position: "absolute",
    left: "50%",
    top: "14px",
    transform: "translateX(-50%)",
    "z-index": "5",
    "font-size": "12.5px",
    "font-weight": "500",
    "font-style": "italic",
    padding: "6px 12px",
    "border-radius": "999px",
    background: "color-mix(in srgb,var(--bg) 70%,transparent)",
    "backdrop-filter": "blur(8px)",
    "-webkit-backdrop-filter": "blur(8px)",
    border: "1px solid var(--line)",
    "pointer-events": "none",
    transition: "opacity .5s",
    animation: "chipShow .6s 1.4s both",
  },
  "@global .pdfx-hint.gone": {
    opacity: "0",
  },
  "@global  .pd-stage .g1": {
    top: "auto",
    bottom: "16px",
  },
  "@global .spillfx": {
    position: "fixed",
    inset: "0",
    width: "100vw",
    height: "100vh",
    "z-index": "35",
    "pointer-events": "none",
  },
  "@global .show": {
    background:
      "radial-gradient(900px 420px at 50% 75%,rgba(253,185,19,.14),transparent 70%),#0C4D27",
    color: "#fff",
    overflow: "hidden",
    "padding-bottom": "70px",
  },
  "@global .show .lede": {
    color: "rgba(255,255,255,.8)",
  },
  "@global .show h2:has(.bar)::after": {
    background: "var(--yellow)",
  },
  "@global .sc-stage": {
    position: "relative",
    height: "clamp(380px,46vw,580px)",
    "margin-top": "-10px",
  },
  "@global .sc-stage canvas": {
    width: "100%",
    height: "100%",
    display: "block",
    cursor: "grab",
    "touch-action": "pan-y",
    outline: "none",
  },
  "@global .sc-stage canvas:active": {
    cursor: "grabbing",
  },
  "@global .sc-stage canvas:focus-visible": {
    "box-shadow": "inset 0 0 0 3px var(--yellow)",
  },
  "@global .sc-bar": {
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    gap: "24px",
    "margin-top": "-6px",
  },
  "@global .sc-info": {
    "text-align": "center",
    "min-width": "0",
    flex: "0 1 460px",
    display: "grid",
    gap: "4px",
  },
  "@global .sc-info.pop>*": {
    animation: "slideUp .55s cubic-bezier(.2,.8,.2,1) both",
  },
  "@global .sc-info.pop>:nth-child(2)": {
    "animation-delay": ".06s",
  },
  "@global .sc-info.pop>:nth-child(3)": {
    "animation-delay": ".12s",
  },
  "@global .sc-cat": {
    "justify-self": "center",
    "font-size": "12.5px",
    "font-weight": "600",
    color: "#000",
    background: "var(--yellow)",
    "border-radius": "999px",
    padding: "3px 12px",
  },
  "@global .sc-name": {
    "font-size": "clamp(24px,3vw,36px)",
    "font-weight": "800",
    "letter-spacing": "-.02em",
    "line-height": "1.1",
  },
  "@global .sc-line": {
    "font-weight": "300",
    "font-style": "italic",
    color: "rgba(255,255,255,.8)",
  },
  "@global .sc-cta": {
    display: "flex",
    "justify-content": "center",
    "margin-top": "20px",
  },
  "@media    (max-width:600px)": {
    "@global  .sc-stage": {
      height: "330px",
    },
    "@global  .sc-bar": {
      gap: "12px",
    },
  },
  "@global .show .sec-head": {
    "margin-bottom": "0",
  },
  "@global   .sc-stage": {
    height: "clamp(400px,48vw,600px)",
  },
  "@media     (max-width:600px)": {
    "@global    .sc-stage": {
      height: "360px",
    },
  },
  "@global  .pslider": {
    position: "relative",
  },
  "@global #pseeds": {
    position: "absolute",
    inset: "0",
    width: "100%",
    height: "100%",
    "pointer-events": "none",
    "z-index": "0",
  },
  "@global .pslider .slider": {
    position: "relative",
    "z-index": "1",
  },
  "@global .hero .slider": {
    position: "relative",
    "z-index": "1",
  },
  "@global  :root": {
    "--psh":
      "drop-shadow(0 26px 20px rgba(0,0,0,.30)) drop-shadow(0 8px 6px rgba(0,0,0,.18))",
    "--psh-s":
      "drop-shadow(0 12px 10px rgba(0,0,0,.28)) drop-shadow(0 3px 3px rgba(0,0,0,.18))",
  },
  "@global .sv:not(.ph):not(.mapv) img,.cat .imgs img,.fan img,.packrow a img,.sachets img,.svc-img.packs-bg img,.svc-img.cut img,.card .ph img:not(.full),.pd-stage .mi:not(.full),#loader .ld-packs img":
    {
      filter: "var(--psh) !important",
    },
  "@global .f2-packs img,.conv-pack img,.pd-thumbs img": {
    filter: "var(--psh-s) !important",
  },
  "@global .grnd,.packrow a::after,.cat .imgs::after,.sachets figure::after,.sv:not(.ph):not(.mapv)::after,.fan::after,.svc-img.packs-bg::after,.svc-img.cut::after,.f2-packs .pi::after":
    {
      content: '""',
      position: "absolute",
      "pointer-events": "none",
      "border-radius": "50%",
      background:
        "radial-gradient(closest-side,rgba(0,0,0,.42),rgba(0,0,0,.18) 55%,transparent)",
      filter: "blur(3px)",
      "z-index": "0",
    },
  "@global   .packrow a": {
    "z-index": "0",
  },
  "@global  .packrow a img": {
    position: "relative",
    "z-index": "1",
  },
  "@global .packrow a::after": {
    left: "8%",
    right: "8%",
    bottom: "-10px",
    height: "22px",
    transition: "transform .5s cubic-bezier(.2,.8,.2,1),opacity .5s",
  },
  "@global .packrow a:hover::after": {
    transform: "scale(.72)",
    opacity: ".55",
  },
  "@global .cat .imgs::after": {
    left: "22%",
    right: "22%",
    bottom: "-4px",
    height: "26px",
    "z-index": "0",
  },
  "@global  .cat .imgs img": {
    "z-index": "1",
  },
  "@global .cat:hover .imgs::after": {
    transform: "scale(.85)",
    opacity: ".7",
    transition: "transform .5s,opacity .5s",
  },
  "@global    .sachets figure": {
    position: "relative",
  },
  "@global .sachets figure::after": {
    left: "22%",
    right: "22%",
    bottom: "9%",
    height: "22px",
    animation: "gs 4.5s ease-in-out infinite",
  },
  "@global .sachets figure img": {
    position: "relative",
    "z-index": "1",
  },
  "@global .sv:not(.ph):not(.mapv)::after": {
    left: "6%",
    right: "6%",
    bottom: "-14px",
    height: "34px",
    opacity: "0",
    transition: "opacity .8s .4s",
  },
  "@global .slide.active .sv:not(.ph):not(.mapv)::after": {
    opacity: "1",
  },
  "@global  .sv img": {
    "z-index": "1",
  },
  "@global .fan::after": {
    left: "4%",
    right: "10%",
    bottom: "-16px",
    height: "36px",
  },
  "@global   .fan img": {
    "z-index": "1",
  },
  "@global .svc-img.packs-bg,.svc-img.cut": {
    position: "relative",
  },
  "@global .svc-img.packs-bg::after": {
    left: "18%",
    right: "18%",
    bottom: "17%",
    height: "30px",
  },
  "@global .svc-img.cut::after": {
    left: "16%",
    right: "16%",
    bottom: "14%",
    height: "30px",
  },
  "@global .svc-img.packs-bg div,.svc-img.cut img": {
    position: "relative",
    "z-index": "1",
  },
  "@global  .f2-packs .pi": {
    position: "relative",
  },
  "@global .f2-packs .pi::after": {
    left: "18%",
    right: "18%",
    bottom: "-6px",
    height: "12px",
    filter: "blur(2px)",
  },
  "@global .f2-packs .pi img": {
    position: "relative",
    "z-index": "1",
  },
  "@global  .card .ph .gs": {
    background:
      "radial-gradient(closest-side,rgba(0,0,0,.42),rgba(0,0,0,.15) 60%,transparent)",
    height: "22px",
    bottom: "10px",
    width: "56%",
    filter: "blur(2px)",
  },
  "@global  .pd-stage .gsh": {
    background:
      "radial-gradient(closest-side,rgba(0,0,0,.45),rgba(0,0,0,.15) 60%,transparent)",
    height: "30px",
    filter: "blur(3px)",
  },
  "@global .pd-sec.two.solo": {
    "grid-template-columns": "1fr",
  },
  "@global .rcp": {
    position: "relative",
    "border-radius": "var(--r-l)",
    background: "var(--green)",
    color: "#fff",
    padding: "clamp(28px,4vw,48px)",
    overflow: "hidden",
    display: "grid",
    "grid-template-columns": "minmax(0,4fr) minmax(0,7fr)",
    gap: "40px",
    "align-items": "start",
  },
  "@global .rcp::before": {
    content: '""',
    position: "absolute",
    right: "-80px",
    top: "-80px",
    width: "280px",
    height: "280px",
    "border-radius": "50%",
    background:
      "radial-gradient(closest-side,rgba(253,185,19,.35),transparent)",
    "pointer-events": "none",
  },
  "@global .rcp-head small": {
    display: "inline-block",
    background: "var(--yellow)",
    color: "#000",
    "font-weight": "600",
    "font-size": "13px",
    padding: "5px 12px",
    "border-radius": "999px",
  },
  "@global .rcp-head h2": {
    color: "#fff",
    "font-size": "clamp(28px,3.4vw,42px)",
    margin: "16px 0 12px",
  },
  "@global .rcp-head h2::after": {
    background: "var(--yellow) !important",
  },
  "@global .rcp-head p": {
    color: "rgba(255,255,255,.8)",
    "font-weight": "300",
    margin: "0",
  },
  "@global .rcp-steps": {
    "list-style": "none",
    margin: "0",
    padding: "0",
    display: "grid",
    gap: "12px",
    position: "relative",
  },
  "@global .rcp-steps::before": {
    content: '""',
    position: "absolute",
    left: "21px",
    top: "22px",
    bottom: "22px",
    width: "2px",
    background: "rgba(255,255,255,.2)",
    "transform-origin": "top",
    transform: "scaleY(0)",
    transition: "transform 1.4s .2s cubic-bezier(.2,.8,.2,1)",
  },
  "@global .rcp.seen .rcp-steps::before": {
    transform: "scaleY(1)",
  },
  "@global .rcp-steps li": {
    display: "grid",
    "grid-template-columns": "44px 1fr",
    gap: "16px",
    "align-items": "start",
    padding: "10px 14px 10px 0",
    "border-radius": "14px",
    opacity: "0",
    transform: "translateX(24px)",
    transition:
      "opacity .6s,transform .7s cubic-bezier(.2,.8,.2,1),background .3s",
    "transition-delay": "calc(var(--i)*.12s + .2s)",
  },
  "@global .rcp.seen .rcp-steps li": {
    opacity: "1",
    transform: "none",
  },
  "@global .rcp-steps li:hover": {
    background: "rgba(255,255,255,.07)",
  },
  "@global .rn": {
    position: "relative",
    "z-index": "1",
    width: "44px",
    height: "44px",
    "border-radius": "50%",
    background: "var(--yellow)",
    color: "#000",
    "font-weight": "800",
    display: "grid",
    "place-items": "center",
    "font-size": "18px",
    "box-shadow": "0 0 0 6px var(--green)",
  },
  "@global .rcp-steps p": {
    margin: "0",
    "padding-top": "10px",
    "line-height": "1.5",
  },
  "@media                   (max-width:880px)": {
    "@global  .rcp": {
      "grid-template-columns": "1fr",
      gap: "22px",
    },
  },
  "@global .nutri-sec": {
    "align-items": "start",
  },
  "@global .ntab": {
    "border-radius": "var(--r-m)",
    overflow: "hidden",
    background: "#FDF3C4",
    color: "#14361f",
    "box-shadow": "var(--shadow)",
  },
  "@global .nt-head": {
    background: "var(--yellow)",
    padding: "14px 18px",
    display: "flex",
    "flex-wrap": "wrap",
    gap: "4px 18px",
    "align-items": "baseline",
  },
  "@global .nt-head b": {
    "font-size": "18px",
    "font-weight": "800",
    "flex-basis": "100%",
  },
  "@global .nt-head span": {
    "font-size": "13.5px",
    "font-weight": "600",
  },
  "@global .nt-scroll": {
    "overflow-x": "auto",
  },
  "@global .ntab table": {
    width: "100%",
    "border-collapse": "collapse",
    "font-size": "14.5px",
  },
  "@global .ntab th,.ntab td": {
    padding: "9px 14px",
    "text-align": "left",
    "border-bottom": "1px solid rgba(20,54,31,.14)",
    "white-space": "nowrap",
  },
  "@global .ntab thead th": {
    "font-size": "12.5px",
    "font-weight": "600",
    color: "rgba(20,54,31,.75)",
    background: "rgba(253,185,19,.18)",
  },
  "@global .ntab tbody th": {
    "font-weight": "500",
  },
  "@global .ntab td": {
    "font-variant-numeric": "tabular-nums",
    "font-weight": "600",
  },
  "@global .ntab tbody tr": {
    opacity: "0",
    transform: "translateY(8px)",
    transition: "opacity .45s,transform .45s,background .25s",
    "transition-delay": "calc(var(--i)*.05s + .15s)",
  },
  "@global .ntab.seen tbody tr": {
    opacity: "1",
    transform: "none",
  },
  "@global .ntab tbody tr:hover": {
    background: "rgba(253,185,19,.25)",
  },
  "@global .nt-foot": {
    "font-size": "12.5px",
    "font-style": "italic",
    "font-weight": "300",
    color: "var(--ink-2)",
    margin: "12px 0 0",
    padding: "0 2px",
  },
  "@global .ntab .nt-foot": {
    color: "rgba(20,54,31,.7)",
    padding: "10px 16px 14px",
    margin: "0",
  },
  "@global .pchart": {
    display: "grid",
    gap: "12px",
    padding: "22px",
    "border-radius": "var(--r-m)",
    background: "var(--surface)",
  },
  "@global .pc-row": {
    display: "grid",
    "grid-template-columns": "110px 1fr 54px",
    gap: "12px",
    "align-items": "center",
    "font-size": "14.5px",
  },
  "@global .pc-n": {
    "font-weight": "500",
  },
  "@global .pc-bar": {
    height: "16px",
    "border-radius": "999px",
    background: "var(--line)",
    overflow: "hidden",
  },
  "@global .pc-bar i": {
    display: "block",
    height: "100%",
    width: "calc(var(--v)*100%)",
    "border-radius": "999px",
    background: "var(--green)",
    "transform-origin": "left",
    transform: "scaleX(0)",
    transition: "transform 1.2s cubic-bezier(.2,.8,.2,1)",
    "transition-delay": "calc(var(--i)*.1s + .2s)",
  },
  "@global .pchart.seen .pc-bar i": {
    transform: "scaleX(1)",
  },
  "@global .pc-row.me .pc-bar i": {
    background: "linear-gradient(90deg,var(--green),var(--yellow))",
  },
  "@global .pc-row.me .pc-n,.pc-row.me b": {
    "font-weight": "800",
  },
  "@global .pc-row b": {
    "font-variant-numeric": "tabular-nums",
    "text-align": "right",
  },
  "@global .pchart .nt-foot": {
    "margin-top": "6px",
  },
  "@global .qc": {
    "border-radius": "var(--r-l)",
    background: "var(--green)",
    color: "#fff",
    padding: "32px",
    position: "relative",
    overflow: "hidden",
  },
  "@global .qc::after": {
    content: '""',
    position: "absolute",
    right: "-40px",
    bottom: "-40px",
    width: "200px",
    height: "200px",
    "border-radius": "50%",
    border: "24px solid rgba(253,185,19,.25)",
  },
  "@global .qc-n": {
    "font-size": "clamp(64px,8vw,96px)",
    "font-weight": "900",
    "line-height": ".9",
    color: "var(--yellow)",
    "letter-spacing": "-.04em",
  },
  "@global .qc h3": {
    color: "#fff",
    "font-size": "22px",
    margin: "10px 0 8px",
  },
  "@global .qc p": {
    color: "rgba(255,255,255,.82)",
    "font-weight": "300",
  },
  "@global .qc ul": {
    "list-style": "none",
    padding: "0",
    margin: "16px 0 0",
    display: "grid",
    gap: "8px",
  },
  "@global .qc li": {
    "padding-left": "26px",
    position: "relative",
  },
  "@global .qc li::before": {
    content: '""',
    position: "absolute",
    left: "0",
    top: ".6em",
    width: "14px",
    height: "4px",
    "border-radius": "2px",
    background: "var(--yellow)",
  },
  "@global  .qc": {
    "align-self": "start",
  },
  "@global .nutri-sec.solo": {
    "grid-template-columns": "1fr",
  },
  "@global .nutri-sec.solo .ntab": {
    "max-width": "760px",
  },
  "@media      (max-width:600px)": {
    "@global   .pd-stage .g1": {
      top: "50px",
      bottom: "auto",
      left: "12px",
      "max-width": "62%",
    },
    "@global  .pd-stage .g2": {
      right: "12px",
      bottom: "12px",
    },
  },
  "@media       (max-width:600px)": {
    "@global   .pd-stage .g1,.pd-stage .g2": {
      "font-size": "11px",
      padding: "6px 10px",
      "line-height": "1.3",
    },
    "@global   .pd-stage .g1 b,.pd-stage .g2 b": {
      "font-size": "13px",
    },
    "@global    .pd-stage .g1": {
      top: "44px",
      "max-width": "48%",
    },
  },
  "@global .f2-act .f2-wa": {
    display: "block",
    "font-style": "normal",
    "font-weight": "500",
    "font-size": "14px",
    color: "rgba(255,255,255,.85)",
    "margin-top": "1px",
  },
  "@global .sh-sec": {
    "padding-bottom": "56px",
  },
  "@global .sh-sec .sec-head": {
    "margin-bottom": "28px",
  },
  "@global .sh-scroll": {
    "overflow-x": "auto",
    "overflow-y": "hidden",
    "-webkit-overflow-scrolling": "touch",
    "scrollbar-width": "thin",
    "border-radius": "22px",
  },
  "@global .sh-scene": {
    position: "relative",
    width: "100%",
    "min-width": "860px",
    "aspect-ratio": "16/10.6",
    "container-type": "size",
    overflow: "hidden",
    "border-radius": "22px",
    background: "#2c3a30",
    isolation: "isolate",
    "box-shadow": "0 40px 80px -40px rgba(0,0,0,.8)",
  },
  "@global .sh-store": {
    position: "absolute",
    inset: "-3%",
    width: "106%",
    height: "106%",
    filter: "blur(4.5px) saturate(1.05) brightness(.86)",
    transform: "translate3d(var(--px,0),var(--py,0),0)",
    transition: "transform .25s ease-out",
  },
  "@global .sh-bokeh": {
    position: "absolute",
    inset: "0",
    "pointer-events": "none",
    "z-index": "1",
  },
  "@global .sh-bokeh i": {
    position: "absolute",
    "border-radius": "50%",
    background:
      "radial-gradient(circle,rgba(255,240,200,.55),rgba(255,240,200,0) 70%)",
    animation: "shDrift 14s ease-in-out infinite alternate",
  },
  "@global .sh-vig": {
    position: "absolute",
    inset: "0",
    "z-index": "2",
    "pointer-events": "none",
    background:
      "linear-gradient(180deg,rgba(4,24,14,.15),rgba(4,24,14,0) 30%,rgba(4,24,14,.25)),radial-gradient(120% 95% at 50% 45%,transparent 55%,rgba(3,18,11,.55))",
  },
  "@global .sh-gondola": {
    position: "absolute",
    left: "11%",
    right: "11%",
    top: "5%",
    bottom: "0",
    "z-index": "3",
    transform:
      "translate3d(calc(var(--px,0) * -.25),calc(var(--py,0) * -.25),0)",
    transition: "transform .25s ease-out",
  },
  "@global .sh-gondola::before": {
    content: '""',
    position: "absolute",
    inset: "10cqh 2.2% 0",
    background: "linear-gradient(180deg,rgba(6,30,18,.28),rgba(6,30,18,.42))",
    "pointer-events": "none",
  },
  "@global .sh-post": {
    position: "absolute",
    top: "8cqh",
    bottom: "0",
    width: "2.2%",
    background: "linear-gradient(90deg,#1b2721,#56665d 45%,#1e2a24)",
    "z-index": "2",
  },
  "@global .sh-post.l": {
    left: "0",
  },
  "@global .sh-post.r": {
    right: "0",
  },
  "@global .sh-post::after": {
    content: '""',
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "35%",
    width: "30%",
    background:
      "repeating-linear-gradient(180deg,transparent 0 10px,rgba(0,0,0,.45) 10px 13px)",
  },
  "@global .sh-head": {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "10cqh",
    "border-radius": "10px",
    background: "linear-gradient(180deg,#1a7a42,var(--green) 55%,#0f5a2e)",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    gap: "2.4cqw",
    "box-shadow":
      "0 10px 24px -10px rgba(0,0,0,.7),inset 0 1px 0 rgba(255,255,255,.18)",
    overflow: "hidden",
    "z-index": "3",
  },
  "@global .sh-head::before": {
    content: '""',
    position: "absolute",
    left: "-30%",
    top: "0",
    bottom: "0",
    width: "30%",
    background:
      "linear-gradient(100deg,transparent,rgba(255,255,255,.22),transparent)",
    animation: "shSweep 6s 1.6s ease-in-out infinite",
  },
  "@global .sh-head img": {
    height: "5.4cqh",
    width: "auto",
  },
  "@global .sh-head span": {
    "font-weight": "300",
    "font-size": "2.1cqh",
    color: "#fff",
    "border-left": "2px solid rgba(255,255,255,.35)",
    "padding-left": "2cqw",
    "line-height": "1.25",
  },
  "@global .sh-head span b": {
    display: "block",
    "font-weight": "700",
    color: "var(--yellow)",
    "font-size": "2.4cqh",
  },
  "@global .sh-tier": {
    position: "absolute",
    left: "2.2%",
    right: "2.2%",
    display: "flex",
    "justify-content": "space-evenly",
    "align-items": "flex-end",
    "z-index": "4",
  },
  "@global .sh-t1": {
    bottom: "calc(100% - 36cqh)",
  },
  "@global .sh-t2": {
    bottom: "calc(100% - 63cqh)",
  },
  "@global .sh-t3": {
    bottom: "calc(100% - 87cqh)",
  },
  "@global .sh-tier::before": {
    content: '""',
    position: "absolute",
    left: "-1%",
    right: "-1%",
    top: "-5cqh",
    height: "30cqh",
    background:
      "radial-gradient(60% 100% at 50% 0,rgba(255,240,200,.16),transparent 70%)",
    "pointer-events": "none",
  },
  "@global .sh-board": {
    position: "absolute",
    left: "2.2%",
    right: "2.2%",
    height: "4.6cqh",
    "z-index": "5",
  },
  "@global .sh-board i": {
    position: "absolute",
    left: "0",
    right: "0",
    display: "block",
  },
  "@global .sh-top": {
    top: "0",
    height: "1.5cqh",
    background: "linear-gradient(180deg,#cfd8d2,#97a49c)",
    "clip-path": "polygon(1% 0,99% 0,100% 100%,0 100%)",
  },
  "@global .sh-edge": {
    top: "1.5cqh",
    bottom: "0",
    background: "linear-gradient(180deg,#e7ece9,#b9c3bd)",
    "box-shadow": "0 8px 14px -6px rgba(0,0,0,.7)",
  },
  "@global .sh-rail": {
    top: "1.5cqh",
    height: "3.1cqh",
    background: "linear-gradient(180deg,#0f5a2e,#0b4625)",
    "border-top": "2px solid var(--yellow)",
  },
  "@global .sh-led": {
    left: "1% !important",
    right: "1% !important",
    bottom: "-1px",
    height: "2px",
    background: "rgba(255,246,214,.9)",
    "box-shadow": "0 0 12px 3px rgba(255,236,170,.55)",
  },
  "@global .sh-b1": {
    top: "36cqh",
  },
  "@global .sh-b2": {
    top: "63cqh",
  },
  "@global .sh-b3": {
    top: "87cqh",
  },
  "@global .sh-base": {
    position: "absolute",
    left: "2.2%",
    right: "2.2%",
    top: "91.6cqh",
    bottom: "0",
    background: "linear-gradient(180deg,#0f5a2e,#073a1d)",
    "z-index": "4",
  },
  "@global .sh-pk": {
    position: "relative",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "text-decoration": "none",
    color: "inherit",
    "--h": "19.5cqh",
    outline: "none",
  },
  "@global .sh-pk img": {
    display: "block",
    height: "var(--h)",
    width: "auto",
    filter:
      "drop-shadow(0 1.6cqh 1.2cqh rgba(0,0,0,.45)) drop-shadow(0 .4cqh .3cqh rgba(0,0,0,.3)) !important",
    "transform-origin": "50% 100%",
    transition: "transform .45s cubic-bezier(.2,.9,.25,1.15)",
  },
  "@global .sh-live .sh-pk img": {
    animation: "shLand .9s cubic-bezier(.25,1.35,.45,1) both",
    "animation-delay": "var(--d)",
  },
  "@global .sh-pk::after": {
    content: '""',
    position: "absolute",
    bottom: "-.6cqh",
    left: "12%",
    right: "12%",
    height: "2.2cqh",
    "border-radius": "50%",
    background: "radial-gradient(closest-side,rgba(0,0,0,.6),transparent)",
    "z-index": "-1",
    transition: "transform .45s,opacity .45s",
  },
  "@global .sh-pk:hover img,.sh-pk:focus-visible img": {
    transform: "translateY(-2.4cqh) rotate(-1.5deg) scale(1.04)",
  },
  "@global .sh-pk:hover::after,.sh-pk:focus-visible::after": {
    transform: "scale(.7)",
    opacity: ".55",
  },
  "@global .sh-pk:focus-visible img": {
    outline: "3px solid var(--yellow)",
    "outline-offset": "4px",
    "border-radius": "6px",
  },
  "@global .sh-tag": {
    position: "absolute",
    top: "calc(100% + 1.75cqh)",
    "z-index": "6",
    "min-width": "9cqw",
    "max-width": "17cqw",
    background: "#FFF7DC",
    color: "#163a24",
    "border-radius": "3px",
    padding: ".5cqh .8cqw .55cqh 1.9cqw",
    "font-size": "1.25cqh",
    "line-height": "1.25",
    "text-align": "left",
    "box-shadow": "0 2px 4px rgba(0,0,0,.35)",
    "white-space": "nowrap",
  },
  "@global .sh-tag b": {
    display: "block",
    "font-weight": "700",
    "font-size": "1.35cqh",
    overflow: "hidden",
    "text-overflow": "ellipsis",
  },
  "@global .sh-tag::before": {
    content: '""',
    position: "absolute",
    left: ".55cqw",
    top: "50%",
    width: ".9cqh",
    height: ".9cqh",
    "margin-top": "-.45cqh",
    border: "1.5px solid #148a3a",
    "border-radius": "2px",
    background: "radial-gradient(circle,#148a3a 38%,transparent 42%)",
  },
  "@global .sh-t3 .sh-tag": {
    top: "calc(100% + 1.3cqh)",
  },
  "@global .sh-tray": {
    position: "relative",
    width: "14cqw",
    height: "13cqh",
    display: "flex",
    "align-items": "flex-end",
    "justify-content": "center",
  },
  "@global .sh-box": {
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "0",
    height: "6.2cqh",
    "border-radius": "0 0 6px 6px",
    background: "linear-gradient(180deg,var(--green),var(--green-deep))",
    "box-shadow": "inset 0 2px 0 rgba(255,255,255,.18)",
    "z-index": "2",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "font-weight": "700",
    "font-size": "1.4cqh",
    color: "var(--yellow)",
  },
  "@global .sh-lip": {
    position: "absolute",
    left: "-3%",
    right: "-3%",
    bottom: "6.2cqh",
    height: "1.2cqh",
    background: "#0a3f21",
    "border-radius": "4px 4px 0 0",
    "z-index": "1",
  },
  "@global .sh-tray img": {
    position: "relative",
    "z-index": "1",
    height: "auto !important",
    width: "12cqw",
    "margin-bottom": "3.5cqh",
    transform: "rotate(-4deg)",
  },
  "@global .sh-sachet:hover img": {
    transform: "translateY(-3.2cqh) rotate(-7deg) scale(1.05)",
  },
  "@global .sh-card": {
    position: "absolute",
    "z-index": "8",
    width: "min(280px,80%)",
    background: "rgba(8,32,20,.9)",
    "backdrop-filter": "blur(12px)",
    "-webkit-backdrop-filter": "blur(12px)",
    border: "1px solid rgba(255,255,255,.14)",
    "border-radius": "16px",
    padding: "14px 16px",
    color: "#fff",
    "box-shadow": "0 24px 50px -20px rgba(0,0,0,.8)",
    "pointer-events": "none",
    opacity: "0",
    transform: "translateY(6px)",
    transition: "opacity .25s,transform .25s",
  },
  "@global .sh-card.sh-show": {
    opacity: "1",
    transform: "none",
  },
  "@global .sh-card small": {
    display: "inline-block",
    background: "var(--yellow)",
    color: "#000",
    "font-weight": "600",
    "font-size": "12px",
    padding: "3px 10px",
    "border-radius": "999px",
  },
  "@global .sh-card h3": {
    margin: "8px 0 4px",
    "font-size": "19px",
    "font-weight": "800",
    color: "#fff",
  },
  "@global .sh-card p": {
    margin: "0",
    color: "rgba(255,255,255,.8)",
    "font-size": "14px",
    "font-weight": "300",
  },
  "@global .sh-go": {
    display: "block",
    "margin-top": "8px",
    "font-size": "13px",
    "font-weight": "600",
    color: "var(--yellow)",
  },
  "@global .sh-below": {
    display: "flex",
    "flex-wrap": "wrap",
    gap: "10px 24px",
    "justify-content": "space-between",
    "align-items": "center",
    "margin-top": "16px",
    color: "rgba(255,255,255,.75)",
    "font-size": "14px",
  },
  "@global .sh-veg": {
    display: "inline-flex",
    "align-items": "center",
    gap: "8px",
  },
  "@global .sh-veg i": {
    width: "12px",
    height: "12px",
    border: "1.5px solid #3fbf63",
    "border-radius": "2px",
    background: "radial-gradient(circle,#3fbf63 38%,transparent 42%)",
  },
  "@global .sh-swipe": {
    display: "none",
  },
  "@media (max-width:900px)": {
    "@global  .sh-swipe": {
      display: "inline-flex",
      gap: "8px",
      "align-items": "center",
    },
    "@global .sh-swipe::after": {
      content: '""',
      width: "22px",
      height: "2px",
      background: "currentColor",
      animation: "shNudge 1.6s ease-in-out infinite",
    },
  },
  "@media      (prefers-reduced-motion:reduce)": {
    "@global .sh-live .sh-pk img,.sh-bokeh i,.sh-head::before": {
      animation: "none !important",
    },
  },
  "@global  .packs": {
    inset: "0 0 54px 0 !important",
  },
  "@media                    (max-width:880px)": {
    "@global   .packs": {
      inset: "0 0 40px 0 !important",
    },
  },
  "@global .cat .imgs.one img:nth-child(1)": {
    left: "50%",
    transform: "translateX(-50%) rotate(-3deg)",
  },
  "@global .cat:hover .imgs.one img:nth-child(1)": {
    transform: "translateX(-50%) translateY(-14px) rotate(-6deg)",
  },
  "@global .cat .imgs.one img.sq": {
    height: "165px",
  },
  "@media    (max-width:980px)": {
    "@global    .cats": {
      "grid-template-columns": "repeat(2,1fr)",
    },
  },
  "@global .jag": {
    position: "relative",
    overflow: "hidden",
    background:
      "radial-gradient(900px 500px at 75% 60%,rgba(253,185,19,.16),transparent 65%),#2a1a12",
    color: "#fff",
  },
  "@global .jag-fx": {
    position: "absolute",
    inset: "0",
    width: "100%",
    height: "100%",
    "pointer-events": "none",
    "z-index": "0",
  },
  "@global .jag-grid": {
    position: "relative",
    "z-index": "1",
    display: "grid",
    "grid-template-columns": "minmax(0,1fr) minmax(0,1fr)",
    gap: "48px",
    "align-items": "center",
  },
  "@global .jag-chip": {
    display: "inline-block",
    background: "var(--yellow)",
    color: "#000",
    "font-weight": "600",
    "font-size": "13px",
    padding: "5px 12px",
    "border-radius": "999px",
  },
  "@global .jag h2": {
    color: "#fff",
    margin: "16px 0 0",
    "font-size": "clamp(32px,4.2vw,52px)",
  },
  "@global .jag .lede": {
    color: "rgba(255,255,255,.82)",
    margin: "22px 0 26px",
  },
  "@global .jag-vs": {
    display: "grid",
    "grid-template-columns": "1fr 1fr",
    gap: "12px",
    "margin-bottom": "28px",
  },
  "@global .vs-col": {
    "border-radius": "16px",
    padding: "16px 18px",
    background: "rgba(255,255,255,.05)",
    border: "1px solid rgba(255,255,255,.1)",
  },
  "@global .vs-col.me": {
    background: "rgba(253,185,19,.12)",
    "border-color": "rgba(253,185,19,.45)",
  },
  "@global .vs-col b": {
    display: "block",
    "font-size": "15px",
    "margin-bottom": "8px",
  },
  "@global .vs-col.me b": {
    color: "var(--yellow)",
  },
  "@global .vs-col ul": {
    "list-style": "none",
    margin: "0",
    padding: "0",
    display: "grid",
    gap: "6px",
    "font-size": "14px",
    "font-weight": "300",
  },
  "@global .vs-col li": {
    "padding-left": "20px",
    position: "relative",
  },
  "@global .vs-col li::before": {
    content: '""',
    position: "absolute",
    left: "0",
    top: ".62em",
    width: "10px",
    height: "3px",
    "border-radius": "2px",
    background: "rgba(255,255,255,.4)",
  },
  "@global .vs-col.me li::before": {
    background: "var(--yellow)",
  },
  "@global .jag .btn-o": {
    color: "#fff",
  },
  "@global .jag-stage": {
    position: "relative",
    height: "clamp(380px,40vw,500px)",
  },
  "@global .jag-glow": {
    position: "absolute",
    left: "50%",
    top: "55%",
    width: "70%",
    "aspect-ratio": "1",
    transform: "translate(-50%,-50%)",
    "border-radius": "50%",
    background:
      "radial-gradient(closest-side,rgba(253,185,19,.35),transparent)",
    animation: "jagPulse 4s ease-in-out infinite",
  },
  "@global .jag-sachet": {
    position: "absolute",
    left: "6%",
    top: "2%",
    width: "58%",
    transform: "rotate(-24deg)",
    "transform-origin": "80% 80%",
    filter: "drop-shadow(0 24px 22px rgba(0,0,0,.5)) !important",
    animation: "jagTilt 4.8s ease-in-out infinite",
    "z-index": "3",
  },
  "@global .jag-cup": {
    position: "absolute",
    right: "8%",
    bottom: "6%",
    width: "40%",
    "z-index": "2",
  },
  "@global .jag-mug": {
    position: "relative",
    margin: "0 auto",
    width: "78%",
    "aspect-ratio": "1/.82",
    "border-radius": "6px 6px 46% 46%/6px 6px 60% 60%",
    background: "linear-gradient(90deg,#f3ede2,#fff 40%,#e3dbcc)",
    "box-shadow": "0 20px 30px -14px rgba(0,0,0,.6)",
    overflow: "hidden",
  },
  "@global .jag-mug::after": {
    content: '""',
    position: "absolute",
    right: "-24%",
    top: "18%",
    width: "34%",
    height: "44%",
    border: "7px solid #efe8db",
    "border-left": "0",
    "border-radius": "0 50% 50% 0",
  },
  "@global .jag-tea": {
    position: "absolute",
    left: "5%",
    right: "5%",
    top: "8%",
    height: "14%",
    "border-radius": "50%",
    background: "#7a4b2a",
    animation: "jagTea 4.8s ease-in-out infinite",
  },
  "@global .jag-saucer": {
    width: "100%",
    height: "14px",
    "margin-top": "-4px",
    "border-radius": "50%",
    background: "linear-gradient(#efe8db,#cfc5b4)",
    "box-shadow": "0 10px 18px -8px rgba(0,0,0,.6)",
  },
  "@global .jag-steam": {
    position: "absolute",
    left: "0",
    right: "0",
    top: "-34%",
    height: "34%",
    display: "flex",
    "justify-content": "center",
    gap: "12%",
  },
  "@global .jag-steam i": {
    width: "8px",
    height: "100%",
    "border-radius": "8px",
    background: "linear-gradient(transparent,rgba(255,255,255,.45))",
    filter: "blur(3px)",
    animation: "jagSteam 3s ease-in-out infinite",
  },
  "@global .jag-steam i:nth-child(2)": {
    "animation-delay": "-1s",
  },
  "@global .jag-steam i:nth-child(3)": {
    "animation-delay": "-2s",
  },
  "@global .jag-pill": {
    position: "absolute",
    "z-index": "4",
    background: "rgba(255,255,255,.12)",
    "backdrop-filter": "blur(10px)",
    "-webkit-backdrop-filter": "blur(10px)",
    border: "1px solid rgba(255,255,255,.22)",
    "border-radius": "14px",
    padding: "8px 14px",
    "font-size": "13px",
    "font-weight": "300",
    animation: "bob 6s ease-in-out infinite",
  },
  "@global .jag-pill b": {
    display: "block",
    "font-size": "20px",
    "font-weight": "800",
    color: "var(--yellow)",
  },
  "@global .jag-pill.p1": {
    left: "2%",
    bottom: "14%",
  },
  "@global .jag-pill.p2": {
    right: "0",
    top: "6%",
    "animation-delay": "-3s",
  },
  "@media                     (max-width:880px)": {
    "@global  .jag-grid": {
      "grid-template-columns": "1fr",
    },
    "@global  .jag-stage": {
      height: "340px",
    },
    "@global  .jag-vs": {
      "grid-template-columns": "1fr",
    },
  },
  "@media       (prefers-reduced-motion:reduce)": {
    "@global .jag-sachet,.jag-tea,.jag-steam i,.jag-glow,.jag-pill": {
      animation: "none !important",
    },
  },
  "@global .cat .imgs:not(.one) img": {
    "max-width": "56%",
    "object-fit": "contain",
    "object-position": "50% 100%",
  },
  "@global .cat .imgs:not(.one) img.sq": {
    height: "150px",
  },
  "@media   (max-width:560px)": {
    "@global     .cats": {
      "grid-template-columns": "1fr",
    },
  },
  "@global  .pk.hl": {
    "z-index": "20 !important",
  },
  "@global .jag-pill,.jag-cup,.jag-sachet": {
    display: "none !important",
  },
  "@global   .jag-stage": {
    "--T": "6.4s",
  },
  "@global .jag-pack": {
    position: "absolute",
    left: "8%",
    top: "6%",
    width: "44%",
    "aspect-ratio": "435/479",
    "transform-origin": "50% 55%",
    animation: "jpTilt var(--T) cubic-bezier(.45,0,.25,1) infinite",
    "z-index": "3",
    filter:
      "drop-shadow(0 0 1px rgba(255,236,200,.55)) drop-shadow(0 26px 24px rgba(0,0,0,.55))",
  },
  "@global .jag-pack img": {
    position: "absolute",
    inset: "0",
    width: "100%",
    height: "100%",
    filter: "none !important",
  },
  "@global .jp-body": {
    "clip-path": "polygon(0 0,70% 0,100% 30%,100% 100%,0 100%)",
    animation: "jpBody var(--T) linear infinite",
  },
  "@global .jp-corner": {
    "clip-path": "polygon(70% 0,100% 0,100% 30%)",
    animation: "jpCorner var(--T) cubic-bezier(.4,0,.6,1) infinite",
  },
  "@global .jp-cutline": {
    position: "absolute",
    left: "70%",
    top: "0",
    width: "42.4%",
    height: "0",
    "border-top": "2.5px dashed rgba(255,236,200,.9)",
    "transform-origin": "0 0",
    transform: "rotate(45deg) scaleX(var(--cut,0))",
    animation: "jpCut var(--T) linear infinite",
  },
  "@global .jp-mouth": {
    position: "absolute",
    right: "13%",
    top: "13%",
    width: "4px",
    height: "4px",
  },
  "@global .jp-scissors": {
    position: "absolute",
    "z-index": "4",
    width: "12%",
    left: "calc(8% + 44% * .64)",
    top: "calc(6% - 4%)",
    opacity: "0",
    animation: "jpSnip var(--T) linear infinite",
    filter: "drop-shadow(0 4px 6px rgba(0,0,0,.5))",
  },
  "@global .kulhad": {
    position: "absolute",
    right: "10%",
    bottom: "6%",
    width: "36%",
    "aspect-ratio": "1/1.05",
    "z-index": "2",
  },
  "@global .kh-body": {
    position: "absolute",
    left: "0",
    right: "0",
    top: "9%",
    bottom: "0",
    "clip-path": "polygon(0 0,100% 0,84% 100%,16% 100%)",
    "border-radius": "0 0 14px 14px",
    background:
      "repeating-linear-gradient(180deg,rgba(0,0,0,0) 0 9px,rgba(60,20,8,.16) 9px 11px),\n  linear-gradient(90deg,#6e2a14 0%,#a5462a 20%,#d0754a 42%,#c46640 58%,#94391f 82%,#5e2210 100%)",
  },
  "@global .kh-rim": {
    position: "absolute",
    left: "-2%",
    right: "-2%",
    top: "2%",
    height: "16%",
    "border-radius": "50%",
    background: "linear-gradient(180deg,#8a3519,#c9693f)",
    "z-index": "2",
    "box-shadow": "inset 0 -3px 0 rgba(0,0,0,.2)",
  },
  "@global .kh-tea": {
    position: "absolute",
    left: "7%",
    right: "7%",
    top: "16%",
    bottom: "14%",
    "border-radius": "50%",
    background: "radial-gradient(ellipse at 40% 40%,#c08a55,#8f5a2e 70%)",
    animation: "khTea var(--T) ease-in-out infinite",
  },
  "@global .kh-shadow": {
    position: "absolute",
    left: "8%",
    right: "8%",
    bottom: "-6%",
    height: "12%",
    "border-radius": "50%",
    background: "radial-gradient(closest-side,rgba(0,0,0,.55),transparent)",
    "z-index": "-1",
  },
  "@global .kh-steam": {
    position: "absolute",
    left: "0",
    right: "0",
    top: "-40%",
    height: "42%",
    display: "flex",
    "justify-content": "center",
    gap: "14%",
    "z-index": "3",
  },
  "@global .kh-steam i": {
    width: "9px",
    height: "100%",
    "border-radius": "9px",
    background: "linear-gradient(transparent,rgba(255,255,255,.5))",
    filter: "blur(3px)",
    animation: "jagSteam 3s ease-in-out infinite",
  },
  "@global .kh-steam i:nth-child(2)": {
    "animation-delay": "-1s",
  },
  "@global .kh-steam i:nth-child(3)": {
    "animation-delay": "-2s",
  },
  "@media                      (max-width:880px)": {
    "@global  .jag-pack": {
      width: "42%",
      left: "6%",
    },
    "@global  .kulhad": {
      width: "38%",
    },
  },
  "@media        (prefers-reduced-motion:reduce)": {
    "@global .jag-pack,.jp-corner,.jp-cutline,.jp-scissors,.kh-tea": {
      animation: "none !important",
    },
    "@global  .jp-scissors": {
      display: "none",
    },
  },
  "@global .rng": {
    "--per": "4",
    "--gap": "18px",
  },
  "@global .rng-view": {
    overflow: "hidden",
    margin: "-30px -12px",
    padding: "30px 12px",
  },
  "@global .rng-track": {
    display: "flex",
    gap: "var(--gap)",
    transition: "transform .8s cubic-bezier(.65,0,.25,1)",
    "will-change": "transform",
    "touch-action": "pan-y",
  },
  "@global .rng-track .cat": {
    fallbacks: [
      {
        opacity: ".55",
      },
    ],
    flex: "0 0 calc((100% - var(--gap) * (var(--per) - 1)) / var(--per))",
    "min-height": "360px",
    transform: "scale(.94)",
    opacity: "1",
    transition:
      "transform .7s cubic-bezier(.2,.8,.2,1),opacity .7s,background .3s",
  },
  "@global  .rng-track .cat": {
    transform: "none",
  },
  "@global .rng-track .cat.in .imgs img": {
    animation: "rngPop .8s cubic-bezier(.2,.9,.25,1.3) both",
  },
  "@global .rng-track .cat.in .imgs img:nth-child(2)": {
    "animation-delay": ".12s",
  },
  "@global .rng-track .cat.in h3": {
    animation: "slideUp .6s cubic-bezier(.2,.8,.2,1) both",
  },
  "@global .rng-track .cat.in p": {
    animation: "slideUp .6s .08s cubic-bezier(.2,.8,.2,1) both",
  },
  "@global .rng-ui": {
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    gap: "16px",
    "margin-top": "28px",
  },
  "@global .rng-ui .s-arr": {
    background: "var(--green) !important",
    "border-color": "var(--green) !important",
  },
  "@global .rng-ui .s-arr:hover": {
    background: "var(--yellow) !important",
    "border-color": "var(--yellow) !important",
  },
  "@global .rng-dots": {
    display: "flex",
    gap: "8px",
  },
  "@global .rng-dots button": {
    width: "30px",
    height: "5px",
    border: "0",
    padding: "0",
    "border-radius": "3px",
    background: "var(--line)",
    position: "relative",
    overflow: "hidden",
    transition: "width .4s",
  },
  "@global .rng-dots button.on": {
    width: "52px",
  },
  "@global .rng-dots button::after": {
    content: '""',
    position: "absolute",
    inset: "0",
    background: "var(--green)",
    transform: "scaleX(0)",
    "transform-origin": "left",
  },
  "@global .rng-dots button.on::after": {
    animation: "fill var(--rdur,3600ms) linear forwards",
  },
  "@global .rng.paused .rng-dots button.on::after": {
    "animation-play-state": "paused",
  },
  "@media (max-width:1100px)": {
    "@global  .rng": {
      "--per": "3",
    },
  },
  "@media (max-width:820px)": {
    "@global   .rng": {
      "--per": "2",
    },
  },
  "@media     (max-width:520px)": {
    "@global    .rng": {
      "--per": "1.25",
      "--gap": "14px",
    },
  },
  "@global   .kulhad": {
    right: "6%",
    bottom: "4%",
    width: "40%",
    "aspect-ratio": "120/130",
  },
  "@global .kh-svg": {
    position: "absolute",
    inset: "0",
    width: "100%",
    height: "100%",
    overflow: "visible",
    filter: "drop-shadow(0 18px 18px rgba(0,0,0,.45))",
  },
  "@global .kh-teasurf": {
    animation: "khTea2 var(--T) ease-in-out infinite",
    "transform-box": "fill-box",
    "transform-origin": "center",
  },
  "@global  .kh-steam": {
    top: "-34%",
  },
  "@global   .jag-pack": {
    width: "38%",
    left: "4%",
    top: "4%",
  },
  "@global   .jag-grid": {
    "z-index": "auto",
  },
  "@global .jag-copy": {
    position: "relative",
    "z-index": "3",
  },
  "@global  .jag-fx": {
    "z-index": "4",
  },
  "@global  .rng-dots button.on": {
    background: "color-mix(in srgb,var(--green) 25%,var(--line))",
  },
};
