'use client';
import { useState } from 'react';
import { Search, MapPin, Phone, MessageCircle, Calendar, Coffee, Scissors, BookOpen, Utensils, ShoppingBag, Database, Package, DollarSign, BarChart3, X } from 'lucide-react';

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
  },
  {
    id: 5,
    nombre: "Abarrotes y Novedades El Soconusco",
    categoria: "Abarrotes",
    icono: ShoppingBag,
    descripcion: "Surtido completo en abarrotes, frutas, verduras frescas y artículos del hogar. Atendido por la familia con entrega a domicilio.",
    direccion: "Central Sur #45, Col. Centro, Tapachula",
    whatsapp: "529621234567",
    accion: "Hacer Pedido",
    destacado: true,
    gestionInterna: {
      inventario: [
        { id: "PROD-001", nombre: "Frijol Negro 1kg", categoria: "Granos", stock: 120, precioCosto: 24.50, precioVenta: 32.00 },
        { id: "PROD-002", nombre: "Arroz Súper Extra 1kg", categoria: "Granos", stock: 85, precioCosto: 18.00, precioVenta: 25.00 },
        { id: "PROD-003", nombre: "Aceite Comestible 800ml", categoria: "Abarrotes", stock: 42, precioCosto: 31.00, precioVenta: 40.00 },
        { id: "PROD-004", nombre: "Café de Olla Tapachula 500g", categoria: "Café", stock: 15, precioCosto: 65.00, precioVenta: 95.00 }
      ],
      cortesDeCaja: [
        {
          fecha: "2026-10-11",
          fondoInicial: 1000.00,
          ventasEfectivo: 4850.50,
          ventasTransferencia: 1200.00,
          gastosCajaChica: 350.00,
          totalVentasNetas: 5700.50,
          efectivoFinalEnCaja: 5500.50,
          estatusCorte: "Cuadrado",
          observaciones: "Día con bastante flujo de clientes por la tarde."
        }
      ],
      metricas: {
        visitasEnDirectorio: 342,
        clicsAWhatsApp: 89,
        calificacionPromedio: 4.8,
        totalReseñas: 27
      }
    }
  }
];

const categorias = ["Todos", "Cafeterías", "Papelerías", "Barberías", "Restaurantes", "Abarrotes"];

