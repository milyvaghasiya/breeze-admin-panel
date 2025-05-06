import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  const theme = useTheme();
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setOpenSidebar(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      sx={{
        background: theme.palette.background.default,
        fontFamily: "Inter",
        color: theme.palette.secondary.main,
      }}
    >
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Box
        sx={{
          width: openSidebar
            ? { lg: "calc(100% - 250px)" }
            : { lg: "calc(100% - 82px)" },
          marginLeft: openSidebar ? { lg: "250px" } : { lg: "82px" },
          minHeight: "100vh",
          transition: "all 0.5s",
        }}
      >
        <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <Box sx={{ padding: "16px", paddingTop: "84px" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
