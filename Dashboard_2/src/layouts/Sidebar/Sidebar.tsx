import React from 'react';
import { IoIosFlower } from 'react-icons/io';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

import { sidebarItemsGeneral, sidebarItemsMenu } from '@/data/sidebar-items';
import Profile from '@/layouts/Sidebar/Profile';
import SidebarSection from '@/layouts/Sidebar/SidebarSection';

const Sidebar: React.FC = () => {
  return (
    <ScrollArea className="h-full bg-_primary text-white sm:block">
      <nav>
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2 p-6">
            <IoIosFlower className="text-_secondary" size={32} />
            <h1>Siohioma</h1>
          </div>
          <SidebarSection title="MENU" items={sidebarItemsMenu} isMenu />
          <div className="px-6 py-4">
            <Separator className="opacity-10" />
          </div>
          <SidebarSection title="GENERAL" items={sidebarItemsGeneral} />
        </div>
        <div className="bottom-0 mb-6 w-full h-sm:absolute">
          <div className="px-6 py-4">
            <Separator className="opacity-10" />
          </div>
          <Profile />
        </div>
      </nav>
    </ScrollArea>
  );
};

export default Sidebar;
