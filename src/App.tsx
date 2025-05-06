import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Router from "./routes";
import { ThemeContext } from "./contexts/ThemeContext";
import { darkTheme, lightTheme } from "./theme/theme";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {/*==== New Method router ====*/}
        <RouterProvider router={Router} />

        {/*==== Old Method router ====*/}
        {/* <Router /> */}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
