// material
import { styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import {
  LandingHero,
  LandingMinimal,
  LandingDarkMode,
  LandingThemeColor,
  LandingPricingPlans,
  LandingAdvertisement,
  LandingCleanInterfaces,
  LandingHugePackElements,
  LandingPartner,
  LandingWhitePlatform
} from '../components/_external-pages/landing';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.neutral
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="Best Direct-to-Consumer Ordering Platform | Sale reso" id="move_top">
      <LandingHero />
      <ContentStyle>
        <LandingMinimal />
        <LandingPartner />
        <LandingWhitePlatform />
        {/* <LandingHugePackElements />
        <LandingDarkMode />
        <LandingThemeColor />
        <LandingCleanInterfaces />
        <LandingPricingPlans /> */}
        <LandingAdvertisement />
      </ContentStyle>
    </RootStyle>
  );
}
