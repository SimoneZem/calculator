import React from "react";
import "./displayStyle.css";

export const Display = ({
  result,
  selectedNumber,
  isSecondNumber,
  secondSelectedNumber,
  useComma,
}) => {
  const firstNumber = useComma
    ? selectedNumber
    : Number(selectedNumber?.join(""));
  const secondNumber = useComma
    ? secondSelectedNumber
    : Number(secondSelectedNumber?.join(""));
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
