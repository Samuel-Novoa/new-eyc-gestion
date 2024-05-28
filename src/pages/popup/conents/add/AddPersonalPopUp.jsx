import React from "react";
// Images
import clockImg from "../../../../assets/clock.svg";
import saveImg from "../../../../assets/save.svg";

function AddPersonalPopUp() {
  return (
    <>
      <div className="popup-content">
        <div className="row">
          <div className="col-6">
            <h3>Agregar Personal</h3>
          </div>
          <div className="col-6">
            <input
              type="text"
              placeholder="Número de ficha"
              className="id-ficha"
              readOnly
            />
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
            <button className="btn-secondary">
              <img src={clockImg} alt="Wait image" height={"20px"} />
              Espera
            </button>
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

export default AddPersonalPopUp;
