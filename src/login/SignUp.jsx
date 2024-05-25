import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { validateForm } from "../alerts/Utils"; // Asegúrate de ajustar la ruta según la estructura de tu proyecto

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm(email, password, setErrors, setIsFormValid);
  }, [email, password]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <h1>FocusApp</h1>
      <form>
        <div>
          <label htmlFor="email-address">Email address</label>
          <input
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
          {/* Handle Errors */}
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            label="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          {/* Handle Errors */}
          {errors.password && <p>{errors.password}</p>}
          {errors.passwordLength && <p>{errors.passwordLength}</p>}
          {errors.passwordAlpha && <p>{errors.passwordAlpha}</p>}
          {errors.passwordNumeric && <p>{errors.passwordNumeric}</p>}
          {errors.passwordSpecial && <p>{errors.passwordSpecial}</p>}
        </div>

        <button type="submit" onClick={onSubmit} disabled={!isFormValid}>
          Sign up
        </button>
      </form>

      <p>
        Already have an account? <NavLink to="/login">Sign in</NavLink>
      </p>
    </div>
  );
};

export default Signup;
