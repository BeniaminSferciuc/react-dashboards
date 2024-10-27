import {
  IconTablerChartBubble,
  IconTablerCirclePlus,
  IconTablerInbox,
} from '@/assets/icons/NavbarIcons';
import { Button } from '@/components/ui/button';

// IconButton Component
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

const RenderIcons = () => (
  <>
    <IconButton icon={<IconTablerInbox />} notification />
    <IconButton icon={<IconTablerChartBubble />} />
    <Button
      variant="outline"
      className="flex h-9 w-9 items-center gap-2 rounded-full p-0 lg:w-fit lg:px-4 lg:py-2"
    >
      <span className="hidden lg:block">Add new product</span>
      <IconTablerCirclePlus />
    </Button>
  </>
);

export default RenderIcons;
