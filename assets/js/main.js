const IMG = {
  "chana-dal": "assets/images/pulses/chana-dal.webp",
  "chana-dal-1kg": "assets/images/pulses/chana-dal-1kg.webp",
  "mix-dal": "assets/images/pulses/mix-dal.webp",
  "mix-dal-1kg": "assets/images/pulses/mix-dal-1kg.webp",
  "lobiya-white": "assets/images/pulses/lobiya-white.webp",
  "lobiya-white-1kg": "assets/images/pulses/lobiya-white-1kg.webp",
  logo: "assets/images/logo.png",
  "jaggery-front": "assets/images/jaggery-front.webp",
  "kala-chana": "assets/images/pulses/kala-chana.webp",
  "kala-chana-1kg": "assets/images/pulses/kala-chana-1kg.webp",
  "kabuli-medium": "assets/images/pulses/kabuli-medium.webp",
  "kabuli-medium-1kg": "assets/images/pulses/kabuli-medium-1kg.webp",
  "masoor-split": "assets/images/pulses/masoor-split-500g.png",
  "masoor-split-1kg": "assets/images/pulses/masoor-split-1kg.png",
  "masoor-whole": "assets/images/pulses/masoor-whole.webp",
  "masoor-whole-1kg": "assets/images/pulses/masoor-whole-1kg.webp",
  "moong-dal": "assets/images/pulses/moong-dal.webp",
  "moong-dal-1kg": "assets/images/pulses/moong-dal-1kg.webp",
  "rajma-chitra": "assets/images/pulses/rajma-chitra.webp",
  "rajma-chitra-1kg": "assets/images/pulses/rajma-chitra-1kg.webp",
  "toor-dal": "assets/images/pulses/toor-dal.webp",
  "toor-dal-1kg": "assets/images/pulses/toor-dal-1kg.webp",
  "mk-classic": "assets/images/mk-classic.webp",
  plant2: "assets/images/plant2.webp",
  "sc-back": "assets/images/sc-back.webp",
  aerial2: "assets/images/aerial2.webp",
  "scj-34": "assets/images/scj-34.webp",
  besan: "assets/images/besan.webp",
  "sg-back": "assets/images/sg-back.webp",
  "mk-mini": "assets/images/mk-mini.webp",
  "sg-34": "assets/images/sg-34.webp",
  "sc-34": "assets/images/sc-34.webp",
  scj: "assets/images/scj.webp",
  oregano: "assets/images/oregano.webp",
  plant1: "assets/images/plant1.webp",
  plant4: "assets/images/plant4.webp",
  plant5: "assets/images/plant5.webp",
  "scj-top": "assets/images/scj-top.webp",
  plant3: "assets/images/plant3.webp",
  plant6: "assets/images/plant6.webp",
  "sg-top": "assets/images/sg-top.webp",
  poha: "assets/images/poha.webp",
  "mk-puffed": "assets/images/mk-puffed.webp",
  jaggery: "assets/images/jaggery.webp",
  "jaggery-500g": "assets/images/jaggery-500g.webp",
  "jaggery-500g-back": "assets/images/jaggery-500g-back.webp",
  "sc-top": "assets/images/sc-top.webp",
  "scm-back": "assets/images/scm-back.webp",
  plant7: "assets/images/plant7.webp",
  sg: "assets/images/sg.webp",
  scm: "assets/images/scm.webp",
  aerial: "assets/images/aerial.webp",
  sc: "assets/images/sc.webp",
  "scm-top": "assets/images/scm-top.webp",
  chilli: "assets/images/chilli.webp",
  "scj-back": "assets/images/scj-back.webp",
  "scm-34": "assets/images/scm-34.webp",
};
const P = [
  {
    id: "soya-chunks",
    cat: "soya",
    name: "Soya Chunks",
    hi: "सोया बड़ी",
    tag: "Super soft",
    wt: "200 g",
    line: "53% of Pure Plant Protein",
    img: ["sc", "sc-34", "sc-back", "sc-top"],
    desc: "Classic-size Soya Chunks that turn soft and juicy, and soak up curry masala beautifully.",
    pts: [
      "53% of Pure Plant Protein",
      "99% fat-free, 100% vegetarian and vegan",
      "High source of protein",
      "Great in curries, pulao and stir-fries",
    ],
    type: "Textured soy protein",
  },
  {
    id: "soya-jumbo",
    cat: "soya",
    name: "Soya Chunks Jumbo",
    hi: "सोया बड़ी जंबो",
    tag: "Super soft",
    wt: "200 g",
    line: "Big Chunks for tikka & skewers",
    img: ["scj", "scj-34", "scj-back", "scj-top"],
    desc: "Large Chunks with a meaty bite. Ideal for tikka, skewers and dry preparations.",
    pts: [
      "53% of Pure Plant Protein",
      "99% fat-free, 100% vegetarian and vegan",
      "High source of protein",
      "Holds its shape on the grill",
    ],
    type: "Textured soy protein",
  },
  {
    id: "soya-granules",
    cat: "soya",
    name: "Soya Granules",
    hi: "सोया कीमा न्यूट्री",
    tag: "Rich protein texture",
    wt: "200 g",
    line: "For keema, cutlets & fillings",
    img: ["sg", "sg-34", "sg-back", "sg-top"],
    desc: "Fine Granules with a mince-like texture for keema, cutlets, parathas and sandwich fillings.",
    pts: [
      "53% of Pure Plant Protein",
      "99% fat-free, 100% vegetarian and vegan",
      "High source of protein",
      "Cooks in minutes",
    ],
    type: "Textured soy protein",
  },
  {
    id: "soya-mini",
    cat: "soya",
    name: "Soya Chunks Mini",
    hi: "सोया बड़ी मिनी",
    tag: "Super soft",
    wt: "200 g",
    line: "Bite-size for pulao & biryani",
    img: ["scm", "scm-34", "scm-back", "scm-top"],
    desc: "Small, soft Chunks that mix evenly into rice dishes, pulao, biryani and sabzi.",
    pts: [
      "53% of Pure Plant Protein",
      "99% fat-free, 100% vegetarian and vegan",
      "High source of protein",
      "Bite-size, quick to soak",
    ],
    type: "Textured soy protein",
  },
  {
    id: "mk-classic",
    cat: "makhana",
    name: "Makhana Classic Select",
    hi: "फूल मखाना",
    tag: "Selected seeds",
    wt: "200 g",
    line: "Best for everyday use",
    img: ["mk-classic"],
    desc: "Hand-picked fox nuts for everyday roasting and snacking.",
    pts: [
      "Best for everyday use",
      "Best for roasting and snacking",
      "Naturally gluten-free and plant-based",
      "Naturally fat-free",
    ],
    type: "Fox nuts (Makhana)",
  },
  {
    id: "mk-puffed",
    cat: "makhana",
    name: "Makhana Extra Puffed",
    hi: "बड़े दाने वाला मखाना",
    tag: "Super bold",
    wt: "200 g",
    line: "Big, bold, extra puffed",
    img: ["mk-puffed"],
    desc: "Large, bold Makhana that puff up light and airy. Perfect for premium snacking.",
    pts: [
      "Big, bold seeds",
      "Best for roasting and snacking",
      "Naturally gluten-free and plant-based",
      "Naturally fat-free and hygienically packed",
    ],
    type: "Fox nuts (Makhana)",
  },
  {
    id: "mk-mini",
    cat: "makhana",
    name: "Makhana Mini Prime",
    hi: "फूल मखाना",
    tag: "Extra crispy",
    wt: "200 g",
    line: "For kheer, curries & gravies",
    img: ["mk-mini"],
    desc: "Smaller Makhana that turn extra crispy when roasted and blend well into kheer and gravies.",
    pts: [
      "Best for kheer, curries and gravies",
      "Extra crispy after roasting",
      "Naturally gluten-free and plant-based",
      "Naturally fat-free",
    ],
    type: "Fox nuts (Makhana)",
  },
  {
    id: "besan",
    cat: "besan",
    name: "Fine Besan",
    hi: "बारीक बेसन",
    tag: "100% chana dal",
    wt: "1 kg",
    line: "From unpolished chana dal",
    img: ["besan"],
    desc: "Finely milled gram flour made from 100% unpolished chana dal, for pakoras, cheela, kadhi and sweets.",
    pts: [
      "100% unpolished chana dal",
      "Low oil absorption",
      "High in protein",
      "Fine, smooth texture",
    ],
    type: "Gram flour",
  },
  {
    id: "poha",
    cat: "poha",
    name: "Indori Poha",
    hi: "इंदौरी पोहा",
    tag: "Naturally gluten free",
    wt: "500 g",
    line: "Classic Indori-style Flakes",
    img: ["poha"],
    desc: "Light, even Flakes for a quick Indori-style Poha breakfast.",
    pts: [
      "Naturally gluten free",
      "Rich in Protein",
      "Easy to cook",
      "Made from selected grains, hygienically packed",
    ],
    type: "Flattened rice",
  },
  {
    id: "kala-chana",
    cat: "pulses",
    name: "Chana Kala",
    hi: "चना काला",
    tag: "250+ quality checks",
    wt: "500 g & 1 kg",
    line: "Unpolished kala chana",
    img: ["kala-chana", "kala-chana-1kg"],
    desc: "Carefully selected kala chana (black chickpeas), tested on 250+ quality parameters.",
    pts: [
      "250+ quality parameters tested",
      "Hygienically processed",
      "Source of dietary fibre",
      "Naturally protein rich",
      "Carefully selected grains",
    ],
    type: "Unpolished pulses (dal)",
  },
  {
    id: "kabuli-medium",
    cat: "pulses",
    name: "Kabuli Chana Medium",
    hi: "मध्यम काबुली चना",
    tag: "250+ quality checks",
    wt: "500 g & 1 kg",
    line: "Medium kabuli chana",
    img: ["kabuli-medium", "kabuli-medium-1kg"],
    desc: "Medium-size kabuli chana for everyday chole and snacks, tested on 250+ quality parameters.",
    pts: [
      "250+ quality parameters tested",
      "Hygienically processed",
      "Source of dietary fibre",
      "Naturally protein rich",
      "Carefully selected grains",
    ],
    type: "Unpolished pulses (dal)",
  },
  {
    id: "masoor-split",
    cat: "pulses",
    name: "Masoor Dal Split Bold",
    hi: "मसूर दाल",
    tag: "250+ quality checks",
    wt: "500 g & 1 kg",
    line: "Bold split masoor",
    img: ["masoor-split", "masoor-split-1kg"],
    desc: "Bold split masoor dal that cooks quickly into a smooth dal, tested on 250+ quality parameters.",
    pts: [
      "250+ quality parameters tested",
      "Hygienically processed",
      "Source of dietary fibre",
      "Naturally protein rich",
      "Carefully selected grains",
    ],
    type: "Unpolished pulses (dal)",
  },
  {
    id: "masoor-whole",
    cat: "pulses",
    name: "Masoor Whole Bold",
    hi: "साबुत मसूर",
    tag: "250+ quality checks",
    wt: "500 g & 1 kg",
    line: "Whole bold masoor",
    img: ["masoor-whole", "masoor-whole-1kg"],
    desc: "Whole bold masoor for a hearty dal and salads, tested on 250+ quality parameters.",
    pts: [
      "250+ quality parameters tested",
      "Hygienically processed",
      "Source of dietary fibre",
      "Naturally protein rich",
      "Carefully selected grains",
    ],
    type: "Unpolished pulses (dal)",
  },
  {
    id: "moong-dal",
    cat: "pulses",
    name: "Moong Dal (Yellow)",
    hi: "मूंग दाल",
    tag: "250+ quality checks",
    wt: "500 g & 1 kg",
    line: "Yellow moong dal",
    img: ["moong-dal", "moong-dal-1kg"],
    desc: "Yellow moong dal that cooks quickly and gently, tested on 250+ quality parameters.",
    pts: [
      "250+ quality parameters tested",
      "Hygienically processed",
      "Source of dietary fibre",
      "Naturally protein rich",
      "Carefully selected grains",
    ],
    type: "Unpolished pulses (dal)",
  },
  {
    id: "rajma-chitra",
    cat: "pulses",
    name: "Rajmah Chitra (LSKB)",
    hi: "चितरा राजमा",
    tag: "250+ quality checks",
    wt: "500 g & 1 kg",
    line: "Chitra rajma (LSKB)",
    img: ["rajma-chitra", "rajma-chitra-1kg"],
    desc: "Chitra rajma (LSKB) that holds its shape in rajma chawal, tested on 250+ quality parameters.",
    pts: [
      "250+ quality parameters tested",
      "Hygienically processed",
      "Source of dietary fibre",
      "Naturally protein rich",
      "Carefully selected grains",
    ],
    type: "Unpolished pulses (dal)",
  },
  {
    id: "toor-dal",
    cat: "pulses",
    name: "Toor Dal (Yellow)",
    hi: "अरहर दाल",
    tag: "250+ quality checks",
    wt: "500 g & 1 kg",
    line: "Yellow toor dal",
    img: ["toor-dal", "toor-dal-1kg"],
    desc: "Yellow toor dal for everyday sambhar and dal, tested on 250+ quality parameters.",
    pts: [
      "250+ quality parameters tested",
      "Hygienically processed",
      "Source of dietary fibre",
      "Naturally protein rich",
      "Carefully selected grains",
    ],
    type: "Unpolished pulses (dal)",
  },
  {
    id: "jaggery",
    cat: "jaggery",
    name: "Jaggery Powder Sachet",
    hi: "गुड़ पाउडर",
    tag: "Single-serve",
    wt: "5 g sachet",
    line: "A smarter sweetness",
    img: ["jaggery"],
    desc: "Pure Jaggery Powder in a single-serve sachet. Dissolves instantly in tea, coffee, milk and health drinks, hot or cold.",
    pts: [
      "Made only from sugarcane",
      "No chemicals, no added colour",
      "Retains natural minerals",
      "Zero residue, zero lumps",
    ],
    type: "HoReCa sachet",
  },
  {
    id: "jaggery-500g",
    cat: "jaggery",
    name: "Jaggery Powder 500 g",
    hi: "गुड़ पाउडर 500 ग्रा",
    tag: "Pure & natural",
    wt: "500 g pack",
    line: "Cane jaggery powder",
    img: ["jaggery-500g", "jaggery-500g-back"],
    desc: "Pure cane jaggery powder in a 500 g pack. Quick dissolving, with no added colour and no chemicals, for tea, milk, desserts and everyday cooking.",
    pts: [
      "Made only from sugarcane",
      "No added colour, no chemicals",
      "Quick dissolving powder",
      "Natural sweetener",
    ],
    type: "Jaggery powder",
  },
  {
    id: "chilli",
    cat: "seasoning",
    name: "Chilli Flakes Sachet",
    hi: "चिली फ्लेक्स",
    tag: "Single-serve",
    wt: "0.80 g sachet",
    line: "100% red Chilli",
    img: ["chilli"],
    desc: "100% red Chilli Flakes, portioned for pizza, pasta and garlic bread, and Indian favourites like rajma chawal and noodles.",
    pts: [
      "100% red Chilli Flakes",
      "Consistent heat in every pack",
      "Sealed and tamper-evident",
      "Delivery-ready",
    ],
    type: "HoReCa sachet",
  },
  {
    id: "oregano",
    cat: "seasoning",
    name: "Italian Oregano Seasoning",
    hi: "इटैलियन ओरिगेनो",
    tag: "Single-serve",
    wt: "0.80 g sachet",
    line: "Italian-style herb blend",
    img: ["oregano"],
    desc: "An Italian-style herb blend for pizza, pasta and more, in a neat single-serve sachet.",
    pts: [
      "Italian-style herb blend",
      "Consistent taste all year",
      "Sealed and tamper-evident",
      "Delivery-ready",
    ],
    type: "HoReCa sachet",
  },
  {
    id: "chana-dal",
    cat: "pulses",
    name: "Chana Dal",
    hi: "चना दाल",
    tag: "250+ quality checks",
    wt: "500 g & 1 kg",
    line: "Unpolished chana dal",
    img: ["chana-dal", "chana-dal-1kg"],
    desc: "Unpolished chana dal, tested on 250+ quality parameters.",
    pts: [
      "250+ quality parameters tested",
      "Hygienically processed",
      "Source of dietary fibre",
      "Naturally protein rich",
      "Carefully selected grains",
    ],
    type: "Unpolished pulses (dal)",
  },
  {
    id: "mix-dal",
    cat: "pulses",
    name: "Mix Dal",
    hi: "मिक्स दाल",
    tag: "250+ quality checks",
    wt: "500 g & 1 kg",
    line: "Unpolished mix dal",
    img: ["mix-dal", "mix-dal-1kg"],
    desc: "A mix of unpolished dals for everyday cooking, tested on 250+ quality parameters.",
    pts: [
      "250+ quality parameters tested",
      "Hygienically processed",
      "Source of dietary fibre",
      "Naturally protein rich",
      "Carefully selected grains",
    ],
    type: "Unpolished pulses (dal)",
  },
  {
    id: "lobiya-white",
    cat: "pulses",
    name: "Lobiya White",
    hi: "सफ़ेद लोबिया",
    tag: "250+ quality checks",
    wt: "500 g & 1 kg",
    line: "Unpolished white lobiya",
    img: ["lobiya-white", "lobiya-white-1kg"],
    desc: "White lobiya (black-eyed beans) for curries and salads, tested on 250+ quality parameters.",
    pts: [
      "250+ quality parameters tested",
      "Hygienically processed",
      "Source of dietary fibre",
      "Naturally protein rich",
      "Carefully selected grains",
    ],
    type: "Unpolished pulses (dal)",
  },
];
const CATS = [
  ["all", "All"],
  ["soya", "Soya (Plant Protein)"],
  ["makhana", "Makhana"],
  ["pulses", "Pulses"],
  ["besan", "Besan"],
  ["poha", "Poha"],
  ["jaggery", "Jaggery"],
  ["seasoning", "Seasoning"],
];
/* lazy images: an image gets its source only when its section comes near the screen */
const LITE =
  matchMedia("(pointer:coarse)").matches ||
  (navigator.hardwareConcurrency || 8) <= 4;
