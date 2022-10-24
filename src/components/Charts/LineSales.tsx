import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const options = {
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    y: {
      ticks: {
        display: false,
      },
    },
    x: {
      ticks: {
        color: "#7c7c8a",
      },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export function LineSalesChart({ chartData }: any) {
  return <Line data={chartData} options={options} />;
}
