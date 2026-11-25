/* =====================================================================
   CENTURY BRAND MOTION STYLES (JSS)
   Word reveals, button sweeps, chapter numbers, stacked sections,
   the product parade and hero depth.
   ===================================================================== */
window.CENTURY_STYLES = window.CENTURY_STYLES || {};
window.CENTURY_STYLES.brand = function (t) {
  var c = t.color,
    E = t.ease,
    S = t.spring;
  return {
    "@global": {
      /* smooth scroll plumbing (Lenis) */
      "html.lenis, html.lenis body": { height: "auto" },
      "html.lenis": { scrollBehavior: "auto!important" },
      ".lenis.lenis-smooth": { scrollBehavior: "auto!important" },
      ".lenis.lenis-stopped": { overflow: "hidden" },
      /* header + menu follow the theme: ink on cream (light), white on forest (dark) */
      ":root": { colorScheme: "only light" },
      ".menu-t": {
        color: "#11160F!important",
        width: "44px",
        height: "44px",
        padding: "10px!important",
        borderRadius: "50%",
        placeContent: "center",
      },
      ".menu-t span": {
        width: "22px!important",
        height: "2.5px!important",
        margin: "2.5px 0!important",
      },
      "body.menu-open .menu-t span:nth-child(1)": {
        transform: "translateY(5px) rotate(45deg)!important",
      },
      "body.menu-open .menu-t span:nth-child(3)": {
        transform: "translateY(-5px) rotate(-45deg)!important",
      },
      "body.menu-open nav.main": { background: "#FBF5E6!important" },
      "body.menu-open nav.main a": { color: "#11160F!important" },
      ':root[data-theme="dark"]': { colorScheme: "dark" },
      ':root[data-theme="dark"] header.top': {
        background: "rgba(8,22,14,.94)!important",
        borderColor: "rgba(255,255,255,.10)!important",
        boxShadow: "0 14px 40px -20px rgba(0,0,0,.8)!important",
      },
      ':root[data-theme="dark"] header.top .brand .lg': {
        display: "none!important",
      },
      ':root[data-theme="dark"] header.top .brand .lw': {
        display: "block!important",
      },
      ':root[data-theme="dark"] .menu-t': { color: "#fff!important" },
      ':root[data-theme="dark"] nav.main a': {
        color: "rgba(255,255,255,.72)!important",
      },
      ':root[data-theme="dark"] nav.main a[aria-current="page"]': {
        color: "#fff!important",
      },
      ':root[data-theme="dark"] body.menu-open nav.main': {
        background: "#0B1510!important",
        borderColor: "rgba(255,255,255,.12)!important",
      },
      ':root[data-theme="dark"] body.menu-open nav.main a': {
        color: "#fff!important",
      },
      /* buttons: one consistent system */
      ".btn-y::after, .btn-g::after": { display: "none!important" },
      "a.btn, button.btn": {
        padding: "15px 26px!important",
        fontSize: "15px!important",
        fontWeight: 600,
        lineHeight: 1.2,
        minHeight: "50px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        whiteSpace: "nowrap",
      },
      ".s-arr": {
        flex: "0 0 46px!important",
        width: "46px!important",
        height: "46px!important",
        minWidth: "46px",
        padding: 0,
        borderRadius: "50%!important",
        display: "grid!important",
        placeItems: "center",
        background: "#11160F!important",
        border: "0!important",
        cursor: "pointer",
        transition: "background .25s, transform .25s",
      },
      ".s-arr::before": { borderColor: "#fff!important" },
      ".s-arr:hover": {
        background: "#FDB913!important",
        transform: "scale(1.06)",
      },
      ".s-arr:hover::before": { borderColor: "#11160F!important" },
      ".hero .s-arr, .pslider .s-arr, .rcps .s-arr, .store-sec .s-arr": {
        background: "rgba(255,255,255,.14)!important",
        boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,.45)",
      },
      ".rng-ui": { display: "flex", alignItems: "center", gap: "14px" },
      ".rng-dots": {
        flex: "1 1 auto",
        minWidth: 0,
        display: "flex",
        gap: "6px",
        overflow: "hidden",
      },
      ".rng-dots button": { flex: "1 1 0", minWidth: "8px", maxWidth: "56px" },
      /* hero slide 1: the five packs rise in one by one, then float */
      ".hero .slide .stage .pk": { opacity: 0 },
      ".hero .slide.active .stage.in .pk": {
        opacity: 1,
        animation:
          "pkIn .9s cubic-bezier(.2,.9,.25,1.15) var(--pd,0s) both, svFloat 5s ease-in-out calc(var(--pd,0s) + 1s) infinite",
      },
      ".hero .slide.active .stage.in .pk:nth-child(2n)": {
        animationDuration: ".9s, 5.8s",
      },
      ".hero .slide.active .stage.in .pk.hl": {
        animationDuration: ".9s, 4.4s",
      },
      "@keyframes pkIn": {
        from: { opacity: 0, translate: "0 140px", scale: ".78" },
        "70%": { opacity: 1 },
        to: { opacity: 1, translate: "0 0", scale: "1" },
      },
      ".hero .stage::before": {
        content: '""',
        position: "absolute",
        left: "8%",
        right: "8%",
        top: "6%",
        bottom: "4%",
        borderRadius: "50%",
        background:
          "radial-gradient(closest-side,rgba(253,185,19,.34),rgba(253,185,19,0) 72%)",
        opacity: 0,
        transform: "scale(.7)",
        transition: "opacity .8s .3s, transform 1s .3s",
        pointerEvents: "none",
      },
      ".hero .slide.active .stage.in::before": {
        opacity: 1,
        transform: "scale(1)",
        animation: "svGlow 4.5s ease-in-out 1.2s infinite",
      },
      ".hero .slide.active .stage.in .pk:hover": {
        translate: "0 -18px",
        animationPlayState: "paused",
      },
      ".hh .cnt": { fontVariantNumeric: "tabular-nums" },
      /* slider packs: fly in one by one, then keep floating with a soft glow behind */
      ".slide.active .sv img, .pslider .slide.active .sv img": {
        animation:
          "packIn .85s cubic-bezier(.2,.9,.25,1.15) calc(var(--dl,0s) * .75) both, svFloat 4.8s ease-in-out calc(var(--dl,0s) * .75 + .9s) infinite",
      },
      ".slide.active .sv img:nth-child(2n)": {
        animationDuration: ".85s, 5.6s",
      },
      ".slide.active .sv img:nth-child(3n)": {
        animationDuration: ".85s, 6.3s",
      },
      "@keyframes svFloat": {
        "0%,100%": { translate: "0 0", rotate: "0deg" },
        "50%": { translate: "0 -16px", rotate: "1.6deg" },
      },
      ".sv:not(.ph)::before": {
        content: '""',
        position: "absolute",
        left: "4%",
        right: "4%",
        top: "8%",
        bottom: "0",
        borderRadius: "50%",
        background:
          "radial-gradient(closest-side,rgba(253,185,19,.34),rgba(253,185,19,0) 72%)",
        opacity: 0,
        transform: "scale(.7)",
        transition: "opacity .8s .3s, transform 1s .3s",
        pointerEvents: "none",
        zIndex: 0,
      },
      ".slide.active .sv:not(.ph)::before": {
        opacity: 1,
        transform: "scale(1)",
        animation: "svGlow 4.5s ease-in-out 1.2s infinite",
      },
      "@keyframes svGlow": {
        "0%,100%": { opacity: 0.75, transform: "scale(.94)" },
        "50%": { opacity: 1, transform: "scale(1.06)" },
      },
      ".slide.active .sv img:hover": {
        translate: "0 -18px",
        animationPlayState: "paused",
      },
      /* "Every Century product": spotlight + deck slider */
      ".allp": {
        background: c.forest,
        color: c.cream,
        padding: "clamp(70px,9vw,120px) 0",
        overflow: "hidden",
        position: "relative",
        "--tone": c.yellow,
      },
      ".allp .wrap": { position: "relative", zIndex: 1 },
      ".allp .sec-head h2": { color: c.cream },
      ".allp .sec-head .lede": { color: "rgba(251,245,230,.78)" },
      ".ap-bgword": {
        position: "absolute",
        left: 0,
        top: "58%",
        whiteSpace: "nowrap",
        display: "flex",
        pointerEvents: "none",
        animation: "tick 70s linear infinite",
      },
      ".ap-bgword span": {
        fontWeight: 900,
        fontSize: "clamp(90px,14vw,220px)",
        letterSpacing: "-.05em",
        lineHeight: 1,
        color: "transparent",
        WebkitTextStroke: "1.5px rgba(253,185,19,.07)",
        paddingRight: ".3em",
      },
      ".dk": {
        display: "grid",
        gridTemplateColumns: "1.15fr 1fr",
        gap: "clamp(20px,4vw,60px)",
        alignItems: "center",
        outline: "none",
      },
      ".dk:focus-visible": {
        boxShadow: "0 0 0 3px " + c.yellow,
        borderRadius: "24px",
      },
      /* stage */
      ".dk-stage": {
        position: "relative",
        height: "clamp(380px,40vw,540px)",
        borderRadius: "36px",
        background:
          "radial-gradient(70% 60% at 50% 60%,color-mix(in srgb,var(--tone) 34%,transparent),transparent 70%),linear-gradient(180deg,#0f4426,#082a17)",
        border: "1px solid rgba(255,255,255,.08)",
        overflow: "hidden",
        touchAction: "pan-y",
        cursor: "grab",
        transition: "background .9s",
        userSelect: "none",
      },
      ".dk-stage:active": { cursor: "grabbing" },
      ".dk-word": {
        position: "absolute",
        left: "50%",
        top: "44%",
        fontStyle: "normal",
        fontWeight: 900,
        fontSize: "clamp(90px,12vw,190px)",
        letterSpacing: "-.06em",
        lineHeight: 1,
        whiteSpace: "nowrap",
        color: "transparent",
        WebkitTextStroke: "2px color-mix(in srgb,var(--tone) 55%,transparent)",
        transform: "translate(calc(-50% + var(--px,0) * -40px),-50%)",
        transition: "transform .8s " + E + ", -webkit-text-stroke-color .9s",
        pointerEvents: "none",
      },
      ".dk-word.swap": { animation: "dkWord .9s " + E },
      "@keyframes dkWord": {
        from: { opacity: 0, letterSpacing: ".1em" },
        to: { opacity: 1, letterSpacing: "-.06em" },
      },
      ".dk-halo": {
        position: "absolute",
        left: "50%",
        top: "52%",
        width: "min(70%,380px)",
        aspectRatio: "1",
        transform: "translate(-50%,-50%)",
        borderRadius: "50%",
        border: "1.5px dashed color-mix(in srgb,var(--tone) 60%,transparent)",
        animation: "apSpin 26s linear infinite",
        transition: "border-color .9s",
      },
      ".dk-halo::after": {
        content: '""',
        position: "absolute",
        inset: "14%",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,.08)",
      },
      ".dk-plinth": {
        position: "absolute",
        left: "50%",
        bottom: "9%",
        width: "58%",
        height: "9%",
        transform: "translateX(-50%)",
        borderRadius: "50%",
        background:
          "radial-gradient(closest-side,color-mix(in srgb,var(--tone) 55%,transparent),transparent 75%)",
        transition: "background .9s",
        filter: "blur(2px)",
      },
      ".dk-packs": {
        position: "absolute",
        inset: "8% 18% 13%",
        transform:
          "translate(calc(var(--px,0) * 18px),calc(var(--py,0) * 12px))",
        transition: "transform .8s " + E,
      },
      ".dk-pack": { position: "absolute", inset: 0, display: "block" },
      ".dk-pack img": {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        objectPosition: "50% 100%",
        filter: "drop-shadow(0 30px 26px rgba(0,0,0,.55))",
        pointerEvents: "none",
        WebkitUserDrag: "none",
      },
      ".dk-pack.in": { animation: "dkIn .8s " + S + " both" },
      ".dk-pack.in.rev": { animation: "dkInR .8s " + S + " both" },
      ".dk-pack.out": {
        animation: "dkOut .6s " + E + " both",
        pointerEvents: "none",
      },
      ".dk-pack.out.back": { animation: "dkOutR .6s " + E + " both" },
      "@keyframes dkIn": {
        from: {
          opacity: 0,
          transform: "translateX(70%) rotate(14deg) scale(.6)",
        },
        to: { opacity: 1, transform: "none" },
      },
      "@keyframes dkInR": {
        from: {
          opacity: 0,
          transform: "translateX(-70%) rotate(-14deg) scale(.6)",
        },
        to: { opacity: 1, transform: "none" },
      },
      "@keyframes dkOut": {
        to: {
          opacity: 0,
          transform: "translateX(-60%) rotate(-12deg) scale(.7)",
        },
      },
      "@keyframes dkOutR": {
        to: {
          opacity: 0,
          transform: "translateX(60%) rotate(12deg) scale(.7)",
        },
      },
      ".dk-live .dk-pack:not(.out) img": {
        animation: "dkFloat 4.4s ease-in-out .8s infinite",
      },
      "@keyframes dkFloat": {
        "0%,100%": { translate: "0 0", rotate: "0deg" },
        "50%": { translate: "0 -14px", rotate: "-1.5deg" },
      },
      ".dk-pack.drag": {
        animation: "none",
        transform: "translateX(var(--dx)) rotate(calc(var(--dx) / 18))",
        transition: "none",
      },
      ".dk-scan": {
        position: "absolute",
        left: "10%",
        right: "10%",
        top: "2%",
        height: "3px",
        borderRadius: "3px",
        background:
          "linear-gradient(90deg,transparent,#FDB913 30%,#fff6c9 50%,#FDB913 70%,transparent)",
        boxShadow: "0 0 16px 4px rgba(253,185,19,.55)",
        opacity: 0,
        animation: "dkScan 4.2s ease-in-out 1s infinite",
        pointerEvents: "none",
      },
      "@keyframes dkScan": {
        "0%,40%": { opacity: 0, top: "2%" },
        "46%": { opacity: 1 },
        "78%": { opacity: 1 },
        "86%,100%": { opacity: 0, top: "96%" },
      },
      /* ingredients orbiting the pack */
      ".dk-orb": {
        position: "absolute",
        left: "50%",
        top: "55%",
        width: 0,
        height: 0,
        zIndex: 3,
        pointerEvents: "none",
        "--R": "clamp(130px,15vw,200px)",
      },
      ".dk-orb i": {
        position: "absolute",
        left: 0,
        top: 0,
        "--T": "6s",
        animation: "apOx var(--T) ease-in-out infinite alternate",
        animationDelay: "calc(var(--k) * -1.5s)",
      },
      ".dk-orb i:nth-child(odd)": { "--T": "7.4s" },
      ".dk-orb b": {
        display: "block",
        width: "calc(10px + var(--k) * 1.5px)",
        height: "calc(9px + var(--k) * 1.2px)",
        margin: "-6px 0 0 -6px",
        borderRadius: "45% 55% 50% 50%",
        background:
          "radial-gradient(circle at 35% 30%,var(--c2,#fff),var(--c1,#FDB913) 70%)",
        boxShadow: "0 4px 6px rgba(0,0,0,.35)",
        transition: "background .6s",
        animation:
          "dkOy var(--T) ease-in-out infinite alternate, apDepth calc(var(--T) * 2) linear infinite",
        animationDelay:
          "calc(var(--k) * -1.5s - var(--T) / 2), calc(var(--k) * -3s - var(--T) / 2)",
      },
      "@keyframes dkOy": {
        from: { transform: "translateY(-90px) rotate(0deg)" },
        to: { transform: "translateY(90px) rotate(240deg)" },
      },
      /* side: info, deck, controls */
      ".dk-side": {
        display: "flex",
        flexDirection: "column",
        gap: "26px",
        minWidth: 0,
      },
      ".dk-info.swap > *": { animation: "rgIn .6s " + E + " both" },
      ".dk-info.swap > :nth-child(2)": { animationDelay: ".06s" },
      ".dk-info.swap > :nth-child(3)": { animationDelay: ".12s" },
      ".dk-info.swap > :nth-child(4)": { animationDelay: ".18s" },
      ".dk-info.swap > :nth-child(5)": { animationDelay: ".24s" },
      "@keyframes rgIn": {
        from: { opacity: 0, transform: "translateY(16px)" },
        to: { opacity: 1, transform: "none" },
      },
      ".dk-info small": {
        display: "block",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: ".14em",
        textTransform: "uppercase",
        color: "var(--tone)",
        transition: "color .9s",
      },
      ".dk-info h3": {
        margin: "6px 0 8px",
        fontSize: "clamp(32px,3.8vw,56px)",
        fontWeight: 900,
        letterSpacing: "-.035em",
        lineHeight: 1,
        color: c.cream,
      },
      ".dk-info p": {
        margin: "0 0 14px",
        fontWeight: 300,
        fontSize: "17px",
        color: "rgba(251,245,230,.8)",
      },
      ".dk-chips": {
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        marginBottom: "20px",
      },
      ".dk-chips span": {
        fontSize: "13px",
        fontWeight: 600,
        padding: "5px 12px",
        borderRadius: "999px",
        background: "rgba(255,255,255,.08)",
        border: "1px solid rgba(255,255,255,.12)",
      },
      ".dk-chips span + span": {
        background: "color-mix(in srgb,var(--tone) 22%,transparent)",
        borderColor: "color-mix(in srgb,var(--tone) 50%,transparent)",
      },
      /* fanned deck of the next packs */
      ".dk-deck": { position: "relative", height: "150px" },
      ".dk-card": {
        position: "absolute",
        left: 0,
        top: 0,
        width: "min(300px,100%)",
        height: "120px",
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "12px 16px 12px 12px",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,.1)",
        background: "linear-gradient(135deg,#124d2b,#0b3a20)",
        color: c.cream,
        textAlign: "left",
        cursor: "pointer",
        fontFamily: "inherit",
        transformOrigin: "0 100%",
        transform:
          "translateX(calc(var(--d) * var(--off,46px))) translateY(calc(var(--d) * -6px)) rotate(calc(var(--d) * 3deg)) scale(calc(1 - var(--d) * .07))",
        zIndex: "calc(10 - var(--d))",
        opacity: "calc(1 - var(--d) * .2)",
        transition: "transform .7s " + S + ", opacity .5s, box-shadow .3s",
        boxShadow: "0 18px 30px -18px rgba(0,0,0,.7)",
      },
      ".dk-card.hid": {
        opacity: 0,
        pointerEvents: "none",
        transform: "translateX(220px) rotate(12deg) scale(.7)",
      },
      ".dk-card:hover": {
        boxShadow: "0 0 0 1.5px var(--tone), 0 22px 36px -18px rgba(0,0,0,.8)",
      },
      ".dk-card:not(.hid):hover": {
        transform:
          "translateX(calc(var(--d) * var(--off,46px))) translateY(calc(var(--d) * -6px - 10px)) rotate(calc(var(--d) * 3deg)) scale(calc(1 - var(--d) * .07))",
      },
      ".dk-cimg": {
        flex: "0 0 70px",
        height: "96px",
        display: "grid",
        placeItems: "center",
        borderRadius: "14px",
        background: "rgba(255,255,255,.06)",
      },
      ".dk-cimg img": {
        maxWidth: "86%",
        maxHeight: "88%",
        objectFit: "contain",
        filter: "drop-shadow(0 6px 6px rgba(0,0,0,.4))",
      },
      ".dk-ctx small": {
        display: "block",
        fontSize: "10.5px",
        fontWeight: 700,
        letterSpacing: ".12em",
        textTransform: "uppercase",
        color: c.yellow,
      },
      ".dk-ctx b": {
        display: "block",
        fontSize: "16px",
        fontWeight: 800,
        lineHeight: 1.2,
        marginTop: "4px",
      },
      ".dk-card::before": {
        content: '"Up next"',
        position: "absolute",
        right: "12px",
        top: "10px",
        fontSize: "10px",
        fontWeight: 600,
        letterSpacing: ".1em",
        textTransform: "uppercase",
        opacity: 0,
        color: "rgba(251,245,230,.6)",
      },
      '.dk-card[style*="--d: 0"]::before, .dk-card[style*="--d:0"]::before': {
        opacity: 1,
      },
      ".dk-ui": {
        display: "flex",
        alignItems: "center",
        gap: "14px",
        flexWrap: "wrap",
      },
      ".dk-num": {
        display: "flex",
        alignItems: "baseline",
        gap: "6px",
        fontVariantNumeric: "tabular-nums",
        color: "rgba(251,245,230,.6)",
        fontWeight: 300,
      },
      ".dk-num b": {
        fontSize: "34px",
        fontWeight: 900,
        color: c.cream,
        letterSpacing: "-.03em",
      },
      ".dk-num i": { fontStyle: "normal" },
      ".dk-all": {
        marginLeft: "auto",
        fontWeight: 700,
        fontSize: "14px",
        color: c.yellow,
        textDecoration: "none",
        borderBottom: "2px solid currentColor",
        paddingBottom: "2px",
      },
      /* progress rail: one segment per product, the current one fills in time */
      ".dk-rail": { display: "flex", gap: "4px" },
      ".dk-rail i": {
        flex: 1,
        height: "4px",
        borderRadius: "2px",
        background: "rgba(251,245,230,.16)",
        position: "relative",
        overflow: "hidden",
      },
      ".dk-rail i.done": {
        background: "color-mix(in srgb,var(--tone) 70%,transparent)",
      },
      ".dk-rail i.on::after": {
        content: '""',
        position: "absolute",
        inset: 0,
        background: "var(--tone)",
        transformOrigin: "left",
        transform: "scaleX(1)",
      },
      ".dk.run .dk-rail i.on::after": {
        transform: "scaleX(0)",
        animation: "apTick 4s linear forwards",
      },
      "@keyframes apTick": { to: { transform: "scaleX(1)" } },
      "@keyframes apSpin": {
        to: { transform: "translate(-50%,-50%) rotate(360deg)" },
      },
      "@keyframes apOx": {
        from: { transform: "translateX(calc(var(--R,108px) * -1))" },
        to: { transform: "translateX(var(--R,108px))" },
      },
      "@keyframes apDepth": {
        "0%,100%": { scale: "1.25", opacity: 1 },
        "50%": { scale: ".6", opacity: 0.55 },
      },
      ".off .ap-bgword, .off .dk-halo, .off .dk-orb i, .off .dk-orb b, .off .dk-pack img, .off .dk-scan":
        { animationPlayState: "paused!important" },
      /* performance */
      /* products page and product cards: no looping animations, so scrolling stays smooth */
      ".card.in .ph img:not(.full), .card.in .ph::after, .card.in .ph .gs": {
        animation: "none!important",
      },
      "#v-products .pslider .slide.active .sv img": {
        animation:
          "packIn .85s cubic-bezier(.2,.9,.25,1.15) calc(var(--dl,0s) * .75) both!important",
      },
      "#v-products .pslider .slide.active .sv:not(.ph)::before": {
        animation: "none!important",
      },
      ".curtain.run": { animationDuration: ".42s!important" },
      ".curtain.run img": { animationDuration: ".42s!important" },
      ".bgfx": { display: "none!important" },
      /* pause the looping animations of sections that are off screen (targeted, no universal selectors) */
      ".off .tr, .off .bigmq-tr, .off .pr-tr, .off .pt-tr, .off .seal svg, .off .sv img, .off .sv::before, .off .pk, .off .st-wob, .off .st-glow::after, .off .kh-steam i, .off .jag-steam i, .off .jag-pack, .off .jp-body, .off .jp-corner, .off .jp-cutline, .off .jp-scissors, .off .kh-tea, .off .kh-teasurf, .off .ring, .off .spk, .off .rc-steps button.on::after, .off .gs":
        { animationPlayState: "paused!important" },
      /* no background blurs: they force the browser to re-blur on every frame */
      "header.top, .glass, .peek, .qchip, .pd-bar, .s-arr, .f2-cb, .pdfx-hint, .sh-card, .jag-pill, .sachets figcaption":
        {
          backdropFilter: "none!important",
          WebkitBackdropFilter: "none!important",
        },
      ".reveal, .reveal.seen": { filter: "none!important" },
      ".st-amb i": { animation: "none!important" },
      ".card .ph .gs": { filter: "none!important" },
      "header.top": { background: "rgba(251,245,230,.97)!important" },
      ".glass": { background: "rgba(12,30,20,.72)!important" },
      /* masked word reveal */
      ".split .sw": {
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "top",
        paddingBottom: ".1em",
        marginBottom: "-.1em",
        paddingRight: ".02em",
      },
      ".split .si": {
        display: "inline-block",
        transform: "translateY(108%) rotate(4deg)",
        transformOrigin: "0 100%",
        transition: "transform 1s " + E,
        transitionDelay: "calc(var(--i) * 55ms)",
      },
      ".split.split-in .si, .slide.active .split .si": { transform: "none" },
      ".split .bar": { transitionDelay: ".5s" },
      /* chapter numbers */
      ".sec-head .idx": {
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        fontWeight: 600,
        fontSize: "13px",
        letterSpacing: ".14em",
        color: "currentColor",
        opacity: 0.65,
        marginBottom: "-6px",
      },
      ".sec-head .idx::before": { content: '"("' },
      ".sec-head .idx::after": { content: '")"', marginRight: "8px" },
      /* buttons: colour sweep + magnetic pull */
      ".btn": {
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
        transition:
          "translate .35s " +
          S +
          ", box-shadow .3s, color .35s, background-color .35s",
      },
      ".btn::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        zIndex: -1,
        borderRadius: "inherit",
        background: "var(--sw," + c.ink + ")",
        transform: "translateY(102%)",
        transition: "transform .45s " + E,
      },
      ".btn:hover::before, .btn:focus-visible::before": { transform: "none" },
      ".btn-y": { "--sw": c.ink },
      ".btn-y:hover": { color: c.yellow + "!important" },
      ".btn-g, .top .btn": { "--sw": c.yellow },
      ".btn-g:hover, .top .btn:hover": { color: c.ink + "!important" },
      ".btn-o": { "--sw": c.yellow },
      ".btn-o:hover": {
        color: c.ink + "!important",
        boxShadow: "inset 0 0 0 2px " + c.yellow + "!important",
      },
      ".cta .btn-y": { "--sw": c.green },
      ".cta .btn-y:hover": { color: "#fff!important" },
      /* stacked chapters */
      ".stk": {
        position: "relative",
        borderRadius: "clamp(28px,4vw,56px) clamp(28px,4vw,56px) 0 0",
        marginTop: "clamp(-56px,-4vw,-28px)",
        boxShadow: "0 -30px 60px -30px rgba(7,42,22,.35)",
        overflow: "hidden",
      },
      footer: {
        borderRadius: "clamp(28px,4vw,56px) clamp(28px,4vw,56px) 0 0",
        marginTop: "clamp(-56px,-4vw,-28px)",
        zIndex: 20,
      },
      "footer .seal": { top: "24px" },
      /* product parade */
      ".parade": {
        background: c.cream,
        padding: "clamp(70px,9vw,120px) 0 clamp(80px,10vw,130px)",
        overflow: "hidden",
      },
      ".pr-a, .pr-b": { overflow: "hidden", whiteSpace: "nowrap" },
      ".pr-a": { padding: "30px 0 44px", margin: "-30px 0 -44px" },
      ".pr-tr": {
        display: "inline-flex",
        alignItems: "flex-end",
        animation: "tick 46s linear infinite",
        willChange: "transform",
      },
      ".pr-tr.rev": {
        animation: "prRev 38s linear infinite",
        alignItems: "center",
      },
      "@keyframes prRev": {
        from: { transform: "translateX(-50%)" },
        to: { transform: "translateX(0)" },
      },
      ".pr-pk": {
        flex: "0 0 auto",
        height: "clamp(170px,20vw,280px)",
        padding: "0 clamp(14px,2vw,30px)",
        display: "flex",
        alignItems: "flex-end",
      },
      ".pr-pk img": {
        height: "100%",
        width: "auto",
        maxWidth: "clamp(220px,26vw,360px)",
        objectFit: "contain",
        filter: "drop-shadow(0 22px 22px rgba(7,42,22,.3))",
        transition: "transform .5s " + S,
      },
      ".pr-pk:nth-child(odd) img": { transform: "rotate(-4deg)" },
      ".pr-pk:nth-child(even) img": {
        transform: "rotate(3deg) translateY(-12px)",
      },
      ".pr-pk:hover img": {
        transform: "rotate(0) translateY(-22px) scale(1.06)",
      },
      ".pr-b": { marginTop: "clamp(26px,3vw,40px)" },
      ".pr-b span": {
        fontWeight: 900,
        fontSize: "clamp(54px,8.4vw,140px)",
        letterSpacing: "-.045em",
        lineHeight: 1,
        color: c.green,
        padding: "0 .22em",
        display: "inline-flex",
        alignItems: "center",
        gap: ".44em",
      },
      ".pr-b span.o": {
        color: "transparent",
        WebkitTextStroke: "2px " + c.green,
        fontStyle: "italic",
        fontWeight: 800,
      },
      ".pr-b span::after": {
        content: '""',
        width: ".3em",
        height: ".12em",
        borderRadius: ".06em",
        background: c.yellow,
        display: "inline-block",
      },
      /* hero depth */
      ".hero": { overflow: "hidden" },
      ".hero-mark": {
        position: "absolute",
        left: "50%",
        bottom: "-.12em",
        zIndex: 1,
        pointerEvents: "none",
        whiteSpace: "nowrap",
        fontWeight: 900,
        fontSize: "clamp(140px,27vw,470px)",
        letterSpacing: "-.06em",
        lineHeight: 0.8,
        color: "transparent",
        WebkitTextStroke: "1.5px rgba(255,255,255,.13)",
        transform:
          "translate3d(calc(-50% + var(--mx,0) * -30px), calc(var(--sy,0) * 120px), 0)",
        transition: "transform .9s " + E,
      },
      ".hero .stage": {
        transform:
          "translate3d(calc(var(--mx,0) * 26px), calc(var(--my,0) * 16px), 0)",
        transition: "transform .9s " + E,
      },
      ".hero .sv": {
        transform:
          "translate3d(calc(var(--mx,0) * 22px), calc(var(--my,0) * 14px), 0)",
        transition: "transform .9s " + E,
      },
      ".hero .hero-copy": {
        transform: "translate3d(0, calc(var(--sy,0) * -60px), 0)",
      },
    },
    "@media (prefers-color-scheme:dark)": {
      '@global :root:not([data-theme="light"])': { colorScheme: "dark" },
      '@global :root:not([data-theme="light"]) header.top': {
        background: "rgba(8,22,14,.94)!important",
        borderColor: "rgba(255,255,255,.10)!important",
        boxShadow: "0 14px 40px -20px rgba(0,0,0,.8)!important",
      },
      '@global :root:not([data-theme="light"]) header.top .brand .lg': {
        display: "none!important",
      },
      '@global :root:not([data-theme="light"]) header.top .brand .lw': {
        display: "block!important",
      },
      '@global :root:not([data-theme="light"]) .menu-t': {
        color: "#fff!important",
      },
      '@global :root:not([data-theme="light"]) nav.main a': {
        color: "rgba(255,255,255,.72)!important",
      },
      '@global :root:not([data-theme="light"]) nav.main a[aria-current="page"]':
        { color: "#fff!important" },
      '@global :root:not([data-theme="light"]) body.menu-open nav.main': {
        background: "#0B1510!important",
        borderColor: "rgba(255,255,255,.12)!important",
      },
      '@global :root:not([data-theme="light"]) body.menu-open nav.main a': {
        color: "#fff!important",
      },
    },
    "@media (max-width:880px)": {
      "@global .dk": { gridTemplateColumns: "1fr" },
      "@global .dk-stage": { height: "360px" },
      "@global .dk-orb": { "--R": "120px" },
      "@global .dk-deck": { height: "140px" },
      "@global .dk-card": { width: "min(270px,80%)" },
      "@global .dk-deck": { "--off": "22px", height: "140px" },
      "@global .menu-t": { display: "grid!important" },
      "@global .pr-pk": { height: "150px" },
      "@global .hero-mark": { fontSize: "38vw", bottom: "auto", top: "58%" },
    },
    "@media (prefers-reduced-motion:reduce)": {
      "@global .dk-orb, .dk-scan": { display: "none" },
      "@global .dk-pack, .dk-pack img, .dk-halo, .ap-bgword, .dk-info.swap > *, .dk-word.swap":
        { animation: "none!important" },
      "@global .split .si": { transform: "none!important", transition: "none" },
      "@global .pr-tr": { animation: "none" },
    },
  };
};
