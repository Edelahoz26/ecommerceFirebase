import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/global.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
