'use client';

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip);

interface RenewalRateChartProps {
  percentage: number;
}

export default function RenewalRateChart({ percentage }: RenewalRateChartProps) {
  const data = {
    labels: [],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["#2377FC", "#E9F0F9"],
        borderWidth: 0,
        cutout: "90%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    rotation: -90, 
    circumference: 180, 
    plugins: {
      tooltip: {
        enabled: false, 
      },
    },
  };

  return (
    <div className="relative w-full h-[200px] flex justify-center items-center">
        <Doughnut data={data} options={options} />
        <div className="absolute flex flex-col justify-center items-center mt-[160px]">
          <div className="text-[62px] text-[#292D32] font-[700]">{percentage}%</div>
        </div>
    </div>
  );
}
