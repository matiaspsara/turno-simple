import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Paso4Confirmacion() {
  const navigate = useNavigate()
  const location = useLocation()
  const [showSuccess, setShowSuccess] = useState(false)
  const [nombre, setNombre] = useState('')
  const [celular, setCelular] = useState('')
  const [notas, setNotas] = useState('')

  const service = location.state?.service || 'Corte de cabello'
  const barber = location.state?.barber || 'Nico'
  const time = location.state?.time || '10:30'

  const handleConfirmar = () => {
    setShowSuccess(true)
  }

  return (
    <div className="bg-surface text-on-surface min-h-screen relative overflow-x-hidden max-w-[390px] mx-auto shadow-2xl">
      <div className="fixed inset-0 noise-overlay z-[100] pointer-events-none"></div>

      {/* Top Navigation */}
      <header className="sticky top-0 z-40 bg-surface-bright/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate('/reservar/barbero')}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <span className="font-headline italic text-xl font-bold text-primary">La Vanguardia</span>
        <div className="w-10"></div>
      </header>

      <main className="px-6 pb-32 pt-4">
        {/* Stepper */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">1</span>
            <span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">2</span>
            <span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">3</span>
            <div className="h-8 w-[2px] bg-primary mx-1 opacity-20"></div>
            <span className="w-8 h-8 rounded-full bg-on-tertiary-fixed-variant text-on-tertiary flex items-center justify-center text-xs font-bold ring-4 ring-on-tertiary-fixed-variant/20">4</span>
          </div>
          <span className="text-on-surface-variant uppercase tracking-widest text-[10px] font-medium">Paso Final</span>
        </div>

        {/* Section Title */}
        <h1 className="font-headline text-4xl font-bold leading-tight mb-2 -ml-1">Confirmá tu turno</h1>
        <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
          Revisá los detalles de tu cita y completá tus datos para asegurar tu lugar en el sillón.
        </p>

        {/* Summary Card */}
        <div className="bg-surface-container rounded-xl p-6 mb-8 relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary/60 mb-1">Servicio</p>
                <h3 className="font-headline text-xl text-primary font-bold">{service} con {barber}</h3>
              </div>
              <span className="material-symbols-outlined text-primary/40">content_cut</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary/60 mb-1">Fecha y Hora</p>
                <p className="font-body text-sm font-semibold">Jueves 14 de mayo</p>
                <p className="font-body text-sm text-on-surface-variant">{time} hs</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold uppercase tracking-wider text-primary/60 mb-1">Inversión</p>
                <p className="font-headline text-2xl text-on-tertiary-fixed-variant font-bold">$8.500</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form className="space-y-6 mb-12" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-primary/70 mb-2 px-1">Nombre completo</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Juan Pérez"
              className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-on-surface-variant/50 transition-all font-body text-sm outline-none"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-primary/70 mb-2 px-1">Celular</label>
            <div className="relative">
              <input
                type="tel"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
                placeholder="011 4444-5555"
                className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-on-surface-variant/50 transition-all font-body text-sm outline-none"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary/30 text-lg">phone_iphone</span>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-primary/70 mb-2 px-1">Notas opcionales</label>
            <textarea
              value={notas}
              onChange={(e) => setNotas(e.target.value)}
              placeholder="Contanos si tenés alguna preferencia..."
              rows={3}
              className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-on-surface-variant/50 transition-all font-body text-sm resize-none outline-none"
            />
          </div>
        </form>

        {/* Main Action CTA */}
        <button
          onClick={handleConfirmar}
          className="w-full h-14 bg-on-tertiary-fixed-variant text-on-tertiary rounded-lg font-bold text-lg shadow-xl shadow-on-tertiary-fixed-variant/20 hover:scale-[1.02] active:scale-95 transition-all mb-6 flex items-center justify-center gap-2"
        >
          Confirmar turno
          <span className="material-symbols-outlined text-xl">check_circle</span>
        </button>
        <p className="text-center text-[10px] text-on-surface-variant/60 italic">Al confirmar, aceptás nuestras políticas de cancelación.</p>
      </main>

      {/* Background decoration */}
      <div className="fixed -bottom-10 -right-10 w-48 h-48 opacity-10 pointer-events-none rotate-12">
        <img
          className="w-full h-full object-contain"
          alt="vintage barber shop tools such as scissors and comb on a marble surface"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6X5sboAx4Ju-JdSSxjDdr0H8U-lNJPiN_Q2FB1yCkRx3BMqdSWFD-701xV6VmleWMJlkVLzCxD24t8uut5XUMDNE0pXhP3PacDxDT2Ae_RXPvvLH6ksmDbxgYqSXvedRJJM9C3Brn5anUBXD4Nfzk796GUWojRq8C1LfLwG4nDvy4lOo7X38QNnXmdM0v-ksqAXJpd3GslCGXolS4RMZ538s7K2omSyLp6QlSpsaHUs5UzGAXLdipk5HbpE2MfSKegIlZddS18Mg"
        />
      </div>

      {/* Success Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background flex flex-col items-center justify-center px-6 transition-opacity duration-500 overflow-hidden ${
          showSuccess ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 noise-overlay pointer-events-none"></div>
        <div className="w-24 h-24 bg-primary text-on-primary rounded-full flex items-center justify-center mb-8 relative">
          <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-20"></div>
          <span className="material-symbols-outlined text-5xl">check</span>
        </div>
        <h2 className="font-headline text-4xl font-bold text-center mb-2">
          ¡Listo{nombre ? `, ${nombre.split(' ')[0]}` : ''}!
        </h2>
        <p className="text-on-surface-variant text-center mb-8">Tu turno fue reservado con éxito.</p>
        <div className="w-full bg-surface-container-low rounded-2xl p-6 border-2 border-primary/5 mb-10 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50 mb-1">Número de reserva</p>
          <p className="text-3xl font-headline font-bold text-primary">#1284</p>
          <div className="mt-4 pt-4 border-t border-primary/5">
            <p className="text-sm font-medium text-on-surface">{service} con {barber}</p>
            <p className="text-xs text-on-surface-variant">14 de mayo • {time} hs</p>
          </div>
        </div>
        <div className="w-full space-y-3">
          <button className="w-full h-14 bg-primary text-on-primary rounded-lg font-bold flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">calendar_add_on</span>
            Agregar al calendario
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full h-14 bg-surface-container-highest text-on-surface rounded-lg font-bold"
          >
            Listo
          </button>
        </div>
      </div>

      {/* Footer Shadow */}
      <div className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </div>
  )
}
