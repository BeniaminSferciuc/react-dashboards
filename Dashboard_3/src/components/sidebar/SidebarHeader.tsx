import { SidebarHeader, SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import logo from "@/assets/images/logo.png";

export const CustomSidebarHeader = () => {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <div className="flex items-center justify-between -mt-2">
            <div className="flex items-center space-x-1">
              <img src={logo} alt="logo" className="size-12" />
              <h1 className="text-[20px] text-[] font-[600]">NexaFlow</h1>
            </div>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};
