import { alpha, Container, Stack, Typography, useMediaQuery, Box, Grid } from '@material-ui/core';
import Slider from 'react-slick';
import { styled, useTheme } from '@material-ui/core/styles';
import Rating from '@material-ui/core/Rating';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AppRegistrationIcon from '@material-ui/icons/AppRegistration';
import UpcomingIcon from '@material-ui/icons/Upcoming';
import DesignServicesIcon from '@material-ui/icons/DesignServices';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import {
  MotionInView,
  varFadeInLeft,
  varFadeInRight,
  varWrapEnter,
  varFadeInDown,
  varFadeInUp
} from '../../animate';
import TitleCard from '../../TitleCard';

Chart.register(...registerables);
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  background: theme.palette.background.neutral,
  paddingBottom: theme.spacing(16),
  position: 'relative',
  borderTop: '2px solid rgb(255, 165, 0)'
}));

const HeroImgStyle = styled(motion.img)(({ theme }) => {
  const shadowCard = (opacity: number) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    borderRadius: '8px',
    height: '25vh',
    marginTop: 0,
    objectFit: 'cover',
    width: 'auto',
    boxShadow: `0px 40px 80px 0 ${shadowCard(0.4)}`,
    [theme.breakpoints.up('lg')]: {
      height: '25vh',
      width: 'auto',
      backgroundColor: theme.palette.background.paper
    }
  };
});

const FEEDBACKS = [
  {
    title: 'Courage',
    mentee: 'Lê Duy Thuận',
    image: '/static/home/home_feedback_mentee_1.jpg',
    rating: 4,
    // icon: '/static/icons/ic_delivery.gif',
    icon: <UpcomingIcon style={{ color: 'white' }} fontSize="large" />,
    feedbackDetails: [
      {
        title: 'Khả năng truyền đạt của giảng viên',
        descripiton:
          'Mọi sự cố gắng sẽ được đền đáp một cách xứng đáng, để có được kết quả tốt nhất, UniPro luôn luôn cố gắng để giúp học viên tiếp cận được bài học một cách vui vẻ, thoải mái và hiệu quả nhất.'
      }
    ]
  },
  {
    title: 'Cooperation',
    mentee: 'Nguyễn Trần Thanh Tâm',
    image: '/static/home/home_feedback_mentee_2.jpg',
    rating: 5,
    // icon: '/static/icons/ic_mastercard.svg',
    icon: <AccountTreeIcon style={{ color: 'white' }} fontSize="large" />,
    feedbackDetails: [
      {
        title: 'Môi trường học tập',
        descripiton:
          'UniPro đề cao sự hợp tác vui vẻ, tạo cho học viên một môi trường học tập và phát triển thuận lợi nhất.'
      }
    ]
  },
  {
    title: 'Continuous',
    mentee: 'Nguyễn Chí Thiện',
    image: '/static/home/home_feedback_mentee_3.jpg',
    rating: 4,
    // icon: '/static/icons/ic_notification_chat.svg',
    icon: <AppRegistrationIcon style={{ color: 'white' }} fontSize="large" />,
    feedbackDetails: [
      {
        title: '2 tháng thành developer',
        descripiton:
          'UniPro luôn sẵn sàng lắng nghe và hỗ trợ học viên trong vấn đề học tập mọi khi cần.'
      }
    ]
  },
  {
    title: 'Creative',
    mentee: 'Nguyễn Chí Thiện',
    image: '/static/home/home_feedback_mentee_3.jpg',
    rating: 4,
    // icon: '/static/icons/ic_rocket.svg',
    icon: <DesignServicesIcon style={{ color: 'white' }} fontSize="large" />,
    feedbackDetails: [
      {
        title: '2 tháng thành developer',
        descripiton:
          'IT là một lĩnh vực cần sự sáng tạo, UniPro với đội ngũ trẻ, nhiệt tình với công việc và sự sáng tạo luôn tràn trề, giúp học viên nắm vững kiến thức mà không hề nhàm chán trong quá trình học.'
      }
    ]
  }
];

const COREVALUES = {
  labels: ['Courage', 'Cooperation', 'Continuous', 'Creative'],
  datasets: [
    {
      label: 'Population',
      data: [100, 100, 100, 100],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ]
    }
  ]
};

const shadowIcon = (color: string) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const CardIconStyle = styled('img')(({ theme }) => ({
  width: 54,
  height: 54,
  marginBottom: theme.spacing(1),
  filter: shadowIcon(theme.palette.primary.main)
}));

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ffc107'
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47'
  }
});

