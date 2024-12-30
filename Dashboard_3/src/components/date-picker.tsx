import * as React from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar2, ChevronDown } from "@/assets/icons";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>(new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-fit justify-start text-left font-normal rounded-lg px-2 gap-6",
            !date && "text-muted-foreground"
          )}
        >
          <div className="flex gap-2">
            <Calendar2 className="!size-5" />
            {date ? format(date, "MMMM") : <span>Pick a date</span>}
          </div>
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(day) => {
            if (day) setDate(day);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
