// material
import { useEffect, useRef, useState } from 'react';
import { useTheme, styled } from '@material-ui/core/styles';
import { Container, Typography, useMediaQuery } from '@material-ui/core';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIosSharp';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIosNewSharp';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
//
import { MotionInView, varFadeInDown } from '../../animate';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('lg')]: {
    paddingBottom: theme.spacing(2)
  }
}));

const SlickStyle = styled(Container)(({ theme }) => ({
  '& .slick-initialized .slick-slide': {
    padding: theme.spacing(0, 0.5)
  }
}));

const UniImageStyle = styled(motion.img)(({ theme }) => ({
  width: 'auto',
  height: '35vh'
}));

// ----------------------------------------------------------------------

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  cssEase: 'linear',
  className: 'slider variable-width',
  variableWidth: false,
  pauseOnHover: true
};

export default function SliderImageUniPro() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const sliderRef = useRef<Slider>(null);
  const [useSettings, setUseSetting] = useState(settings);
  console.log(isDesktop);

  useEffect(() => {
    if (isDesktop) {
      setUseSetting({
        ...useSettings,
        slidesToShow: 2
      });
    } else {
      setUseSetting({
        ...useSettings,
        slidesToShow: 1
      });
    }
  }, [isDesktop]);

  return (
    <RootStyle>
      <SlickStyle maxWidth="lg" style={{ position: 'relative' }}>
        <Container
          maxWidth="lg"
          style={{
            position: 'absolute',
            zIndex: 10,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h3" sx={{ textAlign: 'center' }} color="#FFFFFF">
              Học để thành công
            </Typography>
          </MotionInView>
        </Container>
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
            variant="outlined"
            color="info"
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
            variant="outlined"
            color="warning"
            onClick={() => {
              sliderRef.current?.slickNext();
            }}
          >
            <ArrowForwardIosIcon />
          </Button>
          <Slider {...useSettings} ref={sliderRef}>
            <UniImageStyle className="rounded-3" src="/static/home/uni_img_1.jpg" />
            <UniImageStyle className="rounded-3" src="/static/home/uni_img_2.jpg" />
            <UniImageStyle className="rounded-3" src="/static/home/uni_img_3.jpg" />
          </Slider>
        </div>
      </SlickStyle>
    </RootStyle>
  );
}
