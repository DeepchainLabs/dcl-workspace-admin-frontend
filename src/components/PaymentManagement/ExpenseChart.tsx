import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function ExpenseChart() {
  const data = {
    labels: ["", "", "", "", "", "", "", ""],
    datasets: [
      {
        data: [10, 30, 15, 45, 20, 40, 30],
        borderColor: "#15BD6D",
        borderWidth: 5,
        pointRadius: 0,
        fill: false,
        tension: 0, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false, 
      },
      y: {
        display: false, 
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "200px" }}> 
      <Line data={data} options={options} />
    </div>
  );
};