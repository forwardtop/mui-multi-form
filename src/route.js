
import React from "react";
import { Routes, Route } from "react-router-dom";
import ClientTable from "./components/ClientTable";
import MultiSectionForm from "./components/MultiSectionForm";
import MultiSectionFormView from "./components/MultiSectionFormView";
import { Container } from "@mui/material";
import "./App.css";
import "./index.css";
import FormLists from "./components/FormLists";
import ApaTable from "./components/ApaTable";
import PasswordProtected from "./components/PasswordProtected";
import NewForm from "./components/CreditAccountApplication/NewForm";
import CaaFormList from "./components/CreditAccountApplication/CaaFormList";
import CreatingForms from "./pages/CreatingForms";
const AppRoutes = () => (
    <Container>
      <Routes>
        <Route exact path="/" element={<PasswordProtected />} />
        <Route path="/form-lists" element={<FormLists />} />
        <Route path="/cif" element={<ClientTable />} />
        <Route path="/apa" element={<ApaTable />} />
        <Route path="/client_form/new" element={<MultiSectionForm />} />
        <Route
          path="/cif/view/:id"
          element={<MultiSectionFormView />}
        />
        <Route path="/cif/edit/:id" element={<MultiSectionForm />} />
        <Route path="/caa" element={<CaaFormList />} />
        <Route path="/caa/new" element={<NewForm />} />
        <Route path="/creatingForms" element={<CreatingForms />} />
      </Routes>
    </Container>
);

export default AppRoutes;