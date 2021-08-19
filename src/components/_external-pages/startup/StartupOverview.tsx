import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import { styled, useTheme } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
//
import { MotionInView, varFadeInDown, varWrapEnter } from '../../animate';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  backgroundColor: theme.palette.background.default
}));

const WrapperStyle = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {}
}));

const ITEMS = [
  {
    icon: 'ic_customize.png',
    title: '100% Tinh chỉnh'
  },
  {
    icon: 'ic_white.png',
    title: 'Không nhãn hiệu'
  },
  {
    icon: 'ic_brand.png',
    title: 'Thương hiệu của bạn'
  },
  {
    icon: 'ic_clean_design.png',
    title: 'Thiết kế tinh gọn'
  },
  {
    icon: 'ic_store.png',
    title: 'Không giới hạn cửa hàng'
  },
  {
    icon: 'ic_group_user.png',
    title: 'Không giới hạn tài xế'
  },
  {
    icon: 'ic_high_speed.png',
    title: 'Tốc độ cao'
  },
  {
    icon: 'ic_notification.png',
    title: 'Tích hợp thông báo'
  }
];

export default function StatupOverview() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <WrapperStyle maxWidth="lg">
          <MotionInView variants={varFadeInDown}>
            <Card>
              <CardContent
                sx={{
                  paddingY: 8,
                  paddingX: 4
                }}
              >
                <Grid container spacing={[2, 8]}>
                  {ITEMS.map((item, index) => (
                    <Grid
                      key={`${item.title}-${index}`}
                      item
                      xs={6}
                      sm={3}
                      alignSelf="stretch"
                      textAlign="center"
                    >
                      <Box
                        component="img"
                        src={`/static/startup/${item.icon}`}
                        width={50}
                        height={50}
                        mx="auto"
                        mb={4}
                      />
                      <Typography variant="h6">{item.title}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </MotionInView>
        </WrapperStyle>
      </RootStyle>
    </>
  );
}
