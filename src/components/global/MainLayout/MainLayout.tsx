"use client";

import Navbar from "../Navbar/Navbar";
import Loading from "../Loading/Loading";
import { LanguageProvider } from "@/shared/contexts/LanguageContext";

interface IRootLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IRootLayout) => {
  return (
    <LanguageProvider>
      <Loading />
      <Navbar />
      {children}
    </LanguageProvider>
  );
};

export default MainLayout;
