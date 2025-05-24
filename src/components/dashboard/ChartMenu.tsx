import { useState, MouseEvent } from "react";
import { Box, IconButton, ListItemButton, Menu, useTheme } from "@mui/material";
import { IoMdMore } from "react-icons/io";

const ChartMenu = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        sx={{
          color: "secondary.main",
        }}
        onClick={handleClick}
      >
        <IoMdMore />
      </IconButton>
      <Menu
        id="wallet-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "wallet-button",
          sx: { p: 1.25, minWidth: "150px" },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          ".MuiPopover-paper": {
            backgroundImage: "none",
            borderRadius: "8px",
          },
          ".MuiList-root": {
            padding: "8px",
          },
          "& .MuiListItemButton-root": {
            borderRadius: "8px",
            color: theme.palette.secondary.main,
            fontSize: "14px",
            padding: "10px 16px",
            "&:hover": {
              bgcolor:
                theme.palette.mode === "dark"
                  ? theme.palette.background.default
                  : "rgba(0,0,0,0.04)",
            },
          },
        }}
      >
        <ListItemButton onClick={handleClose}>Today</ListItemButton>
        <ListItemButton onClick={handleClose}>Weekly</ListItemButton>
        <ListItemButton onClick={handleClose}>Monthly</ListItemButton>
      </Menu>
    </Box>
  );
};
export default ChartMenu;
