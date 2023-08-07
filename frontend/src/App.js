import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginForm, RegisterForm } from "./pages/loginRegisterForm.js";
import MainPage from "./pages/main.js";
import NavbarM from "./components/navbar";
import Profile from "./pages/profile";
import QuestionPage from "./pages/Question.js"
import "./index.css";

export default function App() {
  return (
    <>
      <body>
        <BrowserRouter>
          <NavbarM />
          <Routes>
            <Route path="/home" element={<MainPage />} />
            <Route index element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/qs" element={<QuestionPage />} />
          </Routes>
        </BrowserRouter>
      </body>
    </>
  );
}
