import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const chartOptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
  };

  const chartSeries = [
    {
      name: "Series 1",
      data: [30, 40, 35, 50, 49, 60],
      color: "#1A56DB",
    },
  ];
  return (
    <div class="max-w-md w-full bg-white rounded-lg shadow  p-4 md:p-6">
      <div class="flex justify-between">
        <div>
          <h5 class="leading-none text-xl font-bold text-gray-900 mb-4">
            Github Commits
          </h5>
          <h5 class="leading-none text-3xl font-bold text-gray-900  pb-2">
            32.4k
          </h5>
          <p class="text-base font-normal text-gray-500 ">Users this week</p>
        </div>
        <div class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500  text-center">
          12%
          <svg
            class="w-3 h-3 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13V1m0 0L1 5m4-4 4 4"
            />
          </svg>
        </div>
      </div>
      <div id="area-chart">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={350}
        />
      </div>
      <div class="grid grid-cols-1 items-center border-gray-200 border-t  justify-between">
        <div class="flex justify-between items-center pt-5">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="lastDaysdropdown"
            data-dropdown-placement="bottom"
            class="text-sm font-medium text-gray-500  hover:text-gray-900 text-center inline-flex items-center "
            type="button"
          >
            Last 7 days
          </button>

          <div
            id="lastDaysdropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100  ">
                  Yesterday
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">
                  Today
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">
                  Last 7 days
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">
                  Last 30 days
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">
                  Last 90 days
                </a>
              </li>
            </ul>
          </div>
          <a
            href="#"
            class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700   hover:bg-gray-100    px-3 py-2"
          >
            Users Report
            <svg
              class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
