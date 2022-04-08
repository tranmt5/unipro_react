import {
  alpha,
  Container,
  Stack,
  Typography,
  Card,
  useMediaQuery,
  Box,
  Grid
} from '@material-ui/core';
import { styled, useTheme } from '@material-ui/core/styles';
import Rating from '@material-ui/core/Rating';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AppRegistrationIcon from '@material-ui/icons/AppRegistration';
import UpcomingIcon from '@material-ui/icons/Upcoming';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DesignServicesIcon from '@material-ui/icons/DesignServices';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { MotionInView, varWrapEnter, varFadeInUp } from '../../animate';
import TitleCard from '../../TitleCard';

// ----------------------------------------------------------------------
const COREVALUEDETAILS = [
  {
    title: 'Courage',
    icon: <UpcomingIcon fontSize="large" />,
    description:
      'Mọi sự cố gắng sẽ được đền đáp một cách xứng đáng, để có được kết quả tốt nhất, UniPro luôn luôn cố gắng để giúp học viên tiếp cận được bài học một cách vui vẻ, thoải mái và hiệu quả nhất.',
    image: '/static/home/home_feedback_mentee_1.jpg'
  },
  {
    title: 'Cooperation',
    icon: <AccountTreeIcon fontSize="large" />,
    description:
      'UniPro đề cao sự hợp tác vui vẻ, tạo cho học viên một môi trường học tập và phát triển thuận lợi nhất.',
    image: '/static/home/home_feedback_mentee_2.jpg'
  },
  {
    title: 'Continuous',
    icon: <AppRegistrationIcon fontSize="large" />,
    description:
      'UniPro luôn sẵn sàng lắng nghe và hỗ trợ học viên trong vấn đề học tập mọi khi cần.',
    image: '/static/home/home_feedback_mentee_3.jpg'
  },
  {
    title: 'Creative',
    icon: <DesignServicesIcon fontSize="large" />,
    description:
      'IT là một lĩnh vực cần sự sáng tạo, UniPro với đội ngũ trẻ, nhiệt tình với công việc và sự sáng tạo luôn tràn trề, giúp học viên nắm vững kiến thức mà không hề nhàm chán trong quá trình học.',
    image: '/static/home/home_feedback_mentee_3.jpg'
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
    height: '25vh',
    marginTop: 0,
    objectFit: 'cover',
    width: 'auto',
    boxShadow: `0px 40px 80px 0 ${shadowCard(0.4)}`,
    [theme.breakpoints.up('lg')]: {
      height: '25vh',
      width: 'auto',
      backgroundColor: theme.palette.background.paper
    }
  };
});

const shadowIcon = (color: string) => `drop-shadow(2px 2px 2px ${alpha(color, 0.8)})`;

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ffc107'
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47'
  }
});

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity: number) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 450,
    minHeight: 500,
    [theme.breakpoints.down('md')]: {
      minHeight: 'auto'
    },
    position: 'relative',
    margin: 'auto',
    overflow: 'visible',
    textAlign: 'center',
    padding: theme.spacing(6, 2, 4),
    boxShadow: `0px 0px 10px 5px ${shadowCard(0.48)}`,
    '&.cardItem': {
      [theme.breakpoints.up('md')]: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: `0px 0px 8px 4px ${shadowCard(0.4)}`
      }
    }
  };
});

const CircleStyle = styled('div')(({ theme }) => ({
  width: 60,
  height: 60,
  position: 'absolute',
  top: '0%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'rgba(241, 90, 34, 1)',
  borderRadius: '50%',
  marginBottom: theme.spacing(1),
  filter: shadowIcon(theme.palette.primary.main)
}));

export default function CoreValues() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isLight = theme.palette.mode === 'light';

  // set star animation
  const [star, setStar] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (star < 5) {
        setStar(star + 1);
      } else {
        setStar(0);
      }
    }, 300);
    return () => clearInterval(interval);
  });

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <TitleCard>
        <MotionInView>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Stack sx={{ flex: 0 }}>
              <motion.div
                animate={{ rotateX: [-45, 45] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              >
                <VpnKeyIcon color="secondary" style={{ fontSize: isDesktop ? '40px' : '30px' }} />
              </motion.div>
            </Stack>
            &nbsp;
            <Typography variant={isDesktop ? 'h4' : 'h5'} style={{ color: 'white' }}>
              GIÁ TRỊ CỐT LÕI
            </Typography>
          </Stack>
        </MotionInView>
      </TitleCard>
      <Container maxWidth="md">
        <Box sx={{ mb: { xs: 4, md: 5 }, textAlign: 'center' }}>
          <MotionInView variants={varFadeInUp}>
            <Typography
              sx={{
                color: isLight ? 'text.secondary' : 'text.primary',
                textAlign: 'center',
                px: 2
              }}
              variant="h6"
            >
              Những nguyên tắc nòng cốt, trọng yếu của UniPro.
            </Typography>
          </MotionInView>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={isDesktop ? 6 : 4}>
          {COREVALUEDETAILS.map((detail, index) => (
            <Grid key={`detail-${index}`} item xs={12} md={6}>
              <MotionInView variants={varFadeInUp} style={{ padding: '24px 0' }}>
                <CardStyle
                  className="cardItem"
                  onMouseOver={(event) =>
                    !isDesktopSmDown &&
                    (event.currentTarget.style.borderTop = '5px solid rgba(241, 90, 34, 1)')
                  }
                  onMouseLeave={(event) =>
                    !isDesktopSmDown && (event.currentTarget.style.borderTop = 'none')
                  }
                >
                  <CircleStyle
                    sx={{
                      ...(index === 0 && {
                        filter: (theme) => shadowIcon(theme.palette.warning.main)
                      }),
                      ...(index === 1 && {
                        filter: (theme) => shadowIcon(theme.palette.secondary.main)
                      }),
                      ...(index === 2 && {
                        filter: (theme) => shadowIcon(theme.palette.info.main)
                      }),
                      ...(index === 3 && {
                        filter: (theme) => shadowIcon(theme.palette.success.main)
                      })
                    }}
                  >
                    <div style={{ color: 'white', paddingTop: '14px' }}>{detail.icon}</div>
                  </CircleStyle>
                  <Stack direction="column" spacing={1} alignItems="center" sx={{ flex: 1 }}>
                    <Typography variant="h5" paragraph>
                      {detail.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: isLight ? 'text.secondary' : 'text.primary',
                        textAlign: 'justify'
                      }}
                      variant="h6"
                    >
                      <AssignmentIcon color="info" />
                      &nbsp;
                      {detail.description}
                    </Typography>
                    <StyledRating
                      style={{ padding: '16px 0 24px' }}
                      name="customized-color"
                      value={star}
                      max={5}
                    />
                    <Box sx={{ px: 2, margin: '0 auto' }}>
                      <HeroImgStyle alt="image" src={detail.image} />
                    </Box>
                  </Stack>
                </CardStyle>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
