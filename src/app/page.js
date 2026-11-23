"use client";
import { useEffect, useState } from "react";

const WA = "529624213433";
const NOMBRE = "Marisquería Entre Amigos";
const CATS = [
  ["all", "Todos"],
  ["ac", "Aguachiles y Ceviches"],
  ["ct", "Cócteles y Tostis"],
  ["co", "Charolas y Ostiones"],
  ["be", "Bebidas"],
];
const MIX = "Pulpo, camarones, atún y camarones curtidos con limón";
const M = [
  { id: "agua", n: "Aguachiles", d: "Elige tu sabor: verde, rojo, negro o mango.", c: "ac", o: [["Verde", 180], ["Rojo", 180], ["Negro", 180], ["Mango", 180]] },
  { id: "cevc", n: "Ceviche de camarón", d: "Preparado al momento.", c: "ac", o: [["", 160]] },
  { id: "cevp", n: "Ceviche de pescado", d: "Preparado al momento.", c: "ac", o: [["", 150]] },
  { id: "cevm", n: "Ceviche mixto", d: "Pescado y camarón.", c: "ac", o: [["", 200]] },
  { id: "cevk", n: "Ceviche de camarón cocido", d: "Preparado al momento.", c: "ac", o: [["", 200]] },
  { id: "ens", n: "Ensalada de marisco", d: "Pulpo, camarones, atún y camarones curtidos con limón.", c: "ac", o: [["", 280]] },
  { id: "coc", n: "Cócteles de camarón", d: "Elige tu tamaño.", c: "ct", o: [["Mediano (Md)", 130], ["Grande (Grd)", 160]] },
  { id: "camp", n: "Cócteles campechanos", d: "Elige tu tamaño.", c: "ct", o: [["Mediano (Md)", 150], ["Grande (Grd)", 200]] },
  { id: "tosa", n: "Tosti aguachile", d: "Sobre 1 tostito.", c: "ct", o: [["", 150]] },
  { id: "tosc", n: "Tosti ceviche", d: "Sobre 1 tostito.", c: "ct", o: [["", 150]] },
  { id: "ch2", n: "Charola mixta para 1–2 personas", d: MIX + ".", c: "co", star: true, o: [["", 300]] },
  { id: "ch4", n: "Charola mixta para 4 personas", d: MIX + ".", c: "co", star: true, o: [["", 700]] },
  { id: "ch6", n: "Charola mixta para 6 personas", d: MIX + " y ceviche de camarón o pescado.", c: "co", star: true, o: [["", 1300]] },
  { id: "ost", n: "Ostiones en su concha", d: "Preparados. Elige cuántas piezas.", c: "co", o: [["6 piezas", 100], ["12 piezas", 200]] },
  { id: "mich", n: "Michelada clásica", d: "Bien fría.", c: "be", o: [["", 100]] },
  { id: "ref", n: "Refrescos embotellados", d: "Elige tu sabor.", c: "be", o: [["Coca-Cola", 25], ["Manzanita", 25], ["Sprite", 25], ["Mirinda", 25]] },
  { id: "agu", n: "Agua embotellada", d: "", c: "be", o: [["", 10]] },
];

const fmt = (n) => "$" + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const wa = (t) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const nom = (m, l) => (l ? `${m.n} (${l})` : m.n);

function Helm({ size = 32 }) {
  return (
    <svg viewBox="-110 -110 220 220" width={size} height={size} fill="none" stroke="currentColor" strokeLinecap="round" aria-hidden="true">
      <circle r="60" strokeWidth="10" />
      <circle r="15" strokeWidth="8" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          <path d="M0 -15V-94" strokeWidth="9" />
          <circle cy="-100" r="8" fill="currentColor" stroke="none" />
        </g>
      ))}
    </svg>
  );
}

