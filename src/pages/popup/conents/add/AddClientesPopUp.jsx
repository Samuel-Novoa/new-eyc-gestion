import React from "react";
// Images
import saveImg from "../../../../assets/save.svg";

function AddClientesPopUp() {  
  return (
    <>
      <div className="popup-content">
        <div className="row">
          <div className="col-6">
            <h3>Agregar Cliente</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Nombre del cliente" />
          </div>
          <div className="col-6">
            <input type="text" placeholder="Identificación (C.C.)" />
          </div>
        </div>
        <div className="row">
          <div className="col-6 offset-6">
            <button className="btn-primary">
              <img src={saveImg} alt="Save image" height={"20px"} />
              Guardar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddClientesPopUp;
