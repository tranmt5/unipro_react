// material
import { styled } from '@material-ui/core/styles';
import ScrollToTop from 'components/ScrollToTopBtn';
import LandingDomain from 'components/_external-pages/landing/LandingDomain';
// components
import Page from '../components/Page';
import {
  LandingAdvertisement,
  LandingHero,
  LandingMinimal,
  LandingPartner,
  LandingWhitePlatform
} from '../components/_external-pages/landing';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  height: '100%'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.neutral,
  padding: theme.spacing(4, 0, 8)
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle
      title="Nền tảng Đặt hàng trực tuyến và giao nhận tích hợp chuyên sâu cho ngành Bán lẻ và F&B. | Reso"
      id="move_top"
    >
      <LandingHero />
      <ScrollToTop />
      <ContentStyle>
        <LandingMinimal />
        <LandingPartner />
        <LandingWhitePlatform />
        <LandingDomain />
        <LandingAdvertisement />
      </ContentStyle>
    </RootStyle>
  );
}
