import { RouteObject } from 'react-router-dom'
import { lazyImport } from '@/utils/lazyImport'

const { BookingsRoutes } = lazyImport(() => import('@/feature/bookings'), 'BookingsRoutes');
const { PaymentsRoutes } = lazyImport(() => import('@/feature/payments'), 'PaymentsRoutes');
const { TrippsRoutes } = lazyImport(() => import('@/feature/tripps'), 'TrippsRoutes');
const { UsersRoutes } = lazyImport(() => import('@/feature/users'), 'UsersRoutes')

export const protectedRoutes: RouteObject[] = [
    {
        path: '/bookings',
        element: <BookingsRoutes />,
      },

      {
        path: '/paymentss',
        element: <PaymentsRoutes />,
      },
      {
        path: '/tripps',
        element: <TrippsRoutes/>,
      },
      {
        path: '/bookings',
        element: <UsersRoutes />,
      },
]
