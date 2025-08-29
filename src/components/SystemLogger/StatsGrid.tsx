import StatsCard from "./StatsCard";
// import { Bug, Info, AlertTriangle, XCircle } from "lucide-react";

export default function StatsGrid() {
  return (
    // <div className="md:w-2/3 lg:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatsCard
        label="Debugs"
        count={24}
        icon="bug"
        color="rgba(65, 87, 254, 1)"
      />
      <StatsCard
        label="Info"
        count={24}
        icon="info"
        color="rgba(18, 113, 162, 1)"
      />
      <StatsCard
        label="Warnings"
        count={24}
        icon="warning"
        color="rgba(146, 64, 14, 1)"
      />
      {/* <StatsCard label="Errors" count={24} icon={<XCircle />} color="#ef4444" /> */}
      <StatsCard
        label="Errors"
        count={24}
        icon="error"
        color="rgba(220, 38, 38, 1)"
      />
    </div>
  );
}
