// Builds one static page per product in /p/<id>/ and a share image in /assets/share/<id>.jpg.
// Run from the repo root:  node tools/build-product-pages.mjs
// Needs: Python 3 with Pillow (for share images).
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const src = fs.readFileSync(path.join(root, "assets/js/main.js"), "utf8");
const grab = (name, close) => {
  const start = src.indexOf(`const ${name} = `);
  const end = src.indexOf(close, start);
  return new Function(`return ${src.slice(start + name.length + 9, end + close.length - 1)}`)();
};
const IMG = grab("IMG", "\n};");
const P = grab("P", "\n];");
const SITE = "https://thecentury.in";
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

// Share images (1200x630 JPG) built from each product's main pack photo.
const shareJobs = P.map((p) => ({
  out: `assets/share/${p.id}.jpg`,
  title: p.name,
  sub: `${p.wt} · ${p.line || p.type || ""}`.replace(/ · $/, ""),
  photo: IMG[p.img[0]],
}));
fs.mkdirSync(path.join(root, "assets/share"), { recursive: true });
execFileSync("python3", ["-c", `
import json,sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter
jobs=json.loads(sys.argv[1])
G='/usr/share/fonts/truetype/google-fonts/'
for j in jobs:
    W,H=1200,630
    bg=(251,245,230); green=(15,81,50); ink=(38,38,30)
    im=Image.new('RGB',(W,H),bg)
    glow=Image.new('RGB',(W,H),bg); ImageDraw.Draw(glow).ellipse((640,-140,1420,640),fill=(250,224,140))
    im=Image.blend(im,glow.filter(ImageFilter.GaussianBlur(120)),0.55)
    d=ImageDraw.Draw(im)
    logo=Image.open('assets/images/logo.png').convert('RGBA')
    logo=logo.resize((260,int(260*logo.height/logo.width)),Image.LANCZOS)
    im.paste(logo,(70,60),logo)
    t=j['title']; size=64
    f=ImageFont.truetype(G+'Poppins-Bold.ttf',size)
    while d.textlength(t,font=f)>560 and size>34:
        size-=2; f=ImageFont.truetype(G+'Poppins-Bold.ttf',size)
    d.text((70,250),t,font=f,fill=ink)
    d.text((70,250+size+18),j['sub'],font=ImageFont.truetype(G+'Poppins-Bold.ttf',30),fill=green)
    d.rounded_rectangle((70,520,420,574),radius=27,fill=green)
    d.text((100,530),'thecentury.in',font=ImageFont.truetype(G+'Poppins-Bold.ttf',26),fill=(255,248,225))
    p=Image.open(j['photo']).convert('RGBA')
    h=400; p=p.resize((int(h*p.width/p.height),h),Image.LANCZOS)
    if p.width>460: p=p.resize((460,int(460*p.height/p.width)),Image.LANCZOS)
    im.paste(p,(W-p.width-80,(H-p.height)//2),p)
    im.save(j['out'],quality=90,optimize=True)
`, JSON.stringify(shareJobs.map((j) => ({ ...j, out: path.join(root, j.out), photo: path.join(root, j.photo) })))], { cwd: root });

const css = `
:root{--bg:#fbf5e6;--ink:#26261e;--green:#0f5132;--yellow:#f5b520;--card:#fff;}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.6 Poppins,system-ui,sans-serif}
a{color:var(--green)}header{display:flex;align-items:center;justify-content:space-between;padding:18px 16px;max-width:1100px;margin:auto}
header img{height:44px}main{max-width:1100px;margin:auto;padding:8px 16px 48px;display:grid;gap:32px;grid-template-columns:1fr}
@media(min-width:800px){main{grid-template-columns:1fr 1fr;align-items:center;padding-top:24px}}
.pic{background:radial-gradient(circle at 50% 55%,#fbe18a,transparent 62%),#fff;border-radius:24px;display:grid;place-items:center;aspect-ratio:1/1.02;overflow:hidden}
.pic img{width:84%;height:84%;object-fit:contain}
.hi{color:var(--green);font-weight:600;margin:0}h1{font-size:clamp(2rem,4.6vw,3.2rem);line-height:1.08;margin:.2rem 0 .6rem}
.line{font-style:italic;font-weight:600;color:var(--green)}ul{padding-left:1.2rem}li{margin:.25rem 0}
.wt{display:inline-block;background:#fff;border-radius:999px;padding:6px 14px;font-weight:600;margin:8px 0 14px}
.cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:20px}.btn{display:inline-block;padding:14px 22px;border-radius:999px;font-weight:700;text-decoration:none}
.btn-y{background:var(--yellow);color:#1d1600}.btn-g{border:2px solid var(--green);color:var(--green)}
footer{max-width:1100px;margin:auto;padding:24px 16px 40px;font-size:14px;color:#55553f;border-top:1px solid #e8dfc4}
`;

