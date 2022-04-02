import { styled } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

export const TitleStyle = styled(motion.div)(() => ({
  width: '100%',
  position: 'absolute',
  top: '0px',
  left: '50%',
  transform: 'translate(-50%, -100%)',
  display: 'flex',
  justifyContent: 'center'
}));

const TitleCard = styled(TitleStyle)(() => ({
  height: 'auto',
  width: 'auto',
  padding: '7px 10px 5px',
  backgroundColor: 'rgb(255, 165, 0)',
  borderRadius: '20px 20px 0 0',
  textAlign: 'center'
}));

export default TitleCard;
