import { Route, Routes } from 'react-router-dom'
import { Tripps } from './pages/Tripps'



export const TrippsRoutes = () => {
  return (
    <Routes>
      <Route path='inicio' element={<Tripps/>} />
      
    </Routes>
  )
}
