import { useTheme } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

type MetricBarChartProps = {
  color: string;
};

const MetricBarChart = ({ color }: MetricBarChartProps) => {
  const theme = useTheme();
  const series = [
    {
      data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 50,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "75%",
        borderRadius: 2,
      },
    },
    colors: [color],
    tooltip: {
      enabled: true,
      custom: ({ series, seriesIndex, dataPointIndex }) => {
        const value = series[seriesIndex][dataPointIndex];
        return `
          <div style="background: ${theme.palette.background.paper}; color: ${theme.palette.secondary.dark}; border: 1px solid ${theme.palette.divider}; border-radius: 5px; padding: 8px 12px; display: flex; align-items: center; gap: 6px;">
            <div style="width: 12px; height: 12px; background-color: ${color}; border-radius: 50%; margin-top: 1px"></div>
            <div style="font-size: 12px;">Users: <strong>${value}</strong></div>
          </div>
        `;
      },
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      height={50}
      width="94"
    />
  );
};

export default MetricBarChart;
