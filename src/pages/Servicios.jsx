import React from "react";
import Main from "../layout/Main";
// Styles
import "../styles/page.css";
// Images
import filterImg from "../assets/filter.png";

function Servicios() {
  return (
    <Main>
      <div className="page-header" id="actions_header">
        <h1>Servicios</h1>
        <div className="page-actions-buttons">
          <button className="button-action" id="button_action_filter">
            <img src={filterImg} alt="Filter Image" height={"15px"} />
            Filtrar
          </button>
        </div>
      </div>
    </Main>
  );
}

export default Servicios;
