// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Button } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/static/icons/ic_customer.svg',
    title: <>Trực tiếp tới người dùng</>,
    description:
      'Cho phép thương hiệu của bạn cung cấp cho khách hàng trải nghiệm mua hàng được cá nhân hóa. Bắt đầu ngay và thêm một kênh phân phối mới cho thương hiệu của bạn.'
  },
  {
    icon: '/static/icons/ic_store.svg',
    title: <>Thị trường địa phương</>,
    description:
      'Tận dụng hoạt động kinh doanh của bạn với nền tảng thị trường siêu địa phương và tập trung vào đối tượng mục tiêu của bạn, đảm bảo giao hàng đúng hạn'
  },
  {
    icon: '/static/icons/ic_headless.svg',
    title: <>Headless-Commerce</>,
    description:
      'Mở rộng quy mô doanh nghiệp của bạn với nền tảng mở. Xây dựng giao diện người dùng của riêng bạn và nâng cao hoạt động kinh doanh của bạn mà không cần lo lắng về cơ sở hạ tầng.'
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
  }
];

const shadowIcon = (color: string) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
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
    height: '100%',
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

export default function LandingMinimalHelps() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Container maxWidth="md">
          <Box sx={{ mb: { xs: 10, md: 14 }, textAlign: 'center' }}>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h3" sx={{ mb: 3 }}>
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

        <Grid container spacing={isDesktop ? 10 : 5} alignItems="stretch">
          {CARDS.map((card, index) => (
            <Grid key={`card-hero-${indexedDB}`} item xs={12} md={4}>
              <MotionInView sx={{ height: '100%' }} variants={varFadeInUp}>
                <CardStyle>
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
                  <Button sx={{ marginTop: 2, marginBottom: 2 }} size="large" variant="contained">
                    Xem thêm
                  </Button>
                </CardStyle>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
