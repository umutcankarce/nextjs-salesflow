"use client";

import { Card } from "@/components/ui/card";
import Navbar from "./Components/Navbar";
import StatsCard from "./Components/Widget/StatsCard";
import TableArea from "./Components/TableArea/TableArea";
import { useState } from "react";

export default function Home() {
  const [searchQuery,setSearchQuery] = useState("");
  return (
    <div className="m-5 poppins">
      <Card>
      <Navbar  setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
      <StatsCard />
      <TableArea searchQuery={searchQuery} />
      </Card>
    </div>
  );
}
