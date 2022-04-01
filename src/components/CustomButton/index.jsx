import React from "react";
import "./customButtonsStyle.css";

export const CustomButton = ({ btnText, onClick }) => {
  console.log("btnText=>", btnText);
  return (
    <div className="button-container" onClick={onClick}>
      {" "}
      {btnText}{" "}
    </div>
  );
};

/* <div className={isNumber ? "button-container" : "  "} onClick={onClick}>
{" "} */
