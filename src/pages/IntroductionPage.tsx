// material
import { styled } from '@material-ui/core/styles';
import ScrollToTop from 'components/ScrollToTopBtn';
import EnterpriseContact from 'components/_external-pages/enterprise/EnterpriseContact';
import GreetingIntroduction from 'components/_external-pages/introduction/GreetingIntroduction';
import CoreValues from 'components/_external-pages/introduction/CoreValues';
import LecturersComponent from 'components/_external-pages/introduction/LecturersComponent';
import AdvisoryComponent from 'components/_external-pages/introduction/AdvisoryComponent';

// components
import Page from '../components/Page';

const RootStyle = styled(Page)(({ theme }) => ({
  height: '100%'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflowY: 'visible',
  overflowX: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(16, 0, 0, 0)
}));

export default function IntroductionPage() {
  return (
    <RootStyle title="Giới thiệu | UniPro" id="move_top">
      <GreetingIntroduction />
      <ScrollToTop />
      <ContentStyle>
        <CoreValues />
        <LecturersComponent />
        <AdvisoryComponent />
        <EnterpriseContact />
      </ContentStyle>
    </RootStyle>
  );
}
