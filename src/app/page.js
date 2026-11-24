"use client";
import { useEffect, useState } from "react";
import { Fraunces, Plus_Jakarta_Sans, Pacifico } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--f-disp", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--f-body", display: "swap" });
const pacifico = Pacifico({ subsets: ["latin"], weight: "400", variable: "--f-script", display: "swap" });

const WA = "529624213433";
const NOMBRE = "Marisquería Entre Amigos";

/* FOTOS: cuando el cliente mande las fotos, pega aquí la URL completa de cada una
   (ej. agua: "https://..."). Si queda vacío se muestra el marcador elegante. */
const FOTOS = {
  agua: "", cevc: "", cevp: "", cevm: "", cevk: "", ens: "",
  coc: "", camp: "", tosa: "", tosc: "",
  ch2: "", ch4: "", ch6: "", ost: "",
  al12: "", al20: "", al30: "",
  mich: "", ref: "", agu: "",
};

const CATS = [
  ["all", "Todos"],
  ["ac", "Aguachiles y Ceviches"],
  ["ct", "Cócteles y Tostis"],
  ["co", "Charolas y Ostiones"],
  ["al", "Alitas"],
  ["be", "Bebidas"],
];
const SABORES = ["BBQ", "Parmesano", "Búfalo", "Miel", "Mango Habanero", "Lemon Pepper"];
const MIX = "Pulpo, camarones, atún y camarones curtidos con limón";
const ALD = "Bañadas en el sabor que elijas. Puedes combinar sabores.";
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
  { id: "al12", n: "12 alitas", d: ALD, c: "al", fl: true, o: [["", 180]] },
  { id: "al20", n: "20 alitas", d: ALD, c: "al", fl: true, o: [["", 245]] },
  { id: "al30", n: "30 alitas", d: ALD, c: "al", fl: true, o: [["", 355]] },
  { id: "mich", n: "Michelada clásica", d: "Bien fría.", c: "be", o: [["", 100]] },
  { id: "ref", n: "Refrescos embotellados", d: "Elige tu sabor.", c: "be", o: [["Coca-Cola", 25], ["Manzanita", 25], ["Sprite", 25], ["Mirinda", 25]] },
  { id: "agu", n: "Agua embotellada", d: "", c: "be", o: [["", 10]] },
];

const fmt = (n) => "$" + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const wa = (t) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const nombreItem = (m, l, fl) => (m.fl ? `${m.n} — sabores: ${fl.join(", ")}` : l ? `${m.n} (${l})` : m.n);

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

function Foto({ url, cat, label, star }) {
  return (
    <div className="fw">
      <div
        className={"foto" + (url ? "" : " ph ph-" + cat)}
        style={url ? { backgroundImage: `url(${url})` } : undefined}
        role="img"
        aria-label={label}
      >
        {!url && (
          <>
            <span className="phi"><Helm size={46} /></span>
            <span className="pht">Foto próximamente</span>
          </>
        )}
      </div>
      {star && <span className="badge">Ideal para compartir</span>}
    </div>
  );
}

