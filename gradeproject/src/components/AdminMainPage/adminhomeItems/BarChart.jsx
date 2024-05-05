import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // useRef를 사용하여 chartInstance를 저장

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const createChart = () => {
      Chart.register(...registerables);
      chartInstance.current = new Chart(ctx, { // useRef를 사용한 chartInstance 할당
        type: "bar",
        data: {
          labels: ["1~3월", "3~5월", "5~7월", "7~9월", "9~11월", "11~12월"],
          datasets: [
            {
              label: "신고 량",
              data: [15, 20, 60, 10, 22, 30],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
            },
          },
        },
      });
    };

    const destroyChart = () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };

    destroyChart(); // 기존 차트 파괴
    createChart(); // 새로운 차트 생성

    return () => {
      destroyChart(); // 컴포넌트가 unmount될 때 차트 파괴
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChart;
