import { Dispatch, SetStateAction } from "react";
import {
  AppBar,
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Toolbar,
} from "@mui/material";
import { IoMenu, IoMoon } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { HiSun } from "react-icons/hi";
import { useThemeContext } from "../../contexts/ThemeContext";

type HeaderProps = {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ openSidebar, setOpenSidebar }: HeaderProps) => {
  const { isDarkMode, setIsDarkMode } = useThemeContext();
  return (
    <AppBar
      elevation={0}
      sx={{
        position: "fixed",
        right: "0",
        background: "transparent",
        backdropFilter: "blur(8px)",
        zIndex: 1200,
        width: openSidebar
          ? { lg: "calc(100% - 251px)" }
          : { lg: "calc(100% - 83px)" },
        transition: "all 0.5s",
      }}
    >
      <Toolbar
        sx={{ px: { xs: "8px", sm: "16px" }, minHeight: "68px !important" }}
      >
        <IconButton
          onClick={() => setOpenSidebar(!openSidebar)}
          sx={{
            color: "secondary.main",
          }}
        >
          <IoMenu size={24} />
        </IconButton>
        <Box sx={{ width: "100%", ml: { xs: "0", md: "16px" } }}>
          <FormControl sx={{ width: { xs: "100%", md: "224px" } }}>
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start" sx={{ mr: "-4px" }}>
                  <LuSearch size={18} />
                </InputAdornment>
              }
              placeholder="Ctrl + K"
              sx={{
                height: "40px",
                fontSize: "14px",
                borderRadius: "8px",
                "& .MuiOutlinedInput-input": { py: "8px", pl: "12px" },
              }}
            />
          </FormControl>
        </Box>
        <IconButton
          onClick={() => setIsDarkMode(!isDarkMode)}
          sx={{
            color: "secondary.main",
            height: "40px",
            width: "40px",
          }}
        >
          {isDarkMode ? <HiSun size={24} /> : <IoMoon size={20} />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
