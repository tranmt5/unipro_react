// material
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  LinkProps,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography
} from '@material-ui/core';
import { alpha, styled, Theme, useTheme } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { makeStyles } from '@material-ui/styles';
import { MHidden } from 'components/@material-extend';
import Label from 'components/Label';
// components
import ScrollToTop from 'components/ScrollToTopBtn';
import FeatureHero from 'components/_external-pages/feature/FeatureHero';
import { LandingAdvertisement } from 'components/_external-pages/landing';
import { ReactNode, useState } from 'react';
import InView from 'react-intersection-observer';
import { NavHashLink } from 'react-router-hash-link';
import Page from '../components/Page';

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  // overflow: 'hidden',
  // position: 'relative',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(4, 0, 8)
}));

interface ListItemStyleProps extends LinkProps {
  component?: ReactNode;
  to?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  selected: {
    backgroundColor: alpha(theme.palette.primary.main, 0.5),
    color: theme.palette.primary.main
  }
}));

const ListItemStyle = styled(ListItem)<ListItemStyleProps>(({ theme }) => ({
  ...theme.typography.h6,
  cursor: 'pointer',
  padding: 0,
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.text.primary
  },
  '& .MuiListItemButton-root .Mui-selected': {
    backgroundColor: alpha(theme.palette.primary.main, 0.5)
  }
}));

const StickyNavigation = styled(Card)({
  position: 'sticky',
  top: '80px',
  left: 0,
  right: 0
});

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const { icon, title, description } = feature;

  return (
    <Card
      sx={{
        zIndex: 1,
        p: 5,
        boxShadow: (theme) =>
          `0px 48px 48px ${alpha(
            isLight ? theme.palette.grey[500] : theme.palette.common.black,
            0.12
          )}`,
        height: '100%'
      }}
    >
      <Stack spacing={5}>
        <Box
          component="img"
          src={icon}
          sx={{
            width: 64,
            height: 64
          }}
        />
        <Typography variant="h4">{title}</Typography>
        <Typography color="text.secondary">{description}</Typography>
      </Stack>
    </Card>
  );
};

const navigations = [
  {
    title: 'Mini app',
    to: 'mini-app',
    items: [
      {
        title: 'Tích hợp mini app',
        description: 'Cho phép trang web của bạn tích hợp vào các ứng dụng điện tử như Momo, Zalo',
        icon: '/static/feature/ic-miniapp.png.'
      },
      {
        title: 'Mở rộng kênh bán hàng',
        description:
          'Người dùng dễ dàng thao tác trên các ứng dụng quen thuộc, góp phần mở rộng thêm kênh bán hàng của bạn.',
        icon: '/static/feature/ic-channel.png'
      }
    ]
  },
  {
    title: 'Quản lý cửa hàng',
    to: 'store-management',
    items: [
      {
        title: 'Lịch trình của nhà hàng',
        description: 'Thiết lập giờ mở cửa và đóng cửa nhà hàng của bạn.',
        icon: '/static/feature/ic_schedule.png'
      },
      {
        title: 'Bảng giá theo thời gian',
        description:
          'Thiết kế bảng giá khác nhau dựa trên thời gian trong ngày của tuần và các dịp lễ hội.',
        icon: '/static/feature/ic_menu.png'
      },
      {
        title: 'Cấu hình sản phẩm với nhiều thuộc tính',
        description:
          'Cung cấp các biến thể cho sản phẩm bằng cách thêm các thuôc tính vào sản phẩm, chẳng hạn như nhiều kích cỡ, màu sắc, chất liệu, v.v.',
        icon: '/static/feature/ic_product_variant.png'
      },
      {
        title: 'Không giới hạn loại sản phẩm',
        description:
          'Tự do thiết lập số lượng hoặc loại sản phẩm / dịch vụ bạn có thể bán trên cửa hàng của mình',
        icon: '/static/feature/ic_unlimited.png'
      },
      {
        title: 'Bộ sưu tập sản phẩm',
        description:
          'Cho phép bạn tạo các bộ sưu tập như sản phẩm mới, sản phẩm bán chạy, bộ sưu tập thu đông,... ',
        icon: '/static/feature/ic_unlimited.png'
      }
    ]
  },
  {
    title: 'Thanh toán',
    to: 'ordering',
    items: [
      {
        title: 'Tích hợp nhiều cổng thanh toán',
        description:
          'Hệ thống hỗ trợ tích hợp nhiều phương thức thanh toán như Momo, Zalo Pay, v.v',
        icon: '/static/feature/ic_payment.png'
      },
      {
        title: 'Upsell đơn hàng',
        description:
          'Gợi ý người dùng những món hàng tương tự, hoặc các sản phẩm được cấu hình. Từ đó tăng giá trị đơn hàng.',
        icon: '/static/feature/ic_upsell.png'
      }
    ]
  },
  {
    title: 'Phân tích',
    to: 'analytics',
    items: [
      {
        title: 'Trực quan hóa dữ liệu',
        description:
          'Tạo báo cáo và trang tổng quan hấp dẫn và sâu sắc với giao diện kéo và thả đơn giản để khám phá thông tin chi tiết về doanh nghiệp.',
        icon: '/static/feature/ic_visualization.png'
      },
      {
        title: 'Xuất báo cáo',
        description:
          'Báo cáo có thể được xuất ra để bạn có thể ghi lại và sử dụng cho mục đích khác.',
        icon: '/static/feature/ic_export.png'
      },
      {
        title: 'Bảng điều khiển tương tác',
        description: 'Tạo trang tổng quan nhiều thông tin và đẹp mắt về mặt thẩm mỹ.',
        icon: '/static/feature/ic_interactive.png'
      }
    ]
  },
  {
    title: 'Marketing & SEO',
    to: 'marketing-seo',
    items: [
      {
        title: 'Tùy chỉnh từ khóa',
        description:
          'Liệt kê từ khóa phù hợp mà khách hàng có thể của bạn đang tìm kiếm trên google và đảm bảo rằng doanh nghiệp của bạn đang hiển thị trên các liên kết hàng đầu.',
        icon: '/static/feature/ic_keyword.png'
      },
      {
        title: 'Miêu tả cho trang web',
        description:
          'Chọn những từ phù hợp để mô tả cho doanh nghiệp của bạn, mô tả này sẽ hiển thị bất cứ khi nào bạn chia sẻ URL doanh nghiệp của mình.',
        icon: '/static/feature/ic_description.png'
      },
      {
        title: 'Khuyến mãi',
        description:
          'Thu hút đơn đặt hàng của khách hàng bằng cách giảm giá cho các sản phẩm cụ thể hoặc cho toàn bộ danh mục sản phẩm.',
        icon: '/static/feature/ic_discount.png'
      },
      {
        title: 'Bài viết',
        description:
          'Thêm các banner khuyến mãi, quảng cáo hoặc các bài viết về tin tức, các sản phẩm mới.',
        icon: '/static/feature/ic_blog.png'
      }
    ]
  },
  {
    title: 'Hosting',
    to: 'web-hosting',
    items: [
      {
        title: 'Tùy chọn tên miền',
        description: 'Bạn có thể sử dụng tên miền của riêng bạn cho trang web.',
        icon: '/static/feature/ic_domain.png'
      },
      // {
      //   title: 'Sử dụng dịch vụ AWS',
      //   description:
      //     'Trang web của bạn sẽ được triển khai với dịch vụ của AWS, đảm bảo tốc độ, tối ưu.',
      //   icon: '/static/feature/ic_upsell.png'
      // },
      {
        title: '99.99998% Uptime',
        description: 'Đảm bảo doanh nghiệp của bạn phải luôn hoạt động, ngay cả khi bạn đang ngủ.',
        icon: '/static/feature/ic_worktime.png'
      },
      {
        title: 'Chứng chỉ SSL',
        description:
          'Trang web của bạn sẽ có chứng chỉ SSL để giữ an toàn cho thông tin khách hàng và dữ liệu kinh doanh của bạn.',
        icon: '/static/feature/ic_ssl.png'
      },
      {
        title: 'Cập nhật lập tức',
        description:
          'Tất cả các thay đổi của bạn đều tự động, vì vậy bạn sẽ nhận được các tính năng mới nhất ngay lập tức mà không gặp bất kỳ rắc rối nào.',
        icon: '/static/feature/ic_upgrade.png'
      }
    ]
  },
  {
    title: 'Hỗ trợ',
    to: 'support',
    items: [
      {
        title: 'Đội ngũ hỗ trợ tận tâm',
        icon: '/static/feature/ic_support.png',
        description:
          'Nhóm hỗ trợ Reso làm việc 24 giờ một ngày, 7 ngày một tuần, qua email, trò chuyện trực tiếp và điện thoại để đảm bảo luôn giải quyết các vấn đề cho bạn.'
      }
    ]
  }
];

