'use client'

import { ChartOptions } from "chart.js";
import DropDown from "../Common/DropDown";
import ModulePopularityChart from "./ModulePopularityChart";

export default function ModulePopularity(){

    const file_cat_chart_data = {
        labels: ["Email", "Communication", "Survey", "Cloud Storage", "Notes", "Calendar", "HRMS"],
        datasets: [
          {
            data: [40, 20, 30, 15, 54, 10, 25],
            backgroundColor: "#E5EAFC",
            hoverBackgroundColor: "#2377FC",
            borderWidth: 0,
            borderRadius: 4.3,
            barPercentage: 0.6,
          },
        ],
      };
    
      const file_cat_chart_options: ChartOptions<"bar"> = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            displayColors: false,
            callbacks: {
              title: () => "",
              label: (tooltipItem) => `${tooltipItem.raw} GB`,
            },
            titleFont: {
              size: 12,
            },
            bodyFont: {
              size: 12,
            },
            padding: 8,
            cornerRadius: 4,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 12,
                weight: "normal",
              },
            },
          },
          y: {
            beginAtZero: false,
            ticks: {
              stepSize: 25,
              callback: (value) => `${value}%`,
              font: {
                size: 12,
                weight: "normal",
              },
            },
            grid: {
              display: false,
              color: "#E0E0E0",
            },
          },
        },
      };

    return(
        <div>
            <div className="flex justify-between items-center">
                <p className="text-[#292D32] text-[20px] font-[600]">
                    Module Popularity
                </p>
                <div className="flex gap-5">
                <DropDown
                    title="November"
                    options={[
                        { id: 1, name: "January" },
                        { id: 2, name: "February" },
                        { id: 3, name: "March" },
                        { id: 4, name: "April" },
                        { id: 5, name: "May" },
                        { id: 6, name: "June" },
                        { id: 7, name: "July" },
                        { id: 8, name: "August" },
                        { id: 9, name: "September" },
                        { id: 10, name: "October" },
                        { id: 11, name: "November" },
                        { id: 12, name: "December" },
                    ]}
                    onChange={() => {}}
                    width="180px"
                    height="42px"
                    bgColor={false}
                />
                </div>
            </div>
            <div className="mt-6">
                <ModulePopularityChart 
                    data={file_cat_chart_data}
                    options={file_cat_chart_options}
                ></ModulePopularityChart>
            </div>
        </div>
    )
}