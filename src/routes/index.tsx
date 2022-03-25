import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// pages
import FeaturesPage from '../pages/Features';
// components
import LoadingScreen from '../components/LoadingScreen';
// ----------------------------------------------------------------------

const Loadable = (Component: any) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/coming-soon" replace /> }
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/features', element: <FeaturesPage /> },
        { path: '/', element: <HomePage /> },
        { path: '/khoa-hoc', element: <CoursePage /> },
        { path: '/client', element: <ClientPage /> },
        { path: '/coming-soon', element: <ComingSoon /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

// Dashboard
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
// Main
const HomePage = Loadable(lazy(() => import('../pages/Home')));
const CoursePage = Loadable(lazy(() => import('../pages/Course')));
const ClientPage = Loadable(lazy(() => import('../pages/Client')));
