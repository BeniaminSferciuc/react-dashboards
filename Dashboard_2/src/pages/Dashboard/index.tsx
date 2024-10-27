import { BiDotsHorizontalRounded } from 'react-icons/bi';

import { DashboardHeader } from '@/pages/Dashboard/components/DashboardHeader';
import {
  RevenueCard,
  UpdateCard,
} from '@/pages/Dashboard/components/RevenueCard';
import TransactionsCard from '@/pages/Dashboard/components/TransactionsCard';
import { RiVipCrownFill } from 'react-icons/ri';
import { AsideDashboard } from './components/AsideDasboard';
import { RevenueChart } from './components/RevenueChart';
import { SalesChart } from './components/SalesChart';
import { Button } from '@/components/ui/button';
import { FaStarOfLife } from 'react-icons/fa';

const DashboardPage = () => {
  return (
    <div className="grid lg:grid-cols-[1fr_260px] 2xl:grid-cols-[1fr_320px]">
      <div className="mt-4 border-r-2 p-2 md:mt-0 md:p-4 lg:mb-20">
        <DashboardHeader />
        <div className="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-4">
          <UpdateCard
            title="Update"
            date="Feb 12th 2024"
            description="Sales revenue increased"
            percentage="40%"
            timeFrame="1 week"
          />
          <RevenueCard
            title="Net Income"
            iconOptions={<BiDotsHorizontalRounded size={24} />}
            total={[142962, 193000]}
          />
          <RevenueCard
            title="Total Return"
            iconOptions={<BiDotsHorizontalRounded size={24} />}
            total={[42000, 32000]}
          />
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2">
          <TransactionsCard />
          <div className="flex flex-1 flex-col gap-4">
            <RevenueChart />
            <div className="flex-1">
              <SalesChart />
            </div>
          </div>
        </div>
      </div>
      <aside className="space-y-4 p-2 lg:p-4">
        <AsideDashboard />
        <UpdateSiohioma />
      </aside>
    </div>
  );
};

const UpdateSiohioma = () => {
  return (
    <div className="relative h-fit overflow-hidden rounded-2xl bg-[#D7D9C8] p-6">
      <FaStarOfLife className="absolute -right-[50px] -top-[50px] size-[172px] text-_secondary" />
      <div className="relative z-10">
        <RiVipCrownFill className="mb-1 text-[#80B46A]" size={24} />
        <h2 className="mb-2 text-xl font-semibold tracking-tight">
          Lavel up your sales managing to the next level.
        </h2>
        <p className="mb-4 text-xs font-medium text-black/70">
          An any way to manage sales with care an precision.
        </p>
        <Button className="w-full rounded-lg bg-[#397968] text-xs font-normal">
          Update to Siohioma+
        </Button>
      </div>
    </div>
  );
};

export default DashboardPage;
