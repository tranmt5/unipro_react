// material
import { styled } from '@material-ui/core/styles';
import ScrollToTop from 'components/ScrollToTopBtn';
import EnterpriseContact from 'components/_external-pages/enterprise/EnterpriseContact';
import HomeServiceFeature from 'components/_external-pages/home/HomeServiceFeature';
import HomeThreeModels from 'components/_external-pages/home/HomeThreeModels';
import HomeFiveMethods from 'components/_external-pages/home/HomeFiveMethods';
import HomeFeedbackMentee from 'components/_external-pages/home/HomeFeedbackMentee';
import HomePartnerSlider from 'components/_external-pages/home/HomePartnerSlider';
import HomeImageSlider from 'components/_external-pages/home/HomeImageSlider';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  height: '100%'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflowY: 'visible',
  overflowX: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.neutral,
  padding: theme.spacing(16, 0, 0, 0)
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <RootStyle title="Trang chủ | UniPro" id="move_top">
      <HomeImageSlider />
      <ScrollToTop />
      <ContentStyle>
        <HomeServiceFeature />
        <HomeThreeModels />
        <HomeFiveMethods />
        <HomeFeedbackMentee />
        <HomePartnerSlider />
        <EnterpriseContact />
      </ContentStyle>
    </RootStyle>
  );
}
