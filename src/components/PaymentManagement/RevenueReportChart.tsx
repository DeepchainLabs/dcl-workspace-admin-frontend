import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

const RevenueReportChart: React.FC = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Earning',
        data: [1000, 2000, 1500, 2500, 1400, 800], 
        backgroundColor: '#C893FD',
        borderWidth: 1,
      },
      {
        label: 'Expense',
        data: [500, 1000, 800, 1200, 600, 200], 
        backgroundColor: '#2377FC',
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.dataset.label}: ${context.raw}k`,
        },
      },
    },
    scales: {
      x: {
        stacked: true, 
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true, 
        beginAtZero: true,
        ticks: {
          stepSize: 1000, 
          callback: (value: any) => `${value/1000}k`,
        },
        max: 3000, 
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default RevenueReportChart;
