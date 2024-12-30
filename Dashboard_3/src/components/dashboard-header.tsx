import { ExportFile } from "@/assets/icons";
import { DatePicker } from "./date-picker";
import { Button } from "./ui/button";

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <h1 className="text-xl font-medium">Dashboard</h1>
        <p className="text-sm text-neutral-400">
          Welcome to the NexaFlow dashboard.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <DatePicker />
        <Button variant="primary">
          <ExportFile className="!size-5" />
          <span className="text-inherit">Export</span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
