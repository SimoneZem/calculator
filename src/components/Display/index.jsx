import React from "react";

export const Display = ({ selectedNumber }) => {
  console.log(
    ">>>> ~ file: index.jsx ~ line 4 ~ Display ~ selectedNumber",
    selectedNumber
  );

  return (
    <div>
      <p>{Number(selectedNumber.join(""))}</p>
      {/*Number trasforma da strina in numero; join torna una nuova stringa concatenata di tutti gli elementi 
      presenti nell'array*/}
    </div>
  );
};
