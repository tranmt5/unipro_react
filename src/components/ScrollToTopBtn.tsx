import { Fab } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import useOffSetTop from 'hooks/useOffSetTop';
import { HashLink } from 'react-router-hash-link';

const FabStyle = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: theme.zIndex.appBar
}));

const ScrollToTop = () => {
  const inView = useOffSetTop(200);
  return (
    <HashLink smooth to="#top">
      <FabStyle sx={{ display: inView ? 'block' : 'none' }} color="primary" aria-label="add1">
        <ArrowUpwardIcon sx={{ color: 'white' }} />
      </FabStyle>
    </HashLink>
  );
};
export default ScrollToTop;
