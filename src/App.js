import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./route";
import { AuthProvider } from "./config/AuthContext";

function App() {
  
  return (
    <Router>
      <div>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
