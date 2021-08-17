import { useTheme } from '@material-ui/core/styles';
import { Outlet, useLocation } from 'react-router-dom';
//
import MainFooter from './MainFooter';
import MainNavbar from './MainNavbar';

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const theme = useTheme();

  return (
    <>
      <MainNavbar />
      <div>
        <Outlet />
      </div>

      <MainFooter />
    </>
  );
}
