import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LOGO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz14AYEMJXPrUWPsHSLYby-DFuOZ12h6zhE1PpbM0w8ETchDCOmdOgY2EVMbCrAGIAa6hD2bLfonECmYIMw1TLDHri8ju9-ksQY3oUQJFYh4I6EoTRhi_wkR4X_JgDvA9hUtbqPO4_krOFEBz4EAvfu9rqDUewWvvlx2sKuVjbyGk7YwShLvbga39X1YkV1LJd9Cv98dJZEungXFeWbEJaFGsvkj319SbpAuQSf-LP5QitPIpXD11Z_HhYrhqzlbVsiOdKXIHRxGM'

const RESERVAS = [
  { fecha: '24 Oct, 2023', hora: '10:30 AM', cliente: 'Facundo Molina', initials: 'FM', servicio: 'Corte de Autor', barbero: 'Julián "The Blade"', estado: 'Confirmado', precio: '$8.500' },
  { fecha: '24 Oct, 2023', hora: '11:15 AM', cliente: 'Santiago Russo', initials: 'SR', servicio: 'Barba Tradicional', barbero: 'Enzo Martínez', estado: 'Pendiente', precio: '$5.200' },
  { fecha: '24 Oct, 2023', hora: '12:00 PM', cliente: 'Lucas Pereira', initials: 'LP', servicio: 'Corte & Barba', barbero: 'Julián "The Blade"', estado: 'Cancelado', precio: '$12.000' },
  { fecha: '24 Oct, 2023', hora: '13:30 PM', cliente: 'Mateo Alarcón', initials: 'MA', servicio: 'Corte Junior', barbero: 'Mariano G.', estado: 'Confirmado', precio: '$7.000' },
]

const STATUS_STYLES = {
  Confirmado: 'bg-emerald-100 text-emerald-800',
  Pendiente: 'bg-amber-100 text-amber-800',
  Cancelado: 'bg-rose-100 text-rose-800',
}
const STATUS_DOT = {
  Confirmado: 'bg-emerald-500',
  Pendiente: 'bg-amber-500',
  Cancelado: 'bg-rose-500',
}

