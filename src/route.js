import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientTable from "./components/ClientTable"; // Assuming this is the component with your customer table
import MultiSectionForm from "./components/MultiSectionForm"; // Assuming this is the form component
import { Container } from "@mui/material";

const AppRoutes = () => (
  <Router>
    <Container>
      <Routes>
        <Route path="/" element={<ClientTable />} />
        <Route path="/client_form/new" element={<MultiSectionForm />} />
        <Route path="/client_form/edit/:id" element={<MultiSectionForm />} />
      </Routes>
    </Container>
  </Router>
);

export default AppRoutes;
