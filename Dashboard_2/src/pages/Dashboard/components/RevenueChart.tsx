import { Bar, BarChart, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Separator } from '@/components/ui/separator';

import { FaArrowTrendUp } from 'react-icons/fa6';

const chartData = [
  { month: 'January', income: 186, expenses: 80 },
  { month: 'February', income: 305, expenses: 200 },
  { month: 'March', income: 237, expenses: 120 },
  { month: 'April', income: 73, expenses: 190 },
  { month: 'May', income: 209, expenses: 130 },
  { month: 'June', income: 214, expenses: 140 },
];

const chartConfig = {
  income: {
    label: 'Income',
    color: '#275347',
  },
  expenses: {
    label: 'Expenses',
    color: '#ADDE34',
  },
} satisfies ChartConfig;

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Revenue</CardTitle>
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5">
              <div className="h-4 w-4 rounded-sm bg-[#275347]" />
              <span className="text-xs font-medium">Income</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-4 w-4 rounded-sm bg-_secondary" />
              <span className="text-xs font-medium">Expenses</span>
            </div>
          </div>
        </div>
        <Separator />
        <CardDescription className="flex items-end gap-2">
          <span className="mt-2 text-4xl font-medium text-black">$193.000</span>
          <div className="flex items-center gap-2">
            <FaArrowTrendUp className="text-green-500" />
            <span className={`font-semibold text-green-500`}>35%</span>
            <span className="tracking-tight">from last month</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer config={chartConfig} className="max-h-[180px] w-full">
          <BarChart accessibilityLayer data={chartData} barGap={0}>
            <XAxis axisLine={true} tick={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="income"
              fill="var(--color-income)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="expenses"
              fill="var(--color-expenses)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
