import type { Metadata } from "next";
import MainLayout from "@/components/global/MainLayout/MainLayout";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "‎ ‎ nthlimão",
  description: "Nathalia Lima website",
};

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Readonly<IRootLayout>) => {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
};

export default RootLayout;
