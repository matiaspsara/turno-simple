import { useNavigate } from 'react-router-dom'

const services = [
  { id: 1, name: 'Corte de cabello', duration: '45 min', price: '$8.500', signature: false },
  { id: 2, name: 'Arreglo de barba', duration: '30 min', price: '$5.200', signature: false },
  { id: 3, name: 'Combo corte + barba', duration: '75 min', price: '$12.000', signature: true },
  { id: 4, name: 'Afeitado con navaja', duration: '40 min', price: '$6.000', signature: false },
  { id: 5, name: 'Corte de niños', duration: '40 min', price: '$7.000', signature: false },
]

export default function Paso1Servicio() {
  const navigate = useNavigate()

  return (
    <div className="bg-surface font-body text-on-surface grainy-overlay min-h-screen pb-24">
      {/* Top AppBar */}
      <header className="bg-[#fff9ee] sticky top-0 z-40 transition-all duration-300">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <span className="text-2xl font-serif italic text-[#1b3a2d]">La Vanguardia</span>
          <div className="flex items-center gap-4">
            <button className="text-[#1b3a2d]/70 hover:text-[#c0392b] transition-colors p-2 active:scale-95 duration-150">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-[#1b3a2d]/70 hover:text-[#c0392b] transition-colors p-2 active:scale-95 duration-150">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[390px] mx-auto overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative px-6 pt-8 pb-12 overflow-hidden bg-primary text-on-primary">
          <div className="absolute top-0 right-0 w-64 h-64 -mr-20 -mt-20 rounded-full bg-on-primary-container/10 blur-3xl"></div>
          <div className="relative z-10">
            <h1 className="font-headline text-5xl italic leading-tight mb-2">La Vanguardia</h1>
            <p className="text-on-primary-container font-medium tracking-wide uppercase text-xs mb-8">Auténtica, confiable, con onda</p>
            <button
              onClick={() => navigate('/reservar/barbero')}
              className="bg-tertiary-container text-on-tertiary h-[48px] px-8 rounded-lg font-bold flex items-center justify-center gap-2 shadow-xl shadow-black/20 hover:scale-105 active:scale-95 transition-all"
            >
              Sacar turno
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
          {/* Asymmetric Image Decor */}
          <div className="absolute -bottom-4 -right-12 w-48 h-48 rotate-12 opacity-40">
            <img
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              alt="vintage leather barber chair in a dark moody atmosphere with warm spotlighting highlighting wood textures"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv8My-US0eHDOanyEnJFNWgzZZXVyPOcSvKq5cOdZtAbOPf_dJfQE_9o8-X3iaDl04RO0rxjulxaxMA3k4-0gBZJHKrDLGzzBvCuw-Q1X9aJMYz-BfGOtbA6E46RP9dXwqa9UwEmJiBnUcwH53HYgB8dcFm4o5Wm3LNqPyVGVfVG1UkspK_aa9S3fIcVJPfzAcXbGU2sCHvs2fimQ7p_srBCsZBVP5yWMKLIgHhjmfjKDGtBRGA5GcW-CqZcquIdlzN92qxhZHMik"
            />
          </div>
        </section>

        {/* Stepper */}
        <div className="bg-surface-container-low px-6 py-6 space-y-3">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <span className="text-xs font-bold text-on-tertiary-fixed-variant uppercase tracking-widest">Paso 1 de 4</span>
              <h2 className="font-headline text-2xl text-on-surface">Seleccioná tu servicio</h2>
            </div>
            <div className="flex gap-1 mb-1">
              <div className="w-8 h-1 rounded-full bg-on-tertiary-fixed-variant"></div>
              <div className="w-8 h-1 rounded-full bg-outline-variant/30"></div>
              <div className="w-8 h-1 rounded-full bg-outline-variant/30"></div>
              <div className="w-8 h-1 rounded-full bg-outline-variant/30"></div>
            </div>
          </div>
        </div>

        {/* Service List */}
        <section className="p-6 space-y-6">
          {services.map((service) =>
            service.signature ? (
              <div key={service.id} className="relative group bg-surface-container-lowest p-5 rounded-xl transition-all border-l-4 border-tertiary-container shadow-md flex flex-col gap-4 overflow-hidden">
                <div className="absolute top-0 right-0 bg-tertiary-container text-on-tertiary text-[10px] px-3 py-1 rounded-bl-lg font-bold uppercase tracking-tighter">Signature</div>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="font-headline text-xl text-primary leading-tight">{service.name}</h3>
                    <div className="flex items-center gap-2 text-on-surface-variant text-xs">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      {service.duration}
                    </div>
                  </div>
                  <div className="text-lg font-headline font-bold text-primary">{service.price}</div>
                </div>
                <button
                  onClick={() => navigate('/reservar/barbero', { state: { service: service.name } })}
                  className="h-[48px] w-full bg-tertiary-container text-on-tertiary rounded-lg font-bold transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Elegir este combo
                </button>
              </div>
            ) : (
              <div key={service.id} className="group bg-surface-container-lowest p-5 rounded-xl transition-all border-l-4 border-transparent hover:border-primary-container shadow-sm flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="font-headline text-xl text-primary leading-tight">{service.name}</h3>
                    <div className="flex items-center gap-2 text-on-surface-variant text-xs">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      {service.duration}
                    </div>
                  </div>
                  <div className="text-lg font-headline font-bold text-primary">{service.price}</div>
                </div>
                <button
                  onClick={() => navigate('/reservar/barbero', { state: { service: service.name } })}
                  className="h-[48px] w-full bg-surface-container-highest group-hover:bg-primary-container group-hover:text-on-primary rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
                  Elegir
                </button>
              </div>
            )
          )}
        </section>

        {/* Aesthetic Divider */}
        <div className="px-6 py-8">
          <div className="bg-surface-variant h-px w-full flex items-center justify-center">
            <span className="material-symbols-outlined bg-surface px-4 text-outline-variant">content_cut</span>
          </div>
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#fff9ee]/90 backdrop-blur-md border-t border-[#1b3a2d]/10 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-2xl">
        <a href="#" className="flex flex-col items-center justify-center text-[#1b3a2d]/60 p-2 hover:bg-[#1b3a2d]/5 transition-all">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[0.75rem] font-medium font-label">Inicio</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-[#1b3a2d]/60 p-2 hover:bg-[#1b3a2d]/5 transition-all">
          <span className="material-symbols-outlined">event_note</span>
          <span className="text-[0.75rem] font-medium font-label">Mis Turnos</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center bg-[#1b3a2d] text-[#fff9ee] rounded-xl p-2 px-6">
          <span className="material-symbols-outlined">add_circle</span>
          <span className="text-[0.75rem] font-medium font-label">Reservar</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-[#1b3a2d]/60 p-2 hover:bg-[#1b3a2d]/5 transition-all">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[0.75rem] font-medium font-label">Perfil</span>
        </a>
      </nav>
    </div>
  )
}
