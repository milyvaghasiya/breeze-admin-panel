import { Dispatch, SetStateAction } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  alpha,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { BiChat, BiCreditCard, BiHome } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const menuItems = [
  { label: "Dashboard", icon: <BiHome size={24} />, path: "/dashboard" },
  { label: "Student", icon: <PiStudentBold size={24} />, path: "/student" },
  { label: "Payment", icon: <BiCreditCard size={24} />, path: "/payment" },
  { label: "Chat", icon: <BiChat size={24} />, path: "/chat" },
  {
    label: "Pricing",
    icon: <RiMoneyDollarCircleLine size={24} />,
    path: "/pricing",
  },
];

type SidebarProps = {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
};
const Sidebar = ({ openSidebar, setOpenSidebar }: SidebarProps) => {
  const location = useLocation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up(1024));

  const handleClick = () => {
    if (!isDesktop) {
      setOpenSidebar(false);
    }
  };
  const SidebarContent = (
    <Box
      sx={{
        width: openSidebar ? "250px" : "82px",
        height: "100vh",
        transition: "all 0.5s",
      }}
    >
      <Link
        to="/dashboard"
        style={{
          padding: "16px 24px",
          display: "flex",
          height: "72px",
          transition: "all 0.5s",
        }}
      >
        {openSidebar ? (
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            style={{ height: "40px" }}
          />
        ) : (
          <img
            src="/assets/images/logo-mini.svg"
            alt="logo"
            style={{ height: "40px" }}
          />
        )}
      </Link>
      <List
        sx={{
          width: "100%",
          padding: "10px",
          maxHeight: "calc(100% - 72px)",
          overflowY: "auto",
        }}
      >
        {menuItems.map((menu, index) => {
          const isActive = location.pathname.startsWith(menu.path);
          return (
            <ListItemButton
              key={index}
              component={Link}
              to={menu.path}
              onClick={handleClick}
              sx={{
                marginBottom: "8px",
                height: "44px",
                borderRadius: "8px",
                padding: openSidebar ? "0 16px" : "0 12px",
                justifyContent: openSidebar ? "start" : "center",
                background: isActive
                  ? theme.palette.mode === "dark"
                    ? alpha(theme.palette.primary.main, 0.16)
                    : alpha(theme.palette.primary.main, 0.08)
                  : "",
                color: isActive
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main,
                transition: "all 0.5s",
                "&:hover": {
                  background:
                    theme.palette.mode === "dark"
                      ? alpha(theme.palette.primary.main, 0.16)
                      : alpha(theme.palette.primary.main, 0.08),
                  color: theme.palette.primary.main,
                  ".MuiListItemIcon-root": {
                    color: `${theme.palette.primary.main} !important`,
                  },
                },
                "&:last-child": { marginBottom: "0" },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "auto",
                  color: isActive
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                  transition: "all 0.5s",
                }}
              >
                {menu.icon}
              </ListItemIcon>
              <ListItemText
                primary={menu.label}
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: openSidebar ? "180px" : { lg: "0", xs: "auto" },
                  paddingLeft: openSidebar ? "16px" : "0",
                  transitionDuration: "0.5s",
                  marginBottom: "2px",
                  transitionProperty: "max-width, padding",
                  ".MuiListItemText-primary": {
                    fontSize: "15px",
                    whiteSpace: "nowrap",
                  },
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
  return (
    <>
      {isDesktop ? (
        <Box
          sx={{
            position: "fixed",
            left: "0",
            top: "0",
            zIndex: "1300",
            height: "100vh",
            borderRight: `1px dashed ${theme.palette.divider}`,
            display: { xs: "none", lg: "flex" },
            boxShadow: `0px 8px 24px ${
              theme.palette.mode === "dark"
                ? "rgba(62, 72, 83, 0.1)"
                : "rgba(19, 25, 32, 0.08)"
            }`,
          }}
        >
          {SidebarContent}
        </Box>
      ) : (
        <Drawer
          anchor="left"
          open={openSidebar}
          onClose={() => setOpenSidebar(false)}
          slotProps={{
            paper: {
              sx: {
                background: theme.palette.mode === "dark" ? "#1d262f" : "",
              },
            },
          }}
        >
          {SidebarContent}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
