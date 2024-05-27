import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { NavLink, useNavigate } from "react-router-dom";
import Alerts from "../alerts/Alerts";
// Styles
import "../styles/login.css";
// Images
import logoImg from "../assets/logo.svg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const provider = new GoogleAuthProvider();

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.email;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        setErrorCode(errorCode);
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setErrorCode(errorCode);
      });
  };

  return (
    <section>
      <div className="columns">
        <div className="column">
          <img src={logoImg} alt="Logo Img" height={"100px"}/>
          <h1 id="tittle">Ingreso</h1>
          <p id="subtittle">Ingresa a E&C - Gestión</p>
        </div>
        <div className="column">
          <form>
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Message Error */}
            {errorCode && <Alerts errorCode={errorCode} />}
 
            <div id="action_buttons">
              <button onClick={onLogin} id="action_button_login">Ingresar</button>
              <button onClick={signInWithGoogle} id="action_button_login_with_google">Ingresar con Google</button>
            </div>
          </form>

          <p className="text-sm text-white">
            No account yet? <NavLink to="/signup">Sign up</NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
