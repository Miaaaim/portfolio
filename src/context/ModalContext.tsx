import React, { createContext, useContext, useState, ReactNode } from 'react';

type ModalType = 'contact' | 'agent';

interface ModalContextType {
  isOpen: boolean;
  modalType: ModalType;
  openModal: (type?: ModalType) => void;
  openAgentModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>('contact');

  const openModal = (type: ModalType = 'contact') => {
    setModalType(type);
    setIsOpen(true);
  };
  const openAgentModal = () => openModal('agent');
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider
      value={{ isOpen, modalType, openModal, openAgentModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
