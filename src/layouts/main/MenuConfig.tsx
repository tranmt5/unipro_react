import { Box } from '@material-ui/core';
import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import fileFill from '@iconify/icons-eva/file-fill';
import AppsIcon from '@material-ui/icons/Apps';
import ApartmentIcon from '@material-ui/icons/Apartment';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// routes
import { PATH_DASHBOARD, PATH_PAGE } from '../../routes/paths';
// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Sản phẩm',
    path: '/products',
    icon: <AppsIcon {...ICON_SIZE} />,
    children: [
      {
        subheader: 'Danh sách',
        items: [
          { title: 'Trực tiếp tới người dùng', path: PATH_PAGE.about },
          { title: 'Thị trường địa phương', path: PATH_PAGE.contact },
          { title: 'Headless-Commerce', path: PATH_PAGE.faqs }
        ]
      }
    ]
  },
  { title: 'Tính năng', path: '/features', icon: <FormatListBulletedIcon {...ICON_SIZE} /> }
];

export const rightMenuConfig = [
  {
    title: 'Trang chủ',
    path: '/home',
    icon: <ApartmentIcon {...ICON_SIZE} />
  },
  {
    title: 'Startup',
    path: '/start-up',
    icon: <Box component="img" src="/static/icons/ic_rocket.svg" {...ICON_SIZE} />
  },
  { title: 'Khách hàng', path: '/client', icon: <PeopleAltIcon {...ICON_SIZE} /> },
  {
    title: 'Theo yêu cầu',
    path: '/on-demand',
    icon: <Box component="img" src="/static/icons/ic_demand.svg" {...ICON_SIZE} />
  }
];

export default menuConfig;
