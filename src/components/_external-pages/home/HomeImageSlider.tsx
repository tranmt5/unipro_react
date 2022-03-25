import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
// material
import { useTheme, styled } from '@material-ui/core/styles';
import { Box, useMediaQuery, Typography } from '@material-ui/core';
// utils
import {
  MotionInView,
  varFadeInDownDesktopSmDown,
  varFadeInDownDesktopSmDownSlowly,
  varFadeInDownDesktopMdDown,
  varFadeInDownDesktopMdDownSlowly,
  varFadeInDownDesktopMdUp,
  varFadeInDownDesktopMdUpSlowly
} from '../../animate';
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

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(9),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('sm')]: {
    paddingBottom: theme.spacing(0)
  },
  [theme.breakpoints.down('sm')]: {
    paddingBottom: theme.spacing(10)
  },
  [theme.breakpoints.up('sm')]: {
    backgroundColor: theme.palette.background.default
  }
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

const FADE_IN_DOWN = [
  {
    fadeTitle: varFadeInDownDesktopSmDown,
    fadeCaption: varFadeInDownDesktopSmDownSlowly
  },
  {
    fadeTitle: varFadeInDownDesktopMdDown,
    fadeCaption: varFadeInDownDesktopMdDownSlowly
  },
  {
    fadeTitle: varFadeInDownDesktopMdUp,
    fadeCaption: varFadeInDownDesktopMdUpSlowly
  }
];

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
  const [fadeInDown, setFadeInDown] = useState(FADE_IN_DOWN[0]);
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

  useEffect(() => {
    if (isDesktopSm) {
      setFadeInDown(FADE_IN_DOWN[0]);
    } else if (isDesktopMd) {
      setFadeInDown(FADE_IN_DOWN[1]);
    } else {
      setFadeInDown(FADE_IN_DOWN[2]);
    }
  }, [isDesktopSm, isDesktopMd]);

  return (
    <RootStyle>
      <Box sx={{ position: 'relative' }}>
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
          <div>
            <MotionInView variants={fadeInDown.fadeTitle}>
              <Typography
                variant={isDesktopSm ? 'h3' : 'h2'}
                color={isDesktopSm ? '#00000' : '#ffff'}
                sx={{ ml: { sm: 10, md: 10, lg: 10 }, pl: { md: 4, lg: 3 }, mx: { xs: 4 } }}
              >
                {SLIDERS[indexTitle].title}
              </Typography>
            </MotionInView>
            <MotionInView variants={fadeInDown.fadeCaption}>
              <Typography
                variant={isDesktopSm ? 'h6' : 'h4'}
                color="#FF6600"
                sx={{ ml: { sm: 10, md: 10, lg: 10 }, pl: { md: 4, lg: 3 }, mx: { xs: 4 } }}
              >
                {SLIDERS[indexTitle].caption}
              </Typography>
            </MotionInView>
          </div>
        )}
        {indexTitle % 2 !== 0 && (
          <div>
            <MotionInView variants={fadeInDown.fadeTitle}>
              <Typography
                variant={isDesktopSm ? 'h3' : 'h2'}
                color={isDesktopSm ? '#00000' : '#ffff'}
                sx={{ ml: { sm: 10, md: 10, lg: 10 }, pl: { md: 4, lg: 3 }, mx: { xs: 4 } }}
              >
                {SLIDERS[indexTitle].title}
              </Typography>
            </MotionInView>
            <MotionInView variants={fadeInDown.fadeCaption}>
              <Typography
                variant={isDesktopSm ? 'h6' : 'h4'}
                color="#FF6600"
                sx={{ ml: { sm: 10, md: 10, lg: 10 }, pl: { md: 4, lg: 3 }, mx: { xs: 4 } }}
              >
                {SLIDERS[indexTitle].caption}
              </Typography>
            </MotionInView>
          </div>
        )}
      </Box>
    </RootStyle>
  );
}
