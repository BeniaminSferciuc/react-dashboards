import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/Sidebar";
import { DashboardCard } from "./components/dashboard-card";
import DashboardHeader from "./components/dashboard-header";

const App = () => {
  return (
    <SidebarProvider className="bg-[#FAFAFA] tracking-tight font-[Roboto]">
      <AppSidebar />
      <main className="w-full py-3 pl-2 pr-3">
        <div className="bg-white rounded-xl border-[1.5px] h-full p-3">
          <div className="max-w-screen-xl mx-auto">
            <DashboardHeader />
            <div className="flex flex-wrap gap-2">
              <DashboardCard
                title="Total Employees"
                value="234"
                increase={1.8}
                lastMonth="3"
              />
              <DashboardCard
                title="Attendance Rate"
                value="92%"
                increase={4.4}
                lastMonth="5,9%"
              />
              <DashboardCard
                title="Total Revenue"
                value="$ 16,150.56"
                increase={9.5}
                lastMonth="$ 1880.12"
              />
            </div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
};

export default App;
