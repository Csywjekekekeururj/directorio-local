'use client';
import { useState } from 'react';

const MENU_CATEGORIES = [
  {
    id: "mariscos",
    titulo: "Mariscos & Aguachiles",
    icono: "🦐",
    items: [
      { id: 1, nombre: "Aguachile Especial", desc: "Camarón fresco bañado en salsa secreta de la casa con pepino y cebolla morada.", precio: 160, tag: "Fresco 🦐", img: "https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=800&q=80" },
      { id: 2, nombre: "Mojarra Frita al Término", desc: "Mojarra doradita acompañada de ensalada fresca, arroz del día y aderezo especial.", precio: 140, tag: "Clásico", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80" },
    ]
  },
  {
    id: "carnes",
    titulo: "Cortes & Asados",
    icono: "🥩",
    items: [
      { id: 3, nombre: "Platillo Mixto", desc: "Carne asada al carbón, chorizo artesanal, longaniza, frijoles de la olla y totopos.", precio: 185, tag: "Recomendado 🔥", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80" },
      { id: 4, nombre: "Carne Asada al Carbón", desc: "Corte jugoso acompañado de cebollitas asadas, chiles toreados y guacamole.", precio: 150, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" },
      { id: 5, nombre: "Costilla Frita", desc: "Crujiente por fuera, suave por dentro, con sazón casero de la casa.", precio: 130, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" },
    ]
  },
  {
    id: "antojos",
    titulo: "Antojos & Caseros",
    icono: "🌮",
    items: [
      { id: 6, nombre: "Milanesa Rellena", desc: "Empanizada dorada rellena de jamón y queso fundido, con papas a la francesa.", precio: 135, img: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80" },
      { id: 7, nombre: "Chiles Rellenos Tradicionales", desc: "Capeados al estilo tradicional, rellenos de queso o carne con caldillo de tomate.", precio: 110, img: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=800&q=80" },
    ]
  },
  {
    id: "bebidas",
    titulo: "Bebidas & Camaroneras",
    icono: "🍻",
    items: [
      { id: 8, nombre: "Camaronera (Michelada c/ Camarón)", desc: "Cerveza bien fría escarchada con chilito, salsas negras y brocheta de camarones.", precio: 95, tag: "Especialidad 🍻", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" },
    ]
  }
];

export default function Home() {
  const [carrito, setCarrito] = useState({});
  const [catActiva, setCatActiva] = useState('todas');
  const [modalCarrito, setModalCarrito] = useState(false);
  const [sugNombre, setSugNombre] = useState('');
  const [sugMensaje, setSugMensaje] = useState('');

  const agregarItem = (nombre, precio) => {
    setCarrito(prev => {
      const actual = prev[nombre] ? prev[nombre].cant : 0;
      return { ...prev, [nombre]: { precio, cant: actual + 1 } };
    });
  };

  const quitarItem = (nombre) => {
    setCarrito(prev => {
      const copia = { ...prev };
      if (copia[nombre].cant > 1) {
        copia[nombre].cant -= 1;
      } else {
        delete copia[nombre];
      }
      return copia;
    });
  };

  const totalArticulos = Object.values(carrito).reduce((acc, item) => acc + item.cant, 0);
  const totalPrecio = Object.values(carrito).reduce((acc, item) => acc + (item.precio * item.cant), 0);

  const enviarWhatsApp = () => {
    if (totalArticulos === 0) return;
    let texto = "Hola, quiero hacer el siguiente pedido en El Buen Sabor:\n\n";
    Object.entries(carrito).forEach(([nombre, item]) => {
      texto += `• ${item.cant}x ${nombre} - $${item.precio * item.cant}\n`;
    });
    texto += `\n*Total a pagar: $${totalPrecio} MXN*\n\n¿Me confirman tiempo de preparación y si hay servicio a domicilio?`;
    window.open(`https://wa.me/529620000000?text=${encodeURIComponent(texto)}`, '_blank');
  };

  const enviarSugerencia = (e) => {
    e.preventDefault();
    const texto = `Hola, les dejo un comentario desde su web:\n\n• De: ${sugNombre || 'Cliente'}\n• Mensaje: ${sugMensaje}`;
    window.open(`https://wa.me/529620000000?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased pb-28 selection:bg-orange-500 selection:text-white">
      
      {/* Header Fijo */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-3">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center font-black text-slate-950 text-lg shadow-md shadow-orange-500/20">
              BS
            </div>
            <div>
              <h1 className="font-bold tracking-tight text-base text-white leading-tight">El Buen Sabor</h1>
              <p className="text-[10px] text-orange-400 font-medium">Barrio de San Ramón</p>
            </div>
          </div>

          <a href="tel:9620000000" className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-orange-400 font-bold px-3 py-1.5 rounded-xl text-xs transition-colors flex items-center gap-1">
            📞 <span className="hidden sm:inline">Llamar</span>
          </a>
        </div>
      </header>

      {/* Hero Portada */}
      <section className="relative overflow-hidden py-10 px-4 border-b border-slate-800/80">
        <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80')" }}></div>
        <div className="relative z-10 max-w-xl mx-auto text-center space-y-3">
          <span className="inline-block bg-orange-500/10 text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
            🍤 ¡Comida rica en San Ramón!
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Mariscos, carnes y sazón <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">al punto</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">Pide directo desde tu celular y recibe rápido.</p>
        </div>
      </section>

      {/* Menú de Filtros / Pestañas Horizontales para Celular */}
      <div className="sticky top-[57px] z-30 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 px-4 py-2.5 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 max-w-5xl mx-auto min-w-max">
          <button 
            onClick={() => setCatActiva('todas')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${catActiva === 'todas' ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/20' : 'bg-slate-900 text-slate-400 border border-slate-800'}`}
          >
            🍽️ Todo el menú
          </button>
          {MENU_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCatActiva(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${catActiva === cat.id ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/20' : 'bg-slate-900 text-slate-400 border border-slate-800'}`}
            >
              <span>{cat.icono}</span> {cat.titulo}
            </button>
          ))}
        </div>
      </div>

      {/* Menú de Platillos */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-10">
        {MENU_CATEGORIES.filter(c => catActiva === 'todas' || catActiva === c.id).map((cat) => (
          <div key={cat.id} className="space-y-4">
            <h3 className="text-xl font-black text-white border-b border-slate-800 pb-2 flex items-center gap-2">
              <span>{cat.icono}</span> {cat.titulo}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.items.map((item) => (
                <div key={item.id} className="bg-slate-900/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between group">
                  <div>
                    <div className="h-44 overflow-hidden relative bg-slate-950">
                      <img src={item.img} alt={item.nombre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      {item.tag && (
                        <span className="absolute top-2.5 right-2.5 bg-slate-950/90 text-orange-400 font-bold px-2.5 py-0.5 rounded-full text-[10px] border border-orange-500/30">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <div className="p-4 space-y-1">
                      <h4 className="text-base font-bold text-white">{item.nombre}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="p-4 pt-0 flex justify-between items-center">
                    <span className="text-orange-400 font-black text-base">\${item.precio} <span className="text-[10px] text-slate-500">MXN</span></span>
                    <button 
                      onClick={() => agregarItem(item.nombre, item.precio)} 
                      className="bg-orange-500 hover:bg-orange-400 active:scale-95 text-slate-950 font-bold px-3.5 py-1.5 rounded-xl text-xs transition-all shadow-md shadow-orange-500/20"
                    >
                      + Agregar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Ubicación y Buzón */}
        <section className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-slate-800">
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl space-y-3">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">¿Cómo llegar?</span>
            <h4 className="text-lg font-bold text-white">Ubicación Exacta</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              📍 <strong>Calle Puebla núm #8, Barrio de San Ramón</strong>.<br />
              A un costado del mercadito de San Ramón.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl space-y-3">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Atención Directa</span>
            <h4 className="text-lg font-bold text-white">Buzón de Sugerencias</h4>
            <form onSubmit={enviarSugerencia} className="space-y-2">
              <input type="text" placeholder="Tu nombre" value={sugNombre} onChange={(e) => setSugNombre(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500" />
              <textarea rows="2" required placeholder="Tu comentario o duda..." value={sugMensaje} onChange={(e) => setSugMensaje(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500 resize-none"></textarea>
              <button type="submit" className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 rounded-xl text-xs border border-slate-700">
                Enviar mensaje
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* BARRA INFERIOR FLOTANTE ESTILO UBEREATS (Para Celular) */}
      {totalArticulos > 0 && (
        <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto animate-bounce-short">
          <button 
            onClick={() => setModalCarrito(true)}
            className="w-full bg-gradient-to-r from-orange-500 to-amber-400 text-slate-950 font-black py-3.5 px-5 rounded-2xl shadow-xl shadow-orange-500/30 flex justify-between items-center text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="bg-slate-950 text-orange-400 px-2 py-0.5 rounded-lg text-xs">{totalArticulos}</span>
              <span>Ver mi pedido</span>
            </div>
            <span>\${totalPrecio} MXN →</span>
          </button>
        </div>
      )}

      {/* MODAL VENTANA DE CARRITO */}
      {modalCarrito && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-t-3xl sm:rounded-3xl p-6 space-y-5 animate-slide-up">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Tu Pedido ({totalArticulos})</h3>
              <button onClick={() => setModalCarrito(false)} className="text-slate-400 hover:text-white font-bold text-sm p-1">✕</button>
            </div>

            <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1 text-xs">
              {Object.entries(carrito).map(([nombre, item]) => (
                <div key={nombre} className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <span className="bg-orange-500/20 text-orange-400 font-bold px-2 py-0.5 rounded text-[11px]">{item.cant}x</span>
                    <span className="text-white font-medium">{nombre}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-orange-400 font-bold">\${item.precio * item.cant}</span>
                    <button onClick={() => quitarItem(nombre)} className="text-slate-500 hover:text-red-400 font-bold px-1">✕</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex justify-between text-sm font-bold">
              <span className="text-slate-400">Total a pagar:</span>
              <span className="text-orange-400 text-base">\${totalPrecio} MXN</span>
            </div>

            <button 
              onClick={enviarWhatsApp}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-400 text-slate-950 font-black py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20"
            >
              Confirmar e ir a WhatsApp 🚀
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
