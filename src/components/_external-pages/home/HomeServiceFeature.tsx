import { alpha, Container, Stack, Typography, useMediaQuery, Box, Grid } from '@material-ui/core';
import { styled, useTheme } from '@material-ui/core/styles';
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
  paddingTop: theme.spacing(8),
  background: theme.palette.background.default,
  paddingBottom: theme.spacing(4)
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
    title: 'Hình ảnh học viên tại UNIPRO',
    caption: 'Hoạt động khóa học',
    image: '/static/home/home_service_learning.jpg',
    featureDetails: [
      {
        title: 'Tiêu chí hướng tới',
        descripiton:
          'Tạo môi trường tốt nhất cho học viên học tập và có việc làm ngay sau khi hoàn thành khóa học'
      },
      {
        title: 'Rèn luyện kỹ năng',
        descripiton:
          'Để có được đam mê, hãy tiến từng bước nhỏ từ giải bài tập cho tới làm các dự án, rồi làm nhiều thứ hay ho hơn để nâng cao khả năng lập trình của mình.'
      },
      {
        title: 'Vượt mọi khó khăn',
        descripiton:
          'Không bơ phờ vì triền miên thiếu ngủ, không chán nản bên những ký tự khô khan, học viên luôn tràn đầy sức sống bởi có bí kíp tìm niềm vui từ những ngày làm bạn với các dãy code dài miên man.'
      }
    ]
  },
  {
    title: 'Xây dựng mô hình Bootcamp',
    caption: 'Coding Bootcamp',
    image: '/static/home/home_service_bootcamp.jpg',
    featureDetails: [
      {
        title: 'Mục đích',
        descripiton:
          'Coding Bootcamp được xây dựng nhằm mục đích đào tạo lập trình viên thực chiến, đáp ứng nhu cầu thực tế của doanh nghiệp và học viên về một khóa học cung cấp đủ kiến thức, kỹ năng nhưng thời gian học ngắn.'
      },
      {
        title: 'Thời gian',
        descripiton:
          'Một khóa Coding Bootcamp có giá chỉ bằng 30% so với chi phí học đại học vì tiết kiệm được phí sinh hoạt, lược bỏ các môn học, hoạt động ngoại khóa.'
      },
      {
        title: 'Nội dung chương trình và mức độ tập trung',
        descripiton:
          'Học viên Coding Bootcamp dành toàn bộ thời gian để học lập trình, giúp hiệu quả học tập tăng lên. Nội dung học cũng được cô đọng, chỉ giảng dạy các môn học đáp ứng nhu cầu công việc thực tế của doanh nghiệp. Các môn kiến thức nền tảng như ở giáo trình đại cương của Đại học và Cao đẳng thường bị lược bỏ.'
      }
    ]
  },
  {
    title: 'Thực hành tại phòng Lab',
    caption: 'Lab office',
    image: '/static/home/home_service_lab.jpg',
    featureDetails: [
      {
        title: 'Mục tiêu',
        descripiton: 'Tạo ra các ứng dụng, phần mềm có thể mang tới giá trị cho xã hội.'
      },
      {
        title: 'Trang thiết bị phòng Lab',
        descripiton:
          'Dàn máy cấu hình "khủng", điều hòa mát lạnh lại có view xanh tươi thích hợp cho những ý tưởng mới.'
      }
    ]
  }
];

export default function HomeServiceFeature() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <Stack spacing={10}>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h3" sx={{ textAlign: 'left', mb: 1 }}>
                Dịch vụ
              </Typography>
            </MotionInView>
          </Stack>
        </Container>
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
                  <Stack spacing={6} sx={{ flex: 1 }} textAlign={['center', 'left']}>
                    <Box>
                      <Typography mb={1} variant="subtitle1">
                        {feature.caption}
                      </Typography>
                      <Typography variant="h4">{feature.title}</Typography>
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
