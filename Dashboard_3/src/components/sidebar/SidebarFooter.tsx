import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import user from "@/assets/images/user.png";
import { Logout, ChevronDown } from "@/assets/icons";

export const CustomSidebarFooter = () => {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <div className="flex items-center space-x-2 bg-white rounded-lg border border-[#E5E7EB] px-3 py-[6px]">
            <img src={user} alt="User" className="size-10" />
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col text-base font-medium">
                <h2 className="">James Blake</h2>
                <span className="text-sm text-neutral-500">
                  jamesblake@gmail.com
                </span>
              </div>
              <ChevronDown size={20} />
            </div>
          </div>
          <SidebarMenuButton asChild>
            <a href="logout">
              <Logout className="!size-6" />
              <span className="text-[#292D32] text-[15px] font-normal">
                Logout
              </span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};
