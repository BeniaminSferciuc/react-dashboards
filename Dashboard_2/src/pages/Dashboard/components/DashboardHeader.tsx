import { DatePickerWithRange } from '@/components/DateRangePicker';

export const DashboardHeader = () => (
  <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      <h1>Dashboard</h1>
      <p className="mt-1 text-sm tracking-tight text-[#5F5F5F]">
        An any way to manage sales with care and precision.
      </p>
    </div>
    <div className="ml-auto">
      <DatePickerWithRange />
    </div>
  </header>
);
