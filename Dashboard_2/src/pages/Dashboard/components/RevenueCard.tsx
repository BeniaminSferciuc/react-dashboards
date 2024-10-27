import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactElement } from 'react';
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';

type UpdateCardProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  date: string;
  description: string;
  percentage: string;
  timeFrame: string;
};

export const UpdateCard = ({
  title,
  date,
  description,
  percentage,
  timeFrame,
  className,
  ...props
}: UpdateCardProps) => (
  <div className={cn('rounded-2xl bg-_primary p-4', className)} {...props}>
    <div className="flex items-center gap-2">
      <StatusIndicator color="red" />
      <span className="text-white">{title}</span>
    </div>
    <div className="mt-4 text-sm text-white/50">{date}</div>
    <div className="text-lg tracking-tight text-white">
      {description} <br />
      <span className="text-_secondary">{percentage}</span> in {timeFrame}
    </div>
    <div className="mt-6 flex items-center gap-1 text-xs text-white/50">
      See Statistics <IoIosArrowForward />
    </div>
  </div>
);

type RevenueCardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  iconOptions?: ReactElement;
  total: number[];
};

export const RevenueCard = ({
  title,
  iconOptions,
  total,
  className,
  ...props
}: RevenueCardProps) => {
  const trend = total[1] > total[0];
  const percentageChange = ((total[1] - total[0]) / total[0]) * 100;
  const trendIcon = trend ? (
    <FaArrowTrendUp className="text-green-500" />
  ) : (
    <FaArrowTrendDown className="text-red-500" />
  );
  const trendColor = trend ? 'text-green-500' : 'text-red-500';

  return (
    <div
      className={cn(
        'flex flex-col justify-between rounded-2xl border-[2px] p-4',
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between font-medium">
        <h2>{title}</h2>
        {iconOptions}
      </div>
      <div className="mt-6 flex text-5xl font-medium">
        <span className="-mt-1 text-xl">$</span>
        <span>{total[1].toLocaleString('de-DE')}</span>
      </div>
      <div className="mt-6 text-sm">
        <div className="flex items-center gap-2">
          {trendIcon}
          <span className={`font-semibold ${trendColor}`}>
            {percentageChange.toFixed(0)}%
          </span>
          <span className="tracking-tight">from last month</span>
        </div>
      </div>
    </div>
  );
};

const StatusIndicator = ({ color }: { color: string }) => (
  <div className={`w-fit rounded-full border-[6px] border-${color}-500/25`}>
    <div className={`h-2 w-2 rounded-full bg-${color}-500`} />
  </div>
);
