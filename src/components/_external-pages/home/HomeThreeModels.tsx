// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Button } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/static/icons/ic_customer.svg',
    title: <>Mantee</>,
    description:
      'Tham gia cùng với kế hoạch của bạn, tinh chỉnh để có thể giúp bạn để đạt được kết quả tốt nhất. Đừng lo nếu bạn chưa biết bắt đầu từ đâu, chúng tôi sẽ giúp bạn lập kế hoạch cho dự án của bạn.'
  },
  {
    icon: '/static/icons/ic_store.svg',
    title: <>Manter</>,
    description:
      'Sau khi lập kế hoạch xong, chúng tôi phát triển các bản mẫu của dự án để có thể đảm bảo ứng dụng giống như bạn mong đợi trước khi bắt đầu.'
  },
  {
    icon: '/static/icons/ic_headless.svg',
    title: <>Master</>,
    description:
      'Sau khi kế hoạch và bản mẫu đã hoàn tất, một nhóm nhà phát triển sẽ được chỉ định cho dự án của bạn và quá trình phát triển bắt đầu.'
  }
];

const shadowIcon = (color: string) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  background: theme.palette.background.default,
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity: number) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 380,
    minHeight: 440,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10, 2, 4),
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
  marginBottom: theme.spacing(10),
  filter: shadowIcon(theme.palette.primary.main)
}));

// ----------------------------------------------------------------------

export default function HomeThreeModels() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Container maxWidth="md">
          <Box sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                Mô hình 3M
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <Typography
                sx={{
                  color: isLight ? 'text.secondary' : 'text.primary'
                }}
              >
                Đến với UniPro, manter(người hướng dẫn) của chúng tôi sẽ hướng dẫn bạn(mantee) trong
                suốt quá trình học tập, lên ý tưởng và phát triển dự án. Bên cạnh đó, chúng tôi còn
                có đội ngũ chuyên gia(master) có nhiều năm kinh nghiệm giảng dạy và làm việc tại FPT
                sẽ bổ sung kiến thức chuyên sâu, định hướng con đường ngắn nhất và hiệu quả để bạn
                đạt được thành công.
              </Typography>
            </MotionInView>
          </Box>
        </Container>

        <Grid container spacing={isDesktop ? 10 : 5}>
          {CARDS.map((card, index) => (
            <Grid key={`card-hero-${indexedDB}`} item xs={12} md={4}>
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
                  <Typography variant="h5" paragraph>
                    {card.title}
                  </Typography>
                  <Typography sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>
                    {card.description}
                  </Typography>
                </CardStyle>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
