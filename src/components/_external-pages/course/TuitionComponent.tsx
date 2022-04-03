import { alpha, Container, Stack, Typography, useMediaQuery, Box, Card } from '@material-ui/core';
import { styled, useTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import FunctionsIcon from '@material-ui/icons/Functions';
import CurrencyExchangeIcon from '@material-ui/icons/PriceCheck';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';
//
import {
  MotionInView,
  varFadeInRight,
  varWrapEnter,
  varFadeInDown,
  varFadeInUp
} from '../../animate';
import { TitleCardCircle } from '../../TitleCard';

// ----------------------------------------------------------------------

const TUITIONS = [
  {
    title: [
      'Giai đoạn',
      'Học kỳ 1',
      'Học kỷ 2',
      'Học kỳ 3',
      'Học kỳ 4',
      'Học kỳ 5',
      <>
        <FunctionsIcon color="success" fontSize="large" />
      </>,
      <>
        <CurrencyExchangeIcon color="error" fontSize="large" />
      </>
    ],
    option_1: ['Đóng theo 1 học kỳ', 6000000, 6000000, 6000000, 6000000, 6000000, 30000000, '0%'],
    option_2: ['Đóng theo 2 học kỳ', 10200000, 10200000, 5100000, 25500000, '15%'],
    option_3: ['Đóng theo 3 học kỳ', 14400000, 9600000, 24000000, '20%'],
    option_4: ['Đóng theo trọn khóa (5 kỳ)', 22500000, 22500000, '25%']
  }
];

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

function formatPrice(price: number) {
  return Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(price);
}

export default function TuitionComponent() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isDesktopSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <div
        style={{
          top: '0px',
          position: 'absolute',
          borderTop: '10px solid rgb(255, 165, 0)',
          borderRight: '50vw solid transparent',
          borderLeft: '50vw solid transparent'
        }}
      />
      <TitleCardCircle>
        <MotionInView variants={varFadeInDown}>
          <motion.div
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <ShutterSpeedIcon
              color="secondary"
              style={{ fontSize: '40px', paddingBottom: '2px' }}
            />
          </motion.div>
        </MotionInView>
      </TitleCardCircle>
      <Container maxWidth="md">
        <Box sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              CHÍNH SÁCH HỌC PHÍ
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <Typography
              sx={{
                color: isLight ? 'text.secondary' : 'text.primary',
                textAlign: 'justify',
                px: 2
              }}
              variant="h6"
            >
              Nhằm tiết kiệm và tạo điều kiện thuận lợi cho mỗi học viên theo học tại UniPro, UniPro
              cung cấp các hạng mục học phí tùy theo khả năng của học viên.
            </Typography>
          </MotionInView>
        </Box>
      </Container>
      <MotionInView
        sx={{ backgroundColor: theme.palette.background.neutral }}
        variants={varFadeInRight}
      >
        <Container maxWidth="lg" sx={{ ...(isDesktopSmDown && { overflowX: 'auto' }) }}>
          <Stack direction={{ xs: 'row', md: 'column' }} spacing={0}>
            <Stack py={1} direction={{ xs: 'column', md: 'row' }} spacing={0}>
              {TUITIONS[0].title.map((title, index) => (
                <Box sx={{ flex: 1 }} key={`title-${index}`}>
                  <Card
                    style={{
                      backgroundColor: 'rgba(255, 165, 0, 0.4)',
                      minHeight: '100px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ textAlign: 'center', px: 2 }}>{title}</Box>
                  </Card>
                </Box>
              ))}
            </Stack>
            <Stack py={1} direction={{ xs: 'column', md: 'row' }} spacing={0}>
              {TUITIONS[0].option_1.map((option_1, index) => (
                <MotionInView sx={{ flex: 1 }} key={`option_1-${index}`} variants={varFadeInUp}>
                  <Card
                    style={{
                      ...{ backgroundColor: 'rgba(255, 255, 255, 0.5)' },
                      ...(index === 0 && {
                        backgroundColor: 'rgba(255, 165, 0, 0.4)'
                      }),
                      ...(index === 6 && {
                        backgroundColor: 'rgba(255, 0, 0, 0.5)'
                      }),
                      ...(index === 7 && {
                        backgroundColor: 'rgba(0, 155, 0, 0.3)'
                      }),
                      minHeight: '100px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ textAlign: 'center', px: 2 }}>
                      {typeof option_1 === 'number' ? formatPrice(option_1) : option_1}
                    </Box>
                  </Card>
                </MotionInView>
              ))}
            </Stack>
            <Stack py={1} direction={{ xs: 'column', md: 'row' }} spacing={0}>
              {TUITIONS[0].option_2.map((option_2, index) => (
                <MotionInView
                  sx={{ flex: index === 1 || index === 2 ? 2 : 1 }}
                  key={`option_2-${index}`}
                  variants={varFadeInUp}
                >
                  <Card
                    style={{
                      ...{ backgroundColor: 'rgba(255, 255, 255, 0.5)' },
                      ...(index === 0 && {
                        backgroundColor: 'rgba(255, 165, 0, 0.4)'
                      }),
                      ...(index === 4 && {
                        backgroundColor: 'rgba(255, 0, 0, 0.5)'
                      }),
                      ...(index === 5 && {
                        backgroundColor: 'rgba(0, 155, 0, 0.3)'
                      }),
                      minHeight: '100px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ textAlign: 'center', px: 2 }}>
                      {typeof option_2 === 'number' ? formatPrice(option_2) : option_2}
                    </Box>
                  </Card>
                </MotionInView>
              ))}
            </Stack>
            <Stack py={1} direction={{ xs: 'column', md: 'row' }} spacing={0}>
              {TUITIONS[0].option_3.map((option_3, index) => (
                <MotionInView
                  sx={{
                    ...((index === 0 || index === 3 || index === 4) && {
                      flex: 1
                    }),
                    ...(index === 1 && {
                      flex: 3
                    }),
                    ...(index === 2 && {
                      flex: 2
                    })
                  }}
                  key={`option_3-${index}`}
                  variants={varFadeInUp}
                >
                  <Card
                    style={{
                      ...{ backgroundColor: 'rgba(255, 255, 255, 0.5)' },
                      ...(index === 0 && {
                        backgroundColor: 'rgba(255, 165, 0, 0.4)'
                      }),
                      ...(index === 3 && {
                        backgroundColor: 'rgba(255, 0, 0, 0.5)'
                      }),
                      ...(index === 4 && {
                        backgroundColor: 'rgba(0, 155, 0, 0.3)'
                      }),
                      minHeight: '100px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ textAlign: 'center', px: 2 }}>
                      {typeof option_3 === 'number' ? formatPrice(option_3) : option_3}
                    </Box>
                  </Card>
                </MotionInView>
              ))}
            </Stack>
            <Stack py={1} direction={{ xs: 'column', md: 'row' }} spacing={0}>
              {TUITIONS[0].option_4.map((option_4, index) => (
                <MotionInView
                  sx={{ flex: index === 1 ? 5 : 1 }}
                  key={`option_4-${index}`}
                  variants={varFadeInUp}
                >
                  <Card
                    style={{
                      ...{ backgroundColor: 'rgba(255, 255, 255, 0.5)' },
                      ...(index === 0 && {
                        backgroundColor: 'rgba(255, 165, 0, 0.4)'
                      }),
                      ...(index === 2 && {
                        backgroundColor: 'rgba(255, 0, 0, 0.5)'
                      }),
                      ...(index === 3 && {
                        backgroundColor: 'rgba(0, 155, 0, 0.3)'
                      }),
                      minHeight: '100px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ textAlign: 'center', px: 2 }}>
                      {typeof option_4 === 'number' ? formatPrice(option_4) : option_4}
                    </Box>
                  </Card>
                </MotionInView>
              ))}
            </Stack>
          </Stack>
        </Container>
      </MotionInView>
    </RootStyle>
  );
}
