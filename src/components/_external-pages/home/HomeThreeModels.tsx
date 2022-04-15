// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Button } from '@material-ui/core';
import { motion } from 'framer-motion';
//--------------------------------------------------------------------------------------
import { CARDS } from '../../../utils/mock-data/home';
import { varFadeInUp, MotionInView, varFadeInDown, varWrapEnter } from '../../animate';
import { TitleCardTrapezoidLeft } from '../../TitleCard';
// -------------------------------------------------------------------------------------

const shadowIcon = (color: string) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled(motion.div)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  background: theme.palette.background.neutral,
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
    minHeight: 400,
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      minHeight: 'auto'
    },
    textAlign: 'center',
    padding: theme.spacing(4, 2, 4),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none'
      // backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    '&.cardLeft': {},
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: `0px 40px 80px 0 ${shadowCard(0.4)}`
      }
    }
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  width: 54,
  height: 54,
  margin: 'auto',
  marginBottom: theme.spacing(3),
  filter: shadowIcon(theme.palette.primary.main)
}));

// ----------------------------------------------------------------------

export default function HomeThreeModels() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <TitleCardTrapezoidLeft>
        <MotionInView variants={varFadeInDown}>
          <Typography
            variant={isDesktop ? 'h4' : 'h5'}
            style={{ color: 'white', paddingTop: '8px' }}
          >
            MÔ HÌNH 3M
          </Typography>
        </MotionInView>
      </TitleCardTrapezoidLeft>
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
              Đến với UniPro, người hướng dẫn(mentor) của chúng tôi sẽ hướng dẫn bạn(mentee) trong
              suốt quá trình học tập, lên ý tưởng và phát triển dự án. Bên cạnh đó, chúng tôi còn có
              đội ngũ chuyên gia(master) có nhiều năm kinh nghiệm giảng dạy và làm việc tại FPT sẽ
              bổ sung kiến thức chuyên sâu, định hướng con đường ngắn nhất và hiệu quả để bạn đạt
              được thành công.
            </Typography>
          </MotionInView>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={isDesktop ? 6 : 4}>
          {CARDS.map((card, index) => (
            <Grid key={`card-hero-${index}`} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>
                <CardStyle
                  className={(index === 0 && 'cardLeft') || (index === 1 && 'cardCenter') || ''}
                  onMouseOver={(event) =>
                    !isDesktopSmDown &&
                    (event.currentTarget.style.borderBottom = '5px solid rgba(241, 90, 34, 1)')
                  }
                  onMouseLeave={(event) =>
                    !isDesktopSmDown && (event.currentTarget.style.borderBottom = 'none')
                  }
                >
                  <CardIconStyle
                    src={card.icon}
                    sx={{
                      ...(index === 0 && {
                        filter: (theme) => shadowIcon(theme.palette.warning.main)
                      }),
                      ...(index === 1 && {
                        filter: (theme) => shadowIcon(theme.palette.error.main)
                      }),
                      ...(index === 2 && {
                        filter: (theme) => shadowIcon(theme.palette.info.main)
                      })
                    }}
                  />
                  <Typography variant="h4" paragraph>
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: isLight ? 'text.secondary' : 'text.primary',
                      textAlign: 'justify'
                    }}
                    variant="h6"
                  >
                    {card.description}
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
