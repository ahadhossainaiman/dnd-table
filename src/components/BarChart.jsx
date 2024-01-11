

import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

// eslint-disable-next-line react/prop-types
const BarChart = ({ chartData }) => {
    console.log(chartData);
    return <Bar data={chartData} />;
};

export default BarChart;