import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';


const HomePage = lazy(() => import('./pages/HomePage'));
const PersonDetailPage = lazy(() => import('./pages/PersonDetailPage'));


const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: '/pessoa/:id',
    element: (
      <Suspense fallback={<Loading />}>
        <PersonDetailPage />
      </Suspense>
    ),
  },
]);

export default router;