const orgRef = { "@id": `${SITE}/#organization` };
for (const p of P) {
  const dir = path.join(root, "p", p.id);
  fs.mkdirSync(dir, { recursive: true });
  const url = `${SITE}/p/${p.id}/`;
  const title = `${p.name} (${p.wt}) | Century`;
  const desc = `${p.name}${p.hi ? " (" + p.hi + ")" : ""} by Century, ${p.wt}. ${p.desc} Made by Dinero FoodWorks. Enquire on thecentury.in or WhatsApp +91 86990 91009.`.slice(0, 300);
  const img = `${SITE}/${IMG[p.img[0]]}`;
  const share = `${SITE}/assets/share/${p.id}.jpg`;
  const ld = [
    { "@context": "https://schema.org", "@type": "Product", name: p.name, alternateName: p.hi, description: p.desc, image: [img], url, brand: { "@type": "Brand", name: "Century" }, manufacturer: orgRef, category: p.type || p.cat, size: p.wt, additionalProperty: (p.pts || []).map((x) => ({ "@type": "PropertyValue", name: "Feature", value: x })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Century", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE}/#products` },
      { "@type": "ListItem", position: 3, name: p.name, item: url }] },
  ];
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}" />
<meta name="robots" content="index, follow, max-image-preview:large" />
<link rel="canonical" href="${url}" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-L0Z47DC41M"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag("js", new Date());
      gtag("config", "G-L0Z47DC41M");
    </script>
<link rel="icon" type="image/png" href="/assets/images/favicon.png" />
<meta name="theme-color" content="#0f5132" />
<meta property="og:type" content="product" />
<meta property="og:site_name" content="Century" />
<meta property="og:locale" content="en_IN" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(desc)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${share}" />
<meta property="og:image:secure_url" content="${share}" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="${esc(p.name)} by Century, ${esc(p.wt)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(title)}" />
<meta name="twitter:description" content="${esc(desc)}" />
<meta name="twitter:image" content="${share}" />
<meta name="twitter:image:alt" content="${esc(p.name)} by Century, ${esc(p.wt)}" />
${ld.map((x) => `<script type="application/ld+json">${JSON.stringify(x)}</script>`).join("\n")}
<style>${css}</style>
</head>
<body>
<header><a href="/"><img src="/assets/images/logo.png" alt="Century home" /></a><a class="btn btn-g" href="/#products">All products</a></header>
<main>
  <div class="pic"><img src="/${IMG[p.img[0]]}" alt="${esc(p.name)} pack by Century, ${esc(p.wt)}" /></div>
  <section>
    ${p.hi ? `<p class="hi">${esc(p.hi)}</p>` : ""}
    <h1>${esc(p.name)}</h1>
    ${p.line ? `<p class="line">${esc(p.line)}</p>` : ""}
    <p>${esc(p.desc)}</p>
    <span class="wt">Pack size: ${esc(p.wt)}</span>
    ${p.pts && p.pts.length ? `<ul>${p.pts.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
    <div class="cta">
      <a class="btn btn-y" href="/#contact">Send an enquiry</a>
      <a class="btn btn-g" href="https://wa.me/918699091009?text=${encodeURIComponent("Hello Century, I would like to know more about " + p.name)}">WhatsApp us</a>
      <a class="btn btn-g" href="/#product/${p.id}">Full product view</a>
    </div>
  </section>
</main>
<footer>Century is the consumer brand of Dinero FoodWorks Pvt. Ltd., 44/7/1, Ludhiana Road, Nawanshahr 144514, Punjab, India. Toll-free 1800 296 7999 · century@thecentury.in</footer>
</body>
</html>
`;
  fs.writeFileSync(path.join(dir, "index.html"), html);
}
// Sitemap entries for product pages.
const urls = P.map((p) => `  <url>\n    <loc>${SITE}/p/${p.id}/</loc>\n    <lastmod>2026-11-25</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n    <image:image>\n      <image:loc>${SITE}/assets/share/${p.id}.jpg</image:loc>\n      <image:title>${esc(p.name)}</image:title>\n    </image:image>\n  </url>`).join("\n");
const sm = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const base = sm.replace(/\n  <url>\n    <loc>https:\/\/thecentury\.in\/p\/[\s\S]*?<\/url>/g, "").replace("</urlset>", `${urls}\n</urlset>`);
fs.writeFileSync(path.join(root, "sitemap.xml"), base);
console.log("built", P.length, "product pages");
