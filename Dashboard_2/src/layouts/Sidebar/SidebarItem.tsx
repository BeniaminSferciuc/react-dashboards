import { useState } from 'react';
import { SidebarItemProps } from '@/data/sidebar-items';
import { Badge } from '@/components/ui/badge';
import { NavLink } from 'react-router-dom';

const ICON_SIZE = 22.5;

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon: Icon,
  isActive = false,
  badge,
  extraIcon: ExtraIcon,
  extraLabels,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const iconStyles: React.CSSProperties = {
    stroke: isActive ? '#ADDE34' : '#FFF',
    strokeWidth: 1.75,
  };

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <div
        className={`group flex cursor-pointer items-center gap-2 px-6 py-2 ${
          isActive
            ? 'relative before:absolute before:left-0 before:h-8 before:w-2.5 before:-translate-x-1/2 before:rounded-3xl before:bg-_secondary'
            : ''
        }`}
        onClick={handleToggle}
      >
        <Icon size={ICON_SIZE} style={iconStyles} />
        <p
          className={`mr-2 text-sm font-[400] group-hover:opacity-100 ${
            isActive ? '' : 'opacity-60'
          }`}
        >
          {label}
        </p>
        {badge && (
          <Badge className="rounded-full bg-_secondary font-[MonaSans] font-bold text-_primary hover:bg-_secondary">
            {badge}
          </Badge>
        )}
        {ExtraIcon && (
          <ExtraIcon size={ICON_SIZE} className="ml-auto text-white" />
        )}
      </div>
      {isExpanded && extraLabels && (
        <div className="space-y-2 pl-[56px]">
          {extraLabels.map((extraLabel, index) => (
            <NavLink
              key={index}
              to={extraLabel.href}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
            >
              <div className="aspect-square w-[8px] rounded-full bg-gray-400" />
              <span>{extraLabel.label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