function Card({ m, idx, onPick, onAdd }) {
  const multi = m.o.length > 1;
  const diff = new Set(m.o.map((o) => o[1])).size > 1;
  const [l, p] = m.o[idx];
  return (
    <article className={"card" + (m.star ? " star" : "")}>
      {m.star && <span className="badge">Ideal para compartir</span>}
      <div className="row">
        <h3>{m.n}</h3>
        <span className="pill">{fmt(p)}</span>
      </div>
      <p className="desc">{m.d}</p>
      {multi && (
        <div className="opts" role="group" aria-label={`Opciones de ${m.n}`}>
          {m.o.map((o, i) => (
            <button key={o[0]} type="button" className="opt" aria-pressed={i === idx} onClick={() => onPick(m.id, i)}>
              {o[0]}
              {diff ? ` · ${fmt(o[1])}` : ""}
            </button>
          ))}
        </div>
      )}
      <div className="acts">
        <button type="button" className="b-add" onClick={() => onAdd(m, idx)}>Agregar</button>
        <a
          className="b-wa"
          target="_blank"
          rel="noopener noreferrer"
          href={wa(`Hola, quiero pedir en ${NOMBRE}:\n• 1x ${nom(m, l)} — ${fmt(p)}\n\n¿Me confirman disponibilidad y envío (costo extra)?`)}
        >
          Pedir ya
        </a>
      </div>
    </article>
  );
}

