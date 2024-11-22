import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import Providers from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Comino",
  description: "Turismo na serra gaúcha",
  icons: {
    icon: [
      {
        url: "/images/favicon.ico",
        href: "/images/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
