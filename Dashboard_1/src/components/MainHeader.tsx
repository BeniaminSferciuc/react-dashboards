import { Button } from "@/components/ui/button"

import { LuUploadCloud } from "react-icons/lu"
import { IoMdAdd } from "react-icons/io"

const MainHeader = () => {
    return (
        <div className="flex flex-col md:items-center justify-between md:flex-row gap-4 p-4">
            <div className="font-['poppins'] text-2xl font-semibold text-primary">
                Customers
            </div>
            <div className="space-x-2">
                <Button variant="outline" className="font-['poppins'] text-xs">
                    <LuUploadCloud className="mr-2 h-4 w-4" /> Import
                </Button>
                <Button variant="blue" className="font-['poppins'] text-xs">
                    <IoMdAdd className="mr-2 h-4 w-4" /> Add customer
                </Button>
            </div>
        </div>
    )
}

export default MainHeader
