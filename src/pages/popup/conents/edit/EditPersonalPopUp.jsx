import React from "react";
// Images
import saveImg from "../../../../assets/save.svg";

function EditPersonalPopUp() {
  return (
    <>
      <div className="popup-content">
        <div className="row">
          <div className="col-6">
            <h3>Editar Personal</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <input type="number" placeholder="Id de la persona" />
          </div>
          <div className="col-6">
            <input type="text" placeholder="Nombre de la persona" />
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

export default EditPersonalPopUp;
