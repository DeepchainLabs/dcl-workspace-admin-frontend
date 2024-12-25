import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const MyReportChart = () => {
  const data = {
    labels: ["Total Task Assigned", "Total Task Completed", "Total Task In Backlog"],
    datasets: [
      {
        data: [100, 70, 60], 
        backgroundColor: ["#3b82f6", "#22c55e", "#8b5cf6"], 
        hoverBackgroundColor: ["#2563eb", "#16a34a", "#6b21a8"],
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
        enabled: true,
      },
    },
  };

  const progressBars = [
    { label: "Total Task Assigned", value: 100, color: "#3b82f6" },
    { label: "Total Task Completed", value: 70, color: "#22c55e" },
    { label: "Total Task In Backlog", value: 60, color: "#8b5cf6" },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-center space-y-8 lg:space-y-0 lg:space-x-8">
      <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex-shrink-0 mx-auto lg:mx-0">
        <Doughnut data={data} options={options} />
      </div>

      <div className="flex flex-col w-full space-y-4">
        {progressBars.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <p className="text-[14px] md:text-[16px] font-[500] text-[#52525B] w-40">
              {item.label}
            </p>
            <div className="flex-1 h-4 overflow-hidden bg-gray-200 rounded">
              <div
                className="h-full rounded"
                style={{
                  width: `${item.value}%`,
                  backgroundColor: item.color,
                }}
              ></div>
            </div>
            <p className="text-[#292D32] text-[14px] md:text-[16px] font-[500]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReportChart;