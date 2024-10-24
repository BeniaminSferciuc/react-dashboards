import { Button } from "@/components/ui/button"

import { IoClose } from "react-icons/io5"
import { IoFilter } from "react-icons/io5"
import { FiSearch } from "react-icons/fi"

const FilterSection = () => {
    return (
        <div className="mt-8 flex flex-col justify-between px-4 md:flex-row md:items-center">
            <div className="order-2 flex flex-wrap items-center gap-2 md:order-1 md:flex-nowrap">
                <Button
                    variant="outline"
                    className="order-2 gap-2 bg-[#EDF3FF] font-['poppins'] text-sm text-brand border-0"
                >
                    <div>All time</div>
                    <IoClose size={20} />
                </Button>
                <Button
                    variant="outline"
                    className="order-3 gap-2 bg-[#EDF3FF] font-['poppins'] text-xs text-brand border-0"
                >
                    <div>US, AU +4</div>
                    <IoClose size={20} />
                </Button>
                <Button
                    variant="outline"
                    className="order-1 mt-2 w-full font-['poppins'] text-xs text-muted-foreground md:order-3 md:mt-0"
                >
                    <IoFilter className="mr-2 h-4 w-4" /> More filters
                </Button>
            </div>
            <div className="relative order-1 w-full rounded-md border-2 border-secondary p-1 md:w-[250px]">
                <FiSearch className="absolute left-2 top-[50%] translate-y-[-50%] text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-1 pl-8 pr-2 font-['poppins'] text-xs text-muted-foreground placeholder:font-['poppins'] focus:outline-none"
                />
            </div>
        </div>
    )
}

export default FilterSection
