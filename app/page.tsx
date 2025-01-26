import { Card } from "@/components/ui/card";
import Navbar from "./Components/Navbar";
import StatsCard from "./Components/StatsCard";

export default function Home() {
  return (
    <div className="m-5 poppins">
      <Card>
      <Navbar />
      <StatsCard />
      </Card>
    </div>
  );
}
