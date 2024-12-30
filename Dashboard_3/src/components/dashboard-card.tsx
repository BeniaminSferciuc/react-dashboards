import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CircleArrowDown, Info, More } from "@/assets/icons/index";

type DashboardCardProps = {
  title: string;
  value: string;
  increase: number;
  lastMonth: string;
};

export const DashboardCard = ({
  title,
  value,
  increase,
  lastMonth,
}: DashboardCardProps) => {
  const isPositive = increase > 0;

  return (
    <Card className="flex-1 p-4 space-y-4 min-w-[320px]">
      <CardHeader className="p-0">
        <CardTitle className="flex items-center justify-between text-base">
          <div className="flex items-center gap-2">
            <h2 className="text-xl">{title}</h2>
            <Info size={18} className="text-neutral-400" />
          </div>
          <div className="border-[1.5px] rounded-md">
            <More />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex items-center gap-4">
          <span className="text-4xl font-semibold">{value}</span>
          <Badge
            variant={isPositive ? "success" : "error"}
            className="px-1.5 py-0.5 space-x-2 rounded-lg"
          >
            <CircleArrowDown
              className={`${isPositive ? "rotate-180" : ""}`}
              size={20}
            />{" "}
            <span>{increase}%</span>
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="p-0">
        <div className="flex items-center justify-between w-full bg-[#FAFAFA] border border-[#EDEDED] px-3 py-[10px] rounded-lg">
          <div>
            <span className="text-sm text-gray-500 ">
              <span className="font-semibold">+{lastMonth}</span> from last
              month
            </span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-sm">See details</span>
            <ArrowRight size={18} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
