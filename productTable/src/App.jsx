import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Nav from "./components/Nav";
import { createBrowserRouter, Outlet } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import { useState } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/create-products",
        element: <AddProduct />,
      },
    ],
  },
]);
function App() {
  const [isDark, setIsDark] = useState(localStorage.getItem('mode')|| false);
  const darkTheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Nav dark={[isDark, setIsDark]} />
      <Box sx={{ px: 2, py: 1 }}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

export default App;
//pId , pname, rate , quantity, price
//actions = delete , update , add
