import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

import { MdAutoGraph } from "react-icons/md";

import React from "react";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);
const formatter = (number) =>
  number > 999999 ? (number / 1000000).toFixed(1) + "M" : number;

const buildData = ({ chartData }) => ({
  labels: chartData.labels,
  datasets: [
    {
      label: "",
      data: chartData.data,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderColor: "rgba(255, 255, 255, 1)",
      pointBackgroundColor: "rgba(255, 255, 255, 1)",
      fill: "start",
      tension: 0.4,
    },
  ],
});

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    yAxes: {
      ticks: {
        color: "rgba(255, 255, 255, 1)",
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },

    xAxes: {
      ticks: {
        color: "rgba(255, 255, 255, 1)",
      },
      grid: {
        circular: true,
        borderColor: "rgba(255, 255, 255, .2)",
        color: "rgba(255, 255, 255, .2)",
        borderDash: [5, 5],
      },
    },
  },
  layout: {
    padding: {
      right: 10,
    },
  },
};

const numberToFix = (number, fix) => (number || 0).toFixed(fix);

const Graph = ({ info }) => {
  const data = buildData(info);

  return (
    <>
      <div
        className="rounded shadow-xl overflow-hidden w-full md:flex"
        style={{ maxWidth: "900px", height: "194px" }}
      >
        <div className="flex w-full md:w-1/2 px-5 pb-4 pt-8 bg-indigo-500 text-white items-center">
          <Line type="line" data={data} options={options} />
        </div>
        <div className="flex w-full md:w-1/2 p-10 bg-gray-100 text-gray-600 ">
          <div className="w-full">
            <h1 className="text-lg font-semibold leading-tight text-gray-800">
              Donation Analysis
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;
