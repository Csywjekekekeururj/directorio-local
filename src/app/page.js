'use client';
import { useState } from 'react';

const MENU_CATEGORIES = [
  {
    titulo: "Especialidades del Mar",
    items: [
      { id: 1, nombre: "Aguachile Especial", desc: "Camarón fresco bañado en salsa secreta de la casa con pepino fresco y cebolla morada.", precio: 160, tag: "Fresco 🦐", img: "https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=800&q=80" },
      { id: 2, nombre: "Mojarra Frita al Termino", desc: "Mojarra doradita acompañada de ensalada fresca, arroz del día y aderezo especial.", precio: 140, tag: "Clásico", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80" },
    ]
  },
  {
    titulo: "Cortes & Asados",
    items: [
      { id: 3, nombre: "Platillo Mixto", desc: "Carne asada al carbón, chorizo artesanal, longaniza, frijoles de la olla y totopos.", precio: 185, tag: "Recomendado 🔥", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80" },
      { id: 4, nombre: "Carne Asada al Carbón", desc: "Corte jugoso acompañado de cebollitas asadas, chiles toreados y guacamole.", precio: 150, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" },
      { id: 5, nombre: "Costilla Frita", desc: "Crujiente por fuera, suave por dentro, con sazón casero de la casa.", precio: 130, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" },
    ]
  },
  {
    titulo: "Antojos & Caseros",
    items: [
      { id: 6, nombre: "Milanesa Rellena", desc: "Empanizada dorada rellena de jamón y queso fundido, con papas a la francesa.", precio: 135, img: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80" },
      { id: 7, nombre: "Chiles Rellenos Tradicionales", desc: "Capeados al estilo tradicional, rellenos de queso o carne con caldillo de tomate.", precio: 110, img: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=800&q=80" },
    ]
  },
  {
    titulo: "Bebidas & Camaroneras",
    items: [
      { id: 8, nombre: "Camaronera (Michelada c/ Camarón)", desc: "Cerveza bien fría escarchada con chilito, salsas negras y brocheta de camarones.", precio: 95, tag: "Especialidad 🍻", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" },
    ]
  }
];

export default function Home() {
  const [carrito, setCarrito] = useState({});
  const [sugNombre, setSugNombre] = useState('');
  const [sugMensaje, setSugMensaje] = useState('');
  const [alertaCopiado, setAlertaCopiado] = useState(false);

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
    texto += `\n*Total a pagar: $${totalPrecio} MXN*\n\n¿Me confirman tiempo de preparación y servicio a domicilio?`;
    window.open(`https://wa.me/529620000000?text=${encodeURIComponent(texto)}`, '_blank');
  };

  const enviarSugerencia = (e) => {
    e.preventDefault();
    const texto = `Hola, les dejo un comentario desde su web:\n\n• De: ${sugNombre || 'Cliente'}\n• Mensaje: ${sugMensaje}`;
    window.open(`https://wa.me/529620000000?text=${encodeURIComponent(texto)}`, '_blank');
  };

  const copiarEnlace = () => {
    navigator.clipboard.writeText(window.location.href);
    setAlertaCopiado(true);
    setTimeout(() => setAlertaCopiado(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-orange-500 selection:text-white">
      
      {/* Alerta flotante de copiado */}
      {alertaCopiado && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-500 text-slate-950 font-bold px-4 py-2 rounded-xl shadow-lg text-xs animate-bounce">
          ¡Enlace copiado al portapapeles! 📋
        </div>
      )}

      {/* Barra de navegación superior profesional */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center font-black text-slate-950 text-xl shadow-lg shadow-orange-500/20">
              BS
            </div>
            <div>
              <h1 className="font-bold tracking-tight text-lg text-white">El Buen Sabor</h1>
              <p className="text-[11px] text-orange-400 font-medium">Barrio de San Ramón</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={copiarEnlace} className="hidden sm:block bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium px-3 py-2 rounded-xl text-xs border border-slate-800 transition-colors">
              Compartir web 🔗
            </button>
            <a href="#contacto" className="bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-md shadow-orange-500/20">
              Ubicación & Pedidos
            </a>
          </div>
        </div>
      </header>

      {/* Hero Impactante con Imagen de Fondo */}
      <section className="relative overflow-hidden py-20 lg:py-28 px-6 border-b border-slate-800/80">
        <div className="absolute inset-0 z-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-1"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 bg-orange-500/10 text-orange-400 border border-orange-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>🦐</span> ¡La comida más rica de todo San Ramón!
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
            Sazón casero, mariscos y carnes <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">al mero punto</span>.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed">
            Arma tu pedido en segundos desde el celular y recíbelo fresco o disfrútalo directamente en nuestro local.
          </p>
        </div>
      </section>

      {/* Contenido Principal / Menú por Categorías */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        
        {MENU_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="space-y-6">
            <div className="border-b border-slate-800 pb-3 flex justify-between items-baseline">
              <h3 className="text-2xl font-black text-white tracking-tight">{cat.titulo}</h3>
              <span className="text-xs text-orange-400 font-bold uppercase tracking-widest">El Buen Sabor</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item) => (
                <div key={item.id} className="bg-slate-900/80 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all flex flex-col justify-between group shadow-lg">
                  <div>
                    <div className="h-52 overflow-hidden relative bg-slate-950">
                      <img src={item.img} alt={item.nombre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      {item.tag && (
                        <span className="absolute top-3 right-3 bg-slate-950/90 backdrop-blur-md text-orange-400 font-bold px-3 py-1 rounded-full text-xs border border-orange-500/30 shadow-sm">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <div className="p-5 space-y-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">{item.nombre}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                  <div className="p-5 pt-0 flex justify-between items-center">
                    <span className="text-orange-400 font-black text-lg">\${item.precio} <span className="text-[10px] text-slate-400 font-normal">MXN</span></span>
                    <button onClick={() => agregarItem(item.nombre, item.precio)} className="bg-orange-500 hover:bg-orange-400 active:scale-95 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-md shadow-orange-500/20">
                      + Agregar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Carrito de Pedido Flotante Dinámico */}
        {totalArticulos > 0 && (
          <section className="sticky bottom-6 z-30 bg-slate-900/95 backdrop-blur-md border-2 border-orange-500/60 rounded-3xl p-6 sm:p-8 space-y-6 max-w-2xl mx-auto shadow-2xl shadow-orange-500/20 animate-fade-in">
            <div className="flex justify-between items-baseline border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Tu orden en curso</span>
                <h3 className="text-2xl font-black text-white">Resumen del Pedido ({totalArticulos})</h3>
              </div>
              <span className="text-2xl font-black text-orange-400">\${totalPrecio} MXN</span>
            </div>

            <div className="space-y-3 text-sm font-medium text-slate-300 max-h-52 overflow-y-auto pr-2">
              {Object.entries(carrito).map(([nombre, item]) => (
                <div key={nombre} className="flex justify-between items-center bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <span className="bg-orange-500/20 text-orange-400 font-bold px-2.5 py-1 rounded-lg text-xs">{item.cant}x</span>
                    <span className="text-white font-semibold text-xs sm:text-sm">{nombre}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-orange-400 font-bold text-xs sm:text-sm">\${item.precio * item.cant}</span>
                    <button onClick={() => quitarItem(nombre)} className="text-slate-500 hover:text-red-400 font-bold text-xs px-1.5 py-0.5 bg-slate-900 rounded-md">✕</button>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={enviarWhatsApp} className="w-full bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-400 hover:to-amber-300 active:scale-[0.99] text-slate-950 font-black py-4 rounded-2xl text-sm transition-all shadow-lg shadow-orange-500/30 uppercase tracking-wider">
              Enviar pedido directo a WhatsApp 🚀
            </button>
          </section>
        )}

        {/* Ubicación y Buzón de Sugerencias */}
        <section id="contacto" className="grid md:grid-cols-2 gap-8 pt-12 border-t border-slate-800/80">
          
          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl space-y-4 shadow-lg">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">¿Cómo llegar?</span>
            <h3 className="text-2xl font-bold text-white">Ubicación Exacta</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              📍 <strong>Calle Puebla núm #8, Barrio de San Ramón</strong>.<br /><br />
              Nos encuentras fácilmente <em>a un costado del mercadito de San Ramón</em>. ¡Te esperamos con el mejor sazón!
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl space-y-4 shadow-lg">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Comentarios & Opiniones</span>
            <h3 className="text-2xl font-bold text-white">Buzón del Cliente</h3>
            
            <form onSubmit={enviarSugerencia} className="space-y-3">
              <input 
                type="text" 
                placeholder="Tu nombre (opcional)" 
                value={sugNombre} 
                onChange={(e) => setSugNombre(e.target.value)} 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors" 
              />
              <textarea 
                rows="3" 
                required 
                placeholder="¿Qué tal te pareció el servicio o la comida?" 
                value={sugMensaje} 
                onChange={(e) => setSugMensaje(e.target.value)} 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
              ></textarea>
              <button type="submit" className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl text-xs transition-colors border border-slate-700">
                Enviar mensaje al restaurantero 💬
              </button>
            </form>
          </div>

        </section>

      </main>

      {/* Pie de página institucional */}
      <footer className="border-t border-slate-900 mt-20 py-10 px-6 text-center text-xs text-slate-500 space-y-2">
        <p className="font-semibold text-slate-400">Restaurante "El Buen Sabor" · Barrio de San Ramón</p>
        <p className="text-[11px] text-slate-600">Plataforma digital profesional optimizada para motores de búsqueda.</p>
      </footer>
    </div>
  );
}
