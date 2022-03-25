import { alpha, Container, Stack, Typography, useMediaQuery, Box } from '@material-ui/core';
import Slider from 'react-slick';
import { styled, useTheme } from '@material-ui/core/styles';
import Rating from '@material-ui/core/Rating';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import {
  MotionInView,
  varFadeInLeft,
  varFadeInRight,
  varWrapEnter,
  varFadeInDown
} from '../../animate';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  background: theme.palette.background.neutral,
  paddingBottom: theme.spacing(6)
}));

const HeroImgStyle = styled(motion.img)(({ theme }) => {
  const shadowCard = (opacity: number) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    borderRadius: '8px',
    height: '35vh',
    marginTop: 0,
    objectFit: 'cover',
    width: 'auto',
    boxShadow: `0px 40px 80px 0 ${shadowCard(0.4)}`,
    [theme.breakpoints.up('lg')]: {
      height: '45vh',
      width: 540,
      backgroundColor: theme.palette.background.paper
    }
  };
});

const FEEDBACKS = [
  {
    title: '',
    mentee: 'Lê Duy Thuận',
    image: '/static/home/home_feedback_mentee_1.jpg',
    rating: 4,
    feedbackDetails: [
      {
        title: 'Khả năng truyền đạt của giảng viên',
        descripiton:
          'Thầy giảng bài rất dễ tiếp thu, toàn những kiến thức hay cùng những kinh nghiệm của thầy không ở đâu mà tìm được.'
      }
    ]
  },
  {
    title: '',
    mentee: 'Nguyễn Trần Thanh Tâm',
    image: '/static/home/home_feedback_mentee_2.jpg',
    rating: 5,
    feedbackDetails: [
      {
        title: 'Môi trường học tập',
        descripiton:
          'Em học ở đây đã được 3 tháng, giáo viên vui vẻ nhiệt tình, không khí lớp học lúc nào cũng náo nhiệt chứ không tĩnh mịch như em nghĩ lúc đầu.'
      }
    ]
  },
  {
    title: '',
    mentee: 'Nguyễn Chí Thiện',
    image: '/static/home/home_feedback_mentee_3.jpg',
    rating: 4,
    feedbackDetails: [
      {
        title: '2 tháng thành developer',
        descripiton:
          'Học ở đây mãi không chán, học tới đâu nắm tới đó, trước giờ tự học mãi mà không có tác dụng gì, không ngờ đến lớp mới 2 tháng đã thành thạo được lập trình. Quá tuyệt vời.'
      }
    ]
  }
];

export default function HomeFeedbackMentee() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: true,
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
    pauseOnHover: true
  };

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="md">
          <Box sx={{ mb: { xs: 2, md: 2 }, textAlign: 'center' }}>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h3" sx={{ mb: 1 }}>
                Cảm nhận học viên tại UNIPRO
              </Typography>
            </MotionInView>
          </Box>
        </Container>
        <Slider ref={sliderRef} {...settings}>
          {FEEDBACKS.map((feedback, index) => {
            const secondary = index % 2 !== 0;
            return (
              <MotionInView
                sx={{
                  backgroundColor: secondary
                    ? theme.palette.background.default
                    : theme.palette.background.neutral
                }}
                key={`features-${index}`}
                variants={secondary ? varFadeInRight : varFadeInLeft}
              >
                <Container maxWidth="lg">
                  <Stack
                    py={5}
                    direction={{ xs: 'column-reverse', md: secondary ? 'row' : 'row-reverse' }}
                    spacing={10}
                    alignItems="center"
                  >
                    <Stack spacing={3} sx={{ flex: 1, px: 2 }} textAlign={['center', 'left']}>
                      <Box>
                        <Typography mb={2} variant="h3">
                          {feedback.title}
                        </Typography>
                        <Typography variant="h6"> Học viên: {feedback.mentee}</Typography>
                      </Box>
                      <Box>
                        <Typography component="legend" variant="h6">
                          Đánh giá
                        </Typography>
                        <Rating name="read-only" value={feedback.rating} readOnly />
                      </Box>
                      <Stack spacing={4}>
                        {feedback.feedbackDetails.map((feedbackDetail) => (
                          <Box key={`feedbackDetail-${feedbackDetail.title}`}>
                            <Stack spacing={1}>
                              <Typography variant="h5">{feedbackDetail.title}</Typography>
                              <Typography variant="h6">{feedbackDetail.descripiton}</Typography>
                            </Stack>
                          </Box>
                        ))}
                      </Stack>
                    </Stack>
                    <Box>
                      <HeroImgStyle alt="feature-1" src={feedback.image} />
                    </Box>
                  </Stack>
                </Container>
              </MotionInView>
            );
          })}
        </Slider>
      </RootStyle>
    </>
  );
}
