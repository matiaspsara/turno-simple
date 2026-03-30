import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const BARBERS = [
  {
    id: 1,
    name: 'Nico',
    rating: '4.9',
    specialty: 'Maestro en Barbas y Navaja',
    tag: 'Corte de Autor',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrWLkpU4CLxjuu99MDBgz7dG44Ea4JoIS06d_WaX2gQOApzKg10oFHCO8SZiADNePHB0uhcloA61NiWFPLUdXvIuM6ZMXaYULjrgFurKJZHIswEozYVIt5M4eawqJYflb8pBHNIpnF6MN7509BYvfJoTDBCs59HeGp7_pgK5sV1cTtzOOxN2XPT9HO6-uHHvAWtbAXv6s3ruv6EZKO1wlVolULfMxYF04_P-Wr80c3QsJrrIi67xXLSsLhrdT70PQTVf8Om-fYU_E',
    alt: 'portrait of a professional barber with a styled beard and vintage shirt in a traditional barbershop setting',
  },
  {
    id: 2,
    name: 'Facu',
    rating: '5.0',
    specialty: 'Especialista en Fades y Urban style',
    tag: 'Premium',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPNt6iuIxC45EGL_t-qYfVXTrNdoQQxBOCq1aCLYvCRAEmu-eDrKQyX9dXYvQuEVnA6IBa1K-PPWYwUi0-rmeeAJJNM0lnZF8L4EwnBM5_1NYxusbuSci2uulgb2A99Ad5d-fc_ZHPtYyk86M-mwTXRhR-UtgNEA9GMurEUrIoIeBX35G11LvXR87aQ4FYxfi5I5iyp2zzkN0pi8QffX0B18xPdei3i0EPyERh_s8O9_X_65EtbNGY53Qck3dFJIQVosVQK0vAuco',
    alt: 'close-up of a stylish young barber with tattoos looking confidently at the camera',
  },
]

const TIMES = [
  { time: '09:00', disabled: false },
  { time: '09:30', disabled: false },
  { time: '10:00', disabled: true },
  { time: '10:30', disabled: false },
  { time: '11:00', disabled: false },
]

const CALENDAR_DAYS = [
  { day: 26, prev: true }, { day: 27, prev: true }, { day: 28, prev: true },
  { day: 29, prev: true }, { day: 30, prev: true },
  { day: 1 }, { day: 2 },
  { day: 3 }, { day: 4 }, { day: 5, selected: true }, { day: 6 }, { day: 7 }, { day: 8 }, { day: 9 },
]

