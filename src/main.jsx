import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DoctorProvider } from "./Context/Doctercontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DoctorProvider>
    <App />
  </DoctorProvider>
);