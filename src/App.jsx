import React, { useState } from "react";
import { CustomButton } from "./components/CustomButton";
import { Display } from "./components/Display";
import { operationsToDo } from "./utils";

import "./App.css";

const numbersLenght = 10;
const buttonsNumbersArray = Array.from(Array(numbersLenght).keys()).reverse(); //DRY: don't repeat yourself
const operations = ["+", "-", "*", "/"];
const operations_2 = ["c", "del", "%", "."];

function App() {
  const [displayResult, setDisplayResult] = useState(false);
  const [operationChoosed, setOperationChoosed] = useState("");
  const [numbers, setSelectedNumber] = useState([]); //array vuoto
  const [secondNumber, setSecondNumber] = useState([]);
  const [isSecondNumber, setIsSecondNumber] = useState(false);
  const [result, setResult] = useState(null);

  const handleButton = (newNumber) => {
    if (isSecondNumber) {
      setSecondNumber(() => [...secondNumber, newNumber]);
      return;
    }
    setSelectedNumber((numbers) => [...numbers, newNumber]);
  };

  return (
    <div className="main-container">
      <div className="calculator-container">
        <Display
          selectedNumber={numbers}
          isSecondNumber={isSecondNumber}
          secondSelectedNumber={secondNumber}
        />
        <div className="row">
          <div className="col-left">
            <div className="row-left">
              {operations_2.map((buttonValue) => (
                <CustomButton
                  customClass="operation-2"
                  isNumber
                  btnText={buttonValue}
                  onClick={() => handleButton(buttonValue)}
                />
              ))}
            </div>
            <div className="row-left-numbers">
              {buttonsNumbersArray.map((buttonValue) => (
                <CustomButton
                  customClass={buttonValue === 0 ? "larger-button" : ""}
                  btnText={buttonValue}
                  onClick={() => handleButton(buttonValue)}
                />
              ))}
            </div>
            <div className="row-left">
              <CustomButton isNumber btnText="=" />
            </div>
          </div>
          <div className="col">
            {operations.map((operation) => (
              <CustomButton
                customClass="operation"
                btnText={operation}
                onClick={() => {
                  operationsToDo({
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
