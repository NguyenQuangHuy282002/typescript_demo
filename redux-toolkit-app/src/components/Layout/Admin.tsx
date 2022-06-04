import { Box, createTheme, ThemeProvider } from "@mui/material";
import * as React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import StudentFeature from "../../features/student";
import Dashboard from "../../features/dashboard";
import Header from "../Common/Header";
import SideBar from "../Common/SideBar";

const theme = createTheme();

export function AdminLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "auto 1fr",
          gridTemplateColumns: "300px 1fr",
          gridTemplateAreas: `"header header "
        "sidebar main"`,
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            gridArea: "header",
          }}
        >
          <Header />
        </Box>

        <Box
          sx={{
            gridArea: "sidebar",
            bgcolor: "background.paper",
            borderRight: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <SideBar />
        </Box>

        <Box
          sx={{
            gridArea: "main",
            bgcolor: "background.paper",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
