import React, { useState } from "react";
// Images
import clockImg from "../../../../assets/clock.svg";
import addImg from "../../../../assets/add.svg";
import saveImg from "../../../../assets/save.svg";
import deleteImg from "../../../../assets/delete.svg";
import editImg from "../../../../assets/edit.svg";

function ViewFichasPopUp() {
  const [rows] = useState([
    { idt: "", servicio: "", precio: "" },
    { idt: "", servicio: "", precio: "" },
    { idt: "", servicio: "", precio: "" },
    { idt: "", servicio: "", precio: "" },
  ]);

  return (
    <>
      <div className="popup-content">
        <div className="row">
          <div className="col-6">
            <h3>Ficha #<span id="id_ficha">000</span></h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Nombre del cliente" readOnly/>
          </div>
          <div className="col-6">
            <input type="text" placeholder="Identificación (C.C.)" readOnly/>
          </div>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>IDT</th>
                <th>Servicio</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td id="table_idt_column">
                    <input
                      type="number"
                      value={row.idt}
                      onChange={(e) =>
                        handleChange(index, "idt", e.target.value)
                      }
                      className="input-idt"
                      id="table_idt_input"

                      readOnly
                    />
                  </td>
                  <td id="table_service_column">
                    <input
                      type="text"
                      value={row.servicio}
                      onChange={(e) =>
                        handleChange(index, "servicio", e.target.value)
                      }
                      className="input-servicio"
                      id="table_service_input"

                      readOnly
                    />
                  </td>
                  <td id="table_price_column">
                    <input
                      type="number"
                      value={row.precio}
                      onChange={(e) =>
                        handleChange(index, "precio", e.target.value)
                      }
                      className="input-precio"
                      id="table_price_input"

                      readOnly
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col-6 offset-6">
            <button className="btn-secondary">
              <img src={deleteImg} alt="Delete image" height={"20px"} />
              Eliminar
            </button>
            <button className="btn-primary">
              <img src={editImg} alt="Edit image" height={"20px"} />
              Editar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewFichasPopUp;