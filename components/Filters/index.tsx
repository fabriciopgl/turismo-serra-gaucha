import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

interface FilterProps {
  className?: string; // Permite passar className como prop
}

const Filter: React.FC<FilterProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${className}`}>
      <h2 className="flex text-xl font-bold mb-4 gap-2 justify-start items-center">
        <FaFilter /> Filtros
      </h2>

      <div>
        <label className="block mb-2">Tipo:</label>
        <select className="block w-full p-2 border rounded">
          <option value="">Todos</option>
          <option value="restaurante">Restaurantes</option>
          <option value="atracao">Atrações</option>
          <option value="atracao">Rota</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="block mb-2">Avaliação:</label>
        <select className="block w-full p-2 border rounded">
          <option value="">Todas</option>
          <option value="alta">Alta</option>
          <option value="media">Média</option>
          <option value="media">Baixa</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
