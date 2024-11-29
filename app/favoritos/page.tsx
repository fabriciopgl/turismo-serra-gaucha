"use client";
import Filter from "@/components/Filters";
import NavbarSearch from "@/components/NavbarSearch";
import PlaceCard from "@/components/PlaceCard";
import { useAuth } from "@/contexts/AuthContext";
import { useFavorites } from "@/contexts/FavoritePlacesContext";
import { usePlacesContext } from "@/contexts/PlacesContext";
import { Card, CardBody } from "@nextui-org/react";
import { useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function FavoritesPage() {
  const [searchValue, setSearchValue] = useState("");

  const { user, isAnonymous } = useAuth();
  const {
    places,
    filteredPlaces,
    loading: placesLoading,
    setFilteredPlaces,
  } = usePlacesContext();
  const {
    favorites,
    fetchFavorites,
    isLoading: favoritesLoading,
  } = useFavorites();

  useEffect(() => {
    if (favorites.length === 0 && user && !isAnonymous)
      fetchFavorites(user?.internalId);
  }, [favorites, fetchFavorites, isAnonymous, user]);

  useEffect(() => {
    const removeAccents = (str: string) => {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const searchTerm = removeAccents(searchValue.trim().toLowerCase());

    const matchingPlaces = places.filter((place) => {
      const placeNameNormalized = removeAccents(place.name.toLowerCase());
      const placeDescriptionNormalized = removeAccents(
        place.description.toLowerCase()
      );

      return (
        placeNameNormalized.includes(searchTerm) ||
        placeDescriptionNormalized.includes(searchTerm)
      );
    });

    setFilteredPlaces(matchingPlaces);
  }, [searchValue, places, setFilteredPlaces]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  console.log(filteredPlaces);

  const userFavoritePlaces = useMemo(() => {
    return filteredPlaces.filter((p) => favorites.some((f) => f === p.id));
  }, [favorites, filteredPlaces]);

  return (
    <div className="container mx-auto flex p-4">
      <Filter className="hidden md:block w-1/6 p-4 border-r border-gray-300" />
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Seus locais favoritos</h1>
          <div className="w-1/3">
            <NavbarSearch onSearch={handleSearch} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 pt-8">
          {favoritesLoading || placesLoading
            ? Array.from({ length: 9 }).map((_, index) => (
                <Card
                  key={index}
                  className="w-80 h-90 mx-auto shadow-lg animate-pulse"
                >
                  <div className="bg-gray-300 h-[250px] w-full object-cover rounded-t-lg"></div>
                  <CardBody className="flex flex-col h-full p-4">
                    <div className="bg-gray-300 h-6 w-3/4 mb-4 rounded"></div>
                    <div className="bg-gray-300 h-4 w-full mb-4 rounded"></div>
                    <div className="bg-gray-300 h-4 w-5/6 rounded mb-4 flex-1"></div>
                    <div className="flex flex-row justify-between items-center gap-2">
                      <div className="bg-gray-300 h-10 w-full rounded-lg"></div>
                      <div className="bg-gray-300 h-10 w-10 rounded-full"></div>
                    </div>
                  </CardBody>
                </Card>
              ))
            : userFavoritePlaces.map((place) => (
                <PlaceCard
                  key={place.id}
                  id={place.id}
                  name={place.name}
                  imageUrl={place.image}
                  description={place.description}
                  favorite={favorites?.some((f) => f === place.id)}
                />
              ))}
        </div>

        {!favoritesLoading &&
          !placesLoading &&
          userFavoritePlaces.length === 0 &&
          !isAnonymous && (
            <div className="flex justify-center items-center mt-4">
              <Card>
                <CardBody className="flex flex-row justify-center items-center gap-2">
                  Nenhum resultado encontrado, tente pesquisar novamente{" "}
                  <FaSearch />
                </CardBody>
              </Card>
            </div>
          )}
      </div>
    </div>
  );
}
