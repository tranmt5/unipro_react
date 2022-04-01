// material
import { styled } from '@material-ui/core/styles';
import ScrollToTop from 'components/ScrollToTopBtn';
import EnterpriseContact from 'components/_external-pages/enterprise/EnterpriseContact';
import RegisterForm from 'components/_external-pages/contact/RegisterForm';
import GoogleMapComponent from 'components/_external-pages/contact/GoogleMapComponent';
import ContactIntroduction from 'components/_external-pages/contact/ContactIntroduction';

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

export default function ContactPage() {
  return (
    <RootStyle title="Liên hệ | UniPro" id="move_top">
      <ContactIntroduction />
      <ScrollToTop />
      <ContentStyle>
        <GoogleMapComponent />
        <RegisterForm />
        <EnterpriseContact />
      </ContentStyle>
    </RootStyle>
  );
}
