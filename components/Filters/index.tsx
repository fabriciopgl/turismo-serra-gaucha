import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { usePlacesContext } from "@/contexts/PlacesContext"; // Importando o context

interface FilterProps {
  className?: string; // Permite passar className como prop
}

const Filter: React.FC<FilterProps> = ({ className }) => {
  const [selectedType, setSelectedType] = useState<string>(""); // Estado para o tipo selecionado
  const { places, setFilteredPlaces } = usePlacesContext(); // Acessa o context

  // Função que será chamada quando o filtro de tipo mudar
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedType(value);
  };

  // Filtra os lugares com base no tipo selecionado
  useEffect(() => {
    if (selectedType === "") {
      setFilteredPlaces(places); // Se nenhum tipo for selecionado, mostra todos
    } else {
      const filtered = places.filter((place) =>
        place.type.includes(
          selectedType as "restaurant" | "atraction" | "route"
        )
      );
      setFilteredPlaces(filtered);
    }
  }, [selectedType, places, setFilteredPlaces]);

  return (
    <div className={`${className}`}>
      <h2 className="flex text-xl font-bold mb-4 gap-2 justify-start items-center">
        <FaFilter /> Filtros
      </h2>

      {/* Filtro de tipo */}
      <div>
        <label className="block mb-2">Tipo:</label>
        <select
          className="block w-full p-2 border rounded"
          value={selectedType}
          onChange={handleFilterChange}
        >
          <option value="">Todos</option>
          <option value="restaurant">Restaurantes</option>
          <option value="atraction">Atrações</option>
          <option value="route">Rota</option>
        </select>

        <div className="mt-4">
          <label className="block mb-2">Visibilidade:</label>
          <select className="block w-full p-2 border rounded">
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
