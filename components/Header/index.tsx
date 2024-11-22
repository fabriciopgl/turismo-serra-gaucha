"use client";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

import { useAuth } from "@/contexts/AuthContext";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useMemo, useState } from "react";
import {
  FaBars,
  FaCogs,
  FaHeart,
  FaHome,
  FaInfo,
  FaQuestion,
  FaSignOutAlt,
  FaTimes,
  FaUser,
  FaWineGlassAlt,
} from "react-icons/fa";
import Filter from "../Filters";
import PreferencesModal from "../PreferencesModal";

type items = "home" | "favoritos" | "sobre";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<items>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const pathname = usePathname();
  const { user, isAnonymous, handleLogout } = useAuth();

  useEffect(() => {
    if (pathname.includes("sobre")) {
      setActiveItem("sobre");
    } else if (pathname.includes("favoritos")) {
      setActiveItem("favoritos");
    } else {
      setActiveItem("home");
    }
  }, [pathname]);

  const filterIcon: ReactNode = useMemo(() => {
    return (
      <div>
        <FaBars />
      </div>
    );
  }, []);

  const closeIcon: ReactNode = useMemo(() => {
    return (
      <div>
        <FaTimes />
      </div>
    );
  }, []);

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isBordered
        className="w-full sticky top-0 z-40 backdrop-blur-lg backdrop-saturate-150 bg-background/70"
      >
        <NavbarBrand>
          <FaWineGlassAlt className="text-3xl" />
          <p
            className="font-bold text-2xl"
            style={{ fontFamily: "'Lustria', sans-serif" }}
          >
            Comino
          </p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4 justify-center">
          <NavbarItem>
            <Button
              as={Link}
              href="/"
              variant={activeItem === "home" ? "solid" : "light"}
              startContent={<FaHome />}
              radius="lg"
            >
              Home
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href="/favoritos"
              variant={activeItem === "favoritos" ? "solid" : "light"}
              startContent={<FaHeart />}
              radius="lg"
            >
              Favoritos
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href="/sobre"
              variant={activeItem === "sobre" ? "solid" : "light"}
              startContent={<FaInfo />}
              radius="lg"
            >
              Sobre
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color={isAnonymous ? "default" : "success"}
                name={`${user?.given_name} ${user?.family_name}`}
                size="sm"
                src={isAnonymous ? "" : user?.picture}
                fallback={<FaUser />}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Bem vindo,</p>
                <p className="font-semibold">{`${user?.given_name} ${user?.family_name}`}</p>
              </DropdownItem>
              <DropdownItem
                startContent={<FaCogs />}
                key="preferences"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Preferências
              </DropdownItem>
              <DropdownItem startContent={<FaQuestion />} key="help">
                Ajuda
              </DropdownItem>
              <DropdownItem
                onClick={handleLogout}
                startContent={<FaSignOutAlt />}
                key="logout"
                color={isAnonymous ? "success" : "danger"}
              >
                {isAnonymous ? "Fazer login" : "Log Out"}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          icon={isMenuOpen ? closeIcon : filterIcon}
        />

        <NavbarMenu>
          <NavbarMenuItem>
            <Filter className="w-full p-4" />
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>

      <PreferencesModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      />
    </>
  );
}
