import { Box, Paper } from "@mui/material";
import { NavLink } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
const Nav = ({ dark }) => {
  const [isDark, setIsDark] = dark;
  return (
    <Paper
      sx={{
        display: "flex",
        gap: 2,
        fontSize: 18,
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <NavLink to="/">Products</NavLink>
      <NavLink to="/create-products">Create Prouducts</NavLink>
      <span
        onClick={() => {
          setIsDark((prev) => !prev);
          localStorage.setItem("mode", isDark);
        }}
      >
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </Paper>
  );
};

export default Nav;
