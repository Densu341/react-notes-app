import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider value={localStorage.getItem("theme") || "light"}>
      <LocaleProvider value={localStorage.getItem("locale") || "id"}>
        <App />
      </LocaleProvider>
    </ThemeProvider>
  </BrowserRouter>
);
