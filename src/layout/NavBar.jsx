import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
// Styles
import "../styles/navbar.css";
// Images
import logoutImg from "../assets/logout.png";
import logoImg from "../assets/logo.png";

function NavBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="navbar-header">
        <Link to="/home" className="navbar-brand">
          <img src={logoImg} alt="Logo Img" height={"50px"} />
          <h1>E&C - Gestión</h1>
        </Link>
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
      <div className={`navbar-collapse ${isMenuOpen ? "show" : ""}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/fichas" className="nav-link">
              Fichas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/clientes" className="nav-link">
              Clientes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/personal" className="nav-link">
              Personal
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/servicios" className="nav-link">
              Servicios
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={handleLogout}>
              <img src={logoutImg} alt="Logout Icon" height={"20px"} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
