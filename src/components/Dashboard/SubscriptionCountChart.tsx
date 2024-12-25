'use client'

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SubscriptionCountChart() {
  const data = {
    labels: ["Small Business", "Medium Business", "Large Business"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["#2377FC", "#15BD6D", "#EBEBEB"],
        borderWidth: 0,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4">
      <div className="relative w-full h-[300px] flex justify-center items-center">
        <Doughnut data={data} options={options} />
        <div className="absolute flex flex-col justify-center items-center mt-[150px]">
          <div className="text-[16px] text-[#6F6F6F] font-[500]">Conversions</div>
          <div className="text-[62px] text-[#2377FC] font-[700]">24</div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-6">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-[#2377FC]"></span>
            <span className="text-[16px] text-[#292D32] font-[500]">Small Business</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-[#15BD6D]"></span>
            <span className="text-[16px] text-[#292D32] font-[500]">Medium Business</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-[#EBEBEB]"></span>
            <span className="text-[16px] text-[#292D32] font-[500]">Large Business</span>
          </div>
        </div>
      </div>
    </div>
  );
}
