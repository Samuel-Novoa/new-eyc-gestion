import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <ul>
        <li><Link to="/home">E&C - Gestion</Link></li>
        <li>
          <Link to="/clientes">Clientes</Link>
        </li>
        <li>
          <Link to="/fichas">Fichas</Link>
        </li>
        <li>
          <Link to="/personal">Personal</Link>
        </li>
        <li>
          <Link to="/servicios">Servicios</Link>
        </li>
        <li><a onClick={handleLogout}>LogOut</a></li>
      </ul>
    </div>
  );
}

export default NavBar;
