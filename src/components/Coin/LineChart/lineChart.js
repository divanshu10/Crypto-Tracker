import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import { convertNumber } from "../../../functions/converNumber";

function LineChart({ chartData, priceType }) {

// LineChart.resize(width=100, height=100);

    const options = {
      plugins: {
        legend: {
          display: false,
         
        },
      },
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      scales: {
        y: {
          ticks: {
            callback: function (value) {
              if (priceType == "total_volumes") {
                return convertNumber(value);
              } else if (priceType == "market_caps") {
                return "$" + convertNumber(value);
              } else {
                return "$" + value.toLocaleString();
              }
            },
          },
        },
      },
    };
  
    return <Line data={chartData} options={options} />;

  }
  
  export default LineChart;