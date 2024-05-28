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

const Fichas = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

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
            onClick={() => setButtonPopup(true)}
            id="button_action_add"
          >
            <img src={addImg} alt="Add Image" height={"15px"} />
            Agregar
          </button>
        </div>
      </div>
      {/* Popup */}
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <AddFichasPopUp />
      </Popup>
    </Main>
  );
};

export default Fichas;
