'use client';
import { useState } from 'react';
import { Search, MapPin, Phone, MessageCircle, Calendar, Coffee, Scissors, BookOpen, Utensils } from 'lucide-react';

// Lista de negocios demo en Tapachula
const negociosIniciales = [
  {
    id: 1,
    nombre: "Mono Caballero Coffee",
    categoria: "Cafeterías",
    icono: Coffee,
    descripcion: "Café de especialidad, bebidas frías, postres y el mejor ambiente en el centro de Tapachula.",
    direccion: "Central Sur #12, Col. Centro, Tapachula",
    whatsapp: "529621234567",
    accion: "Ver Menú Digital",
    destacado: true,
  },
  {
    id: 2,
    nombre: "Papelería El Cubo",
    categoria: "Papelerías",
    icono: BookOpen,
    descripcion: "Surtido completo en útiles escolares, copias, impresiones y artículos de oficina.",
    direccion: "4a Av. Norte #45, Tapachula",
    whatsapp: "529621234568",
    accion: "Pedir por WhatsApp",
    destacado: false,
  },
  {
    id: 3,
    nombre: "Barbería El Imperio",
    categoria: "Barberías",
    icono: Scissors,
    descripcion: "Cortes modernos, arreglo de barba y perfilado. Reserva tu lugar sin filas.",
    direccion: "8a Calle Oriente #10, Tapachula",
    whatsapp: "529621234569",
    accion: "Agendar Cita",
    destacado: true,
  },
  {
    id: 4,
    nombre: "Taquería El Huasteco",
    categoria: "Restaurantes",
    icono: Utensils,
    descripcion: "Los mejores tacos al pastor y carne asada con servicio a domicilio rápido.",
    direccion: "Central Norte #88, Tapachula",
    whatsapp: "529621234570",
    accion: "Hacer Pedido",
    destacado: false,
  }
];

const categorias = ["Todos", "Cafeterías", "Papelerías", "Barberías", "Restaurantes"];

export default function Home() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSel, setCategoriaSel] = useState('Todos');

  const negociosFiltrados = negociosIniciales.filter((negocio) => {
    const coincideNombre = negocio.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                          negocio.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCat = categoriaSel === 'Todos' || negocio.categoria === categoriaSel;
    return coincideNombre && coincideCat;
  });

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-4 md:p-8">
      {/* Encabezado */}
      <header className="max-w-5xl mx-auto text-center py-8">
        <span className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-500/20">
          Tapachula, Chiapas
        </span>
        <h1 className="text-4xl md:text-5xl font-black mt-3 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Directorio Comercial Tapachula
        </h1>
        <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Encuentra los mejores negocios locales, consulta sus menús, servicios y contacta directo por WhatsApp.
        </p>
      </header>

      {/* Buscador y Filtros */}
      <section className="max-w-5xl mx-auto mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por negocio, servicio o producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>

        {/* Botones de Categorías */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSel(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                categoriaSel === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de Negocios */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {negociosFiltrados.map((negocio) => {
          const Icono = negocio.icono;
          return (
            <div
              key={negocio.id}
              className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                      <Icono className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{negocio.nombre}</h3>
                      <span className="text-xs text-slate-400">{negocio.categoria}</span>
                    </div>
                  </div>
                  {negocio.destacado && (
                    <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-md font-semibold uppercase">
                      Destacado
                    </span>
                  )}
                </div>

                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {negocio.descripcion}
                </p>

                <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{negocio.direccion}</span>
                </div>
              </div>

              {/* Botón Acción a WhatsApp */}
              <a
                href={`https://wa.me/${negocio.whatsapp}?text=Hola,%20vi%20su%20negocio%20en%20el%20Directorio%20Local`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{negocio.accion}</span>
              </a>
            </div>
          );
        })}
      </section>

      {negociosFiltrados.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          No se encontraron negocios con esos datos.
        </div>
      )}
    </main>
  );
}
const nuevoNegocio = {
  // ==========================================
  // 1. INFORMACIÓN PUBLICITARIA (Vista Cliente)
  // ==========================================
  id: "abarrotes-y-novedades-el-soconusco",
  nombre: "Abarrotes y Novedades El Soconusco",
  categoria: "Abarrotes y Comercio",
  esDestacado: true,
  slogan: "Todo para tu hogar a los mejores precios de Tapachula",
  descripcion: "Surtido completo en abarrotes, frutas, verduras frescas y artículos del hogar. Atendido por la familia con la mejor calidad y entrega a domicilio.",
  logotipo: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=300",
  portada: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000",
  
  contacto: {
    telefono: "9621234567",
    whatsapp: "529621234567",
    direccion: "Central Sur #45, Col. Centro, Tapachula, Chiapas",
    horario: "Lunes a Sábado: 7:00 AM - 9:00 PM | Domingo: 8:00 AM - 4:00 PM",
    coordenadas: { lat: 14.9081, lng: -92.2618 }
  },

  promocionVigente: {
    titulo: "10% de Descuento en Tu Primera Compra",
    codigo: "TAPACHULA10",
    condiciones: "Aplica en compras mayores a $200 MXN mencionando el directorio."
  },

  // ==========================================
  // 2. BASE DE DATOS INTERNA Y GESTIÓN (Vista Administrador)
  // ==========================================
  gestionInterna: {
    // --- Registro de Inventario ---
    inventario: [
      { id: "PROD-001", nombre: "Frijol Negro 1kg", categoria: "Granos", stock: 120, precioCosto: 24.50, precioVenta: 32.00 },
      { id: "PROD-002", nombre: "Arroz Súper Extra 1kg", categoria: "Granos", stock: 85, precioCosto: 18.00, precioVenta: 25.00 },
      { id: "PROD-003", nombre: "Aceite Comestible 800ml", categoria: "Abarrotes", stock: 42, precioCosto: 31.00, precioVenta: 40.00 },
      { id: "PROD-004", nombre: "Café de Olla Tapachula 500g", categoria: "Café", stock: 15, precioCosto: 65.00, precioVenta: 95.00 }
    ],

    // --- Registros de Cortes de Día (Caja) ---
    cortesDeCaja: [
      {
        fecha: "2026-10-11",
        fondoInicial: 1000.00,
        ventasEfectivo: 4850.50,
        ventasTransferencia: 1200.00,
        gastosCajaChica: 350.00, // Compras menores de insumos o bolsas
        totalVentasNetas: 5700.50,
        efectivoFinalEnCaja: 5500.50,
        estatusCorte: "Cuadrado", // Cuadrado / Faltante / Sobrante
        observaciones: "Día con bastante flujo de clientes por la tarde."
      },
      {
        fecha: "2026-10-10",
        fondoInicial: 1000.00,
        ventasEfectivo: 3900.00,
        ventasTransferencia: 850.00,
        gastosCajaChica: 120.00,
        totalVentasNetas: 4630.00,
        efectivoFinalEnCaja: 4780.00,
        estatusCorte: "Cuadrado",
        observaciones: "Corte realizado a las 9:05 PM."
      }
    ],

    // --- Métricas de Desempeño Comercial ---
    metricas: {
      visitasEnDirectorio: 342,
      clicsAWhatsApp: 89,
      calificacionPromedio: 4.8,
      totalReseñas: 27
    }
  }
};