const lzBox = (i) =>
  i.closest("section,.ticker,.bigmq,footer,.card,.pd-stage") || i;
const lzIO = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      lzIO.unobserve(e.target);
      e.target.querySelectorAll
        ? e.target.querySelectorAll("img[data-lz]").forEach(lzLoad)
        : 0;
      if (e.target.matches && e.target.matches("img[data-lz]"))
        lzLoad(e.target);
    }),
  { rootMargin: "900px 0px" },
);
function lzLoad(i) {
  if (i.dataset.lz) {
    i.src = i.dataset.lz;
    i.removeAttribute("data-lz");
  }
}
const lzSeen = new WeakSet();
function lzScan(root) {
  (root || document).querySelectorAll("img[data-lz]").forEach((i) => {
    const b = lzBox(i);
    if (!lzSeen.has(b)) {
      lzSeen.add(b);
      lzIO.observe(b);
    } else if (
      b.getBoundingClientRect().height &&
      b.getBoundingClientRect().top < innerHeight + 900 &&
      b.getBoundingClientRect().bottom > -900
    )
      lzLoad(i);
  });
}
const IMG_ALT = {
  sc: "Century Soya Chunks pack", "sc-34": "Century Soya Chunks pack", "sc-back": "Century Soya Chunks pack back", "sc-top": "Century Soya Chunks pack top",
  scj: "Century Soya Jumbo chunks pack", "scj-34": "Century Soya Jumbo chunks pack", "scj-top": "Century Soya Jumbo chunks pack top", "scj-back": "Century Soya Jumbo chunks pack back",
  sg: "Century Soya Granules pack", "sg-34": "Century Soya Granules pack", "sg-top": "Century Soya Granules pack top", "sg-back": "Century Soya Granules pack back",
  scm: "Century Soya Mini chunks pack", "scm-34": "Century Soya Mini chunks pack", "scm-top": "Century Soya Mini chunks pack top", "scm-back": "Century Soya Mini chunks pack back",
  "mk-classic": "Century Makhana Classic Select pack", "mk-puffed": "Century Puffed Makhana pack", "mk-mini": "Century Mini Makhana pack",
  besan: "Century Besan gram flour pack", poha: "Century Poha flattened rice pack",
  jaggery: "Century Jaggery Powder", "jaggery-front": "Century Jaggery Powder pack front", "jaggery-500g": "Century Jaggery Powder 500 g pack",
  oregano: "Century Oregano seasoning", chilli: "Century Chilli powder",
  plant1: "Century manufacturing plant", plant2: "Century manufacturing plant and silos", plant3: "Century manufacturing plant", plant4: "Century manufacturing plant", plant5: "Century manufacturing plant", plant6: "Century manufacturing plant",
  aerial: "Aerial view of the Century manufacturing site", aerial2: "Aerial view of the Century manufacturing site",
  logo: "Century logo",
};
document.querySelectorAll("img[data-k]").forEach((i) => {
  if (!i.getAttribute("alt")) i.alt = IMG_ALT[i.dataset.k] || "Century pulses and food product";
  const u = IMG[i.dataset.k];
  if (i.closest(".hero .slide.active,header,#loader")) i.src = u;
  else i.dataset.lz = u;
});
new MutationObserver((ms) => {
  if (ms.some((m) => m.addedNodes.length))
    requestAnimationFrame(() => {
      lzScan();
      typeof lzNear === "function" && lzNear();
    });
}).observe(document.body, { childList: true, subtree: true });
addEventListener("hashchange", () =>
  setTimeout(() => {
    document.querySelectorAll(".view.on img[data-lz]").forEach((i) => {
      const r = i.getBoundingClientRect();
      if (
        r.top < innerHeight + 900 &&
        r.bottom > -900 &&
        (r.width || r.height || lzBox(i).getBoundingClientRect().height)
      )
        lzLoad(i);
    });
  }, 400),
);
requestAnimationFrame(() => lzScan());
/* safety net: whatever is near the screen gets loaded, checked a few times a second while scrolling */
let lzT = 0;
function lzNear() {
  lzT = 0;
  const pend = document.querySelectorAll(
    ".view.on img[data-lz], footer img[data-lz]",
  );
  pend.forEach((i) => {
    const r = lzBox(i).getBoundingClientRect();
    if (r.height && r.top < innerHeight + 1200 && r.bottom > -1200) lzLoad(i);
  });
}
addEventListener(
  "scroll",
  () => {
    if (!lzT) lzT = setTimeout(lzNear, 180);
  },
  { passive: true },
);
addEventListener("hashchange", () => setTimeout(lzNear, 700));
setTimeout(lzNear, 600);
const $ = (s) => document.querySelector(s);
function goScroll(o) {
  if (window.__lenis)
    window.__lenis.scrollTo(o.top, {
      immediate: o.behavior !== "smooth",
      force: true,
      duration: 1.4,
    });
  else window.scrollTo(o);
}
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* theme */
(function () {
  let t = null;
  try {
    t = localStorage.getItem("c-theme");
  } catch (e) { }
  if (t) document.documentElement.dataset.theme = t;
  const curT = () =>
    document.documentElement.dataset.theme ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  $("#themeT").setAttribute("aria-checked", curT() === "dark");
  $("#themeT").onclick = () => {
    const n = curT() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = n;
    $("#themeT").setAttribute("aria-checked", n === "dark");
    try {
      localStorage.setItem("c-theme", n);
    } catch (e) { }
  };
})();
$("#yr").textContent = new Date().getFullYear();

/* hero shelf */
const HERO = ["mk-puffed", "besan", "sc", "mk-classic", "toor-dal"];
const heroInfo = {
  "toor-dal": ["Toor Dal (Yellow)", "250+ quality parameters tested"],
  sc: ["Soya Chunks", "53% of Pure Plant Protein"],
  scj: ["Soya Chunks Jumbo", "Big chunks for tikka & skewers"],
  sg: ["Soya Granules", "For keema, cutlets & fillings"],
  "mk-puffed": ["Makhana Extra Puffed", "Big, bold, extra puffed"],
  "mk-classic": ["Makhana Classic Select", "Best for everyday use"],
  besan: ["Fine Besan", "From unpolished chana dal"],
  poha: ["Indori Poha", "Naturally gluten free"],
};
const heroLink = {
  "toor-dal": "toor-dal",
  sc: "soya-chunks",
  scj: "soya-jumbo",
  sg: "soya-granules",
  "mk-puffed": "mk-puffed",
  "mk-classic": "mk-classic",
  besan: "besan",
  poha: "poha",
};
const packs = $("#packs");
let hl = 2,
  pks = [];
