// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import {
  Box,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
  useMediaQuery,
  Accordion,
  Stack
} from '@material-ui/core';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LabelIcon from '@material-ui/icons/Label';
import HelpOutline from '@material-ui/icons/HelpOutline';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
//
import { varFadeInUp, MotionInView, varFadeInDown, varWrapEnter } from '../../animate';

// ----------------------------------------------------------------------

const DETAILS = [
  {
    icon: '/static/introduction/lecturer_avatar_1.jpg',
    title: 'Câu hỏi số 1',
    question: 'UniPro dạy về gì?',
    answer:
      'Chương trình giảng dạy ở UniPro về các khóa học lập trình từ chuyên sâu đến các lớp học cấp tốc, từ Front-end, Back-end đến Full-stack.'
  },
  {
    icon: '/static/introduction/lecturer_avatar_2.jpg',
    title: 'Câu hỏi số 2',
    question: 'Ai có thể tham gia vào các khóa học?',
    answer:
      'UniPro cung cấp các khóa học theo từng cấp độ khác nhau tùy nhu cầu theo học của từng học viên. Vì thế chúng tôi không hạn chế về đối tượng tham gia, chỉ cần bạn đam mê và muốn học lập trình, đừng ngừng ngại, chúng tôi sẽ hỗ trợ bạn hết mức có thể.'
  },
  {
    icon: '/static/introduction/lecturer_avatar_3.jpg',
    title: 'Câu hỏi số 3',
    question: 'Front-end là gì?',
    answer:
      'Front-end là phần tương tác với người dùng. Tất cả mọi thứ người dùng nhìn thấy khi điều hướng trên Internet, từ các font chữ, màu sắc cho tới các menu xổ xuống và các thanh trượt.'
  },
  {
    icon: '/static/introduction/lecturer_avatar_3.jpg',
    title: 'Câu hỏi số 4',
    question: 'Back-end là gì?',
    answer:
      'Back-end là phần phía sau, hỗ trợ cho sự hoạt động của Front end, bao gồm một máy chủ, một ứng dụng, và một cơ sở dữ liệu.'
  },
  {
    icon: '/static/introduction/lecturer_avatar_3.jpg',
    title: 'Câu hỏi số 5',
    question: 'Thế nào là một full-stack developer?',
    answer:
      'Full-stack developer chỉ lập trình viên có khả năng lập trình từ Front-end đến Back-end của một website.'
  },
  {
    icon: '/static/introduction/lecturer_avatar_3.jpg',
    title: 'Câu hỏi số 6',
    question: 'Học xong thì có thể đi làm ở đâu?',
    answer:
      'Sau khi học xong bạn có thể tham gia nộp CV và phỏng vấn việc làm tại các công ty IT đang hiện có theo từng khóa học bạn theo như VNG, KMS, TMA, …'
  }
];

const RootStyle = styled(motion.div)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  background: theme.palette.background.neutral,
  paddingBottom: theme.spacing(6)
}));

const CardIconStyle = styled('img')(({ theme }) => ({
  width: 54,
  height: 54,
  margin: 'auto',
  marginBottom: theme.spacing(5),
  filter: shadowIcon(theme.palette.primary.main)
}));

const shadowIcon = (color: string) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

// ----------------------------------------------------------------------

export default function AdvisoryComponent() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [expanded, setExpanded] = useState<number | false>(false);
  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="md">
        <Box sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <MotionInView variants={varFadeInDown}>
            <Stack direction="row" justifyContent="center">
              <Stack sx={{ flex: 0 }}>
                <motion.div
                  animate={{ rotateY: [0, 90] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                >
                  <HelpOutline
                    color="secondary"
                    style={{ fontSize: isDesktop ? '58px' : '30px' }}
                  />
                </motion.div>
              </Stack>
              <Typography variant="h3" sx={{ mb: 3 }}>
                CÂU HỎI THƯỜNG GẶP?
              </Typography>
            </Stack>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography
              sx={{
                color: isLight ? 'text.secondary' : 'text.primary',
                textAlign: 'justify',
                px: 2
              }}
              variant="h6"
            >
              “ Muốn biết thì hỏi, muốn giỏi phải học” quá trình học chắc chắn sẽ có những vấn đề mà
              các bạn không hiểu, hoặc chưa hiểu rõ.
            </Typography>
          </MotionInView>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <MotionInView variants={varFadeInUp}>
          {DETAILS.map((detail, index) => (
            <Accordion
              key={`panel${index}`}
              expanded={expanded === index}
              onChange={handleChange(index)}
              onMouseOver={(event) => (
                (event.currentTarget.style.padding = '0px 5px'),
                (event.currentTarget.style.boxShadow = '-5px 0px rgb(77, 146, 187)')
              )}
              onMouseLeave={(event) => (
                (event.currentTarget.style.padding = '0px'),
                (event.currentTarget.style.boxShadow = 'none')
              )}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
              >
                <Typography
                  sx={{ width: '100%', flexShrink: 0, color: 'rgb(222, 62, 111)' }}
                  variant="h6"
                >
                  {detail.question}
                  {/* <LabelIcon color="secondary" fontSize={isDesktop ? 'large' : 'medium'} /> */}
                </Typography>
                {/* <Typography sx={{ color: 'text.black' }} variant="h6">
                  {detail.question}
                </Typography> */}
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="h6"
                  sx={{
                    px: { xs: 2, md: 12 },
                    textAlign: 'justify',
                    color: isLight ? 'text.secondary' : 'text.primary'
                  }}
                >
                  {detail.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
