import React from "react";
import "../../styles/popup/popup.css";
// Images
import closeImg from "../../assets/close.png";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-button" onClick={() => props.setTrigger(false)} id="popup_close_button">
            <img src={closeImg} alt="Close Image" height={"30px"}/>
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
