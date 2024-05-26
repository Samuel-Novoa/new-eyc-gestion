import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages links
import Clientes from "./pages/Clientes";
import Fichas from "./pages/Fichas";
import Servicios from "./pages/Servicios";
import Personal from "./pages/Personal";
// Login
import Login from "./login/Login";
import SignUp from "./login/SignUp";
import Home from "./HomePage";

import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Rutas privadas */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/fichas"
          element={
            <PrivateRoute>
              <Fichas />
            </PrivateRoute>
          }
        />
        <Route
          path="/personal"
          element={
            <PrivateRoute>
              <Personal />
            </PrivateRoute>
          }
        />
        <Route
          path="/clientes"
          element={
            <PrivateRoute>
              <Clientes />
            </PrivateRoute>
          }
        />
        <Route
          path="/servicios"
          element={
            <PrivateRoute>
              <Servicios />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
