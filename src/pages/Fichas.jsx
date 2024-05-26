import React from "react";
import Main from "../layout/Main";
// Styles
import "../styles/page.css";
// Images
import clockImg from "../assets/clock.png";
import filterImg from "../assets/filter.png";
import addImg from "../assets/add.png";

function Fichas() {
  return (
    <Main>
      <div className="page-header" id="actions_header">
        <h1>Fichas</h1>
        <div className="page-actions-buttons">
          <button className="button-action">
            <img src={clockImg} alt="Clock Image" height={"15px"} />
            En espera
          </button>
          <button className="button-action">
            <img src={filterImg} alt="Filter Image" height={"15px"} />
            Filtrar
          </button>
          <button className="button-action">
            <img src={addImg} alt="Add Image" height={"15px"} />
            Agregar
          </button>
        </div>
      </div>
    </Main>
  );
}

export default Fichas;
