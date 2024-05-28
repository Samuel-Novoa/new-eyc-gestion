import React, { useState } from "react";
import Main from "../layout/Main";
// Images
import filterImg from "../assets/filter.svg";
import addImg from "../assets/add.svg";
// Popup
import Popup from "./popup/Popup";
// Popup content
import AddClientesPopUp from "./popup/conents/add/AddClientesPopUp";
import EditClientesPopUp from "./popup/conents/edit/EditClientesPopUp";
import ViewClientesPopUp from "./popup/conents/view/ViewClientesPopUp";

function Clientes() {
  // Popup buttons add
  const [buttonAddPopup, setButtonAddPopup] = useState(false);
  // Popup buttons edit
  const [buttonEditPopup, setButtonEditPopup] = useState(false);
  // Popup buttons view
  const [buttonViewPopup, setButtonViewPopup] = useState(false);

  return (
    <Main>
      <div className="page-header" id="actions_header">
        <h1>Clientes</h1>
        <div className="page-actions-buttons">
          <button className="button-action" id="button_action_filter">
            <img src={filterImg} alt="Filter Image" height={"15px"} />
            Filtrar
          </button>
          <button className="button-action" onClick={() => setButtonAddPopup(true)} id="button_action_add">
            <img src={addImg} alt="Add Image" height={"15px"} />
            Agregar
          </button>
        </div>
      </div>
      <button
        className="button-action"
        id="button_action_edit"
        onClick={() => setButtonEditPopup(true)}
      >
        TESTING EDIT
      </button>
      <button className="button-action" id="button_action_view" onClick={() => setButtonViewPopup(true)}>
        TESTING VIEW
      </button>
      {/* Popup */}
      <Popup trigger={buttonAddPopup} setTrigger={setButtonAddPopup}>
        <AddClientesPopUp />
      </Popup>
      <Popup trigger={buttonEditPopup} setTrigger={setButtonEditPopup}>
        <EditClientesPopUp />
      </Popup>
      <Popup trigger={buttonViewPopup} setTrigger={setButtonViewPopup}>
        <ViewClientesPopUp />
      </Popup>
    </Main>
  );
}

export default Clientes;
