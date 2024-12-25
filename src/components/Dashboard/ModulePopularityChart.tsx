"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
    BarElement,
    CategoryScale,
    LinearScale,
    ChartOptions,
    PointElement,
  } from "chart.js";

  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    Title,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement
  );


interface ModulePopularityChartProps {
  data: any;
  options: ChartOptions<"bar">;
}

const ModulePopularityChart: React.FC<ModulePopularityChartProps> = ({
  data,
  options,
}) => {
  return (
    <div className="mt-4 flex justify-center h-[250px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ModulePopularityChart;
