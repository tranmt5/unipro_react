import { NavLink as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Button, AppBar, Toolbar, Container, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// components
import Logo from '../../components/Logo';
import Label from '../../components/Label';
import { MHidden } from '../../components/@material-extend';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import { rightMenuConfig } from './MenuConfig';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 88;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export type MenuItemProps = {
  title: string;
  path: string;
  icon?: JSX.Element;
  children?: {
    subheader: string;
    items: {
      title: string;
      path: string;
    }[];
  }[];
};

export type MenuProps = {
  isOffset: boolean;
  isHome: boolean;
  navConfig: MenuItemProps[];
};

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 16 }
          })
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box mr={4} className="d-flex" sx={{ alignItems: 'center' }}>
            <RouterLink to="/">
              <Logo />
            </RouterLink>
            <MHidden width="smDown">
              <Typography
                variant="h4"
                px={2}
                sx={{ color: 'rgba(241, 90, 34, 1)' }}
                textAlign="center"
              >
                UniPro Training Center
                <Typography
                  variant="h6"
                  sx={{
                    color: 'rgba(10, 10, 90, 1)',
                    borderTop: '2px solid',
                    borderImage: 'linear-gradient(to right, darkblue, darkorchid) 1'
                  }}
                  textAlign="center"
                >
                  Đào tạo lập trình chuyên sâu
                </Typography>
              </Typography>
            </MHidden>
          </Box>

          {/* <MHidden width="mdDown">
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden> */}

          <Box sx={{ flexGrow: 1 }} />

          <MHidden width="mdDown">
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={rightMenuConfig} />
          </MHidden>
          {/* <MHidden width="mdDown">
            <Button
              variant="contained"
              target="_blank"
              href="https://material-ui.com/store/items/minimal-dashboard/"
            >
              Xem mẫu
            </Button>
          </MHidden> */}

          <MHidden width="mdUp">
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={[...rightMenuConfig]} />
          </MHidden>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
