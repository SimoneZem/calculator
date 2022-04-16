import React from "react";
import "./displayStyle.css";

export const Display = ({
  result,
  selectedNumber,
  isSecondNumber,
  secondSelectedNumber,
}) => {
  const firstNumber = Number(selectedNumber?.join(""));
  const secondNumber = Number(secondSelectedNumber?.join(""));
  const weHaveResult = result !== null;
  return (
    <div className="display-stile ">
      {weHaveResult ? (
        <p className="display-value">{result}</p>
      ) : (
        <p className="display-value">
          {!isSecondNumber ? firstNumber : secondNumber}
        </p>
      )}
    </div>
  );
};
