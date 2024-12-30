import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

import { CustomSidebarHeader } from "@/components/sidebar/SidebarHeader";
import { SidebarList } from "@/components/sidebar/SidebarList";
import { items } from "@/data/sidebarItems";
import { CustomSidebarFooter } from "./SidebarFooter";

export function AppSidebar() {
  return (
    <Sidebar className="py-3 border-none rounded-xl">
      <CustomSidebarHeader />
      <SidebarContent className="scroll-bar">
        <SidebarList title="main menu" items={items.main} />
        <SidebarList title="management" items={items.management} />
        <SidebarList title="other menu" items={items.others} />
      </SidebarContent>
      <CustomSidebarFooter />
    </Sidebar>
  );
}
