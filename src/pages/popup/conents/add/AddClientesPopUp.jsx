import React, { useState } from "react";
import axios from "axios";
// Images
import saveImg from "../../../../assets/save.svg";

function AddClientesPopUp() {
  const [idCliente, setIdCliente] = useState("");
  const [nombre, setNombre] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://us-central1-eyc-gestion.cloudfunctions.net/app/api/clientes",
        {
          idCliente,
          nombre,
        }
      );
      console.log("Cliente creado:", response.data);
      // Restablecer los campos del formulario
      setIdCliente("");
      setNombre("");
      setErrorMessage("");
    } catch (error) {
      if (error.response && error.response.status === 500) {
        setErrorMessage("El cliente ya esta registrado");
      } else {
        console.error("Error al crear el cliente:", error);
        setErrorMessage("Ocurrio un error al crear el cliente");
      }
    }
  };

  return (
    <>
      <div className="popup-content">
        <div className="row">
          <div className="col-6">
            <h3>Agregar Cliente</h3>
          </div>
        </div>
        {errorMessage && (
          <div className="row">
            <div className="col-12">
              <p className="error-message">{errorMessage}</p>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="number"
                placeholder="Identificación (C.C.)"
                value={idCliente}
                onChange={(e) => setIdCliente(e.target.value)}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                placeholder="Nombre del cliente"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 offset-6">
              <button className="btn-primary" type="submit">
                <img src={saveImg} alt="Save image" height={"20px"} />
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddClientesPopUp;
