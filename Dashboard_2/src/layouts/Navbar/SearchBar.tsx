import { Input } from '@/components/ui/input';
import { LuSearch } from 'react-icons/lu';
import { useMediaQuery } from 'usehooks-ts';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const SearchBar: React.FC = () => {
  const matches = useMediaQuery('(min-width: 640px)');

  return matches ? (
    <div className="relative sm:w-[90px] lg:w-[240px]">
      <Input
        className="rounded-full border-[#D7DBE0] pr-8 placeholder:text-xs placeholder:text-[#AFAFAF]"
        placeholder="Search anything in Siohioma"
      />
      <LuSearch className="absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2" />
    </div>
  ) : (
    <Dialog>
      <DialogTrigger>
        <LuSearch className="size-5" />
      </DialogTrigger>
      <DialogContent className="rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-left">Search anything</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <Input />
          <Button variant="outline">Search</Button>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
          magni eaque ab mollitia nisi dignissimos animi minima maiores illum
          quam.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;
