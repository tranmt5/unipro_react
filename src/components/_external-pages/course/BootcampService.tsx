import { useEffect, useRef, useState } from 'react';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Collapse from '@material-ui/core/Collapse';
import CardActions from '@material-ui/core/CardActions';
import { motion } from 'framer-motion';
import {
  Box,
  Grid,
  Card,
  Container,
  Typography,
  useMediaQuery,
  Button,
  Stack
} from '@material-ui/core';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WorkspacesIcon from '@material-ui/icons/Workspaces';
import SuperscriptIcon from '@material-ui/icons/Superscript';
import WifiProtectedSetupIcon from '@material-ui/icons/WifiProtectedSetup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import NavigationIcon from '@material-ui/icons/Navigation';
import SendIcon from '@material-ui/icons/Send';
//
import {
  varFadeInUp,
  MotionInView,
  varFadeInDown,
  varFadeInUpCollapsed,
  varFadeInUpExpanded,
  varFadeInRight,
  varFadeInLeft,
  MotionContainer
} from '../../animate';

// ----------------------------------------------------------------------
const BOOTCAMPCOURSE = ['FRONTENT', 'BACKEND', 'FULLSTACK', 'MOBILE DEVELOPER'];

const COURSEDETAILS = [
  {
    title: 'Front-end Developer',
    image: '/static/course/course_bootcampservice_frontend.jpeg',
    description:
      'Các lập trình viên front-end chịu trách nhiệm cho giao diện của một trang web và kiến trúc những trải nghiệm của người dùng.',
    caption: 'Chương trình Front-end chuyên sâu.',
    target:
      'Nắm vững các kiến thức về lập trình Front-end, có thể tự xây dựng và thiết kế một giao diện web đáp ứng nhu cầu của khách hàng, đồng thời xây dựng được hình ảnh thương hiệu trên nền tảng công nghệ số.',
    course: [
      {
        semester: 'Học kỳ 1',
        subject: (
          <ul>
            <li>JavaScript ES6</li>
            <li>VueJS</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WorkspacesIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 2',
        subject: (
          <ul>
            <li>JReactJS cơ bản</li>
            <li>ReactJS nâng cao</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <SuperscriptIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 3',
        subject: (
          <ul>
            <li>Angular cơ bản</li>
            <li>Angular nâng cao</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WifiProtectedSetupIcon color="secondary" />
      }
    ]
  },
  {
    title: 'Back-end Developer',
    image: '/static/course/course_bootcampservice_backend.png',
    description:
      'Một lập trình viên back-end xây dựng và duy trì công nghệ mà sức mạnh của những thành phần đó, cho phép phần giao diện người dùng của trang web có thể tồn tại được.',
    caption: 'Chương trình Back-end chuyên sâu.',
    target:
      'Nắm vững các kiến thức về lập trình back-end, có thể xây dựng ngay hệ thống chức năng website từ phía người dùng đến sever.',
    course: [
      {
        semester: 'Học kỳ 1',
        subject: (
          <ul>
            <li>OOP with Java</li>
            <li>Java Desktop</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WorkspacesIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 2',
        subject: (
          <ul>
            <li>Java Servlet cơ bản</li>
            <li>ava Servlet nâng cao</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <SuperscriptIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 3',
        subject: (
          <ul>
            <li>Java Spring MVC</li>
            <li>Java Spring Boot</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WifiProtectedSetupIcon color="secondary" />
      }
    ]
  },
  {
    title: 'Full-stack Developer',
    image: '/static/course/course_bootcampservice_fullstack.jpg',
    description:
      'Các lập trình viên cần phải có nhiều kỹ năng khác nhau và có kiến thức tổng hợp, tức là cả front end lẫn back end.',
    caption: 'Chương trình Full-stack chuyên sâu.',
    target:
      'Nắm vững các kiến thức về lập trình cơ bản và chuyên sâu, học viên có thể tham gia ứng tuyển trở thành lập trình viên sau khi kết thúc khóa học với mức lương khá cao đến từ các công ty Công nghệ.',
    course: [
      {
        semester: 'Học kỳ 1',
        subject: (
          <ul>
            <li>Ngôn ngữ C</li>
            <li>Front-end HTML5, CSS3</li>
            <li>Font-end Bootstrap</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WorkspacesIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 2',
        subject: (
          <ul>
            <li>OPP với C#, .NET</li>
            <li>Cơ sở dữ liệu</li>
            <li>Lập trình ứng dụng Windows</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <MoreVertIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 3',
        subject: (
          <ul>
            <li>Cấu trúc giải thuật</li>
            <li>Web API</li>
            <li>Androi cơ bản</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <SuperscriptIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 4',
        subject: (
          <ul>
            <li>Web ASP.NET</li>
            <li>DepOps</li>
            <li>Tối ưu Website</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <MoreVertIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 5',
        subject: (
          <ul>
            <li>Dự án tốt nghiệp</li>
            <li>UI/UX</li>
            <li>Tư duy khời nghiệp</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WifiProtectedSetupIcon color="secondary" />
      }
    ]
  },
  {
    title: 'Mobile Developer',
    image: '/static/course/course_bootcampservice_mobile.jpg',
    description:
      'Mobile Developer là người không chỉ code mà tham gia vào tất cả các giai đoạn của SDLC (Software Development Life Cycle – Quy trình phát triển phần mềm) trên thiết bị di động',
    caption: 'Chương trình Mobile Developer chuyên sâu.',
    target:
      'Nắm vững các kiến thức về lập trình Mobile, có thể tự xây dựng và phát triển các ứng dụng trên điện thoại hoặc làm những công việc liên quan đến lập trình.',
    course: [
      {
        semester: 'Học kỳ 1',
        subject: (
          <ul>
            <li>Flutter cơ bản/ nâng cao</li>
            <li>Reactnative cơ bản/ nâng cao</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WorkspacesIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 2',
        subject: (
          <ul>
            <li>React native</li>
            <li>React native nâng cao</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <SuperscriptIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 3',
        subject: (
          <ul>
            <li>Swift iOs cơ bản</li>
            <li>Swift iOs nâng cao</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WifiProtectedSetupIcon color="secondary" />
      }
    ]
  }
];

type MemberCardProps = {
  member: {
    title: string;
    image: string;
    description: string;
  };
};

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(10),
  background: theme.palette.background.neutral,
  paddingBottom: theme.spacing(6)
}));

const BoxImg = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: '100vw',
    height: '60vh',
    objectFit: 'cover'
  },
  [theme.breakpoints.down('md')]: {
    width: '100vw',
    height: '60vh',
    objectFit: 'cover'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
    height: 'auto',
    objectFit: 'cover'
  }
}));

function MemberCard({ member }: MemberCardProps) {
  const { title: name, image: avatar } = member;
  return <BoxImg src={avatar} />;
}

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity: number) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 600,
    minHeight: 340,
    margin: 'auto',
    position: 'relative',
    textAlign: 'center',
    padding: theme.spacing(0),
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
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 'auto'
    }
  };
});

// ----------------------------------------------------------------------

export default function BootcampService() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.down('sm'));
  const isDesktopMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const [course, setCourse] = useState(0);
  const [varFadeUp, setVarFadeUp] = useState(varFadeInUpCollapsed);
  const [expanded, setExpanded] = useState(false);
  const handleCourseClick = (index: number) => {
    setCourse(index);
    setExpanded(false);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Container maxWidth="md">
          <Box sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                BOOTCAMP
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <Typography
                sx={{
                  color: isLight ? 'text.secondary' : 'text.primary'
                }}
                variant="h6"
              >
                Bootcamp là hình thức đào tạo theo kiểu quân đội, là trại huấn luyện với các bài tập
                cường độ cao trong thời gian ngắn. Mô hình đào tạo này đã phổ biến trên thế giới từ
                lâu và chúng bắt đầu du nhập vào Việt Nam từ năm 2013.
              </Typography>
            </MotionInView>
          </Box>
        </Container>
        <Container>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
              <b>UniPro </b>cung cấp các khóa học
            </Typography>
          </MotionInView>
          <Box sx={{ mb: { xs: 5, md: 3 }, textAlign: 'center' }}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              orientation={isDesktop ? 'vertical' : 'horizontal'}
            >
              {BOOTCAMPCOURSE.map((bootcampcourse, index) => (
                <Button
                  key={`course-${index}`}
                  onClick={() => handleCourseClick(index)}
                  disabled={course == index}
                  style={{
                    position: 'relative',
                    marginBottom: course == index && isDesktop ? '30px' : '0'
                  }}
                >
                  {bootcampcourse}
                  {course == index &&
                    (isDesktop ? (
                      <span style={{ position: 'absolute', top: '100%' }}>
                        <MotionInView variants={varFadeInDown}>
                          <NavigationIcon
                            style={{
                              transform: 'rotate(180deg)'
                            }}
                            color="secondary"
                          />
                        </MotionInView>
                      </span>
                    ) : (
                      <span
                        style={{
                          position: 'absolute',
                          top: '100%',
                          width: '0',
                          height: '0',
                          borderLeft: '20px solid transparent',
                          borderRight: '5px solid transparent',
                          borderTop: '15px solid rgba(221, 225, 230, 1)'
                        }}
                      />
                    ))}
                  {/* } */}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
        </Container>
        <MotionInView variants={varFadeInUp}>
          <Stack py={4} alignItems="center">
            <CardStyle
              onMouseOver={() => {
                if (!isDesktop) {
                  setVarFadeUp(varFadeInUpExpanded);
                }
              }}
              onMouseLeave={() => {
                if (!isDesktop) {
                  setVarFadeUp(varFadeInUpCollapsed);
                }
              }}
            >
              <MemberCard member={COURSEDETAILS[course]} />
              <MotionInView
                variants={isDesktop ? varFadeInUp : varFadeUp}
                style={{ height: !isDesktop ? '0px' : 'auto' }}
              >
                <div
                  style={{
                    backgroundColor: isDesktop
                      ? 'rgba(255, 255, 255, 1)'
                      : 'rgba(120, 120, 120, 0.3)',
                    pointerEvents: 'none'
                  }}
                >
                  <Typography
                    variant="h5"
                    paragraph
                    sx={{ color: isLight ? 'common.black' : 'common.black', py: 1 }}
                  >
                    {COURSEDETAILS[course].title}
                  </Typography>
                  <Typography
                    sx={{ color: isDesktop ? 'common.black' : 'common.white', px: 3, pb: 2 }}
                    variant="h6"
                  >
                    {COURSEDETAILS[course].description}
                  </Typography>
                  <CardActions disableSpacing sx={{ px: 3, pb: 3 }}>
                    <IconButton aria-label="add to favorites" disabled>
                      <FavoriteIcon color="error" />
                    </IconButton>
                    <IconButton aria-label="share" disabled>
                      <ShareIcon color="info" />
                    </IconButton>
                    <Button
                      onClick={handleExpandClick}
                      style={{ pointerEvents: 'auto', marginLeft: 'auto', fontSize: 'h6' }}
                    >
                      {expanded ? 'Ẩn' : 'Chi tiết...'}
                    </Button>
                  </CardActions>
                </div>
              </MotionInView>
            </CardStyle>
            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ pt: 4 }}>
              <Container maxWidth="md">
                <MotionInView variants={varFadeInUp}>
                  <Card style={{ boxShadow: '-5px -10px rgba(255, 165, 0, 0.4)' }}>
                    <Typography
                      variant="h5"
                      paragraph
                      sx={{ color: isLight ? 'common.black' : 'common.black', px: 3, py: 3 }}
                      align="center"
                    >
                      {COURSEDETAILS[course].caption}
                    </Typography>
                  </Card>
                </MotionInView>
              </Container>
              <Timeline style={{ width: '70vw' }}>
                {COURSEDETAILS[course].course.map((courseItem, index) => (
                  <TimelineItem key={`method-${index}`}>
                    <TimelineOppositeContent
                      sx={{ m: 'auto 0' }}
                      align="right"
                      variant="h6"
                      color="text.secondary"
                      style={{ flex: isDesktop ? 2 : 1 }}
                    >
                      {courseItem.time}
                    </TimelineOppositeContent>
                    <TimelineSeparator style={{ flex: 0 }}>
                      <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                      <TimelineDot color="primary" variant="filled">
                        {courseItem.icon}
                      </TimelineDot>
                      <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }} style={{ flex: isDesktop ? 6 : 1 }}>
                      <MotionInView variants={index % 2 ? varFadeInRight : varFadeInLeft}>
                        <Typography variant="h5" component="span">
                          {courseItem.semester}
                        </Typography>
                        <Typography
                          sx={{ color: isLight ? 'text.secondary' : 'common.white' }}
                          align="left"
                          variant="h6"
                        >
                          {courseItem.subject}
                        </Typography>
                      </MotionInView>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
              <Container maxWidth="md">
                <MotionInView variants={varFadeInUp}>
                  <Card style={{ boxShadow: '5px 10px rgba(255, 165, 0, 0.4)' }}>
                    <Typography
                      variant="h6"
                      paragraph
                      sx={{ color: isLight ? 'common.black' : 'common.black', px: 3, py: 3 }}
                      align="center"
                    >
                      <Stack direction="row">
                        <Stack sx={{ flex: 0 }}>
                          <motion.div
                            animate={{ x: [-20, 0, -20] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <SendIcon color="secondary" />
                          </motion.div>
                        </Stack>
                        <Stack>{COURSEDETAILS[course].target}</Stack>
                      </Stack>
                    </Typography>
                  </Card>
                </MotionInView>
              </Container>
            </Collapse>
          </Stack>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
