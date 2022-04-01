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
      <p>{!isSecondNumber ? firstNumber : secondNumber}</p>
      {/*Number trasforma da stringa in numero; join torna una nuova stringa concatenata di tutti gli elementi 
      presenti nell'array*/}
      {/* ! ----> se isSecondNumber è true verrà valorizzato false  */}
    </div>
  );
};
