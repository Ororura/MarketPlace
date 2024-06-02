import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Header } from "@/shared/ui/header";
import StoreProvider from "@/app/providers/StoreProvider";
import { NextFont } from "next/dist/compiled/@next/font";
import { ReactNode } from "react";
import { NotificationAlert } from "@/shared/ui/notificationAlert";

const inter: NextFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Market",
  description: "Generated by create next app",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header>{children}</Header>
          <NotificationAlert></NotificationAlert>
        </body>
      </html>
    </StoreProvider>
  );
}
