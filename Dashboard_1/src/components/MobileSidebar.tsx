import { SiNintendogamecube } from "react-icons/si"
import { RiMenu2Fill } from "react-icons/ri"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"

import { RiHome6Line } from "react-icons/ri"
import { LuLayoutDashboard } from "react-icons/lu"
import { RiStackLine } from "react-icons/ri"
import { BiSelectMultiple } from "react-icons/bi"
import { RiPieChartLine } from "react-icons/ri"
import { FaRegCircleUser } from "react-icons/fa6"

import { FiBell } from "react-icons/fi"
import { LuMessagesSquare } from "react-icons/lu"
import { LuSettings2 } from "react-icons/lu"

import { Badge } from "@/components/ui/badge"

const MobileSidebar = () => {
    return (
        <div className="flex justify-between pl-2 pr-4 pt-2 md:hidden">
            <div className="flex items-center gap-2 px-2 pb-4">
                <SiNintendogamecube size={30} />
                <div className="text-xl font-bold text-primary">
                    Untitled UI
                </div>
            </div>
            <SheetSide />
        </div>
    )
}

export default MobileSidebar

const SheetSide = () => {
    const iconSize = 23.5

    return (
        <Sheet>
            <SheetTrigger className="mt-[-16px]">
                <RiMenu2Fill size={25}/>
            </SheetTrigger>
            <SheetContent side="top">
                <SheetHeader>
                    <SheetDescription>
                        <div className="flex flex-col justify-between gap-2">
                            <div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 p-2">
                                        <RiHome6Line size={iconSize} />
                                        <div className="font-['poppins'] text-sm text-primary">
                                            Home
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-lg bg-[#EDF3FF] p-2">
                                        <LuLayoutDashboard
                                            size={iconSize}
                                            color="#424DE7"
                                        />
                                        <div className="font-['poppins'] text-sm text-brand">
                                            Dashboard
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-2">
                                        <RiStackLine size={iconSize} />
                                        <div className="font-['poppins'] text-sm text-primary">
                                            Projects
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-2">
                                        <BiSelectMultiple size={iconSize} />
                                        <div className="flex flex-1 justify-between">
                                            <div className="font-['poppins'] text-sm text-primary">
                                                Tasks
                                            </div>
                                            <Badge variant="secondary">
                                                10
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-2">
                                        <RiPieChartLine size={iconSize} />
                                        <div className="font-['poppins'] text-sm text-primary">
                                            Reporting
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-2">
                                        <FaRegCircleUser size={iconSize} />
                                        <div className="font-['poppins'] text-sm text-primary">
                                            Users
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2 p-2">
                                    <div className="relative">
                                        <FiBell size={iconSize} />
                                        <div className="absolute right-[2px] top-0 h-2 w-2 rounded-full bg-brand"></div>
                                    </div>
                                    <div className="flex flex-1 justify-between">
                                        <div className="font-['poppins'] text-sm text-primary">
                                            Notifications
                                        </div>
                                        <Badge variant="secondary">4</Badge>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 p-2">
                                    <LuMessagesSquare size={iconSize} />
                                    <div className="font-['poppins'] text-sm text-primary">
                                        Support
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 p-2">
                                    <LuSettings2 size={iconSize} />
                                    <div className="font-['poppins'] text-sm text-primary">
                                        Settings
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
