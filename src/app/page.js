"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useState } from "react";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Rye&family=Karla:wght@400;600;800&display=swap');

:root{--noche:#140a07;--carbon:#211109;--borde:#4a2a1a;--chile:#b3201a;--chile2:#d8352b;--nopal:#2c7a43;--oro:#f4a300;--crema:#f6e7c8;--rosa:#e4007c;--mute:#cdb593}
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:130px}
body{margin:0;background:var(--noche);color:var(--crema);font-family:Karla,system-ui,sans-serif;font-size:17px;line-height:1.55}
h1,h2,h3{font-family:Rye,Georgia,serif;font-weight:400;line-height:1.1;margin:0;letter-spacing:.02em}
a{color:inherit}
button{font:inherit;color:inherit;cursor:pointer}
:focus-visible{outline:3px solid var(--oro);outline-offset:2px}
.wrap{max-width:1120px;margin:0 auto;padding:0 20px}

.picado{display:flex;height:32px;overflow:hidden}
.picado span{flex:1 0 32px;clip-path:polygon(0 0,100% 0,100% 80%,87% 100%,75% 80%,62% 100%,50% 80%,37% 100%,25% 80%,12% 100%,0 80%)}
.picado span:nth-child(4n+1){background:var(--chile)}
.picado span:nth-child(4n+2){background:var(--oro)}
.picado span:nth-child(4n+3){background:var(--nopal)}
.picado span:nth-child(4n){background:var(--rosa)}
.serape{height:14px;background:repeating-linear-gradient(90deg,var(--chile) 0 28px,var(--oro) 28px 40px,var(--nopal) 40px 68px,var(--crema) 68px 76px,var(--rosa) 76px 96px)}

