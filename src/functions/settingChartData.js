import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, coin, prices) => {
  setChartData({
    labels: prices.map((data) => convertDate(data[0])),
    datasets: [
      {
        label: coin?.name ?? "",
        data: prices.map((data) => data[1]),
        borderWidth: 1,
        fill: true,
        tension: 0.25,
        backgroundColor: "rgb(180,140,110)", 
        borderColor: "#e93a4b",
        pointRadius: 0,
        innerHeight: 100,
        outerHeight: 100,
      },
    ],
  });
};
