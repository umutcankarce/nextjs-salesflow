"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function TableArea(){ 
    const tabItems = [
        { value:"all", label:"All",count:30},
        { value: "high", label: "High", count: 10 },
        { value: "medium", label: "Medium", count: 10 },
        { value: "low", label: "Low", count: 10 },
    ];

    const [activeTab,setActiveTab] = useState("all");

    return (
        <Card className="m-6 shadow-none">
            <div className="p-8">
                {/* Tabs */}
                <Tabs 
                value={activeTab}
                    onValueChange={(value) => setActiveTab(value)}
                    className="mb-6 w-full"
                    >
                <div className="flex items-center justify-between mb-4 max-md:flex-col max-lg:gap-2 max-sm:items-start">
                    {/* TabList */}
                    <TabsList className="h-10 max-sm:flex max-sm:flex-col max-sm:h-[132px] max-sm:w-full">
                        {tabItems.map((tab) => (
                            <TabsTrigger 
                                key={tab.value}
                                value={tab.value}
                                className={`flex items-center gap-2 h-8 rounded-md transition-all ${
                                    activeTab === tab.value 
                                    ? "bg-primary text-white max-sm:w-full" 
                                    : "text-gray-600"
                                }`}
                                onClick={() => setActiveTab(tab.value)}
                            >
                                <span>{tab.label}</span>
                                <span
                                    className={`size-5 rounded-full ${
                                        activeTab === tab.value ? "text-primary" : "text-gray-500"
                                    } text-[11px]`}
                                >
                                    {tab.count}
                                </span>
                            </TabsTrigger>
                        ))}
                    </TabsList>

                   {/* Download Button */}
                    <Button className="flex items-center gap-2 max-lg:w-full max-sm:mt-4">
                        <HiOutlineDocumentDownload className="size-4"/>
                        <span>Download CVS</span>
                    </Button>
                   {/* Download Button */}

                    
                </div>

                {tabItems.map((tab) => (
                    <TabsContent key={tab.value} value={tab.value} className="w-full mt-9">
                        {activeTab == tab.value && (
                            // Table Data
                            <span>{tab.value}</span>
                        )}
                    </TabsContent>
                ))}
                </Tabs>  

                
            </div>
            {/* Pagination */}

        </Card>
    )
}