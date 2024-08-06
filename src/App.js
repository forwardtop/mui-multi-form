import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ClientTable from "./components/ClientTable";
import MultiSectionForm from "./components/MultiSectionForm";
import { Container } from "@mui/material";
import "./App.css";
import "./index.css";

const App = () => (
  <Router>
    <Container>
      <Routes>
        <Route exact path="/" element={<ClientTable />} />
        <Route path="/client_form/new" element={<MultiSectionForm />} />
        <Route path="/client_form/edit/:id" element={<MultiSectionForm />} />
      </Routes>
    </Container>
  </Router>
);

export default App;
