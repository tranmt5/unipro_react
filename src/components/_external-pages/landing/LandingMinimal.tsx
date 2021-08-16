// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/static/icons/ic_customer.svg',
    title: (
      <>
        Reso <br /> Direct-to-Consumer
      </>
    ),
    description:
      'Allow your brand to offer your customers a personalised buying experience. Go D2C and add a new distribution channel for your brand.'
  },
  {
    icon: '/static/icons/ic_store.svg',
    title: (
      <>
        Reso <br /> Hyperlocal Marketplace
      </>
    ),
    description:
      'Leverage your business with a hyperlocal marketplace platform and focus on your target audience, ensuring on-time delivery.'
  },
  {
    icon: '/static/icons/ic_headless.svg',
    title: (
      <>
        Reso <br /> Headless Commerce
      </>
    ),
    description:
      'Scale your business with an event-driven platform. Build your own front-end and enhance your business without worrying about the infrastructure.'
  }
];

const shadowIcon = (color: string) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity: number) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 380,
    minHeight: 440,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10, 2, 0),
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
        // '&:before': {
        //   top: 0,
        //   left: 0,
        //   right: 0,
        //   bottom: 0,
        //   zIndex: -1,
        //   content: "''",
        //   margin: 'auto',
        //   position: 'absolute',
        //   width: 'calc(100% - 40px)',
        //   height: 'calc(100% - 40px)',
        //   borderRadius: theme.shape.borderRadiusMd,
        //   backgroundColor: theme.palette.background.paper,
        //   boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        // }
      }
    }
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  width: 40,
  height: 40,
  margin: 'auto',
  marginBottom: theme.spacing(10),
  filter: shadowIcon(theme.palette.primary.main)
}));

// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Container maxWidth="md">
          <Box sx={{ mb: { xs: 10, md: 25 }, textAlign: 'center' }}>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                Direct-to-Consumer Digital Ordering Enhanced by Powerful Technology
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <Typography
                sx={{
                  color: isLight ? 'text.secondary' : 'text.primary'
                }}
              >
                Streamline your digital ordering with a powerful platform that facilitates direct to
                consumer sales.
              </Typography>
            </MotionInView>
          </Box>
        </Container>

        <Grid container spacing={isDesktop ? 10 : 5}>
          {CARDS.map((card, index) => (
            <Grid key={`card-hero-${indexedDB}`} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>
                <CardStyle
                  className={(index === 0 && 'cardLeft') || (index === 1 && 'cardCenter') || ''}
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
                  <Typography variant="h5" paragraph>
                    {card.title}
                  </Typography>
                  <Typography sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>
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