function layout() {
  const W = packs.clientWidth,
    H = packs.clientHeight,
    n = HERO.length,
    mob = W < 520;
  pks.forEach((el, i) => {
    const d = i - hl;
    const ad = Math.abs(d);
    const h = H * (d === 0 ? 0.86 : Math.max(0.5, 0.72 - ad * 0.06));
    const spread = mob ? W * 0.19 : W * 0.17;
    const im = el.querySelector("img"),
      ar = im && im.naturalWidth ? im.naturalWidth / im.naturalHeight : 0.75;
    const x = W / 2 + d * spread - (h * ar) / 2;
    el.style.height = h + "px";
    el.style.left = x + "px";
    el.style.zIndex = 10 - ad;
    el.style.transform = `translateY(0) rotate(${d * 3}deg)`;
    el.style.filter = `drop-shadow(0 28px 22px rgba(0,0,0,.34)) drop-shadow(0 8px 6px rgba(0,0,0,.2)) brightness(${d === 0 ? 1 : 0.82})`;
    el.classList.toggle("hl", d === 0);
  });
}
HERO.forEach((k, i) => {
  const b = document.createElement("button");
  b.className = "pk";
  b.setAttribute("aria-label", heroInfo[k][0]);
  b.innerHTML = `<img decoding="async" src="${IMG[k]}" alt="">`;
  b.style.setProperty("--pd", 0.15 + Math.abs(i - 2) * 0.14 + "s");
  b.onclick = () => openProduct(heroLink[k]);
  packs.appendChild(b);
  pks.push(b);
});
let timer;
function restart() {
  clearInterval(
    timer,
  ); /* fixed arrangement: packs stay in place while the slide shows */
}
new ResizeObserver(layout).observe(packs);
requestAnimationFrame(() => {
  $("#stage").classList.add("in");
  layout();
  restart();
});
$("#stage").addEventListener("pointermove", (e) => {
  if (reduce || e.pointerType !== "mouse") return;
  const r = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5,
    y = (e.clientY - r.top) / r.height - 0.5;
  packs.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 6}deg)`;
});
$("#stage").addEventListener(
  "pointerleave",
  () => (packs.style.transform = ""),
);

/* extra product info */
const DETAILS = {
  "soya-chunks": {
    ing: "Defatted Soya",
    alg: "Contains soy. May contain traces of nuts.",
    nutri: {
      serve: "1 cup (30 g)",
      servings: "6 (approx.)",
      cols: ["Per 100 g", "% RDA per serve"],
      rows: [
        ["Energy (kcal)", "312", "4"],
        ["Protein (g)", "53", "25"],
        ["Carbohydrate (g)", "30.2", "6"],
        ["Total sugars (g)", "2.9", "-"],
        ["Added sugars (g)", "0", "0"],
        ["Dietary fibre (g)", "15.5", "13"],
        ["Total fat (g)", "1.0", "0.4"],
        ["Saturated fat (g)", "0.3", "0.3"],
        ["Trans fat (g)", "0", "0"],
        ["Sodium (mg)", "308", "6"],
        ["Calcium (mg)", "405", "10"],
        ["Iron (mg)", "22.4", "29"],
      ],
    },
    protein: 1,
    prep: [
      "Heat 3 cups of water until it comes to a boil.",
      "Stir in 1 cup of soya chunks and cook for 3–4 minutes, or until nicely soft.",
      "Drain the water, rinse well, and squeeze gently. Your soya chunks are ready.",
    ],
    recipe: {
      title: "Soya Quinoa Bowl",
      sub: "Serve goodness with Century",
      steps: [
        "Cook quinoa until fluffy. Soak Century soya chunks for 10 mins & squeeze.",
        "Sauté onions & ginger-garlic paste. Add tomatoes, spices & salt.",
        "Add quinoa and Century soya chunks. Toss & cook for 3–4 mins.",
        "Sprinkle garam masala & fresh coriander.",
        "A wholesome bowl of protein & flavour is ready.",
      ],
    },
  },
  "soya-jumbo": {
    ing: "Defatted Soya",
    alg: "Contains soy. May contain traces of nuts.",
    nutri: {
      serve: "1 cup (30 g)",
      servings: "6 (approx.)",
      cols: ["Per 100 g", "% RDA per serve"],
      rows: [
        ["Energy (kcal)", "312", "4"],
        ["Protein (g)", "53", "25"],
        ["Carbohydrate (g)", "30.2", "6"],
        ["Total sugars (g)", "2.9", "-"],
        ["Added sugars (g)", "0", "0"],
        ["Dietary fibre (g)", "15.5", "13"],
        ["Total fat (g)", "1.0", "0.4"],
        ["Saturated fat (g)", "0.3", "0.3"],
        ["Trans fat (g)", "0", "0"],
        ["Sodium (mg)", "308", "6"],
        ["Calcium (mg)", "405", "10"],
        ["Iron (mg)", "22.4", "29"],
      ],
    },
    protein: 1,
    prep: [
      "Bring 4 cups of water to a boil.",
      "Add 1 cup of Century Soya Chunks Jumbo and cook for 5–6 minutes until they turn soft and plump.",
      "Drain the water, rinse well, and squeeze gently. They’re ready to use.",
    ],
    recipe: {
      title: "Soya Chunks Tikka Style Snack",
      sub: "Serve goodness with Century",
      steps: [
        "Cook Century Soya Chunks Jumbo. Chop onions & capsicum.",
        "Mix hung curd, mustard oil, ginger-garlic paste, turmeric, garam masala, kasoori methi & lemon juice.",
        "Add the cooked Soya Chunks Jumbo and veggies. Coat well & rest for 10–15 mins. Skewer the marinated pieces.",
        "Grill in an oven/OTG at 200°C for 12–15 mins until golden.",
        "A flavourful, protein-rich tikka snack is ready. Serve with green chutney.",
      ],
    },
  },
  "soya-granules": {
    ing: "Defatted Soya",
    alg: "Contains soy. May contain traces of nuts.",
    nutri: {
      serve: "1 cup (30 g)",
      servings: "6 (approx.)",
      cols: ["Per 100 g", "% RDA per serve"],
      rows: [
        ["Energy (kcal)", "312", "4"],
        ["Protein (g)", "53", "25"],
        ["Carbohydrate (g)", "30.2", "6"],
        ["Total sugars (g)", "2.9", "-"],
        ["Added sugars (g)", "0", "0"],
        ["Dietary fibre (g)", "15.5", "13"],
        ["Total fat (g)", "1.0", "0.4"],
        ["Saturated fat (g)", "0.3", "0.3"],
        ["Trans fat (g)", "0", "0"],
        ["Sodium (mg)", "308", "6"],
        ["Calcium (mg)", "405", "10"],
        ["Iron (mg)", "22.4", "29"],
      ],
    },
    protein: 1,
    prep: [
      "Add 2 cups of water to a pot. Bring it to a boil.",
      "Stir in 1 cup of Century Soya Granules and cook for 3–4 mins.",
      "Drain, rinse well, and squeeze gently. It’s ready.",
    ],
    recipe: {
      title: "Dhaba Style Veg Soya Keema with Pav",
      sub: "Serve goodness with Century",
      steps: [
        "Cook Century Soya Granules. Finely chop onions, tomatoes & capsicum.",
        "Sauté veggies, ginger-garlic paste & green chillies until soft. Add spices & salt.",
        "Add the cooked soya granules. Mix well and cook for 4–5 mins.",
        "Finish with garam masala, fresh coriander & a squeeze of lemon.",
      ],
    },
  },
  "soya-mini": {
    ing: "Defatted Soya",
    alg: "Contains soy. May contain traces of nuts.",
    nutri: {
      serve: "1 cup (30 g)",
      servings: "6 (approx.)",
      cols: ["Per 100 g", "% RDA per serve"],
      rows: [
        ["Energy (kcal)", "312", "4"],
        ["Protein (g)", "53", "25"],
        ["Carbohydrate (g)", "30.2", "6"],
        ["Total sugars (g)", "2.9", "-"],
        ["Added sugars (g)", "0", "0"],
        ["Dietary fibre (g)", "15.5", "13"],
        ["Total fat (g)", "1.0", "0.4"],
        ["Saturated fat (g)", "0.3", "0.3"],
        ["Trans fat (g)", "0", "0"],
        ["Sodium (mg)", "308", "6"],
        ["Calcium (mg)", "405", "10"],
        ["Iron (mg)", "22.4", "29"],
      ],
    },
    protein: 1,
    prep: [
      "Heat 3 cups of water until it comes to a boil.",
      "Stir in 1 cup of Century Soya Chunks Mini. Cook for 3–4 minutes until nicely soft.",
      "Drain the water, rinse well, and squeeze gently. It’s ready.",
    ],
    recipe: {
      title: "High Protein Veggie Wrap",
      sub: "Serve goodness with Century",
      steps: [
        "Cook Century Soya Chunks Mini. Chop your favourite veggies.",
        "Sauté onions, capsicum & carrots. Add tomatoes, spices & salt. Mix in the Century Soya Chunks Mini.",
        "Spread the filling on a roti or tortilla. Add lettuce and sauces of your choice.",
        "Fold tightly into a wrap.",
        "A fresh & wholesome high-protein veggie wrap is ready.",
      ],
    },
  },
  "mk-classic": {
    ing: "Makhana (Fox Nuts)",
    alg: "May contain traces of tree nuts & soy.",
    nutri: {
      serve: "20 g",
      servings: "10",
      cols: ["Per 100 g", "% DV per serve", "% RDA per serve"],
      rows: [
        ["Energy (kcal/kJ)", "360/1506.24", "-", "3.6%"],
        ["Total fat (g)", "0", "0%", "0%"],
        ["Saturated fat (g)", "0", "0%", "0%"],
        ["Trans fat (g)", "0", "-", "0%"],
        ["Cholesterol (mg)", "0", "0%", "-"],
        ["Sodium (mg)", "70", "0.6%", "0.7%"],
        ["Salt (g)", "0.1", "-", "-"],
        ["Total carbohydrate (g)", "83", "6%", "-"],
        ["Dietary fibre (g)", "5", "3.6%", "-"],
        ["Total sugar (g)", "1", "-", "-"],
        ["Added sugar (g)", "0", "0%", "0%"],
        ["Protein (g)", "8", "-", "-"],
        ["Vitamin D (mcg)", "0", "0%", "-"],
        ["Calcium (mg)", "150", "2.3%", "-"],
        ["Iron (mg)", "2.6", "2.9%", "-"],
        ["Potassium (mg)", "580", "2.5%", "-"],
      ],
    },
    recipe: {
      title: "Curry Patta Makhana",
      sub: "Ready in 10 minutes",
      steps: [
        "Roast 2 cups Century Phool Makhana on a low flame until crisp. Remove and keep aside.",
        "Heat 1 tbsp ghee/oil. Add ½ tsp mustard seeds and 8–10 curry leaves.",
        "Add turmeric, chilli powder, black pepper & salt to taste.",
        "Add the roasted makhana and toss gently for 2–3 minutes until evenly coated.",
        "Serve hot and enjoy!",
      ],
    },
  },
  "mk-puffed": {
    ing: "Makhana (Fox Nuts)",
    alg: "May contain traces of tree nuts & soy.",
    nutri: {
      serve: "20 g",
      servings: "10",
      cols: ["Per 100 g", "% DV per serve", "% RDA per serve"],
      rows: [
        ["Energy (kcal/kJ)", "360/1506.24", "-", "3.6%"],
        ["Total fat (g)", "0", "0%", "0%"],
        ["Saturated fat (g)", "0", "0%", "0%"],
        ["Trans fat (g)", "0", "-", "0%"],
        ["Cholesterol (mg)", "0", "0%", "-"],
        ["Sodium (mg)", "70", "0.6%", "0.7%"],
        ["Salt (g)", "0.1", "-", "-"],
        ["Total carbohydrate (g)", "83", "6%", "-"],
        ["Dietary fibre (g)", "5", "3.6%", "-"],
        ["Total sugar (g)", "1", "-", "-"],
        ["Added sugar (g)", "0", "0%", "0%"],
        ["Protein (g)", "8", "-", "-"],
        ["Vitamin D (mcg)", "0", "0%", "-"],
        ["Calcium (mg)", "150", "2.3%", "-"],
        ["Iron (mg)", "2.6", "2.9%", "-"],
        ["Potassium (mg)", "580", "2.5%", "-"],
      ],
    },
    recipe: {
      title: "Curry Patta Makhana",
      sub: "Ready in 10 minutes",
      steps: [
        "Roast 2 cups Century Phool Makhana on a low flame until crisp. Remove and keep aside.",
        "Heat 1 tbsp ghee/oil. Add ½ tsp mustard seeds and 8–10 curry leaves.",
        "Add turmeric, chilli powder, black pepper & salt to taste.",
        "Add the roasted makhana and toss gently for 2–3 minutes until evenly coated.",
        "Serve hot and enjoy!",
      ],
    },
  },
  "mk-mini": {
    ing: "Makhana (Fox Nuts)",
    alg: "May contain traces of tree nuts & soy.",
    nutri: {
      serve: "20 g",
      servings: "10",
      cols: ["Per 100 g", "% DV per serve", "% RDA per serve"],
      rows: [
        ["Energy (kcal/kJ)", "360/1506.24", "-", "3.6%"],
        ["Total fat (g)", "0", "0%", "0%"],
        ["Saturated fat (g)", "0", "0%", "0%"],
        ["Trans fat (g)", "0", "-", "0%"],
        ["Cholesterol (mg)", "0", "0%", "-"],
        ["Sodium (mg)", "70", "0.6%", "0.7%"],
        ["Salt (g)", "0.1", "-", "-"],
        ["Total carbohydrate (g)", "83", "6%", "-"],
        ["Dietary fibre (g)", "5", "3.6%", "-"],
        ["Total sugar (g)", "1", "-", "-"],
        ["Added sugar (g)", "0", "0%", "0%"],
        ["Protein (g)", "8", "-", "-"],
        ["Vitamin D (mcg)", "0", "0%", "-"],
        ["Calcium (mg)", "150", "2.3%", "-"],
        ["Iron (mg)", "2.6", "2.9%", "-"],
        ["Potassium (mg)", "580", "2.5%", "-"],
      ],
    },
    recipe: {
      title: "Curry Patta Makhana",
      sub: "Ready in 10 minutes",
      steps: [
        "Roast 2 cups Century Phool Makhana on a low flame until crisp. Remove and keep aside.",
        "Heat 1 tbsp ghee/oil. Add ½ tsp mustard seeds and 8–10 curry leaves.",
        "Add turmeric, chilli powder, black pepper & salt to taste.",
        "Add the roasted makhana and toss gently for 2–3 minutes until evenly coated.",
        "Serve hot and enjoy!",
      ],
    },
  },
  besan: {
    ing: "Chana Dal",
    alg: "Packed in a facility that packs soy, peanuts, wheat and their products.",
    nutri: {
      serve: "30 g",
      servings: "33 (approx.)",
      cols: ["Per 100 g", "Per serve", "% RDA per serve"],
      rows: [
        ["Energy (kcal)", "372.0", "111.6", "5.6%"],
        ["Protein (g)", "21.0", "6.3", "11.70%"],
        ["Carbohydrate (g)", "58.9", "17.70", "-"],
        ["Total sugar (g)", "1.8", "0.54", "-"],
        ["Added sugar (g)", "0", "0", "-"],
        ["Total fat (g)", "5.8", "1.74", "2.6%"],
        ["Saturated fat (g)", "1.5", "0.45", "2.0%"],
        ["Trans fat (g)", "0.02", "0", "0.3%"],
        ["Sodium (mg)", "68.2", "20.50", "1.0%"],
      ],
    },
    recipe: {
      title: "Punjabi Besan Kadhi",
      sub: "Ready to eat in 5 steps",
      steps: [
        "Whisk Century Fine Besan, curd and 1½ cups water until smooth.",
        "Heat oil, add cumin, onion and ginger-garlic paste. Cook until golden.",
        "Add turmeric, chilli powder, coriander powder and salt. Cook until soft.",
        "Pour in the besan mixture while stirring continuously.",
        "Add remaining water as needed and simmer for 8–10 minutes. Garnish with fresh coriander.",
      ],
    },
  },
  poha: {
    ing: "Rice Flakes",
    alg: "Packed in a facility that packs soy, peanuts, wheat and their products.",
    nutri: {
      serve: "50 g (uncooked)",
      servings: "10",
      cols: ["Per 100 g", "Per serve", "% RDA per serve"],
      rows: [
        ["Energy (kcal)", "361", "180.5", "9.00%"],
        ["Protein (g)", "7.7", "3.85", "7.19%"],
        ["Carbohydrate (g)", "81.4", "40.7", "-"],
        ["Total sugar (g)", "0.5", "0.25", "-"],
        ["Added sugar (g)", "0", "0", "-"],
        ["Total fat (g)", "1.3", "0.65", "1.00%"],
        ["Saturated fat (g)", "1.5", "0.45", "2.0%"],
        ["Trans fat (g)", "0", "0", "0.00%"],
        ["Dietary fibre (g)", "7.6", "3.8", "-"],
        ["Sodium (mg)", "5.1", "2.55", "0.10%"],
        ["Phosphorus (mg)", "142", "71", "-"],
        ["Iron (mg)", "6", "3", "-"],
      ],
    },
    recipe: {
      title: "Indori Poha",
      sub: "Ready to eat in 5 steps",
      steps: [
        "Rinse Century Indori Poha gently with water, drain well and let it rest for 5 minutes.",
        "Heat oil and add mustard seeds, cumin seeds, curry leaves, green chilli and peanuts. Sauté for a minute.",
        "Add chopped onion and cook until soft. Add turmeric, salt and a little sugar. Mix well.",
        "Add the rested poha and gently mix. Cook on low heat for 2–3 minutes.",
        "Add lemon juice and fresh coriander. Top with Indori sev and pomegranate seeds. Serve hot.",
      ],
    },
  },
  pulses: { qc: 1 },
};
const USES = {
  "chana-dal": ["Dal", "Chana masala", "Chutney", "Snacks"],
  "mix-dal": ["Dal", "Khichdi", "Soups", "Snacks"],
  "lobiya-white": ["Curry", "Salads", "Sundal", "Soups"],
  "kala-chana": ["Chana masala", "Sundal", "Salads", "Sprouts"],
  "kabuli-medium": ["Chole", "Hummus", "Salads", "Snacks"],
  "masoor-split": ["Dal tadka", "Soups", "Khichdi", "Dal fry"],
  "masoor-whole": ["Dal", "Salads", "Sprouts", "Soups"],
  "moong-dal": ["Dal tadka", "Khichdi", "Cheela", "Moong halwa"],
  "rajma-chitra": ["Rajma chawal", "Curry", "Salads", "Soups"],
  "toor-dal": ["Sambhar", "Dal tadka", "Khichdi", "Dal fry"],
  everyday: [
    "Pulses",
    "Rice",
    "Millets",
    "Flours",
    "Spices",
    "Dry fruits & seeds",
  ],
  "soya-chunks": ["Soya curry", "Pulao", "Stir-fry", "Biryani"],
  "soya-jumbo": ["Soya tikka", "Skewers", "Chilli Soya", "Curry"],
  "soya-granules": ["Keema", "Cutlets", "Paratha stuffing", "Sandwich filling"],
  "soya-mini": ["Pulao", "Biryani", "Sabzi", "Fried rice"],
  "mk-classic": ["Roasted snack", "Chaat", "Trail mix", "Kheer"],
  "mk-puffed": [
    "Flavoured roasted Makhana",
    "Party snacks",
    "Chaat",
    "Caramel Makhana",
  ],
  "mk-mini": ["Kheer", "Makhana curry", "Gravies", "Roasted snack"],
  besan: ["Pakoras", "Cheela", "Kadhi", "Laddoo"],
  poha: ["Indori Poha", "Kanda Poha", "Chivda", "Poha cutlets"],
  jaggery: ["Tea", "Coffee", "Milk", "Health drinks"],
  "jaggery-500g": ["Tea", "Coffee", "Milk", "Desserts", "Everyday cooking"],
  chilli: ["Pizza", "Pasta", "Noodles", "Masala cola"],
  oregano: ["Pizza", "Pasta", "Garlic bread", "Fries"],
};
const STEPS = {
  soya: [
    ["Soak", "Add the Chunks to hot water for 10 to 15 minutes until soft."],
    ["Squeeze", "Press out the water and rinse once."],
    ["Cook", "Add to your masala, curry or rice and cook for a few minutes."],
  ],
  makhana: [
    ["Heat", "Warm a little ghee or oil in a pan on a low flame."],
    ["Roast", "Stir the Makhana for 6 to 8 minutes until crisp."],
    ["Season", "Add salt and spices, or use in kheer and gravies."],
  ],
  besan: [
    ["Sift", "Sift the Besan to keep it light."],
    ["Whisk", "Mix with water and spices into a smooth batter."],
    ["Cook", "Use for pakoras, cheela or kadhi."],
  ],
  poha: [
    ["Rinse", "Rinse the Poha in a strainer for a few seconds."],
    ["Rest", "Let it soften for about 5 minutes."],
    ["Temper", "Fry mustard seeds, onion and spices, then fold in the Poha."],
  ],
  jaggery: [
    ["Tear", "Open the sachet along the notch."],
    ["Stir", "Add to a hot or cold drink."],
    ["Enjoy", "It dissolves instantly with no lumps."],
  ],
  season: [
    ["Tear", "Open the sachet along the notch."],
    ["Sprinkle", "Shake over pizza, pasta or snacks."],
    ["Enjoy", "The same taste in every serving."],
  ],
};
const stepKey = (p) =>
  p.cat === "pulses" || p.id === "everyday"
    ? null
    : p.cat === "soya"
      ? "soya"
      : p.cat === "makhana"
        ? "makhana"
        : p.id === "besan"
          ? "besan"
          : p.id === "poha"
            ? "poha"
            : p.cat === "jaggery"
              ? "jaggery"
              : "season";
const catName = (k) => (CATS.find((c) => c[0] === k) || [])[1];

/* product grid */
const grid = $("#grid"),
  filters = $("#filters");
CATS.forEach(([k, l]) => {
  const b = document.createElement("button");
  b.className = "chip";
  b.dataset.k = k;
  const c = k === "all" ? P.length : P.filter((p) => p.cat === k).length;
  b.textContent = l;
  b.onclick = () => {
    location.hash = k === "all" ? "products" : "products/" + k;
  };
  filters.appendChild(b);
});
function makeCard(p) {
  const a = document.createElement("a");
  a.className = "card";
  a.href = "#product/" + p.id;
  a.dataset.cat = p.cat;
  a.innerHTML = `<div class="ph"><span class="tag">${p.tag}</span><span class="halo"></span><span class="gs"></span><span class="pz"><i style="left:38%;width:7px;height:5px;animation-delay:1.59s;--x:0px"></i><i style="left:27%;width:5px;height:5px;animation-delay:0.04s;--x:5px"></i><i style="left:45%;width:5px;height:6px;animation-delay:1.14s;--x:-7px"></i><i style="left:43%;width:6px;height:5px;animation-delay:0.58s;--x:30px"></i><i style="left:11%;width:7px;height:7px;animation-delay:0.43s;--x:-11px"></i><i style="left:45%;width:7px;height:5px;animation-delay:1.86s;--x:-9px"></i><i style="left:57%;width:6px;height:6px;animation-delay:0.54s;--x:-13px"></i><i style="left:19%;width:7px;height:5px;animation-delay:2.00s;--x:6px"></i><i style="left:47%;width:6px;height:9px;animation-delay:0.93s;--x:-12px"></i></span><div class="fl"><img decoding="async" class="${p.full ? "full" : ""}" data-lz="${IMG[p.img[0]]}" alt="${p.name} pack" loading="lazy"></div><div class="peek"><b>${p.pts[0]}</b><div class="mo">${p.pts
    .slice(1, 3)
    .map((x) => `<span>${x}</span>`)
    .join(
      "",
    )}</div></div></div><div class="bd"><h3>${p.name}</h3><span class="hi">${p.line}</span><div class="meta"><span>${p.wt}</span><b>View details</b></div></div>`;
  const im = a.querySelector("img");
  a.addEventListener("pointermove", (e) => {
    if (
      reduce ||
      p.full ||
      e.pointerType !== "mouse" ||
      !a.classList.contains("in")
    )
      return;
    const r = a.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5,
      y = (e.clientY - r.top) / r.height - 0.5;
    im.classList.add("tilt");
    im.style.transform = `rotateY(${x * 20}deg) rotateX(${-y * 14}deg) scale(1.07)`;
  });
  a.addEventListener("pointerleave", () => {
    im.style.transform = "";
    setTimeout(() => im.classList.remove("tilt"), 260);
  });
  return a;
}
P.forEach((p) => grid.appendChild(makeCard(p)));
const cardIO = new IntersectionObserver(
  (es) => {
    let n = 0;
    es.forEach((e) => {
      const c = e.target;
      if (e.intersectionRatio >= 0.12) {
        if (!c.classList.contains("in")) {
          c.style.setProperty("--d", n++ * 0.09 + "s");
          c.classList.add("in");
          const cc = c;
          setTimeout(
            () => window.spill && spill.emit(cc, 6, true),
            900 + n * 90,
          );
        }
      } else if (!e.isIntersecting && c.classList.contains("in")) {
        c.classList.remove("in");
        c.style.setProperty("--d", "0s");
      }
    });
  },
  { threshold: [0, 0.12] },
);
function armCards(root) {
  root.querySelectorAll(".card").forEach((c) => cardIO.observe(c));
}
function setFilter(k) {
  [...filters.children].forEach((c) =>
    c.setAttribute("aria-pressed", c.dataset.k === k),
  );
  [...grid.children].forEach((c) => {
    const show = k === "all" || c.dataset.cat === k;
    c.classList.toggle("hide", !show);
    c.classList.remove("in");
    c.style.removeProperty("--d");
    cardIO.unobserve(c);
  });
  requestAnimationFrame(() => armCards(grid));
}
function openProduct(id) {
  location.hash = "product/" + id;
}

/* product detail page */
const pv = $("#v-product"),
  pdBar = $("#pdBar");
function renderProduct(id) {
  pv.querySelectorAll(".reveal,.card").forEach((x) => {
    io.unobserve(x);
    cardIO.unobserve(x);
  });
  const p = P.find((x) => x.id === id) || P[0];
  const dt = DETAILS[p.id] || {};
  const sk = stepKey(p);
  const st = dt.prep ? null : sk ? STEPS[sk] : null;
  const i = P.indexOf(p);
  const rel = P.filter((x) => x.cat === p.cat && x.id !== p.id)
    .concat(P.filter((x) => x.cat !== p.cat))
    .slice(0, 6);
  const words = p.name
    .split(" ")
    .map(
      (w, j) =>
        `<span class="w" style="animation-delay:${0.25 + j * 0.1}s">${w}</span>`,
    )
    .join(" ");
  const topic =
    p.type === "HoReCa sachet" ? "HoReCa sachet supply" : "Buying for my store";
  pv.innerHTML = `<div class="pd"><div class="wrap">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="#home">Home</a><span>/</span><a href="#products">Products</a><span>/</span><a href="#products/${p.cat}">${catName(p.cat)}</a><span>/</span><span aria-current="page">${p.name}</span></nav>
  <div class="pd-grid">
   <div class="pd-media"><div class="pd-stage" id="pdStage"><span class="ring"></span><span class="ring r2"></span><span class="gsh"></span><i class="spk" style="left:14%;top:30%;animation-delay:0s"></i><i class="spk" style="left:80%;top:22%;animation-delay:0.7s"></i><i class="spk" style="left:72%;top:70%;animation-delay:1.3s"></i><i class="spk" style="left:22%;top:78%;animation-delay:1.9s"></i><i class="spk" style="left:50%;top:10%;animation-delay:1.1s"></i><img decoding="async" class="mi ${p.full ? "full" : ""}" id="pdMain" src="${IMG[p.img[0]]}" alt="${p.name}"></div>
    ${p.img.length > 1 ? `<div class="pd-thumbs">${p.img.map((k, j) => `<button aria-label="View ${j + 1}" aria-current="${j === 0}" data-j="${j}" style="animation-delay:${0.6 + j * 0.08}s"><img decoding="async" data-lz="${IMG[k]}" alt=""></button>`).join("")}</div>` : ""}</div>
   <div class="pd-info"><span class="cat-chip">${catName(p.cat)}</span><h1>${words}</h1>${p.hi ? `<div class="hn" lang="hi">${p.hi}</div>` : ""}<div class="ln">${p.line}</div><p class="ds">${p.desc}</p>
    <div class="qchips"><div class="qchip"><small>Pack size</small><b>${p.wt}</b></div><div class="qchip"><small>Type</small><b>${p.type}</b></div><div class="qchip"><small>Diet</small><b>100% veg</b></div></div>
    <div class="pd-ctas"><a class="btn btn-g" href="#contact" data-topic="${topic}" data-msg="Enquiry about ${p.name} (${p.wt})">Enquire about this product</a><a class="btn btn-y" target="_blank" rel="noopener" href="https://wa.me/918699091009?text=${encodeURIComponent("Hello Century, I would like to know more about " + p.name + " (" + p.wt + ").")}">Ask on WhatsApp</a></div>
   </div>
  </div>
  <div class="pd-sec"><h2 class="reveal"><span class="bar">Key</span> benefits</h2><div class="ben reveal">${p.pts.map((x) => `<div><b>${x}</b></div>`).join("")}</div></div>
  <div class="pd-sec two${dt.prep || st || dt.qc ? "" : " solo"}">
   <div><h2 class="reveal"><span class="bar">Best</span> for</h2><div class="bestfor reveal">${USES[p.id].map((u) => `<span>${u}</span>`).join("")}</div>
    <h2 class="reveal" style="margin-top:56px"><span class="bar">Product</span> details</h2>
    <dl class="spec reveal"><dt>Product</dt><dd>${p.name}</dd>${p.hi ? `<dt>Hindi name</dt><dd lang="hi">${p.hi}</dd>` : ""}<dt>Category</dt><dd>${catName(p.cat)}</dd><dt>Type</dt><dd>${p.type}</dd><dt>Pack size</dt><dd>${p.wt}</dd>${dt.ing ? `<dt>Ingredients</dt><dd>${dt.ing}</dd>` : ""}${dt.alg ? `<dt>Allergen advice</dt><dd>${dt.alg}</dd>` : ""}<dt>Diet</dt><dd>100% vegetarian</dd><dt>Storage</dt><dd>Store in a cool, dry place</dd><dt>Made by</dt><dd>Dinero FoodWorks Pvt. Ltd., Punjab</dd><dt>Certified</dt><dd>FSSAI, FSSC 22000, ISO, HACCP, GMP</dd></dl></div>
   ${dt.prep
      ? `<div><h2 class="reveal"><span class="bar">Ready in</span> 3 easy steps</h2><ol class="steps reveal" style="grid-template-columns:1fr">${dt.prep.map((t, j) => `<li><h3>${["Boil", "Cook", "Drain & squeeze"][j]}</h3><p style="margin:8px 0 0;color:var(--ink-2)">${t}</p></li>`).join("")}</ol></div>`
      : st
        ? `<div><h2 class="reveal"><span class="bar">How</span> to use</h2><ol class="steps reveal" style="grid-template-columns:1fr">${st.map(([h, t]) => `<li><h3>${h}</h3><p style="margin:8px 0 0;color:var(--ink-2)">${t}</p></li>`).join("")}</ol></div>`
        : dt.qc
          ? `<div class="qc reveal"><div class="qc-n"><span data-count="250">250</span>+</div><h3>Quality parameters tested</h3><p>Tested in an NABL-accredited laboratory for pesticide residues, heavy metals, aflatoxins, mycotoxins and other contaminants.</p><ul><li>Hygienically processed</li><li>Carefully selected grains</li><li>Source of dietary fibre</li><li>Naturally protein rich</li></ul></div>`
          : ""
    }
  </div>
  ${dt.recipe ? `<div class="pd-sec"><div class="rcp reveal"><div class="rcp-head"><small>${dt.recipe.sub}</small><h2>${dt.recipe.title}</h2><p>A recipe from the Century pack, made with ${p.name}.</p></div><ol class="rcp-steps">${dt.recipe.steps.map((t, j) => `<li style="--i:${j}"><span class="rn">${j + 1}</span><p>${t}</p></li>`).join("")}</ol></div></div>` : ""}
  ${dt.nutri || dt.protein
      ? `<div class="pd-sec two nutri-sec${dt.protein ? "" : " solo"}">
   ${dt.nutri ? `<div><h2 class="reveal"><span class="bar">Nutritional</span> information</h2><div class="ntab reveal"><div class="nt-head"><b>Nutritional information*</b><span>Serve size: ${dt.nutri.serve}</span><span>Servings per pack: ${dt.nutri.servings}</span></div><div class="nt-scroll"><table><thead><tr><th>Nutrients (approx.)</th>${dt.nutri.cols.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${dt.nutri.rows.map((r, j) => `<tr style="--i:${j}">${r.map((c, k) => (k ? `<td>${c}</td>` : `<th scope="row">${c}</th>`)).join("")}</tr>`).join("")}</tbody></table></div><p class="nt-foot">*Approximate values, as printed on the pack.</p></div></div>` : ""}
   ${dt.protein
        ? `<div><h2 class="reveal"><span class="bar">Protein</span> per 100 g</h2><div class="pchart reveal" role="img" aria-label="Protein per 100 g: Century Soya 53 g, peanuts 26 g, lentils 22 g, almonds 21 g, paneer 18 g, flax seeds 18 g, egg 12 g">${[
          ["Century Soya", 53, 1],
          ["Peanuts", 26],
          ["Lentils (dal)", 22],
          ["Almonds", 21],
          ["Paneer", 18],
          ["Flax seeds", 18],
          ["Egg", 12],
        ]
          .map(
            ([n, v, me], j) =>
              `<div class="pc-row${me ? " me" : ""}" style="--v:${v / 53};--i:${j}"><span class="pc-n">${n}</span><span class="pc-bar"><i></i></span><b>${v} g</b></div>`,
          )
          .join(
            "",
          )}<p class="nt-foot">Source: Nutritive value of foods, ICMR, JFST (as printed on the pack). One 30 g serve of Century Soya Chunks provides 35% more protein than one 40 g serve of paneer.</p></div></div>`
        : ""
      }
  </div>`
      : ""
    }
  <div class="pd-sec"><h2 class="reveal"><span class="bar">You may</span> also like</h2><div class="rel" id="rel"></div></div>
 </div></div>`;
  splitHeads(pv);
  const relEl = pv.querySelector("#rel");
  rel.forEach((x) => relEl.appendChild(makeCard(x)));
  const main = pv.querySelector("#pdMain");
  pv.querySelectorAll(".pd-thumbs button").forEach(
    (b) =>
    (b.onclick = () => {
      const j = +b.dataset.j;
      main.classList.remove("swap");
      void main.offsetWidth;
      main.src = IMG[p.img[j]];
      main.classList.add("swap");
      pv.querySelectorAll(".pd-thumbs button").forEach((t) =>
        t.setAttribute("aria-current", t === b),
      );
    }),
  );
  const stage = pv.querySelector("#pdStage");
  pdFx(stage, p.id);
  stage.addEventListener("pointermove", (e) => {
    if (reduce || p.full || e.pointerType !== "mouse") return;
    const r = stage.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5,
      y = (e.clientY - r.top) / r.height - 0.5;
    main.style.transform = `rotateY(${x * 24}deg) rotateX(${-y * 16}deg)`;
  });
  stage.addEventListener("pointerleave", () => (main.style.transform = ""));
  /* swipe gallery on touch */
  let sx = null,
    cur = 0;
  stage.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), {
    passive: true,
  });
  stage.addEventListener("touchend", (e) => {
    if (sx === null || p.img.length < 2) return;
    const dx = e.changedTouches[0].clientX - sx;
    sx = null;
    if (Math.abs(dx) < 40) return;
    cur = (cur + (dx < 0 ? 1 : -1) + p.img.length) % p.img.length;
    pv.querySelectorAll(".pd-thumbs button")[cur].click();
  });
  pdBar.innerHTML = `<a class="btn btn-g" href="#contact" data-topic="${topic}" data-msg="Enquiry about ${p.name} (${p.wt})">Enquire</a><a class="btn btn-y" target="_blank" rel="noopener" href="https://wa.me/918699091009?text=${encodeURIComponent("Hello Century, I would like to know more about " + p.name + " (" + p.wt + ").")}">WhatsApp</a>`;
  document.title = p.name + " | Century";
}
document.addEventListener("click", (e) => {
  const a = e.target.closest("[data-topic]");
  if (!a) return;
  setTimeout(() => {
    const t = $("#topic");
    [...t.options].forEach((o) => {
      if (o.text === a.dataset.topic) t.value = o.text;
    });
    if (a.dataset.msg) $("#enq").msg.value = a.dataset.msg;
  }, 900);
});

/* glass cards toggle */
document
  .querySelectorAll(".gcard")
  .forEach((g) => (g.onclick = () => g.classList.toggle("open")));
document
  .querySelectorAll("[data-bgk]")
  .forEach((el) => (el.style.backgroundImage = `url(${IMG[el.dataset.bgk]})`));
$(".curtain img").src = document.querySelector(".brand .lw").src;

/* count up */
function countUp(el) {
  if (el.dataset.done) return;
  el.dataset.done = 1;
  const to = +el.dataset.count;
  if (reduce) {
    el.textContent = to;
    return;
  }
  const from = to > 1000 ? to - 60 : 0;
  const t0 = performance.now();
  const dur = 1400;
  const step = (t) => {
    const k = Math.min(1, (t - t0) / dur);
    const e = 1 - Math.pow(1 - k, 3);
    el.textContent = Math.round(from + (to - from) * e);
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* slider ambient canvas: ingredient pieces that match the active slide */
function ambientFx(c, viewId, getType) {
  if (!c || reduce || LITE) {
    if (c) c.style.display = "none";
    return null;
  }
  const x = c.getContext("2d");
  let W,
    H,
    parts = [],
    run = true;
  const dpr = Math.min(2, devicePixelRatio || 1);
  function size() {
    W = c.clientWidth;
    H = c.clientHeight;
    c.width = W * dpr;
    c.height = H * dpr;
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function pick() {
    let t = getType();
    if (Array.isArray(t)) t = t[Math.floor(Math.random() * t.length)];
    return t;
  }
  function mk(init) {
    const t = pick(),
      r = Math.random();
    if (!t)
      return {
        t: null,
        x: Math.random() * W,
        y: init ? Math.random() * H : H + 20,
        r: r < 0.35 ? 3 + Math.random() * 5 : 1.5 + Math.random() * 2.5,
        c: r < 0.35 ? "rgba(250,244,228,.22)" : "rgba(253,185,19,.45)",
        vy: 0.2 + Math.random() * 0.5,
        sw: Math.random() * 7,
        ss: 0.005 + Math.random() * 0.015,
        a: 1,
        rot: 0,
        vr: 0,
      };
    const [a, b] = fxSize(t);
    return {
      t,
      x: Math.random() * W,
      y: init ? Math.random() * H : H + 20,
      r: (a + Math.random() * (b - a)) * 0.75,
      v: mkShape(t),
      vy: 0.25 + Math.random() * 0.55,
      sw: Math.random() * 7,
      ss: 0.005 + Math.random() * 0.012,
      a: init ? 0.6 : 0,
      rot: Math.random() * 7,
      vr: (Math.random() - 0.5) * 0.02,
      key: String(getType()),
    };
  }
  size();
  parts = Array.from({ length: Math.max(18, Math.round(W / 24)) }, () =>
    mk(true),
  );
  new ResizeObserver(size).observe(c);
  new IntersectionObserver((es) => {
    run = es[0].isIntersecting;
    if (run) requestAnimationFrame(loop);
  }).observe(c);
  function loop() {
    if (!run || !document.getElementById(viewId).classList.contains("on")) {
      run = false;
      return;
    }
    x.clearRect(0, 0, W, H);
    const key = String(getType());
    parts.forEach((p, i) => {
      p.y -= p.vy;
      p.sw += p.ss;
      const px = p.x + Math.sin(p.sw) * 14;
      if (!p.t) {
        x.beginPath();
        x.arc(px, p.y, p.r, 0, 7);
        x.fillStyle = p.c;
        x.fill();
      } else {
        const live = p.key === key;
        p.a = live ? Math.min(0.6, p.a + 0.02) : p.a - 0.025;
        p.rot += p.vr;
        x.save();
        x.globalAlpha = Math.max(0, p.a);
        x.translate(px, p.y);
        x.rotate(p.rot);
        paintPiece(x, p.t, p.r, p.v);
        x.restore();
      }
      if (
        p.y < -24 ||
        (p.t && p.a <= 0 && p.key !== key) ||
        (!p.t && key !== "null" && Math.random() < 0.01)
      )
        parts[i] = mk(false);
    });
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  return {
    wake() {
      if (!run) {
        run = true;
        requestAnimationFrame(loop);
      }
    },
  };
}
window.heroIdx = 0;
window.prodIdx = 0;
const HERO_FX = [null, "soya", "makhana", "jaggery", ["chilli", "oregano"]],
  PROD_FX = [
    "soya",
    "makhana",
    ["besan", "poha", "dal", "jaggery"],
    "jaggery",
    ["chilli", "oregano"],
  ];
const heroAmb = ambientFx(
  $("#seeds"),
  "v-home",
  () => HERO_FX[window.heroIdx] ?? null,
);
const prodAmb = null;
if ($("#pseeds"))
  $("#pseeds").style.display =
    "none"; /* products page kept light: no particle canvas */
window.restartSeeds = () => {
  heroAmb && heroAmb.wake();
  prodAmb && prodAmb.wake();
};

/* scroll engine: header, progress, card parallax, section parallax, magnetic buttons */
const hdr = $("header.top"),
  totop = $("#totop");
let lastY = scrollY,
  ticking = false;
function onScroll() {
  const y = scrollY,
    vh = innerHeight,
    max = document.documentElement.scrollHeight - vh;
  const sp = max > 0 ? y / max : 0;
  const spv = sp.toFixed(4);
  if (spv !== onScroll.l) {
    onScroll.l = spv;
    hdr.style.setProperty("--sp", spv);
    totop.style.setProperty("--sp", spv);
  }
  const sc = y > 40;
  hdr.classList.toggle("sc", sc);
  document.body.classList.toggle("hdr-s", sc);
  const hide = false;
  hdr.classList.toggle("hide", hide);
  document.body.classList.toggle("hdr-h", hide);
  lastY = y;
  totop.classList.toggle("on", y > 600);
  pdBar.classList.toggle(
    "on",
    document.body.classList.contains("on-product") && y > 420,
  );
  if (!reduce) {
    document.querySelectorAll(".view.on [data-par]").forEach((el) => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      el.style.transform = `translateY(${(r.top + r.height / 2 - vh / 2) * -+el.dataset.par}px)`;
    });
    document.querySelectorAll(".view.on .cat.in-view").forEach((c) => {
      const r = c.getBoundingClientRect();
      const p = (r.top + r.height / 2 - vh / 2) / vh;
      c.style.transform = `perspective(900px) rotateX(${(p * 8).toFixed(2)}deg)`;
    });
  }
  ticking = false;
}
addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  },
  { passive: true },
);
addEventListener("resize", onScroll);
totop.onclick = () =>
  goScroll({ top: 0, behavior: reduce ? "auto" : "smooth" });
if (!reduce && matchMedia("(pointer:fine)").matches)
  document.addEventListener("pointermove", (e) => {
    const b = e.target.closest(".btn");
    document.querySelectorAll(".btn.mag").forEach((x) => {
      if (x !== b) {
        x.style.transform = "";
        x.classList.remove("mag");
      }
    });
    if (!b) return;
    const r = b.getBoundingClientRect();
    b.classList.add("mag");
    b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px,${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
  });
const footIO = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.intersectionRatio >= 0.12) e.target.classList.add("seen");
      else if (!e.isIntersecting) e.target.classList.remove("seen");
    }),
  { threshold: [0, 0.12] },
);
footIO.observe($("#foot"));

/* gallery */
const GAL = [
  ["aerial", "Aerial view of Punjab units 1 and 2", "w2"],
  ["plant1", "Processing line"],
  ["plant5", "Inside the plant"],
  ["plant6", "Pulses processing plant"],
  ["plant4", "Cleaning and grading"],
  ["aerial2", "Plant from above"],
  ["plant7", "Processing floor"],
  ["plant3", "Pulses processing"],
  ["plant2", "Storage and packing"],
];
const gal = $("#gal");
if (gal)
  GAL.forEach(([k, a, c]) => {
    const b = document.createElement("button");
    if (c) b.className = c;
    b.setAttribute("aria-label", "Enlarge: " + a);
    b.innerHTML = `<img decoding="async" data-lz="${IMG[k]}" alt="${a}" loading="lazy">`;
    b.onclick = () => {
      $("#lbImg").src = IMG[k];
      $("#lbImg").alt = a;
      $("#lb").showModal();
    };
    gal.appendChild(b);
  });
$("#lbX").onclick = () => $("#lb").close();
$("#lb").addEventListener("click", (e) => {
  if (e.target.id === "lb") $("#lb").close();
});

/* contact */
const f = $("#enq");
let via = "mail";
f.querySelectorAll("[data-via]").forEach((b) =>
  b.addEventListener("click", () => (via = b.dataset.via)),
);
f.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(f));
  const err = $("#err");
  if (!d.name.trim()) {
    err.textContent = "Add your name so we know who to reply to.";
    f.name.focus();
    return;
  }
  if (!/^[+\d][\d\s-]{7,}$/.test(d.phone.trim())) {
    err.textContent = "Add a phone number with at least 8 digits.";
    f.phone.focus();
    return;
  }
  if (d.email && !/^\S+@\S+\.\S+$/.test(d.email)) {
    err.textContent = "That email address looks incomplete.";
    f.email.focus();
    return;
  }
  err.textContent = "";
  if (via !== "wa") {
    const btn = f.querySelector('button[type="submit"]');
    if (btn) btn.disabled = true;
    fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(d),
    })
      .then((r) => r.json().catch(() => ({ ok: false })).then((j) => ({ ok: r.ok && j.ok, j })))
      .then(({ ok, j }) => {
        if (ok) {
          f.reset();
          if (typeof gtag === "function") gtag("event", "generate_lead", { form_name: "enquiry" });
          showThanks(d.name, "Your enquiry has reached our team. We will reply within one working day.");
        } else {
          err.textContent = (j && j.error) || "Something went wrong. Please try again.";
        }
      })
      .catch(() => {
        err.textContent = "Network issue. Please try again or call 1800 296 7999.";
      })
      .finally(() => {
        if (btn) btn.disabled = false;
      });
    return;
  }
  const body = `Name: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email || "-"}\nBusiness: ${d.biz || "-"}\nInterested in: ${d.topic}\n\n${d.msg || ""}`;
  const url =
    via === "wa"
      ? "https://wa.me/918699091009?text=" +
      encodeURIComponent("Hello Century,\n\n" + body)
      : "mailto:century@thecentury.in?subject=" +
      encodeURIComponent("Website enquiry: " + d.topic) +
      "&body=" +
      encodeURIComponent(body);
  window.open(url, "_blank");
  toast(via === "wa" ? "Opening WhatsApp…" : "Opening your email app…");
});
function showThanks(name, msg) {
  const dlg = $("#thanksDlg");
  if (!dlg) return toast("Thank you.");
  $("#thxName").textContent = name ? ", " + name : "";
  $("#thxMsg").textContent = msg;
  if (typeof dlg.showModal === "function") dlg.showModal();
  else dlg.setAttribute("open", "");
}
(function () {
  const dlg = $("#thanksDlg");
  if (!dlg) return;
  const close = () => (dlg.close ? dlg.close() : dlg.removeAttribute("open"));
  dlg.querySelector(".thx-x").addEventListener("click", close);
  dlg.querySelector(".thx-ok").addEventListener("click", close);
  dlg.addEventListener("click", (e) => {
    if (e.target === dlg) close();
  });
})();
function toast(t) {
  const el = $("#toast");
  el.textContent = t;
  el.classList.add("on");
  setTimeout(() => el.classList.remove("on"), 2600);
}

/* reveal */
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      const t = e.target;
      if (e.intersectionRatio >= 0.1) {
        if (!t.classList.contains("seen")) {
          t.classList.add("seen");
          t.querySelectorAll("[data-count]").forEach(countUp);
          if (t.classList.contains("cat")) t.classList.add("in-view");
        }
      } else if (!e.isIntersecting && t.classList.contains("seen")) {
        t.classList.remove("seen", "in-view");
        t.style.transform = "";
        t.querySelectorAll("[data-count]").forEach((c) => {
          delete c.dataset.done;
          c.textContent = c.dataset.count > 1000 ? c.dataset.count - 60 : 0;
        });
      }
    }),
  { threshold: [0, 0.1] },
);
function arm(v) {
  v.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

/* sliders */
function initSlider(el, onChange) {
  const slides = [...el.querySelectorAll(".slide")],
    dots = el.querySelector(".s-dots"),
    dur = +el.dataset.auto || 6000,
    bgEl = el.closest("section");
  let i = slides.findIndex((x) => x.classList.contains("active"));
  if (i < 0) i = 0;
  let t = null,
    hover = false,
    visible = true;
  el.style.setProperty("--dur", dur + "ms");
  slides.forEach((sl, j) => {
    const b = document.createElement("button");
    b.setAttribute("aria-label", "Go to slide " + (j + 1));
    b.onclick = () => go(j);
    dots.appendChild(b);
    sl.setAttribute("aria-roledescription", "slide");
    sl.setAttribute("aria-label", j + 1 + " of " + slides.length);
  });
  const db = [...dots.children];
  function paint() {
    const sl = slides[i];
    if (bgEl) {
      bgEl.style.backgroundColor = sl.dataset.bg;
      bgEl.classList.toggle("dark-ink", sl.dataset.ink === "dark");
    }
    db.forEach((b, j) => {
      b.classList.remove("on");
      b.classList.toggle("done", j < i);
    });
    void dots.offsetWidth;
    db[i].classList.add("on");
    slides.forEach((x, j) => x.toggleAttribute("inert", j !== i));
  }
  function go(n) {
    if (n === i) return;
    slides[i].classList.remove("active");
    i = (n + slides.length) % slides.length;
    void slides[i].offsetWidth;
    slides[i].classList.add("active");
    paint();
    onChange && onChange(i);
    sched();
  }
  function sched() {
    clearTimeout(t);
    const run =
      !reduce &&
      window.__loaded &&
      !hover &&
      visible &&
      el.closest(".view").classList.contains("on");
    el.classList.toggle("paused", !run);
    if (run) t = setTimeout(() => go(i + 1), dur);
  }
  el.querySelector(".prev").onclick = () => go(i - 1);
  el.querySelector(".next").onclick = () => go(i + 1);

  let sx = null,
    sy = null;
  el.addEventListener(
    "touchstart",
    (e) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    },
    { passive: true },
  );
  el.addEventListener("touchend", (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx,
      dy = e.changedTouches[0].clientY - sy;
    sx = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy))
      go(i + (dx < 0 ? 1 : -1));
  });
  el.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") go(i + 1);
    if (e.key === "ArrowLeft") go(i - 1);
  });

  paint();
  return {
    sched,
    get i() {
      return i;
    },
    restartSlide() {
      slides[i].classList.remove("active");
      void slides[i].offsetWidth;
      slides[i].classList.add("active");
      paint();
      sched();
    },
  };
}
const heroS = initSlider($("#heroSlider"), (i) => {
  window.heroIdx = i;
  if (i === 0) {
    requestAnimationFrame(() => {
      layout();
      restart();
    });
  } else clearInterval(timer);
});
const prodS = initSlider($("#prodSlider"), (i) => {
  window.prodIdx = i;
});
document.addEventListener("click", (e) => {
  if (e.target.closest("[data-grid]")) window.__toGrid = true;
});

/* ===== v6 motion ===== */
/* split section headings into rising words */
function splitHeads(root) {
  root.querySelectorAll(".reveal h2, h2.reveal").forEach((h) => {
    if (h.dataset.split || h.closest(".slide")) return;
    h.dataset.split = 1;
    let i = 0;
    const out = [];
    [...h.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        n.textContent.split(/(\s+)/).forEach((w) => {
          if (!w) return;
          if (/^\s+$/.test(w)) {
            out.push(document.createTextNode(" "));
            return;
          }
          const o = document.createElement("span");
          o.className = "sw";
          const s = document.createElement("span");
          s.style.setProperty("--i", i++);
          s.textContent = w;
          o.appendChild(s);
          out.push(o);
        });
      } else {
        const o = document.createElement("span");
        o.className = "sw";
        const s = document.createElement("span");
        s.style.setProperty("--i", i++);
        s.appendChild(n.cloneNode(true));
        o.appendChild(s);
        out.push(o);
      }
    });
    h.textContent = "";
    out.forEach((x) => h.appendChild(x));
  });
}
splitHeads(document);

/* ripple */
document.addEventListener("pointerdown", (e) => {
  if (reduce) return;
  const t = e.target.closest(".btn,.chip,.s-arr,.card");
  if (!t) return;
  const r = t.getBoundingClientRect();
  const d = Math.max(r.width, r.height) * 2.2;
  const s = document.createElement("span");
  s.className = "rip";
  s.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
  if (t.classList.contains("card")) s.style.color = "var(--yellow)";
  t.appendChild(s);
  setTimeout(() => s.remove(), 750);
});

/* custom cursor */
if (false) {
  const c = $(".cur"),
    cr = $(".cur-r");
  let mx = -100,
    my = -100,
    rx = -100,
    ry = -100;
  addEventListener("pointermove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    c.style.transform = `translate(${mx}px,${my}px)`;
    const t = e.target;
    cr.classList.toggle("view", !!t.closest(".card,.packrow a,.gal button"));
    cr.classList.toggle(
      "link",
      !t.closest(".card,.packrow a,.gal button") &&
      !!t.closest("a,button,select,input,textarea,label"),
    );
  });
  addEventListener("pointerdown", () => cr.classList.add("down"));
  addEventListener("pointerup", () => cr.classList.remove("down"));
  document.addEventListener("pointerleave", () => {
    mx = my = -100;
  });
  (function loop() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    cr.style.transform = `translate(${rx}px,${ry}px)${cr.classList.contains("down") ? " scale(.8)" : ""}`;
    requestAnimationFrame(loop);
  })();
}

/* footer spotlight */
$("#foot").addEventListener("pointermove", (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", e.clientX - r.left + "px");
  e.currentTarget.style.setProperty("--my", e.clientY - r.top + "px");
});

/* preloader */
$("#ldLogo").src = document.querySelector(".brand .lw").src;
(function () {
  const L = $("#loader");
  if (reduce) {
    L.classList.add("gone");
    window.__loaded = true;
    return;
  }
  document.documentElement.style.overflow = "hidden";
  const pc = $("#ldPc"),
    bar = $("#loader .lb2 i"),
    t0 = performance.now();
  (function tick(t) {
    const k = Math.min(1, Math.max(0, (t - t0) / 850));
    const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
    pc.textContent = Math.round(e * 100) + "%";
    bar.style.transform = "scaleX(" + e + ")";
    if (k < 1) requestAnimationFrame(tick);
  })(t0);
  setTimeout(() => {
    document.documentElement.style.overflow = "";
    window.__loaded = true;
    heroS.sched();
    prodS.sched();
    L.classList.add("out");
    if ($("#v-home").classList.contains("on")) {
      heroS.restartSlide();
      $("#stage").classList.remove("in");
      void $("#stage").offsetWidth;
      $("#stage").classList.add("in");
    }
    setTimeout(() => L.classList.add("gone"), 500);
  }, 900);
})();

/* footer v2 */
$("#f2Top").onclick = () =>
  goScroll({ top: 0, behavior: reduce ? "auto" : "smooth" });
$("#cbForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const v = $("#cbPhone").value.trim(),
    er = $("#cbErr");
  if (!/^[+\d][\d\s-]{7,}$/.test(v)) {
    er.textContent = "Enter a phone number with at least 8 digits.";
    $("#cbPhone").focus();
    return;
  }
  er.textContent = "";
  fetch("/api/callback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone: v }),
  })
    .then((r) => r.json().catch(() => ({ ok: false })).then((j) => ({ ok: r.ok && j.ok, j })))
    .then(({ ok, j }) => {
      if (ok) {
        $("#cbPhone").value = "";
        if (typeof gtag === "function") gtag("event", "generate_lead", { form_name: "call_back" });
        showThanks("", "We have your number and will call you back shortly.");
      } else {
        er.textContent = (j && j.error) || "Something went wrong. Please try again.";
      }
    })
    .catch(() => {
      er.textContent = "Network issue. Please try again or call 1800 296 7999.";
    });
});
(function () {
  const mq = matchMedia("(min-width:881px)");
  const set = () =>
    document.querySelectorAll(".f2-col").forEach((d, j) => {
      d.open = mq.matches ? true : false;
    });
  set();
  mq.addEventListener("change", set);
  document.querySelectorAll(".f2-col summary").forEach((sm) =>
    sm.addEventListener("click", (e) => {
      if (mq.matches) e.preventDefault();
    }),
  );
})();
/* pack row: auto-scroll + arrow buttons */
(function () {
  const row = $("#packrow");
  if (!row) return;
  const tk = row.querySelector(".tk");
  let x = 0,
    hov = false,
    tw = null;
  row.addEventListener("pointerenter", (e) => {
    if (e.pointerType === "mouse") hov = true;
  });
  row.addEventListener("pointerleave", () => (hov = false));
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  function jump(d) {
    const step = Math.max(260, row.clientWidth * 0.55) * d;
    tw = { from: x, to: x - step, t0: performance.now(), dur: 650 };
  }
  row.querySelector(".prev").onclick = () => jump(-1);
  row.querySelector(".next").onclick = () => jump(1);
  let vis = false,
    W = 0;
  const mW = () => {
    W = tk.scrollWidth / 2;
  };
  let run = false;
  const start = () => {
    if (!run && vis && $("#v-home").classList.contains("on")) {
      run = true;
      requestAnimationFrame(loop);
    }
  };
  new IntersectionObserver((e) => {
    vis = e[0].isIntersecting;
    if (vis) {
      mW();
      start();
    }
  }).observe(row);
  addEventListener("hashchange", () => setTimeout(start, 450));
  addEventListener("resize", mW);
  function loop(t) {
    if (!(vis && $("#v-home").classList.contains("on"))) {
      run = false;
      return;
    }
    {
      if (tw) {
        const k = Math.min(1, (t - tw.t0) / tw.dur);
        x = tw.from + (tw.to - tw.from) * ease(k);
        if (k >= 1) tw = null;
      } else if (!hov && !reduce) x -= 0.55;
      if (W > 0) {
        while (x <= -W) {
          x += W;
          if (tw) {
            tw.from += W;
            tw.to += W;
          }
        }
        while (x > 0) {
          x -= W;
          if (tw) {
            tw.from -= W;
            tw.to -= W;
          }
        }
      }
      tk.style.transform = `translateX(${x}px)`;
    }
    requestAnimationFrame(loop);
  }
})();
/* conveyor progress (scroll-linked, replays both ways) */
(function () {
  const c = $("#conv");
  if (!c) return;
  const lis = [...c.querySelectorAll("li")];
  let tk = false;
  function upd() {
    tk = false;
    if (!$("#v-home").classList.contains("on")) return;
    const r = c.getBoundingClientRect(),
      vh = innerHeight;
    let p = reduce ? 1 : (vh * 0.8 - r.top) / (r.height + vh * 0.25);
    p = Math.max(0, Math.min(1, p));
    c.style.setProperty("--p", p.toFixed(3));
    lis.forEach((l, i) =>
      l.classList.toggle("lit", p >= (i / (lis.length - 1)) * 0.92 + 0.02),
    );
  }
  addEventListener(
    "scroll",
    () => {
      if (!tk) {
        tk = true;
        requestAnimationFrame(upd);
      }
    },
    { passive: true },
  );
  addEventListener("resize", upd);
  addEventListener("hashchange", () => setTimeout(upd, 450));
  upd();
})();
/* ===================== CANVAS PRODUCT FX ===================== */
/* ingredient type per product */
const FXTYPE = (id) =>
  id.startsWith("toor") || /chana|masoor|moong|rajma|urad/.test(id)
    ? "dal"
    : id === "everyday"
      ? "mix"
      : id === "soya-granules"
        ? "granule"
        : id.startsWith("soya")
          ? "soya"
          : id.startsWith("mk-")
            ? "makhana"
            : id === "besan"
              ? "besan"
              : id === "poha"
                ? "poha"
                : id.startsWith("jaggery")
                  ? "jaggery"
                  : id === "chilli"
                    ? "chilli"
                    : "oregano";
const FXHINT = {
  dal: "Pulses",
  mix: "grains",
  soya: "Soya Chunks",
  granule: "Soya Granules",
  makhana: "Makhana",
  besan: "Besan",
  poha: "Poha flakes",
  jaggery: "Jaggery",
  chilli: "Chilli Flakes",
  oregano: "Oregano",
};
function fxSize(t) {
  return {
    dal: [5, 8],
    mix: [4, 8],
    soya: [9, 15],
    granule: [3, 6],
    makhana: [10, 17],
    besan: [1.5, 3.5],
    poha: [6, 11],
    jaggery: [5, 9],
    chilli: [3, 7],
    oregano: [3, 6],
  }[t];
}
function mkShape(t) {
  const n = t === "soya" ? 9 : t === "chilli" ? 4 : t === "granule" ? 6 : 7,
    v = [];
  for (let i = 0; i < n; i++) v.push(0.72 + Math.random() * 0.42);
  return v;
}
function blobPath(c, r, v) {
  c.beginPath();
  const n = v.length;
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2,
      rr = r * v[i % n],
      x = Math.cos(a) * rr,
      y = Math.sin(a) * rr;
    i ? c.lineTo(x, y) : c.moveTo(x, y);
  }
  c.closePath();
}
/* draw one ingredient piece centred at 0,0 (caller translates/rotates) */
function paintPiece(c, t, r, v, shade) {
  if (t === "mix") {
    t =
      v[0] > 1.02
        ? "rice"
        : v[0] > 0.9
          ? "dal"
          : v[0] > 0.8
            ? "chana"
            : "moong";
  }
  if (t === "dal") {
    const g = c.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.1, 0, 0, r);
    g.addColorStop(0, "#f8cf6a");
    g.addColorStop(1, "#d69a22");
    c.fillStyle = g;
    c.beginPath();
    c.ellipse(0, 0, r, r * 0.82, 0, 0, 7);
    c.fill();
    c.strokeStyle = "rgba(150,95,20,.45)";
    c.lineWidth = 0.8;
    c.beginPath();
    c.ellipse(0, 0, r * 0.92, r * 0.74, 0, 0, 7);
    c.stroke();
    return;
  }
  if (t === "rice") {
    c.fillStyle = "#f7f2e4";
    c.strokeStyle = "rgba(190,178,150,.9)";
    c.lineWidth = 0.7;
    c.beginPath();
    c.ellipse(0, 0, r * 1.25, r * 0.38, 0, 0, 7);
    c.fill();
    c.stroke();
    return;
  }
  if (t === "chana") {
    const g = c.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.1, 0, 0, r);
    g.addColorStop(0, "#e9cf9f");
    g.addColorStop(1, "#b48a52");
    c.fillStyle = g;
    c.beginPath();
    c.arc(0, 0, r, 0, 7);
    c.fill();
    return;
  }
  if (t === "moong") {
    c.fillStyle = "#6f9a3a";
    c.beginPath();
    c.ellipse(0, 0, r * 0.8, r * 0.6, 0, 0, 7);
    c.fill();
    return;
  }
  if (t === "soya" || t === "granule") {
    const g = c.createRadialGradient(
      -r * 0.35,
      -r * 0.35,
      r * 0.1,
      0,
      0,
      r * 1.1,
    );
    g.addColorStop(0, shade ? "#dfb27a" : "#e9c38d");
    g.addColorStop(0.6, "#c48a4c");
    g.addColorStop(1, "#8d5b2c");
    c.fillStyle = g;
    blobPath(c, r, v);
    c.fill();
    if (t === "soya") {
      c.fillStyle = "rgba(110,66,28,.35)";
      for (let i = 0; i < 3; i++) {
        c.beginPath();
        c.arc((v[i] - 0.9) * r * 2, (v[i + 3] - 0.9) * r * 2, r * 0.13, 0, 7);
        c.fill();
      }
    }
  } else if (t === "makhana") {
    const g = c.createRadialGradient(-r * 0.3, -r * 0.35, r * 0.1, 0, 0, r);
    g.addColorStop(0, "#fffaf0");
    g.addColorStop(0.7, "#efe3c8");
    g.addColorStop(1, "#cdb98f");
    c.fillStyle = g;
    blobPath(
      c,
      r,
      v.map((x) => 0.92 + (x - 0.9) * 0.25),
    );
    c.fill();
    c.fillStyle = "#8a4b2a";
    for (let i = 0; i < 3; i++) {
      c.beginPath();
      c.ellipse(
        (v[i] - 0.93) * r * 2.4,
        (v[i + 2] - 0.93) * r * 2.4,
        r * 0.14,
        r * 0.09,
        v[i] * 3,
        0,
        7,
      );
      c.fill();
    }
  } else if (t === "besan") {
    c.fillStyle = shade ? "rgba(232,190,88,.75)" : "rgba(240,203,104,.85)";
    c.beginPath();
    c.arc(0, 0, r, 0, 7);
    c.fill();
  } else if (t === "poha") {
    c.fillStyle = "#f7f3e8";
    c.strokeStyle = "rgba(180,168,140,.8)";
    c.lineWidth = 0.8;
    c.beginPath();
    c.ellipse(0, 0, r, r * 0.55 * v[0], 0, 0, 7);
    c.fill();
    c.stroke();
  } else if (t === "jaggery") {
    const g = c.createLinearGradient(-r, -r, r, r);
    g.addColorStop(0, "#e3a548");
    g.addColorStop(1, "#8f561b");
    c.fillStyle = g;
    c.beginPath();
    const s = r * 0.9;
    c.moveTo(-s, -s * v[1]);
    c.lineTo(s * v[2], -s);
    c.lineTo(s, s * v[3]);
    c.lineTo(-s * v[4], s);
    c.closePath();
    c.fill();
  } else if (t === "chilli") {
    if (v[0] > 1.05) {
      c.fillStyle = "#f2c14e";
      c.beginPath();
      c.ellipse(0, 0, r * 0.5, r * 0.35, 0, 0, 7);
      c.fill();
    } else {
      c.fillStyle = v[1] > 1 ? "#b5221a" : "#d8341f";
      blobPath(c, r, v);
      c.fill();
    }
  } else {
    c.fillStyle = v[0] > 0.95 ? "#6f8a2c" : "#4e6620";
    c.beginPath();
    c.moveTo(-r, 0);
    c.quadraticCurveTo(0, -r * 0.9, r, 0);
    c.quadraticCurveTo(0, r * 0.9, -r, 0);
    c.fill();
    c.strokeStyle = "rgba(30,45,10,.5)";
    c.lineWidth = 0.6;
    c.beginPath();
    c.moveTo(-r * 0.8, 0);
    c.lineTo(r * 0.8, 0);
    c.stroke();
  }
}
function fxCanvas(cv) {
  const d = Math.min(2, devicePixelRatio || 1),
    r = cv.getBoundingClientRect();
  cv.width = Math.max(1, r.width * d);
  cv.height = Math.max(1, r.height * d);
  const c = cv.getContext("2d");
  c.setTransform(d, 0, 0, d, 0, 0);
  return [c, r.width, r.height];
}
const IMGOBJ = {};
function fxImg(k) {
  if (!IMGOBJ[k]) {
    const i = new Image();
    i.src = IMG[k];
    IMGOBJ[k] = i;
  }
  return IMGOBJ[k];
}

/* ---------- 1. product page: orbiting ingredient field ---------- */
let pdFxStop = null;
function pdFx(stage, id) {
  if (pdFxStop) pdFxStop();
  if (reduce || LITE) return;
  const t = FXTYPE(id),
    [a, b] = fxSize(t);
  const back = document.createElement("canvas"),
    front = document.createElement("canvas");
  back.className = "pdfx";
  front.className = "pdfx front";
  stage.prepend(back);
  stage.appendChild(front);
  const hint = document.createElement("span");
  hint.className = "pdfx-hint";
  hint.textContent = "Tap to burst the " + FXHINT[t];
  stage.appendChild(hint);
  let cb,
    cf,
    W,
    H,
    run = true,
    raf,
    mx = -999,
    my = -999;
  const N =
    t === "besan"
      ? 140
      : t === "granule" || t === "chilli" || t === "oregano"
        ? 90
        : t === "poha"
          ? 60
          : 38;
  function size() {
    [cb, W, H] = fxCanvas(back);
    [cf] = fxCanvas(front);
  }
  size();
  const ro = new ResizeObserver(size);
  ro.observe(stage);
  const ps = Array.from({ length: N }, () => {
    const ring = 0.28 + Math.random() * 0.2;
    return {
      ang: Math.random() * 7,
      sp: (0.0025 + Math.random() * 0.004) * (Math.random() < 0.5 ? 1 : 1),
      ring,
      tilt: -0.35 + Math.random() * 0.25,
      yo: (Math.random() - 0.5) * 0.5,
      r: a + Math.random() * (b - a),
      v: mkShape(t),
      rot: Math.random() * 7,
      vr: (Math.random() - 0.5) * 0.03,
      ox: 0,
      oy: 0,
      vx: 0,
      vy: 0,
    };
  });
  function burst(cx, cy) {
    ps.forEach((p) => {
      const dx = p.x - cx,
        dy = p.y - cy,
        d = Math.hypot(dx, dy) || 1,
        f = 9 + Math.random() * 9;
      p.vx += (dx / d) * f;
      p.vy += (dy / d) * f - 4;
      p.vr += (Math.random() - 0.5) * 0.4;
    });
  }
  const pm = (e) => {
    const r = stage.getBoundingClientRect();
    mx = e.clientX - r.left;
    my = e.clientY - r.top;
  },
    pl = () => {
      mx = my = -999;
    };
  let downAt = 0,
    downX = 0;
  const pd = (e) => {
    downAt = performance.now();
    downX = e.clientX;
  },
    pu = (e) => {
      if (
        performance.now() - downAt < 350 &&
        Math.abs(e.clientX - downX) < 12
      ) {
        pm(e);
        burst(mx, my);
        hint.classList.add("gone");
      }
    };
  stage.addEventListener("pointermove", pm);
  stage.addEventListener("pointerleave", pl);
  stage.addEventListener("pointerdown", pd);
  stage.addEventListener("pointerup", pu);
  function frame() {
    if (!run) return;
    cb.clearRect(0, 0, W, H);
    cf.clearRect(0, 0, W, H);
    const cx = W / 2,
      cy = H * 0.52;
    ps.forEach((p) => {
      p.ang += p.sp;
      const z = Math.sin(p.ang);
      const bx = cx + Math.cos(p.ang) * W * p.ring * 1.15,
        by = cy + z * H * p.ring * p.tilt + p.yo * H * 0.55;
      const dx = (p.x ?? bx) - mx,
        dy = (p.y ?? by) - my,
        d = Math.hypot(dx, dy);
      if (d < 90 && d > 0) {
        p.vx += (dx / d) * (90 - d) * 0.04;
        p.vy += (dy / d) * (90 - d) * 0.04;
      }
      p.vx += -p.ox * 0.035;
      p.vy += -p.oy * 0.035;
      p.vx *= 0.9;
      p.vy *= 0.9;
      p.ox += p.vx;
      p.oy += p.vy;
      p.rot += p.vr;
      p.vr *= 0.995;
      if (Math.abs(p.vr) < 0.004) p.vr = 0.004 * Math.sign(p.vr || 1);
      p.x = bx + p.ox;
      p.y = by + p.oy;
      const s = 0.7 + (0.3 * (z + 1)) / 2,
        c = z > 0 ? cf : cb;
      c.save();
      c.globalAlpha = z > 0 ? 1 : 0.55 + 0.35 * (z + 1);
      c.translate(p.x, p.y);
      c.rotate(p.rot);
      c.scale(s, s);
      paintPiece(c, t, p.r, p.v, z <= 0);
      c.restore();
    });
    raf = requestAnimationFrame(frame);
  }
  const vis = new IntersectionObserver((es) => {
    const v = es[0].isIntersecting;
    if (v && !run) {
      run = true;
      frame();
    } else if (!v) run = false;
  });
  vis.observe(stage);
  frame();
  pdFxStop = () => {
    run = false;
    cancelAnimationFrame(raf);
    ro.disconnect();
    vis.disconnect();
    back.remove();
    front.remove();
    hint.remove();
    pdFxStop = null;
  };
}

/* ---------- 2. card ingredient spill (shared overlay canvas) ---------- */
window.spill = null;
const spill = (() => {
  const cv = document.createElement("canvas");
  cv.className = "spillfx";
  document.body.appendChild(cv);
  let c,
    W,
    H,
    ps = [],
    raf = null;
  function size() {
    [c, W, H] = fxCanvas(cv);
  }
  size();
  addEventListener("resize", size);
  function emit(card, n, soft) {
    if (reduce) return;
    const id = card.getAttribute("href").split("/")[1];
    const t = FXTYPE(id),
      [a, b] = fxSize(t);
    const ph = card.querySelector(".ph");
    if (!ph) return;
    for (let i = 0; i < n; i++)
      ps.push({
        card: ph,
        t,
        r: (a + Math.random() * (b - a)) * 0.8,
        v: mkShape(t),
        fx: 0.25 + Math.random() * 0.5,
        fy: 0.1 + Math.random() * 0.25,
        x: 0,
        y: 0,
        vx: (Math.random() - 0.5) * (soft ? 2 : 4),
        vy: -(soft ? 1 + Math.random() * 2 : 1.5 + Math.random() * 3),
        rot: Math.random() * 7,
        vr: (Math.random() - 0.5) * 0.2,
        life: soft ? 60 : 85 + Math.random() * 25,
        init: false,
        bounce: 0,
      });
    if (!raf) raf = requestAnimationFrame(loop);
  }
  function loop() {
    c.clearRect(0, 0, W, H);
    ps = ps.filter((p) => p.life > 0);
    ps.forEach((p) => {
      const r = p.card.getBoundingClientRect();
      if (!p.init) {
        p.x = r.left + r.width * p.fx;
        p.y = r.top + r.height * p.fy;
        p.init = true;
      }
      p.vy += 0.28;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      const floor = r.bottom - 6;
      if (p.y > floor) {
        p.y = floor;
        p.vy *= -0.42;
        p.vx *= 0.7;
        p.vr *= 0.6;
        p.bounce++;
      }
      if (p.x < r.left + 4 || p.x > r.right - 4) p.vx *= -0.6;
      p.life--;
      c.save();
      c.beginPath();
      c.rect(r.left, r.top, r.width, r.height);
      c.clip();
      c.globalAlpha = Math.min(1, p.life / 30);
      c.translate(p.x, p.y);
      c.rotate(p.rot);
      paintPiece(c, p.t, p.r, p.v);
      c.restore();
    });
    raf = ps.length
      ? requestAnimationFrame(loop)
      : (c.clearRect(0, 0, W, H), null);
  }
  document.addEventListener("pointerover", (e) => {
    if (e.pointerType !== "mouse") return;
    const card = e.target.closest(".card");
    if (!card || card.contains(e.relatedTarget)) return;
    emit(card, 16);
  });
  return (window.spill = null);
})();

/* jaggery highlight: pour synced to the CSS tilt animation */
(function () {
  const c = $("#jagFx"),
    sec = $("#jagHi");
  if (!c || reduce) return;
  const x = c.getContext("2d"),
    pack = sec.querySelector(".jag-pack"),
    mouth = sec.querySelector(".jp-mouth"),
    tea = sec.querySelector(".kh-teasurf");
  let W,
    H,
    ps = [],
    run = false;
  const dpr = Math.min(2, devicePixelRatio || 1);
  function size() {
    W = c.clientWidth;
    H = c.clientHeight;
    c.width = W * dpr;
    c.height = H * dpr;
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  size();
  new ResizeObserver(size).observe(c);
  function phase() {
    const an = pack.getAnimations()[0];
    if (!an || an.currentTime == null) return 0;
    const d = an.effect.getTiming().duration;
    return (an.currentTime % d) / d;
  }
  function loop() {
    if (!run) return;
    x.clearRect(0, 0, W, H);
    const ph = phase(),
      cr = c.getBoundingClientRect(),
      mr = mouth.getBoundingClientRect(),
      tr = tea.getBoundingClientRect();
    const ox = mr.left - cr.left,
      oy = mr.top - cr.top,
      tx = tr.left - cr.left + tr.width / 2,
      ty = tr.top - cr.top + tr.height / 2;
    if (ph > 0.5 && ph < 0.78) {
      const [a, b] = fxSize("jaggery");
      for (let i = 0; i < 7; i++) {
        const T = Math.max(8, Math.sqrt((2 * Math.max(20, ty - oy)) / 0.32));
        ps.push({
          x: ox + (Math.random() - 0.5) * 9,
          y: oy,
          vx: (tx - ox) / T + (Math.random() - 0.5) * 0.7,
          vy: Math.random() * 0.5,
          r: (a + Math.random() * (b - a)) * 0.42,
          v: mkShape("jaggery"),
          rot: Math.random() * 7,
          ty,
        });
      }
    }
    ps = ps.filter((p) => p.y < p.ty);
    ps.forEach((p) => {
      p.vy += 0.32;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += 0.08;
      x.save();
      x.translate(p.x, p.y);
      x.rotate(p.rot);
      paintPiece(x, "jaggery", p.r, p.v);
      x.restore();
    });
    requestAnimationFrame(loop);
  }
  new IntersectionObserver((es) => {
    const v = es[0].isIntersecting && $("#v-home").classList.contains("on");
    if (v && !run) {
      run = true;
      requestAnimationFrame(loop);
    } else if (!v) {
      run = false;
      ps = [];
    }
  }).observe(sec);
})();
/* Our range carousel */
(function () {
  const root = $("#rng");
  if (!root) return;
  const track = $("#rngTrack"),
    cards = [...track.children],
    dots = $("#rngDots"),
    D = 3600;
  let i = 0,
    t = null,
    hover = false;
  root.style.setProperty("--rdur", D + "ms");
  const per = () =>
    parseFloat(getComputedStyle(root).getPropertyValue("--per")) || 4;
  const maxI = () => Math.max(0, Math.ceil(cards.length - per()));
  function build() {
    dots.innerHTML = "";
    for (let k = 0; k <= maxI(); k++) {
      const b = document.createElement("button");
      b.setAttribute("aria-label", "Show categories from " + (k + 1));
      b.onclick = () => go(k);
      dots.appendChild(b);
    }
  }
  function paint() {
    const w = cards[0].getBoundingClientRect().width,
      g = parseFloat(getComputedStyle(track).columnGap) || 18;
    i = Math.min(i, maxI());
    track.style.transform = `translateX(${-i * (w + g)}px)`;
    [...dots.children].forEach((b, k) => {
      b.classList.remove("on");
    });
    void dots.offsetWidth;
    dots.children[i] && dots.children[i].classList.add("on");
    const p = Math.ceil(per());
    cards.forEach((c, k) => {
      const vis = k >= i && k < i + p;
      if (vis && !c.classList.contains("in")) {
        c.classList.add("in");
      } else if (!vis) c.classList.remove("in");
    });
  }
  function go(n) {
    const m = maxI();
    i = n > m ? 0 : n < 0 ? m : n;
    paint();
    sched();
  }
  function sched() {
    clearTimeout(t);
    const run = !reduce && !hover && $("#v-home").classList.contains("on");
    root.classList.toggle("paused", !run);
    if (run) t = setTimeout(() => go(i + 1), D);
  }
  root.querySelector(".rng-prev").onclick = () => go(i - 1);
  root.querySelector(".rng-next").onclick = () => go(i + 1);
  if (matchMedia("(pointer:fine)").matches) {
    root.addEventListener("pointerenter", () => {
      hover = true;
      sched();
    });
    root.addEventListener("pointerleave", () => {
      hover = false;
      paint();
      sched();
    });
  }
  let sx = null,
    sy = null;
  track.addEventListener(
    "touchstart",
    (e) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    },
    { passive: true },
  );
  track.addEventListener("touchend", (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx,
      dy = e.changedTouches[0].clientY - sy;
    sx = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy))
      go(i + (dx < 0 ? 1 : -1));
  });
  let lastPer = per();
  addEventListener("resize", () => {
    if (per() !== lastPer) {
      lastPer = per();
      build();
    }
    paint();
  });
  addEventListener("hashchange", () =>
    setTimeout(() => {
      paint();
      sched();
    }, 400),
  );
  build();
  paint();
  sched();
})();
/* pinned category showcase: scroll moves through the Century range */
(function () {
  const sec = $("#pt");
  if (!sec) return;
  const L = [
    {
      name: "Soya",
      img: "sc",
      href: "#products/soya",
      glow: "#c4783a",
      desc: "Chunks, Jumbo, Mini and Granules. Plant protein for curries, pulao and keema.",
      tags: [
        "53% of Pure Plant Protein",
        "99% fat-free",
        "100% vegetarian",
        "Vegan",
        "Super soft",
      ],
    },
    {
      name: "Makhana",
      img: "mk-puffed",
      href: "#products/makhana",
      glow: "#e7d9b8",
      desc: "Fox nuts graded by size, for roasting, snacking, kheer and gravies.",
      tags: [
        "Graded by size",
        "Naturally fat-free",
        "Gluten-free",
        "Roast & snack",
      ],
    },
    {
      name: "Spices & Seasoning",
      img: "chilli",
      img2: "oregano",
      href: "#products/seasoning",
      glow: "#c0392b",
      desc: "100% red Chilli Flakes and Italian Oregano seasoning.",
      tags: [
        "100% red Chilli Flakes",
        "Italian-style Oregano",
        "0.80 g sachets",
        "For pizza & pasta",
      ],
    },
    {
      name: "Pulses",
      img: "toor-dal",
      href: "#products/pulses",
      glow: "#d9a53a",
      desc: "Unpolished pulses, tested on 250+ quality parameters. 500 g and 1 kg.",
      tags: [
        "250+ quality parameters",
        "Hygienically processed",
        "Source of fibre",
        "Naturally protein rich",
      ],
    },
    {
      name: "Jaggery",
      img: "jaggery",
      href: "#product/jaggery",
      glow: "#8a4b22",
      desc: "Pure Jaggery Powder made only from sugarcane, in 5 g single-serve sachets.",
      tags: [
        "Made only from sugarcane",
        "No chemicals",
        "5 g sachets",
        "Dissolves instantly",
      ],
    },
    {
      name: "Besan",
      img: "besan",
      href: "#product/besan",
      glow: "#e2b23c",
      desc: "Fine Besan milled from 100% unpolished chana dal.",
      tags: [
        "100% unpolished chana dal",
        "Low oil absorption",
        "High in protein",
        "Fine & smooth",
      ],
    },
    {
      name: "Poha",
      img: "poha",
      href: "#product/poha",
      glow: "#9fc6d3",
      desc: "Classic Indori Poha, light and naturally gluten free.",
      tags: [
        "Naturally gluten free",
        "Rich in dietary fibre",
        "Easy to cook",
        "Indori style",
      ],
    },
  ];
  const stage = sec.querySelector(".pt-stage"),
    names = $("#ptNames"),
    tags = $("#ptTags");
  stage.innerHTML = L.map((c) =>
    c.img2
      ? `<span class="pt-img pt-duo"><img decoding="async" data-lz="${IMG[c.img]}" alt=""><img decoding="async" data-lz="${IMG[c.img2]}" alt=""></span>`
      : `<img decoding="async" class="pt-img${c.img === "jaggery" ? " pt-wide" : ""}" data-lz="${IMG[c.img]}" alt="">`,
  ).join("");
  const imgs = [...stage.children];
  L.forEach((c) => {
    const h = document.createElement("h2");
    h.className = "pt-name";
    h.textContent = c.name;
    names.appendChild(h);
  });
  const nm = [...names.children];
  let cur = -1;
  function set(i) {
    if (i === cur) return;
    cur = i;
    const c = L[i];
    imgs.forEach((im, j) => im.classList.toggle("on", j === i));
    nm.forEach((n, j) => n.classList.toggle("on", j === i));
    sec.style.setProperty("--pt-glow", c.glow + "66");
    $("#ptDName").textContent = c.name;
    $("#ptDesc").textContent = c.desc;
    tags.innerHTML = c.tags
      .concat(c.tags, c.tags, c.tags)
      .map((x) => `<span>${x}</span>`)
      .join("");
    imgs[i].onclick = () => {
      location.hash = c.href.slice(1);
    };
  }
  function upd() {
    if (!$("#v-home").classList.contains("on")) return;
    const r = sec.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    const total = r.height - innerHeight;
    const pr = Math.max(0, Math.min(0.9999, -r.top / Math.max(1, total)));
    const f = pr * L.length,
      i = Math.floor(f),
      lt = f - i;
    set(i);
    sec.style.setProperty("--pt-p", pr.toFixed(4));
  }
  let tk = false;
  addEventListener(
    "scroll",
    () => {
      if (!tk) {
        tk = true;
        requestAnimationFrame(() => {
          tk = false;
          upd();
        });
      }
    },
    { passive: true },
  );
  addEventListener("resize", upd);
  addEventListener("hashchange", () => setTimeout(upd, 450));
  set(0);
  upd();
})();
/* brand seals: rotating circular text */
document.querySelectorAll(".seal").forEach((s, n) => {
  const txt = (s.dataset.seal || "").toUpperCase(),
    id = "sealPath" + n;
  s.innerHTML = `<svg viewBox="0 0 120 120" aria-hidden="true"><defs><path id="${id}" d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0"/></defs><text><textPath href="#${id}">${txt.repeat(Math.max(1, Math.round(64 / txt.length)))}</textPath></text></svg><span class="core">${s.dataset.core || ""}</span>`;
});
/* manifesto: words light up with scroll */
(function () {
  const p = $("#maniTxt");
  if (!p) return;
  const em = ["central", "purpose."];
  p.innerHTML = p.textContent
    .split(" ")
    .map(
      (w) =>
        `<span class="mw">${em.includes(w) ? "<em>" + w + "</em>" : w}</span>`,
    )
    .join(" ");
  const ws = [...p.querySelectorAll(".mw")];
  let tk = false;
  function upd() {
    tk = false;
    if (!$("#v-home").classList.contains("on")) return;
    const r = p.getBoundingClientRect(),
      vh = innerHeight;
    const pr = Math.max(
      0,
      Math.min(1, (vh * 0.85 - r.top) / (r.height + vh * 0.35)),
    );
    const lit = pr * ws.length;
    ws.forEach((w, i) =>
      w.style.setProperty(
        "--o",
        reduce ? 1 : Math.max(0.14, Math.min(1, lit - i + 0.14)).toFixed(2),
      ),
    );
  }
  addEventListener(
    "scroll",
    () => {
      if (!tk) {
        tk = true;
        requestAnimationFrame(upd);
      }
    },
    { passive: true },
  );
  addEventListener("hashchange", () => setTimeout(upd, 450));
  upd();
})();
/* recipes slider, built from the recipes printed on the packs */
(function () {
  const tr = $("#rcTrack");
  if (!tr) return;
  const seen = new Set(),
    list = [];
  P.forEach((p) => {
    const d = DETAILS[p.id];
    if (d && d.recipe && !seen.has(d.recipe.title)) {
      seen.add(d.recipe.title);
      list.push([p, d.recipe]);
    }
  });
  tr.innerHTML = list
    .map(
      ([p, rc]) =>
        `<a class="rc-card" href="#product/${p.id}"><small>${rc.sub}</small><h3>${rc.title}</h3><p>Made with Century ${p.name}.</p><div class="rc-steps" role="tablist" aria-label="Recipe steps">${rc.steps.map((_, k) => `<button type="button" aria-label="Step ${k + 1}"></button>`).join("")}</div><div class="rc-stxt">${rc.steps.map((st, k) => `<p class="rc-st"><b>Step ${k + 1}</b>${st}</p>`).join("")}</div><img decoding="async" data-lz="${IMG[p.img[0]]}" alt=""><div class="rc-n"><span>${rc.steps.length} steps</span><i>Cook along</i></div></a>`,
    )
    .join("");
  /* each card plays its recipe step by step; the bars show where you are */
  const SD = 3200;
  const cs = [...tr.children].map((cd) => ({
    cd,
    i: 0,
    b: [...cd.querySelectorAll(".rc-steps button")],
    s: [...cd.querySelectorAll(".rc-st")],
    hold: false,
  }));
  function showStep(o, k) {
    o.i = (k + o.s.length) % o.s.length;
    o.s.forEach((x, j) => x.classList.toggle("on", j === o.i));
    o.b.forEach((x, j) => {
      x.classList.toggle("done", j < o.i);
      x.classList.remove("on");
    });
    void o.cd.offsetWidth;
    o.b[o.i].classList.add("on");
  }
  cs.forEach((o) => {
    showStep(o, 0);
    o.b.forEach((x, j) =>
      x.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        showStep(o, j);
      }),
    );
    if (matchMedia("(pointer:fine)").matches) {
      o.cd.addEventListener("pointerenter", () => {
        o.hold = true;
        o.cd.classList.add("hold");
      });
      o.cd.addEventListener("pointerleave", () => {
        o.hold = false;
        o.cd.classList.remove("hold");
      });
    }
  });
  let rcVis = false;
  new IntersectionObserver((e) => {
    rcVis = e[0].isIntersecting;
  }).observe(tr);
  tr.style.setProperty("--sd", SD + "ms");
  setInterval(() => {
    if (!rcVis || reduce || !$("#v-home").classList.contains("on")) return;
    cs.forEach((o) => {
      if (!o.hold) showStep(o, o.i + 1);
    });
  }, SD);
  const cards = [...tr.children],
    root = $("#rcps");
  let i = 0,
    t = null,
    hov = false;
  const vis = () =>
    Math.max(
      1,
      Math.floor(
        tr.parentElement.clientWidth /
        (cards[0].getBoundingClientRect().width + 22),
      ),
    );
  const maxI = () => Math.max(0, cards.length - vis());
  function paint() {
    i = Math.min(i, maxI());
    const w = cards[0].getBoundingClientRect().width + 22;
    tr.style.transform = `translateX(${-i * w}px)`;
    root.style.setProperty("--rc", maxI() ? (i / maxI()).toFixed(3) : 1);
  }
  function go(n) {
    const m = maxI();
    i = n > m ? 0 : n < 0 ? m : n;
    paint();
    sched();
  }
  function sched() {
    clearTimeout(t);
    if (!reduce && !hov && $("#v-home").classList.contains("on"))
      t = setTimeout(() => go(i + 1), 3800);
  }
  root.querySelector(".rc-prev").onclick = () => go(i - 1);
  root.querySelector(".rc-next").onclick = () => go(i + 1);
  if (matchMedia("(pointer:fine)").matches) {
    tr.addEventListener("pointerenter", () => {
      hov = true;
      sched();
    });
    tr.addEventListener("pointerleave", () => {
      hov = false;
      sched();
    });
  }
  let sx = null,
    sy = null;
  tr.addEventListener(
    "touchstart",
    (e) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    },
    { passive: true },
  );
  tr.addEventListener("touchend", (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx,
      dy = e.changedTouches[0].clientY - sy;
    sx = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy))
      go(i + (dx < 0 ? 1 : -1));
  });
  addEventListener("resize", paint);
  addEventListener("hashchange", () =>
    setTimeout(() => {
      paint();
      sched();
    }, 400),
  );
  paint();
  sched();
})();
/* router */
const menuT = $(".menu-t");
menuT.onclick = () => {
  const o = document.body.classList.toggle("menu-open");
  menuT.setAttribute("aria-expanded", o);
};
const curtain = $(".curtain");
let first = true;
const TITLES = {
  home: "Century | Soya Chunks, Makhana, Besan, Poha & Jaggery | Dinero FoodWorks",
  products: "Products: Soya Chunks, Makhana, Pulses, Besan, Poha | Century",
  services: "Our Services for Retail and HoReCa | Century",
  about: "About Century and Dinero FoodWorks | Century",
  contact: "Contact Century | Enquiry, WhatsApp and Call Back",
};
function apply() {
  const h = (location.hash || "#home").slice(1);
  let [v, sub] = h.split("/");
  if (
    !["home", "products", "services", "about", "contact", "product"].includes(v)
  )
    v = "home";
  if (v === "product") renderProduct(sub);
  else if (typeof pdFxStop === "function" && pdFxStop) pdFxStop();
  document
    .querySelectorAll(".view")
    .forEach((x) => x.classList.toggle("on", x.id === "v-" + v));
  const navV = v === "product" ? "products" : v;
  document
    .querySelectorAll("nav.main a")
    .forEach((a) =>
      a.getAttribute("href") === "#" + navV
        ? a.setAttribute("aria-current", "page")
        : a.removeAttribute("aria-current"),
    );
  document.body.classList.remove("menu-open");
  menuT.setAttribute("aria-expanded", false);
  document.body.classList.toggle("on-product", v === "product");
  if (v === "products") setFilter(CATS.some((c) => c[0] === sub) ? sub : "all");
  if (v === "home") {
    clearInterval(timer);
    if (heroS.i === 0)
      requestAnimationFrame(() => {
        layout();
        restart();
      });
    window.restartSeeds && window.restartSeeds();
    heroS.restartSlide();
  } else clearInterval(timer);
  if (v === "products") {
    prodS.restartSlide();
    window.restartSeeds && window.restartSeeds();
  }
  if (window.__toGrid && v === "products") {
    window.__toGrid = false;
    requestAnimationFrame(() =>
      goScroll({
        top: $("#filters").getBoundingClientRect().top + scrollY - 20,
        behavior: "instant",
      }),
    );
  } else goScroll({ top: 0, behavior: "instant" });
  window.__toGrid = false;
  const view = $("#v-" + v);
  arm(view);
  armCards(view);
  if (v !== "product") document.title = TITLES[v];
  hdr.classList.remove("hide");
  const crr = document.querySelector(".cur-r");
  crr && crr.classList.remove("view", "link");
  document.body.classList.remove("hdr-h");
  onScroll();
}
function route() {
  if (first || reduce) {
    first = false;
    apply();
    return;
  }
  curtain.classList.remove("run");
  void curtain.offsetWidth;
  curtain.classList.add("run");
  setTimeout(apply, 160);
  setTimeout(() => curtain.classList.remove("run"), 420);
}
addEventListener("hashchange", route);
route();