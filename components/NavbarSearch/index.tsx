import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import { FaSearch } from "react-icons/fa";

interface NavbarSearchProps {
  onSearch: (searchValue: string) => void;
}

const NavbarSearch: React.FC<NavbarSearchProps> = ({ onSearch }) => {
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onSearch(event.target.value);
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={<Kbd className="hidden lg:inline-block" keys={["enter"]} />}
      labelPlacement="outside"
      placeholder="Descobrir lugares..."
      startContent={<FaSearch />}
      type="search"
      onChange={handleSearchInputChange}
    />
  );

  return <div className="hidden lg:flex">{searchInput}</div>;
};

export default NavbarSearch;
