"use client";
import { Place } from "@/domains/Places/types";
import React, { createContext, useContext, useEffect, useState } from "react";

interface PlacesContextType {
  places: Place[];
  loading: boolean;
  error: string | null;
}

const PlacesContext = createContext<PlacesContextType | undefined>(undefined);

const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_PLACES_SCRIPT_URL!;

export const PlacesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(SCRIPT_URL);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }
        const places = await response.json();
        setPlaces(places.data || []);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <PlacesContext.Provider value={{ places, loading, error }}>
      {children}
    </PlacesContext.Provider>
  );
};

export const usePlacesContext = () => {
  const context = useContext(PlacesContext);
  if (!context) {
    throw new Error("usePlacesContext deve ser usado dentro de PlacesProvider");
  }
  return context;
};
