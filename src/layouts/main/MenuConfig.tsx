import { Box } from '@material-ui/core';
import ApartmentIcon from '@material-ui/icons/Apartment';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

export const rightMenuConfig = [
  {
    title: 'Trang chủ',
    path: '/',
    icon: <ApartmentIcon {...ICON_SIZE} />
  },
  {
    title: 'Khóa học',
    path: '/khoa-hoc',
    icon: <Box component="img" src="/static/icons/ic_rocket.svg" {...ICON_SIZE} />
  },
  { title: 'Khách hàng', path: '/client', icon: <PeopleAltIcon {...ICON_SIZE} /> },
  {
    title: 'Theo yêu cầu',
    path: '/on-demand',
    icon: <Box component="img" src="/static/icons/ic_demand.svg" {...ICON_SIZE} />
  }
];
