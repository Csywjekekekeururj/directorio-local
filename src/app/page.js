"use client";
import { useEffect, useState } from "react";
import {
  Menu, X, MessageCircle, Phone, MapPin, Clock, Users, Sparkles, PartyPopper, Waves,
  Lightbulb, Fan, Armchair, Camera, Cake, Heart, GraduationCap, Baby, Gift, Crown,
  Check, ChevronLeft, ChevronRight, ChevronDown, CalendarDays, Send, Flower2,
  ShieldCheck, Building2, Briefcase,
} from "lucide-react";

// ===== CONFIG =====
const BRAND = "Rincón Mágico";
const TAGLINE = "La Casa del León";
const CITY = "Chiapas, México";
const PRICE = "$4,200";
const PROMO = "del 25 al 29 de octubre";
const PHONES = [
  { label: "962 481 9517", wa: "529624819517" },
  { label: "962 518 6128", wa: "529625186128" },
];
// Imagen: pon flyer.jpg en /public
const waLink = (text, i = 0) => `https://wa.me/${PHONES[i].wa}?text=${encodeURIComponent(text)}`;

const GOLD_TEXT = "bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-600 bg-clip-text text-transparent";
const GOLD_BTN = "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 px-6 py-3 font-semibold text-black shadow-lg shadow-amber-500/30 transition hover:scale-105";
const GHOST_BTN = "inline-flex items-center justify-center gap-2 rounded-full border border-amber-400/40 px-6 py-3 font-semibold text-amber-100 transition hover:bg-amber-400/10";
const CARD = "rounded-2xl border border-amber-400/15 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-white/[0.07]";

// ===== DATOS =====
const links = [
  ["#paquete", "Paquete"],
  ["#ambiente", "Ambiente"],
  ["#eventos", "Eventos"],
  ["#reservar", "Reservar"],
  ["#faq", "Preguntas"],
];
const stats = [
  ["6", "horas de renta"],
  ["30", "personas con mobiliario"],
  ["1", "solo paquete"],
  [PRICE, "MXN precio total"],
];
const included = [
  { icon: Building2, title: "Renta de salón por 6 horas", text: "Tiempo suficiente para recibir a tus invitados, comer, bailar y celebrar sin prisas." },
  { icon: PartyPopper, title: "Decoración básica", text: "Ambientación elegante en tonos dorados y crema para que tu evento luzca desde el primer momento." },
  { icon: Armchair, title: "Mobiliario para 30 personas", text: "Mesas y sillas listas para tus invitados, sin que tengas que rentar nada por separado." },
];
const ambience = [
  { icon: Lightbulb, title: "Luces cálidas", text: "Guirnaldas de luces colgantes que crean una atmósfera mágica al caer la noche." },
  { icon: Flower2, title: "Jardín tropical", text: "Plantas y flores que enmarcan el salón y le dan un toque natural y fresco." },
  { icon: Waves, title: "Área de alberca", text: "Una alberca con fuente que le da vista y elegancia a todo el espacio." },
  { icon: Fan, title: "Ventilación", text: "Salón con ventiladores de techo para que todos estén cómodos." },
  { icon: Sparkles, title: "Cortinas y detalles", text: "Cortinas blancas y acabados cálidos que hacen cada foto especial." },
  { icon: Camera, title: "Listo para fotos", text: "Rincones pensados para lucirse en fotos y recuerdos inolvidables." },
];
const events = [
  { icon: Crown, name: "XV años" },
  { icon: Heart, name: "Bodas y aniversarios" },
  { icon: Cake, name: "Cumpleaños" },
  { icon: Baby, name: "Baby shower" },
  { icon: Gift, name: "Bautizos y primeras comuniones" },
  { icon: GraduationCap, name: "Graduaciones" },
  { icon: Briefcase, name: "Reuniones y convivios" },
  { icon: Users, name: "Fiestas familiares" },
];
const steps = [
  { n: "1", title: "Elige tu fecha", text: "Selecciona en el calendario el día que quieres celebrar." },
  { n: "2", title: "Escríbenos por WhatsApp", text: "Llena el formulario y se abre el chat con tus datos ya escritos." },
  { n: "3", title: "Confirma tu reservación", text: "Te confirmamos disponibilidad y los pasos para apartar tu fecha." },
  { n: "4", title: "Celebra en grande", text: "Llega el día y disfruta; el salón ya está listo para ti." },
];
const faqs = [
  { q: "¿Qué incluye el paquete?", a: "Renta del salón por 6 horas, decoración básica y mobiliario para 30 personas." },
  { q: "¿Cuánto cuesta?", a: "El precio total del paquete es de $4,200 MXN." },
  { q: "¿Cómo aparto mi fecha?", a: "Escríbenos por WhatsApp a cualquiera de los dos números o llena el formulario de esta página y te confirmamos disponibilidad." },
  { q: "¿Cuántas horas puedo usar el salón?", a: "El paquete contempla 6 horas de renta." },
  { q: "¿Y si somos más de 30 personas?", a: "El paquete incluye mobiliario para 30 personas. Escríbenos por WhatsApp para ver opciones si necesitas más lugares." },
  { q: "¿Cómo es la decoración?", a: "La decoración básica va en tonos dorados y crema, como la decoración de referencia del flyer. Pregúntanos por WhatsApp para ver opciones." },
  { q: "¿Hasta cuándo está la promoción?", a: "La promoción del flyer es del 25 al 29 de octubre. Escríbenos para confirmar si sigue vigente." },
];
const eventTypes = ["XV años", "Boda o aniversario", "Cumpleaños", "Baby shower", "Bautizo o comunión", "Graduación", "Reunión o convivio", "Otro"];
const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const DAYS = ["D", "L", "M", "M", "J", "V", "S"];

