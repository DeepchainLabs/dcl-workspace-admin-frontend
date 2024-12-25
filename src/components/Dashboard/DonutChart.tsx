import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ personal = false }) => {
  const data = {
    labels: personal
      ? ["Task Assigned", "Task Completed", "Hours Worked"]
      : ["Total Attendance", "Total Completed Task", "Total Working Hours"],
    datasets: [
      {
        data: [21, 15, 189],
        backgroundColor: ["#3b82f6", "#22c55e", "#e5e7eb"],
        hoverBackgroundColor: ["#2563eb", "#16a34a", "#d1d5db"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  const legendItems = personal
    ? [
        { label: "Task Assigned", value: "21", color: "#3b82f6" },
        { label: "Task Completed", value: "15", color: "#22c55e" },
        { label: "Hours Worked", value: "189 H", color: "#e5e7eb" },
      ]
    : [
        { label: "Total Attendance", value: "21/24", color: "#3b82f6" },
        { label: "Total Completed Task", value: "15/30", color: "#22c55e" },
        { label: "Total Working Hours", value: "189/216 H", color: "#e5e7eb" },
      ];

  return (
    <div className="flex flex-col items-center space-y-20">
      <div className="relative w-[200px] h-[200px]">
        <Doughnut data={data} options={options} />
      </div>
      <div className="space-y-6">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <span
              className="w-6 h-4 rounded-[3px]"
              style={{ backgroundColor: item.color }}
            ></span>
            <p className="text-[#292D32] text-[14px] font-[600]">{item.value}</p>
            <p className="text-[#A5B2CA] text-[14px] font-[600]">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
