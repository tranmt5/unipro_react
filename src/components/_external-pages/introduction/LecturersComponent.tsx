// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Stack } from '@material-ui/core';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import GroupIcon from '@material-ui/icons/Group';
import { motion } from 'framer-motion';
//----------------------------------------------------------------------
import { LECTURERS } from '../../../utils/mock-data/introduction';
import { varFadeInUp, MotionInView, varFadeInDown, varWrapEnter } from '../../animate';
import TitleCard from '../../TitleCard';
// ----------------------------------------------------------------------

const shadowIcon = (color: string) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled(motion.div)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  background: theme.palette.background.default,
  paddingBottom: theme.spacing(16),
  position: 'relative',
  borderTop: '2px solid rgb(255, 165, 0)'
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity: number) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 380,
    minHeight: 350,
    [theme.breakpoints.down('md')]: {
      minHeight: 'auto'
    },
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(4, 2, 4),
    boxShadow: `0px 0px 10px 5px ${shadowCard(0.48)}`,
    '&.cardItem': {
      [theme.breakpoints.up('md')]: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: `0px 0px 8px 4px ${shadowCard(0.4)}`
      }
    }
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  margin: 'auto',
  objectFit: 'cover',
  marginBottom: theme.spacing(5),
  filter: shadowIcon(theme.palette.primary.main)
}));

// ----------------------------------------------------------------------

export default function LecturersComponent() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <TitleCard>
        <MotionInView variants={varFadeInDown}>
          <Stack direction="row" justifyContent="center">
            <Stack sx={{ flex: 0 }}>
              <motion.div
                animate={{ rotateY: [0, 180] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              >
                <GroupIcon color="secondary" style={{ fontSize: isDesktop ? '40px' : '30px' }} />
              </motion.div>
            </Stack>
            &nbsp;
            <Typography variant={isDesktop ? 'h4' : 'h5'} style={{ color: 'white' }}>
              ?????I NG?? UNIPRO
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
                textAlign: 'justify',
                px: 2
              }}
              variant="h6"
            >
              V???i nhi???u n??m kinh nghi???m ?????ng l???p, ?????i ng?? gi???ng vi??n c???a ch??ng t??i s??? truy???n t???i
              ki???n th???c m???t c??ch t???t nh???t, hi???u qu??? nh???t, ????a h???c vi??n ?????n v???i tri th???c c??ng ngh???
              m???t c??ch d??? d??ng nh???t m?? kh??ng kh?? khan, bu???n ch??n.
            </Typography>
          </MotionInView>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={isDesktop ? 6 : 4}>
          {LECTURERS.map((lecturer, index) => (
            <Grid key={`card-hero-${index}`} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>
                <CardStyle
                  className="cardItem"
                  onMouseOver={(event) =>
                    !isDesktopSmDown &&
                    (event.currentTarget.style.borderTop = '5px solid rgb(77, 146, 187)')
                  }
                  onMouseLeave={(event) =>
                    !isDesktopSmDown && (event.currentTarget.style.borderTop = 'none')
                  }
                >
                  <CardIconStyle
                    src={lecturer.icon}
                    sx={{
                      ...(index % 3 === 0 && {
                        filter: (theme) => shadowIcon(theme.palette.warning.main)
                      }),
                      ...(index % 3 === 1 && {
                        filter: (theme) => shadowIcon(theme.palette.error.main)
                      }),
                      ...(index % 3 === 2 && {
                        filter: (theme) => shadowIcon(theme.palette.info.main)
                      })
                    }}
                  />
                  <Typography variant="h5" paragraph>
                    {lecturer.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: isLight ? 'text.secondary' : 'text.primary',
                      textAlign: 'justify'
                    }}
                    variant="h6"
                  >
                    <LibraryBooksIcon color="info" />
                    &nbsp;
                    {lecturer.description}
                  </Typography>
                </CardStyle>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
