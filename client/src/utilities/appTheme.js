import { createTheme } from "@mui/material";
const appTheme = createTheme({
  palette: {
    primary: {
      main: "#ff6c37",
      contrastText: "#001e3c",
    },
    secondary: {
      main: "#01a5e6",
      contrastText: "#fff",
    },
    darkHue: {
      main: "#001e3c",
      contrastText: "#e0eef9",
    },
  },
  typography: {
    fontFamily: "Nunito",
    fontSize: 16,
    fontWeightLight: 600,
    fontWeightRegular: 700,
    fontWeightMedium: 800,
    fontWeightBold: 900,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
export default appTheme;