export default function Home() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSel, setCategoriaSel] = useState('Todos');
  const [modalNegocio, setModalNegocio] = useState(null);
  const [pestanaActiva, setPestanaActiva] = useState('inventario');

  const negociosFiltrados = negociosIniciales.filter((negocio) => {
    const coincideNombre = negocio.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                           negocio.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCat = categoriaSel === 'Todos' || negocio.categoria === categoriaSel;
    return coincideNombre && coincideCat;
  });

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-4 md:p-8">
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

              <div className="space-y-2">
                {negocio.gestionInterna && (
                  <button
                    onClick={() => {
                      setModalNegocio(negocio);
                      setPestanaActiva('inventario');
                    }}
                    className="w-full bg-slate-700/60 hover:bg-slate-700 text-cyan-400 font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-cyan-500/30 transition-colors text-sm"
                  >
                    <Database className="w-4 h-4" />
                    <span>Ver Gestión Interna (Base de Datos)</span>
                  </button>
                )}

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
            </div>
          );
        })}
      </section>

      {/* Modal de Gestión Interna */}
      {modalNegocio && modalNegocio.gestionInterna && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setModalNegocio(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-700/50"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">Base de Datos de Gestión</span>
              <h2 className="text-2xl font-bold text-white">{modalNegocio.nombre}</h2>
            </div>

            {/* Pestañas del Modal */}
            <div className="flex border-b border-slate-700 mb-6 gap-2">
              <button
                onClick={() => setPestanaActiva('inventario')}
                className={`flex items-center gap-2 pb-3 px-3 font-semibold text-sm transition-all border-b-2 ${
                  pestanaActiva === 'inventario'
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Package className="w-4 h-4" />
                <span>Inventario</span>
              </button>
              <button
                onClick={() => setPestanaActiva('cortes')}
                className={`flex items-center gap-2 pb-3 px-3 font-semibold text-sm transition-all border-b-2 ${
                  pestanaActiva === 'cortes'
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <DollarSign className="w-4 h-4" />
                <span>Cortes de Caja</span>
              </button>
              <button
                onClick={() => setPestanaActiva('metricas')}
                className={`flex items-center gap-2 pb-3 px-3 font-semibold text-sm transition-all border-b-2 ${
                  pestanaActiva === 'metricas'
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Métricas</span>
              </button>
            </div>

            {/* Contenido según pestaña activa */}
            {pestanaActiva === 'inventario' && (
              <div className="space-y-3">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-300">
                    <thead className="bg-slate-900/60 text-slate-400 uppercase text-[11px] font-bold">
                      <tr>
                        <th className="p-2.5">Código</th>
                        <th className="p-2.5">Producto</th>
                        <th className="p-2.5">Stock</th>
                        <th className="p-2.5">Costo</th>
                        <th className="p-2.5">Venta</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/50">
                      {modalNegocio.gestionInterna.inventario.map((prod) => (
                        <tr key={prod.id} className="hover:bg-slate-700/30">
                          <td className="p-2.5 font-mono text-xs text-cyan-400">{prod.id}</td>
                          <td className="p-2.5 font-medium text-white">{prod.nombre}</td>
                          <td className="p-2.5">{prod.stock} pzas</td>
                          <td className="p-2.5 text-slate-400">\${prod.precioCosto.toFixed(2)}</td>
                          <td className="p-2.5 font-semibold text-emerald-400">\${prod.precioVenta.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {pestanaActiva === 'cortes' && (
              <div className="space-y-4">
                {modalNegocio.gestionInterna.cortesDeCaja.map((corte, idx) => (
                  <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 font-mono">Fecha: {corte.fecha}</span>
                      <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                        {corte.estatusCorte}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                      <div>
                        <span className="text-slate-400 block">Ventas Efectivo:</span>
                        <span className="text-white font-semibold">\${corte.ventasEfectivo.toFixed(2)}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Ventas Transferencia:</span>
                        <span className="text-white font-semibold">\${corte.ventasTransferencia.toFixed(2)}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Total Ventas Netas:</span>
                        <span className="text-emerald-400 font-bold text-sm">\${corte.totalVentasNetas.toFixed(2)}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Efectivo Final Caja:</span>
                        <span className="text-cyan-400 font-bold text-sm">\${corte.efectivoFinalEnCaja.toFixed(2)}</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 italic pt-1">
                      "{corte.observaciones}"
                    </p>
                  </div>
                ))}
              </div>
            )}

            {pestanaActiva === 'metricas' && (
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50 text-center">
                  <span className="text-2xl font-black text-cyan-400 block">{modalNegocio.gestionInterna.metricas.visitasEnDirectorio}</span>
                  <span className="text-xs text-slate-400 font-medium">Visitas en Directorio</span>
                </div>
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50 text-center">
                  <span className="text-2xl font-black text-emerald-400 block">{modalNegocio.gestionInterna.metricas.clicsAWhatsApp}</span>
                  <span className="text-xs text-slate-400 font-medium">Clics a WhatsApp</span>
                </div>
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50 text-center">
                  <span className="text-2xl font-black text-amber-400 block">⭐ {modalNegocio.gestionInterna.metricas.calificacionPromedio}</span>
                  <span className="text-xs text-slate-400 font-medium">Calificación Promedio</span>
                </div>
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50 text-center">
                  <span className="text-2xl font-black text-white block">{modalNegocio.gestionInterna.metricas.totalReseñas}</span>
                  <span className="text-xs text-slate-400 font-medium">Total de Reseñas</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
