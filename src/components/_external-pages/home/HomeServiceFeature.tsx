import { alpha, Container, Stack, Typography, useMediaQuery, Box } from '@material-ui/core';
import { styled, useTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
//----------------------------------------------------------------------
import { SERVICES } from '../../../utils/mock-data/home';
import {
  MotionInView,
  varFadeInLeft,
  varFadeInRight,
  varWrapEnter,
  varFadeInDown,
  varFadeInUp
} from '../../animate';
import { TitleCardSemicircle } from '../../TitleCard';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  background: theme.palette.background.default,
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

export default function HomeServiceFeature() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <TitleCardSemicircle>
        <MotionInView variants={varFadeInDown}>
          <Typography variant={isDesktop ? 'h4' : 'h5'} style={{ color: 'white' }}>
            GIỚI THIỆU
          </Typography>
        </MotionInView>
      </TitleCardSemicircle>
      <Container maxWidth="md">
        <Box sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <MotionInView variants={varFadeInUp}>
            <Typography
              sx={{
                color: isLight ? 'text.secondary' : 'text.primary',
                textAlign: 'justify',
                px: 2
              }}
              variant="h6"
            >
              Với sứ mệnh đào tạo ra các kỹ sư CNTT trong tương lai, cung cấp nguồn nhân lực IT cho
              các dự án lớn, mở rộng cơ hội nghề nghiệp thích ứng với sự biến đổi của thị trường,
              Unipro Center tạo mọi điều kiện tốt nhất để học viên được học tập trong một môi trường
              chuyên nghiệp, hiện đại và thực tế cùng với giáo trình được biên soạn theo tiêu chuẩn
              Quốc tế dưới sự giảng dạy của các chuyên gia đầu ngành trong lĩnh vực CNTT.
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
                <Stack spacing={6} sx={{ flex: 1, px: 2 }}>
                  <Box textAlign={['center', 'left']}>
                    <Typography mb={1} variant="h6">
                      {service.caption}
                    </Typography>
                    <Typography variant="h4">{service.title}</Typography>
                  </Box>
                  <Stack spacing={4} textAlign={['justify', 'left']}>
                    {service.serviceDetails.map((serviceDetail) => (
                      <Box key={`serviceDetail-${serviceDetail.title}`}>
                        <Stack spacing={1}>
                          <Typography variant="h5">{serviceDetail.title}</Typography>
                          <Typography
                            sx={{ color: isLight ? 'text.secondary' : 'text.primary' }}
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
  );
}
