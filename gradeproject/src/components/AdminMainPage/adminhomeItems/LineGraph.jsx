import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["2024/05", "2024/06", "2024/07", "2024/08", "2024/09"];

const options = {
  responsive: true,
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "회원 수",
      data: [32, 42, 51, 60, 51, 95, 97],
      backgroundColor: "#0CD3FF",
      borderColor: "#0CD3FF",
    },
    // {
    //   label: "Angular",
    //   data: [37, 42, 41, 37, 31, 44, 42],
    //   backgroundColor: "#a6120d",
    //   borderColor: "#a6120d",
    // },
    // {
    //   label: "Vue",
    //   data: [60, 54, 54, 28, 27, 49, 52],
    //   backgroundColor: "#FFCA29",
    //   borderColor: "#FFCA29",
    // },
  ],
};

const LineGraph = () => {
  return (
    <div>
      <div style={{ width: 400, height: 300 }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default LineGraph;