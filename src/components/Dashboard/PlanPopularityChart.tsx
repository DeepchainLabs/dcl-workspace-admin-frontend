import React from "react";

interface Dataset {
  data: number[];
  labels: string[];
}

interface PlanPopularityChart {
  datasets: Dataset[];
}

const PlanPopularityChart: React.FC<PlanPopularityChart> = ({ datasets }) => {
  const [large, medium, small] = datasets[0]?.data || [0, 0, 0];
  const [largeLabel, mediumLabel, smallLabel] = datasets[0]?.labels || ["", "", ""];

  const baseSize = 250;
  const minCircleSize = 110;

  const calculateSize = (percentage: number) => Math.max(baseSize * (percentage / 100), minCircleSize);

  const smallSize = calculateSize(small);
  const mediumSize = calculateSize(medium);
  const largeSize = calculateSize(large);

  const positions = {
    small: { x: -5, y: 35 },
    medium: { x: 25, y: -50 },
    large: { x: -80, y: -25 },
  };

  const fontSize = (size: number) => size * 0.2;

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative flex flex-col items-center justify-center w-full">
        <div className="relative flex items-center justify-center mb-6" style={{ width: "100%", height: "250px" }}>
          <div
            className="absolute flex items-center justify-center rounded-full border border-white transition-all duration-500 ease-in-out bg-[#2377FC] z-1"
            style={{
              width: `${largeSize}px`,
              height: `${largeSize}px`,
              transform: `translate(${positions.large.x}px, ${positions.large.y}px)`,
            }}
          >
            <p className="text-white font-bold" style={{ fontSize: `${fontSize(largeSize)}px` }}>
              {large}%
            </p>
          </div>

          <div
            className="absolute flex items-center justify-center rounded-full border border-white transition-all duration-500 ease-in-out bg-[#EBEBEB] z-10"
            style={{
              width: `${mediumSize}px`,
              height: `${mediumSize}px`,
              transform: `translate(${positions.medium.x}px, ${positions.medium.y}px)`,
            }}
          >
            <p className="text-black font-bold" style={{ fontSize: `${fontSize(mediumSize)}px` }}>
              {medium}%
            </p>
          </div>

          <div
            className="absolute flex items-center justify-center rounded-full border border-white transition-all duration-500 ease-in-out bg-[#15BD6D] z-50"
            style={{
              width: `${smallSize}px`,
              height: `${smallSize}px`,
              transform: `translate(${positions.small.x}px, ${positions.small.y}px)`,
            }}
          >
            <p className="text-white font-bold" style={{ fontSize: `${fontSize(smallSize)}px` }}>
              {small}%
            </p>
          </div>
        </div>

        <div className="flex justify-center w-full mt-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#15BD6D]"></span>
              <span className="text-[16px] text-[#292D32] font-[500]">{largeLabel || "Large"}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#EBEBEB]"></span>
              <span className="text-[16px] text-[#292D32] font-[500]">{mediumLabel || "Medium"}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#2377FC]"></span>
              <span className="text-[16px] text-[#292D32] font-[500]">{smallLabel || "Small"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanPopularityChart;
