import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import fileFill from '@iconify/icons-eva/file-fill';
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
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    children: [
      {
        subheader: 'Products',
        items: [
          { title: 'Direct-to-Consumer', path: PATH_PAGE.about },
          { title: 'Hyperlocal Marketplace', path: PATH_PAGE.contact },
          { title: 'Headless Commerce', path: PATH_PAGE.faqs }
        ]
      }
    ]
  },
  { title: 'Tính năng', path: PATH_DASHBOARD.root, icon: <Icon icon={fileFill} {...ICON_SIZE} /> }
];

export const rightMenuConfig = [
  {
    title: 'Doanh nghiệp',
    path: '/enterprise',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />
  },
  { title: 'Startup', path: '/startups', icon: <Icon icon={fileFill} {...ICON_SIZE} /> },
  { title: 'Khách hàng', path: '/clients', icon: <Icon icon={fileFill} {...ICON_SIZE} /> },
  { title: 'Bảng giá', path: '/pricing', icon: <Icon icon={fileFill} {...ICON_SIZE} /> }
];

export default menuConfig;
