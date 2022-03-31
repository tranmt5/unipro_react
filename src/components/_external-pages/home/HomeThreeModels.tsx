// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Button } from '@material-ui/core';
import { motion } from 'framer-motion';
//
import { varFadeInUp, MotionInView, varFadeInDown, varWrapEnter } from '../../animate';

// ----------------------------------------------------------------------

// const CA = [
//   '/static/icons/browser-edge.svg',
//   '/static/icons/elephant.svg',
//   '/static/icons/ic_api.svg',
//   '/static/icons/ic_architecture.svg',
//   '/static/icons/ic_chrome.svg',
//   '/static/icons/ic_code.svg',
//   '/static/icons/ic_customer.svg',
//   '/static/icons/ic_delivery.gif',
//   '/static/icons/ic_demand.svg',
//   '/static/icons/ic_design.svg',
//   '/static/icons/ic_drive.svg',
//   '/static/icons/ic_dropbox.svg',
//   '/static/icons/ic_evernote.svg',
//   '/static/icons/ic_flag_de.svg',
//   '/static/icons/ic_franchise.svg',
//   '/static/icons/ic_github.svg',
//   '/static/icons/ic_headless.svg',
//   '/static/icons/ic_mastercard.svg',
//   '/static/icons/ic_multilang.svg',
//   '/static/icons/ic_notification_chat.svg',
//   '/static/icons/ic_notification_mail.svg',
//   '/static/icons/ic_notification_package.svg',
//   '/static/icons/ic_notification_shipping.svg',
//   '/static/icons/ic_order.svg',
//   '/static/icons/ic_payment.svg',
//   '/static/icons/ic_paypal.svg',
//   '/static/icons/ic_responsive.svg',
//   '/static/icons/ic_rocket.svg',
//   '/static/icons/ic_star.svg',
//   '/static/icons/ic_store.svg',
//   '/static/icons/ic_visa.svg',
//   '/static/icons/json-logo.svg',
//   '/static/icons/love-camera.svg',
//   '/static/icons/shape-avatar.svg',
//   '/static/icons/shield.svg'
// ];

const CARDS = [
  {
    icon: '/static/icons/ic_customer.svg',
    title: <>Mentee</>,
    description:
      'Mentee là những học viên mới, chưa có nhiều trải nghiệm. Họ muốn học tập và chuyển sang lĩnh vực IT.'
  },
  {
    icon: '/static/icons/ic_store.svg',
    title: <>Mentor</>,
    description:
      'Mentor đóng vai trò cố vấn, hướng dẫn cho mentee trong quá trình học tập và phát triển.'
  },
  {
    icon: '/static/icons/ic_headless.svg',
    title: <>Master</>,
    description:
      'Master là người có chuyên môn sâu, kinh nghiệm lâu năm trong lĩnh vực IT, sẽ là người định hướng học viên kỹ năng và con đường đến với nhà tuyển dụng.'
  }
];

const shadowIcon = (color: string) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled(motion.div)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  background: theme.palette.background.neutral,
  paddingBottom: theme.spacing(6)
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity: number) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 380,
    minHeight: 400,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(4, 2, 4),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none'
      // backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    '&.cardLeft': {},
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: `0px 40px 80px 0 ${shadowCard(0.4)}`
      }
    }
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  width: 54,
  height: 54,
  margin: 'auto',
  marginBottom: theme.spacing(5),
  filter: shadowIcon(theme.palette.primary.main)
}));

// ----------------------------------------------------------------------

export default function HomeThreeModels() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="md">
        <Box sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              MÔ HÌNH 3M
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <Typography
              sx={{
                color: isLight ? 'text.secondary' : 'text.primary',
                textAlign: 'justify',
                px: 2
              }}
              variant="h6"
            >
              Đến với UniPro, người hướng dẫn(mentor) của chúng tôi sẽ hướng dẫn bạn(mentee) trong
              suốt quá trình học tập, lên ý tưởng và phát triển dự án. Bên cạnh đó, chúng tôi còn có
              đội ngũ chuyên gia(master) có nhiều năm kinh nghiệm giảng dạy và làm việc tại FPT sẽ
              bổ sung kiến thức chuyên sâu, định hướng con đường ngắn nhất và hiệu quả để bạn đạt
              được thành công.
            </Typography>
          </MotionInView>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={isDesktop ? 6 : 4}>
          {CARDS.map((card, index) => (
            <Grid key={`card-hero-${index}`} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>
                <CardStyle
                  className={(index === 0 && 'cardLeft') || (index === 1 && 'cardCenter') || ''}
                >
                  <CardIconStyle
                    src={card.icon}
                    sx={{
                      ...(index === 0 && {
                        filter: (theme) => shadowIcon(theme.palette.warning.main)
                      }),
                      ...(index === 1 && {
                        filter: (theme) => shadowIcon(theme.palette.error.main)
                      }),
                      ...(index === 2 && {
                        filter: (theme) => shadowIcon(theme.palette.info.main)
                      })
                    }}
                  />
                  <Typography variant="h4" paragraph>
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: isLight ? 'text.secondary' : 'text.primary',
                      textAlign: 'justify'
                    }}
                    variant="h6"
                  >
                    {card.description}
                  </Typography>
                </CardStyle>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* <Grid>
          {CA.map((ca, index) => (
            <Grid key={`card-hero-${index}`} item xs={12} md={4}>
              <CardIconStyle
                src={ca}
                sx={{ filter: (theme) => shadowIcon(theme.palette.info.main) }}
              />
            </Grid>
          ))}
        </Grid> */}
    </RootStyle>
  );
}
