import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { TransactionModal } from "./components/TransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenModal={handleOpenModal} />

      <Dashboard />

      <TransactionModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
