import { useState } from 'react';
// material
import { styled } from '@material-ui/core/styles';
import LoadingOverlay from 'react-loading-overlay-ts';
import ScrollToTop from 'components/ScrollToTopBtn';
import EnterpriseContact from 'components/_external-pages/enterprise/EnterpriseContact';
import RegisterForm from 'components/_external-pages/contact/RegisterForm';
import GoogleMapComponent from 'components/_external-pages/contact/GoogleMapComponent';
import ContactIntroduction from 'components/_external-pages/contact/ContactIntroduction';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveDoneIcon from '@material-ui/icons/RemoveDone';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';

// components
import Page from '../components/Page';

const RootStyle = styled(Page)(({ theme }) => ({
  height: '100%',
  position: 'relative'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflowY: 'visible',
  overflowX: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(16, 0, 0, 0)
}));

export default function ContactPage() {
  const [isActive, setActive] = useState(false);
  const [message, setMessage] = useState('Đang gửi...');

  function handleIconMessage() {
    let IconAndMessage = <>{message}</>;
    if (message.includes('Thành công! UniPro sẽ liên hệ lại với bạn.')) {
      IconAndMessage = (
        <>
          <CheckCircleIcon color="success" fontSize="large" style={{ marginBottom: '10px' }} />
          &nbsp;
          {message}
        </>
      );
    } else if (message.includes('Xin lỗi! Đã có lỗi xảy ra.')) {
      IconAndMessage = (
        <>
          <AssignmentLateIcon color="error" fontSize="large" style={{ marginBottom: '10px' }} />
          &nbsp;
          {message}
        </>
      );
    }
    return IconAndMessage;
  }

  return (
    <RootStyle title="Liên hệ | UniPro" id="move_top">
      <LoadingOverlay
        active={isActive}
        text={handleIconMessage()}
        styles={{
          spinner: (base) => ({
            ...base,
            display: message.includes('Thành công! UniPro sẽ liên hệ lại với bạn.')
              ? 'none'
              : 'block'
          }),
          overlay: (base) => ({
            ...base
          }),
          content: (base) => ({
            ...base,
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            text: 'dsd'
          }),
          wrapper: (base) => ({
            ...base
          })
        }}
      >
        <ContactIntroduction />
        <ScrollToTop />
        <ContentStyle>
          <GoogleMapComponent />
          <RegisterForm
            onToggleLoadingOverlay={() => setActive((value) => !value)}
            onChangeMessage={(text) => setMessage(text)}
          />
          <EnterpriseContact />
        </ContentStyle>
      </LoadingOverlay>
    </RootStyle>
  );
}
