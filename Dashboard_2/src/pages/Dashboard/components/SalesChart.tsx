import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from 'recharts';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { month: 'Product Launched', desktop: 233 },
  { month: 'Ongoing Product', desktop: 143 },
  { month: 'Product Sold', desktop: 482 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#ADDE34',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
  label: {
    color: 'hsl(var(--background))',
  },
} satisfies ChartConfig;

const generateTicks = (maxValue: number, step: number) => {
  const ticks = [];
  for (let i = 0; i <= maxValue + 0.1 * maxValue; i += step) {
    ticks.push(i);
  }

  return ticks;
};

const maxDesktopValue = Math.max(...chartData.map((item) => item.desktop));
const ticks = generateTicks(maxDesktopValue, 100);

export function SalesChart() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>Sales Report</CardTitle>
        <BiDotsHorizontalRounded size={24} />
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[180px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} stroke="#E3E3E3" />
            <YAxis
              dataKey="month"
              type="category"
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis
              type="number"
              domain={['auto', 'auto']}
              ticks={ticks}
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="desktop"
              layout="vertical"
              fill="var(--color-desktop)"
              maxBarSize={24}
              radius={[0, 5, 5, 0]}
            >
              <LabelList
                dataKey="month"
                position="insideLeft"
                className="fill-[--color-label] font-medium"
                fontSize={14}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                formatter={(value: string) => `(${value})`}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
