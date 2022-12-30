import { convertDate } from "./convertDate";

export const settingChartData = (setChartData,
  prices1,
  coin1,
  coin2,
  prices2) => {
  setChartData({
    labels: prices1?.map((data) => convertDate(data[0])),
    datasets: [
      {
        label: coin1?.name ?? "",
        data: prices1?.map((data) => data[1]),
        borderWidth: 1,
        fill: true,
        tension: 0.25,
        // backgroundColor: "rgb(180,140,110)", 
        borderColor: "#e93a4b",
        pointRadius: 0,
        innerHeight: 100,
        outerHeight: 100,
      },
      prices2 && {
        label: coin2?.name ?? "",
        data: prices2.map((data) => data[1]),
        borderWidth: 1,
        fill: true,
        tension: 0.25,
        backgroundColor: prices2 ? "transparent" : "rgba(97, 201, 111,0.1)",
        borderColor: "#61c96f",
        pointRadius: 0,
        yAxisID: "y2",
      },
    ],
  });
};
