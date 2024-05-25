import React from "react";

export const handleErrorsLogin = (errorCode) => {
    let errorMessage;
  
    switch (errorCode) {
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
        errorMessage = "Estamos experimentando problemas con la conexion, intentelo nuevamente mas tarde";
        break;
      default:
        errorMessage = "Error desconocido. Por favor, inténtalo de nuevo.";
    }
  
    return errorMessage;
  };