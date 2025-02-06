"use client";

import { Card } from "@/components/ui/card";
import Navbar from "./Components/Navbar";
import StatsCard from "./Components/Widget/StatsCard";
import TableArea from "./Components/TableArea/TableArea";
import { useState } from "react";

export default function Home() {
  return (
    <div className="m-5 poppins">
      <Card>
      <Navbar />
      <StatsCard />
      <TableArea />
      </Card>
    </div>
  );
}
