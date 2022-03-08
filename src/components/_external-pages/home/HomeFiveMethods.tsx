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
import PoolIcon from '@material-ui/icons/Pool';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Typography, Container, Box } from '@material-ui/core';
import {
  varFadeInUp,
  MotionInView,
  varFadeInDown,
  varFadeInRight,
  varFadeInLeft
} from '../../animate';

export default function HomeFiveMethods() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <Timeline position="alternate">
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
            >
              Khái niệm 5P được xuất hiện dựa trên lý thuyết và thực tiễn hiện tại, giúp bạn học
              được tiếp cận sớm những dự án thực tế, cùng nhau học hỏi kiến thức, cùng nhau tiến bộ
              trong môi trường thân thiện và đầy năng động.
            </Typography>
          </MotionInView>
        </Box>
      </Container>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <LibraryBooksIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <MotionInView variants={varFadeInRight}>
            <Typography variant="h6" component="span">
              Project-Based Learning
            </Typography>
            <Typography>Học tập dựa trên dự án</Typography>
          </MotionInView>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <MotionInView variants={varFadeInLeft}>
            <Typography variant="h6" component="span">
              Practice-Oriented Class
            </Typography>
            <Typography>Lớp học định hướng thực hành</Typography>
          </MotionInView>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <PeopleAltIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <MotionInView variants={varFadeInRight}>
            <Typography variant="h6" component="span">
              Peer Learning Method
            </Typography>
            <Typography>Phương pháp học theo cặp</Typography>
          </MotionInView>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <TrendingUpIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <MotionInView variants={varFadeInLeft}>
            <Typography variant="h6" component="span">
              Product Development
            </Typography>
            <Typography>Phát triển sản phẩm</Typography>
          </MotionInView>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <PoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <MotionInView variants={varFadeInRight}>
            <Typography variant="h6" component="span">
              Pro-Active Working Environment
            </Typography>
            <Typography>Môi trường làm việc chủ động</Typography>
          </MotionInView>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
