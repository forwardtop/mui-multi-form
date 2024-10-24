
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import "./App.css";
import "./index.css";
import FormLists from "./components/FormLists";
import PasswordProtected from "./components/PasswordProtected";
import CreatingForms from "./pages/CreatingForms";
import GoogleLoginForm from "./pages/GoogleLoginForm";
const AppRoutes = () => (
    <Container>
      <Routes>
        <Route exact path="/" element={<PasswordProtected />} />
        <Route path="/form-lists" element={<FormLists />} />
        <Route path="/creatingForms" element={<CreatingForms />} />
        <Route path="/login" element={<GoogleLoginForm />} />
      </Routes>
    </Container>
);

export default AppRoutes;