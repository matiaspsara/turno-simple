import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Paso1Servicio from './pages/reserva/Paso1Servicio'
import Paso2y3 from './pages/reserva/Paso2y3'
import Paso4Confirmacion from './pages/reserva/Paso4Confirmacion'
import AdminHoy from './pages/admin/AdminHoy'
import AdminListaReservas from './pages/admin/AdminListaReservas'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Paso1Servicio />} />
        <Route path="/reservar/barbero" element={<Paso2y3 />} />
        <Route path="/reservar/confirmar" element={<Paso4Confirmacion />} />
        <Route path="/admin" element={<AdminHoy />} />
        <Route path="/admin/turnos" element={<AdminListaReservas />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