export default function Page() {
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const [sel, setSel] = useState({});
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [form, setForm] = useState({ nm: "", md: "0", ad: "", nt: "" });

  useEffect(() => {
    const k = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  const avisar = (t) => {
    setToast(t);
    setTimeout(() => setToast(""), 1400);
  };
  const pick = (id, i) => setSel((s) => ({ ...s, [id]: i }));
  const add = (m, i) => {
    const key = m.id + "|" + i;
    setCart((c) =>
      c.some((x) => x.key === key)
        ? c.map((x) => (x.key === key ? { ...x, q: x.q + 1 } : x))
        : [...c, { key, name: nom(m, m.o[i][0]), p: m.o[i][1], q: 1 }]
    );
    avisar("Agregado a tu pedido");
  };
  const mover = (key, d) =>
    setCart((c) => c.map((x) => (x.key === key ? { ...x, q: x.q + d } : x)).filter((x) => x.q > 0));
  const campo = (k) => ({ value: form[k], onChange: (e) => setForm({ ...form, [k]: e.target.value }) });

  const compartir = async () => {
    const d = { title: NOMBRE, text: "Mira el menú de Marisquería Entre Amigos y pide por WhatsApp:", url: window.location.href };
    try {
      if (navigator.share) await navigator.share(d);
      else if (navigator.clipboard) {
        await navigator.clipboard.writeText(d.url);
        avisar("Enlace copiado");
      }
    } catch {
      /* el usuario canceló */
    }
  };

  const total = cart.reduce((s, c) => s + c.p * c.q, 0);
  const count = cart.reduce((s, c) => s + c.q, 0);
  const dom = form.md === "0";
  const lista = M.filter((m) => (cat === "all" || m.c === cat) && (m.n + " " + m.d).toLowerCase().includes(q.trim().toLowerCase()));
  const agrupar = cat === "all" && !q.trim();

  let msg = `Hola, quiero hacer un pedido en ${NOMBRE}:\n\n` + cart.map((c) => `• ${c.q}x ${c.name} — ${fmt(c.p * c.q)}`).join("\n") + `\n\nSubtotal: ${fmt(total)}\n`;
  if (dom) msg += "(El envío tiene costo extra, favor de confirmarlo)\n";
  if (form.nm.trim()) msg += `Nombre: ${form.nm.trim()}\n`;
  msg += `Entrega: ${dom ? "Envío a domicilio (costo extra)" : "Paso a recogerlo"}` + (dom && form.ad.trim() ? ` — ${form.ad.trim()}` : "") + "\n";
  if (form.nt.trim()) msg += `Notas: ${form.nt.trim()}\n`;
  msg += "\n¿Me confirman disponibilidad y tiempo de entrega?";

  const tarjeta = (m) => <Card key={m.id} m={m} idx={sel[m.id] || 0} onPick={pick} onAdd={add} />;

  return (
    <div className="ea">
      <style>{CSS}</style>

      <header className="top">
        <div className="w bar">
          <a href="#inicio" className="logo">
            <span className="coral"><Helm size={32} /></span>
            <span className="disp">Entre Amigos</span>
          </a>
          <nav className="nav">
            <a href="#promo">Para compartir</a>
            <a href="#menu">La carta</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <button type="button" className="cartbtn" onClick={() => setOpen(true)} aria-label="Abrir mi pedido">
            Mi pedido <span className="count">{count}</span>
          </button>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="big" aria-hidden="true"><Helm size={520} /></div>
          <div className="w in">
            <span className="sol"><Helm size={56} /></span>
            <h1>Marisquería Entre Amigos</h1>
            <p>Mariscos frescos, brisa de costa y buena compañía. Pide desde casa o junta a los tuyos.</p>
            <div className="ctas">
              <a href="#menu" className="btn amber">Ver el menú</a>
              <a href={wa(`Hola, quiero hacer un pedido en ${NOMBRE}.`)} target="_blank" rel="noopener noreferrer" className="btn green">Pedir por WhatsApp</a>
            </div>
          </div>
          <div className="strip">
            <div className="w">
              <span>Envío a domicilio (costo extra)</span>
              <span aria-hidden="true">•</span>
              <span>Pedidos directos al <a href="tel:+529624213433"><u>962 421 3433</u></a></span>
            </div>
          </div>
        </section>

        <section id="promo" className="w promo">
          <div>
            <h2>Ideal para compartir entre amigos</h2>
            <p>Reuniones, comidas largas o pedido desde casa. Nuestras charolas mixtas rinden para 1–2, 4 o 6 personas.</p>
          </div>
          <div className="note">
            <b>Envío disponible</b>
            <p>Con costo extra. Te confirmamos el total por WhatsApp antes de salir.</p>
          </div>
        </section>

        <section id="menu" className="menu">
          <div className="w head">
            <h2>La carta</h2>
            <span className="line" />
          </div>
          <div className="sbar">
            <div className="w tools">
              <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar: aguachile, ostiones, charola..." aria-label="Buscar platillo" />
              <div className="chips">
                {CATS.map(([k, t]) => (
                  <button key={k} type="button" className="chip" aria-pressed={cat === k} onClick={() => setCat(k)}>{t}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="w gridwrap">
            <div className="grid">
              {lista.length === 0 && <p className="empty">No encontramos eso. Prueba otra palabra o toca “Todos”.</p>}
              {lista.length > 0 && agrupar
                ? CATS.slice(1).map(([k, t]) => (
                    <div key={k} className="grp">
                      <div className="full head">
                        <h3>{t}</h3>
                        <span className="line" />
                      </div>
                      {M.filter((m) => m.c === k).map(tarjeta)}
                    </div>
                  ))
                : lista.map(tarjeta)}
            </div>
          </div>
        </section>
      </main>

      <footer id="contacto" className="foot">
        <div className="w cols">
          <div>
            <span className="sol"><Helm size={48} /></span>
            <p className="disp big2">Marisquería Entre Amigos</p>
            <p className="soft">Mariscos para compartir.</p>
          </div>
          <div>
            <b className="sol">Pedidos y dudas</b>
            <a href="tel:+529624213433" className="tel">962 421 3433</a>
            <a href={wa(`Hola, tengo una duda sobre ${NOMBRE}.`)} target="_blank" rel="noopener noreferrer" className="btn green sm">Escribir por WhatsApp</a>
          </div>
          <div>
            <b className="sol">Envío a domicilio</b>
            <p className="soft">Disponible con costo extra.</p>
            <button type="button" className="btn ghost sm" onClick={compartir}>Compartir esta página</button>
          </div>
        </div>
        <p className="legal">Precios en pesos mexicanos. Sujetos a cambio sin previo aviso.</p>
      </footer>

      {count > 0 && !open && (
        <button type="button" className="fab" onClick={() => setOpen(true)}>
          Ver mi pedido ({count}) · {fmt(total)}
        </button>
      )}
      {toast && <div className="toast" role="status">{toast}</div>}

      <div className={"ov" + (open ? " on" : "")} onClick={() => setOpen(false)} />
      <aside className={"cart" + (open ? " on" : "")} role="dialog" aria-modal="true" aria-label="Mi pedido" aria-hidden={!open}>
        <div className="chead">
          <h2>Mi pedido</h2>
          <button type="button" className="x" onClick={() => setOpen(false)} aria-label="Cerrar">✕</button>
        </div>
        <div className="cbody">
          {cart.length === 0 && <p className="soft2">Tu pedido está vacío. Agrega algo del menú.</p>}
          {cart.map((c) => (
            <div key={c.key} className="li">
              <div>
                <b>{c.name}</b>
                <br />
                <small>{fmt(c.p)} c/u</small>
              </div>
              <div className="qty">
                <button type="button" onClick={() => mover(c.key, -1)} aria-label="Quitar uno">−</button>
                <b>{c.q}</b>
                <button type="button" onClick={() => mover(c.key, 1)} aria-label="Agregar uno">+</button>
              </div>
            </div>
          ))}
          <div className="form">
            <label>Tu nombre<input autoComplete="name" {...campo("nm")} /></label>
            <label>¿Cómo lo quieres?
              <select {...campo("md")}>
                <option value="0">Envío a domicilio (costo extra)</option>
                <option value="1">Paso a recogerlo</option>
              </select>
            </label>
            {dom && <label>Dirección y referencias<textarea rows={2} {...campo("ad")} /></label>}
            <label>Notas<textarea rows={2} placeholder="Sin cebolla, bien picoso, etc." {...campo("nt")} /></label>
          </div>
        </div>
        <div className="cfoot">
          <div className="tot"><span>Subtotal</span><span>{fmt(total)}</span></div>
          <p className="soft2">El envío tiene costo extra y se confirma por WhatsApp.</p>
          <a
            className="btn green block"
            target="_blank"
            rel="noopener noreferrer"
            href={count ? wa(msg) : "#"}
            aria-disabled={count === 0}
            onClick={(e) => count === 0 && e.preventDefault()}
            style={count === 0 ? { opacity: 0.4, pointerEvents: "none" } : undefined}
          >
            Enviar pedido por WhatsApp
          </a>
          <button type="button" className="clr" onClick={() => { setCart([]); setOpen(false); }}>Vaciar pedido</button>
        </div>
      </aside>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,800;9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
html{scroll-behavior:smooth;scroll-padding-top:130px}
.ea{--mar:#0F2942;--mar2:#334E68;--coral:#EA580C;--sol:#F59E0B;--ver:#16A34A;--crema:#FAF8F5;--bord:#E2E8F0;--gris:#64748B;background:var(--crema);color:var(--mar);font-family:'Plus Jakarta Sans',system-ui,sans-serif;font-size:16px;line-height:1.5;min-height:100vh}
.ea *,.ea *::before,.ea *::after{box-sizing:border-box}
.ea h1,.ea h2,.ea h3,.ea p{margin:0}
.ea h1,.ea h2,.ea h3,.ea .disp{font-family:Fraunces,Georgia,serif}
.ea a{color:inherit;text-decoration:none}
.ea button{font:inherit;cursor:pointer}
.ea svg{display:block}
.ea :focus-visible{outline:3px solid var(--sol);outline-offset:2px}
.w{max-width:1152px;margin:0 auto;padding:0 16px}
.coral{color:var(--coral)}.sol{color:var(--sol)}
.top{position:sticky;top:0;z-index:30;background:rgba(250,248,245,.95);backdrop-filter:blur(8px);border-bottom:1px solid var(--bord)}
.bar{height:64px;display:flex;align-items:center;justify-content:space-between;gap:12px}
.logo{display:flex;align-items:center;gap:8px;font-weight:900;font-size:19px}
.nav{display:none;gap:28px;font-size:14px;font-weight:600;color:var(--gris)}
.nav a:hover{color:var(--mar)}
@media(min-width:768px){.nav{display:flex}}
.cartbtn{background:var(--mar);color:#fff;border:0;border-radius:99px;padding:8px 8px 8px 16px;font-weight:700;font-size:14px;display:flex;align-items:center;gap:8px}
.cartbtn:hover{background:var(--mar2)}
.count{background:var(--coral);min-width:26px;height:24px;border-radius:99px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;padding:0 6px}
.hero{position:relative;overflow:hidden;background-color:var(--mar);color:#fff;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='28' viewBox='0 0 120 28'%3E%3Cpath d='M0 14c10-9 20-9 30 0s20 9 30 0 20-9 30 0 20 9 30 0' fill='none' stroke='%23fff' stroke-opacity='.07' stroke-width='2'/%3E%3C/svg%3E")}
.hero .big{position:absolute;right:-110px;top:-40px;color:rgba(255,255,255,.07);pointer-events:none}
.hero .in{position:relative;padding-top:64px;padding-bottom:72px}
.hero .sol{display:block;margin-bottom:20px}
.hero h1{font-weight:900;font-size:clamp(44px,9vw,88px);line-height:.98;max-width:880px}
.hero .in>p{margin-top:24px;font-size:19px;color:#cbd5e1;max-width:540px}
.ctas{margin-top:36px;display:flex;flex-wrap:wrap;gap:12px}
.btn{display:inline-block;border-radius:12px;padding:14px 28px;font-weight:800;border:0;text-align:center}
.btn.sm{padding:10px 16px;font-weight:700;margin-top:12px}
.btn.amber{background:var(--sol);color:var(--mar)}.btn.amber:hover{background:#fbbf24}
.btn.green{background:var(--ver);color:#fff}.btn.green:hover{background:#15803D}
.btn.ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.5)}.btn.ghost:hover{background:#fff;color:var(--mar)}
.btn.block{display:block;width:100%}
.strip{position:relative;background:var(--sol);color:var(--mar);font-weight:700;font-size:15px}
.strip .w{padding-top:12px;padding-bottom:12px;display:flex;flex-wrap:wrap;justify-content:center;gap:4px 12px;text-align:center}
.promo{padding-top:56px;padding-bottom:56px;display:grid;gap:32px;align-items:center}
.promo h2{font-weight:900;font-size:clamp(30px,5vw,46px);line-height:1.1}
.promo p{margin-top:16px;font-size:18px;color:var(--gris);max-width:560px}
.note{background:#fff;border:1px solid var(--bord);border-radius:16px;padding:24px;box-shadow:0 1px 2px #0001}
.note b{color:var(--coral);font-weight:800}
.note p{margin-top:4px;font-size:16px}
@media(min-width:768px){.promo{grid-template-columns:3fr 2fr}}
.menu{padding-bottom:80px}
.head{display:flex;align-items:center;gap:16px}
.head h2{font-weight:900;font-size:clamp(32px,5vw,48px)}
.head h3{font-weight:800;font-size:26px}
.line{height:1px;flex:1;background:#cbd5e1}
.sbar{position:sticky;top:64px;z-index:20;background:rgba(250,248,245,.95);backdrop-filter:blur(8px);border-bottom:1px solid var(--bord);margin-top:20px;padding:12px 0}
.tools{display:flex;flex-direction:column;gap:12px}
.tools input{width:100%;border:1px solid #cbd5e1;background:#fff;border-radius:12px;padding:10px 16px;font:inherit;color:var(--mar)}
.tools input:focus{outline:none;border-color:var(--mar)}
.chips{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px}
.chip{white-space:nowrap;border:1px solid #cbd5e1;background:#fff;border-radius:99px;padding:8px 16px;font-weight:600;font-size:14px;color:var(--mar)}
.chip[aria-pressed="true"]{background:var(--mar);color:#fff;border-color:var(--mar)}
@media(min-width:768px){.tools{flex-direction:row;align-items:center}.tools input{width:288px}}
.gridwrap{margin-top:32px}
.grid,.grp{display:contents}
.gridwrap .grid{display:grid;gap:28px 20px;grid-template-columns:1fr}
@media(min-width:640px){.gridwrap .grid{grid-template-columns:repeat(2,1fr)}}
@media(min-width:1024px){.gridwrap .grid{grid-template-columns:repeat(3,1fr)}}
.full{grid-column:1/-1;margin-top:24px}
.grp:first-child .full{margin-top:0}
.empty{grid-column:1/-1;text-align:center;padding:40px;border:1px dashed #cbd5e1;border-radius:16px;color:var(--gris)}
.card{position:relative;background:#fff;border:1px solid var(--bord);border-radius:16px;padding:20px;display:flex;flex-direction:column;box-shadow:0 1px 2px #0001}
.card.star{border:2px solid var(--coral);box-shadow:0 12px 32px -14px rgba(234,88,12,.55)}
.badge{position:absolute;top:-12px;left:20px;background:var(--sol);color:var(--mar);font-size:12px;font-weight:800;padding:4px 12px;border-radius:99px}
.row{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
.row h3{font-weight:800;font-size:20px;line-height:1.25}
.pill{flex-shrink:0;background:var(--coral);color:#fff;font-weight:800;font-size:18px;border-radius:99px;padding:2px 12px}
.desc{margin-top:8px;font-size:14px;color:var(--gris);flex:1}
.opts{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}
.opt{border:1px solid #cbd5e1;background:#fff;border-radius:10px;padding:8px 12px;font-size:14px;font-weight:600;color:var(--mar)}
.opt:hover{border-color:var(--mar)}
.opt[aria-pressed="true"]{background:var(--mar);color:#fff;border-color:var(--mar)}
.acts{display:grid;grid-template-columns:3fr 2fr;gap:8px;margin-top:16px}
.b-add{background:var(--mar);color:#fff;border:0;border-radius:12px;padding:10px;font-weight:700}.b-add:hover{background:var(--mar2)}
.b-wa{background:var(--ver);color:#fff;border-radius:12px;padding:10px;font-weight:700;font-size:14px;text-align:center}.b-wa:hover{background:#15803D}
.foot{background-color:var(--mar);color:#fff;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='28' viewBox='0 0 120 28'%3E%3Cpath d='M0 14c10-9 20-9 30 0s20 9 30 0 20-9 30 0 20 9 30 0' fill='none' stroke='%23fff' stroke-opacity='.07' stroke-width='2'/%3E%3C/svg%3E")}
.cols{padding-top:56px;padding-bottom:56px;display:grid;gap:40px}
@media(min-width:768px){.cols{grid-template-columns:repeat(3,1fr)}}
.big2{font-weight:900;font-size:24px;margin-top:12px}
.soft{color:#cbd5e1;margin-top:8px}
.foot b{font-weight:800;display:block}
.tel{display:block;margin-top:8px;font-size:24px;font-weight:800}
.legal{text-align:center;color:#94a3b8;font-size:14px;padding:0 16px 96px}
.fab{position:fixed;z-index:30;left:16px;right:16px;bottom:16px;background:var(--sol);color:var(--mar);border:2px solid var(--mar);border-radius:16px;padding:12px;font-weight:800;box-shadow:0 10px 25px #0004}
@media(min-width:768px){.fab{display:none}}
.ov{position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:40;opacity:0;visibility:hidden;transition:opacity .25s}
.ov.on{opacity:1;visibility:visible}
.cart{position:fixed;z-index:50;left:0;right:0;bottom:0;max-height:92vh;background:var(--crema);border-radius:24px 24px 0 0;display:flex;flex-direction:column;transform:translateY(100%);visibility:hidden;transition:transform .3s,visibility .3s}
.cart.on{transform:none;visibility:visible}
@media(min-width:640px){.cart{top:0;left:auto;width:430px;max-height:none;border-radius:0;transform:translateX(100%)}}
.chead{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid var(--bord)}
.chead h2{font-weight:900;font-size:26px}
.x{width:40px;height:40px;border-radius:50%;border:1px solid #cbd5e1;background:#fff}
.cbody{flex:1;overflow-y:auto;padding:16px 20px}
.li{display:flex;justify-content:space-between;gap:12px;padding:12px 0;border-bottom:1px dashed #cbd5e1}
.li small{color:var(--gris)}
.qty{display:flex;align-items:center;gap:8px}
.qty button{width:32px;height:32px;border:1px solid #cbd5e1;background:#fff;border-radius:8px;font-weight:800}
.form{display:grid;gap:12px;margin-top:20px}
.form label{display:grid;gap:4px;font-size:14px;font-weight:700}
.form input,.form select,.form textarea{border:1px solid #cbd5e1;background:#fff;border-radius:8px;padding:8px 12px;font:inherit;font-weight:400;color:var(--mar)}
.cfoot{padding:16px 20px;border-top:1px solid var(--bord)}
.tot{display:flex;justify-content:space-between;font-family:Fraunces,Georgia,serif;font-weight:900;font-size:24px;margin-bottom:4px}
.soft2{font-size:14px;color:var(--gris);margin-bottom:12px}
.clr{margin-top:8px;width:100%;background:none;border:0;text-decoration:underline;font-weight:600;font-size:14px;color:var(--mar2)}
.toast{position:fixed;left:50%;transform:translateX(-50%);bottom:88px;z-index:60;background:var(--mar);color:#fff;font-weight:700;padding:8px 20px;border-radius:99px}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.ea *{transition:none!important}}
`;
