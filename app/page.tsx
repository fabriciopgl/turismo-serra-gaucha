"use client";
import Filter from "@/components/Filters";
import NavbarSearch from "@/components/NavbarSearch";
import PlaceCard from "@/components/PlaceCard";
import { useAuth } from "@/contexts/AuthContext";
import { useFavorites } from "@/contexts/FavoritePlacesContext";
import { usePlacesContext } from "@/contexts/PlacesContext";
import { Place } from "@/domains/Places/types";
import { Button, Card, CardBody } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";

export default function HomePage() {
  const { user, isAnonymous } = useAuth();
  const { favorites, fetchFavorites, isLoading } = useFavorites();
  const { places, loading } = usePlacesContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>(places);
  const [searchValue, setSearchValue] = useState("");

  const itemsPerPage = 9;

  const totalPages = Math.ceil(filteredPlaces.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPlaces = filteredPlaces.slice(indexOfFirstItem, indexOfLastItem);

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
    setCurrentPage(1);
  }, [searchValue, places]);

  useEffect(() => {
    if (user && !isAnonymous && favorites.length === 0)
      fetchFavorites(user.internalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isAnonymous]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto flex p-4">
      <Filter className="hidden md:block w-1/6 p-4 border-r border-gray-300" />

      <div className="flex-1 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Descubra a Serra Gaúcha</h1>
          <div className="w-1/3">
            <NavbarSearch onSearch={handleSearch} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-8">
          {loading || isLoading
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
            : currentPlaces.map((place) => (
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

        {!loading && currentPlaces.length > 0 ? (
          <div className="flex justify-center items-center mt-8">
            <Button
              startContent={<FaArrowLeft />}
              className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50 cursor-pointer"
              onClick={goToPreviousPage}
              isDisabled={currentPage === 1}
            >
              Anterior
            </Button>
            <span className="px-4">
              {currentPage} de {totalPages}
            </span>
            <Button
              endContent={<FaArrowRight />}
              className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50 cursor-pointer"
              onClick={goToNextPage}
              isDisabled={currentPage === totalPages}
            >
              Próxima
            </Button>
          </div>
        ) : (
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
