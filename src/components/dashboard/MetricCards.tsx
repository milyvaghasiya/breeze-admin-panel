import { Avatar, Grid, Stack, Typography, useTheme } from "@mui/material";
import { HiOutlineFolderMinus } from "react-icons/hi2";
import { LuBookText, LuCalendarDays } from "react-icons/lu";
import { MdOutlineCloudDownload } from "react-icons/md";
import {
  GoArrowDownLeft,
  GoArrowDownRight,
  GoArrowUpRight,
} from "react-icons/go";
import ChartMenu from "./ChartMenu";
import MetricBarChart from "./MetricBarChart";

const metricCardList = [
  {
    icon: <HiOutlineFolderMinus />,
    title: "All Earnings",
    iconColor: "#6293ff",
    darkBgColor: "rgba(70, 128, 255,0.16)",
    lightBgColor: "rgba(70, 128, 255, 0.08)",
    value: "$3000",
    percentageIcon: <GoArrowUpRight size={18} />,
  },
  {
    icon: <LuBookText />,
    title: "Page Views",
    iconColor: "#e58a00",
    darkBgColor: "rgba(211, 90, 0, 0.25)",
    lightBgColor: "rgba(247, 220, 179, 0.8)",
    value: "290+",
    percentageIcon: <GoArrowDownRight size={18} />,
  },
  {
    icon: <LuCalendarDays />,
    title: "Total Task",
    iconColor: "#2ca87f",
    darkBgColor: "rgba(16, 125, 79, 0.25)",
    lightBgColor: "rgba(192, 229, 217, 0.8)",
    value: "1,568",
    percentageIcon: <GoArrowUpRight size={18} />,
  },
  {
    icon: <MdOutlineCloudDownload />,
    title: "Download",
    iconColor: "#dc2626",
    darkBgColor: "rgba(197, 13, 13, 0.25)",
    lightBgColor: "rgba(245, 190, 190, 0.8)",
    value: "$200",
    percentageIcon: <GoArrowDownLeft size={18} />,
  },
];

const MetricCards = () => {
  const theme = useTheme();
  return (
    <Grid container spacing="16px" sx={{ paddingTop: "16px" }}>
      {metricCardList.map((card, index) => (
        <Grid
          key={index}
          size={{ xl: 3, sm: 6, xs: 12 }}
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
            }}
          >
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Avatar
                sx={{
                  borderRadius: "8px",
                  background:
                    theme.palette.mode === "dark"
                      ? card.darkBgColor
                      : card.lightBgColor,
                  color: card.iconColor,
                }}
              >
                {card.icon}
              </Avatar>
              <Typography
                color="secondary.dark"
                variant="body2"
                fontWeight="600"
              >
                {card.title}
              </Typography>
            </Stack>
            <ChartMenu />
          </Stack>
          <Grid
            container
            sx={{
              background: theme.palette.background.default,
              padding: "20px 16px",
              paddingBottom: "10px",
              borderRadius: "12px",
              marginTop: "16px",
            }}
          >
            <Grid size={7} className="metric-chart">
              <MetricBarChart color={card.iconColor} />
            </Grid>
            <Grid size={5}>
              <Typography
                color="secondary.dark"
                fontWeight="600"
                sx={{ textAlign: "end", paddingBottom: "8px" }}
              >
                {card.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: card.iconColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  gap: "4px",
                }}
              >
                {card.percentageIcon}
                30.6%
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default MetricCards;
