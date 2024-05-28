import React, { useState } from "react";
import Main from "../layout/Main";
// Images
import clockImg from "../assets/clock.svg";
import filterImg from "../assets/filter.svg";
import addImg from "../assets/add.svg";
// Popup
import Popup from "./popup/Popup";
// Popup content
import AddFichasPopUp from "./popup/conents/add/AddFichasPopUp";
import EditFichasPopUp from "./popup/conents/edit/EditFichasPopUp";
import ViewFichasPopUp from "./popup/conents/view/ViewFichasPopUp";

const Fichas = () => {
  // Popup buttons add
  const [buttonAddPopup, setButtonAddPopup] = useState(false);
  // Popup buttons edit
  const [buttonEditPopup, setButtonEditPopup] = useState(false);
  // Popup buttons view
  const [buttonViewPopup, setButtonViewPopup] = useState(false);

  return (
    <Main>
      <div className="page-header" id="actions_header">
        <h1>Fichas</h1>
        <div className="page-actions-buttons">
          <button className="button-action" id="button_action_in_wait">
            <img src={clockImg} alt="Clock Image" height={"15px"} />
            En espera
          </button>
          <button className="button-action" id="button_action_filter">
            <img src={filterImg} alt="Filter Image" height={"15px"} />
            Filtrar
          </button>
          <button
            className="button-action"
            onClick={() => setButtonAddPopup(true)}
            id="button_action_add"
          >
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
        <AddFichasPopUp />
      </Popup>
      <Popup trigger={buttonEditPopup} setTrigger={setButtonEditPopup}>
        <EditFichasPopUp />
      </Popup>
      <Popup trigger={buttonViewPopup} setTrigger={setButtonViewPopup}>
        <ViewFichasPopUp />
      </Popup>
    </Main>
  );
};

export default Fichas;
