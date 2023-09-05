import { FC } from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import Logo from "../assets/Logo.png";

export interface NavbarProps {
  label: string;
  onclick: () => void;
}

const Navbar: FC<NavbarProps> = ({ label, onclick }) => {
  return (
    <AppBar
      position="sticky"
      sx={{ justifyContent: "center", width: "100%", background: "white" }}
    >
      <Toolbar
        sx={{
          height: 100,
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          minWidth="100%"
        >
          <img src={Logo} alt="Logo" height="80px" />

          <Box sx={{ alignItems: "right" }} marginRight="48px">
            <button onClick={onclick}>{label}</button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
