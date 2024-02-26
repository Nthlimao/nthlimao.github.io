import type { Metadata } from "next";
import MainLayout from "@/components/global/MainLayout/MainLayout";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nathalia Lima",
  description: "Nathalia Lima website",
};

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Readonly<IRootLayout>) => {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
};

export default RootLayout;
