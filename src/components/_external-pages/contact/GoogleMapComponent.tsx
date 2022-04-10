import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Container, Typography, useMediaQuery, Stack } from '@material-ui/core';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { motion } from 'framer-motion';
import { useState } from 'react';
import DirectionsIcon from '@material-ui/icons/Directions';
import AddLocationAltIcon from '@material-ui/icons/AddLocationAlt';
//----------------------------------------------------------------------
import { varFadeInUp, MotionInView, varFadeInDown, varWrapEnter } from '../../animate';
import { TitleCardCircle } from '../../TitleCard';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  background: theme.palette.background.neutral,
  paddingBottom: theme.spacing(16),
  position: 'relative',
  borderTop: '2px solid rgb(255, 165, 0)'
}));

const CardDirectionStyle = styled('div')(({ theme }) => ({
  width: 'auto',
  height: 'auto',
  position: 'absolute',
  padding: '5px 10px',
  marginBottom: theme.spacing(1),
  backgroundColor: '#ffff',
  [theme.breakpoints.up('sm')]: {
    top: '12px',
    left: '220px'
  },
  [theme.breakpoints.down('sm')]: {
    top: '100px',
    left: '50%',
    transform: 'translate(-50%,0)'
  },
  filter: shadowIcon(theme.palette.primary.main)
}));

const shadowIcon = (color: string) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

type Information = { address: string; companyName: string };

const Info = { address: 'Đường 447 - Tăng Nhơn Phú A', companyName: 'UniPro Training Center' };

function Map() {
  const [detail, setDetail] = useState<Information | null>(Info);
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 10.846453552768324, lng: 106.79234758981762 }}
    >
      <Marker
        icon={{
          // url: 'https://insulationpads.co.uk/wp-content/uploads/2017/10/Home.png',
          url: '/static/logo_uni.png',
          scaledSize: new (window as any).google.maps.Size(32, 32),
          zIndex: 1000
        }}
        position={{ lat: 10.846453552768324, lng: 106.79234758981762 }}
        onClick={() => {
          setDetail(Info);
        }}
      >
        {detail && (
          <InfoWindow
            position={{ lat: 10.846453552768324, lng: 106.79234758981762 }}
            onCloseClick={() => {
              setDetail(null);
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
              <span>{detail.companyName}</span>
              <span>{detail.address}</span>
            </div>
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
  );
}

const WrappedMap: any = withScriptjs(withGoogleMap(Map));

export default function GoogleMapComponent() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const key = 'AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao';

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <div
        style={{
          top: '1px',
          width: '100%',
          position: 'absolute',
          borderTop: '5px solid rgb(255, 165, 0)',
          borderRight: '50px solid transparent',
          borderLeft: '50px solid transparent'
        }}
      />
      <TitleCardCircle>
        <MotionInView variants={varFadeInDown}>
          <motion.div animate={{ y: [-10, 0, -10] }} transition={{ duration: 3, repeat: Infinity }}>
            <AddLocationAltIcon color="secondary" style={{ fontSize: '40px' }} />
          </motion.div>
        </MotionInView>
      </TitleCardCircle>
      <Container maxWidth="md">
        <Box sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <MotionInView variants={varFadeInDown}>
            <Stack direction="row" justifyContent="center">
              <Typography variant="h3" sx={{ mb: 3 }}>
                VỊ TRÍ UNIPRO
              </Typography>
            </Stack>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography
              sx={{
                color: isLight ? 'text.secondary' : 'text.primary',
                textAlign: isDesktopSmUp ? 'center' : 'justify',
                px: 2
              }}
              variant="h6"
            >
              Tìm UNIPRO nhanh hơn và dễ dàng hơn bằng Google Maps
            </Typography>
          </MotionInView>
        </Box>
      </Container>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <MotionInView variants={varFadeInUp}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&callback=initMap`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
          <CardDirectionStyle
            onMouseOver={(event) => (event.currentTarget.style.backgroundColor = '#ced4da')}
            onMouseLeave={(event) => (event.currentTarget.style.backgroundColor = '#ffff')}
          >
            <a
              href="https://www.google.com/maps/dir//10.846453552768324,+106.79234758981762/@10.8448704,106.7872287,15.5z/data=!4m6!4m5!1m0!1m3!2m2!1d106.7923476!2d10.8464536"
              target="blank"
              style={{
                textDecoration: 'none',
                color: 'black',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <div style={{ fontSize: '18px' }}>Go to directtion</div>
              &nbsp;
              <DirectionsIcon fontSize="large" color="info" />
            </a>
          </CardDirectionStyle>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
