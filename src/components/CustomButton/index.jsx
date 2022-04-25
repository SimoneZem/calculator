import React from "react";
import "./customButtonsStyle.css";

export const CustomButton = ({ btnText, onClick, customClass }) => {
  return (
    <div className={`button-container ${customClass}`} onClick={onClick}>
      {" "}
      {btnText}{" "}
    </div>
  );
};
