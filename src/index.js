import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider, StateProvider } from "./context/StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <StateProvider>
          <App />
        </StateProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
