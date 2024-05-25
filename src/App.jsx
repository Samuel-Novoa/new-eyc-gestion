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

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fichas" element={<Fichas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/personal" element={<Personal /> } />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </div>
  );
}

export default App;
