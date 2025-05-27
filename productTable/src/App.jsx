import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./App.css";
import Nav from "./components/Nav";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import ErrorBoundry from "./components/ErrorBoundry";
import ErrorElement from "./components/ErrorElement";

const ProductList = lazy(() => import("./components/ProductList"));
const AddProduct = lazy(() => import("./components/AddProduct"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={
              <Typography variant="h2" sx={{ textAlign: "center" }}>
                Loading...
              </Typography>
            }
          >
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: "/create-products",
        element: (
          <Suspense
            fallback={
              <Typography variant="h2" sx={{ textAlign: "center" }}>
                Loading...
              </Typography>
            }
          >
            <AddProduct />
          </Suspense>
        ),
      },
    ],
  },
]);
function App() {
  const [isDark, setIsDark] = useState(localStorage.getItem("mode") || false);
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
        <ErrorBoundry>
          <Outlet />
        </ErrorBoundry>
      </Box>
    </ThemeProvider>
  );
}

export default App;
//pId , pname, rate , quantity, price
//actions = delete , update , add
