import React, { useState } from "react";
import Main from "../layout/Main";
// Styles
import "../styles/page.css";
// Images
import filterImg from "../assets/filter.svg";
import addImg from "../assets/add.svg";
// Popup
import Popup from "./popup/Popup";
// Popup content
import AddPersonalPopUp from "./popup/conents/add/AddPersonalPopUp";

function Personal() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <Main>
      <div className="page-header" id="actions_header">
        <h1>Personal</h1>
        <div className="page-actions-buttons">
          <button className="button-action" id="button_action_filter">
            <img src={filterImg} alt="Filter Image" height={"15px"} />
            Filtrar
          </button>
          <button className="button-action" onClick={() => setButtonPopup(true)} id="button_action_add">
            <img src={addImg} alt="Add Image" height={"15px"}/>
            Agregar
          </button>
        </div>
      </div>
      {/* Popup */}
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>

      </Popup>
    </Main>
  );
}

export default Personal;
