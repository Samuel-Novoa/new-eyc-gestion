import { Routes, Route } from "react-router-dom";
import "./App.css";

// Rediretion links
import HomePage from "./HomePage";
// Admin links
import Admin from "./roles/admin/Admin";
import Clientes from "./roles/admin/Clientes";
import Fichas from "./roles/admin/Fichas";
import Servicios from "./roles/admin/Servicios";
// User links
import UserView from "./roles/user/UserView";
// Login
import Login from "./login/Login";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<Admin /> } />
        <Route path="clientes" element={<Clientes />} />
        <Route path="fichas" element={<Fichas />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="user" element={<UserView />} />
      </Routes>
    </div>
  );
}

export default App;
