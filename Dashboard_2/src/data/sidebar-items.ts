import { IoMdLock } from 'react-icons/io';
import {
  LuBarChart3,
  LuBox,
  LuLayoutGrid,
  LuMail,
  LuUser2,
  LuWallet,
  LuChevronDown,
} from 'react-icons/lu';
import { TbSettings2 } from 'react-icons/tb';

export interface SidebarItemProps {
  label: string;
  icon: React.ElementType;
  href?: string;
  isActive?: boolean;
  badge?: number;
  extraIcon?: React.ElementType;
  extraLabels?: {
    label: string;
    href: string;
  }[];
}

export const sidebarItemsMenu: SidebarItemProps[] = [
  { label: 'Overview', icon: LuLayoutGrid, href: '/' },
  { label: 'Statistics', icon: LuBarChart3, href: '/statistics' },
  { label: 'Customers', icon: LuUser2, href: '/customers' },
  {
    label: 'Product',
    extraLabels: [
      { label: 'Product 1', href: '' },
      { label: 'Product 2', href: '' },
    ],
    icon: LuBox,
    href: '/product',
    extraIcon: LuChevronDown,
  },
  { label: 'Messages', icon: LuMail, href: '/messages', badge: 13 },
  { label: 'Transactions', icon: LuWallet, href: '/transactions' },
];

export const sidebarItemsGeneral: SidebarItemProps[] = [
  { label: 'Settings', icon: TbSettings2 },
  { label: 'Security', icon: IoMdLock },
];
