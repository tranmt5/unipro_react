import { useRef, useState } from 'react';
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
import { Box, Card, Container, Typography, useMediaQuery, Button, Stack } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WorkspacesIcon from '@material-ui/icons/Workspaces';
import SuperscriptIcon from '@material-ui/icons/Superscript';
import WifiProtectedSetupIcon from '@material-ui/icons/WifiProtectedSetup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
//---------------------------------------------------------------------
import { BOOTCAMPCOURSE, COURSEDETAILS } from '../../../utils/mock-data/course';
import {
  varFadeInUp,
  MotionInView,
  varFadeInDown,
  varFadeInUpCollapsed,
  varFadeInUpExpanded,
  varFadeInRight,
  varFadeInLeft,
  varWrapEnter
} from '../../animate';
import { TitleCardCircle } from '../../TitleCard';
// ----------------------------------------------------------------------

type MemberCardProps = {
  member: {
    title: string;
    image: string;
    description: string;
  };
};

const RootStyle = styled(motion.div)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  background: theme.palette.background.default,
  paddingBottom: theme.spacing(16),
  position: 'relative',
  borderTop: '2px solid rgb(255, 165, 0)'
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
  const isDesktopMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [varFadeUp, setVarFadeUp] = useState(varFadeInUpCollapsed);
  const [expanded, setExpanded] = useState(false);

  const handleCourseClick = (index: number) => {
    setSelectedCourseIndex(index);
    setExpanded(false);
    if (isDesktop) {
      setOpen(false);
    }
  };

  // handle toggle bootcamp detail component
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // set menu item for Media sm down
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClick = () => {
    console.info(`You clicked`);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    setOpen(false);
  };

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <div
        style={{
          top: '0px',
          position: 'absolute',
          borderTop: '10px solid rgb(255, 165, 0)',
          borderRight: '50vw solid transparent',
          borderLeft: '50vw solid transparent'
        }}
      />
      <TitleCardCircle>
        <MotionInView variants={varFadeInDown}>
          <motion.div
            animate={{ rotateZ: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <BrightnessHighIcon color="secondary" style={{ fontSize: '40px' }} />
          </motion.div>
        </MotionInView>
      </TitleCardCircle>
      <Container maxWidth="md">
        <Box sx={{ mb: { xs: 4, md: 4 }, textAlign: 'center' }}>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              BOOTCAMP
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <Typography
              sx={{
                color: isLight ? 'text.secondary' : 'text.primary',
                textAlign: 'justify',
                px: 2
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
      <Container maxWidth="md">
        <MotionInView variants={varFadeInDown}>
          <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
            <b>UniPro </b>cung cấp các khóa học
          </Typography>
        </MotionInView>
        <Box sx={{ mb: { xs: 2, md: 2 }, textAlign: 'center' }}>
          {isDesktop ? (
            <div>
              <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                <Button onClick={handleClick}>{BOOTCAMPCOURSE[selectedCourseIndex]}</Button>
                <Button
                  size="small"
                  aria-controls={open ? 'split-button-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
                >
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu">
                          {BOOTCAMPCOURSE.map((bootcampcourse, index) => (
                            <MenuItem
                              key={`course ${index}`}
                              disabled={index === selectedCourseIndex}
                              selected={index === selectedCourseIndex}
                              onClick={() => handleCourseClick(index)}
                            >
                              {bootcampcourse}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          ) : (
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              orientation="horizontal"
            >
              {BOOTCAMPCOURSE.map((bootcampcourse, index) => (
                <Button
                  key={`course-${index}`}
                  onClick={() => handleCourseClick(index)}
                  disabled={selectedCourseIndex == index}
                >
                  {bootcampcourse}
                  {selectedCourseIndex == index && (
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
                  )}
                </Button>
              ))}
            </ButtonGroup>
          )}
        </Box>
      </Container>
      <Container maxWidth="md">
        <MotionInView variants={varFadeInUp}>
          <Stack py={2} alignItems="center">
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
              <MemberCard member={COURSEDETAILS[selectedCourseIndex]} />
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
                    variant="h4"
                    paragraph
                    sx={{ color: isLight ? 'common.black' : 'common.black', py: 1 }}
                  >
                    {COURSEDETAILS[selectedCourseIndex].title}
                  </Typography>
                  <Typography
                    sx={{
                      color: isDesktop ? 'text.secondary' : 'common.white',
                      px: 2,
                      pb: 2,
                      textAlign: 'justify'
                    }}
                    variant="h6"
                  >
                    {COURSEDETAILS[selectedCourseIndex].description}
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
                      aria-label="learn more"
                    >
                      {expanded ? 'ẨN' : 'CHI TIẾT...'}
                    </Button>
                  </CardActions>
                </div>
              </MotionInView>
            </CardStyle>
            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ pt: 4 }}>
              <MotionInView variants={varFadeInUp}>
                <Card style={{ boxShadow: '-5px -10px rgba(255, 165, 0, 0.4)' }}>
                  <Typography
                    variant="h4"
                    paragraph
                    sx={{ color: isLight ? 'common.black' : 'common.black', px: 3, py: 3 }}
                    align="center"
                  >
                    {COURSEDETAILS[selectedCourseIndex].caption}
                  </Typography>
                </Card>
              </MotionInView>
              <Timeline style={{ width: '70vw' }}>
                {COURSEDETAILS[selectedCourseIndex].course.map((courseItem, index) => (
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
              <MotionInView variants={varFadeInUp}>
                <Card style={{ boxShadow: '5px 10px rgba(255, 165, 0, 0.4)' }}>
                  <Typography
                    variant="h6"
                    paragraph
                    sx={{ color: isLight ? 'common.black' : 'common.black', px: 2, py: 3 }}
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
                      <Stack textAlign="justify">{COURSEDETAILS[selectedCourseIndex].target}</Stack>
                    </Stack>
                  </Typography>
                </Card>
              </MotionInView>
            </Collapse>
          </Stack>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
