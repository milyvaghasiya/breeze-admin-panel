import { Dispatch, SetStateAction } from "react";
import {
  alpha,
  AppBar,
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Toolbar,
  useTheme,
} from "@mui/material";
import { IoMenu, IoMoon } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { HiSun } from "react-icons/hi";
import { useThemeContext } from "../../contexts/ThemeContext";
import HeaderNotification from "../../components/HeaderNotification";
import HeaderProfile from "../../components/HeaderProfile";

type HeaderProps = {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ openSidebar, setOpenSidebar }: HeaderProps) => {
  const theme = useTheme();
  const { isDarkMode, setIsDarkMode } = useThemeContext();
  return (
    <AppBar
      elevation={0}
      sx={{
        position: "fixed",
        right: "0",
        background: alpha(theme.palette.background.default, 0.8),
        backdropFilter: "blur(8px)",
        zIndex: 1200,
        width: openSidebar
          ? { lg: "calc(100% - 251px)" }
          : { lg: "calc(100% - 83px)" },
        transition: "width 0.5s",
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
        <Box
          sx={{
            width: "100%",
            ml: "16px",
            display: { xs: "none", sm: "block" },
          }}
        >
          <FormControl sx={{ width: "224px" }}>
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
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: `${theme.palette.primary.main} !important`,
                  borderWidth: "1px!important",
                },
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
            ml: "auto",
          }}
        >
          {isDarkMode ? <HiSun size={24} /> : <IoMoon size={22} />}
        </IconButton>
        <HeaderNotification />
        <HeaderProfile />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
