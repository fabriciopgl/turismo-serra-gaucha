"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

interface LoggerContextProps {
  logHomeVisit: () => void;
}

const LoggerContext = createContext<LoggerContextProps | undefined>(undefined);

const COOKIE_NAME = "site_visited"; // Nome do cookie
const COOKIE_EXPIRATION_HOURS = 3; // Tempo de expiração do cookie em horas
const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_ACCESS_LOGS_SCRIPT_URL!;

export const LoggerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [logSent, setLogSent] = useState(false);

  const logHomeVisit = async () => {
    if (logSent) return;

    const hasVisited = Cookies.get(COOKIE_NAME);
    if (hasVisited) {
      console.log("Log já enviado recentemente. Evitando novo envio.");
      return;
    }

    try {
      const ipInfoResponse = await axios.get(
        "https://ipinfo.io/json?token=6cf47125441753"
      );

      const logData = {
        ...ipInfoResponse.data,
        userAgent: navigator.userAgent,
        referrer: document.referrer || "Direto",
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        timestamp: new Date().toISOString(),
      };

      console.log("Log de acesso enviado:", logData);

      // Envia os dados para sua API
      await axios.post(SCRIPT_URL, logData, {
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      Cookies.set(COOKIE_NAME, "true", {
        expires: COOKIE_EXPIRATION_HOURS / 24,
      });
      setLogSent(true);
    } catch (error) {
      console.error("Erro ao enviar log:", error);
    }
  };

  useEffect(() => {
    logHomeVisit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LoggerContext.Provider value={{ logHomeVisit }}>
      {children}
    </LoggerContext.Provider>
  );
};

export const useLogger = (): LoggerContextProps => {
  const context = useContext(LoggerContext);
  if (!context) {
    throw new Error("useLogger must be used within a LoggerProvider");
  }
  return context;
};
