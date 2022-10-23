import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { ThemeProvider, createTheme } from "@mui/material";
import Login from "./components/Login";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6c37",
      contrastText: "#001e3c",
    },
    secondary: {
      main: "#01a5e6",
      contrastText: "#fff",
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
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
