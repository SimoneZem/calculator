import React from "react";
import "./customButtonsStyle.css";

export const CustomButton = ({ btnText, onClick, customClass }) => {
  console.log("btnText=>", btnText);
  return (
    <div className={`button-container ${customClass}`} onClick={onClick}>
      {" "}
      {btnText}{" "}
    </div>
  );
};
