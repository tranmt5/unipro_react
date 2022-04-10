import { Box, Typography, useMediaQuery, Container } from '@material-ui/core';
import { useTheme, styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { motion } from 'framer-motion';
//----------------------------------------------------------------------
import { MotionInView, varFadeInDown, varWrapEnter } from '../../animate';

// ----------------------------------------------------------------------

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

export default function GreetingIntroduction() {
  const theme = useTheme();
  const isDesktopSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isDesktopMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Box textAlign="justify" style={{ position: 'relative' }}>
        <BoxImg src="/static/introduction/introduction_center.jpg" />
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
                  variant={isDesktopMd ? 'h6' : 'h5'}
                  color={isDesktopSm ? '#00000' : '#ffff'}
                  sx={{ ml: { sm: 6, lg: 8 }, px: 2, py: 2 }}
                >
                  Giới thiệu về UniPro
                </Typography>
              </Grid>
            </Grid>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Grid container>
              <Grid item xs={12} sm={9} md={8}>
                <Typography
                  variant="h4"
                  color={isDesktopSm ? '#00000' : '#ffff'}
                  sx={{ ml: { sm: 6, lg: 8 }, px: 2, py: 2 }}
                >
                  UniPro cung cấp một nền tảng vững chắc để bạn tiếp cận với các kiến thức trong
                  lĩnh vực công nghệ thông tin một cách dễ dàng nhất, từ đó có thêm nhiều cơ hội
                  việc làm trong tương lai.
                </Typography>
              </Grid>
            </Grid>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Grid container>
              <Grid item xs={12} sm={9} md={8}>
                <Typography
                  variant={isDesktopMd ? 'h6' : 'h5'}
                  color={isDesktopSm ? '#00000' : '#ffff'}
                  sx={{ ml: { sm: 6, lg: 8 }, px: 2, py: 2 }}
                >
                  Với nhiều năm kinh nghiệm cùng phương pháp đào tạo hiệu quả, UniPro đào tạo học
                  viên theo từng cấp độ, tạo môi trường học tập phù hợp nhất cho từng người.
                </Typography>
              </Grid>
            </Grid>
          </MotionInView>
        </Container>
      </Box>
    </RootStyle>
  );
}
