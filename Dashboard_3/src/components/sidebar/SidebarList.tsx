import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
} from "../ui/sidebar";

type IconProps = {
  className?: string;
  size?: number;
};

type SidebarListProps = {
  title: string;
  items: {
    title: string;
    url: string;
    icon: ({ className, size }: IconProps) => JSX.Element;
    badge?: number;
  }[];
};

export const SidebarList = ({ title, items }: SidebarListProps) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="uppercase text-sm font-normal text-[#292D32] ">
        {title}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title} className="">
              <SidebarMenuButton asChild isActive={item.url === "dashboard"}>
                <a href={item.url}>
                  <item.icon className="!size-6" />
                  <span className="text-[#292D32] text-[15px]">
                    {item.title}
                  </span>
                </a>
              </SidebarMenuButton>
              {item.badge && (
                <SidebarMenuBadge className="mt-1 bg-white border">
                  {item.badge}
                </SidebarMenuBadge>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
