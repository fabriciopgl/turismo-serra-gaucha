"use client";
import { Place, PlaceDetails } from "@/domains/Places/types";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface PlacesContextType {
  places: Place[];
  loading: boolean;
  error: string | null;
  placeDetails: PlaceDetails | undefined;
  fetchPlaceDetails: (placeId: string) => void;
}

const PlacesContext = createContext<PlacesContextType | undefined>(undefined);

const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_PLACES_SCRIPT_URL!;
const PLACE_DETAILS_SCRIPT_URL =
  process.env.NEXT_PUBLIC_GOOGLE_PLACE_DETAILS_SCRIPT_URL!;

export const PlacesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails | undefined>(
    undefined
  );
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

  const fetchPlaceDetails = async (placeId: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${PLACE_DETAILS_SCRIPT_URL}?placeId=${placeId}`
      );
      setPlaceDetails(response.data[0]);
    } catch (err: unknown) {
      console.error("Error fetching place details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PlacesContext.Provider
      value={{ places, placeDetails, loading, error, fetchPlaceDetails }}
    >
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
