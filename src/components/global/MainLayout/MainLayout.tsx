"use client";

import { ThemeProvider } from "styled-components";

import MainStyles from "@/styles/main";
import theme from "@/styles/theme";

import Navbar from "../Navbar/Navbar";
import MainLayoutStyles from "./MainLayout.styles";

interface IRootLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IRootLayout) => {
  return (
    <ThemeProvider theme={theme}>
      <MainStyles>
        <MainLayoutStyles>
          <Navbar />
          {children}
        </MainLayoutStyles>
      </MainStyles>
    </ThemeProvider>
  );
};

export default MainLayout;
