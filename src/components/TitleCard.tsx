import { styled } from '@material-ui/core/styles';
import { borderRight } from '@material-ui/system';
import { motion } from 'framer-motion';

export const TitleCenterStyle = styled(motion.div)(() => ({
  width: '100%',
  position: 'absolute',
  top: '0px',
  left: '50%',
  transform: 'translate(-50%, -100%)',
  display: 'flex',
  justifyContent: 'center'
}));

export const TitleLeftStyle = styled(motion.div)(() => ({
  width: '100%',
  position: 'absolute',
  top: '0%',
  transform: 'translate(0%, -100%)',
  display: 'flex',
  justifyContent: 'center'
}));

export const TitleRightStyle = styled(motion.div)(() => ({
  width: '100%',
  position: 'absolute',
  top: '0%',
  left: '100%',
  transform: 'translate(-100%, -100%)',
  display: 'flex',
  justifyContent: 'center'
}));

export const TitleCardSemicircle = styled(TitleCenterStyle)(({ theme }) => ({
  backgroundColor: 'rgb(255, 165, 0)',
  [theme.breakpoints.up('md')]: {
    height: '80px',
    width: '160px',
    padding: '40px 0 0 0',
    borderTopLeftRadius: '80px',
    borderTopRightRadius: '80px'
  },
  [theme.breakpoints.down('md')]: {
    height: '60px',
    width: '120px',
    padding: '28px 0 0 0',
    borderTopLeftRadius: '60px',
    borderTopRightRadius: '60px'
  }
}));

export const TitleCardTrapezoidLeft = styled(TitleLeftStyle)(({ theme }) => ({
  height: '50px',
  width: '200px',
  borderRadius: '0px 40px 0 0',
  borderRight: '20px solid transparent',
  borderLeft: '0px solid transparent',
  borderBottom: '50px solid rgb(255, 165, 0)'
}));

export const TitleCardTrapezoidRight = styled(TitleRightStyle)(({ theme }) => ({
  height: '50px',
  width: '270px',
  borderRadius: '40px 0 0 0',
  borderLeft: '20px solid transparent',
  borderRight: '0px solid transparent',
  borderBottom: '50px solid rgb(255, 165, 0)'
}));

export const TitleCardCircle = styled(TitleCenterStyle)(({ theme }) => ({
  transform: 'translate(-50%, -50%)',
  height: '60px',
  width: '60px',
  padding: '13px 0 0 0',
  backgroundColor: 'rgb(255, 165, 0)',
  borderRadius: '50%'
}));

const TitleCard = styled(TitleCenterStyle)(() => ({
  height: 'auto',
  width: 'auto',
  padding: '7px 10px 5px',
  backgroundColor: 'rgb(255, 165, 0)',
  borderRadius: '20px 20px 0 0',
  textAlign: 'center'
}));

export default TitleCard;
