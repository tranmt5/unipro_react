import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import { styled, useTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import PhoneIcon from '@material-ui/icons/Phone';
import { MotionInView, varFadeInDown, varFadeInRight, varFadeInUp } from '../../animate';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 456,
  margin: 'auto',
  overflow: 'hidden',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  //   borderRadius: theme.shape.borderRadiusMd,
  backgroundImage: `linear-gradient(135deg,
      ${theme.palette.primary.main} 0%,
      ${theme.palette.primary.dark} 100%)`,
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    maxWidth: '100%',
    paddingBottom: 0,
    alignItems: 'center'
  }
}));

export default function EnterpriseContact() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box width="100%" style={{ position: 'relative' }}>
      <ContentStyle>
        <MotionInView
          variants={varFadeInUp}
          sx={{
            mb: { xs: 3, md: 0 }
          }}
        >
          <motion.div animate={{ y: [-20, 0, -20] }} transition={{ duration: 4, repeat: Infinity }}>
            <Box
              component="img"
              alt="rocket"
              src="/static/home/rocket.png"
              sx={{ maxWidth: 460, width: 1 }}
            />
          </motion.div>
        </MotionInView>
        <Box
          sx={{
            pl: { md: 10 },
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          <MotionInView variants={varFadeInDown} sx={{ color: 'common.white', mb: 5, pr: 2 }}>
            <Typography variant="h3">
              Cần biết thêm thông tin! <br />
              Để lại email và chúng tôi sẽ liên lạc với bạn ngay!
            </Typography>
          </MotionInView>
          {/* <MotionInView variants={varFadeInDown}>
            <Stack
              direction={['column', 'row']}
              spacing={[1.5, 1.5]}
              rowGap={[1.5, 1.5]}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              style={{ zIndex: 2 }}
            >
              <motion.div variants={varFadeInRight}>
                <a href="tel:0346766535">
                  <PhoneIcon color="info" fontSize="small" />
                  0346766535
                </a>
              </motion.div>
            </Stack>
          </MotionInView> */}
        </Box>
      </ContentStyle>
      <ul className="bg-bubbles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </Box>
  );
}