export default function AdminListaReservas() {
  const navigate = useNavigate()
  const [drawerOpen, setDrawerOpen] = useState(true)
  const [selectedReserva, setSelectedReserva] = useState(RESERVAS[1])
  const [filterTab, setFilterTab] = useState('Todos')

  const filteredReservas = filterTab === 'Todos'
    ? RESERVAS
    : RESERVAS.filter(r => r.estado === filterTab)

  return (
    <div className="flex min-h-screen bg-[#fff9ee] font-body text-on-surface">
      {/* Sidebar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-[#1b3a2d] flex flex-col p-4 shadow-xl z-40">
        <div className="text-xl font-headline italic text-[#fff9ee] mb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#fff9ee]/10 flex items-center justify-center overflow-hidden">
            <img className="w-full h-full object-cover" alt="Logo La Vanguardia" src={LOGO_IMG} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg leading-tight">Admin Panel</span>
            <span className="text-[0.65rem] opacity-60 uppercase tracking-widest font-body">Gestión de Salón</span>
          </div>
        </div>
        <nav className="flex-grow space-y-1">
          <a
            onClick={() => navigate('/admin')}
            className="flex items-center gap-3 text-[#fff9ee]/60 py-3 px-4 hover:bg-[#fff9ee]/5 transition-all group cursor-pointer"
          >
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="text-sm font-body">Hoy</span>
          </a>
          <a className="flex items-center gap-3 bg-[#fff9ee]/10 text-[#fff9ee] border-l-4 border-[#c0392b] py-3 px-4 transition-all group cursor-pointer">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>list_alt</span>
            <span className="text-sm font-body">Turnos</span>
          </a>
          <a className="flex items-center gap-3 text-[#fff9ee]/60 py-3 px-4 hover:bg-[#fff9ee]/5 transition-all group cursor-pointer">
            <span className="material-symbols-outlined">content_cut</span>
            <span className="text-sm font-body">Servicios</span>
          </a>
          <a className="flex items-center gap-3 text-[#fff9ee]/60 py-3 px-4 hover:bg-[#fff9ee]/5 transition-all group cursor-pointer">
            <span className="material-symbols-outlined">content_paste_search</span>
            <span className="text-sm font-body">Barberos</span>
          </a>
          <a className="flex items-center gap-3 text-[#fff9ee]/60 py-3 px-4 hover:bg-[#fff9ee]/5 transition-all group cursor-pointer">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-body">Ajustes</span>
          </a>
        </nav>
        <div className="mt-auto">
          <button className="w-full bg-[#c0392b] text-white py-4 rounded-xl font-body font-bold text-sm tracking-wide shadow-lg flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-base">add</span>
            Nuevo Turno
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`ml-64 flex-grow p-8 bg-[#fff9ee] min-h-screen relative overflow-hidden transition-all ${drawerOpen ? 'mr-[420px]' : ''}`}>
        {/* Header */}
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="font-headline text-5xl font-medium text-primary tracking-tight mb-2">Lista de Reservas</h1>
            <p className="text-on-surface-variant font-body">Administrá la agenda diaria de La Vanguardia.</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">search</span>
              <input
                type="text"
                placeholder="Buscar cliente o barbero..."
                className="bg-surface-container-low border-none rounded-xl pl-12 pr-6 py-3 w-72 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all font-body text-sm placeholder:text-outline outline-none"
              />
            </div>
            <div className="flex bg-surface-container-low p-1 rounded-xl">
              {['Todos', 'Pendientes', 'Confirmados'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setFilterTab(tab === 'Pendientes' ? 'Pendiente' : tab === 'Confirmados' ? 'Confirmado' : 'Todos')}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
                    (filterTab === 'Todos' && tab === 'Todos') ||
                    (filterTab === 'Pendiente' && tab === 'Pendientes') ||
                    (filterTab === 'Confirmado' && tab === 'Confirmados')
                      ? 'font-bold text-primary bg-white shadow-sm'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Table */}
        <div className="bg-surface-container-low rounded-3xl overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b border-primary/5">
                <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Fecha &amp; Hora</th>
                <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Cliente</th>
                <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Servicio</th>
                <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Barbero</th>
                <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Estado</th>
                <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-on-surface-variant text-right">Precio</th>
              </tr>
            </thead>
            <tbody className="font-body text-sm">
              {filteredReservas.map((r, i) => (
                <tr
                  key={i}
                  onClick={() => { setSelectedReserva(r); setDrawerOpen(true) }}
                  className={`hover:bg-primary/5 transition-colors cursor-pointer ${i > 0 ? 'border-t border-primary/5' : 'bg-white/40'}`}
                >
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-primary">{r.fecha}</span>
                      <span className="text-xs text-on-surface-variant">{r.hora}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-primary border border-primary/10">{r.initials}</div>
                      <span className="font-medium">{r.cliente}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs text-primary font-medium">{r.servicio}</span>
                  </td>
                  <td className="px-8 py-6 text-on-surface">{r.barbero}</td>
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase ${STATUS_STYLES[r.estado]}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[r.estado]}`}></span>
                      {r.estado}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right font-bold text-primary">{r.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <footer className="p-6 border-t border-primary/5 flex justify-between items-center text-xs text-on-surface-variant font-body">
            <span>Mostrando {filteredReservas.length} de 28 reservas hoy</span>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-primary/10 hover:bg-primary/5">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-primary/10 hover:bg-primary/5">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-primary/10 hover:bg-primary/5">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </footer>
        </div>
      </main>

      {/* Side Drawer */}
      {drawerOpen && selectedReserva && (
        <aside className="fixed right-0 top-0 h-screen w-[420px] bg-white shadow-2xl z-50 flex flex-col border-l border-primary/5">
          {/* Drawer Header */}
          <div className="p-8 border-b border-primary/5 relative overflow-hidden bg-primary text-white">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none transform translate-x-12 -translate-y-12">
              <span className="material-symbols-outlined text-[120px]">content_cut</span>
            </div>
            <div className="flex justify-between items-start mb-6">
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                selectedReserva.estado === 'Pendiente' ? 'bg-amber-500/20 text-amber-200' :
                selectedReserva.estado === 'Confirmado' ? 'bg-emerald-500/20 text-emerald-200' :
                'bg-rose-500/20 text-rose-200'
              }`}>
                {selectedReserva.estado}
              </span>
            </div>
            <h2 className="font-headline text-3xl mb-1">{selectedReserva.cliente}</h2>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span className="material-symbols-outlined text-base">calendar_month</span>
              <span>{selectedReserva.fecha}</span>
              <span className="mx-1">•</span>
              <span>{selectedReserva.hora}</span>
            </div>
          </div>

          {/* Drawer Content */}
          <div className="flex-grow overflow-y-auto p-8 space-y-8">
            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 hover:bg-emerald-100 transition-colors">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-[10px] font-bold uppercase">Confirmar</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-surface-container-low border border-primary/5 text-primary hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">update</span>
                <span className="text-[10px] font-bold uppercase">Mover</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-rose-50 border border-rose-100 text-rose-700 hover:bg-rose-100 transition-colors">
                <span className="material-symbols-outlined">cancel</span>
                <span className="text-[10px] font-bold uppercase">Anular</span>
              </button>
            </div>

            {/* Client Contact */}
            <section>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Contacto del Cliente</h3>
              <div className="bg-surface-container-low p-5 rounded-2xl flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">phone_iphone</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-on-surface-variant mb-0.5">Celular</span>
                    <span className="font-bold text-primary tracking-tight">+54 9 11 5566-7788</span>
                  </div>
                </div>
                <a href="#" className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-emerald-500/20">
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                </a>
              </div>
            </section>

            {/* Service Info */}
            <section>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Detalles del Servicio</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-primary/5">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant">content_cut</span>
                    <span className="font-medium text-sm">{selectedReserva.servicio}</span>
                  </div>
                  <span className="font-bold text-primary">{selectedReserva.precio}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-primary/5">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant">person</span>
                    <span className="font-medium text-sm">Barbero: {selectedReserva.barbero}</span>
                  </div>
                  <span className="material-symbols-outlined text-xs text-primary">arrow_forward_ios</span>
                </div>
              </div>
            </section>

            {/* Notes */}
            <section>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Notas de la Reserva</h3>
              <div className="bg-surface-container-highest/30 p-5 rounded-2xl border-l-4 border-[#c0392b] italic text-sm text-primary/80">
                "El cliente prefiere toalla extra caliente y productos sin aroma cítrico. Siempre puntual."
              </div>
            </section>

            {/* Customer History */}
            <section>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Historial Reciente</h3>
              <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-primary/10">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-[24px] h-[24px] rounded-full bg-white border-2 border-primary flex items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase mb-0.5">12 Sep, 2023</span>
                    <span className="text-sm font-medium">Corte de Autor - $8.500</span>
                    <p className="text-[11px] text-on-surface-variant mt-1 italic">"Muy conforme con el degradé."</p>
                  </div>
                </div>
                <div className="relative pl-8 opacity-60">
                  <div className="absolute left-0 top-1.5 w-[24px] h-[24px] rounded-full bg-white border border-primary/20 flex items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase mb-0.5">04 Ago, 2023</span>
                    <span className="text-sm font-medium">Barba Tradicional - $5.200</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Actions */}
          <div className="p-8 bg-surface-container-low border-t border-primary/5">
            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm tracking-wide shadow-xl shadow-primary/20 flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all">
              Guardar Cambios
            </button>
          </div>
        </aside>
      )}
    </div>
  )
}
