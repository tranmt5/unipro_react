// material
import { styled } from '@material-ui/core/styles';
import ScrollToTop from 'components/ScrollToTopBtn';
import EnterpriseHIW from 'components/_external-pages/enterprise/EnterpiseHIW';
import EnterpriseContact from 'components/_external-pages/enterprise/EnterpriseContact';
import EnterpriseFeatures from 'components/_external-pages/enterprise/EnterpriseFeatures';
import EnterpriseHero from 'components/_external-pages/enterprise/EnterpriseHero';
import EnterprisePartner from 'components/_external-pages/enterprise/EnterprisePartner';
import EnterpriseScale from 'components/_external-pages/enterprise/EnterpriseScale';
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
  padding: theme.spacing(4, 0, 0)
}));

// ----------------------------------------------------------------------

export default function EnterprisePage() {
  return (
    <RootStyle title="Doanh nghiệp | Reso" id="move_top">
      <EnterpriseHero />
      <ScrollToTop />
      <ContentStyle>
        <EnterprisePartner />
        <EnterpriseFeatures />
        <EnterpriseHIW />
        <EnterpriseScale />
        <EnterpriseContact />
      </ContentStyle>
    </RootStyle>
  );
}