.top{position:sticky;top:0;z-index:20;background:var(--noche);border-bottom:1px solid var(--borde)}
.top .wrap{display:flex;align-items:center;justify-content:space-between;gap:12px;height:62px}
.logo{font-family:Rye,serif;font-size:21px;color:var(--oro);text-decoration:none}
.top nav{display:flex;gap:20px;align-items:center;font-weight:600}
.top nav a{text-decoration:none;color:var(--mute)}
.top nav a:hover{color:var(--crema)}
.estado{font-size:14px;font-weight:800;padding:3px 12px;border-radius:99px;border:1px solid currentColor}
.estado.si{color:#6fd28c}.estado.no{color:#ff8a7e}
@media(max-width:700px){.top nav a{display:none}}

.hero{padding:64px 0 56px;background:radial-gradient(ellipse at 70% 0%,#4a2411 0,transparent 60%)}
.hero h1{font-size:clamp(40px,8vw,88px);max-width:14ch;color:var(--crema)}
.hero p{max-width:50ch;font-size:19px;color:var(--mute);margin:20px 0 28px}
.cta{display:flex;gap:14px;flex-wrap:wrap}
.btn{display:inline-block;background:var(--chile);color:var(--crema);border:2px solid var(--chile);padding:13px 26px;font-weight:800;text-decoration:none;border-radius:4px;letter-spacing:.04em}
.btn:hover{background:var(--chile2);border-color:var(--chile2)}
.btn.ghost{background:transparent;border-color:var(--borde);color:var(--crema)}
.btn.ghost:hover{border-color:var(--oro);color:var(--oro)}

.cinta{background:var(--oro);color:var(--noche);overflow:hidden;white-space:nowrap}
.cinta div{display:inline-block;padding:9px 0;font-family:Rye,serif;animation:marq 32s linear infinite}
@keyframes marq{to{transform:translateX(-50%)}}

section{padding:60px 0}
h2{font-size:clamp(28px,5vw,44px);color:var(--oro);margin-bottom:8px}
.sub{color:var(--mute);max-width:56ch;margin:0 0 26px}

.dest{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--borde);background:var(--carbon);border-radius:6px;overflow:hidden}
.dest .info{padding:32px;display:flex;flex-direction:column;gap:12px;justify-content:center}
.dest h3{font-size:clamp(26px,4vw,38px);color:var(--crema)}
@media(max-width:760px){.dest{grid-template-columns:1fr}}

.promos{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px}
.promo{border:1px solid var(--borde);border-top:6px solid var(--oro);padding:20px;background:var(--carbon);border-radius:4px}
.promo:nth-child(2){border-top-color:var(--nopal)}
.promo:nth-child(3){border-top-color:var(--rosa)}
.promo h3{font-size:22px;margin-bottom:6px}
.promo p{margin:0;color:var(--mute)}

.barra{position:sticky;top:62px;z-index:10;background:var(--noche);padding:12px 0;border-bottom:1px solid var(--borde);margin-bottom:26px}
.barra .wrap{display:flex;flex-wrap:wrap;gap:12px;align-items:center}
.barra input{flex:1 1 220px;padding:11px 14px;background:var(--carbon);border:1px solid var(--borde);color:var(--crema);border-radius:4px;font:inherit}
.chips{display:flex;gap:8px;flex-wrap:wrap}
.chip{background:transparent;border:1px solid var(--borde);border-radius:99px;padding:6px 16px;font-weight:600}
.chip[aria-pressed="true"]{background:var(--oro);color:var(--noche);border-color:var(--oro)}

.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:24px}
.card{background:var(--carbon);border:1px solid var(--borde);border-radius:6px;overflow:hidden;display:flex;flex-direction:column}
.foto{position:relative;aspect-ratio:4/3;background:#3a1d10;overflow:hidden}
.foto img{width:100%;height:100%;object-fit:cover;display:block}
.emo{width:100%;height:100%;display:grid;place-items:center;font-size:72px;background:repeating-linear-gradient(135deg,#3a1d10 0 14px,#2d170d 14px 28px)}
.tag{position:absolute;top:10px;left:10px;background:var(--oro);color:var(--noche);font-size:13px;font-weight:800;border-radius:3px;padding:2px 10px}
.fav{position:absolute;top:8px;right:8px;width:38px;height:38px;border-radius:50%;background:#140a07cc;border:none;font-size:20px}
.cuerpo{padding:16px;display:flex;flex-direction:column;gap:8px;flex:1}
.cuerpo h3{font-size:20px;color:var(--crema)}
.cuerpo p{margin:0;color:var(--mute);font-size:15px;flex:1}
.chile{font-size:14px;color:var(--mute)}
.fila{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:4px}
.precio{font-family:Rye,serif;font-size:24px;color:var(--oro)}
.add{background:var(--chile);border:none;border-radius:4px;padding:8px 16px;font-weight:800;color:var(--crema)}
.add:hover{background:var(--chile2)}
.add:disabled{background:#4a2a1a;color:var(--mute);cursor:not-allowed}
.qty{display:flex;align-items:center;gap:8px}
.qty button{width:34px;height:34px;border:1px solid var(--oro);background:transparent;border-radius:4px;font-weight:800;color:var(--oro)}
.vacio{grid-column:1/-1;padding:28px;border:1px dashed var(--borde);text-align:center;border-radius:6px}

.pasos{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:22px;counter-reset:p}
.paso{border-left:5px solid var(--chile);padding-left:16px;counter-increment:p}
.paso h3{font-size:21px;color:var(--crema)}
.paso h3::before{content:counter(p) ". ";color:var(--oro)}
.paso p{margin:6px 0 0;color:var(--mute)}
.alt{background:var(--carbon);border-block:1px solid var(--borde)}
.resenas{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px}
.resenas blockquote{margin:0;padding:18px;border:1px solid var(--borde);border-radius:6px}
.resenas cite{display:block;margin-top:8px;font-weight:800;color:var(--oro);font-style:normal}
details{border-bottom:1px solid var(--borde);padding:14px 0}
summary{font-weight:800;font-size:18px;cursor:pointer}
details p{margin:8px 0 0;color:var(--mute)}
.contacto{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:26px}
.contacto h3{font-size:21px;color:var(--oro);margin-bottom:6px}
.contacto a{color:var(--crema)}
footer{padding:28px 0 100px;text-align:center;color:var(--mute);font-size:15px}

.fab{position:fixed;right:16px;bottom:16px;z-index:30;background:var(--chile);color:var(--crema);border:2px solid var(--oro);border-radius:99px;padding:12px 22px;font-weight:800;box-shadow:0 6px 20px #000a}
.ov{position:fixed;inset:0;background:#000a;z-index:35}
.cajon{position:fixed;top:0;right:0;bottom:0;width:min(440px,100%);background:var(--noche);border-left:2px solid var(--oro);z-index:40;display:flex;flex-direction:column;animation:ent .22s ease-out}
@keyframes ent{from{transform:translateX(100%)}}
.ch{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid var(--borde)}
.ch h3{font-size:24px;color:var(--oro)}
.x{width:38px;height:38px;border:1px solid var(--borde);background:transparent;border-radius:50%}
.cb{flex:1;overflow:auto;padding:16px 20px}
.li{display:flex;justify-content:space-between;gap:10px;padding:10px 0;border-bottom:1px dashed var(--borde)}
.form{display:grid;gap:12px;margin-top:18px}
.form label{display:grid;gap:4px;font-weight:800;font-size:15px}
.form input,.form select,.form textarea{padding:10px 12px;background:var(--carbon);border:1px solid var(--borde);color:var(--crema);border-radius:4px;font:inherit;font-weight:400}
.cf{padding:14px 20px 18px;border-top:1px solid var(--borde)}
.tot{display:flex;justify-content:space-between;font-family:Rye,serif;font-size:24px;margin-bottom:10px;color:var(--oro)}
.env{display:flex;justify-content:space-between;color:var(--mute);margin-bottom:6px;font-size:15px}
.wa{display:block;text-align:center;background:#1fa855;color:#fff;border-radius:4px;padding:14px;font-weight:800;text-decoration:none}
.wa[aria-disabled="true"]{opacity:.4;pointer-events:none}
.toast{position:fixed;left:50%;bottom:86px;transform:translateX(-50%);background:var(--crema);color:var(--noche);padding:8px 18px;border-radius:99px;z-index:50;font-weight:800}
@media(prefers-reduced-motion:reduce){*{animation:none!important;scroll-behavior:auto!important}}
`;

/* ============ CONFIGURA AQUÍ ============ */
const NEGOCIO = {
  nombre: "Sabor Tapachulteco",
  whatsapp: "", // formato 529621234567 (52 + 10 dígitos). Vacío hasta que el cliente lo dé
  instagram: "", // ej: https://instagram.com/usuario
  facebook: "",
  maps: "", // link de Google Maps
  direccion: "Tapachula, Chiapas",
  horarioTexto: "Por definir",
  abre: null, // hora de apertura (0-23), ej: 9. Si es null no se muestra Abierto/Cerrado
  cierra: null, // hora de cierre (0-23), ej: 21
  envio: 0, // costo de envío a domicilio en pesos (0 = no se cobra / se confirma)
};

// Fotos: links de Unsplash. Para cambiar una, pega otra URL completa en img (o usa U("photo-xxxx")).
// Si una foto falla al cargar, se muestra el emoji.
const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;
const PLATILLOS = [
  { id: 1, nombre: "Aguachile Especial", desc: "Camarón fresco bañado en salsa de la casa con pepino y cebolla morada.", precio: 160, cat: "Mariscos", img: U("photo-1669218687080-3995e806f302"), emoji: "🦐", picoso: 3, tag: "Favorito de la casa", destacado: true },
  { id: 2, nombre: "Platillo Mixto", desc: "Carne asada, chorizo, longaniza, guarnición de frijoles y totopos.", precio: 185, cat: "Carnes", img: U("photo-1555939594-58d7cb561ad1"), emoji: "🍖", picoso: 1, tag: "El más completo" },
  { id: 3, nombre: "Carne Asada", desc: "Corte asado al carbón acompañado de cebollitas asadas y chiles toreados.", precio: 150, cat: "Carnes", img: U("photo-1594041680534-e8c8cdebd659"), emoji: "🥩", picoso: 1 },
  { id: 4, nombre: "Mojarra Frita", desc: "Mojarra doradita al término perfecto con ensalada fresca y arroz.", precio: 140, cat: "Mariscos", img: U("photo-1665401015549-712c0dc5ef85"), emoji: "🐟", picoso: 0 },
  { id: 5, nombre: "Milanesa Rellena", desc: "Empanizada y rellena de jamón y queso fundido con papas a la francesa.", precio: 135, cat: "Platillos", img: U("photo-1580217593608-61931cefc821"), emoji: "🧀", picoso: 0 },
  { id: 6, nombre: "Costilla Frita", desc: "Crujiente por fuera y jugosa por dentro con sazón de la casa.", precio: 130, cat: "Carnes", img: U("photo-1562625964-ffe9b2f617fc"), emoji: "🍗", picoso: 1, tag: "Favorito" },
  { id: 7, nombre: "Chiles Rellenos Tradicionales", desc: "Capeados al estilo tradicional, rellenos de queso o carne con caldillo de tomate.", precio: 110, cat: "Platillos", img: U("photo-1750677637369-7fae4d9e361b"), emoji: "🫑", picoso: 2 },
  { id: 8, nombre: "Camaronera (Michelada c/ Camarón)", desc: "Michelada preparada con camarones. Especialidad de la casa.", precio: 95, cat: "Bebidas", img: U("photo-1784923000569-d258530c4f9b"), emoji: "🍹", picoso: 2, tag: "Especialidad" },
];

const PROMOS = [
  { t: "Combo de la semana", d: "Pide dos platillos y pregunta por el agua fresca de cortesía." },
  { t: "Entrega a domicilio", d: "Te confirmamos hora y costo por WhatsApp." },
  { t: "Pedidos para fiestas", d: "Reuniones y oficina. Avísanos con un día de anticipación." },
];

// Agrega reseñas reales: { nombre: "Mariana", texto: "..." }. Si está vacío, no se muestra la sección.
const RESENAS = [];

const FAQ = [
  ["¿Cómo se paga?", "Efectivo o transferencia. Lo eliges en el pedido y lo confirmamos por WhatsApp."],
  ["¿Cuánto tardan en entregar?", "Depende de tu zona y del día. Al recibir tu mensaje te damos la hora exacta."],
  ["¿Puedo cambiar o quitar ingredientes?", "Sí. Escríbelo en las notas del pedido."],
  ["¿Hacen pedidos grandes?", "Claro. Mándanos tu pedido con un día de anticipación."],
];
/* ========================================= */

const money = (n) => `$${n} MXN`;
const FORM0 = { nombre: "", modo: "A domicilio", dir: "", pago: "Efectivo", notas: "" };

function Foto({ src, emoji, alt }) {
  const [err, setErr] = useState(false);
  if (!src || err) return <div className="emo" aria-hidden="true">{emoji}</div>;
  return <img src={src} alt={alt} loading="lazy" onError={() => setErr(true)} />;
}

export default function Home() {
  const [cart, setCart] = useState({});
  const [favs, setFavs] = useState([]);
  const [form, setForm] = useState(FORM0);
  const [cat, setCat] = useState("Todo");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [abierto, setAbierto] = useState(null);
  const [listo, setListo] = useState(false);

  useEffect(() => {
    try {
      setCart(JSON.parse(localStorage.getItem("cart") || "{}"));
      setFavs(JSON.parse(localStorage.getItem("favs") || "[]"));
      setForm({ ...FORM0, ...JSON.parse(localStorage.getItem("form") || "{}") });
    } catch {}
    if (NEGOCIO.abre != null && NEGOCIO.cierra != null) {
      const h = new Date().getHours();
      setAbierto(h >= NEGOCIO.abre && h < NEGOCIO.cierra);
    }
    setListo(true);
  }, []);

  useEffect(() => {
    if (!listo) return;
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("favs", JSON.stringify(favs));
      localStorage.setItem("form", JSON.stringify(form));
    } catch {}
  }, [cart, favs, form, listo]);

  useEffect(() => {
    const k = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  const avisar = (t) => {
    setToast(t);
    setTimeout(() => setToast(""), 1400);
  };
  const cambiar = (id, d) =>
    setCart((c) => {
      const n = { ...c, [id]: Math.max(0, (c[id] || 0) + d) };
      if (!n[id]) delete n[id];
      if (d > 0 && n[id] === 1) avisar("Agregado a tu pedido");
      return n;
    });
  const alternarFav = (id) => setFavs((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));

  const cats = ["Todo", ...new Set(PLATILLOS.map((p) => p.cat)), ...(favs.length ? ["Favoritos"] : [])];
  const lista = PLATILLOS.filter(
    (p) =>
      (cat === "Todo" || (cat === "Favoritos" ? favs.includes(p.id) : p.cat === cat)) &&
      (p.nombre + p.desc).toLowerCase().includes(q.toLowerCase())
  );
  const items = PLATILLOS.filter((p) => cart[p.id]);
  const cuenta = items.reduce((s, p) => s + cart[p.id], 0);
  const subtotal = items.reduce((s, p) => s + cart[p.id] * p.precio, 0);
  const domicilio = form.modo === "A domicilio";
  const envio = domicilio ? NEGOCIO.envio : 0;
  const total = subtotal + envio;
  const destacado = PLATILLOS.find((p) => p.destacado);

  const waLink = useMemo(() => {
    if (!items.length) return "#";
    let m = `Hola, quiero confirmar hora de entrega de mi pedido en ${NEGOCIO.nombre}:\n\n`;
    m += items.map((p) => `• ${cart[p.id]}x ${p.nombre} — ${money(cart[p.id] * p.precio)}`).join("\n");
    if (envio) m += `\n• Envío — ${money(envio)}`;
    m += `\n\nTotal: ${money(total)}\n`;
    if (form.nombre.trim()) m += `Nombre: ${form.nombre.trim()}\n`;
    m += `Entrega: ${form.modo}${domicilio && form.dir.trim() ? ` (${form.dir.trim()})` : ""}\nPago: ${form.pago}\n`;
    if (form.notas.trim()) m += `Notas: ${form.notas.trim()}\n`;
    m += "\n¿A qué hora me lo pueden entregar?";
    return `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(m)}`;
  }, [cart, form, items.length, total, envio, domicilio]);

  const campo = (k) => ({ value: form[k], onChange: (e) => setForm({ ...form, [k]: e.target.value }) });
  const cuadro = (p, i) => (
    <article className="card" key={p.id}>
      <div className="foto">
        <Foto src={p.img} emoji={p.emoji} alt={p.nombre} />
        {p.tag && <span className="tag">{p.tag}</span>}
        <button className="fav" onClick={() => alternarFav(p.id)} aria-label={favs.includes(p.id) ? "Quitar de favoritos" : "Guardar en favoritos"}>
          {favs.includes(p.id) ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="cuerpo">
        <h3>{p.nombre}</h3>
        <p>{p.desc}</p>
        {p.picoso > 0 && <span className="chile" title="Nivel de picante">{"🌶️".repeat(p.picoso)} {["", "Suave", "Medio", "Bien picoso"][p.picoso]}</span>}
        <div className="fila">
          <span className="precio">${p.precio}</span>
          {cart[p.id] ? (
            <div className="qty">
              <button onClick={() => cambiar(p.id, -1)} aria-label="Quitar uno">−</button>
              <b>{cart[p.id]}</b>
              <button onClick={() => cambiar(p.id, 1)} aria-label="Agregar uno">+</button>
            </div>
          ) : (
            <button className="add" disabled={p.agotado} onClick={() => cambiar(p.id, 1)}>{p.agotado ? "Agotado" : "Agregar"}</button>
          )}
        </div>
      </div>
    </article>
  );

  return (
    <>
      <style>{CSS}</style>
      <div className="picado" aria-hidden="true">{Array.from({ length: 60 }, (_, i) => <span key={i} />)}</div>
      <header className="top">
        <div className="wrap">
          <a className="logo" href="#inicio">{NEGOCIO.nombre}</a>
          <nav>
            {abierto !== null && <span className={`estado ${abierto ? "si" : "no"}`}>{abierto ? "Abierto ahora" : "Cerrado"}</span>}
            <a href="#menu">Menú</a><a href="#como">Cómo pedir</a><a href="#faq">Dudas</a><a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        <div className="hero"><div className="wrap">
          <h1>Comida de fonda, directo a tu WhatsApp</h1>
          <p>Arma tu pedido aquí, toca un botón y nosotros recibimos todo: platillos, total y a qué hora lo quieres. Sin llamadas ni vueltas.</p>
          <div className="cta"><a className="btn" href="#menu">Ver el menú</a><a className="btn ghost" href="#como">Cómo pedir</a></div>
        </div></div>
        <div className="serape" aria-hidden="true" />
        <div className="cinta" aria-hidden="true"><div>{(PLATILLOS.map((p) => p.nombre).join(" ✺ ") + " ✺ ").repeat(4)}</div></div>

        {destacado && (
          <section><div className="wrap">
            <h2>El que no te puedes perder</h2>
            <div className="dest">
              <div className="foto" style={{ aspectRatio: "auto", minHeight: 260 }}><Foto src={destacado.img} emoji={destacado.emoji} alt={destacado.nombre} /></div>
              <div className="info">
                <h3>{destacado.nombre}</h3>
                <p style={{ color: "var(--mute)", margin: 0 }}>{destacado.desc}</p>
                <span className="precio">${destacado.precio}</span>
                <div><button className="add" onClick={() => cambiar(destacado.id, 1)}>Agregar a mi pedido</button></div>
              </div>
            </div>
          </div></section>
        )}

        <section style={{ paddingTop: 0 }}><div className="wrap">
          <h2>Lo que anda pasando</h2>
          <p className="sub">Promos de la casa. Pregunta por ellas al confirmar tu pedido.</p>
          <div className="promos">{PROMOS.map((p) => <div className="promo" key={p.t}><h3>{p.t}</h3><p>{p.d}</p></div>)}</div>
        </div></section>

        <section id="menu" style={{ paddingTop: 0 }}>
          <div className="wrap"><h2>El menú</h2><p className="sub">Toca “Agregar” y tu pedido se va armando solito.</p></div>
          <div className="barra"><div className="wrap">
            <input type="search" placeholder="Busca: aguachile, costilla, milanesa" aria-label="Buscar platillo" value={q} onChange={(e) => setQ(e.target.value)} />
            <div className="chips">{cats.map((c) => <button key={c} className="chip" aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>)}</div>
          </div></div>
          <div className="wrap"><div className="grid">
            {lista.length ? lista.map(cuadro) : <div className="vacio">No encontramos eso. Prueba con otra palabra o toca “Todo”.</div>}
          </div></div>
        </section>

        <section id="como" className="alt"><div className="wrap">
          <h2>Así de fácil</h2><p className="sub">Tres pasos y tu comida va en camino.</p>
          <div className="pasos">
            <div className="paso"><h3>Elige</h3><p>Agrega tus platillos y ajusta cantidades.</p></div>
            <div className="paso"><h3>Llena tus datos</h3><p>Nombre, si es a domicilio o recoges, y notas como “sin cebolla”.</p></div>
            <div className="paso"><h3>Manda el mensaje</h3><p>Se abre WhatsApp con tu pedido escrito. Dale enviar y confirmamos la hora.</p></div>
          </div>
        </div></section>

        {RESENAS.length > 0 && (
          <section><div className="wrap"><h2>Lo que dicen los clientes</h2>
            <div className="resenas">{RESENAS.map((r, i) => <blockquote key={i}>“{r.texto}”<cite>{r.nombre}</cite></blockquote>)}</div>
          </div></section>
        )}

        <section id="faq"><div className="wrap">
          <h2>Dudas comunes</h2>
          {FAQ.map(([a, b]) => <details key={a}><summary>{a}</summary><p>{b}</p></details>)}
        </div></section>

        <section id="contacto" className="alt"><div className="wrap">
          <h2>Contacto</h2>
          <div className="contacto">
            <div><h3>Dónde estamos</h3><p>{NEGOCIO.direccion}</p>{NEGOCIO.maps && <a href={NEGOCIO.maps} target="_blank" rel="noopener noreferrer">Abrir en Google Maps</a>}</div>
            <div><h3>Horario</h3><p>{NEGOCIO.horarioTexto}</p></div>
            <div><h3>Redes</h3>
              <p>{NEGOCIO.whatsapp ? <a href={`https://wa.me/${NEGOCIO.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a> : "WhatsApp: por definir"}</p>
              {NEGOCIO.instagram && <p><a href={NEGOCIO.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></p>}
              {NEGOCIO.facebook && <p><a href={NEGOCIO.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></p>}
            </div>
          </div>
        </div></section>
      </main>

      <footer><div className="serape" aria-hidden="true" style={{ marginBottom: 24 }} />Hecho en Tapachula con sabor y con chile.</footer>

      {cuenta > 0 && !open && <button className="fab" onClick={() => setOpen(true)}>Mi pedido ({cuenta}) · {money(total)}</button>}
      {toast && <div className="toast" role="status">{toast}</div>}

      {open && (
        <>
          <div className="ov" onClick={() => setOpen(false)} />
          <aside className="cajon" role="dialog" aria-modal="true" aria-label="Mi pedido">
            <div className="ch"><h3>Mi pedido</h3><button className="x" onClick={() => setOpen(false)} aria-label="Cerrar">✕</button></div>
            <div className="cb">
              {items.length ? items.map((p) => (
                <div className="li" key={p.id}>
                  <div><b>{p.nombre}</b><br />${p.precio} c/u</div>
                  <div className="qty">
                    <button onClick={() => cambiar(p.id, -1)} aria-label="Quitar uno">−</button><b>{cart[p.id]}</b>
                    <button onClick={() => cambiar(p.id, 1)} aria-label="Agregar uno">+</button>
                  </div>
                </div>
              )) : <p>Tu pedido está vacío. Agrega algo del menú.</p>}
              <div className="form">
                <label>Tu nombre<input autoComplete="name" {...campo("nombre")} /></label>
                <label>¿Cómo lo quieres?
                  <select {...campo("modo")}><option>A domicilio</option><option>Paso a recogerlo</option></select>
                </label>
                {domicilio && <label>Dirección y referencias<textarea rows={2} {...campo("dir")} /></label>}
                <label>Forma de pago
                  <select {...campo("pago")}><option>Efectivo</option><option>Transferencia</option></select>
                </label>
                <label>Notas<textarea rows={2} placeholder="Sin cebolla, muy picoso, etc." {...campo("notas")} /></label>
              </div>
            </div>
            <div className="cf">
              {envio > 0 && <div className="env"><span>Envío</span><span>{money(envio)}</span></div>}
              <div className="tot"><span>Total</span><span>${total}</span></div>
              <a className="wa" href={waLink} target="_blank" rel="noopener noreferrer" aria-disabled={!items.length}>Enviar pedido por WhatsApp</a>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
