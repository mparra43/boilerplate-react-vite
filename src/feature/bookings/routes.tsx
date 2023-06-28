import { Route, Routes } from 'react-router-dom'
import { Bookings} from './pages'

export const TransversalRoutes = () => {
  return (
    <Routes>
      <Route path='bookings' element={<Bookings/>} />
    </Routes>
  )
}
