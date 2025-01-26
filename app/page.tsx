import { Card } from "@/components/ui/card";
import Navbar from "./Components/Navbar";
import StatsCard from "./Components/StatsCard";
import TableArea from "./Components/TableArea/TableArea";

export default function Home() {
  return (
    <div className="m-5 poppins">
      <Card>
      <Navbar />
      <StatsCard />
      <TableArea/>
      </Card>
    </div>
  );
}
