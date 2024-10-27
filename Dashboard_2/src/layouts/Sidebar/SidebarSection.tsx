import { NavLink } from 'react-router-dom';

import { SidebarItemProps } from '@/data/sidebar-items';
import SidebarItem from '@/layouts/Sidebar/SidebarItem';

interface SidebarSectionProps {
  title: string;
  items: SidebarItemProps[];
  isMenu?: boolean;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  items,
  isMenu = false,
}) => (
  <>
    <h2 className="mb-4 px-6 text-xs tracking-widest">{title}</h2>
    <div>
      {items.map(({ label, icon, href, badge, extraIcon, extraLabels }) =>
        isMenu && href ? (
          <NavLink to={href} key={label}>
            {({ isActive }) => (
              <SidebarItem
                label={label}
                icon={icon}
                href={href}
                isActive={isActive}
                badge={badge}
                extraIcon={extraIcon}
                extraLabels={extraLabels}
              />
            )}
          </NavLink>
        ) : (
          <SidebarItem key={label} label={label} icon={icon} badge={badge} />
        )
      )}
    </div>
  </>
);

export default SidebarSection;
