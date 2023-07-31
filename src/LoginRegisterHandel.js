import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm, RegisterForm } from "./components/loginRegisterForm.js";


function LoginRegisterHandel(){
    // const [currentPage, setCurrentPage] = useState("login");


    return(
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    )
}


export default LoginRegisterHandel;