const CircleStyle = styled('div')(({ theme }) => ({
  width: 60,
  height: 60,
  // position: 'relative',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(241, 90, 34, 1)',
  borderRadius: '50%',
  marginBottom: theme.spacing(1),
  filter: shadowIcon(theme.palette.primary.main)
}));

export default function CoreValues() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isLight = theme.palette.mode === 'light';
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 8000,
    cssEase: 'linear',
    className: 'slider variable-width',
    variableWidth: false,
    pauseOnHover: true,
    afterChange: () => {
      setHeart(0);
    }
  };

  // set heart animation
  const [heart, setHeart] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (heart < 5) {
        setHeart(heart + 1);
      } else {
        setHeart(0);
      }
    }, 300);
    return () => clearInterval(interval);
  });

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <TitleCard>
        <MotionInView>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Stack sx={{ flex: 0 }}>
              <motion.div
                animate={{ rotateX: [-45, 45] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              >
                <VpnKeyIcon color="secondary" style={{ fontSize: isDesktop ? '40px' : '30px' }} />
              </motion.div>
            </Stack>
            &nbsp;
            <Typography variant={isDesktop ? 'h4' : 'h5'} style={{ color: 'white' }}>
              GIÁ TRỊ CỐT LÕI
            </Typography>
          </Stack>
        </MotionInView>
      </TitleCard>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }}>
          <Stack
            sx={{ flex: 1 }}
            textAlign="center"
            style={{ width: 'auto', height: '25vh', margin: '0px auto' }}
          >
            <MotionInView variants={varFadeInDown}>
              <MotionInView variants={varFadeInDown}>
                <Typography
                  sx={{
                    color: 'text.black',
                    textAlign: 'justify',
                    px: 2
                  }}
                  variant="h6"
                >
                  Những giá trị nòng cốt, trọng yếu của UniPro
                </Typography>
              </MotionInView>
              <Stack textAlign="center" style={{ width: '250px', height: '250px' }}>
                <Doughnut
                  data={COREVALUES}
                  options={{
                    onClick: () => {
                      console.log('fsdf');
                    },
                    plugins: {
                      // title: {
                      //   display: true,
                      //   text: 'Những nguyên tắc nòng cốt, trọng yếu của UniPro'
                      // },
                      legend: {
                        display: true,
                        position: 'right'
                      },
                      tooltip: {
                        enabled: false
                      }
                    }
                  }}
                />
              </Stack>
            </MotionInView>
          </Stack>
          <Stack sx={{ flex: 6 }} style={{ width: isDesktop ? '65vw' : 'auto' }}>
            <Slider ref={sliderRef} {...settings}>
              {FEEDBACKS.map((feedback, index) => {
                const secondary = index % 2 !== 0;
                return (
                  <MotionInView
                    sx={{
                      backgroundColor: secondary
                        ? theme.palette.background.neutral
                        : theme.palette.background.neutral
                    }}
                    key={`features-${index}`}
                    variants={varFadeInRight}
                  >
                    <Stack
                      direction={{ xs: 'column-reverse', md: 'row' }}
                      spacing={1}
                      alignItems="center"
                      sx={{ flex: 1 }}
                    >
                      <Stack
                        spacing={1}
                        sx={{ flex: 1, px: isDesktopSmDown ? 2 : 5, py: 4 }}
                        textAlign={['justify', 'left']}
                      >
                        <Box mb={1}>
                          <Typography variant="h3">{feedback.title}</Typography>
                        </Box>
                        <Grid item xs={12} md={1}>
                          {/* <CardIconStyle src={feedback.icon} /> */}
                          <CircleStyle>{feedback.icon}</CircleStyle>
                        </Grid>
                        <Stack mb={1}>
                          {feedback.feedbackDetails.map((feedbackDetail) => (
                            <Box key={`feedbackDetail-${feedbackDetail.title}`}>
                              <Stack>
                                <Typography variant="h6">{feedbackDetail.descripiton}</Typography>
                              </Stack>
                            </Box>
                          ))}
                        </Stack>
                        <StyledRating
                          name="customized-color"
                          value={heart}
                          // getLabelText={(value: number) =>
                          //   `${value} Heart${value !== 1 ? 's' : ''}`
                          // }
                          // precision={0.5}
                          // icon={<FavoriteIcon fontSize="inherit" />}
                          // emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                          max={5}
                        />
                      </Stack>
                      <Box>
                        <HeroImgStyle alt="feature-1" src={feedback.image} />
                      </Box>
                    </Stack>
                  </MotionInView>
                );
              })}
            </Slider>
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}
