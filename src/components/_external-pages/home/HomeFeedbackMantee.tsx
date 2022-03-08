import { alpha, Container, Stack, Typography, useMediaQuery, Box, Grid } from '@material-ui/core';
import { styled, useTheme } from '@material-ui/core/styles';
import Rating from '@material-ui/core/Rating';
import { motion } from 'framer-motion';
//
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
  paddingBottom: theme.spacing(10)
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

const FEATURES = [
  {
    title: 'Cảm nhận học viên tại UniPro',
    mantee: 'Lê Duy Thuận',
    image: '/static/home/home_feedback_mantee_2.jpg',
    rating: 4,
    featureDetails: [
      {
        title: 'Khả năng truyền đạt của giảng viên',
        descripiton:
          'Thầy giảng bài rất dễ tiếp thu, toàn những kiến thức hay cùng những kinh nghiệm của thầy không ở đâu mà tìm được.'
      }
    ]
  },
  {
    title: '',
    mantee: 'Nguyễn Trần Thanh Tâm',
    image: '/static/home/home_feedback_mantee_1.jpg',
    rating: 5,
    featureDetails: [
      {
        title: 'Môi trường học tập',
        descripiton:
          'Em học ở đây đã được 3 tháng, giáo viên vui vẻ nhiệt tình, không khí lớp học lúc nào cũng náo nhiệt chứ không tĩnh mịch như em nghĩ lúc đầu.'
      }
    ]
  },
  {
    title: '',
    mantee: 'Nguyễn Chí Thiện',
    image: '/static/home/home_feedback_mantee_3.jpg',
    rating: 4,
    featureDetails: [
      {
        title: '2 tháng thành developer',
        descripiton:
          'Học ở đây mãi không chán, học tới đâu nắm tới đó, trước giờ tự học mãi mà không có tác dụng gì, không ngờ đến lớp mới 2 tháng đã thành thạo được lập trình. Quá tuyệt vời.'
      }
    ]
  }
];

export default function HomeFeedbackMantee() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        {FEATURES.map((feature, index) => {
          const secondary = index % 2 !== 0;
          return (
            <MotionInView
              sx={{
                backgroundColor: secondary
                  ? theme.palette.background.neutral
                  : theme.palette.background.default
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
                  <Stack spacing={3} sx={{ flex: 1 }} textAlign={['center', 'left']}>
                    <Box>
                      <Typography mb={2} variant="h3">
                        {feature.title}
                      </Typography>
                      <Typography variant="subtitle1"> Học viên: {feature.mantee}</Typography>
                    </Box>
                    <Box>
                      <Typography component="legend">Đánh giá</Typography>
                      <Rating name="read-only" value={feature.rating} readOnly />
                    </Box>
                    <Stack spacing={4}>
                      {feature.featureDetails.map((fetureDetail) => (
                        <Box key={`featureDetail-${fetureDetail.title}`}>
                          <Stack spacing={1}>
                            <Typography variant="h5">{fetureDetail.title}</Typography>
                            <Typography>{fetureDetail.descripiton}</Typography>
                          </Stack>
                        </Box>
                      ))}
                    </Stack>
                  </Stack>
                  <Box>
                    <HeroImgStyle alt="feature-1" src={feature.image} />
                  </Box>
                </Stack>
              </Container>
            </MotionInView>
          );
        })}
      </RootStyle>
    </>
  );
}
