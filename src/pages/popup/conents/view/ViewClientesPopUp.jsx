import React from "react";
// Images
import saveImg from "../../../../assets/save.svg";
import editImg from "../../../../assets/edit.svg";
import deleteImg from "../../../../assets/delete.svg";

function ViewClientesPopUp() {
  return (
    <>
      <div className="popup-content">
        <div className="row">
          <div className="col-6">
            <h3>
              Cliente C.C <span id="id_cliente">000</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Nombre del cliente" readOnly />
          </div>
          <div className="col-6">
            <input type="text" placeholder="Identificación (C.C.)" readOnly />
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

export default ViewClientesPopUp;