function Card({ m, i, idx, fl, shake, onPick, onFlavor, onAdd, onNeed }) {
  const multi = m.o.length > 1;
  const diff = new Set(m.o.map((o) => o[1])).size > 1;
  const [l, p] = m.o[idx];
  const falta = m.fl && fl.length === 0;
  return (
    <article className={"card" + (m.star ? " star" : "")} style={{ animationDelay: Math.min(i, 12) * 55 + "ms" }}>
      <Foto url={FOTOS[m.id]} cat={m.c} label={m.n} star={m.star} />
      <div className="cb">
        <div className="row">
          <h3>{m.n}</h3>
          <span className="pill">{fmt(p)}</span>
        </div>
        {m.d && <p className="desc">{m.d}</p>}
        {multi && (
          <div className="opts" role="group" aria-label={`Opciones de ${m.n}`}>
            {m.o.map((o, k) => (
              <button key={o[0]} type="button" className="opt" aria-pressed={k === idx} onClick={() => onPick(m.id, k)}>
                {o[0]}
                {diff ? ` · ${fmt(o[1])}` : ""}
              </button>
            ))}
          </div>
        )}
        {m.fl && (
          <div className={"sab" + (shake === m.id ? " shake" : "")}>
            <p className="hint">Elige tus sabores (puedes combinar)</p>
            <div className="opts" role="group" aria-label={`Sabores de ${m.n}`}>
              {SABORES.map((s) => (
                <button key={s} type="button" className="opt fl" aria-pressed={fl.includes(s)} onClick={() => onFlavor(m.id, s)}>
                  {fl.includes(s) ? "✓ " : ""}{s}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="acts">
          <button type="button" className="b-add" onClick={() => onAdd(m, idx)}>Agregar</button>
          <a
            className="b-wa"
            target="_blank"
            rel="noopener noreferrer"
            href={falta ? "#" : wa(`Hola, quiero pedir en ${NOMBRE}:\n• 1x ${nombreItem(m, l, fl)} — ${fmt(p)}\n\n¿Me confirman disponibilidad y envío (costo extra)?`)}
            onClick={(e) => {
              if (falta) {
                e.preventDefault();
                onNeed(m.id);
              }
            }}
          >
            Pedir ya
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Page() {
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const [sel, setSel] = useState({});
  const [sab, setSab] = useState({});
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [shake, setShake] = useState("");
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
    setTimeout(() => setToast(""), 1500);
  };
  const need = (id) => {
    setShake(id);
    avisar("Elige al menos un sabor");
    setTimeout(() => setShake(""), 600);
  };
  const pick = (id, k) => setSel((s) => ({ ...s, [id]: k }));
  const flavor = (id, f) =>
    setSab((s) => {
      const cur = s[id] || [];
      const nx = cur.includes(f) ? cur.filter((x) => x !== f) : [...cur, f];
      return { ...s, [id]: SABORES.filter((x) => nx.includes(x)) };
    });
  const add = (m, k) => {
    const fl = sab[m.id] || [];
    if (m.fl && fl.length === 0) return need(m.id);
    const key = [m.id, k, fl.join("+")].join("|");
    setCart((c) =>
      c.some((x) => x.key === key)
        ? c.map((x) => (x.key === key ? { ...x, q: x.q + 1 } : x))
        : [...c, { key, name: nombreItem(m, m.o[k][0], fl), p: m.o[k][1], q: 1 }]
    );
    avisar("Agregado a tu pedido");
  };
  const mover = (key, d) => setCart((c) => c.map((x) => (x.key === key ? { ...x, q: x.q + d } : x)).filter((x) => x.q > 0));
  const quitar = (key) => setCart((c) => c.filter((x) => x.key !== key));
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
      /* cancelado */
    }
  };

  const total = cart.reduce((s, c) => s + c.p * c.q, 0);
  const count = cart.reduce((s, c) => s + c.q, 0);
  const dom = form.md === "0";
  const lista = M.filter((m) => (cat === "all" || m.c === cat) && (m.n + " " + m.d).toLowerCase().includes(q.trim().toLowerCase()));
  const agrupar = cat === "all" && !q.trim();
  const orden = Object.fromEntries(lista.map((m, i) => [m.id, i]));

  let msg = `Hola, quiero hacer un pedido en ${NOMBRE} (Tapachula):\n\n` + cart.map((c) => `• ${c.q}x ${c.name} — ${fmt(c.p * c.q)}`).join("\n") + `\n\nSubtotal: ${fmt(total)}\n`;
  if (dom) msg += "(El envío tiene costo extra, favor de confirmarlo)\n";
  if (form.nm.trim()) msg += `Nombre: ${form.nm.trim()}\n`;
  msg += `Entrega: ${dom ? "Envío a domicilio (costo extra)" : "Paso a recogerlo"}` + (dom && form.ad.trim() ? ` — ${form.ad.trim()}` : "") + "\n";
  if (form.nt.trim()) msg += `Nota: ${form.nt.trim()}\n`;
  msg += "\n¿Me confirman disponibilidad y tiempo de entrega?";

  const tarjeta = (m) => (
    <Card key={m.id} m={m} i={orden[m.id]} idx={sel[m.id] || 0} fl={sab[m.id] || []} shake={shake} onPick={pick} onFlavor={flavor} onAdd={add} onNeed={need} />
  );

  return (
    <div className={`ea ${fraunces.variable} ${jakarta.variable} ${pacifico.variable}`}>
      <style>{CSS}</style>

      <header className="top">
        <div className="w bar">
          <a href="#inicio" className="logo">
            <span className="terra"><Helm size={32} /></span>
            <span className="disp">Entre Amigos</span>
          </a>
          <nav className="nav">
            <a href="#promo">Para compartir</a>
            <a href="#menu">La carta</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <button type="button" className="cartbtn" onClick={() => setOpen(true)} aria-label="Abrir mi pedido">
            Mi pedido <span className="count" key={count}>{count}</span>
          </button>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="sun" aria-hidden="true" />
          <div className="helmbg" aria-hidden="true"><Helm size={460} /></div>
          <div className="w in">
            <p className="script rise" style={{ animationDelay: "0ms" }}>Tapachula, Chiapas</p>
            <h1 className="rise" style={{ animationDelay: "90ms" }}>Marisquería <span className="gold">Entre Amigos</span></h1>
            <p className="lead rise" style={{ animationDelay: "180ms" }}>Mariscos frescos, brisa del Pacífico y buena compañía. Pide desde casa o junta a los tuyos.</p>
            <div className="ctas rise" style={{ animationDelay: "270ms" }}>
              <a href="#menu" className="btn amber">Ver el menú</a>
              <a href={wa(`Hola, quiero hacer un pedido en ${NOMBRE}.`)} target="_blank" rel="noopener noreferrer" className="btn green">Pedir por WhatsApp</a>
            </div>
          </div>
          <div className="waves" aria-hidden="true">
            <svg className="wv w1" viewBox="0 0 2880 120" preserveAspectRatio="none"><path d="M0 60Q360 0 720 60T1440 60T2160 60T2880 60V120H0Z" /></svg>
            <svg className="wv w2" viewBox="0 0 2880 120" preserveAspectRatio="none"><path d="M0 70Q360 20 720 70T1440 70T2160 70T2880 70V120H0Z" /></svg>
          </div>
        </section>
        <div className="strip">
          <div className="w">
            <span>Envío a domicilio (costo extra)</span>
            <span aria-hidden="true">•</span>
            <span>Pedidos directos al <a href="tel:+529624213433"><u>962 421 3433</u></a></span>
          </div>
        </div>

        <section id="promo" className="w promo">
          <div>
            <h2>Ideal para compartir entre amigos</h2>
            <p>Reuniones, comidas largas o pedido desde casa. Nuestras charolas mixtas rinden para 1–2, 4 o 6 personas, y las alitas vienen en paquetes de 12, 20 o 30.</p>
          </div>
          <ol className="steps">
            <li><b>Elige</b><span>tus platillos, tamaños y sabores.</span></li>
            <li><b>Arma</b><span>tu pedido y agrega una nota si quieres.</span></li>
            <li><b>Envía</b><span>por WhatsApp y confirmamos tu entrega.</span></li>
          </ol>
        </section>

        <section id="menu" className="menu">
          <div className="w head">
            <h2>La carta</h2>
            <span className="line" />
          </div>
          <div className="sbar">
            <div className="w tools">
              <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar: aguachile, alitas, ostiones..." aria-label="Buscar platillo" />
              <div className="chips">
                {CATS.map(([k, t]) => (
                  <button key={k} type="button" className="chip" aria-pressed={cat === k} onClick={() => setCat(k)}>{t}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="w gridwrap">
            <div className="grid" key={cat + (q.trim() ? "-b" : "")}>
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
            <span className="gold"><Helm size={48} /></span>
            <p className="disp big2">Marisquería Entre Amigos</p>
            <p className="soft">Tapachula, Chiapas. Mariscos para compartir.</p>
          </div>
          <div>
            <b className="gold">Pedidos y dudas</b>
            <a href="tel:+529624213433" className="tel">962 421 3433</a>
            <a href={wa(`Hola, tengo una duda sobre ${NOMBRE}.`)} target="_blank" rel="noopener noreferrer" className="btn green sm">Escribir por WhatsApp</a>
          </div>
          <div>
            <b className="gold">Envío a domicilio</b>
            <p className="soft">Disponible con costo extra.</p>
            <button type="button" className="btn ghost sm" onClick={compartir}>Compartir esta página</button>
          </div>
        </div>
        <p className="legal">Precios en pesos mexicanos. Sujetos a cambio sin previo aviso.</p>
      </footer>

      {count > 0 && !open && (
        <button type="button" className="fbar" onClick={() => setOpen(true)}>
          <span className="fl-l"><span className="fl-n" key={count}>{count}</span>{count === 1 ? "producto" : "productos"}</span>
          <span>Ver pedido · {fmt(total)}</span>
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
          {cart.length === 0 && <p className="soft2">Tu pedido está vacío. Agrega algo de la carta.</p>}
          {cart.map((c) => (
            <div key={c.key} className="li">
              <div>
                <b>{c.name}</b>
                <br />
                <small>{fmt(c.p)} c/u · </small>
                <button type="button" className="rm" onClick={() => quitar(c.key)}>Quitar</button>
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
            <label>Nota para tu pedido (opcional)<textarea rows={2} placeholder="Sin cebolla, bien picoso, etc." {...campo("nt")} /></label>
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
html{scroll-behavior:smooth;scroll-padding-top:130px}
.ea{--mar:#0B2F4A;--mar2:#164E73;--arena:#F7EDDC;--crema:#FFFAF1;--terra:#C8452B;--coral:#E8644A;--oro:#E0A526;--ver:#16A34A;--txt:#1F2A33;--gris:#6B7280;--bord:#EADBC3;background:var(--arena);color:var(--txt);font-family:var(--f-body),system-ui,sans-serif;font-size:16px;line-height:1.5;min-height:100vh;overflow-x:hidden}
.ea *,.ea *::before,.ea *::after{box-sizing:border-box}
.ea h1,.ea h2,.ea h3,.ea p{margin:0}
.ea h1,.ea h2,.ea h3,.disp{font-family:var(--f-disp),Georgia,serif;color:var(--mar)}
.ea a{color:inherit;text-decoration:none}
.ea button{font:inherit;cursor:pointer;transition:transform .15s,background .2s,color .2s,border-color .2s,box-shadow .2s}
.ea button:active,.btn:active,.b-wa:active{transform:scale(.95)}
.ea svg{display:block}
.ea :focus-visible{outline:3px solid var(--oro);outline-offset:2px}
.w{max-width:1152px;margin:0 auto;padding:0 16px}
.terra{color:var(--terra)}.gold{color:var(--oro)}
@keyframes up{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@keyframes drift{to{transform:translateX(-50%)}}
@keyframes bump{35%{transform:scale(1.35)}}
@keyframes sunp{50%{transform:scale(1.06);opacity:.95}}
@keyframes shk{20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}
@keyframes pop{from{opacity:0;transform:translate(-50%,30px) scale(.92)}}
@keyframes tin{from{opacity:0;transform:translate(-50%,12px)}to{opacity:1;transform:translate(-50%,0)}}
@keyframes glow{50%{box-shadow:0 0 0 6px rgba(224,165,38,.25)}}
.rise{animation:up .7s both cubic-bezier(.2,.7,.2,1)}
.top{position:sticky;top:0;z-index:30;background:rgba(247,237,220,.94);backdrop-filter:blur(8px);border-bottom:1px solid var(--bord)}
.bar{height:64px;display:flex;align-items:center;justify-content:space-between;gap:12px}
.logo{display:flex;align-items:center;gap:8px;font-weight:900;font-size:20px}
.logo .disp{font-weight:900}
.nav{display:none;gap:28px;font-size:14px;font-weight:600;color:var(--gris)}
.nav a{position:relative}.nav a:hover{color:var(--mar)}
@media(min-width:768px){.nav{display:flex}}
.cartbtn{background:var(--mar);color:#fff;border:0;border-radius:99px;padding:8px 8px 8px 16px;font-weight:700;font-size:14px;display:flex;align-items:center;gap:8px}
.cartbtn:hover{background:var(--mar2)}
.count{background:var(--terra);min-width:26px;height:24px;border-radius:99px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;padding:0 6px;animation:bump .4s}
.hero{position:relative;overflow:hidden;background:linear-gradient(180deg,#0B2F4A 0%,#164E73 62%,#2C7A92 100%);color:#fff}
.sun{position:absolute;right:6%;top:60px;width:230px;height:230px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#FFD27A,#E0A526 45%,#E8644A 100%);opacity:.9;animation:sunp 7s ease-in-out infinite}
.helmbg{position:absolute;left:-150px;top:-60px;color:rgba(255,255,255,.05);pointer-events:none}
.hero .in{position:relative;padding-top:72px;padding-bottom:150px}
.script{font-family:var(--f-script),cursive;color:var(--oro);font-size:24px;margin-bottom:6px}
.hero h1{color:#FFF6E6;font-weight:900;font-size:clamp(44px,9vw,92px);line-height:1;max-width:860px;letter-spacing:-.01em}
.lead{margin-top:24px;font-size:19px;color:#dbe7ef;max-width:540px}
.ctas{margin-top:34px;display:flex;flex-wrap:wrap;gap:12px}
.btn{display:inline-block;border-radius:14px;padding:14px 28px;font-weight:800;border:0;text-align:center;transition:transform .15s,background .2s,box-shadow .2s}
.btn:hover{transform:translateY(-2px);box-shadow:0 10px 22px -10px rgba(0,0,0,.5)}
.btn.sm{padding:10px 16px;font-weight:700;margin-top:12px}
.btn.amber{background:var(--oro);color:var(--mar)}.btn.amber:hover{background:#f0b63a}
.btn.green{background:var(--ver);color:#fff}.btn.green:hover{background:#15803D}
.btn.ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.5)}.btn.ghost:hover{background:#fff;color:var(--mar)}
.btn.block{display:block;width:100%}
.waves{position:absolute;left:0;right:0;bottom:-1px;height:96px;overflow:hidden}
.wv{position:absolute;bottom:0;left:0;width:200%;height:100%;animation:drift 16s linear infinite}
.w1{fill:var(--arena)}.w2{fill:rgba(247,237,220,.35);animation-duration:26s;animation-direction:reverse}
.strip{background:var(--terra);color:#fff;font-weight:700;font-size:15px}
.strip .w{padding-top:12px;padding-bottom:12px;display:flex;flex-wrap:wrap;justify-content:center;gap:4px 12px;text-align:center}
.promo{padding-top:60px;padding-bottom:56px;display:grid;gap:32px;align-items:center}
.promo h2{font-weight:900;font-size:clamp(30px,5vw,46px);line-height:1.1}
.promo p{margin-top:16px;font-size:18px;color:var(--gris);max-width:560px}
.steps{list-style:none;margin:0;padding:0;display:grid;gap:12px;counter-reset:s}
.steps li{counter-increment:s;background:var(--crema);border:1px solid var(--bord);border-radius:16px;padding:14px 16px 14px 60px;position:relative;box-shadow:0 1px 2px #0001;transition:transform .2s}
.steps li:hover{transform:translateX(4px)}
.steps li::before{content:counter(s);position:absolute;left:14px;top:50%;transform:translateY(-50%);width:34px;height:34px;border-radius:50%;background:var(--terra);color:#fff;font-weight:800;display:grid;place-items:center}
.steps b{font-family:var(--f-disp),serif;color:var(--mar);font-size:18px;margin-right:6px}
.steps span{color:var(--gris);font-size:15px}
@media(min-width:768px){.promo{grid-template-columns:1fr 1fr;gap:48px}}
.menu{padding-bottom:90px}
.head{display:flex;align-items:center;gap:16px}
.head h2{font-weight:900;font-size:clamp(32px,5vw,48px)}
.head h3{font-weight:800;font-size:26px}
.line{height:2px;flex:1;background:linear-gradient(90deg,var(--terra),transparent)}
.sbar{position:sticky;top:64px;z-index:20;background:rgba(247,237,220,.94);backdrop-filter:blur(8px);border-bottom:1px solid var(--bord);margin-top:20px;padding:12px 0}
.tools{display:flex;flex-direction:column;gap:12px}
.tools input{width:100%;border:1px solid #d9c6a6;background:var(--crema);border-radius:12px;padding:10px 16px;font:inherit;color:var(--txt);transition:border-color .2s,box-shadow .2s}
.tools input:focus{outline:none;border-color:var(--mar);box-shadow:0 0 0 3px rgba(11,47,74,.12)}
.chips{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none}
.chip{white-space:nowrap;border:1px solid #d9c6a6;background:var(--crema);border-radius:99px;padding:8px 16px;font-weight:600;font-size:14px;color:var(--mar)}
.chip:hover{border-color:var(--mar);transform:translateY(-1px)}
.chip[aria-pressed="true"]{background:var(--mar);color:#fff;border-color:var(--mar);box-shadow:0 6px 14px -8px var(--mar)}
@media(min-width:768px){.tools{flex-direction:row;align-items:center}.tools input{width:300px}}
.gridwrap{margin-top:34px}
.grid,.grp{display:contents}
.gridwrap .grid{display:grid;gap:30px 22px;grid-template-columns:1fr}
@media(min-width:640px){.gridwrap .grid{grid-template-columns:repeat(2,1fr)}}
@media(min-width:1024px){.gridwrap .grid{grid-template-columns:repeat(3,1fr)}}
.full{grid-column:1/-1;margin-top:26px}
.grp:first-child .full{margin-top:0}
.empty{grid-column:1/-1;text-align:center;padding:40px;border:1px dashed #cdb892;border-radius:16px;color:var(--gris)}
.card{position:relative;background:var(--crema);border:1px solid var(--bord);border-radius:20px;padding:12px;display:flex;flex-direction:column;box-shadow:0 2px 6px rgba(80,50,10,.06);animation:up .6s both cubic-bezier(.2,.7,.2,1);transition:transform .25s,box-shadow .25s}
.card:hover{transform:translateY(-5px);box-shadow:0 18px 36px -18px rgba(80,50,10,.35)}
.card.star{border:2px solid var(--terra);box-shadow:0 14px 34px -16px rgba(200,69,43,.55)}
.fw{position:relative}
.foto{aspect-ratio:4/3;border-radius:14px;background-size:cover;background-position:center;overflow:hidden;position:relative}
.ph{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;color:rgba(11,47,74,.5)}
.ph::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(135deg,rgba(255,255,255,.18) 0 12px,transparent 12px 24px);transition:transform .5s}
.card:hover .ph::before{transform:scale(1.15) rotate(2deg)}
.phi,.pht{position:relative}
.pht{font-size:12px;font-weight:700;letter-spacing:.04em}
.ph-ac{background:linear-gradient(135deg,#BFE3DF,#7FB8C4)}
.ph-ct{background:linear-gradient(135deg,#F9DDB0,#EDA46B)}
.ph-co{background:linear-gradient(135deg,#F6BFA9,#DF7A5B)}
.ph-al{background:linear-gradient(135deg,#F8E1A0,#E0A526)}
.ph-be{background:linear-gradient(135deg,#D3E2EF,#86AACB)}
.badge{position:absolute;top:10px;left:10px;background:var(--oro);color:var(--mar);font-size:12px;font-weight:800;padding:4px 12px;border-radius:99px;animation:glow 2.4s infinite}
.cb{padding:14px 6px 6px;display:flex;flex-direction:column;flex:1}
.row{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
.row h3{font-weight:800;font-size:20px;line-height:1.2}
.pill{flex-shrink:0;background:var(--terra);color:#fff;font-weight:800;font-size:18px;border-radius:99px;padding:2px 13px}
.desc{margin-top:8px;font-size:14px;color:var(--gris);flex:1}
.hint{margin-top:14px;font-size:13px;font-weight:700;color:var(--mar)}
.sab.shake{animation:shk .5s}
.opts{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
.opt{border:1px solid #d9c6a6;background:#fff;border-radius:10px;padding:8px 12px;font-size:14px;font-weight:600;color:var(--mar)}
.opt:hover{border-color:var(--mar);transform:translateY(-1px)}
.opt[aria-pressed="true"]{background:var(--mar);color:#fff;border-color:var(--mar)}
.opt.fl[aria-pressed="true"]{background:var(--terra);border-color:var(--terra)}
.acts{display:grid;grid-template-columns:3fr 2fr;gap:8px;margin-top:16px}
.b-add{background:var(--mar);color:#fff;border:0;border-radius:12px;padding:11px;font-weight:700}.b-add:hover{background:var(--mar2);box-shadow:0 8px 16px -10px var(--mar)}
.b-wa{background:var(--ver);color:#fff;border-radius:12px;padding:11px;font-weight:700;font-size:14px;text-align:center;transition:transform .15s,background .2s}.b-wa:hover{background:#15803D;transform:translateY(-1px)}
.foot{background:linear-gradient(180deg,#0B2F4A,#071E31);color:#fff}
.cols{padding-top:56px;padding-bottom:56px;display:grid;gap:40px}
@media(min-width:768px){.cols{grid-template-columns:repeat(3,1fr)}}
.big2{font-weight:900;font-size:24px;margin-top:12px;color:#fff}
.soft{color:#cbd5e1;margin-top:8px}
.foot b{font-weight:800;display:block}
.tel{display:block;margin-top:8px;font-size:24px;font-weight:800}
.legal{text-align:center;color:#94a3b8;font-size:14px;padding:0 16px 100px}
.fbar{position:fixed;z-index:30;left:50%;transform:translateX(-50%);bottom:16px;width:min(560px,calc(100% - 24px));display:flex;justify-content:space-between;align-items:center;gap:12px;background:var(--mar);color:#fff;border:2px solid var(--oro);border-radius:18px;padding:12px 18px;font-weight:800;box-shadow:0 14px 30px -8px rgba(0,0,0,.5);animation:pop .45s both cubic-bezier(.2,.9,.3,1.2)}
.fbar:hover{background:var(--mar2)}
.ea .fbar:active{transform:translateX(-50%) scale(.97)}
.fl-l{display:flex;align-items:center;gap:8px;font-weight:600}
.fl-n{background:var(--oro);color:var(--mar);min-width:28px;height:28px;border-radius:99px;display:inline-grid;place-items:center;font-weight:900;animation:bump .45s}
.ov{position:fixed;inset:0;background:rgba(4,20,34,.6);z-index:40;opacity:0;visibility:hidden;transition:opacity .25s,visibility .25s}
.ov.on{opacity:1;visibility:visible}
.cart{position:fixed;z-index:50;left:0;right:0;bottom:0;max-height:92vh;background:var(--arena);border-radius:24px 24px 0 0;display:flex;flex-direction:column;transform:translateY(100%);visibility:hidden;transition:transform .35s cubic-bezier(.2,.8,.2,1),visibility .35s}
.cart.on{transform:none;visibility:visible}
@media(min-width:640px){.cart{top:0;left:auto;width:430px;max-height:none;border-radius:0;transform:translateX(100%)}}
.chead{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid var(--bord)}
.chead h2{font-weight:900;font-size:26px}
.x{width:40px;height:40px;border-radius:50%;border:1px solid #d9c6a6;background:#fff}
.x:hover{background:var(--mar);color:#fff}
.cbody{flex:1;overflow-y:auto;padding:16px 20px}
.li{display:flex;justify-content:space-between;gap:12px;padding:12px 0;border-bottom:1px dashed #cdb892;animation:up .35s both}
.li small{color:var(--gris)}
.rm{background:none;border:0;padding:0;color:var(--terra);font-weight:700;font-size:13px;text-decoration:underline}
.qty{display:flex;align-items:center;gap:8px}
.qty button{width:32px;height:32px;border:1px solid #d9c6a6;background:#fff;border-radius:8px;font-weight:800;color:var(--mar)}
.qty button:hover{background:var(--mar);color:#fff}
.form{display:grid;gap:12px;margin-top:20px}
.form label{display:grid;gap:4px;font-size:14px;font-weight:700}
.form input,.form select,.form textarea{border:1px solid #d9c6a6;background:#fff;border-radius:8px;padding:8px 12px;font:inherit;font-weight:400;color:var(--txt)}
.cfoot{padding:16px 20px;border-top:1px solid var(--bord)}
.tot{display:flex;justify-content:space-between;font-family:var(--f-disp),serif;font-weight:900;font-size:24px;margin-bottom:4px;color:var(--mar)}
.soft2{font-size:14px;color:var(--gris);margin-bottom:12px}
.clr{margin-top:8px;width:100%;background:none;border:0;text-decoration:underline;font-weight:600;font-size:14px;color:var(--mar2)}
.toast{position:fixed;left:50%;transform:translateX(-50%);bottom:92px;z-index:60;background:var(--mar);color:#fff;font-weight:700;padding:8px 20px;border-radius:99px;animation:tin .3s both}
@media(max-width:640px){.sun{width:150px;height:150px;top:40px;right:-30px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.ea *,.ea *::before{animation:none!important;transition:none!important}}
`;
