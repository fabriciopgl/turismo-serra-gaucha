"use client";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Slider,
} from "@nextui-org/react";
import React, { useState } from "react";
import { FaSave, FaTimes } from "react-icons/fa";

interface PreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PreferencesModal: React.FC<PreferencesModalProps> = ({
  onClose,
  isOpen,
}) => {
  const getSelectValueFromStorage = () => {
    const storedValue = localStorage.getItem("selectValue");
    return storedValue ? JSON.parse(storedValue) : ["all"];
  };

  const getSliderValueFromStorage = () => {
    const storedValue = localStorage.getItem("sliderValue");
    return storedValue ? JSON.parse(storedValue) : 100;
  };

  const [selectValue, setSelectValue] = useState(getSelectValueFromStorage());
  const [sliderValue, setSliderValue] = useState(getSliderValueFromStorage());

  const saveToLocalStorage = () => {
    localStorage.setItem("selectValue", JSON.stringify(selectValue));
    localStorage.setItem("sliderValue", JSON.stringify(sliderValue));
  };

  const onSavePreferences = () => {
    saveToLocalStorage();
    onClose();
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={() => {
          onClose();
        }}
        placement="center"
        size="lg"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Preferências
              </ModalHeader>
              <ModalBody className="gap-5">
                <Select
                  disallowEmptySelection
                  labelPlacement="outside"
                  defaultSelectedKeys={selectValue}
                  label="Priorizar empreendimentos"
                >
                  <SelectItem
                    key={"small"}
                    title="Pequenos"
                    onClick={() => setSelectValue(["small"])}
                  />
                  <SelectItem
                    key={"medium"}
                    title="Médios"
                    onClick={() => setSelectValue(["medium"])}
                  />
                  <SelectItem
                    key={"large"}
                    title="Grandes"
                    onClick={() => setSelectValue(["large"])}
                  />
                  <SelectItem
                    key={"all"}
                    title="Todos"
                    onClick={() => setSelectValue(["all"])}
                  />
                </Select>

                <Slider
                  step={10}
                  minValue={10}
                  maxValue={1000}
                  hideValue={true}
                  defaultValue={sliderValue}
                  onChange={(value) => setSliderValue(Number(value))}
                  label={`Mostrar locais em um raio de ${sliderValue} km`}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  startContent={<FaTimes />}
                >
                  Cancelar
                </Button>
                <Button
                  startContent={<FaSave />}
                  color="primary"
                  onPress={onSavePreferences}
                >
                  Salvar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PreferencesModal;
