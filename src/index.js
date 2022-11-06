import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Rick_MortyProvider } from "./contex/Rick_morty";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Rick_MortyProvider>
      <App />
    </Rick_MortyProvider>
  </React.StrictMode>
);
