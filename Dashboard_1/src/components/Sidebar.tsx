import { SiNintendogamecube } from "react-icons/si"

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
import User from "./User"

const Sidebar = () => {
    const iconSize = 23.5

    return (
        <div className="fixed bottom-0 left-0 top-0 hidden min-h-screen w-[90px] border-r-2 border-secondary p-4 md:block lg:w-[260px]">
            <div className="flex h-full flex-col items-center justify-between lg:items-stretch ">
                <div>
                    <div className="flex items-center gap-2 px-2 pb-4">
                        <SiNintendogamecube size={30} />
                        <div className="hidden text-xl font-bold text-primary lg:block">
                            Untitled UI
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 p-2">
                            <RiHome6Line size={iconSize} />
                            <div className="font-['poppins'] text-sm text-primary md:hidden lg:block">
                                Home
                            </div>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg bg-[#EDF3FF] p-2">
                            <LuLayoutDashboard
                                size={iconSize}
                                color="#424DE7"
                            />
                            <div className="font-['poppins'] text-sm text-brand md:hidden lg:block">
                                Dashboard
                            </div>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <RiStackLine size={iconSize} />
                            <div className="font-['poppins'] text-sm text-primary md:hidden lg:block">
                                Projects
                            </div>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <BiSelectMultiple size={iconSize} />
                            <div className="flex-1 items-center justify-between md:hidden lg:flex">
                                <div className="font-['poppins'] text-sm text-primary">
                                    Tasks
                                </div>
                                <Badge variant="secondary">10</Badge>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <RiPieChartLine size={iconSize} />
                            <div className="font-['poppins'] text-sm text-primary md:hidden lg:block">
                                Reporting
                            </div>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <FaRegCircleUser size={iconSize} />
                            <div className="font-['poppins'] text-sm text-primary md:hidden lg:block">
                                Users
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center lg:items-stretch">
                        <div className="flex items-center gap-2 p-2">
                            <div className="relative">
                                <FiBell size={iconSize} />
                                <div className="absolute right-[2px] top-0 h-2 w-2 rounded-full bg-brand"></div>
                            </div>
                            <div className="flex-1 items-center justify-between md:hidden lg:flex">
                                <div className="font-['poppins'] text-sm text-primary">
                                    Notifications
                                </div>
                                <Badge variant="secondary">4</Badge>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <LuMessagesSquare size={iconSize} />
                            <div className="font-['poppins'] text-sm text-primary md:hidden lg:block">
                                Support
                            </div>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <LuSettings2 size={iconSize} />
                            <div className="font-['poppins'] text-sm text-primary md:hidden lg:block">
                                Settings
                            </div>
                        </div>
                    </div>
                    <User />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
