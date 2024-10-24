import { Progress } from "@/components/ui/progress"
import { ColumnDef } from "@tanstack/react-table"
import { Users } from "../../data"
import { Checkbox } from "../ui/checkbox"

import { FaArrowDown } from "react-icons/fa6"
import { BiTrash } from "react-icons/bi"
import { FiEdit2 } from "react-icons/fi"

export const columns: ColumnDef<Users>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "company",
        header: () => (
            <div className="flex items-center gap-1">
                <div>Company</div>
                <FaArrowDown />
            </div>
        ),
        cell: ({ row }) => (
            <div className="flex items-center gap-1">
                <div>
                    <img
                        src={row.original.company.src}
                        alt="profile"
                        className="w-[40px] rounded-full aspect-square object-cover"
                    />
                </div>
                <div>
                    <div className="font-['poppins'] text-xs font-semibold text-primary">
                        {row.original.company.title}
                    </div>
                    <div className="font-['poppins'] text-xs text-muted-foreground">
                        {row.original.company.site}
                    </div>
                </div>
            </div>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <div
                className={
                    row.original.status.toLowerCase() === "customer"
                        ? "w-fit rounded-full bg-green-100 px-2 py-[2px] font-['poppins'] text-xs text-green-800"
                        : "w-fit rounded-full bg-secondary px-2 py-[2px] font-['poppins'] text-xs text-primary"
                }
            >
                {row.getValue("status")}
            </div>
        ),
    },
    {
        accessorKey: "about",
        header: "About",
        cell: ({ row }) => (
            <div>
                <div className="font-['poppins'] text-xs font-semibold text-primary w-max">
                    {row.original.about.job}
                </div>
                <div className="font-['poppins'] text-xs text-muted-foreground">
                    {row.original.about.alt}
                </div>
            </div>
        ),
    },
    {
        accessorKey: "users",
        header: "Users",
        cell: ({ row }) => (
            <div className="flex w-[120px]">
                {row.original.users.map((user, index) => (
                    <img
                        key={index}
                        src={user}
                        className={`${index !== 0 ? "ml-[-15px]" : ""} aspect-square w-[35px] rounded-full border-2 border-white object-cover`}
                    />
                ))}
            </div>
        ),
    },
    {
        accessorKey: "licence",
        header: "Licence use",
        cell: ({ row }) => (
            <Progress value={row.getValue("licence")} className="w-[105px]" />
        ),
    },
    {
        accessorKey: "actions",
        header: "",
        cell: () => (
            <div className="flex items-center gap-4">
                <BiTrash size={20} className="text-muted-foreground"/>
                <FiEdit2 size={20} className="text-muted-foreground"/>
            </div>
        ),
    },
]
