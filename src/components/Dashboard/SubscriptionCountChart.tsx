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

export default function SubscriptionCountChart({ categories, counts, totalCount }: any) {
  const data = {
    labels: categories,
    datasets: [
      {
        data: counts,
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
          <div className="text-[62px] text-[#2377FC] font-[700]">{totalCount}</div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-6">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {categories.map((category: any, index: number) => (
            <div className="flex items-center gap-3" key={index}>
              <span
                className="w-5 h-5 rounded-full"
                style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
              ></span>
              <span className="text-[16px] text-[#292D32] font-[500]">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
