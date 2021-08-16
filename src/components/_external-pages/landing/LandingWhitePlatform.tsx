// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Stack } from '@material-ui/core';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { MHidden } from 'components/@material-extend';
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

// ----------------------------------------------------------------------

type Feature = {
  icon: string;
  title: string;
  description: string;
  caption: string;
};

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const { icon, title, description, caption } = feature;

  return (
    <Card
      sx={{
        zIndex: 1,
        p: 5,
        boxShadow: (theme) =>
          `0px 48px 80px ${alpha(
            isLight ? theme.palette.grey[500] : theme.palette.common.black,
            0.12
          )}`
      }}
    >
      <Stack spacing={5}>
        <Box
          component="img"
          src={icon}
          sx={{
            width: 64,
            height: 64
            // bgcolor: 'info.main',
            // p: 1,
            // borderRadius: 64,
            // color: 'white'
          }}
        />
        <Typography variant="h4">{title}</Typography>

        <Stack spacing={2.5}>
          <Typography variant="h6" color="text.secondary">
            {description}
          </Typography>
          <Typography color="text.secondary">{caption}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

const features = [
  {
    icon: '/static/icons/ic_responsive.svg',
    title: 'Custom & Responsive Themes',
    description: 'Forget device responsiveness & focus on branding.',
    caption:
      'Create a unique look and feel for your brand with Yelo’s customized, device responsive themes, or maintain your existing brand guidelines to stand out from your competitors.'
  },
  {
    icon: '/static/icons/ic_multilang.svg',
    title: 'Multi-Lingual',
    description: 'Communicate in the language of your target audience.',
    caption:
      'Develop new markets, reach a global audience, and cater to different regions without having a language barrier on your website. Communicate in over 80 languages with your customers and ensure customer retention.'
  },
  {
    icon: '/static/icons/ic_delivery.gif',
    title: 'Delivery Management',
    description: 'Enhance your delivery services with an end-to-end platform.',
    caption:
      'Manage route planning, automated dispatch, real-time tracking. Also, auto-assign orders to the delivery teams, based on their geolocation and more.'
  },
  {
    icon: '/static/icons/ic_order.svg',
    title: 'Order Management',
    description: 'Get more orders closed with fewer steps.',
    caption:
      'Track all orders from one platform. Improve customer experience by automating your order system, enable real-time tracking of orders, and enable customers to track orders.'
  },
  {
    icon: '/static/icons/ic_customer.png',
    title: 'Customer Support',
    description: 'Ensure real-time conversations with your customers.',
    caption: `Interact with your customers using Yelo's integrated chatbot, solve their problems, and manage their orders seamlessly. Improve customer satisfaction by lowering wait times and operational costs with a right chat platform in place.`
  }
];

export default function LandingWhitePlatform() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 10, md: 25 }, textAlign: 'center' }}>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h3" sx={{ textAlign: 'center', mb: 3 }}>
              Launch A White-Label Platform For Your Business
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <Typography
              sx={{
                color: isLight ? 'text.secondary' : 'text.primary'
              }}
            >
              Give your business a push it lacks. Utilize numerous features provided by Yelo that
              are apt for you to run a full-blown business.
            </Typography>
          </MotionInView>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <MotionInView variants={varFadeInDown}>
              <Stack spacing={4}>
                <FeatureCard feature={features[0]} />
                <FeatureCard feature={features[1]} />
              </Stack>
            </MotionInView>
          </Grid>
          <Grid item xs={12} md={4} position="relative" alignSelf="flex-start">
            <MHidden width="lgDown">
              <MotionInView variants={varFadeInUp}>
                <Box
                  position="absolute"
                  top="-150px"
                  component="img"
                  src="/static/home/HomeFeature.png"
                  sx={{
                    width: 540,
                    zIndex: 0,
                    maxWidth: 'unset',
                    left: '50%',
                    transform: 'translate(-50%,0)'
                  }}
                />
              </MotionInView>
            </MHidden>
            <MotionInView marginTop={isDesktop ? 10 : 0} variants={varFadeInUp}>
              <FeatureCard feature={features[2]} />
            </MotionInView>
          </Grid>
          <Grid item xs={12} md={4}>
            <MotionInView variants={varFadeInDown}>
              <Stack spacing={4}>
                <FeatureCard feature={features[3]} />
                <FeatureCard feature={features[4]} />
              </Stack>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
