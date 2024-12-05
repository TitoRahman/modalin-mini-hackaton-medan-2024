import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portofolio from "./pages/Portofolio.jsx";
import Browse from "./pages/Browse.jsx";
import Login from "./auth/Login.jsx";
import Home from "./pages/Home.jsx";
import Otp from "./auth/Otp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="login/otp" element={<Otp />} />
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="portofolio" element={<Portofolio />} />
            <Route path="browse" element={<Browse />} />
          </Route>
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
