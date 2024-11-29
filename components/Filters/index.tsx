import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { usePlacesContext } from "@/contexts/PlacesContext";

interface FilterProps {
  className?: string; // Permite passar className como prop
}

const Filter: React.FC<FilterProps> = ({ className }) => {
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedVisibility, setSelectedVisibility] = useState<string>("");
  const { places, setFilteredPlaces } = usePlacesContext();

  const handleTypeFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedType(value);
  };

  // Função que será chamada quando o filtro de visibilidade mudar
  const handleVisibilityFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setSelectedVisibility(value);
  };

  useEffect(() => {
    let filtered = places;

    if (selectedType) {
      filtered = filtered.filter((place) =>
        place.type.includes(
          selectedType as "restaurant" | "atraction" | "route"
        )
      );
    }

    if (selectedVisibility) {
      filtered = filtered.filter(
        (place) => place.popularity === selectedVisibility
      );
    }

    setFilteredPlaces(filtered);
  }, [selectedType, selectedVisibility, places, setFilteredPlaces]);

  return (
    <div className={`${className}`}>
      <h2 className="flex text-xl font-bold mb-4 gap-2 justify-start items-center">
        <FaFilter /> Filtros
      </h2>

      <div>
        <label className="block mb-2">Tipo:</label>
        <select
          className="block w-full p-2 border rounded"
          value={selectedType}
          onChange={handleTypeFilterChange}
        >
          <option value="">Todos</option>
          <option value="restaurant">Restaurantes</option>
          <option value="atraction">Atrações</option>
          <option value="route">Rota</option>
        </select>

        <div className="mt-4">
          <label className="block mb-2">Visibilidade:</label>
          <select
            className="block w-full p-2 border rounded"
            onChange={handleVisibilityFilterChange}
          >
            <option value="">Todas</option>
            <option value="alta">Muito conhecido</option>
            <option value="media">Conhecido na região</option>
            <option value="baixa">Pouco conhecido</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
