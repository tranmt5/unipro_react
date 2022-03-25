import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import { useScroll } from 'ahooks';
// material
import { MHidden } from 'components/@material-extend';
import { motion } from 'framer-motion';
//
import { varFadeInRight, varFadeInUp, varWrapEnter } from '../../animate';
import { ContentStyle, HeroImgStyle, RootStyle } from './Startup.styles';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function GreetingBootcamp() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const { top } = useScroll();

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Box
          component="img"
          src="/static/course/course_greeting_bootcamp.jpg"
          sx={{
            position: 'absolute',
            top: 74,
            left: 0,
            width: '100%',
            height: ['65vh', '100vh'],
            objectFit: 'cover',
            transition: 'all 300ms ease'
          }}
        />

        {/* <MHidden width="mdDown">
          <HeroImgStyle
            style={{ top: -(top * 0.05) }}
            alt="bootcampImage"
            src="/static/starup/wave.svg"
            variants={varFadeInUp}
          />
        </MHidden> */}

        <Container maxWidth="lg">
          <ContentStyle
            sx={{
              top: -(top * 0.05)
            }}
          >
            <motion.div variants={varFadeInRight}>
              <Typography variant="subtitle1" sx={{ pb: 4, color: 'common.white' }}>
                Lợi thế chương trình tại UniPro
              </Typography>
              <Typography
                component="h1"
                variant={isDesktop ? 'h3' : 'h4'}
                sx={{ pb: 2, color: 'common.white' }}
              >
                Tham gia khóa học với những bước đi vững chắc trên nền tảng cốt lõi của công nghệ
                mới nhất.
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography sx={{ pb: 4, color: 'common.white' }} variant="h6">
                Ngay bây giờ, hãy hiện thực hóa thành web developer trong vòng chưa đầy 6 tháng.
              </Typography>
            </motion.div>

            {/* <Stack
              direction={['column', 'row']}
              spacing={[1.5, 1.5]}
              rowGap={[1.5, 1.5]}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <motion.div variants={varFadeInRight}>
                <TextField
                  sx={{ pr: [0, 2], minWidth: 300 }}
                  fullWidth
                  variant="outlined"
                  size="medium"
                  placeholder="Email của bạn"
                />
              </motion.div>
              <motion.div variants={varFadeInRight}>
                <Button
                  size="large"
                  variant="contained"
                  disableElevation
                  sx={{ width: '100%', height: ['48px', '100%'] }}
                >
                  Liên hệ
                </Button>
              </motion.div>
            </Stack> */}
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
