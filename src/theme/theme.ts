import { createTheme } from '@mui/material/styles';

const customBreakpoints = {
  values: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  },
};

// Light Theme
export const lightTheme = createTheme({
  breakpoints: customBreakpoints,
  typography: {
    fontFamily: "Inter",
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#4680ff',
    },
    secondary: {
      main: '#5B6B79',
      800: '#1D2630',
      contrastText: '#fff',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    divider: "#bec8d0"
  },
});

// Dark Theme
export const darkTheme = createTheme({
  breakpoints: customBreakpoints,
  typography: {
    fontFamily: "Inter",
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#6293ff',
    },
    secondary: {
      main: '#8996a4',
      800: '#F9FAFB',
      contrastText: '#fff',
    },
    background: {
      default: '#131920',
      paper: '#1D2630',
    },
    divider: "#3e4853"
  },
});

