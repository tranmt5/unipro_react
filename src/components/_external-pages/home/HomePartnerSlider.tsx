// material
import { useEffect, useRef, useState } from 'react';
import { useTheme, styled } from '@material-ui/core/styles';
import { Container, Typography, useMediaQuery, Box } from '@material-ui/core';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
//
import { MotionInView, varFadeInDown, varFadeInUp } from '../../animate';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(10),
  backgroundColor: theme.palette.background.neutral,
  paddingBottom: theme.spacing(6)
  // [theme.breakpoints.up('lg')]: {
  //   paddingBottom: theme.spacing(8)
  // }
}));

const SlickStyle = styled(Container)(({ theme }) => ({
  '& .slick-initialized .slick-slide': {
    padding: theme.spacing(0, 0.5)
  }
}));

const UniImageStyle = styled(motion.img)(({ theme }) => ({
  width: 'auto',
  height: '25vh',
  objectFit: 'cover'
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
  autoplaySpeed: 3000,
  cssEase: 'linear',
  className: 'slider variable-width',
  variableWidth: false,
  pauseOnHover: true
};

export default function HomePartnerSlider() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const sliderRef = useRef<Slider>(null);
  const [useSettings, setUseSetting] = useState(settings);

  useEffect(() => {
    if (isDesktop) {
      setUseSetting({
        ...useSettings,
        slidesToShow: 3
      });
    } else {
      setUseSetting({
        ...useSettings,
        slidesToShow: 2
      });
    }
  }, [isDesktop]);

  return (
    <RootStyle>
      <SlickStyle maxWidth="lg" style={{ position: 'relative' }}>
        <Box sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              BẠN ĐỒNG HÀNH
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <Typography
              sx={{
                color: isLight ? 'text.secondary' : 'text.primary',
                textAlign: isDesktopSmUp ? 'center' : 'justify',
                px: 2
              }}
              variant="h6"
            >
              UniPro rất vinh dự hợp tác và đồng hành cùng với các doanh nghiệp
            </Typography>
          </MotionInView>
        </Box>
        <Slider {...useSettings} ref={sliderRef}>
          <UniImageStyle className="rounded-3" src="/static/home/home_partner_1.png" />
          <UniImageStyle className="rounded-3" src="/static/home/home_partner_code9.png" />
          <UniImageStyle className="rounded-3" src="/static/home/home_partner_bravo.png" />
          <UniImageStyle className="rounded-3" src="/static/home/home_partner_vss.png" />
        </Slider>
      </SlickStyle>
    </RootStyle>
  );
}
