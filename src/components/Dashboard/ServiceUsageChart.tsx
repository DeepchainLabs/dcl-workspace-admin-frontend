"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function ServiceUsageChart() {
  const [defined, setDefined] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDefined(true);
    }
  }, []);

  const state: any = {
    series: [
      {
        name: "Usage",
        data: [4, 1, 1, 2, 1.9, 3, 2],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      colors: ["#2D5BFF"], 
      stroke: {
        curve: "straight",
        width: 4, 
      },
      markers: {
        size: 0, 
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.3,
          gradientToColors: ["#2D5BFF"],
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val: any) {
            return `${val.toFixed(1)}H`; 
          },
        },
      },
      dataLabels: {
        enabled: false, 
      },
      xaxis: {
        categories: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
        labels: {
          style: {
            colors: "#615E83",
            fontSize: "14px",
            fontWeight: 500,
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        min: 0,
        max: 4,
        tickAmount: 4,
        labels: {
          formatter: function (val: any) {
            return `${val}H`; 
          },
          style: {
            colors: "#615E83",
            fontSize: "14px",
            fontWeight: 500,
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      grid: {
        borderColor: "#E5E5EF", // Light gray for grid lines
        strokeDashArray: 4, // Dotted grid lines
      },
    },
  };

  return (
    <div className="bg-white w-full min-h-[375px] rounded-lg py-4 px-6 border border-gray-200">
      <div className="mt-4">
        {defined && (
          <ReactApexChart
            options={state?.options}
            series={state?.series}
            type="area"
            height={350}
            width="100%"
          />
        )}
      </div>
    </div>
  );
}
