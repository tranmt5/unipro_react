import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { useTheme, styled } from '@material-ui/core/styles';
import { Box, useMediaQuery, Typography, Container, Grid } from '@material-ui/core';
import { motion } from 'framer-motion';
import { MotionInView, varFadeInDown, varWrapEnter } from '../../animate';
import { CarouselControlsArrowsBasic2 } from '../../carousel';

// ----------------------------------------------------------------------

const SLIDERS = [
  {
    title: 'GÓC HỌC TẬP',
    caption: 'Học tập theo cặp, cùng nhau phát triển',
    image: '/static/home/home_slider_developer.jpg'
  },
  {
    title: 'TRỞ THÀNH DEVELOPER',
    caption: 'Làm việc ngay sau khi hoàn thành khóa học',
    image: '/static/home/home_slider_code.jpg'
  },
  {
    title: 'NGÔI NHÀ CHUNG',
    caption: 'Môi trường thân thiện kết hợp hoạt động thể thao.',
    image: '/static/home/home_slider_friendly.jpg'
  },
  {
    title: 'VỊ TRÍ',
    caption: 'Gần trường đại học FPT.',
    image: '/static/home/home_slider_fpt_school.png'
  }
];

// ----------------------------------------------------------------------

type MemberCardProps = {
  member: {
    title: string;
    caption: string | undefined;
    image: string;
  };
};

const RootStyle = styled(motion.div)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  background: theme.palette.background.default
}));

const BoxImg = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover'
  },
  [theme.breakpoints.down('md')]: {
    width: '100vw',
    height: '80vh',
    objectFit: 'cover'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
    height: 'auto',
    objectFit: 'cover'
  }
}));

function MemberCard({ member }: MemberCardProps) {
  const { title: name, image: avatar } = member;
  return (
    <div key={name}>
      <BoxImg src={avatar} />
    </div>
  );
}

export default function HomeImageSlider() {
  const carouselRef = useRef<Slider>(null);
  const theme = useTheme();
  const [indexTitle, setIndexTitle] = useState(0);
  const isDesktopSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isDesktopMd = useMediaQuery(theme.breakpoints.down('md'));
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    className: 'slider variable-width',
    variableWidth: false,
    pauseOnHover: true,
    afterChange: (currentSlide: number) => handleChangeSlide(currentSlide)
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  const handleChangeSlide = (currentSlide: number) => {
    setIndexTitle(currentSlide);
  };

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Box textAlign="justify" style={{ position: 'relative' }}>
        <Slider ref={carouselRef} {...settings}>
          {SLIDERS.map((slider) => (
            <div key={slider.title}>
              <MemberCard member={slider} />
            </div>
          ))}
        </Slider>
        <CarouselControlsArrowsBasic2
          onNext={handleNext}
          onPrevious={handlePrevious}
          sx={{ transform: 'translateY(-10px)' }}
        />
        {indexTitle % 2 == 0 && (
          <Container
            style={{
              height: isDesktopSm ? 'auto' : '0px',
              position: isDesktopSm ? 'relative' : 'absolute',
              top: isDesktopSm ? '0px' : '5vh'
            }}
          >
            <MotionInView variants={varFadeInDown}>
              <Grid container>
                <Grid item xs={12} sm={9} md={8}>
                  <Typography
                    variant={isDesktopMd ? 'h3' : 'h2'}
                    color={isDesktopSm ? '#00000' : '#ffff'}
                    sx={{ ml: { sm: 6, lg: 8 }, px: 2, py: 2 }}
                  >
                    {SLIDERS[indexTitle].title}
                  </Typography>
                </Grid>
              </Grid>
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <Grid container>
                <Grid item xs={12} sm={9} md={8}>
                  <Typography
                    variant="h4"
                    color={isDesktopSm ? '#00000' : '#FF6600'}
                    sx={{ ml: { sm: 6, lg: 8 }, px: 2, py: 2 }}
                  >
                    {SLIDERS[indexTitle].caption}
                  </Typography>
                </Grid>
              </Grid>
            </MotionInView>
          </Container>
        )}
        {indexTitle % 2 !== 0 && (
          <Container
            style={{
              height: isDesktopSm ? 'auto' : '0px',
              position: isDesktopSm ? 'relative' : 'absolute',
              top: isDesktopSm ? '0px' : '5vh'
            }}
          >
            <MotionInView variants={varFadeInDown}>
              <Grid container>
                <Grid item xs={12} sm={9} md={8}>
                  <Typography
                    variant={isDesktopMd ? 'h3' : 'h2'}
                    color={isDesktopSm ? '#00000' : '#ffff'}
                    sx={{ ml: { sm: 6, lg: 8 }, px: 2, py: 2 }}
                  >
                    {SLIDERS[indexTitle].title}
                  </Typography>
                </Grid>
              </Grid>
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <Grid container>
                <Grid item xs={12} sm={9} md={8}>
                  <Typography
                    variant="h4"
                    color={isDesktopSm ? '#00000' : '#FF6600'}
                    sx={{ ml: { sm: 6, lg: 8 }, px: 2, py: 2 }}
                  >
                    {SLIDERS[indexTitle].caption}
                  </Typography>
                </Grid>
              </Grid>
            </MotionInView>
          </Container>
        )}
      </Box>
    </RootStyle>
  );
}
