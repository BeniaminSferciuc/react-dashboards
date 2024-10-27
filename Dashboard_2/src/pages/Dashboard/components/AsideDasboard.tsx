import * as React from 'react';
import { Label, Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { Button } from '@/components/ui/button';
import { useMediaQuery } from 'usehooks-ts';

const chartData = [
  { browser: 'chrome', visitors: 61, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 16, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 23, fill: 'var(--color-firefox)' },
];

const chartConfig = {
  chrome: {
    label: 'Chrome',
    color: '#ADDE34',
  },
  safari: {
    label: 'Safari',
    color: '#F9A23F',
  },
  firefox: {
    label: 'Firefox',
    color: '#397968',
  },
} satisfies ChartConfig;

export function AsideDashboard() {
  const matches = useMediaQuery('(min-width: 1536px)');
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.95;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <g>
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="1"
              stdDeviation="2"
              floodColor="#000"
              floodOpacity="0.15"
            />
          </filter>
        </defs>
        <circle
          cx={x}
          cy={y}
          r={20}
          fill="white"
          className="shadow-sm"
          filter="url(#shadow)"
        />{' '}
        <text
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-black text-xs"
        >
          {(percent * 100).toFixed(0)}%
        </text>
      </g>
    );
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-4">
        <CardTitle className="text-nowrap text-center text-sm tracking-tight">
          Total View Performance
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="pb- flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square">
          <PieChart className="p-4 pt-0">
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={matches ? 65 : '70%'}
              outerRadius={matches ? 100 : '90%'}
              strokeWidth={5}
              label={renderCustomLabel}
              labelLine={false}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 14}
                          className="fill-muted-foreground"
                        >
                          Total Count
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 14}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}K
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="-mx-2 flex-col gap-2 text-sm">
        <CardDescription className="mt-4 text-center text-xs tracking-tight text-neutral-500 md:mt-0">
          Here are some tips on how to improve your score.
        </CardDescription>
        <Button variant="outline" className="my-4 w-full border-2">
          Guide Views
        </Button>
        <Separator />
        <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-4 sm:justify-normal">
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-4 rounded-sm bg-_secondary" />
            <span className="text-xs font-medium">View Count</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-4 rounded-sm bg-[#275347]" />
            <span className="text-xs font-medium">Percentage</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-4 rounded-sm bg-[#F8A33F]" />
            <span className="text-xs font-medium">Sales</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
