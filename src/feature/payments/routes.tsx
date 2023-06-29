import { Route, Routes } from 'react-router-dom'
import { Payments } from './pages'

export const PaymentsRoutes = () => {
  return (
    <Routes>
      <Route path='payments' element={<Payments/>} />
      
    </Routes>
  )
}
