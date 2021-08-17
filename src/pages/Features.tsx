// material
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  LinkProps,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography
} from '@material-ui/core';
import { alpha, styled, Theme, useTheme } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { makeStyles } from '@material-ui/styles';
import { MHidden } from 'components/@material-extend';
// components
import ScrollToTop from 'components/ScrollToTopBtn';
import FeatureHero from 'components/_external-pages/feature/FeatureHero';
import { LandingAdvertisement } from 'components/_external-pages/landing';
import { ReactNode, useState } from 'react';
import InView from 'react-intersection-observer';
import { NavHashLink } from 'react-router-hash-link';
import Page from '../components/Page';

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  // overflow: 'hidden',
  // position: 'relative',
  backgroundColor: theme.palette.background.neutral,
  padding: theme.spacing(4, 0, 8)
}));

interface ListItemStyleProps extends LinkProps {
  component?: ReactNode;
  to?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  selected: {
    backgroundColor: alpha(theme.palette.primary.main, 0.5),
    color: theme.palette.primary.main
  }
}));

const ListItemStyle = styled(ListItem)<ListItemStyleProps>(({ theme }) => ({
  ...theme.typography.h6,
  cursor: 'pointer',
  padding: 0,
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.text.primary
  },
  '& .MuiListItemButton-root .Mui-selected': {
    backgroundColor: alpha(theme.palette.primary.main, 0.5)
  }
}));

const StickyNavigation = styled(Card)({
  position: 'sticky',
  top: '80px',
  left: 0,
  right: 0
});

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const { icon, title, description } = feature;

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
          }}
        />
        <Typography variant="h4">{title}</Typography>
        <Typography color="text.secondary">{description}</Typography>
      </Stack>
    </Card>
  );
};

const navigations = [
  {
    title: 'Marketplace',
    to: 'marketplace',
    items: [
      {
        icon: '',
        titlte: '',
        description: ''
      }
    ]
  },
  {
    title: 'Ordering Features',
    to: 'ordering'
  },
  {
    title: 'Fulfillment and Delivery',
    to: 'fulfill'
  },
  {
    title: 'Store management',
    to: 'store'
  },
  {
    title: 'Payments',
    to: 'payment'
  }
];

const scrollWithOffset = (el: HTMLElement) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

const FeaturesPage = () => {
  const theme = useTheme();
  const [currentInviewIdx, setCurrentInviewIdx] = useState(0);
  const classes = useStyles();

  return (
    <RootStyle title="Tất cả tính năng | Sale reso" id="move_top">
      <FeatureHero />
      <ScrollToTop />

      <ContentStyle>
        <Container maxWidth="lg" sx={{ paddingY: 8 }}>
          <Stack direction="row" spacing={4}>
            <MHidden width="mdDown">
              <Box width="25%">
                <StickyNavigation>
                  <List component="nav" aria-label="secondary mailbox folder">
                    {navigations.map((nav, idx) => (
                      <NavHashLink
                        scroll={(el) => scrollWithOffset(el)}
                        key={nav.title}
                        style={{ textDecoration: 'none' }}
                        smooth
                        to={`/features#${nav.to}`}
                      >
                        <ListItemStyle>
                          <ListItemButton
                            classes={{ selected: classes.selected }}
                            selected={currentInviewIdx === idx}
                          >
                            {nav.title}
                          </ListItemButton>
                        </ListItemStyle>
                      </NavHashLink>
                    ))}
                  </List>
                </StickyNavigation>
              </Box>
            </MHidden>
            <Box flex={1}>
              <List sx={{ position: 'relative' }}>
                <Stack spacing={4}>
                  {navigations.map((nav, index) => (
                    <InView
                      threshold={0.5}
                      onChange={(inview) => {
                        if (inview) {
                          setCurrentInviewIdx(index);
                        }
                      }}
                      key={`features-${nav.title}`}
                    >
                      <Box id={nav.to}>
                        <Typography variant="h3" sx={{ mb: 4 }}>
                          {nav.title}
                        </Typography>

                        <Grid container spacing={2} sx={{ paddingLeft: [0, 0, 2] }}>
                          {[...new Array(4)].map((_, index) => (
                            <Grid key={`features-item-${nav.title}-${index}`} item xs={12} md={6}>
                              <FeatureCard
                                feature={{
                                  icon: '/static/icons/ic_multilang.svg',
                                  title: 'Multi-Lingual',
                                  description:
                                    'Communicate in the language of your target audience.'
                                }}
                              />
                            </Grid>
                          ))}
                        </Grid>

                        <Box py={4} textAlign="right">
                          <Button variant="text" endIcon={<ArrowRightAltIcon />}>
                            Xem thêm
                          </Button>
                        </Box>
                      </Box>
                    </InView>
                  ))}
                </Stack>
              </List>
            </Box>
          </Stack>
        </Container>
        <LandingAdvertisement />
      </ContentStyle>
    </RootStyle>
  );
};

export default FeaturesPage;
