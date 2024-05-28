import React from "react";
// Images
import deleteImg from "../../../../assets/delete.svg";
import saveImg from "../../../../assets/save.svg";
import editImg from "../../../../assets/edit.svg";

function ViewServiciosPopUp() {
  return (
    <>
      <div className="popup-content">
        <div className="row">
          <div className="col-6">
            <h3>
              Servicio <span id="nombre_servicio">000</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Nombre del servicio" readOnly />
          </div>
          <div className="col-6">
            <input type="number" placeholder="Precio" readOnly />
          </div>
        </div>
        <div className="row">
          <div className="col-6 offset-6">
            <button className="btn-secondary">
              <img src={deleteImg} alt="Delete image" height={"20px"} />
              Eliminar
            </button>
            <button className="btn-primary">
              <img src={editImg} alt="Save image" height={"20px"} />
              Editar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewServiciosPopUp;
