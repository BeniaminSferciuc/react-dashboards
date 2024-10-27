import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LuMenu } from 'react-icons/lu';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from '@/layouts/Sidebar/Sidebar';
import { useMediaQuery } from 'usehooks-ts';
import MobileMenu from './MobileMenu';
import RenderIcons from './RenderIcons';
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  const matches = useMediaQuery('(min-width: 640px)');
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close the sidebar whenever the location changes (i.e., when navigation occurs)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  return (
    <div className="flex items-center justify-between border-b-2 p-4 sm:-mt-0">
      <div className="flex items-center">
        {!matches && (
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger>
              <LuMenu size={24} />
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>
        )}
        <Select defaultValue="admin">
          <SelectTrigger className="w-fit gap-4 border-none text-xl font-semibold shadow-none focus:ring-0">
            <SelectValue placeholder="Sales Admin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Sales Admin</SelectItem>
            <SelectItem value="juridic">Sales Juridic</SelectItem>
            <SelectItem value="guest">Guest</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-4 lg:gap-16">
        <SearchBar />
        <div className="hidden gap-2 sm:flex">
          <RenderIcons />
        </div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
