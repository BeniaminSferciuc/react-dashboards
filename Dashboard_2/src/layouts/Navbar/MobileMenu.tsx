import {
  IconTablerChartBubble,
  IconTablerCirclePlus,
  IconTablerInbox,
  IconTablerLayoutNavbarExpand,
} from '@/assets/icons/NavbarIcons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';

interface IconButtonProps {
  icon: React.ReactNode;
  notification?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, notification }) => (
  <Button variant="outline" size="icon" className="relative rounded-full">
    {icon}
    {notification && (
      <div className="absolute left-[1.15rem] top-2.5 box-content aspect-square w-1 rounded-full border-2 border-white bg-green-500" />
    )}
  </Button>
);

const MobileMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger className="sm:hidden">
      <IconTablerLayoutNavbarExpand />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="z-20 mt-2 flex w-fit min-w-[none] flex-col gap-2 border-none bg-transparent shadow-none">
      <DropdownMenuItem className="bg-white focus:bg-transparent">
        <IconButton icon={<IconTablerInbox />} notification />
      </DropdownMenuItem>
      <DropdownMenuItem className="bg-white focus:bg-transparent">
        <IconButton icon={<IconTablerChartBubble />} />
      </DropdownMenuItem>
      <DropdownMenuItem className="bg-white focus:bg-transparent">
        <Button
          variant="outline"
          className="flex h-9 w-9 items-center gap-2 rounded-full p-0"
        >
          <IconTablerCirclePlus />
        </Button>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default MobileMenu;
