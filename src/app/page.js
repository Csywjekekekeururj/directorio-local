<!DOCTYPE html>
<html lang="es-MX">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Marisquería Entre Amigos | Aguachiles, ceviches y charolas</title>
<meta name="description" content="Aguachiles, ceviches, cócteles, charolas y ostiones para compartir. Pide por WhatsApp. Envío a domicilio con costo extra.">
<meta name="theme-color" content="#0F2942">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,800;9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com/3.4.17"></script>
<script>
tailwind.config={theme:{extend:{colors:{mar:{950:'#0A1D30',900:'#0F2942',700:'#334E68',500:'#486581',100:'#E2E8F0'},sol:{500:'#F59E0B',600:'#EA580C'},arena:'#FAF8F5'}}}}
</script>
<style>
html{scroll-behavior:smooth;scroll-padding-top:130px}
body{font-family:'Plus Jakarta Sans',system-ui,sans-serif}
.disp{font-family:Fraunces,Georgia,serif}
.olas{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='28' viewBox='0 0 120 28'%3E%3Cpath d='M0 14c10-9 20-9 30 0s20 9 30 0 20-9 30 0 20 9 30 0' fill='none' stroke='%23fff' stroke-opacity='.07' stroke-width='2'/%3E%3C/svg%3E")}
.chip[aria-pressed="true"]{background:#0F2942;color:#fff;border-color:#0F2942}
.opt[aria-pressed="true"]{background:#0F2942;color:#fff;border-color:#0F2942}
.opt:not([aria-pressed="true"]):hover{border-color:#0F2942}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important;animation:none!important}}
</style>
</head>
<body class="bg-arena text-mar-900 antialiased">
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<symbol id="helm" viewBox="-110 -110 220 220"><g fill="none" stroke="currentColor" stroke-linecap="round"><circle r="60" stroke-width="10"/><circle r="15" stroke-width="8"/>
<g id="sp"><path d="M0-15V-94" stroke-width="9"/><circle cy="-100" r="8" fill="currentColor" stroke="none"/></g>
<use href="#sp" transform="rotate(45)"/><use href="#sp" transform="rotate(90)"/><use href="#sp" transform="rotate(135)"/><use href="#sp" transform="rotate(180)"/><use href="#sp" transform="rotate(225)"/><use href="#sp" transform="rotate(270)"/><use href="#sp" transform="rotate(315)"/></g></symbol>
</defs></svg>

<header class="sticky top-0 z-30 bg-arena/95 backdrop-blur border-b border-slate-200">
  <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
    <a href="#inicio" class="flex items-center gap-2 text-mar-900">
      <svg class="w-8 h-8 text-orange-600" aria-hidden="true"><use href="#helm"/></svg>
      <span class="disp font-black text-lg leading-none">Entre Amigos</span>
    </a>
    <nav class="hidden md:flex gap-7 text-sm font-semibold text-slate-600">
      <a class="hover:text-mar-900" href="#promo">Para compartir</a><a class="hover:text-mar-900" href="#menu">La carta</a><a class="hover:text-mar-900" href="#contacto">Contacto</a>
    </nav>
    <button id="openCart" class="bg-mar-900 hover:bg-mar-700 text-white font-bold rounded-full pl-4 pr-2 py-2 text-sm flex items-center gap-2" aria-label="Abrir mi pedido">
      Mi pedido <span id="cartCount" class="inline-flex min-w-[1.6rem] h-6 items-center justify-center rounded-full bg-orange-600 text-white text-xs px-1.5">0</span>
    </button>
  </div>
</header>

<main id="inicio">
<section class="relative bg-mar-900 olas text-white overflow-hidden">
  <svg class="absolute -right-24 -top-10 w-[34rem] max-w-none text-white/[.07]" aria-hidden="true"><use href="#helm"/></svg>
  <div class="relative max-w-6xl mx-auto px-4 pt-16 pb-20 sm:pt-24 sm:pb-28">
    <svg class="w-14 h-14 text-amber-400 mb-5" aria-hidden="true"><use href="#helm"/></svg>
    <h1 class="disp font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.98] max-w-4xl">Marisquería Entre Amigos</h1>
    <p class="mt-6 text-lg sm:text-xl text-slate-200 max-w-xl">Mariscos frescos, brisa de costa y buena compañía. Pide desde casa o junta a los tuyos.</p>
    <div class="mt-9 flex flex-wrap gap-3">
      <a href="#menu" class="bg-amber-400 hover:bg-amber-300 text-mar-900 font-extrabold rounded-xl px-7 py-3.5">Ver el menú</a>
      <a id="waHero" target="_blank" rel="noopener" class="bg-green-600 hover:bg-green-700 text-white font-extrabold rounded-xl px-7 py-3.5">Pedir por WhatsApp</a>
    </div>
  </div>
  <div class="relative bg-amber-400 text-mar-900">
    <div class="max-w-6xl mx-auto px-4 py-3 text-sm sm:text-base font-bold flex flex-wrap justify-center gap-x-3 gap-y-1 text-center">
      <span>Envío a domicilio (costo extra)</span><span aria-hidden="true">•</span><span>Pedidos directos al <a href="tel:+529624213433" class="underline">962 421 3433</a></span>
    </div>
  </div>
</section>

<section id="promo" class="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-5 gap-8 items-center">
  <div class="md:col-span-3">
    <h2 class="disp font-black text-4xl sm:text-5xl leading-tight">Ideal para compartir entre amigos</h2>
    <p class="mt-4 text-lg text-slate-600 max-w-xl">Reuniones, comidas largas o pedido desde casa. Nuestras charolas mixtas rinden para 1–2, 4 o 6 personas.</p>
  </div>
  <div class="md:col-span-2 bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
    <p class="font-extrabold text-orange-600">Envío disponible</p>
    <p class="mt-1 text-slate-600">Con costo extra. Te confirmamos el total por WhatsApp antes de salir.</p>
  </div>
</section>

<section id="menu" class="pb-20">
  <div class="max-w-6xl mx-auto px-4 flex items-center gap-4">
    <h2 class="disp font-black text-4xl sm:text-5xl">La carta</h2><span class="h-px flex-1 bg-slate-300"></span>
  </div>
  <div class="sticky top-16 z-20 bg-arena/95 backdrop-blur border-b border-slate-200 mt-5 py-3">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-3 md:items-center">
      <input id="q" type="search" placeholder="Buscar: aguachile, ostiones, charola..." aria-label="Buscar platillo" class="w-full md:w-72 rounded-xl border border-slate-300 bg-white px-4 py-2.5 focus:outline-none focus:border-mar-900">
      <div id="chips" class="flex gap-2 overflow-x-auto pb-1 md:pb-0"></div>
    </div>
  </div>
  <div class="max-w-6xl mx-auto px-4 mt-8">
    <div id="grid" class="grid gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3"></div>
  </div>
</section>
</main>

<footer id="contacto" class="bg-mar-900 olas text-white">
  <div class="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-10">
    <div>
      <svg class="w-12 h-12 text-amber-400" aria-hidden="true"><use href="#helm"/></svg>
      <p class="disp font-black text-2xl mt-3">Marisquería Entre Amigos</p>
      <p class="mt-2 text-slate-300">Mariscos para compartir.</p>
    </div>
    <div>
      <p class="font-extrabold text-amber-400">Pedidos y dudas</p>
      <a href="tel:+529624213433" class="block mt-2 text-2xl font-extrabold">962 421 3433</a>
      <a id="waFoot" target="_blank" rel="noopener" class="inline-block mt-3 bg-green-600 hover:bg-green-700 rounded-lg px-4 py-2.5 font-bold">Escribir por WhatsApp</a>
    </div>
    <div>
      <p class="font-extrabold text-amber-400">Envío a domicilio</p>
      <p class="mt-2 text-slate-200">Disponible con costo extra.</p>
      <button id="share" class="mt-3 border border-white/50 hover:bg-white hover:text-mar-900 rounded-lg px-4 py-2.5 font-bold">Compartir esta página</button>
    </div>
  </div>
  <p class="text-center text-slate-400 text-sm pb-24 md:pb-8">Precios en pesos mexicanos. Sujetos a cambio sin previo aviso.</p>
</footer>

<script>
tailwind.config={theme:{extend:{colors:{mar:{950:'#071a33',900:'#0b2545',700:'#13406e',500:'#1f6fa8',100:'#dcebf7'},sol:{500:'#f59e0b',600:'#ea7a0c'},arena:'#fdf8ef'}}}}
</script>
<style>
html{scroll-behavior:smooth;scroll-padding-top:128px}
body{font-family:Figtree,system-ui,sans-serif}
.disp{font-family:Fraunces,Georgia,serif}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important;animation:none!important}}
.chip[aria-pressed="true"]{background:#0b2545;color:#fff;border-color:#0b2545}
</style>
</head>
<body class="bg-arena text-mar-900 antialiased">

<header class="sticky top-0 z-30 bg-mar-900 text-white shadow">
  <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
    <a href="#inicio" class="disp font-black text-lg sm:text-xl leading-none">Entre Amigos <span class="text-sol-500">·</span> <span class="font-bold text-white/80 text-sm hidden sm:inline">Marisquería</span></a>
    <nav class="hidden md:flex gap-6 text-sm font-semibold text-white/80">
      <a class="hover:text-white" href="#promo">Promoción</a><a class="hover:text-white" href="#menu">Menú</a><a class="hover:text-white" href="#contacto">Contacto</a>
    </nav>
    <button id="openCart" class="relative bg-sol-500 hover:bg-sol-600 text-mar-950 font-bold rounded-full px-4 py-2 text-sm" aria-label="Abrir mi pedido">
      Mi pedido <span id="cartCount" class="ml-1 inline-flex min-w-[1.4rem] h-6 items-center justify-center rounded-full bg-mar-900 text-white text-xs px-1">0</span>
    </button>
  </div>
</header>

<main id="inicio">
<section class="relative bg-gradient-to-b from-mar-900 via-mar-700 to-mar-500 text-white overflow-hidden">
  <div class="max-w-6xl mx-auto px-4 pt-14 pb-28 sm:pt-20 sm:pb-36 grid md:grid-cols-5 gap-8 items-center">
    <div class="md:col-span-3">
      <p class="font-semibold text-sol-500 mb-3">Mariscos frescos, ambiente de costa</p>
      <h1 class="disp font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">Marisquería Entre Amigos</h1>
      <p class="mt-5 text-lg sm:text-xl text-white/85 max-w-xl">Aguachiles, ceviches, cócteles, charolas y ostiones para disfrutar en buena compañía. Pide desde donde estés.</p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a href="#menu" class="bg-sol-500 hover:bg-sol-600 text-mar-950 font-bold rounded-xl px-6 py-3 shadow-lg">Ver el menú</a>
        <a id="waHero" target="_blank" rel="noopener" class="bg-[#16A34A] hover:bg-[#15803D] text-white font-bold rounded-xl px-6 py-3 shadow-lg">Pedir por WhatsApp</a>
      </div>
    </div>
    <div class="md:col-span-2 hidden md:block" aria-hidden="true">
      <svg viewBox="0 0 320 320" class="w-full max-w-sm ml-auto">
        <circle cx="160" cy="160" r="150" fill="#f59e0b"/>
        <circle cx="160" cy="160" r="112" fill="#0b2545"/>
        <path d="M70 175c25-40 70-55 110-40 22 8 38 22 58 8-4 28-26 52-62 58-40 6-86-4-106-26z" fill="#f97316"/>
        <path d="M238 143l32-24-8 38z" fill="#f97316"/>
        <circle cx="106" cy="160" r="6" fill="#fdf8ef"/>
        <path d="M60 232c30 14 60 14 100 0s70-14 100 0" stroke="#dcebf7" stroke-width="6" fill="none" stroke-linecap="round"/>
      </svg>
    </div>
  </div>
  <svg class="absolute bottom-0 left-0 w-full h-16 sm:h-24" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true"><path fill="#fdf8ef" d="M0 64c120 40 240 40 360 8s240-48 360-24 240 64 360 56 240-40 360-24v40H0z"/></svg>
</section>

<section id="promo" class="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-5">
  <div class="md:col-span-2 bg-white rounded-2xl border-2 border-mar-900 p-6 shadow-[6px_6px_0_#0b2545]">
    <h2 class="disp font-black text-3xl">Ideal para compartir</h2>
    <p class="mt-2 text-mar-700 text-lg">Entre amigos, en reuniones o pidiendo desde casa. Las charolas mixtas rinden para 1–2, 4 o 6 personas.</p>
  </div>
  <div class="bg-sol-500 rounded-2xl border-2 border-mar-900 p-6 shadow-[6px_6px_0_#0b2545]">
    <h2 class="disp font-black text-2xl">Envío disponible</h2>
    <p class="mt-2 font-semibold">Con costo extra. Te confirmamos el total por WhatsApp.</p>
  </div>
</section>

<section id="menu" class="pb-16">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="disp font-black text-4xl">El menú</h2>
    <p class="text-mar-700 mt-1">Elige tu opción, agrégala al pedido o mándala directo por WhatsApp.</p>
  </div>
  <div class="sticky top-16 z-20 bg-arena/95 backdrop-blur border-b border-mar-100 mt-5 py-3">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-3 md:items-center">
      <input id="q" type="search" placeholder="Buscar: aguachile, ostiones, charola..." aria-label="Buscar platillo" class="w-full md:w-72 rounded-xl border-2 border-mar-900/20 bg-white px-4 py-2 focus:outline-none focus:border-mar-500">
      <div id="chips" class="flex gap-2 overflow-x-auto pb-1 md:pb-0"></div>
    </div>
  </div>
  <div class="max-w-6xl mx-auto px-4 mt-6">
    <div id="grid" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"></div>
  </div>
</section>
</main>

<footer id="contacto" class="bg-mar-900 text-white">
  <div class="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
    <div>
      <p class="disp font-black text-2xl">Marisquería Entre Amigos</p>
      <p class="mt-2 text-white/75">Mariscos para compartir.</p>
    </div>
    <div>
      <p class="font-bold text-sol-500">Pedidos y dudas</p>
      <a href="tel:+529624213433" class="block mt-2 text-xl font-bold">962 421 3433</a>
      <a id="waFoot" target="_blank" rel="noopener" class="inline-block mt-3 bg-[#16A34A] rounded-lg px-4 py-2 font-bold">Escribir por WhatsApp</a>
    </div>
    <div>
      <p class="font-bold text-sol-500">Envío</p>
      <p class="mt-2 text-white/85">Envío disponible con costo extra.</p>
      <button id="share" class="mt-3 border-2 border-white/60 hover:bg-white hover:text-mar-900 rounded-lg px-4 py-2 font-bold">Compartir esta página</button>
    </div>
  </div>
  <p class="text-center text-white/50 text-sm pb-24 md:pb-8">Precios en pesos mexicanos. Sujetos a cambio sin previo aviso.</p>
</footer>

<button id="fab" class="fixed z-30 left-4 right-4 bottom-4 md:hidden hidden bg-sol-500 text-mar-950 font-bold rounded-2xl py-3 shadow-xl border-2 border-mar-900"></button>
<div id="ov" class="fixed inset-0 bg-black/60 z-40 hidden"></div>

<aside id="cart" role="dialog" aria-modal="true" aria-label="Mi pedido" class="fixed z-50 inset-x-0 bottom-0 max-h-[92vh] sm:inset-y-0 sm:right-0 sm:left-auto sm:w-[430px] sm:max-h-none bg-arena rounded-t-3xl sm:rounded-none flex flex-col translate-y-full sm:translate-y-0 sm:translate-x-full transition-transform duration-300" aria-hidden="true">
  <div class="flex items-center justify-between px-5 py-4 border-b border-mar-100">
    <h2 class="disp font-black text-2xl">Mi pedido</h2>
    <button id="closeCart" class="w-10 h-10 rounded-full border-2 border-mar-900/20" aria-label="Cerrar">✕</button>
  </div>
  <div class="flex-1 overflow-y-auto px-5 py-4">
    <div id="items"></div>
    <div class="mt-5 grid gap-3 text-sm font-semibold">
      <label>Tu nombre<input id="nm" autocomplete="name" class="mt-1 w-full rounded-lg border-2 border-mar-900/20 bg-white px-3 py-2 font-normal"></label>
      <label>¿Cómo lo quieres?
        <select id="md" class="mt-1 w-full rounded-lg border-2 border-mar-900/20 bg-white px-3 py-2 font-normal"><option>Envío a domicilio (costo extra)</option><option>Paso a recogerlo</option></select>
      </label>
      <label id="adl">Dirección y referencias<textarea id="ad" rows="2" class="mt-1 w-full rounded-lg border-2 border-mar-900/20 bg-white px-3 py-2 font-normal"></textarea></label>
      <label>Notas<textarea id="nt" rows="2" placeholder="Sin cebolla, bien picoso, etc." class="mt-1 w-full rounded-lg border-2 border-mar-900/20 bg-white px-3 py-2 font-normal"></textarea></label>
    </div>
  </div>
  <div class="px-5 py-4 border-t border-mar-100">
    <div class="flex justify-between disp font-black text-2xl mb-1"><span>Subtotal</span><span id="tot">$0</span></div>
    <p class="text-sm text-mar-700 mb-3">El envío tiene costo extra y se confirma por WhatsApp.</p>
    <a id="send" target="_blank" rel="noopener" aria-disabled="true" class="block text-center bg-[#16A34A] text-white font-bold rounded-xl py-3 aria-disabled:opacity-40 aria-disabled:pointer-events-none">Enviar pedido por WhatsApp</a>
    <button id="clr" class="mt-2 w-full text-sm font-semibold text-mar-700 underline">Vaciar pedido</button>
  </div>
</aside>
<div id="toast" class="fixed left-1/2 -translate-x-1/2 bottom-24 z-[60] bg-mar-900 text-white font-bold px-5 py-2 rounded-full opacity-0 pointer-events-none transition-opacity" role="status"></div>

<script>
const WA="529624213433", NOMBRE="Marisquería Entre Amigos";
const CATS=[["all","Todos"],["ac","Aguachiles y Ceviches"],["ct","Cócteles y Tostis"],["co","Charolas y Ostiones"],["be","Bebidas"]];
const MIX="Pulpo, camarones, atún y camarones curtidos con limón";
const M=[
{id:"agua",n:"Aguachiles",d:"Elige tu sabor: verde, rojo, negro o mango.",c:"ac",o:[["Verde",180],["Rojo",180],["Negro",180],["Mango",180]]},
{id:"cevc",n:"Ceviche de camarón",d:"Preparado al momento.",c:"ac",o:[["",160]]},
{id:"cevp",n:"Ceviche de pescado",d:"Preparado al momento.",c:"ac",o:[["",150]]},
{id:"cevm",n:"Ceviche mixto",d:"Pescado y camarón.",c:"ac",o:[["",200]]},
{id:"cevk",n:"Ceviche de camarón cocido",d:"Preparado al momento.",c:"ac",o:[["",200]]},
{id:"ens",n:"Ensalada de marisco",d:"Pulpo, camarones, atún y camarones curtidos con limón.",c:"ac",o:[["",280]]},
{id:"coc",n:"Cócteles de camarón",d:"Elige tu tamaño.",c:"ct",o:[["Mediano (Md)",130],["Grande (Grd)",160]]},
{id:"camp",n:"Cócteles campechanos",d:"Elige tu tamaño.",c:"ct",o:[["Mediano (Md)",150],["Grande (Grd)",200]]},
{id:"tosa",n:"Tosti aguachile",d:"Sobre 1 tostito.",c:"ct",o:[["",150]]},
{id:"tosc",n:"Tosti ceviche",d:"Sobre 1 tostito.",c:"ct",o:[["",150]]},
{id:"ch2",n:"Charola mixta para 1–2 personas",d:MIX+".",c:"co",o:[["",300]]},
{id:"ch4",n:"Charola mixta para 4 personas",d:MIX+".",c:"co",o:[["",700]]},
{id:"ch6",n:"Charola mixta para 6 personas",d:MIX+" y ceviche de camarón o pescado.",c:"co",o:[["",1300]]},
{id:"ost",n:"Ostiones en su concha",d:"Preparados. Elige cuántas piezas.",c:"co",o:[["6 piezas",100],["12 piezas",200]]},
{id:"mich",n:"Michelada clásica",d:"Bien fría.",c:"be",o:[["",100]]},
{id:"ref",n:"Refrescos embotellados",d:"Elige tu sabor.",c:"be",o:[["Coca-Cola",25],["Manzanita",25],["Sprite",25],["Mirinda",25]]},
{id:"agu",n:"Agua embotellada",d:"",c:"be",o:[["",10]]}
];
const $=s=>document.querySelector(s), fmt=n=>"$"+n.toLocaleString("es-MX");
let cat="all",q="",cart=[];
try{cart=JSON.parse(localStorage.getItem("ea-cart")||"[]")}catch(e){}
const save=()=>{try{localStorage.setItem("ea-cart",JSON.stringify(cart))}catch(e){}};
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const nom=(it,l)=>l?`${it.n} (${l})`:it.n;

$("#waHero").href=wa(`Hola, quiero hacer un pedido en ${NOMBRE}.`);
$("#waFoot").href=wa(`Hola, tengo una duda sobre ${NOMBRE}.`);

function chips(){$("#chips").innerHTML=CATS.map(([k,l])=>`<button class="chip whitespace-nowrap rounded-full border border-slate-300 bg-white px-4 py-2 font-semibold text-sm" aria-pressed="${k===cat}" data-cat="${k}">${l}</button>`).join("")}
function card(m){
  const star=m.id.startsWith("ch"),multi=m.o.length>1,diff=new Set(m.o.map(o=>o[1])).size>1;
  return `<article data-id="${m.id}" data-sel="0" class="relative bg-white rounded-2xl p-5 flex flex-col ${star?"border-2 border-orange-600 shadow-[0_12px_32px_-14px_rgba(234,88,12,.55)]":"border border-slate-200 shadow-sm"}">
    ${star?`<span class="absolute -top-3 left-5 bg-amber-400 text-mar-900 text-xs font-extrabold px-3 py-1 rounded-full">Ideal para compartir</span>`:""}
    <div class="flex items-start justify-between gap-3">
      <h3 class="disp font-extrabold text-xl leading-snug text-mar-900">${m.n}</h3>
      <span data-price class="shrink-0 rounded-full bg-orange-600 text-white font-extrabold px-3 py-1 text-lg">${fmt(m.o[0][1])}</span>
    </div>
    ${m.d?`<p class="mt-2 text-sm text-slate-500 flex-1">${m.d}</p>`:'<div class="flex-1"></div>'}
    ${multi?`<div class="mt-4 flex flex-wrap gap-2" role="group" aria-label="Opciones de ${m.n}">${m.o.map((o,i)=>`<button data-opt="${i}" aria-pressed="${i===0}" class="opt rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold">${o[0]}${diff?` · ${fmt(o[1])}`:""}</button>`).join("")}</div>`:""}
    <div class="mt-4 grid grid-cols-5 gap-2">
      <button data-act="add" class="col-span-3 bg-mar-900 hover:bg-mar-700 text-white font-bold rounded-xl py-2.5">Agregar</button>
      <button data-act="one" class="col-span-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl py-2.5 text-sm" aria-label="Pedir ${m.n} por WhatsApp">Pedir ya</button>
    </div>
  </article>`}
function grid(){
  const l=M.filter(m=>(cat==="all"||m.c===cat)&&(m.n+" "+m.d).toLowerCase().includes(q));
  if(!l.length){$("#grid").innerHTML=`<p class="col-span-full text-center py-10 border border-dashed border-slate-300 rounded-2xl text-slate-500">No encontramos eso. Prueba otra palabra o toca “Todos”.</p>`;return}
  $("#grid").innerHTML=(cat==="all"&&!q)?CATS.slice(1).map(([k,t])=>`<div class="col-span-full flex items-center gap-4 mt-6 first:mt-0"><h3 class="disp font-extrabold text-2xl text-mar-900">${t}</h3><span class="h-px flex-1 bg-slate-300"></span></div>`+M.filter(m=>m.c===k).map(card).join("")).join(""):l.map(card).join("");
}
function sel(card){const m=M.find(x=>x.id===card.dataset.id),i=+(card.dataset.sel||0);return{m,i,l:m.o[i][0],p:m.o[i][1]}}
function toast(t){const e=$("#toast");e.textContent=t;e.style.opacity=1;clearTimeout(toast.t);toast.t=setTimeout(()=>e.style.opacity=0,1400)}
const total=()=>cart.reduce((s,c)=>s+c.p*c.q,0), count=()=>cart.reduce((s,c)=>s+c.q,0);
function msg(){
  const dom=$("#md").selectedIndex===0;
  let t=`Hola, quiero hacer un pedido en ${NOMBRE}:\n\n`+cart.map(c=>`• ${c.q}x ${c.name} — ${fmt(c.p*c.q)}`).join("\n")+`\n\nSubtotal: ${fmt(total())}\n`;
  if(dom)t+="(El envío tiene costo extra, favor de confirmarlo)\n";
  if($("#nm").value.trim())t+=`Nombre: ${$("#nm").value.trim()}\n`;
  t+=`Entrega: ${$("#md").value}`+(dom&&$("#ad").value.trim()?` — ${$("#ad").value.trim()}`:"")+"\n";
  if($("#nt").value.trim())t+=`Notas: ${$("#nt").value.trim()}\n`;
  return t+"\n¿Me confirman disponibilidad y tiempo de entrega?";
}
function paint(){
  const n=count();
  $("#cartCount").textContent=n;
  const f=$("#fab");f.classList.toggle("hidden",!n);f.textContent=`Ver mi pedido (${n}) · ${fmt(total())}`;
  $("#tot").textContent=fmt(total());
  $("#items").innerHTML=n?cart.map((c,i)=>`<div class="flex justify-between gap-3 py-3 border-b border-dashed border-mar-900/25"><div><b>${c.name}</b><br><span class="text-sm text-mar-700">${fmt(c.p)} c/u</span></div><div class="flex items-center gap-2"><button data-dec="${i}" class="w-8 h-8 rounded-lg border-2 border-mar-900/30 font-bold" aria-label="Quitar uno">−</button><b>${c.q}</b><button data-inc="${i}" class="w-8 h-8 rounded-lg border-2 border-mar-900/30 font-bold" aria-label="Agregar uno">+</button></div></div>`).join(""):"<p class='py-6 text-mar-700'>Tu pedido está vacío. Agrega algo del menú.</p>";
  $("#adl").style.display=$("#md").selectedIndex===0?"block":"none";
  const s=$("#send");s.setAttribute("aria-disabled",n?"false":"true");s.href=n?wa(msg()):"#";
  save();
}
function openCart(o){const c=$("#cart");c.setAttribute("aria-hidden",!o);c.classList.toggle("translate-y-full",!o);c.classList.toggle("sm:translate-x-full",!o);$("#ov").classList.toggle("hidden",!o)}
function add(m,i){
  const key=m.id+"|"+i,f=cart.find(c=>c.key===key);
  f?f.q++:cart.push({key,name:nom(m,m.o[i][0]),p:m.o[i][1],q:1});
  paint();toast("Agregado a tu pedido");
}
document.addEventListener("click",e=>{
  const t=e.target.closest("button,a");if(!t)return;
  const card=t.closest("article");
  if(t.dataset.opt!==undefined){card.dataset.sel=t.dataset.opt;card.querySelectorAll("[data-opt]").forEach(b=>b.setAttribute("aria-pressed",b===t));card.querySelector("[data-price]").textContent=fmt(sel(card).p)}
  else if(t.dataset.cat){cat=t.dataset.cat;chips();grid()}
  else if(t.dataset.act==="add"){const s=sel(card);add(s.m,s.i)}
  else if(t.dataset.act==="one"){const s=sel(card);window.open(wa(`Hola, quiero pedir en ${NOMBRE}:\n• 1x ${nom(s.m,s.l)} — ${fmt(s.p)}\n\n¿Me confirman disponibilidad y envío (costo extra)?`),"_blank","noopener")}
  else if(t.dataset.inc!==undefined){cart[+t.dataset.inc].q++;paint()}
  else if(t.dataset.dec!==undefined){const c=cart[+t.dataset.dec];c.q--;if(c.q<1)cart.splice(+t.dataset.dec,1);paint();if(!cart.length)openCart(false)}
  else if(t.id==="openCart"||t.id==="fab")openCart(true);
  else if(t.id==="closeCart")openCart(false);
  else if(t.id==="clr"){cart=[];paint();openCart(false)}
  else if(t.id==="share"){
    const d={title:NOMBRE,text:"Mira el menú de Marisquería Entre Amigos y pide por WhatsApp:",url:location.href};
    if(navigator.share)navigator.share(d).catch(()=>{});
    else if(navigator.clipboard)navigator.clipboard.writeText(location.href).then(()=>toast("Enlace copiado"),()=>toast("Copia el enlace de la barra"));
  }
});
document.addEventListener("change",e=>{
  if(e.target.classList.contains("opt")){const a=e.target.closest("article"),s=sel(a);a.querySelector("[data-price]").textContent=fmt(s.p)}
  if(e.target.id==="md")paint();
});
$("#ov").onclick=()=>openCart(false);
document.addEventListener("keydown",e=>{if(e.key==="Escape")openCart(false)});
$("#q").oninput=e=>{q=e.target.value.toLowerCase().trim();grid()};
["#nm","#ad","#nt"].forEach(s=>$(s).addEventListener("input",paint));
chips();grid();paint();
</script>
</body>
</html>
