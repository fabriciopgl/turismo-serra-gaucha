import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { FaSave, FaTimes } from "react-icons/fa";

interface PreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PreferencesModal: React.FC<PreferencesModalProps> = ({
  onClose,
  isOpen,
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={() => {
          onClose();
        }}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Preferências
              </ModalHeader>
              <ModalBody></ModalBody>
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
                  onPress={onClose}
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
