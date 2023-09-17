import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Trade",
  description: "Crypto Dashboard with next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="/images/favicon.svg"
        type="image/x-icon"
      />
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
