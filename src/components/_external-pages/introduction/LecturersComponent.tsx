// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Stack } from '@material-ui/core';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import GroupIcon from '@material-ui/icons/Group';
import { motion } from 'framer-motion';
//
import { varFadeInUp, MotionInView, varFadeInDown, varWrapEnter } from '../../animate';
import TitleCard from '../../TitleCard';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/static/introduction/lecturer_avatar_4.jpg',
    title: <>Lê Sỹ Việt</>,
    description:
      'Tham gia các hoạt động giảng dạy và nghiên cứu các ngành Công nghệ thông tin tại trường Đại học FPT.'
  },
  {
    icon: '/static/introduction/lecturer_avatar_5.jpg',
    title: <>Lý Dạ Thảo Quyên</>,
    description: 'Thực hiện các nhiệm vụ trong các dự án công nghệ của Tập đoàn FPT.'
  },
  {
    icon: '/static/introduction/lecturer_avatar_6.jpg',
    title: <>Phùng Thanh Thiết</>,
    description:
      'Tham gia giảng dạy các môn học thuộc chuyên ngành Công nghệ thông tin: Lập trình máy tính, thiết bị di động và lập trình website.'
  }
];

const shadowIcon = (color: string) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled(motion.div)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  background: theme.palette.background.default,
  paddingBottom: theme.spacing(16),
  position: 'relative',
  borderTop: '2px solid rgb(255, 165, 0)'
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity: number) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 380,
    minHeight: 340,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(4, 2, 4),
    boxShadow: `0px 0px 10px 5px ${shadowCard(0.48)}`,
    '&.cardItem': {
      [theme.breakpoints.up('md')]: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: `0px 0px 8px 4px ${shadowCard(0.4)}`
      }
    }
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  width: 54,
  height: 54,
  margin: 'auto',
  objectFit: 'cover',
  marginBottom: theme.spacing(5),
  filter: shadowIcon(theme.palette.primary.main)
}));

// ----------------------------------------------------------------------

export default function LecturersComponent() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <TitleCard>
        <MotionInView variants={varFadeInDown}>
          <Stack direction="row" justifyContent="center">
            <Stack sx={{ flex: 0 }}>
              <motion.div
                animate={{ rotateY: [0, 180] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              >
                <GroupIcon color="secondary" style={{ fontSize: isDesktop ? '40px' : '30px' }} />
              </motion.div>
            </Stack>
            &nbsp;
            <Typography variant={isDesktop ? 'h4' : 'h5'} style={{ color: 'white' }}>
              ĐỘI NGŨ UNIPRO
            </Typography>
          </Stack>
        </MotionInView>
      </TitleCard>
      <Container maxWidth="md">
        <Box sx={{ mb: { xs: 4, md: 5 }, textAlign: 'center' }}>
          <MotionInView variants={varFadeInUp}>
            <Typography
              sx={{
                color: isLight ? 'text.secondary' : 'text.primary',
                textAlign: 'justify',
                px: 2
              }}
              variant="h6"
            >
              Với nhiều năm kinh nghiệm đứng lớp, đội ngũ giảng viên của chúng tôi sẽ truyền tải
              kiến thức một cách tốt nhất, hiệu quả nhất, đưa học viên đến với tri thức công nghệ
              một cách dễ dàng nhất mà không khô khan, buồn chán.
            </Typography>
          </MotionInView>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={isDesktop ? 6 : 4}>
          {CARDS.map((card, index) => (
            <Grid key={`card-hero-${index}`} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>
                <CardStyle
                  className="cardItem"
                  // className={
                  //   (index === 0 && 'cardLeft') ||
                  //   (index === 1 && 'cardCenter') ||
                  //   (index === 2 && 'cardRight') ||
                  //   ''
                  // }
                  onMouseOver={(event) =>
                    !isDesktopSmDown &&
                    (event.currentTarget.style.borderTop = '5px solid rgb(77, 146, 187)')
                  }
                  onMouseLeave={(event) =>
                    !isDesktopSmDown && (event.currentTarget.style.borderTop = 'none')
                  }
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
                  <Typography
                    sx={{
                      color: isLight ? 'text.secondary' : 'text.primary',
                      textAlign: 'justify'
                    }}
                    variant="h6"
                  >
                    <LibraryBooksIcon color="info" />
                    &nbsp;
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
