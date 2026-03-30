import { useNavigate } from 'react-router-dom'

const BARBERS_GRID = [
  {
    name: 'Mateo', specialty: 'Corte & Estilo',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt5nxZftv99rrO6YcDWBGyEVOFI8Rt5zuf7rnmrLflryrPUxexN-MK97F-bcJboxYv88rUqFn9cXMpcB4ju3XusTKMqn2TNKydvFa958TpKoAbt_b7bduqhMyq04Eh_RKmFjEFwpclft3auIpXL_g3qInlNfvcne7_sAbG7zXFj4-ymqvowZh1GACrwrMcp3Y_kWUOEMq4QECgCsH3-uxe608e3q3bloFUxSfEGPf7knP3R-ZWw138RlUV0GYTx5mN2NIIglbzWfU',
    alt: 'Professional barber with tattoos and stylish haircut looking confident',
  },
  {
    name: 'Julián', specialty: 'Barba & Tradición',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl7OMviIxvZuTJoO7HCNzge-DyDUp-HFfEfSbhio8-WpqCYQoyVedpov038LxUp_ySOxD_T2XbDl2fNa-jgeufgN5wpZx4gxltawSwLyLFedccp7I3ABx5xoyv_d78IxlW-YnV2BvvBdVM3JmtgZmEUy_FkltAvg-ihXgNQYmFbFZ7Sk-U1D0SJMnMM6-Ni0kwEJsqtEM1KRBzlb7Obp0EK3C9sc-N_MstNRx96JDYmlGd_CYFr9hYXGRusnSpowOl5ruRWfe4SSo',
    alt: 'Modern stylish male barber with glasses and a trimmed beard',
  },
  {
    name: 'Santi', specialty: 'Corte Clásico',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE-CyTI3hkGGaUdPILsTAmSgKKUlVg5BiP7bY-FhI_r3tr77QrO8vWDXVkAAwcEg8Or5ItB6_c5OFRj__7IUZDkpiTAe9NctLlnGd3K5jCKab2NqKEiHhtOQKwHJF3YuayaNmXbHFzd5twI6I-aZ2fbBLjC9BAUxtuAh_RtxDrDEMuZvO1YcdZpaz_u1kr-E6mecAH3-_mmqsWLmgCs2TvrsFZ1UWg3KEu3hJgYhtvMbqZGEadCh4ECOoPFQzOs0GSquVyzvxnX6o',
    alt: 'Portrait of a friendly young barber smiling in a classic barbershop setting',
  },
  {
    name: 'Hugo', specialty: 'Afeitado Navaja',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmYezL2ARXJ-obOb56dwT7DRSfYaY_cLSypGFAY9ZNm03S3mB31NSIPwgPYjR2BZu9mYvvcBwc45SZZ7yRfB6zryWa2FbVWYPgxHuWd5KMF3iEHdMLkgPKcnJDz7Zmfws_voHAlyS2iluy2hVN2VlfXWCnib9xVtjHmwwcSMSJyT1cKyfQgMW4ZiiL-b3CDyI7-flEj3AZrxRPFC27mosat_7vVULqx6jC5oyvlo2MWWXHTENU5E7ZgFzgkVv3v0IG9ik1Om9wWv8',
    alt: 'Middle-aged expert barber with a sharp gaze and professional attire',
  },
]

const ADMIN_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDAtmmnq5wF4rkv0NfTTdl5Rxt47ns0hUkjUNmAxLMw5rCMgRhEVnu-1VBl7DBu3JUDHZlEPXo_0mgQJjrnbwV-rP4nhvwGFPfDR3s2EKQCJjLvgrxm5ZlfEqbsFhiLeaw36yYiO0rgaFEnZZcalytkt0tMScY3W_Ai-E3rqXpSZyosJOqUpaDKPhxivMw1IYIWFY5ai-9g79TS4E3AKOt4TdtR6MPqNPqNRMCvnysJf4U4VyDGznptKhKo0goEqh62Yhtk9HF7dE'
const ADMIN_IMG2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO-zK38nLBzWZYqaIcTc099Wl_O465C31eo_oLefXGNDqB-tkKFFLCuwLFflUXKbNIvUPMxbH91FG32yshBWYGQXKe3KObUwXSBTXbOCG2lsp-euEG6Qsw7LwpnjT5K-tmoSlDNWOzeLxURrwUT5xLI9z6pjmV42G3IMiOMUD9nrK2sQB5Ks0q9gtafxkTLmf1iMsJLwIhm0Z1QrriA8VZBHwmQ07phtwcLrkgo92ZByyeZTdMOfvTWVeiajEBYd9Q20bD1tIheLA'

