import React, { useState } from "react";
import { CustomButton } from "./components/CustomButton";
import { Display } from "./components/Display";
import { operationsToDo } from "./utils";

import "./App.css";

const numbersLenght = 10;
const buttonsNumbersArray = Array.from(Array(numbersLenght).keys()); //DRY: don't repeat yourself
const operations = ["+", "-", "*", "/"];

function App() {
  const [numbers, setSelectedNumber] = useState([]); //array vuoto
  console.log(">>>> ~ file: App.jsx ~ line 14 ~ App ~ numbers", numbers);
  const [secondNumber, setSecondNumber] = useState([]);
  const [isSecondNumber, setIsSecondNumber] = useState(false);

  console.log(
    ">>>> ~ file: App.jsx ~ line 16 ~ App ~ isSecondNumber",
    isSecondNumber
  );

  const [result, setResult] = useState(null);

  const handleButton = (newNumber) => {
    console.log("hai cliccato", newNumber);
    if (isSecondNumber) {
      setSecondNumber((numbers) => [...numbers, newNumber]);
      return;
    }
    setSelectedNumber((numbers) => [...numbers, newNumber]);
  };

  return (
    <div className="App">
      {buttonsNumbersArray.map((buttonValue) => (
        <CustomButton
          btnText={buttonValue}
          onClick={() => handleButton(buttonValue)}
        />
      ))}
      <Display
        selectedNumber={numbers}
        isSecondNumber={isSecondNumber}
        secondSelectedNumber={secondNumber}
      />
      {/**dobbiamo salvare una sequenza di numeri in un array, posso quindi utilizzare la funzione push() */}
      {/**dobbiamo unire i numeri */}
      {/**dopo aver instanziato l'array operations,abbiamo ciclato l'array stampando un custom button per ogni elemento dell'aray operations */}
      {operations.map((operation) => (
        <CustomButton
          btnText={operation}
          onClick={() => {
            const operationResult = operationsToDo({
              operation,
              setIsSecondNumber,
            });
            setResult(operationResult);
          }}
        />
      ))}
    </div>
  );
}

export default App;
