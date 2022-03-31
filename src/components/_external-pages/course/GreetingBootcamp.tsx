import { Box, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme, styled } from '@material-ui/core/styles';
import { useScroll } from 'ahooks';
import Grid from '@material-ui/core/Grid';
// material
import { useEffect, useState } from 'react';
//
import {
  MotionInView,
  varFadeInDownDesktopSmDown,
  varFadeInDownDesktopSmDownSlowly,
  varFadeInDownDesktopMdDown,
  varFadeInDownDesktopMdDownSlowly,
  varFadeInDownDesktopMdUp,
  varFadeInDownDesktopMdUpSlowly
} from '../../animate';

// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(9),
  paddingBottom: theme.spacing(6),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.down('sm')]: {
    paddingBottom: theme.spacing(10)
  },
  [theme.breakpoints.up('sm')]: {
    backgroundColor: theme.palette.background.default
  }
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

const FADE_IN_DOWN = [
  {
    fadeTitle: varFadeInDownDesktopSmDown,
    fadeCaption: varFadeInDownDesktopSmDownSlowly
  },
  {
    fadeTitle: varFadeInDownDesktopMdDown,
    fadeCaption: varFadeInDownDesktopMdDownSlowly
  },
  {
    fadeTitle: varFadeInDownDesktopMdUp,
    fadeCaption: varFadeInDownDesktopMdUpSlowly
  }
];

export default function GreetingBootcamp() {
  const theme = useTheme();
  const isDesktopSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isDesktopMd = useMediaQuery(theme.breakpoints.down('md'));
  const [fadeInDown, setFadeInDown] = useState(FADE_IN_DOWN[0]);

  const { top } = useScroll();

  useEffect(() => {
    if (isDesktopSm) {
      setFadeInDown(FADE_IN_DOWN[0]);
    } else if (isDesktopMd) {
      setFadeInDown(FADE_IN_DOWN[1]);
    } else {
      setFadeInDown(FADE_IN_DOWN[2]);
    }
  }, [isDesktopSm, isDesktopMd]);

  return (
    <RootStyle>
      <Box textAlign={['justify', 'left']}>
        <BoxImg src="/static/course/course_greeting_bootcamp.jpg" />
        <div style={{ height: isDesktopSm ? 'auto' : '0px' }}>
          <MotionInView variants={fadeInDown.fadeTitle}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Typography
                  variant={isDesktopSm ? 'h6' : 'h5'}
                  color={isDesktopSm ? '#00000' : '#ffff'}
                  sx={{ ml: { sm: 10, md: 10, lg: 10 }, pl: { md: 4, lg: 3 }, mx: { xs: 4 } }}
                >
                  Lợi thế chương trình tại UniPro
                </Typography>
              </Grid>
            </Grid>
          </MotionInView>
          <MotionInView variants={fadeInDown.fadeTitle} sx={{ py: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Typography
                  variant={isDesktopSm ? 'h3' : 'h3'}
                  color={isDesktopSm ? '#00000' : '#ffff'}
                  sx={{ ml: { sm: 10, md: 10, lg: 10 }, pl: { md: 4, lg: 3 }, mx: { xs: 4 } }}
                >
                  Tham gia khóa học với những bước đi vững chắc trên nền tảng cốt lõi của công nghệ
                  mới nhất.
                </Typography>
              </Grid>
            </Grid>
          </MotionInView>
          <MotionInView variants={fadeInDown.fadeCaption}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Typography
                  variant={isDesktopSm ? 'h6' : 'h5'}
                  color={isDesktopSm ? '#00000' : '#ffff'}
                  sx={{ ml: { sm: 10, md: 10, lg: 10 }, pl: { md: 4, lg: 3 }, mx: { xs: 4 } }}
                >
                  Ngay bây giờ, hãy hiện thực hóa thành web developer trong vòng chưa đầy 6 tháng.
                </Typography>
              </Grid>
            </Grid>
          </MotionInView>
        </div>
      </Box>
    </RootStyle>
  );
}
