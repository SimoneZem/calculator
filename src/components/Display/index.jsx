import React from "react";
import "./displayStyle.css";

export const Display = ({
  result,
  selectedNumber,
  isSecondNumber,
  secondSelectedNumber,
}) => {
  console.log(">>>> ~ file: index.jsx ~ line 10 ~ result", result);
  const firstNumber = Number(selectedNumber?.join(""));
  const secondNumber = Number(secondSelectedNumber?.join(""));
  const numberToDisplay = !isSecondNumber ? firstNumber : secondNumber;
  const weHaveAResult = result !== null;
  return (
    <div className="display-stile ">
      {weHaveAResult ? <p> {result} </p> : <p>{numberToDisplay}</p>}
      {/*Number trasforma da stringa in numero; join torna una nuova stringa concatenata di tutti gli elementi 
      presenti nell'array*/}
      {/* ! ----> se isSecondNumber è true verrà valorizzato false  */}
    </div>
  );
};
