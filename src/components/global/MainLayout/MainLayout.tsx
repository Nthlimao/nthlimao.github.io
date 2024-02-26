"use client";

import theme from "@/shared/theme";
import { ThemeProvider } from "styled-components";
import MainLayoutStyles from "./MainLayout.styles";

interface IRootLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IRootLayout) => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayoutStyles>{children}</MainLayoutStyles>
    </ThemeProvider>
  );
};

export default MainLayout;
