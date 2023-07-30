import React, { useState } from "react";
import MainPage from "./main.js";
import NavbarM from "./components/navbar";
import Login from "./login.js";
import "./index.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("main");

  //   LoginBtn = () => {

  //   };

  return (
    <>
      {/* LB={LoginBtn} */}
      <NavbarM />

      {currentPage === "main" ? <MainPage /> : <Login />}
    </>
  );
}
