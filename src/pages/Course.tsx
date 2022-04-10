// material
import { styled } from '@material-ui/core/styles';
import ScrollToTop from 'components/ScrollToTopBtn';
import EnterpriseContact from 'components/_external-pages/enterprise/EnterpriseContact';
import GreetingBootcamp from 'components/_external-pages/course/GreetingBootcamp';
import BootcampServive from 'components/_external-pages/course/BootcampService';
import TuitionComponent from 'components/_external-pages/course/TuitionComponent';
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

export default function CoursePage() {
  return (
    <RootStyle title="Khóa học | UniPro" id="move_top">
      <GreetingBootcamp />
      <ScrollToTop />
      <ContentStyle>
        <BootcampServive />
        <TuitionComponent />
        <EnterpriseContact />
      </ContentStyle>
    </RootStyle>
  );
}
