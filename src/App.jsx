import React, { useState } from "react";
import { CustomButton } from "./components/CustomButton";
import { Display } from "./components/Display";
import { MagicNumber } from "./components/MagicNumber";
import "./App.css";

const numbersLenght = 10;
const buttonsNumbersArray = Array.from(Array(numbersLenght).keys()); //genera [1,2,3...numbersLenght] DRY: don't repeat yourself
console.log("array generato--->", buttonsNumbersArray);
function App() {
  const [numbers, setSelectedNumber] = useState([]); //array vuoto
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
      <Display selectedNumber={numbers} />
      {/**dobbiamo salvare una sequenza di numeri in un array, posso quindi utilizzare la funzione push() */}
      {/**dobbiamo unire i numeri */}
      <CustomButton
        btnText={buttonValue}
        onClick={() => handleButton(buttonValue)}
      />
    </div>
  );
}
{
  /**l'obiettivo è creare il tasto cancel, si può realizzare come nuova funzione in sostituzione di handleButton
        oppure potrei passare un paramentro a handleButton "isDelete". Questo parametro se è true mi fa entrare in un if dentro
        handleButton (dentro if avviene l'operazione di delete)*/
}

export default App;
