import React from "react";
// Images
import addImg from "../../../../assets/add.svg";
import saveImg from "../../../../assets/save.svg";

function EditServiciosPopUp() {
  return (
    <>
      <div className="popup-content">
        <div className="row">
          <div className="col-6">
            <h3>Editar Servicio</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Nombre del servicio" />
          </div>
          <div className="col-6">
            <input type="number" placeholder="Precio" />
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

export default EditServiciosPopUp;
