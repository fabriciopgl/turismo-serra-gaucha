"use client";
import PlaceCard from "@/components/PlaceCard";
import Filter from "@/components/Filters";
import NavbarSearch from "@/components/NavbarSearch";

import usePlaces, { Place } from "@/hooks/usePlaces";

import { Button, Card, CardBody } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";

export default function HomePage() {
  const { places } = usePlaces();
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
          {currentPlaces.map((place) => (
            <PlaceCard
              key={place.id}
              name={place.name}
              imageUrl={place.image}
              description={place.description}
            />
          ))}
        </div>

        {currentPlaces.length > 0 ? (
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
