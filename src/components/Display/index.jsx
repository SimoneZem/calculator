import React from "react";

export const Display = ({
  selectedNumber,
  isSecondNumber,
  secondSelectedNumber,
}) => {
  const firstNumber = Number(selectedNumber.join(""));
  const secondNumber = Number(secondSelectedNumber.join(""));
  return (
    <div>
      <p>{!isSecondNumber ? firstNumber : secondNumber}</p>
      {/*Number trasforma da strina in numero; join torna una nuova stringa concatenata di tutti gli elementi 
      presenti nell'array*/}
      {/* ! ----> se isSecondNumber è true verrà valorizzato false  */}
    </div>
  );
};
