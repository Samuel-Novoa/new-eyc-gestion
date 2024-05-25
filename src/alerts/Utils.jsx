export const validateForm = (email, password, setErrors, setIsFormValid) => {
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

export const handleErrorsLogin = (errorCode) => {
  let errorMessage;

  switch (errorCode) {
    case "auth/email-already-in-use":
      errorMessage = "Este correo electronico ya esta en uso.";
      break;
    case "auth/invalid-email":
      errorMessage = "Correo electrónico inválido.";
      break;
    case "auth/user-disabled":
      errorMessage = "Usuario deshabilitado.";
      break;
    case "auth/user-not-found":
      errorMessage = "Usuario no encontrado.";
      break;
    case "auth/invalid-credential":
      errorMessage = "Contraseña incorrecta.";
      break;
    case "auth/too-many-requests":
      errorMessage =
        "Estamos experimentando problemas con la conexion, intentelo nuevamente mas tarde";
      break;
    case "auth/internal-error":
      errorMessage =
        "Estamos experimentando problemas con la conexion, intentelo nuevamente mas tarde";
      break;
    default:
      errorMessage = "Error desconocido. Por favor, inténtalo de nuevo.";
  }

  return errorMessage;
};
