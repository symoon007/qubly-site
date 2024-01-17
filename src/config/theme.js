import { createTheme } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#722ED1",
      medium: "#160637",
      dark: "#020202",
      normal: "#8989A2",
    },
    secondary: {
      main: "#F7F1FF",
      normal: "#FFFFFF",
      dark: '#000000'
      
    },
  },
});

theme = createTheme(theme, {
  typography: {
    link: {
      fontSize: "0.8rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "0.9rem",
      },
      fontWeight: 500,
      color: theme.palette.primary.normal,
      display: "block",
      cursor: "pointer",
    },
    cardTitle: {
      fontSize: "1.2rem",
      display: "block",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
    },
    h7: {
      fontSize: "0.8rem",
      color: theme.palette.secondary.dark
    },
    h8: {
      fontSize: "0.7rem",
    },

    
  },
});

export default theme;
