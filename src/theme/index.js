import { createTheme } from "@mui/material/styles";
import { grey, purple, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#DC3224",
      light: "#F5DEDB",
      dark: "#B4342A",
      contrastText: "#C92D21",
    },
    secondary: {
      main: "#7B7FC8",
      light: "#DCDEF5",
      dark: "#3A3D7D",
      contrastText: "#4B4FA6",
    },
    additional: {
      main: "#C5C9D0",
      light: "#EBEBEB",
      dark: "#4C4C50",
      contrastText: "#75767A",
    },
    error: {
      main: "#DC3224",
      light: "#F5DEDB",
      dark: "#B4342A",
      contrastText: "#C92D21",
    },
    warning: {
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#f57c00",
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "#0CC593",
    },
    background: {
      main: "#F5DEDB",
      light: "#DCDEF5",
      dark: "#EBEBEB",
    },
  },
  typography: {
    h1: {
      fontFamily: ["DM Sans"].join(","),
      fontSize: 48,
      fontWeight: 500,
      fontStyle: "normal",
      color: "#000",
    },
    h2: {
      fontFamily: ["DM Sans"].join(","),
      fontSize: 32,
      fontWeight: 500,
      fontStyle: "normal",
      color: "#000",
    },
    h3: {
      fontFamily: ["DM Sans"].join(","),
      fontSize: 24,
      fontWeight: 400,
      fontStyle: "normal",
      color: "#000",
    },
    h4: {
      fontFamily: ["DM Sans"].join(","),
      fontSize: 20,
      fontWeight: 400,
      fontStyle: "italic",
      color: "#000",
    },
    h5: {
      fontFamily: ["DM Sans"].join(","),
      fontSize: 16,
      fontWeight: 400,
      fontStyle: "normal",
      color: "#000",
    },
    h6: {
      fontFamily: ["DM Sans"].join(","),
      fontSize: 14,
      fontWeight: 400,
      fontStyle: "normal",
      color: "#000",
    },
    body1: {
      fontFamily: ["roboto"].join(","),
      fontSize: 24,
      fontWeight: 400,
      fontStyle: "normal",
      color: "#000",
    },
    body2: {
      fontFamily: ["roboto"].join(","),
      fontSize: 18,
      fontWeight: 400,
      fontStyle: "normal",
      color: "#000",
    },
    subtitle1: {
      fontFamily: ["roboto"].join(","),
      fontWeight: 400,
      fontSize: 14,
      fontStyle: "normal",
      color: "#000",
    },
  },
  spacing: 8,
});

export default theme;
