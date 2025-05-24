import { SyntheticEvent, useState } from "react";
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import ChartMenu from "./ChartMenu";
import { RiArrowLeftRightLine } from "react-icons/ri";

const tabList = [{ title: "All" }, { title: "Success" }, { title: "Pending" }];

const tabListContent = {
  All: [
    {
      icon: "ai",
      title: "Apple Inc.",
      subtitle: "#BREEZE-T00232",
      amount: "$210,000",
      percentageIcon: <GoArrowDownLeft size={16} />,
      percentage: "10.6%",
      percentageColor: "#dc2626",
    },
    {
      icon: "sm",
      title: "Spotify Music",
      subtitle: "#BREEZE-T00233",
      amount: "-10,000",
      percentageIcon: <GoArrowUpRight size={16} />,
      percentage: "30.6%",
      percentageColor: "#2ca87f",
    },
    {
      icon: "md",
      title: "Medium",
      subtitle: "06:30 pm",
      amount: "-26",
      percentageIcon: <RiArrowLeftRightLine size={16} />,
      percentage: "5%",
      percentageColor: "#e58a00",
    },
    {
      icon: "u",
      title: "Uber",
      subtitle: "08:40 pm",
      amount: "+2,10,000",
      percentageIcon: <GoArrowUpRight size={16} />,
      percentage: "10.6%",
      percentageColor: "#2ca87f",
    },
  ],
  Success: [
    {
      icon: "u",
      title: "Uber",
      subtitle: "08:40 pm",
      amount: "+2,10,000",
      percentageIcon: <GoArrowUpRight size={16} />,
      percentage: "10.6%",
      percentageColor: "#2ca87f",
    },
    {
      icon: "ai",
      title: "Apple Inc.",
      subtitle: "#BREEZE-T00232",
      amount: "$210,000",
      percentageIcon: <GoArrowDownLeft size={16} />,
      percentage: "10.6%",
      percentageColor: "#dc2626",
    },
    {
      icon: "sm",
      title: "Spotify Music",
      subtitle: "#BREEZE-T00233",
      amount: "-10,000",
      percentageIcon: <GoArrowUpRight size={16} />,
      percentage: "30.6%",
      percentageColor: "#2ca87f",
    },
    {
      icon: "md",
      title: "Medium",
      subtitle: "06:30 pm",
      amount: "-26",
      percentageIcon: <RiArrowLeftRightLine size={16} />,
      percentage: "5%",
      percentageColor: "#e58a00",
    },
  ],
  Pending: [
    {
      icon: "sm",
      title: "Spotify Music",
      subtitle: "#BREEZE-T00233",
      amount: "-10,000",
      percentageIcon: <GoArrowUpRight size={16} />,
      percentage: "30.6%",
      percentageColor: "#2ca87f",
    },
    {
      icon: "md",
      title: "Medium",
      subtitle: "06:30 pm",
      amount: "-26",
      percentageIcon: <RiArrowLeftRightLine size={16} />,
      percentage: "5%",
      percentageColor: "#e58a00",
    },
    {
      icon: "u",
      title: "Uber",
      subtitle: "08:40 pm",
      amount: "+2,10,000",
      percentageIcon: <GoArrowUpRight size={16} />,
      percentage: "10.6%",
      percentageColor: "#2ca87f",
    },
    {
      icon: "ai",
      title: "Apple Inc.",
      subtitle: "#BREEZE-T00232",
      amount: "$210,000",
      percentageIcon: <GoArrowDownLeft size={16} />,
      percentage: "10.6%",
      percentageColor: "#dc2626",
    },
  ],
};

const ProjectCard = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Grid
      size={{ xl: 4.5, md: 6, xs: 12 }}
      sx={{
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
          padding: { sm: "20px", xs: "16px" },
          paddingBottom: "3px !important",
        }}
      >
        <Typography color="secondary.dark" fontWeight="600">
          Transactions
        </Typography>
        <ChartMenu />
      </Stack>
      <Box
        sx={{
          borderBottom: `1px solid ${theme.palette.divider}`,
          paddingX: { sm: "20px", xs: "16px" },
          height: "48px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            ".MuiTab-root": {
              borderRadius: "4px",
              textTransform: "capitalize",
              minWidth: "auto",
            },
          }}
        >
          {tabList.map((tab, index) => (
            <Tab value={index} label={tab.title} />
          ))}
        </Tabs>
      </Box>
      <Box>
        <List sx={{ padding: "0" }}>
          {(
            tabListContent[
              tabList[value].title as keyof typeof tabListContent
            ] || []
          ).map((card, index) => (
            <ListItem
              key={index}
              sx={{
                padding: { sm: "12px 20px", xs: "12px 16px" },
                borderBottom: `1px solid ${theme.palette.divider}`,
                "&:last-child": {
                  border: "none",
                },
              }}
            >
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
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
                      background: "transparent",
                      border: `1px solid ${theme.palette.divider}`,
                      color: theme.palette.secondary.dark,
                      textTransform: "uppercase",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    {card.icon}
                  </Avatar>
                  <Box>
                    <Typography
                      color="secondary.dark"
                      variant="body2"
                      fontWeight="600"
                    >
                      {card.title}
                    </Typography>
                    <Typography color="secondary" variant="caption">
                      {card.subtitle}
                    </Typography>
                  </Box>
                </Stack>
                <Box>
                  <Typography
                    color="secondary.dark"
                    variant="body2"
                    fontWeight="600"
                    sx={{ textAlign: "end", marginBottom: "2px" }}
                  >
                    {card.amount}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: card.percentageColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      gap: "4px",
                    }}
                  >
                    {card.percentageIcon}
                    {card.percentage}
                  </Typography>
                </Box>
              </Stack>
            </ListItem>
          ))}
        </List>
      </Box>
    </Grid>
  );
};

export default ProjectCard;
