import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import MultiSectionForm from "./components/MultiSectionForm";
import { Container } from "@mui/material";

function App() {
  return (
    <Router>
      <Container>
        <h1>Customer Manager</h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/customer/:id" element={<MultiSectionForm />} />
          <Route path="/customer/new" element={<MultiSectionForm />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