// ===== COMPONENTES =====
function SectionTitle({ kicker, title, text }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">{kicker}</p>
      <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-white/60">{text}</p>}
      <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-amber-400/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <Crown className="text-amber-400" size={22} />
          <span className={`${GOLD_TEXT} font-serif text-xl font-bold`}>{BRAND}</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([h, l]) => (
            <a key={h} href={h} className="text-sm text-white/70 transition hover:text-amber-300">{l}</a>
          ))}
          <a href="#reservar" className={`${GOLD_BTN} !px-5 !py-2 text-sm`}>Reserva tu fecha</a>
        </nav>
        <button aria-label="Menú" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-amber-400/10 bg-black/95 px-4 pb-4 md:hidden">
          {links.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block py-3 text-white/80">{l}</a>
          ))}
          <a href="#reservar" onClick={() => setOpen(false)} className={`${GOLD_BTN} mt-2 w-full`}>Reserva tu fecha</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-32">
      <div className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-amber-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-52 h-[28rem] w-[28rem] rounded-full bg-yellow-600/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-16 flex justify-between px-4">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="h-2 w-2 animate-pulse rounded-full bg-amber-300 shadow-[0_0_14px_4px_rgba(251,191,36,0.6)]" style={{ animationDelay: `${i * 0.25}s`, marginTop: i % 2 ? 14 : 0 }} />
        ))}
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs text-amber-200">
            <Sparkles size={14} /> Promoción {PROMO}
          </span>
          <p className="mt-6 text-sm uppercase tracking-[0.35em] text-white/60">Salón de eventos</p>
          <h1 className="mt-2 font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            <span className={GOLD_TEXT}>¡Celebra en grande!</span>
          </h1>
          <p className="mt-2 font-serif text-2xl text-amber-100/90">{BRAND} · {TAGLINE}</p>
          <p className="mx-auto mt-5 max-w-lg text-lg text-white/70 lg:mx-0">
            Tu fiesta en un solo paquete: salón, decoración y mobiliario en un espacio con jardín, luces y mucha magia.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#reservar" className={GOLD_BTN}><CalendarDays size={18} /> Reserva tu fecha</a>
            <a href={waLink("Hola, quiero información del paquete del salón Rincón Mágico")} className={GHOST_BTN}>
              <MessageCircle size={18} /> Escribir por WhatsApp
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-amber-300/40 via-yellow-600/20 to-transparent blur-xl" />
          <div className="relative rounded-[2rem] border border-amber-400/40 bg-gradient-to-b from-zinc-900 to-black p-8 text-center shadow-2xl shadow-amber-500/10">
            <Crown className="mx-auto text-amber-400" size={40} />
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-amber-300">Precio total</p>
            <p className={`${GOLD_TEXT} mt-2 font-serif text-6xl font-bold sm:text-7xl`}>{PRICE}</p>
            <p className="font-serif text-xl text-amber-100">MXN</p>
            <ul className="mt-6 space-y-3 text-left">
              {["Renta de salón por 6 horas", "Decoración básica", "Mobiliario para 30 personas"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-white/85">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400/20 text-amber-300"><Check size={14} /></span>
                  {t}
                </li>
              ))}
            </ul>
            <a href="#reservar" className={`${GOLD_BTN} mt-7 w-full`}>Apartar mi fecha</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-amber-400/10 bg-amber-400/[0.04] px-4 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map(([n, l]) => (
          <div key={l} className="text-center">
            <p className={`${GOLD_TEXT} font-serif text-4xl font-bold`}>{n}</p>
            <p className="mt-1 text-sm text-white/60">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Package() {
  return (
    <section id="paquete" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="Todo en uno" title="Tu fiesta en un solo paquete" text="Sin vueltas ni costos escondidos: esto es lo que incluye." />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {included.map(({ icon: Icon, title, text }) => (
            <div key={title} className={CARD}>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/50 bg-black text-amber-300">
                <Icon size={26} />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/60">{text}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-amber-400/40 bg-gradient-to-r from-amber-400/10 via-transparent to-amber-400/10 p-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Precio total</p>
            <p className="font-serif text-3xl font-bold">{PRICE} MXN</p>
          </div>
          <p className="max-w-sm text-sm text-white/65">Promoción {PROMO}. Escríbenos para confirmar vigencia y apartar tu fecha.</p>
          <a href={waLink("Hola, quiero apartar mi fecha en Rincón Mágico")} className={GOLD_BTN}>Apartar ahora</a>
        </div>
      </div>
    </section>
  );
}

function Ambience() {
  return (
    <section id="ambiente" className="bg-white/[0.03] px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="El lugar" title="Un ambiente que enamora" text="Jardín, luces y detalles que convierten tu evento en un recuerdo especial." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ambience.map(({ icon: Icon, title, text }) => (
            <div key={title} className={CARD}>
              <Icon className="text-amber-400" size={30} />
              <h3 className="mt-4 font-serif text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section id="eventos" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="Para cada ocasión" title="¿Qué vas a celebrar?" text="Nuestro salón se adapta a tu evento." />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {events.map(({ icon: Icon, name }) => (
            <div key={name} className="group flex flex-col items-center rounded-2xl border border-amber-400/15 bg-white/[0.04] px-4 py-8 text-center transition hover:border-amber-400/60 hover:bg-amber-400/10">
              <Icon className="text-amber-400 transition group-hover:scale-125" size={34} />
              <p className="mt-4 font-serif text-lg">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Promo() {
  return (
    <section className="bg-white/[0.03] px-4 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">Promoción {PROMO}</p>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Aprovecha el paquete completo</h2>
          <p className="mt-4 text-white/65">
            Salón, decoración básica y mobiliario para 30 personas por un solo precio. Mira el flyer y reserva tu fecha por WhatsApp.
          </p>
          <ul className="mt-6 space-y-3">
            {["Precio total de " + PRICE + " MXN", "6 horas de renta", "Decoración en tonos dorados", "Atención directa por WhatsApp"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-white/85"><Check className="text-amber-400" size={18} /> {t}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            {PHONES.map((p, i) => (
              <a key={p.wa} href={waLink("Hola, quiero reservar el salón Rincón Mágico", i)} className={i === 0 ? GOLD_BTN : GHOST_BTN}>
                <MessageCircle size={18} /> {p.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <img src="/flyer.jpg" alt="Flyer del paquete del salón Rincón Mágico" className="w-full rounded-3xl border border-amber-400/30 shadow-2xl shadow-amber-500/20" />
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="Así de fácil" title="Reserva en 4 pasos" />
        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-amber-400/15 bg-white/[0.04] p-6">
              <span className={`${GOLD_TEXT} font-serif text-5xl font-bold`}>{s.n}</span>
              <h3 className="mt-3 font-serif text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Calendar({ today, value, onChange }) {
  const [view, setView] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const y = view.getFullYear();
  const m = view.getMonth();
  const offset = new Date(y, m, 1).getDay();
  const total = new Date(y, m + 1, 0).getDate();
  const cells = [...Array(offset).fill(null), ...Array.from({ length: total }, (_, i) => i + 1)];
  const isCurrentMonth = y === today.getFullYear() && m === today.getMonth();

  return (
    <div className="rounded-2xl border border-amber-400/20 bg-black/40 p-4">
      <div className="mb-3 flex items-center justify-between">
        <button type="button" disabled={isCurrentMonth} onClick={() => setView(new Date(y, m - 1, 1))} className="rounded-full p-2 text-amber-300 transition hover:bg-amber-400/10 disabled:opacity-30" aria-label="Mes anterior">
          <ChevronLeft size={18} />
        </button>
        <p className="font-serif text-lg">{MONTHS[m]} {y}</p>
        <button type="button" onClick={() => setView(new Date(y, m + 1, 1))} className="rounded-full p-2 text-amber-300 transition hover:bg-amber-400/10" aria-label="Mes siguiente">
          <ChevronRight size={18} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-white/40">
        {DAYS.map((d, i) => <span key={i} className="py-1">{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((d, i) => {
          if (d === null) return <span key={i} />;
          const date = new Date(y, m, d);
          const past = date < today;
          const selected = value && value.getTime() === date.getTime();
          return (
            <button
              key={i}
              type="button"
              disabled={past}
              onClick={() => onChange(date)}
              className={`aspect-square rounded-lg text-sm transition ${
                selected ? "bg-gradient-to-br from-amber-300 to-yellow-600 font-bold text-black" : past ? "text-white/20" : "text-white/85 hover:bg-amber-400/20"
              }`}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Reservation() {
  const [today, setToday] = useState(null);
  const [date, setDate] = useState(null);
  const [name, setName] = useState("");
  const [type, setType] = useState(eventTypes[0]);
  const [guests, setGuests] = useState("30");
  const [notes, setNotes] = useState("");
  const [phone, setPhone] = useState(0);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    setToday(d);
  }, []);

  const dateText = date
    ? date.toLocaleDateString("es-MX", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
    : "";

  const submit = (e) => {
    e.preventDefault();
    if (name.trim().length < 2) return setError("Escribe tu nombre.");
    if (!date) return setError("Elige una fecha en el calendario.");
    const g = parseInt(guests, 10);
    if (!g || g < 1) return setError("Escribe cuántos invitados esperas.");
    setError("");
    setSent(true);
    const msg = `Hola, soy ${name}. Quiero reservar el salón Rincón Mágico para ${type} el ${dateText}, con ${g} invitados.${notes.trim() ? " " + notes.trim() : ""}`;
    window.open(waLink(msg, phone), "_blank");
  };

  const field = "w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 outline-none transition focus:border-amber-400";

  return (
    <section id="reservar" className="bg-white/[0.03] px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle kicker="Reservación" title="Reserva tu fecha" text="Elige el día, llena tus datos y seguimos por WhatsApp." />
        {sent ? (
          <div className="mx-auto mt-12 max-w-lg rounded-2xl border border-amber-400/40 bg-amber-400/10 p-10 text-center">
            <Check className="mx-auto text-amber-300" size={44} />
            <p className="mt-3 font-serif text-2xl">¡Solicitud enviada!</p>
            <p className="mt-2 text-white/65">Se abrió WhatsApp con tus datos. Te confirmamos disponibilidad por ahí.</p>
            <button className="mt-4 text-sm text-white/60 underline" onClick={() => setSent(false)}>Hacer otra solicitud</button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-12 grid gap-6 md:grid-cols-2">
            <div>
              {today ? <Calendar today={today} value={date} onChange={setDate} /> : <div className="h-72 animate-pulse rounded-2xl bg-white/5" />}
              <p className="mt-3 flex items-center gap-2 text-sm text-amber-200">
                <CalendarDays size={16} /> {date ? dateText : "Aún no eliges fecha"}
              </p>
            </div>
            <div className="space-y-4">
              <input className={field} placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
              <div className="relative">
                <select className={`${field} appearance-none`} value={type} onChange={(e) => setType(e.target.value)}>
                  {eventTypes.map((t) => <option key={t} value={t} className="bg-zinc-900">{t}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              </div>
              <div>
                <input className={field} type="number" min="1" placeholder="Número de invitados" value={guests} onChange={(e) => setGuests(e.target.value)} />
                <p className="mt-1 text-xs text-white/45">El paquete incluye mobiliario para 30 personas. Si son más, confirma por WhatsApp.</p>
              </div>
              <textarea className={field} rows={3} placeholder="Notas (colores, tipo de decoración, dudas...)" value={notes} onChange={(e) => setNotes(e.target.value)} />
              <div>
                <p className="mb-2 text-sm text-white/60">Enviar a:</p>
                <div className="flex gap-2">
                  {PHONES.map((p, i) => (
                    <button key={p.wa} type="button" onClick={() => setPhone(i)} className={`flex-1 rounded-xl border px-3 py-2 text-sm transition ${phone === i ? "border-amber-400 bg-amber-400/15 text-amber-100" : "border-white/10 text-white/60 hover:border-amber-400/40"}`}>
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
              {error && <p className="text-sm text-red-400">{error}</p>}
              <button type="submit" className={`${GOLD_BTN} w-full`}><Send size={18} /> Enviar solicitud por WhatsApp</button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle kicker="Dudas" title="Preguntas frecuentes" />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-amber-400/15 bg-white/[0.04]">
              <button className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold" onClick={() => setOpen(open === i ? null : i)}>
                {f.q}
                <ChevronDown size={18} className={`shrink-0 text-amber-400 transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-5 pb-5 text-white/65">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-4 pb-24">
      <div className="mx-auto max-w-4xl rounded-3xl border border-amber-400/40 bg-gradient-to-br from-amber-400/15 via-black to-amber-600/10 p-10 text-center">
        <Crown className="mx-auto text-amber-400" size={36} />
        <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">¡Reserva tu fecha!</h2>
        <p className="mx-auto mt-3 max-w-lg text-white/65">Escríbenos hoy y celebra en grande en {BRAND}.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {PHONES.map((p, i) => (
            <a key={p.wa} href={waLink("Hola, quiero reservar el salón Rincón Mágico", i)} className={i === 0 ? GOLD_BTN : GHOST_BTN}>
              <MessageCircle size={18} /> {p.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-amber-400/10 px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Crown className="text-amber-400" size={22} />
            <span className={`${GOLD_TEXT} font-serif text-xl font-bold`}>{BRAND}</span>
          </div>
          <p className="mt-1 text-sm text-amber-100/80">{TAGLINE}</p>
          <p className="mt-3 flex items-center gap-2 text-sm text-white/50"><ShieldCheck size={16} /> Tu fiesta en un solo paquete.</p>
        </div>
        <div>
          <p className="font-semibold">Enlaces</p>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            {links.map(([h, l]) => <li key={h}><a href={h} className="hover:text-amber-300">{l}</a></li>)}
          </ul>
        </div>
        <div className="space-y-2 text-sm text-white/60">
          <p className="font-semibold text-white">Contacto</p>
          {PHONES.map((p) => (
            <p key={p.wa} className="flex items-center gap-2"><Phone size={16} /> {p.label}</p>
          ))}
          <p className="flex items-center gap-2"><MapPin size={16} /> {CITY}</p>
          <p className="flex items-center gap-2"><Clock size={16} /> Promoción {PROMO}</p>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-white/35">© 2026 {BRAND} · {TAGLINE}. Todos los derechos reservados.</p>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a href={waLink("Hola, quiero información del salón Rincón Mágico")} aria-label="WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/40 transition hover:scale-110">
      <MessageCircle size={28} />
    </a>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#0a0806] text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Package />
      <Ambience />
      <Events />
      <Promo />
      <Steps />
      <Reservation />
      <Faq />
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}