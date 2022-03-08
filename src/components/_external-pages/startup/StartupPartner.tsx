// material
import { useRef } from 'react';
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Stack } from '@material-ui/core';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIosSharp';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIosNewSharp';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';
// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/static/icons/ic_customer.svg',
    title: (
      <>
        Reso <br /> Direct-to-Consumer
      </>
    ),
    description:
      'Allow your brand to offer your customers a personalised buying experience. Go D2C and add a new distribution channel for your brand.'
  },
  {
    icon: '/static/icons/ic_store.svg',
    title: (
      <>
        Reso <br /> Hyperlocal Marketplace
      </>
    ),
    description:
      'Leverage your business with a hyperlocal marketplace platform and focus on your target audience, ensuring on-time delivery.'
  },
  {
    icon: '/static/icons/ic_headless.svg',
    title: (
      <>
        Reso <br /> Headless Commerce
      </>
    ),
    description:
      'Scale your business with an event-driven platform. Build your own front-end and enhance your business without worrying about the infrastructure.'
  }
];

const shadowIcon = (color: string) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(8)
  }
}));

const SlickStyle = styled(Container)(({ theme }) => ({
  '& .slick-initialized .slick-slide': {
    padding: theme.spacing(0, 4)
  }
}));

const PartnerImageStyle = styled(motion.img)(({ theme }) => ({
  width: 'auto',
  height: 100
}));

// ----------------------------------------------------------------------

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  cssEase: 'linear',
  className: 'slider variable-width',
  variableWidth: true,
  pauseOnHover: true
};

export default function StartupPartner() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const sliderRef = useRef<Slider>(null);

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 10, md: 16 } }}>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h3" sx={{ textAlign: 'center', mb: 3 }}>
                Đối tác doanh nghiệp
              </Typography>
            </MotionInView>
          </Box>
        </Container>

        <SlickStyle maxWidth="md" style={{ position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <Button
              style={{
                position: 'absolute',
                left: '0%',
                top: '50%',
                zIndex: 15,
                transform: 'translate(-50%, -50%)'
              }}
              className="float-start"
              variant="contained"
              color="success"
              onClick={() => {
                sliderRef.current?.slickPrev();
              }}
            >
              <ArrowBackIosIcon />
            </Button>
            <Button
              style={{
                position: 'absolute',
                left: '100%',
                top: '50%',
                zIndex: 15,
                transform: 'translate(-50%, -50%)'
              }}
              variant="contained"
              color="success"
              onClick={() => {
                sliderRef.current?.slickNext();
              }}
            >
              <ArrowForwardIosIcon />
            </Button>
            <Slider {...settings} ref={sliderRef}>
              <PartnerImageStyle src="/static/home/domino-horizontal.png" />
              <PartnerImageStyle src="/static/home/passio.jpg" />
            </Slider>
          </div>
        </SlickStyle>
      </Container>
    </RootStyle>
  );
}
