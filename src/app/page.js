'use client';
import { useState } from 'react';

const MENU_ITEMS = [
  { id: 1, nombre: "Aguachile Especial", desc: "Camarón fresco bañado en salsa de la casa con pepino y cebolla morada.", precio: 160, cat: "Mariscos", img: "https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=800&q=80", tag: "Fresco 🦐" },
  { id: 2, nombre: "Platillo Mixto", desc: "Carne asada, chorizo, longaniza, guarnición de frijoles y totopos.", precio: 185, cat: "Especialidades", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80", tag: "Recomendado 🔥" },
  { id: 3, nombre: "Carne Asada", desc: "Corte asado al carbón acompañado de cebollitas asadas y chiles toreados.", precio: 150, cat: "Carnes", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" },
  { id: 4, nombre: "Mojarra Frita", desc: "Mojarra doradita al término perfecto con ensalada fresca y arroz.", precio: 140, cat: "Mariscos", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80" },
  { id: 5, nombre: "Milanesa Rellena", desc: "Empanizada y rellena de jamón y queso fundido con papas a la francesa.", precio: 135, cat: "Especialidades", img: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80" },
  { id: 6, nombre: "Costilla Frita", desc: "Crujiente por fuera y jugosa por dentro con sazón de la casa.", precio: 130, cat: "Carnes", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" },
  { id: 7, nombre: "Chiles Rellenos", desc: "Capeados tradicionales rellenos de queso o carne con caldillo de tomate.", precio: 110, cat: "Casero", img: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=800&q=80" },
  { id: 8, nombre: "Camaronera (Michelada c/ Camarón)", desc: "Cerveza bien fría preparada con salsas negras y brocheta de camarones.", precio: 95, cat: "Bebidas", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80", tag: "Especialidad 🍻" },
];

export default function Home() {
  const [carrito, setCarrito] = useState({});
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
    texto += `\n*Total a pagar: $${totalPrecio} MXN*\n\n¿Me confirman tiempo y si hay servicio a domicilio?`;
    window.open(`https://wa.me/529620000000?text=${encodeURIComponent(texto)}`, '_blank');
  };

  const enviarSugerencia = (e) => {
    e.preventDefault();
    const texto = `Hola, les dejo un comentario desde su web:\n\n• De: ${sugNombre || 'Cliente'}\n• Mensaje: ${sugMensaje}`;
    window.open(`https://wa.me/529620000000?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-orange-500 selection:text-white">
      {/* Barra superior */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center font-black text-slate-950 text-lg shadow-lg shadow-orange-500/20">
              BS
            </div>
            <div>
              <h1 className="font-bold tracking-tight text-lg text-white">El Buen Sabor</h1>
              <p className="text-[11px] text-orange-400 font-medium">Barrio de San Ramón</p>
            </div>
          </div>

          <a href="#contacto" className="bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-md shadow-orange-500/20">
            Ubicación & Pedidos
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24 px-6 border-b border-slate-800/80">
        <div className="absolute inset-0 z-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-1"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block bg-orange-500/10 text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            🍤 ¡La comida más rica de todo San Ramón!
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
            Sabor casero, mariscos y cortes <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">al mero punto</span>.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-medium">
            Disfruta de nuestros aguachiles frescos, carnes asadas y las famosas camaroneras bien frías.
          </p>
        </div>
      </section>

      {/* Menú */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Nuestro Menú</span>
              <h3 className="text-3xl font-black text-white">Especialidades de la Casa</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {MENU_ITEMS.map((item) => (
              <div key={item.id} className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img src={item.img} alt={item.nombre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {item.tag && (
                      <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-orange-400 font-bold px-3 py-1 rounded-full text-xs border border-orange-500/30">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-5 space-y-2">
                    <h4 className="text-xl font-bold text-white">{item.nombre}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="p-5 pt-0 flex justify-between items-center">
                  <span className="text-orange-400 font-black text-lg">\${item.precio} MXN</span>
                  <button onClick={() => agregarItem(item.nombre, item.precio)} className="bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-md shadow-orange-500/20">
                    + Agregar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carrito flotante */}
        {totalArticulos > 0 && (
          <section className="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-orange-500/50 rounded-3xl p-6 sm:p-8 space-y-6 max-w-2xl mx-auto shadow-2xl">
            <div className="flex justify-between items-baseline border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Resumen</span>
                <h3 className="text-2xl font-black text-white">Tu Pedido ({totalArticulos})</h3>
              </div>
              <span className="text-2xl font-black text-orange-400">\${totalPrecio} MXN</span>
            </div>

            <div className="space-y-3 text-sm font-medium text-slate-300 max-h-60 overflow-y-auto pr-2">
              {Object.entries(carrito).map(([nombre, item]) => (
                <div key={nombre} className="flex justify-between items-center bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
                  <div className="flex items-center gap-3">
                    <span className="bg-orange-500/20 text-orange-400 font-bold px-2.5 py-1 rounded-lg text-xs">{item.cant}x</span>
                    <span className="text-white font-semibold text-xs sm:text-sm">{nombre}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-orange-400 font-bold text-xs sm:text-sm">\${item.precio * item.cant}</span>
                    <button onClick={() => quitarItem(nombre)} className="text-slate-500 hover:text-red-400 font-bold text-xs px-1">✕</button>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={enviarWhatsApp} className="w-full bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-400 hover:to-amber-300 text-slate-950 font-black py-4 rounded-2xl text-sm transition-all shadow-lg uppercase tracking-wider">
              Pedir ahora por WhatsApp 🚀
            </button>
          </section>
        )}

        {/* Ubicación y Buzón */}
        <section id="contacto" className="grid md:grid-cols-2 gap-8 pt-8 border-t border-slate-800/80">
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl space-y-4">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">¿Cómo llegar?</span>
            <h3 className="text-2xl font-bold text-white">Ubicación Exacta</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              📍 <strong>Calle Puebla núm #8, Barrio de San Ramón</strong>.<br />
              A un costado del mercadito de San Ramón.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl space-y-4">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Sugerencias & Opiniones</span>
            <h3 className="text-2xl font-bold text-white">Buzón del Cliente</h3>
            
            <form onSubmit={enviarSugerencia} className="space-y-3">
              <input type="text" placeholder="Tu nombre" value={sugNombre} onChange={(e) => setSugNombre(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-orange-500" />
              <textarea rows="2" required placeholder="¿Qué tal te pareció la comida?" value={sugMensaje} onChange={(e) => setSugMensaje(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-orange-500 resize-none"></textarea>
              <button type="submit" className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl text-xs transition-colors border border-slate-700">
                Enviar comentario al restaurantero 💬
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900 mt-20 py-8 text-center text-xs text-slate-500">
        Restaurante "El Buen Sabor" · Barrio de San Ramón
      </footer>
    </div>
  );
}
