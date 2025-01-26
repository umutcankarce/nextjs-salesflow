import { useTheme } from "next-themes";
import { useEffect,useState } from "react";
import PaginationSelection from "./PaginationSelection";
import { Button } from "@/components/ui/button";

import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
export default function PaginationArea()
{ 
    const {theme} = useTheme();
    const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";

    const [isClient,setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    },[]);

    if(!isClient){
        return null;
    }
    
    return (
        <div className={`relative w-full h-[80px] max-sm:h-[206px] max-sm:pt-4 max-sm:ob-4
        overflow-hidden flex justify-between items-center px-6 ${bgColor} border-t max-sm:flex-col max-sm:gap-2`}>
            <PaginationSelection />
            <div className="flex gap-6 items-center max-sm:flex-col max-sm:mt-4 max-sm:gap-2">
                <span className="text-sm text-gray-500">Page 1 of 3</span>
                <div className="flex items-center justify-end space-x-2">
                    {/* First Page Button */}
                        <Button
                            variant="outline"
                            className="size-9 w-12"
                            size="sm"
                        >
                            <BiFirstPage />
                        </Button>
                    {/* First Page Button */}
                    {/* Previous Page Button */}
                        <Button
                            variant="outline"
                            className="size-9 w-12"
                            size="sm"
                        >
                            <GrFormPrevious/>
                        </Button>
                    {/* Previous Page Button */}
                    {/* Next Page Button */}
                        <Button
                            variant="outline"
                            className="size-9 w-12"
                            size="sm"
                            >
                            <GrFormNext/>
                        </Button>
                    {/* Next Page Button */}
                    {/* Last Page Button */}
                        <Button
                            variant="outline"
                            className="size-9 w-12"
                            size="sm"
                            >
                            <BiLastPage/>
                        </Button>
                    {/* Last Page Button */}

                </div>
            </div>
        </div>
        
    )
}