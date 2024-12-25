import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartOptions,
  ChartData,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const BarChart: React.FC = () => {
  const data: ChartData<"bar"> = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        label: "Track",
        data: Array(12).fill(400),
        backgroundColor: "#F2F7FF",
        barThickness: 20,
        borderRadius: 100,
        order: 4,
      },
      {
        label: "Total Working Hours",
        data: [360, 320, 370, 340, 390, 370, 380, 360, 310, 300, 380, 340],
        backgroundColor: "#E5E5E5",
        barThickness: 20,
        borderRadius: 100,
        order: 3,
      },
      {
        label: "Total Attendance",
        data: [280, 300, 260, 290, 310, 250, 200, 220, 270, 290, 300, 250],
        backgroundColor: "#2377FC",
        barThickness: 20,
        borderRadius: 100,
        order: 2,
      },
      {
        label: "Total Completed Tasks",
        data: [120, 150, 100, 130, 90, 110, 140, 100, 180, 120, 100, 160],
        backgroundColor: "#2ED47A",
        barThickness: 20,
        borderRadius: 100,
        order: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: {
          color: "#6b7280",
          font: { size: 12 },
        },
      },
      y: {
        stacked: false,
        grid: { display: false },
        ticks: {
          color: "#6b7280",
          font: { size: 12 },
          stepSize: 50,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="w-full h-[400px] border border-[#EFF0F6] rounded-[12px] p-10">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
