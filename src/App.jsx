import React, { useState } from "react";
import { CustomButton } from "./components/CustomButton";
import { Display } from "./components/Display";
import { operationsToDo } from "./utils";
//*import { MagicNumber } from "./components/MagicNumber";
import "./App.css";

const numbersLenght = 10;
const buttonsNumbersArray = Array.from(Array(numbersLenght).keys()); //genera [1,2,3...numbersLenght] DRY: don't repeat yourself
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
      {/**obiettivo: stampare tanti custom button per quanti elementi ci sono nell'array buttonsNumberArray */}
      {buttonsNumbersArray.map((buttonValue) => (
        <CustomButton
          btnText={buttonValue}
          onClick={() => handleButton(buttonValue)}
        />
      ))}
      <Display selectedNumber={numbers} isSecondNumber={isSecondNumber} />
      {/**dobbiamo salvare una sequenza di numeri in un array, posso quindi utilizzare la funzione push() */}
      {/**dobbiamo unire i numeri */}
      {/**dopo aver instanziato l'array operations,abbiamo ciclato l'array stampando un custom button per ogni elemento dell'aray operations */}
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
          //dobbiamo impostare il behaviour del custom button in base all'operazione
        />
      ))}
    </div>
  );
}

export default App;
