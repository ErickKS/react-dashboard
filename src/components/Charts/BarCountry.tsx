import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ChartOptions, registerables } from "chart.js";
ChartJS.register(...registerables);

const options: ChartOptions<"bar"> = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        color: "#7c7c8a",
      },
    },
    x: {
      ticks: {
        color: "#7c7c8a",
      },
    },
  },
  animation: {
    duration: 2000,
  },
};

export function BarCountryChart({ chartData }: any) {
  return <Bar data={chartData} options={options} />;
}
