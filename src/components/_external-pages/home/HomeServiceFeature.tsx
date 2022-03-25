import { alpha, Container, Stack, Typography, useMediaQuery, Box } from '@material-ui/core';
import { styled, useTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
//
import {
  MotionInView,
  varFadeInLeft,
  varFadeInRight,
  varWrapEnter,
  varFadeInDown,
  varFadeInUp
} from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  background: theme.palette.background.default,
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

const SERVICES = [
  {
    title: 'Hình ảnh học viên tại UNIPRO',
    caption: 'Hoạt động khóa học',
    image: '/static/home/home_service_learning.jpg',
    serviceDetails: [
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
    serviceDetails: [
      {
        title: 'Thời gian',
        descripiton:
          'Chỉ mất khoảng thời gian từ 6-8 tháng, học viên tham gia khóa học Cording Bootcamp tại Unipro Center sẽ trở thành một lập trình viên thực chiến.'
      },
      {
        title: 'Chi phí',
        descripiton: 'Rất thấp, chỉ bằng 1/4 chi phí tại các giảng đường Đại học.'
      },
      {
        title: 'Kiến thức',
        descripiton: (
          <>
            Các môn học tập trung chuyên sâu
            <b> vừa học-vừa hành</b>.
          </>
        )
      }
    ]
  },
  {
    title: 'Thực hành tại phòng Lab',
    caption: 'Lab office',
    image: '/static/home/home_service_lab.jpg',
    serviceDetails: [
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
  const isLight = theme.palette.mode === 'light';

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="md">
          <Box sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                Giới thiệu
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <Typography
                sx={{
                  color: isLight ? 'text.secondary' : 'text.primary'
                }}
                variant="h6"
              >
                Với sứ mệnh đào tạo ra các kỹ sư CNTT trong tương lai, cung cấp nguồn nhân lực IT
                cho các dự án lớn, mở rộng cơ hội nghề nghiệp thích ứng với sự biến đổi của thị
                trường, Unipro Center tạo mọi điều kiện tốt nhất để học viên được học tập trong một
                môi trường chuyền nghiệp, hiện đại và thực tế cùng với giáo trình được biên soạn
                theo tiêu chuẩn Quốc tế dưới sự giảng dạy của các chuyên gia đầu ngành trong lĩnh
                vực CNTT.
              </Typography>
            </MotionInView>
          </Box>
        </Container>
        {SERVICES.map((service, index) => {
          const secondary = index % 2 !== 0;
          return (
            <MotionInView
              sx={{
                backgroundColor: secondary
                  ? theme.palette.background.neutral
                  : theme.palette.background.default
              }}
              key={`service-${index}`}
              variants={secondary ? varFadeInRight : varFadeInLeft}
            >
              <Container maxWidth="lg">
                <Stack
                  py={5}
                  direction={{ xs: 'column-reverse', md: secondary ? 'row' : 'row-reverse' }}
                  spacing={10}
                  alignItems="center"
                >
                  <Stack spacing={6} sx={{ flex: 1, px: 2 }} textAlign={['center', 'left']}>
                    <Box>
                      <Typography mb={1} variant="h6">
                        {service.caption}
                      </Typography>
                      <Typography variant="h4">{service.title}</Typography>
                    </Box>
                    <Stack spacing={4}>
                      {service.serviceDetails.map((serviceDetail) => (
                        <Box key={`serviceDetail-${serviceDetail.title}`}>
                          <Stack spacing={1}>
                            <Typography variant="h5">{serviceDetail.title}</Typography>
                            <Typography
                              sx={{ color: isLight ? 'text.secondary' : 'common.white' }}
                              variant="h6"
                            >
                              {serviceDetail.descripiton}
                            </Typography>
                          </Stack>
                        </Box>
                      ))}
                    </Stack>
                  </Stack>
                  <Box>
                    <HeroImgStyle alt="service-1" src={service.image} />
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
