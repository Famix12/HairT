import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginForm, RegisterForm } from "./pages/loginRegisterForm.js";
import MainPage from "./pages/main.js";
import NavbarM from "./components/navbar";
import "./index.css";

export default function App() {
  return (
    <>
      <body>
        <NavbarM />

        <BrowserRouter>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </BrowserRouter>
      </body>
    </>
  );
}
