import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TransactionsProvider } from "./context/TransactionContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </StrictMode>
);