export default function Paso2y3() {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedBarber, setSelectedBarber] = useState(2)
  const [selectedTime, setSelectedTime] = useState('09:30')
  const [selectedDay, setSelectedDay] = useState(5)

  const service = location.state?.service || 'Corte de cabello'

  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex flex-col max-w-[390px] mx-auto overflow-x-hidden">
      {/* Top Navigation */}
      <header className="bg-[#fff9ee] flex justify-between items-center w-full px-6 py-4 sticky top-0 z-40">
        <div className="text-2xl font-headline italic text-[#1b3a2d]">La Vanguardia</div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-[#1b3a2d]/70">notifications</span>
          <span className="material-symbols-outlined text-[#1b3a2d]/70">account_circle</span>
        </div>
      </header>

      <main className="flex-grow px-6 pb-32">
        {/* Stepper */}
        <div className="py-8">
          <div className="flex items-center justify-between mb-2">
            <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">Paso 2-3 de 4</span>
            <span className="font-headline italic text-lg text-primary-container">Tu turno, tu estilo.</span>
          </div>
          <div className="h-1 w-full bg-surface-container-highest rounded-full flex overflow-hidden">
            <div className="h-full bg-on-tertiary-fixed-variant w-1/2 rounded-full"></div>
          </div>
        </div>

        {/* Section 1: Choose Barber */}
        <section className="mb-10">
          <h2 className="font-headline text-3xl text-primary mb-6 -ml-1">Elegí tu barbero</h2>
          <div className="grid grid-cols-1 gap-4">
            {BARBERS.map((barber) => (
              <div
                key={barber.id}
                onClick={() => setSelectedBarber(barber.id)}
                className={`p-4 rounded-xl flex items-center gap-4 relative overflow-hidden cursor-pointer transition-all ${
                  selectedBarber === barber.id
                    ? 'bg-surface-container-low border-2 border-on-tertiary-fixed-variant'
                    : 'bg-surface-container-lowest border border-outline-variant/10 group'
                }`}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container flex-shrink-0">
                  <img className="w-full h-full object-cover" alt={barber.alt} src={barber.img} />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline text-xl text-on-surface">{barber.name}</h3>
                    <div className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-xs text-on-tertiary-fixed-variant" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-xs font-bold text-on-surface-variant">{barber.rating}</span>
                    </div>
                  </div>
                  <p className="font-label text-xs text-on-secondary-fixed-variant mb-2">{barber.specialty}</p>
                  <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter">{barber.tag}</span>
                </div>
                <div className={`absolute right-4 top-1/2 -translate-y-1/2 transition-opacity ${selectedBarber === barber.id ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="material-symbols-outlined text-on-tertiary-fixed-variant" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Choose Date & Time */}
        <section className="mb-10">
          <h2 className="font-headline text-3xl text-primary mb-6 -ml-1">Elegí el horario</h2>

          {/* Calendar Grid */}
          <div className="bg-surface-container-low rounded-xl p-5 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-headline text-xl text-primary capitalize">Octubre 2023</h4>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center mb-4">
              {['L','M','X','J','V','S','D'].map(d => (
                <span key={d} className="text-[10px] font-bold text-on-surface-variant/60">{d}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {CALENDAR_DAYS.map((d, i) => (
                d.prev ? (
                  <div key={i} className="aspect-square flex items-center justify-center text-xs opacity-20">{d.day}</div>
                ) : (
                  <button
                    key={i}
                    onClick={() => setSelectedDay(d.day)}
                    className={`aspect-square flex items-center justify-center text-xs rounded-lg transition-colors ${
                      selectedDay === d.day
                        ? 'bg-on-tertiary-fixed-variant text-on-tertiary font-bold shadow-md'
                        : 'hover:bg-primary-container/10'
                    }`}
                  >
                    {d.day}
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Time Selector */}
          <div className="relative">
            <p className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Horarios Disponibles</p>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-4 -mx-1 px-1">
              {TIMES.map(({ time, disabled }) => (
                <button
                  key={time}
                  disabled={disabled}
                  onClick={() => !disabled && setSelectedTime(time)}
                  className={`flex-shrink-0 w-24 h-12 rounded-lg font-bold text-sm transition-all ${
                    disabled
                      ? 'bg-surface-container text-on-surface-variant/40 cursor-not-allowed line-through'
                      : selectedTime === time
                        ? 'bg-on-tertiary-fixed-variant text-on-tertiary shadow-lg'
                        : 'bg-surface-container-highest text-on-surface border border-transparent hover:border-on-tertiary-fixed-variant'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Actions Bar */}
      <footer className="fixed bottom-0 left-0 w-full bg-surface-bright/95 backdrop-blur-md px-6 pt-4 pb-8 flex gap-4 z-50 border-t border-outline-variant/20 max-w-[390px] mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex-1 h-12 bg-surface-container-highest text-on-surface font-bold rounded-xl active:scale-95 duration-150"
        >
          Atrás
        </button>
        <button
          onClick={() => navigate('/reservar/confirmar', {
            state: {
              service,
              barber: BARBERS.find(b => b.id === selectedBarber)?.name,
              time: selectedTime,
              day: selectedDay,
            }
          })}
          className="flex-[2] h-12 bg-primary text-on-primary font-bold rounded-xl active:scale-95 duration-150 flex items-center justify-center gap-2"
        >
          Siguiente
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </footer>
    </div>
  )
}
