import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

type FavoriteContextType = {
  favorites: number[];
  addFavorite: (placeId: number) => void;
  removeFavorite: (placeId: number) => void;
  fetchFavorites: (userId: number) => void;
  isLoading: boolean;
};

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined
);

const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_FAVORITE_PLACES_SCRIPT_URL!;

export const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { user, isAnonymous } = useAuth();

  const fetchFavorites = async (userId: number) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${SCRIPT_URL}?userId=${userId}`);
      setFavorites(response.data);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addFavorite = async (placeId: number) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, placeId];
      if (user && !isAnonymous) updateFavoriteInSheet(placeId, true);
      return updatedFavorites;
    });
  };

  const removeFavorite = async (placeId: number) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((id) => id !== placeId);
      if (user && !isAnonymous) updateFavoriteInSheet(placeId, false);
      return updatedFavorites;
    });
  };

  const updateFavoriteInSheet = async (
    placeId: number,
    isFavorite: boolean
  ) => {
    try {
      const userId = user?.internalId;
      await axios.post(
        SCRIPT_URL,
        {
          userId,
          placeId,
          isFavorite,
        },
        {
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        }
      );
    } catch (error) {
      console.error("Error updating favorite in sheet:", error);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        fetchFavorites,
        isLoading,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

// Hook para acessar o contexto
export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoriteProvider");
  }
  return context;
};
