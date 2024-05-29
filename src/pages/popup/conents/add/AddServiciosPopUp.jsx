import React, { useState } from "react";
import axios from "axios";
import saveImg from "../../../../assets/save.svg";

function AddServiciosPopUp() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://us-central1-eyc-gestion.cloudfunctions.net/app/api/servicios",
        {
          nombre,
          precio: parseFloat(precio),
        }
      );
      console.log("Servicio creado:", response.data);
      setNombre("");
      setPrecio("");
      setErrorMessage("");
      setSuccessMessage("Servicio registrado exitosamente");
    } catch (error) {
      console.error("Error al crear el servicio:", error);
      setErrorMessage("Ocurrió un error al crear el servicio");
    }
  };

  return (
    <>
      <div className="popup-content">
        <div className="row">
          <div className="col-6">
            <h3>Agregar Servicio</h3>
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
                type="text"
                placeholder="Nombre del servicio"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="col-6">
              <input
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 offset-6">
              <button type="submit" className="btn-primary">
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

export default AddServiciosPopUp;
