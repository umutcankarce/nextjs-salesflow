import { SaleType } from "@/app/_data/types";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { format } from 'date-fns'
import ActionDropDown from "./Dropdown/ActionDropDown";
export const salesColumns:ColumnDef<SaleType>[] = [
    {
        id:"select",
        header:({table}) => (
            <div className="pl-4">
                <Checkbox 
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select All"
                />
            </div>
        ),
        cell:({row}) => (
            <div className="pl-4">
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select Row"
                />
            </div>
        ),
        enableSorting:false,
        enableHiding:false,
    },
    {
        accessorKey:"customerName",
        header:"Customer Name",
    },
    {
        accessorKey:"dealValue",
        header:"Deal Value",
    },
    {
        accessorKey:"status",
        header:"Status",
        cell:({row}) =>{
            return (
                <Badge
                className="rounded-xl bg-primary/15 text-primary font-normal select-none shadow-none">
                    {row.original.status}
                </Badge>
            );
        },
    },
    {
        accessorKey:"contactDate",
        header:"Contact Date",
        cell:({row}) => {
            const contactDate = row.original.contactDate;
            return <span>{contactDate}</span>
        },
    },
    {
        accessorKey:"salesPerson",
        header:"Sales Person",
    },
    {
        accessorKey:"priority",
        header:"Priority",
        cell:({ row }) => {
            const priority = row.original.priority;
            let priorityColor = "";
            if(priority === "Low"){ 
                priorityColor = "bg-green-500 text-white";
            }else if (priority == "Medium"){ 
                priorityColor = "bg-yellow-500 text-white";
            }else if(priority == "High"){ 
                priorityColor = "bg-red-500 text-white";
            }
            return (
                <Badge className={`${priorityColor} font-semibold hover:bg-${priorityColor} shadow-none`}>
                    {priority}
                </Badge>
            )
        }
    },
    {
        id:"actions",
        cell:({row}) => {
            return <ActionDropDown row={row} />;
        }
    }
];