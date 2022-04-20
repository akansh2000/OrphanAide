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
  console.log("Graph is " + info);
  const data = buildData(info);

  let maxval = 0;
  for (var i = 0; i < data["datasets"][0]["data"].length; i++) {
    if (maxval < data["datasets"][0]["data"][i]) {
      maxval = data["datasets"][0]["data"][i];
    }
  }

  let total = 0;
  for (var i = 0; i < data["datasets"][0]["data"].length; i++) {
    total += data["datasets"][0]["data"][i];
  }

  return (
    <>
      <div
        className="rounded shadow-xl overflow-hidden w-full md:flex"
        style={{ maxWidth: "900px", height: "210px" }}
      >
        <div className="flex w-full md:w-1/2 px-5 pb-4 pt-8 bg-indigo-500 text-white items-center">
          <Line type="line" data={data} options={options} />
        </div>
        <div className=" border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <MdAutoGraph style={{ width: "1.5rem", height: "1.5rem" }} />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
            Donation Analysis
          </h2>
          <p className="leading-relaxed text-base">
            Highest donation made: ₹{maxval}{" "}
          </p>
          <p className="leading-relaxed text-base">
            Total yearly donation made: ₹{total}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Graph;
