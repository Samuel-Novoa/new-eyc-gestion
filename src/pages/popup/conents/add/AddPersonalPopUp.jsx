import React, { useState } from "react";
import axios from "axios";
import saveImg from "../../../../assets/save.svg";

function AddPersonalPopUp() {
  const [idTrabajador, setIdTrabajador] = useState("");
  const [nombre, setNombre] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://us-central1-eyc-gestion.cloudfunctions.net/app/api/trabajadores",
        {
          idTrabajador,
          nombre,
        }
      );
      console.log("Trabajador creado:", response.data);
      setIdTrabajador("");
      setNombre("");
      setErrorMessage("");
      setSuccessMessage("Trabajador registrado exitosamente");
    } catch (error) {
      if (error.response && error.response.status === 500) {
        setErrorMessage("El trabajador ya está registrado");
      } else {
        console.error("Error al crear el trabajador:", error);
        setErrorMessage("Ocurrió un error al crear el trabajador");
      }
    }
  };

  return (
    <>
      <div className="popup-content">
        <div className="row">
          <div className="col-6">
            <h3>Agregar Personal</h3>
          </div>
        </div>
        {errorMessage && (
          <div className="row">
            <div className="col-12">
              <p className="error-message">{errorMessage}</p>
            </div>
          </div>
        )}
        {successMessage && (
          <div className="row">
            <div className="col-12">
              <p className="success-message">{successMessage}</p>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="number"
                placeholder="Id de la persona"
                value={idTrabajador}
                onChange={(e) => setIdTrabajador(e.target.value)}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                placeholder="Nombre de la persona"
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

export default AddPersonalPopUp;
