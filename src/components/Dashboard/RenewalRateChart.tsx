'use client';

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip);

export default function RenewalRateChart() {
  const percentage = 78;

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
    rotation: -90, // Start angle
    circumference: 180, // Half-circle
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltips for a clean look
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
