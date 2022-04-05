import React from "react";
import "./displayStyle.css";

export const Display = ({
  selectedNumber,
  isSecondNumber,
  secondSelectedNumber,
}) => {
  const firstNumber = Number(selectedNumber?.join(""));
  const secondNumber = Number(secondSelectedNumber?.join(""));
  return (
    <div className="display-stile ">
      <p className="display-value">
        {!isSecondNumber ? firstNumber : secondNumber}
      </p>
    </div>
  );
};
