import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import PoolIcon from '@material-ui/icons/Pool';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { useTheme, styled } from '@material-ui/core/styles';
import { Typography, Container, Box, useMediaQuery } from '@material-ui/core';
import {
  varFadeInUp,
  MotionInView,
  varFadeInDown,
  varFadeInRight,
  varFadeInLeft
} from '../../animate';

const METHODS = [
  {
    title: 'Project-Based Learning',
    icon: <LibraryBooksIcon color="secondary" />,
    time: <DoneOutlineIcon color="success" />,
    description: 'Học tập dựa trên dự án'
  },
  {
    title: 'Practice-Oriented Class',
    icon: <LaptopMacIcon color="secondary" />,
    time: <DoneOutlineIcon color="success" />,
    description: 'Lớp học định hướng thực hành'
  },
  {
    title: 'Peer Learning Method',
    icon: <PeopleAltIcon color="secondary" />,
    time: <DoneOutlineIcon color="success" />,
    description: 'Phương pháp học theo cặp'
  },
  {
    title: 'Product Development',
    icon: <TrendingUpIcon color="secondary" />,
    time: <DoneOutlineIcon color="success" />,
    description: 'Phát triển sản phẩm'
  },
  {
    title: 'Pro-Active Working Environment',
    icon: <PoolIcon color="secondary" />,
    time: <DoneOutlineIcon color="success" />,
    description: 'Môi trường làm việc chủ động'
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(10),
  background: theme.palette.background.default,
  paddingBottom: theme.spacing(6)
}));

export default function HomeFiveMethods() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery('(min-width: 350px)', { noSsr: true });
  console.log(`međia + ${isDesktop}`);

  return (
    <RootStyle>
      <Container maxWidth="md">
        <Box sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Phương pháp 5P
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <Typography
              sx={{
                color: isLight ? 'text.secondary' : 'text.primary'
              }}
              variant="h6"
            >
              Khái niệm 5P được xuất hiện dựa trên lý thuyết và thực tiễn hiện tại, giúp bạn học
              được tiếp cận sớm những dự án thực tế, cùng nhau học hỏi kiến thức, cùng nhau tiến bộ
              trong môi trường thân thiện và đầy năng động.
            </Typography>
          </MotionInView>
        </Box>
      </Container>
      <Box sx={{ ...(!isDesktop && { overflowX: 'auto' }) }}>
        <Timeline position="alternate" style={{ width: isDesktop ? '100vw' : '150vw' }}>
          {METHODS.map((method, index) => (
            <TimelineItem key={`method-${index}`}>
              <TimelineOppositeContent
                // sx={{ py: '12px', px: 2 }}
                align="right"
                variant="body2"
                color="text.secondary"
                style={{ flex: isDesktop ? 1 : 4 }}
              >
                {method.time}
              </TimelineOppositeContent>
              <TimelineSeparator style={{ flex: 0 }}>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="primary" variant="outlined">
                  {method.icon}
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }} style={{ flex: isDesktop ? 1 : 4 }}>
                <MotionInView variants={index % 2 ? varFadeInRight : varFadeInLeft}>
                  <Typography variant="h5" component="span">
                    {method.title}
                  </Typography>
                  <Typography
                    sx={{ color: isLight ? 'text.secondary' : 'common.white' }}
                    variant="h6"
                  >
                    {method.description}
                  </Typography>
                </MotionInView>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </RootStyle>
  );
}
