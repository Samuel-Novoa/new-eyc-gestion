// import React, {useState} from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import {  createUserWithEmailAndPassword  } from 'firebase/auth';
// import { auth } from '../firebase/firebase.config';

// const Signup = () => {
//     const navigate = useNavigate();

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('');

//     const onSubmit = async (e) => {
//       e.preventDefault()

//       await createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             console.log(user);
//             navigate("/login")
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage);
//             // ..
//         });

//     }

//   return (
//     <main >
//         <section>
//             <div>
//                 <div>
//                     <h1> FocusApp </h1>
//                     <form>
//                         <div>
//                             <label htmlFor="email-address">
//                                 Email address
//                             </label>
//                             <input
//                                 type="email"
//                                 label="Email address"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                                 placeholder="Email address"
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="password">
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 label="Create password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                                 placeholder="Password"
//                             />
//                         </div>

//                         <button
//                             type="submit"
//                             onClick={onSubmit}
//                         >
//                             Sign up
//                         </button>

//                     </form>

//                     <p>
//                         Already have an account?{' '}
//                         <NavLink to="/login" >
//                             Sign in
//                         </NavLink>
//                     </p>
//                 </div>
//             </div>
//         </section>
//     </main>
//   )
// }

// export default Signup

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [email, password]);

  const validateForm = () => {
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    } else {
      if (password.length < 8) {
        errors.passwordLength = "Password must be at least 8 characters long";
      }
      if (!/[a-zA-Z]/.test(password)) {
        errors.passwordAlpha = "Password must contain at least one letter";
      }
      if (!/[0-9]/.test(password)) {
        errors.passwordNumeric = "Password must contain at least one number";
      }
      if (!/[!@#$%^&*]/.test(password)) {
        errors.passwordSpecial =
          "Password must contain at least one special character";
      }
    }
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

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
