import { Box, Typography, useMediaQuery, Container } from '@material-ui/core';
import { useTheme, styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { motion } from 'framer-motion';
//----------------------------------------------------------------------
import { MotionInView, varWrapEnter, varFadeInDown } from '../../animate';

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

export default function GreetingBootcamp() {
  const theme = useTheme();
  const isDesktopSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isDesktopMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Box textAlign="justify" style={{ position: 'relative' }}>
        <BoxImg src="/static/course/course_greeting_bootcamp.jpg" />
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
                  color={isDesktopSm ? '#00000' : '#FF6600'}
                  sx={{ ml: { sm: 6, lg: 8 }, px: 2, py: 2 }}
                >
                  Chương trình tại UniPro
                </Typography>
              </Grid>
            </Grid>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Grid container>
              <Grid item xs={12} sm={9} md={8}>
                <Typography
                  variant={isDesktopMd ? 'h6' : 'h4'}
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
          {/* <MotionInView variants={varFadeInDown}>
            <Grid container>
              <Grid item xs={12} sm={9} md={8}>
                <Typography
                  variant={isDesktopMd ? 'h6' : 'h5'}
                  color={isDesktopSm ? '#00000' : '#ffff'}
                  sx={{ ml: { sm: 6, lg: 8 }, px: 2, py: 2 }}
                >
                  Ngay bây giờ, hãy hiện thực hóa thành web developer trong vòng chưa đầy 6 tháng.
                </Typography>
              </Grid>
            </Grid>
          </MotionInView> */}
        </Container>
      </Box>
    </RootStyle>
  );
}
