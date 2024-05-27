import React, {useState} from "react";
// Images
import clockImg from "../../../assets/clock.svg";
import addImg from "../../../assets/add.svg";
import saveImg from "../../../assets/save.svg";
import deleteImg from "../../../assets/delete.svg";


function AddFichasPopUp() {
  const [rows, setRows] = useState([
    { idt: "", servicio: "", precio: "" },
    { idt: "", servicio: "", precio: "" },
    { idt: "", servicio: "", precio: "" },
    { idt: "", servicio: "", precio: "" },
  ]);

  const addRow = () => {
    setRows([...rows, { idt: "", servicio: "", precio: "", acciones: "" }]);
  };

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const removeRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  return (
    <>
      <div className="popup-content">
        <div className="row">
          <div className="col-6">
            <h3>Título</h3>
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
        <table className="table">
          <thead>
            <tr>
              <th>IDT</th>
              <th>Servicio</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td id="table_idt_column">
                  <input
                    type="text"
                    value={row.idt}
                    onChange={(e) => handleChange(index, "idt", e.target.value)}
                    className="input-idt"
                    id="table_idt_input"
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
                  />
                </td>
                <td id="table_price_column">
                  <input
                    type="text"
                    value={row.precio}
                    onChange={(e) =>
                      handleChange(index, "precio", e.target.value)
                    }
                    className="input-precio"
                    id="table_price_input"
                  />
                </td>
                <td id="table_actions_buttons">
                  <button
                    onClick={() => removeRow(index)}
                    className="btn-remove"
                    id="table_accion_delete_button"
                  >
                    <img src={deleteImg} alt="Delete image" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="row">
          <div className="col-12 text-center">
            <button onClick={addRow} className="btn-add" id="add_row_button">
              <img src={addImg} alt="Add row image" />
            </button>
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
      ;
    </>
  );
}

export default AddFichasPopUp;
