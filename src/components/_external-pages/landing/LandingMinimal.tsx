// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Button } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/static/icons/ic_customer.svg',
    title: <>Tăng cường nhận diện thương hiệu của doanh nghiệp</>,
    description:
      'Đặt hàng trên website và ứng dụng di động sẽ giúp doanh số bán hàng của bạn luôn tăng trưởng và thương hiệu của bạn luôn gần với khách hàng tiềm năng.'
  },
  {
    icon: '/static/icons/ic_star.svg',
    title: <>Xây dựng mối quan hệ khách hàng tốt hơn</>,
    description:
      'Cải thiện lòng trung thành và giữ chân khách hàng bằng cách giảm giá, dịch vụ đăng ký và biểu ngữ khuyến mại.'
  },
  {
    icon: '/static/icons/ic_franchise.svg',
    title: <>Quản lý nhiều chi nhánh</>,
    description:
      'Tích hợp nhiều cửa hàng nhượng quyền hoặc đại lý của thương hiệu của bạn và cho phép chủ sở hữu đăng ký và đăng nhập vào trang tổng quan của bạn.'
  },
  {
    icon: '/static/icons/ic_payment.svg',
    title: <>Cổng thanh toán</>,
    description:
      'Tích hợp nhiều cổng thanh toán với các trang web của bạn. Cung cấp trải nghiệm thanh toán mượt mà cho khách hàng của bạn. Do đó nâng cao lòng tin & sự hài lòng của khách hàng.'
  },
  {
    icon: '/static/icons/ic_api.svg',
    title: <>Tích hợp đa nền tảng</>,
    description:
      'Với hệ thống API chuẩn hóa và mạnh mẽ chuyên sâu cho Thương mại điện tử cho phép Reso kết nối với nhiều hệ thống và nền tảng khác như các công cụ marketing,chatbot bán hàng, sàn thương mại điện tử khác.'
  },
  {
    icon: '/static/icons/ic_architecture.svg',
    title: <>Làm chủ hoàn toàn kiến trúc và thiết kế</>,
    description:
      'Hệ thống được thiết kế theo tiêu chuẩn để tách biệt Website và Mobile App với hệ thống quản trị . Mọi cập nhật thay đổi về giao diện hay trải nghiệm khách hàng sẽ dễ dàng được thực hiện.'
  }
];

const shadowIcon = (color: string) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(14),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(14)
  }
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity: number) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 380,
    minHeight: 400,
    height: '100%',
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(4, 2, 4),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  margin: '0 auto',
  marginBottom: theme.spacing(10),
  filter: shadowIcon(theme.palette.primary.main)
}));

// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Container maxWidth="md">
          <Box sx={{ mb: { xs: 10, md: 15 }, textAlign: 'center' }}>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h2" sx={{ mb: 2 }}>
                Tối ưu hóa quá trình đặt hàng với công nghệ tiên tiến
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <Typography
                sx={{
                  color: isLight ? 'text.secondary' : 'text.primary'
                }}
              >
                Hợp lý hóa việc đặt hàng với một nền tảng mạnh mẽ tạo điều kiện thuận lợi cho việc
                bán hàng trực tiếp của người tiêu dùng.
              </Typography>
            </MotionInView>
          </Box>
        </Container>

        <Grid container spacing={isDesktop ? 5 : 5} alignItems="stretch">
          {CARDS.map((card, index) => (
            <Grid key={`card-hero-${indexedDB}`} item xs={12} md={4}>
              <MotionInView sx={{ height: '100%' }} variants={varFadeInUp}>
                <CardStyle variant="outlined">
                  <Box textAlign="center">
                    <CardIconStyle
                      src={card.icon}
                      sx={{
                        ...(index % 3 === 0 && {
                          filter: (theme) => shadowIcon(theme.palette.warning.main)
                        }),
                        ...(index % 3 === 1 && {
                          filter: (theme) => shadowIcon(theme.palette.error.main)
                        }),
                        ...(index % 3 === 2 && {
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
                  </Box>
                </CardStyle>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
