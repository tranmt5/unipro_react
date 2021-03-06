import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { useTheme, styled } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { Typography, Container, Box, useMediaQuery } from '@material-ui/core';
//---------------------------------------------------------------------------------
import { METHODS } from '../../../utils/mock-data/home';
import {
  varFadeInUp,
  MotionInView,
  varFadeInDown,
  varFadeInRight,
  varFadeInLeft,
  varWrapEnter
} from '../../animate';
import { TitleCardTrapezoidRight } from '../../TitleCard';
//----------------------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  background: theme.palette.background.default,
  paddingBottom: theme.spacing(16),
  position: 'relative',
  borderTop: '2px solid rgb(255, 165, 0)'
}));

export default function HomeFiveMethods() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery('(min-width: 350px)', { noSsr: true });
  const isDesktopMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <TitleCardTrapezoidRight>
        <MotionInView variants={varFadeInDown}>
          <Typography
            variant={isDesktopMdUp ? 'h4' : 'h5'}
            style={{ color: 'white', paddingTop: '8px' }}
          >
            PHƯƠNG PHÁP 5P
          </Typography>
        </MotionInView>
      </TitleCardTrapezoidRight>
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
                    sx={{ color: isLight ? 'text.secondary' : 'text.primary' }}
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