const scrollWithOffset = (el: HTMLElement) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

const FeaturesPage = () => {
  const theme = useTheme();
  const [currentInviewIdx, setCurrentInviewIdx] = useState(0);
  const classes = useStyles();

  return (
    <RootStyle title="Tất cả tính năng | Sale reso" id="move_top">
      <FeatureHero />
      <ScrollToTop />

      <ContentStyle>
        <Container maxWidth="lg" sx={{ paddingY: 8 }}>
          <Stack direction="row" spacing={4}>
            <MHidden width="mdDown">
              <Box width="25%">
                <StickyNavigation>
                  <List component="nav" aria-label="secondary mailbox folder">
                    {navigations.map((nav, idx) => (
                      <NavHashLink
                        scroll={(el) => scrollWithOffset(el)}
                        key={nav.title}
                        style={{ textDecoration: 'none' }}
                        smooth
                        to={`/features#${nav.to}`}
                      >
                        <ListItemStyle
                          secondaryAction={idx === 0 && <Label color="error">Mới</Label>}
                        >
                          <ListItemButton
                            classes={{ selected: classes.selected }}
                            selected={currentInviewIdx === idx}
                          >
                            {nav.title}
                          </ListItemButton>
                        </ListItemStyle>
                      </NavHashLink>
                    ))}
                  </List>
                </StickyNavigation>
              </Box>
            </MHidden>
            <Box flex={1}>
              <List sx={{ position: 'relative' }}>
                <Stack spacing={4}>
                  {navigations.map((nav, index) => (
                    <InView
                      threshold={0.5}
                      onChange={(inview) => {
                        if (inview) {
                          setCurrentInviewIdx(index);
                        }
                      }}
                      key={`features-${nav.title}`}
                    >
                      <Box id={nav.to}>
                        <Typography variant="h3" sx={{ mb: 4 }}>
                          {nav.title}
                        </Typography>

                        <Grid container spacing={6} sx={{ paddingLeft: [0, 0, 2] }}>
                          {nav.items?.map((feat, index) => (
                            <Grid
                              alignSelf="stretch"
                              key={`features-item-${nav.title}-${index}`}
                              item
                              xs={12}
                              md={6}
                            >
                              <FeatureCard feature={feat} />
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </InView>
                  ))}
                </Stack>
              </List>
            </Box>
          </Stack>
        </Container>
        <LandingAdvertisement />
      </ContentStyle>
    </RootStyle>
  );
};

export default FeaturesPage;
