
import { MdContentCopy,MdOutlineDelete,MdMoreVert } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Row } from "@tanstack/react-table";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { SaleType } from "../_data/types";

export default function ActionDropDown({row}:{row: Row<SaleType>}){
    const menuItems = [
        {
            icon:<MdContentCopy/>,
            label:"Copy",
            className:""
        },
        {
            icon: <MdOutlineDelete/>,
            label:"Delete",
            className:""
        }
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open Menu</span>
                    <MdMoreVert className="h-4 w-4 text-slate-400" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="poppins">
                {menuItems.map((item,index) => (
                    <DropdownMenuItem key={index} className={`flex items-center gap-1 p-[10px] ${item.className}`}>
                        {item.icon}
                        <span>{item.label}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}