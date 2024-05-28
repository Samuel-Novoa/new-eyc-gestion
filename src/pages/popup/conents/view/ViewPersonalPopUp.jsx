import React from "react";
// Images
import saveImg from "../../../../assets/save.svg";
import deleteImg from "../../../../assets/delete.svg";
import editImg from "../../../../assets/edit.svg";


function ViewPersonalPopUp() {
  return (
    <>
      <div className="popup-content">
        <div className="row">
          <div className="col-6">
            <h3>Personal #<span id="id_personal">000</span></h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <input type="number" placeholder="Id de la persona" readOnly/>
          </div>
          <div className="col-6">
            <input type="text" placeholder="Nombre de la persona" readOnly/>
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

export default ViewPersonalPopUp;
