import { Box, Grid } from "@mui/material";
import Banner from "../../components/dashboard/Banner";
import MetricCards from "../../components/dashboard/MetricCards";
import CustomerChart from "../../components/dashboard/CustomerChart";
import ProjectCard from "../../components/dashboard/ProjectCard";

const Dashboard = () => {
  return (
    <Box>
      <Banner />
      <MetricCards />
      <Grid container spacing="16px" sx={{ paddingTop: "16px" }}>
        <CustomerChart />
        <ProjectCard />
      </Grid>
    </Box>
  );
};

export default Dashboard;
