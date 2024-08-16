import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ClientTable from "./components/ClientTable";
import MultiSectionForm from "./components/MultiSectionForm";
import MultiSectionFormView from "./components/MultiSectionFormView";
import { Container } from "@mui/material";
import "./App.css";
import "./index.css";
import FormLists from "./components/FormLists";
import ApaTable from "./components/ApaTable";
const App = () => (
  <Router>
    <Container>
      <Routes>
        <Route exact path="/" element={<FormLists />} />
        <Route path="/cif" element={<ClientTable />} />
        <Route path="/apa" element={<ApaTable />} />
        <Route path="/client_form/new" element={<MultiSectionForm />} />
        <Route
          path="/cif/view/:id"
          element={<MultiSectionFormView />}
        />
        <Route path="/cif/edit/:id" element={<MultiSectionForm />} />
      </Routes>
    </Container>
  </Router>
);

export default App;
