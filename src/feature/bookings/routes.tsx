import { Route, Routes } from 'react-router-dom'
import { Bookings} from './pages'

export const BookingsRoutes = () => {
  return (
    <Routes>
      <Route path='bookings' element={<Bookings/>} />
    </Routes>
  )
}
