import React, { useState } from "react";
import { CustomButton } from "./components/CustomButton";
import { Display } from "./components/Display";
import { operationsToDo, operations as computeOperation } from "./utils";

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
  const weHaveResult = result !== null;

  const handleButton = (newNumber) => {
    if (isSecondNumber) {
      setSecondNumber(() => [...secondNumber, newNumber]);
      return;
    }
    setSelectedNumber((numbers) => [...numbers, newNumber]);
  };

  const showResult = () => {
    const parsedArray1 = Number(numbers?.join(""));
    const parsedArray2 = Number(secondNumber?.join(""));
    const result = computeOperation({
      parsedArray1,
      parsedArray2,
      operationChoosed,
    });
    setResult(result);
  };

  const returnToSetFirstNumber = (buttonValue) => {
    setResult(null);
    setIsSecondNumber(false);
    setSecondNumber([]);
    setSelectedNumber([buttonValue]);
  };

  const handleNumericKeypad = (buttonValue) => {
    weHaveResult
      ? returnToSetFirstNumber(buttonValue)
      : handleButton(buttonValue);
  };

  const handleOperation = (operation) => {
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
  };

  return (
    <div className="main-container">
      <div className="calculator-container">
        <Display
          result={result}
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
                  customClass2={buttonValue === "=" ? "equal-button" : ""}
                  isNumber
                  key={buttonValue}
                  btnText={buttonValue}
                  onClick={() => handleButton(buttonValue)}
                />
              ))}
            </div>
            <div className="row-left-numbers">
              {buttonsNumbersArray.map((buttonValue) => (
                <CustomButton
                  key={buttonValue}
                  customClass={buttonValue === 0 ? "larger-button" : ""}
                  btnText={buttonValue}
                  onClick={() => handleNumericKeypad(buttonValue)}
                />
              ))}
            </div>
            <div className="row-left">
              <CustomButton onClick={showResult} isNumber btnText="=" />
            </div>
          </div>
          <div className="col">
            {operations.map((operation) => (
              <CustomButton
                key={operation}
                customClass="operation"
                btnText={operation}
                onClick={() => handleOperation(operation)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
