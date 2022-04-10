// material
import { useTheme, styled } from '@material-ui/core/styles';
import {
  Box,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
  useMediaQuery,
  Accordion,
  Stack
} from '@material-ui/core';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutline from '@material-ui/icons/HelpOutline';
//----------------------------------------------------------------------
import { DETAILS } from '../../../utils/mock-data/introduction';
import { varFadeInUp, MotionInView, varFadeInDown, varWrapEnter } from '../../animate';
import TitleCard from '../../TitleCard';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  background: theme.palette.background.neutral,
  paddingBottom: theme.spacing(16),
  position: 'relative',
  borderTop: '2px solid rgb(255, 165, 0)'
}));

// ----------------------------------------------------------------------

export default function AdvisoryComponent() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const [expanded, setExpanded] = useState<number | false>(false);
  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <TitleCard>
        <MotionInView variants={varFadeInDown}>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Stack sx={{ flex: 0 }}>
              <motion.div
                animate={{ rotateY: [0, 90] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              >
                <HelpOutline color="secondary" style={{ fontSize: isDesktop ? '40px' : '30px' }} />
              </motion.div>
            </Stack>
            &nbsp;
            <Typography variant={isDesktop ? 'h4' : 'h5'} style={{ color: 'white' }}>
              CÂU HỎI THƯỜNG GẶP
            </Typography>
          </Stack>
        </MotionInView>
      </TitleCard>
      <Container maxWidth="md">
        <Box sx={{ mb: { xs: 4, md: 5 }, textAlign: 'center' }}>
          <MotionInView variants={varFadeInDown}>
            <Typography
              sx={{
                color: isLight ? 'text.secondary' : 'text.primary',
                textAlign: 'justify',
                px: 2
              }}
              variant="h6"
            >
              “ Muốn biết thì hỏi, muốn giỏi phải học” quá trình học chắc chắn sẽ có những vấn đề mà
              các bạn không hiểu, hoặc chưa hiểu rõ.
            </Typography>
          </MotionInView>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <MotionInView variants={varFadeInUp}>
          {DETAILS.map((detail, index) => (
            <Accordion
              key={`panel${index}`}
              expanded={expanded === index}
              onChange={handleChange(index)}
              onMouseOver={(event) => (
                (event.currentTarget.style.padding = '0px 5px'),
                (event.currentTarget.style.boxShadow = '-5px 0px rgb(77, 146, 187)')
              )}
              onMouseLeave={(event) => (
                (event.currentTarget.style.padding = '0px'),
                (event.currentTarget.style.boxShadow = 'none')
              )}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
              >
                <Typography
                  sx={{ width: '100%', flexShrink: 0, color: 'rgb(222, 62, 111)' }}
                  variant="h6"
                >
                  {detail.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="h6"
                  sx={{
                    px: { xs: 2, md: 12 },
                    textAlign: 'justify',
                    color: isLight ? 'text.secondary' : 'text.primary'
                  }}
                >
                  {detail.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
