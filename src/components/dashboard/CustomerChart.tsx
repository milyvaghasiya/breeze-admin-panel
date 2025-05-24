import { alpha, Chip, Grid, Stack, Typography, useTheme } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ChartMenu from "./ChartMenu";

const CustomerChart = () => {
  const theme = useTheme();

  const series = [
    {
      data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      background: "transparent",
    },
    stroke: {
      width: 1,
      colors: [theme.palette.primary.main, "#1eaf7f"],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        type: "vertical",
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
      },
    },
    grid: {
      strokeDashArray: 4,
      borderColor: alpha(theme.palette.divider, 0.5),
    },
    dataLabels: {
      enabled: false,
    },
    colors: [theme.palette.primary.main, "#1eaf7f"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: Array(12).fill(theme.palette.secondary.main),
        },
      },
      axisBorder: {
        show: false,
        color: theme.palette.divider,
      },
      axisTicks: {
        show: false,
      },
      tickAmount: 11,
    },
    yaxis: {
      labels: {
        style: {
          colors: [theme.palette.secondary.main],
        },
      },
    },
    theme: {
      mode: theme.palette.mode === "dark" ? "dark" : "light",
    },
  };

  return (
    <Grid
      size={{ xl: 7.5, md: 6, xs: 12 }}
      sx={{
        padding: { sm: "20px", xs: "16px" },
        borderRadius: "12px",
        border: `1px solid ${theme.palette.divider}`,
        background: theme.palette.background.paper,
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          marginBottom: "8px",
        }}
      >
        <Typography color="secondary.dark" fontWeight="600">
          Repeat customer rate
        </Typography>
        <ChartMenu />
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <Typography color="secondary.dark" variant="body2" fontWeight="600">
          5.44%
        </Typography>
        <Chip
          size="small"
          color="success"
          label="+ 2.6%"
          sx={{ borderRadius: "8px", color: "white" }}
        />
      </Stack>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={250}
        width={"100%"}
      />
    </Grid>
  );
};

export default CustomerChart;
