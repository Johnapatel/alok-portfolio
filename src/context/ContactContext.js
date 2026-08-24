import { createContext, useState, useContext } from 'react';
import ContactModal from '@/components/ContactModal';

const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ContactContext.Provider value={{ openContactModal: () => setIsModalOpen(true) }}>
      {children}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </ContactContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactContext);
}
