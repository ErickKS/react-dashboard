import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ChartOptions, registerables } from "chart.js";
ChartJS.register(...registerables);

const options: ChartOptions<"doughnut"> = {
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem: any) {
          return tooltipItem.label + ": " + "$" + tooltipItem.raw;
        },
      },
    },
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 20,
        color: "#e1e1e6",
        padding: 14,
        font: {
          size: 14,
        },
      },
    },
  },
  animation: {
    duration: 2000,
  },
};

export function DoughnutChart({ chartData }: any) {
  return <Doughnut data={chartData} options={options} />;
}
