import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "../styles/globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Comino",
  description: "Turismo na serra gaúcha",
  icons: {
    icon: [
      {
        url: "/turismo-serra-gaucha/images/favicon.ico",
        href: "/turismo-serra-gaucha/images/favicon.ico",
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
      <head>
        <link rel="icon" href="/turismo-serra-gaucha/images/favicon.ico" />
      </head>
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
