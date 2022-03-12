import React, { useState } from "react";
import { CustomButton } from "./components/CustomButton";
import { Display } from "./components/Display";
import { operationsToDo } from "./utils";
//*import { MagicNumber } from "./components/MagicNumber";
import "./App.css";

const numbersLenght = 10;
const buttonsNumbersArray = Array.from(Array(numbersLenght).keys()); //DRY: don't repeat yourself
const operations = ["+", "-", "*", "/"];

function App() {
  const [numbers, setSelectedNumber] = useState([]); //array vuoto
  const [secondNumber, setSecondNumber] = useState([]);
  const [isSecondNumber, setIsSecondNumber] = useState(false);
  console.log(
    ">>>> ~ file: App.jsx ~ line 16 ~ App ~ isSecondNumber",
    isSecondNumber
  );

  const [result, setResult] = useState(null);

  const handleButton = (newNumber) => {
    console.log("hai cliccato", newNumber);
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
      <Display selectedNumber={numbers} isSecondNumber={isSecondNumber} />
      {operations.map((operation) => (
        <CustomButton
          btnText={operation}
          onClick={() => {
            const operationResult = operationsToDo({
              numbers,
              operation,
              secondNumber,
              isSecondNumber,
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
