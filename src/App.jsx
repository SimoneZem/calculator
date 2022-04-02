import React, { useState } from "react";
import { CustomButton } from "./components/CustomButton";
import { Display } from "./components/Display";
import { operationsToDo } from "./utils";
import "./App.css";

const numbersLenght = 10;
const buttonsNumbersArray = Array.from(Array(numbersLenght).keys()); //DRY: don't repeat yourself
const operations = ["+", "-", "*", "/", "=", "C"];

function App() {
  const [displayResult, setDisplayResult] = useState(false);
  const [operationChoosed, setOperationChoosed] = useState("");
  const [numbers, setSelectedNumber] = useState([]); //array vuoto
  const [secondNumber, setSecondNumber] = useState([]);
  const [isSecondNumber, setIsSecondNumber] = useState(false);
  //attempt for delete button
  //operazioni sugli array (pop), isSecondNumber, setSelectedNumber, setSecondNumber. Tutto dentro operationsToDo

  const [result, setResult] = useState(null);

  console.log(">>>> ~ file: App.jsx ~ line 20 ~ App ~ result", result);

  const handleButton = (newNumber) => {
    if (isSecondNumber) {
      setSecondNumber((numbers) => [...secondNumber, newNumber]);
      return;
    }
    setSelectedNumber((numbers) => [...numbers, newNumber]);
  };

  return (
    <div className="wrapper">
      <div className="App">
        <div className="digit-keys">
          {buttonsNumbersArray.map((buttonValue) => (
            <CustomButton
              isNumber
              btnText={buttonValue}
              onClick={() => handleButton(buttonValue)}
            />
          ))}
          {operations.map((operation) => (
            <CustomButton
              btnText={operation}
              onClick={() => {
                const operationResult = operationsToDo({
                  setResult,
                  setDisplayResult,
                  numbers,
                  secondNumber,
                  operation,
                  setIsSecondNumber,
                  operationChoosed,
                });
                if (operation !== "=") {
                  setOperationChoosed(operation);
                }
              }}
            />
          ))}
          <Display
            result={result}
            selectedNumber={numbers}
            isSecondNumber={isSecondNumber}
            secondSelectedNumber={secondNumber}
          />
          {/**dobbiamo salvare una sequenza di numeri in un array, posso quindi utilizzare la funzione push() */}
          {/**dobbiamo unire i numeri */}
          {/**dopo aver instanziato l'array operations,abbiamo ciclato l'array stampando un custom button per ogni elemento dell'aray operations */}
        </div>
      </div>
    </div>
  );
}

export default App;
