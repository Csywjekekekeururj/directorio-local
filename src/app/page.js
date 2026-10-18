<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Restaurante "El Buen Sabor" · San Ramón</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;900&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap');
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    h1, h2, h3, h4, .font-display { font-family: 'Outfit', sans-serif; }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 antialiased selection:bg-orange-500 selection:text-white">

  <!-- Barra superior -->
  <header class="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-6 py-4">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center font-black text-slate-950 text-lg shadow-lg shadow-orange-500/20">
          BS
        </div>
        <div>
          <h1 class="font-display font-black tracking-tight text-lg text-white">El Buen Sabor</h1>
          <p class="text-[11px] text-orange-400 font-medium">Barrio de San Ramón</p>
        </div>
      </div>

      <a href="#contacto" class="bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-md shadow-orange-500/20">
        Ubicación & Pedidos
      </a>
    </div>
  </header>

  <!-- Hero con impacto visual -->
  <section class="relative overflow-hidden py-16 lg:py-24 px-6 border-b border-slate-800/80">
    <div class="absolute inset-0 z-0 opacity-30 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-1"></div>

    <div class="relative z-10 max-w-4xl mx-auto text-center space-y-6">
      <span class="inline-block bg-orange-500/10 text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
        🍤 ¡La comida más rica de todo San Ramón!
      </span>
      <h2 class="text-4xl sm:text-6xl font-display font-black tracking-tight text-white leading-none">
        Sabor casero, mariscos y cortes <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">al mero punto</span>.
      </h2>
      <p class="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-medium">
        Disfruta de nuestros aguachiles frescos, carnes asadas y las famosas camaroneras bien frías. Pide directo a domicilio o para llevar.
      </p>
    </div>
  </section>

  <!-- Menú Interactivo con Tarjetas Perronas -->
  <main class="max-w-6xl mx-auto px-6 py-12 space-y-16">

    <div class="space-y-4">
      <div class="flex justify-between items-end">
        <div>
          <span class="text-xs font-bold text-orange-400 uppercase tracking-widest">Nuestro Menú</span>
          <h3 class="text-3xl font-display font-black text-white">Especialidades de la Casa</h3>
        </div>
        <span class="text-xs text-slate-400 font-medium hidden sm:block">Selecciona tus platillos para armar tu pedido</span>
      </div>

      <!-- Cuadrícula de Platillos -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">

        <!-- 1. Aguachile -->
        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all flex flex-col justify-between group">
          <div>
            <div class="h-52 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=800&q=80" alt="Aguachile" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-orange-400 font-bold px-3 py-1 rounded-full text-xs border border-orange-500/30">
                Fresco 🦐
              </span>
            </div>
            <div class="p-5 space-y-2">
              <h4 class="text-xl font-display font-bold text-white">Aguachile Especial</h4>
              <p class="text-xs text-slate-400 leading-relaxed">Camarón fresco bañado en salsa de la casa con pepino y cebolla morada.</p>
            </div>
          </div>
          <div class="p-5 pt-0 flex justify-between items-center">
            <span class="text-orange-400 font-display font-black text-lg">\$160 MXN</span>
            <button onclick="agregarItem('Aguachile Especial', 160)" class="bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-md shadow-orange-500/20">
              + Agregar
            </button>
          </div>
        </div>

        <!-- 2. Platillo Mixto -->
        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all flex flex-col justify-between group">
          <div>
            <div class="h-52 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80" alt="Platillo Mixto" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-amber-400 font-bold px-3 py-1 rounded-full text-xs border border-amber-500/30">
                Recomendado 🔥
              </span>
            </div>
            <div class="p-5 space-y-2">
              <h4 class="text-xl font-display font-bold text-white">Platillo Mixto</h4>
              <p class="text-xs text-slate-400 leading-relaxed">Carne asada, chorizo, longaniza, guarnición de frijoles y totopos.</p>
            </div>
          </div>
          <div class="p-5 pt-0 flex justify-between items-center">
            <span class="text-orange-400 font-display font-black text-lg">\$185 MXN</span>
            <button onclick="agregarItem('Platillo Mixto', 185)" class="bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-md shadow-orange-500/20">
              + Agregar
            </button>
          </div>
        </div>

        <!-- 3. Carne Asada -->
        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all flex flex-col justify-between group">
          <div>
            <div class="h-52 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" alt="Carne Asada" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-5 space-y-2">
              <h4 class="text-xl font-display font-bold text-white">Carne Asada</h4>
              <p class="text-xs text-slate-400 leading-relaxed">Corte asado al carbón acompañado de cebollitas asadas y chiles toreados.</p>
            </div>
          </div>
          <div class="p-5 pt-0 flex justify-between items-center">
            <span class="text-orange-400 font-display font-black text-lg">\$150 MXN</span>
            <button onclick="agregarItem('Carne Asada', 150)" class="bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-md shadow-orange-500/20">
              + Agregar
            </button>
          </div>
        </div>

        <!-- 4. Mojarras -->
        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all flex flex-col justify-between group">
          <div>
            <div class="h-52 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80" alt="Mojarras" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-5 space-y-2">
              <h4 class="text-xl font-display font-bold text-white">Mojarra Frita</h4>
              <p class="text-xs text-slate-400 leading-relaxed">Mojarra doradita al término perfecto con ensalada fresca y arroz.</p>
            </div>
          </div>
          <div class="p-5 pt-0 flex justify-between items-center">
            <span class="text-orange-400 font-display font-black text-lg">\$140 MXN</span>
            <button onclick="agregarItem('Mojarra Frita', 140)" class="bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-md shadow-orange-500/20">
              + Agregar
            </button>
          </div>
        </div>

        <!-- 5. Milanesa Rellena -->
        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all flex flex-col justify-between group">
          <div>
            <div class="h-52 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80" alt="Milanesa Rellena" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-5 space-y-2">
              <h4 class="text-xl font-display font-bold text-white">Milanesa Rellena</h4>
              <p class="text-xs text-slate-400 leading-relaxed">Empanizada y rellena de jamón y queso fundido con papas a la francesa.</p>
            </div>
          </div>
          <div class="p-5 pt-0 flex justify-between items-center">
            <span class="text-orange-400 font-display font-black text-lg">\$135 MXN</span>
            <button onclick="agregarItem('Milanesa Rellena', 135)" class="bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-md shadow-orange-500/20">
              + Agregar
            </button>
          </div>
        </div>

        <!-- 6. Costilla Frita -->
        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all flex flex-col justify-between group">
          <div>
            <div class="h-52 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" alt="Costilla Frita" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-5 space-y-2">
              <h4 class="text-xl font-display font-bold text-white">Costilla Frita</h4>
              <p class="text-xs text-slate-400 leading-relaxed">Crujiente por fuera y jugosa por dentro con sazón de la casa.</p>
            </div>
          </div>
          <div class="p-5 pt-0 flex justify-between items-center">
            <span class="text-orange-400 font-display font-black text-lg">\$130 MXN</span>
            <button onclick="agregarItem('Costilla Frita', 130)" class="bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-md shadow-orange-500/20">
              + Agregar
            </button>
          </div>
        </div>

        <!-- 7. Chiles Rellenos -->
        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all flex flex-col justify-between group">
          <div>
            <div class="h-52 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=800&q=80" alt="Chiles Rellenos" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-5 space-y-2">
              <h4 class="text-xl font-display font-bold text-white">Chiles Rellenos</h4>
              <p class="text-xs text-slate-400 leading-relaxed">Capeados tradicionales rellenos de queso o carne con caldillo de tomate.</p>
            </div>
          </div>
          <div class="p-5 pt-0 flex justify-between items-center">
            <span class="text-orange-400 font-display font-black text-lg">\$110 MXN</span>
            <button onclick="agregarItem('Chiles Rellenos', 110)" class="bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-md shadow-orange-500/20">
              + Agregar
            </button>
          </div>
        </div>

        <!-- 8. Micheladas con Camarón (Camaroneras) -->
        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all flex flex-col justify-between group md:col-span-2 lg:col-span-2">
          <div class="grid sm:grid-cols-2">
            <div class="h-52 sm:h-full overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" alt="Camaroneras" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-orange-400 font-bold px-3 py-1 rounded-full text-xs border border-orange-500/30">
                Especialidad 🍻
              </span>
            </div>
            <div class="p-6 flex flex-col justify-between space-y-4">
              <div class="space-y-2">
                <h4 class="text-2xl font-display font-bold text-white">Micheladas con Camarón (Camaroneras)</h4>
                <p class="text-xs text-slate-400 leading-relaxed">Cerveza bien fría preparada con salsas negras, limón, tarro escarchado con chilito y brocheta cargada de camarones frescos.</p>
              </div>
              <div class="flex justify-between items-center pt-2 border-t border-slate-800">
                <span class="text-orange-400 font-display font-black text-xl">\$95 MXN</span>
                <button onclick="agregarItem('Camaronera (Michelada c/ Camarón)', 95)" class="bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-md shadow-orange-500/20">
                  + Agregar
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Caja de Pedido Flotante / Interactiva -->
    <section id="seccion-pedido" class="hidden bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-orange-500/50 rounded-3xl p-6 sm:p-8 space-y-6 max-w-2xl mx-auto shadow-2xl shadow-orange-500/10">
      <div class="flex justify-between items-baseline border-b border-slate-800 pb-4">
        <div>
          <span class="text-xs font-bold text-orange-400 uppercase tracking-widest">Resumen</span>
          <h3 class="text-2xl font-display font-black text-white">Tu Pedido (<span id="total-articulos">0</span>)</h3>
        </div>
        <span class="text-2xl font-display font-black text-orange-400">\$<span id="total-precio">0</span> MXN</span>
      </div>

      <div id="lista-pedido" class="space-y-3 text-sm font-medium text-slate-300 max-h-60 overflow-y-auto pr-2">
        <!-- JS inyecta platillos -->
      </div>

      <button onclick="enviarWhatsApp()" class="w-full bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-400 hover:to-amber-300 text-slate-950 font-black py-4 rounded-2xl text-sm transition-all shadow-lg shadow-orange-500/30 uppercase tracking-wider">
        Pedir ahora por WhatsApp 🚀
      </button>
    </section>

    <!-- Ubicación Exacta y Contacto -->
    <section id="contacto" class="grid md:grid-cols-2 gap-8 pt-8 border-t border-slate-800/80">
      
      <div class="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl space-y-4">
        <span class="text-xs font-bold text-orange-400 uppercase tracking-widest">¿Cómo llegar?</span>
        <h3 class="text-2xl font-display font-bold text-white">Ubicación Exacta</h3>
        <p class="text-sm text-slate-300 leading-relaxed">
          📍 <strong>Calle Puebla núm #8, Barrio de San Ramón</strong>.<br>
          Nos encuentras bien fácil <em>a un costado del mercadito de San Ramón</em>. ¡Llega sin perderte!
        </p>
        <div class="pt-2">
          <a href="https://wa.me/529620000000?text=Hola,%20quiero%20hacer%20un%20pedido%20a%20domicilio" target="_blank" class="inline-block bg-slate-800 hover:bg-slate-700 text-orange-400 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors border border-orange-500/20">
            Abrir ubicación en mapa 🗺️
          </a>
        </div>
      </div>

      <div class="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl space-y-4">
        <span class="text-xs font-bold text-orange-400 uppercase tracking-widest">Sugerencias & Opiniones</span>
        <h3 class="text-2xl font-display font-bold text-white">Buzón del Cliente</h3>
        
        <form onsubmit="enviarSugerencia(event)" class="space-y-3">
          <input id="sug-nombre" type="text" placeholder="Tu nombre" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-orange-500">
          <textarea id="sug-mensaje" required rows="2" placeholder="¿Qué tal te pareció la comida?" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-orange-500 resize-none"></textarea>
          <button type="submit" class="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl text-xs transition-colors border border-slate-700">
            Enviar comentario al restaurantero 💬
          </button>
        </form>
      </div>

    </section>

  </main>

  <footer class="border-t border-slate-900 mt-20 py-8 text-center text-xs text-slate-500 space-y-1">
    <p>Restaurante "El Buen Sabor" · Barrio de San Ramón</p>
    <p class="text-[10px] text-slate-600">Desarrollo web local profesional.</p>
  </footer>

  <!-- Lógica Interactiva en JS -->
  <script>
    let carrito = {};

    function agregarItem(nombre, precio) {
      if (carrito[nombre]) {
        carrito[nombre].cant += 1;
      } else {
        carrito[nombre] = { nombre, precio, cant: 1 };
      }
      renderCarrito();
    }

    function quitarItem(nombre) {
      if (carrito[nombre].cant > 1) {
        carrito[nombre].cant -= 1;
      } else {
        delete carrito[nombre];
      }
      renderCarrito();
    }

    function renderCarrito() {
      const seccion = document.getElementById('seccion-pedido');
      const contenedorLista = document.getElementById('lista-pedido');
      const txtTotalArticulos = document.getElementById('total-articulos');
      const txtTotalPrecio = document.getElementById('total-precio');

      const llaves = Object.keys(carrito);
      if (llaves.length === 0) {
        seccion.classList.add('hidden');
        return;
      }

      seccion.classList.remove('hidden');
      contenedorLista.innerHTML = '';
      let totalCant = 0, totalDinero = 0;

      llaves.forEach(nombre => {
        const item = carrito[nombre];
        const subtotal = item.precio * item.cant;
        totalCant += item.cant;
        totalDinero += subtotal;

        const div = document.createElement('div');
        div.className = 'flex justify-between items-center bg-slate-950/50 p-3 rounded-xl border border-slate-800/60';
        div.innerHTML = `
          <div class="flex items-center gap-3">
            <span class="bg-orange-500/20 text-orange-400 font-bold px-2.5 py-1 rounded-lg text-xs">${item.cant}x</span>
            <span class="text-white font-semibold text-xs sm:text-sm">${item.nombre}</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-orange-400 font-bold text-xs sm:text-sm">$${subtotal}</span>
            <button onclick="quitarItem('${nombre}')" class="text-slate-500 hover:text-red-400 font-bold text-xs px-1">✕</button>
          </div>
        `;
        contenedorLista.appendChild(div);
      });

      txtTotalArticulos.innerText = totalCant;
      txtTotalPrecio.innerText = totalDinero;
    }

    function enviarWhatsApp() {
      const llaves = Object.keys(carrito);
      if (llaves.length === 0) return;

      let totalDinero = 0;
      let texto = "Hola, quiero hacer el siguiente pedido en El Buen Sabor:\n\n";

      llaves.forEach(nombre => {
        const item = carrito[nombre];
        const subtotal = item.precio * item.cant;
        totalDinero += subtotal;
        texto += `• ${item.cant}x ${item.nombre} - $${subtotal}\n`;
      });

      texto += `\n*Total a pagar: $${totalDinero} MXN*\n\n¿Me confirman tiempo y si hay servicio a domicilio?`;
      window.open(`https://wa.me/529620000000?text=${encodeURIComponent(texto)}`, '_blank');
    }

    function enviarSugerencia(e) {
      e.preventDefault();
      const nombre = document.getElementById('sug-nombre').value || 'Cliente';
      const mensaje = document.getElementById('sug-mensaje').value;

      const texto = `Hola, les dejo un comentario desde su web:\n\n• De: ${nombre}\n• Mensaje: ${mensaje}`;
      window.open(`https://wa.me/529620000000?text=${encodeURIComponent(texto)}`, '_blank');
    }
  </script>
</body>
</html>
