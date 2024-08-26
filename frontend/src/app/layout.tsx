import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './global.css';
import { ThemeProvider } from "@mui/material";
import { Theme } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chanllenge Frontend",
  description: "Desafio frontend Radhark Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={Theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
