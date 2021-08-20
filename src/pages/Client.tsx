// material
import { styled } from '@material-ui/core/styles';
import ScrollToTop from 'components/ScrollToTopBtn';
import EnterpriseContact from 'components/_external-pages/enterprise/EnterpriseContact';
import EnterpriseScale from 'components/_external-pages/enterprise/EnterpriseScale';
import ClientHero from 'components/_external-pages/client/ClientHero';
import StartupInspiration from 'components/_external-pages/startup/StartupInspiration';
import StatupOverview from 'components/_external-pages/startup/StartupOverview';
import StartupPartner from 'components/_external-pages/startup/StartupPartner';
import StatupFeatures from 'components/_external-pages/startup/StatupFeatures';

// components
import Page from '../components/Page';

const RootStyle = styled(Page)(({ theme }) => ({
  height: '100%'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflowY: 'visible',
  overflowX: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.neutral,
  padding: theme.spacing(0, 0, 0)
}));

export default function ClientPage() {
  return (
    <RootStyle title="Khách hàng | Reso" id="move_top">
      <ClientHero />
      <ScrollToTop />
      <ContentStyle>
        <StatupOverview />
        <StartupPartner />
        {/* <StatupFeatures /> */}
        <StartupInspiration />
        <EnterpriseContact />
      </ContentStyle>
    </RootStyle>
  );
}
