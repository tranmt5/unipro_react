// material
import React, { useState } from 'react';
import { useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography, useMediaQuery, Stack, Button } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import SendIcon from '@material-ui/icons/Send';
import MobileDatePicker from '@material-ui/lab/MobileDatePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker';
import MobileDateTimePicker from '@material-ui/lab/MobileDateTimePicker';
import DesktopDateTimePicker from '@material-ui/lab/DesktopDateTimePicker';
import MenuItem from '@material-ui/core/MenuItem';
import { motion } from 'framer-motion';
import TextField from '@material-ui/core/TextField';
import { AdvisoryType } from '../../../pages/type';
import contactApi from '../../../api/contact';
//----------------------------------------------------------------------

import { varFadeInUp, MotionInView, varFadeInDown, varWrapEnter } from '../../animate';
import { TitleCardCircle } from '../../TitleCard';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  background: theme.palette.background.default,
  paddingBottom: theme.spacing(16),
  position: 'relative',
  borderTop: '2px solid rgb(255, 165, 0)'
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

export default function RegisterForm({ onToggleLoadingOverlay, onChangeMessage }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [date, setDate] = useState<Date | null>(new Date());
  const [advisory, setAdvisory] = useState<AdvisoryType>({
    fromEmail: '',
    toEmail: 'tranminhtuan8690@gmail.com',
    fullName: '',
    phone: '',
    program: programs[0].label,
    apointmentAt: new Date()
  });

  const DefaultAdvisory: AdvisoryType = {
    ...advisory,
    fromEmail: '',
    fullName: '',
    phone: '',
    program: programs[0].label,
    apointmentAt: new Date()
  };

  const [visibleError, setVisibleError] = useState({
    fromEmail: false,
    fullName: false,
    phone: false
  });

  const [errors, setErrors] = useState({
    fromEmail: 'Vui lòng nhập email của bạn!',
    fullName: 'Vui lòng nhập tên của bạn!',
    phone: 'Vui lòng nhập số điện thoại của bạn!'
  });

  const handleChangeProgram = (event: any) => {
    event.preventDefault();
    const { value } = event.target;
    setAdvisory({ ...advisory, program: value });
  };

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const validPhoneRegex = RegExp(/^(\([0-9]{3}\)|0[0-9]{2}(-|))[0-9]{3}(-|)[0-9]{4}$/i);

  const handleChangeAdvisoryandError = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();

    const { name, value } = event.target;

    switch (name) {
      case 'fromEmail':
        setAdvisory({ ...advisory, fromEmail: value });
        console.log(advisory);
        setErrors({
          ...errors,
          fromEmail: validEmailRegex.test(value) ? '' : 'Email is not valid!'
        });
        setVisibleError({ ...visibleError, fromEmail: true });
        break;
      case 'fullName':
        setAdvisory({ ...advisory, fullName: value });
        console.log(advisory);
        setErrors({
          ...errors,
          fullName: value.length < 1 ? 'Độ dài tên phải lớn hơn 1 ký tự' : ''
        });
        setVisibleError({ ...visibleError, fullName: true });
        break;
      case 'phone':
        setAdvisory({ ...advisory, phone: value });
        console.log(advisory);
        setErrors({
          ...errors,
          phone: validPhoneRegex.test(value) ? '' : 'Số điện thoại chưa hợp lệ'
        });
        setVisibleError({ ...visibleError, phone: true });
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    setVisibleError({ ...visibleError, fromEmail: true, fullName: true, phone: true });
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  // nếu muốn lưu giá trị value: number lên database
  // const [programSelect, setProgramSelect] = useState<number | null>(programs[0].value);
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(parseInt(event.target.value, 10));
  //   setProgramSelect(parseInt(event.target.value, 10));
  // };

  async function handleSubmit(event: any) {
    event.preventDefault();
    console.log(validateForm());
    if (validateForm()) {
      onToggleLoadingOverlay();
      onChangeMessage('Đang gửi...');
      try {
        await contactApi.createAdvisory(advisory);
        onChangeMessage('Thành công! UniPro sẽ liên hệ lại với bạn.');
        setAdvisory(DefaultAdvisory);
        setVisibleError({ ...visibleError, fromEmail: false, fullName: false, phone: false });
        console.log('success');
      } catch (error) {
        console.error(error);
        onChangeMessage('Xin lỗi! Đã có lỗi xảy ra.');
      } finally {
        setTimeout(() => {
          onToggleLoadingOverlay();
        }, 5000);
      }
    } else {
      console.error('Invalid Form');
    }
  }

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <div
        style={{
          top: '1px',
          width: '100%',
          position: 'absolute',
          borderTop: '5px solid rgb(255, 165, 0)',
          borderRight: '50px solid transparent',
          borderLeft: '50px solid transparent'
        }}
      />
      <TitleCardCircle>
        <MotionInView variants={varFadeInDown}>
          <Stack sx={{ flex: 0 }} style={{ transform: 'rotate(30deg)' }}>
            <PhoneIcon
              className="vibrate"
              color="secondary"
              style={{ fontSize: isDesktop ? '40px' : '30px' }}
            />
          </Stack>
        </MotionInView>
      </TitleCardCircle>
      <Container maxWidth="lg">
        <Container maxWidth="md">
          <Box sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
            <MotionInView variants={varFadeInDown}>
              <Stack direction="row" justifyContent="center">
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
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  {isDesktop && (
                    <DesktopDatePicker
                      label="Date"
                      value={date}
                      inputFormat="dd/MM/yyyy"
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
                      inputFormat="dd/MM/yyyy"
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
                  focused
                  label="Fullname"
                  name="fullName"
                  value={advisory.fullName}
                  required
                  error={errors.fullName.length !== 0 && visibleError.fullName}
                  variant="filled"
                  id="validation-filled-input-1"
                  onChange={(event) => handleChangeAdvisoryandError(event)}
                  helperText={visibleError.fullName ? errors.fullName : ''}
                />
              </Grid>
              <Grid item xs={12} md={6} container justifyContent="center">
                <ValidationTextField
                  label="Email"
                  name="fromEmail"
                  value={advisory.fromEmail}
                  required
                  error={errors.fromEmail.length !== 0 && visibleError.fromEmail}
                  variant="filled"
                  id="validation-filled-input-3"
                  onChange={(event) => handleChangeAdvisoryandError(event)}
                  helperText={visibleError.fromEmail ? errors.fromEmail : ''}
                />
              </Grid>
              <Grid item xs={12} md={6} container justifyContent="center">
                <ValidationTextField
                  label="Phone(0xx-xxx-xxxx)"
                  name="phone"
                  value={advisory.phone}
                  required
                  error={errors.phone.length !== 0 && visibleError.phone}
                  variant="filled"
                  id="validation-filled-input-4"
                  onChange={(event) => handleChangeAdvisoryandError(event)}
                  helperText={visibleError.phone ? errors.phone : ''}
                />
              </Grid>
              <Grid item xs={12} md={6} container justifyContent="center">
                <ValidationTextField
                  label="Lĩnh vực cần tư vấn"
                  name="program"
                  select
                  required
                  variant="filled"
                  value={advisory.program}
                  onChange={handleChangeProgram}
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
                      value={advisory.apointmentAt}
                      inputFormat="dd/MM/yyyy HH:mm"
                      minDate={new Date('2017-01-01')}
                      onChange={(newValue) => {
                        setAdvisory({ ...advisory, apointmentAt: newValue });
                      }}
                      renderInput={(params) => <ValidationTextField variant="filled" {...params} />}
                    />
                  )}
                  {!isDesktop && (
                    <MobileDateTimePicker
                      label="Chúng tôi có thể liên lạc với bạn vào lúc nào?"
                      value={advisory.apointmentAt}
                      inputFormat="dd/MM/yyyy HH:mm"
                      minDate={new Date('2017-01-01')}
                      onChange={(newValue) => {
                        setAdvisory({ ...advisory, apointmentAt: newValue });
                      }}
                      renderInput={(params) => <ValidationTextField variant="filled" {...params} />}
                    />
                  )}
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} container justifyContent="center">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ padding: ' 10px 20px', fontSize: '18px' }}
                  type="submit"
                  onClick={handleSubmit}
                >
                  <SendIcon
                    style={{ color: 'white', transform: 'rotate(-45deg)', marginBottom: '10px' }}
                  />
                  &nbsp; Gửi
                </Button>
              </Grid>
            </Grid>
          </form>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
