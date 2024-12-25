"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function CloudStorageInsightGraph() {
  const [defined, setDefined] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      setDefined(true);
    }
  }, []);

  const chartColors = ["#15BD6D", "#2377FC",];

  const state: any = {
    series: [300, 200,],
    options: {
      chart: {
        height: 350,
        type: "pie",
      },
      colors: chartColors,
      labels: ["Total Used", "Avaiable",],
      stroke: {
        show: false,
        width: 0,
      },
      dataLabels: {
        enabled: false,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          colors: ["#FFFFFF"],
        },
        dropShadow: {
          enabled: true,
        },
        formatter: function (val: any, opts: any) {
          return `${opts.w.globals.labels[opts.seriesIndex]}: ${
            opts.w.globals.series[opts.seriesIndex]
          }`;
        },
      },
      legend: {
        show: true,
      },
      tooltip: {
        enabled: true,
        style: {
          fontSize: "12px",
          background: "#1E1B39",
          color: "#1E1B39",
        },
        y: {
          formatter: function (value: number) {
            return value.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <div className="mt-4 flex justify-center items-center">
      {defined && (
        <div className="w-full max-w-[600px] h-full">
          <div id="chart" className="text-[#000000]">
            <ReactApexChart
              options={state?.options}
              series={state?.series}
              type="pie"
              height="250px"
              width="100%"
            />
          </div>
        </div>
      )}
    </div>
  );
}
