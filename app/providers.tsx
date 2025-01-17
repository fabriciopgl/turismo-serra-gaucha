"use client";
import { AuthProvider } from "@/contexts/AuthContext";
import { FavoriteProvider } from "@/contexts/FavoritePlacesContext";
import { LoggerProvider } from "@/contexts/LogContext";
import { PlacesProvider } from "@/contexts/PlacesContext";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useEffect, useState } from "react";

interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: Omit<ThemeProviderProps, "children">;
}

const Providers: React.FC<ProvidersProps> = ({ children, themeProps }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider disableTransitionOnChange {...themeProps}>
        <AuthProvider>
          <FavoriteProvider>
            <PlacesProvider>
              <LoggerProvider>{children}</LoggerProvider>
            </PlacesProvider>
          </FavoriteProvider>
        </AuthProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default Providers;
