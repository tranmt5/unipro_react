// material
import React, { useEffect, useRef, useState } from 'react';
import { alpha, useTheme, styled, Theme } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography, useMediaQuery, Stack, Button } from '@material-ui/core';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import TtyIcon from '@material-ui/icons/Tty';
import PhoneIcon from '@material-ui/icons/Phone';
import MobileDatePicker from '@material-ui/lab/MobileDatePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker';
import MobileDateTimePicker from '@material-ui/lab/MobileDateTimePicker';
import DesktopDateTimePicker from '@material-ui/lab/DesktopDateTimePicker';
import MenuItem from '@material-ui/core/MenuItem';
import { motion } from 'framer-motion';
// import TextField from 'material-ui/core/TextField';
import TextField from '@material-ui/core/TextField';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(10),
  background: theme.palette.background.neutral,
  paddingBottom: theme.spacing(6)
}));

const ValidationTextField = styled(TextField)({
  width: '100%',
  '& input:valid + fieldset': {
    borderColor: 'green',
    borderWidth: 2
  },
  '& input:hover': {
    borderColor: 'green',
    borderWidth: 2
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important'
  }
});

const programs = [
  {
    value: 1,
    label: 'Full-Stack Developer'
  },
  {
    value: 2,
    label: 'Front-end Developer'
  },
  {
    value: 3,
    label: 'Back-end Developer'
  },
  {
    value: 4,
    label: 'Mobile Developer'
  }
];
// ----------------------------------------------------------------------

export default function RegisterForm() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [date, setDate] = useState<Date | null>(new Date());
  const [appointmentDate, setAppointmentDate] = useState<Date | null>(new Date());
  const [programSelect, setProgramSelect] = useState<string | null>(programs[0].label);

  // const ref = useRef<HTMLDivElement>(null);
  // const [map, setMap] = useState<google.maps.Map>();

  // useEffect(() => {
  //   if (ref.current && !map) {
  //     setMap(new window.google.maps.Map(ref.current, {}));
  //   }
  // }, [ref, map]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProgramSelect(event.target.value);
  };

  // nếu muốn lưu giá trị value: number lên database
  // const [programSelect, setProgramSelect] = useState<number | null>(programs[0].value);
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(parseInt(event.target.value, 10));
  //   setProgramSelect(parseInt(event.target.value, 10));
  // };

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Container maxWidth="md">
          <Box sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
            <MotionInView variants={varFadeInDown}>
              <Stack direction="row" justifyContent="center">
                <Stack sx={{ flex: 0 }}>
                  <motion.div
                    animate={{ rotateZ: [30, 45] }}
                    transition={{ duration: 0.05, repeat: Infinity, repeatType: 'reverse' }}
                  >
                    <PhoneIcon
                      color="secondary"
                      style={{ fontSize: isDesktop ? '58px' : '30px' }}
                    />
                  </motion.div>
                </Stack>
                <Typography variant="h3" sx={{ mb: 3 }}>
                  Đăng ký tư vấn
                </Typography>
              </Stack>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <Typography
                sx={{
                  color: isLight ? 'text.secondary' : 'text.primary',
                  textAlign: 'justify'
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
        <MotionInView variants={varFadeInUp}>
          <form>
            <Grid container spacing={isDesktop ? 4 : 3} sx={{ px: isDesktop ? 10 : 2 }}>
              <Grid item xs={12} md={6} container justifyContent="center">
                <ValidationTextField
                  focused
                  label="Fullname"
                  required
                  variant="filled"
                  id="validation-filled-input-1"
                />
              </Grid>
              <Grid item xs={12} md={6} container justifyContent="center">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  {isDesktop && (
                    <DesktopDatePicker
                      label="Date"
                      value={date}
                      readOnly
                      minDate={new Date('2017-01-01')}
                      onChange={(newValue) => {
                        setDate(newValue);
                      }}
                      renderInput={(params) => <ValidationTextField variant="filled" {...params} />}
                    />
                  )}
                  {!isDesktop && (
                    <MobileDatePicker
                      label="Date"
                      value={date}
                      readOnly
                      minDate={new Date('2017-01-01')}
                      onChange={(newValue) => {
                        setDate(newValue);
                      }}
                      renderInput={(params) => <ValidationTextField variant="filled" {...params} />}
                    />
                  )}
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={6} container justifyContent="center">
                <ValidationTextField
                  label="Email"
                  required
                  variant="filled"
                  // defaultValue="Success"
                  id="validation-filled-input-3"
                />
              </Grid>
              <Grid item xs={12} md={6} container justifyContent="center">
                <ValidationTextField
                  label="Phone"
                  required
                  variant="filled"
                  // defaultValue="Success"
                  id="validation-filled-input-4"
                />
              </Grid>
              <Grid item xs={12} md={6} container justifyContent="center">
                <ValidationTextField
                  label="Lĩnh vực cần tư vấn"
                  select
                  required
                  variant="filled"
                  value={programSelect}
                  onChange={handleChange}
                  helperText="Please select your program"
                  id="validation-filled-input-5"
                >
                  {programs.map((program) => (
                    <MenuItem key={program.value} value={program.label}>
                      {program.label}
                    </MenuItem>
                  ))}
                </ValidationTextField>
              </Grid>
              <Grid item xs={12} md={6} container justifyContent="center">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  {isDesktop && (
                    <DesktopDateTimePicker
                      label="Chúng tôi có thể liên lạc với bạn vào lúc nào?"
                      value={appointmentDate}
                      minDate={new Date('2017-01-01')}
                      onChange={(newValue) => {
                        setAppointmentDate(newValue);
                      }}
                      renderInput={(params) => <ValidationTextField variant="filled" {...params} />}
                    />
                  )}
                  {!isDesktop && (
                    <MobileDateTimePicker
                      label="Chúng tôi có thể liên lạc với bạn vào lúc nào?"
                      value={appointmentDate}
                      minDate={new Date('2017-01-01')}
                      onChange={(newValue) => {
                        setAppointmentDate(newValue);
                      }}
                      renderInput={(params) => <ValidationTextField variant="filled" {...params} />}
                    />
                  )}
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} container justifyContent="center">
                <Button variant="contained" color="success">
                  Gửi
                </Button>
              </Grid>
            </Grid>
          </form>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
