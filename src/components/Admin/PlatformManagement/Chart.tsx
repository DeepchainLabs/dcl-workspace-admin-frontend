'use client';

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip);

export default function Chart({value,main,max,rate}:any) {
 

  const data = {
    labels: [],
    datasets: [
      {
        data: [value, max - value],
        backgroundColor: [main, "#E9F0F9"],
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
    <div className="relative w-[170px] h-[150px] flex justify-center items-center">
        <Doughnut data={data} options={options} />
        <div className="absolute flex flex-col justify-center items-center">
          <div className="text-[24px] text-[#292D32] font-[700] flex gap-1">{value} <p className="text-[24px] text-[#292D32] font-[700]">{rate}</p></div>
        </div>
    </div>
  );
}