const HOURS = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00']

export default function AdminHoy() {
  const navigate = useNavigate()

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      <div className="noise-overlay fixed inset-0 z-[9999] pointer-events-none"></div>

      {/* Desktop Layout */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="h-screen w-64 fixed left-0 top-0 bg-primary-container text-surface flex flex-col p-4 z-40 shadow-xl">
          <div className="flex flex-col h-full">
            {/* Brand */}
            <div className="flex items-center gap-3 mb-10 px-4">
              <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>content_cut</span>
              </div>
              <div>
                <h1 className="text-xl font-headline italic leading-none text-surface">La Vanguardia</h1>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 text-surface">Admin Panel</p>
              </div>
            </div>
            {/* Nav Links */}
            <nav className="flex-grow space-y-1">
              <a className="flex items-center gap-3 bg-surface/10 text-surface border-l-4 border-on-tertiary-container py-3 px-4 transition-all group" href="#">
                <span className="material-symbols-outlined opacity-90 group-hover:scale-110 transition-transform">calendar_today</span>
                <span className="text-[0.9rem] font-medium">Hoy</span>
              </a>
              <a
                onClick={() => navigate('/admin/turnos')}
                className="flex items-center gap-3 text-surface/60 py-3 px-4 hover:bg-surface/5 transition-all group cursor-pointer"
              >
                <span className="material-symbols-outlined opacity-70 group-hover:scale-110 transition-transform">list_alt</span>
                <span className="text-[0.9rem] font-medium">Turnos</span>
              </a>
              <a className="flex items-center gap-3 text-surface/60 py-3 px-4 hover:bg-surface/5 transition-all group cursor-pointer">
                <span className="material-symbols-outlined opacity-70 group-hover:scale-110 transition-transform">content_cut</span>
                <span className="text-[0.9rem] font-medium">Servicios</span>
              </a>
              <a className="flex items-center gap-3 text-surface/60 py-3 px-4 hover:bg-surface/5 transition-all group cursor-pointer">
                <span className="material-symbols-outlined opacity-70 group-hover:scale-110 transition-transform">content_paste_search</span>
                <span className="text-[0.9rem] font-medium">Barberos</span>
              </a>
              <a className="flex items-center gap-3 text-surface/60 py-3 px-4 hover:bg-surface/5 transition-all group cursor-pointer">
                <span className="material-symbols-outlined opacity-70 group-hover:scale-110 transition-transform">settings</span>
                <span className="text-[0.9rem] font-medium">Ajustes</span>
              </a>
            </nav>
            {/* Sidebar Footer */}
            <div className="mt-auto pt-6 border-t border-surface/10">
              <button className="w-full bg-on-tertiary-container text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-[20px]">add_circle</span>
                <span>Nuevo Turno</span>
              </button>
              <div className="flex items-center gap-3 mt-6 px-2">
                <img className="w-10 h-10 rounded-full object-cover border border-surface/20" alt="Don Pepe" src={ADMIN_IMG} />
                <div>
                  <p className="text-xs font-bold leading-none text-surface">Don Pepe</p>
                  <p className="text-[10px] opacity-60 text-surface">Master Barber</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow ml-64 bg-surface">
          {/* TopAppBar */}
          <header className="sticky top-0 bg-surface/80 backdrop-blur-md z-30 px-8 py-6 flex justify-between items-center max-w-[1400px] mx-auto">
            <div className="flex items-baseline gap-4">
              <h2 className="text-4xl font-headline font-bold text-primary">Agenda del Día</h2>
              <span className="text-on-surface-variant font-medium">Jueves, 24 de Octubre</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative">
                <span className="material-symbols-outlined text-primary text-2xl cursor-pointer hover:text-on-tertiary-container transition-colors">notifications</span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-on-tertiary-container rounded-full border-2 border-surface"></span>
              </div>
              <div className="flex items-center gap-3 pl-6 border-l border-outline-variant/30">
                <div className="text-right">
                  <p className="text-sm font-bold leading-none">Don Pepe</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Administrador</p>
                </div>
                <img className="w-10 h-10 rounded-full object-cover shadow-sm" alt="Don Pepe" src={ADMIN_IMG2} />
              </div>
            </div>
          </header>

          <div className="px-8 pb-12 max-w-[1400px] mx-auto">
            {/* Quick Stats */}
            <div className="flex gap-4 mb-8">
              <div className="flex-1 bg-surface-container-low p-6 rounded-xl flex items-center justify-between border-b-2 border-transparent hover:border-primary transition-all">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Turnos Totales</p>
                  <h3 className="text-3xl font-headline font-bold text-primary">24</h3>
                </div>
                <span className="material-symbols-outlined text-primary opacity-20 text-4xl">event_available</span>
              </div>
              <div className="flex-1 bg-surface-container-low p-6 rounded-xl flex items-center justify-between border-b-2 border-transparent hover:border-on-tertiary-container transition-all">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Confirmados</p>
                  <h3 className="text-3xl font-headline font-bold text-on-tertiary-fixed-variant">18</h3>
                </div>
                <span className="material-symbols-outlined text-on-tertiary-fixed-variant opacity-20 text-4xl">check_circle</span>
              </div>
              <div className="flex-1 bg-surface-container-low p-6 rounded-xl flex items-center justify-between border-b-2 border-transparent hover:border-secondary transition-all">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Pendientes</p>
                  <h3 className="text-3xl font-headline font-bold text-secondary">6</h3>
                </div>
                <span className="material-symbols-outlined text-secondary opacity-20 text-4xl">pending_actions</span>
              </div>
            </div>

            {/* Scheduling Grid */}
            <div className="bg-surface-container-lowest rounded-2xl p-2 shadow-sm relative overflow-hidden">
              <div className="overflow-x-auto custom-scrollbar">
                <div className="min-w-[1000px]">
                  {/* Grid Header */}
                  <div className="grid grid-cols-[80px_repeat(4,1fr)] sticky top-0 bg-surface-container-lowest z-20 border-b border-outline-variant/10">
                    <div className="p-4"></div>
                    {BARBERS_GRID.map((b) => (
                      <div key={b.name} className="p-4 text-center">
                        <img className="w-12 h-12 rounded-full mx-auto mb-2 object-cover grayscale hover:grayscale-0 transition-all duration-500" alt={b.alt} src={b.img} />
                        <p className="font-headline font-bold text-primary">{b.name}</p>
                        <p className="text-[10px] text-on-surface-variant">{b.specialty}</p>
                      </div>
                    ))}
                  </div>

                  {/* Grid Body */}
                  <div className="relative">
                    {/* Hour Lines */}
                    <div className="absolute inset-0 grid pointer-events-none" style={{ gridTemplateRows: 'repeat(11, 100px)' }}>
                      {Array.from({ length: 11 }).map((_, i) => (
                        <div key={i} className="border-b border-outline-variant/10"></div>
                      ))}
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-[80px_repeat(4,1fr)] relative">
                      {/* Time Labels */}
                      <div className="flex flex-col text-on-surface-variant text-[11px] font-bold">
                        {HOURS.map(h => (
                          <div key={h} className="h-[100px] flex items-start justify-center pt-2">{h}</div>
                        ))}
                      </div>

                      {/* Mateo Column */}
                      <div className="relative h-[1100px] border-r border-outline-variant/10">
                        <div className="absolute top-[50px] left-2 right-2 h-[80px] bg-primary-container text-white p-3 rounded-lg shadow-md border-l-4 border-on-tertiary-container z-10 hover:scale-[1.02] transition-transform cursor-pointer">
                          <p className="text-[10px] font-bold uppercase opacity-70 leading-none mb-1">09:30 - 10:15</p>
                          <p className="font-headline font-bold text-sm">Lucas Gómez</p>
                          <p className="text-[10px] opacity-80">Corte &amp; Barba</p>
                        </div>
                        <div className="absolute top-[250px] left-2 right-2 h-[120px] bg-primary-container text-white p-3 rounded-lg shadow-md border-l-4 border-on-tertiary-container z-10 hover:scale-[1.02] transition-transform cursor-pointer">
                          <p className="text-[10px] font-bold uppercase opacity-70 leading-none mb-1">11:30 - 12:45</p>
                          <p className="font-headline font-bold text-sm">Pedro Ramírez</p>
                          <p className="text-[10px] opacity-80">Tratamiento Capilar</p>
                        </div>
                        <div className="absolute top-[600px] left-2 right-2 h-[60px] bg-primary-container text-white p-3 rounded-lg shadow-md border-l-4 border-on-tertiary-container z-10 hover:scale-[1.02] transition-transform cursor-pointer">
                          <p className="text-[10px] font-bold uppercase opacity-70 leading-none mb-1">15:00 - 15:30</p>
                          <p className="font-headline font-bold text-sm">Andrés V.</p>
                        </div>
                      </div>

                      {/* Julián Column */}
                      <div className="relative h-[1100px] border-r border-outline-variant/10">
                        <div className="absolute top-[120px] left-2 right-2 h-[100px] bg-surface-container-high border border-outline-variant/30 text-primary p-3 rounded-lg shadow-sm z-10 hover:scale-[1.02] transition-transform cursor-pointer">
                          <p className="text-[10px] font-bold uppercase text-on-surface-variant leading-none mb-1">10:15 - 11:15</p>
                          <p className="font-headline font-bold text-sm">Marcos Sosa</p>
                          <p className="text-[10px] text-on-surface-variant">Afeitado Tradicional</p>
                          <span className="absolute top-2 right-2 text-on-tertiary-fixed-variant">
                            <span className="material-symbols-outlined text-sm">priority_high</span>
                          </span>
                        </div>
                        <div className="absolute top-[550px] left-2 right-2 h-[180px] bg-surface-container-high border border-outline-variant/30 text-primary p-3 rounded-lg shadow-sm z-10 hover:scale-[1.02] transition-transform cursor-pointer">
                          <p className="text-[10px] font-bold uppercase text-on-surface-variant leading-none mb-1">14:30 - 16:15</p>
                          <p className="font-headline font-bold text-sm">Carlos Estévez</p>
                          <p className="text-[10px] text-on-surface-variant">Completo Premium</p>
                        </div>
                      </div>

                      {/* Santi Column */}
                      <div className="relative h-[1100px] border-r border-outline-variant/10">
                        <div className="absolute top-[20px] left-2 right-2 h-[60px] bg-primary-container text-white p-3 rounded-lg shadow-md border-l-4 border-on-tertiary-container z-10 hover:scale-[1.02] transition-transform cursor-pointer">
                          <p className="text-[10px] font-bold uppercase opacity-70 leading-none mb-1">09:00 - 09:30</p>
                          <p className="font-headline font-bold text-sm">Nico Ruiz</p>
                        </div>
                        <div className="absolute top-[400px] left-2 right-2 h-[80px] bg-primary-container text-white p-3 rounded-lg shadow-md border-l-4 border-on-tertiary-container z-10 hover:scale-[1.02] transition-transform cursor-pointer">
                          <p className="text-[10px] font-bold uppercase opacity-70 leading-none mb-1">13:00 - 13:45</p>
                          <p className="font-headline font-bold text-sm">Tomás L.</p>
                        </div>
                        <div className="absolute top-[750px] left-2 right-2 h-[80px] bg-primary-container text-white p-3 rounded-lg shadow-md border-l-4 border-on-tertiary-container z-10 hover:scale-[1.02] transition-transform cursor-pointer">
                          <p className="text-[10px] font-bold uppercase opacity-70 leading-none mb-1">16:30 - 17:15</p>
                          <p className="font-headline font-bold text-sm">Felipe M.</p>
                        </div>
                      </div>

                      {/* Hugo Column */}
                      <div className="relative h-[1100px]">
                        <div className="absolute top-[350px] left-2 right-2 h-[150px] bg-on-tertiary-fixed-variant text-white p-3 rounded-lg shadow-md border-l-4 border-primary z-10 hover:scale-[1.02] transition-transform cursor-pointer">
                          <p className="text-[10px] font-bold uppercase opacity-70 leading-none mb-1">12:30 - 14:00</p>
                          <p className="font-headline font-bold text-sm">Roberto Sanchez</p>
                          <p className="text-[10px] opacity-80 mb-2">Combo VIP Barbería</p>
                          <div className="flex gap-1">
                            <span className="px-2 py-0.5 bg-white/20 rounded text-[9px] font-bold">VIP</span>
                            <span className="px-2 py-0.5 bg-white/20 rounded text-[9px] font-bold">PAGADO</span>
                          </div>
                        </div>
                        <div className="absolute top-[850px] left-2 right-2 h-[70px] bg-surface-container-high border border-outline-variant/30 text-primary p-3 rounded-lg shadow-sm z-10 hover:scale-[1.02] transition-transform cursor-pointer">
                          <p className="text-[10px] font-bold uppercase text-on-surface-variant leading-none mb-1">17:30 - 18:15</p>
                          <p className="font-headline font-bold text-sm">Jorge G.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer / Legend */}
            <div className="mt-8 flex justify-between items-center text-on-surface-variant text-sm border-t border-outline-variant/20 pt-6">
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary-container"></span>
                  <span>Confirmado</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-surface-container-high border border-outline-variant"></span>
                  <span>Pendiente</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-on-tertiary-fixed-variant"></span>
                  <span>Urgente / VIP</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-surface-container-high font-bold rounded-lg hover:bg-surface-container-highest transition-colors">Exportar PDF</button>
                <button className="px-4 py-2 bg-primary-container text-white font-bold rounded-lg hover:brightness-110 transition-colors">Cerrar Caja</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
