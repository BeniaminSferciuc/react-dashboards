import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';

import { ScrollArea } from '@/components/ui/scroll-area';
import Navbar from '@/layouts/Navbar/Navbar';
import Sidebar from '@/layouts/Sidebar/Sidebar';

const RootLayout = () => {
  const matches = useMediaQuery('(min-width: 640px)');

  return (
    <div className="h-screen sm:p-1.5">
      <div className="h-full rounded-2xl sm:grid sm:grid-cols-[240px_1fr] sm:overflow-hidden sm:border">
        {matches && <Sidebar />}
        <main className="overflow-hidden">
          <Navbar />
          <ScrollArea className="mx-auto h-full max-w-screen-2xl">
            <Outlet />
          </ScrollArea>
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
