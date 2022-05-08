import { useState } from "react";

export const operations = ({
  parsedArray1,
  parsedArray2,
  operationChoosed,
}) => {
  switch (operationChoosed) {
    case "+":
      return parsedArray1 + parsedArray2;

    case "-":
      return parsedArray1 - parsedArray2;

    case "/":
      return parsedArray1 / parsedArray2;

    case "*":
      return parsedArray1 * parsedArray2;
  }
};

export const operationsToDo = ({
  isSecondNumber,
  numbers,
  secondNumber,
  operation,
  setSelectedNumber,
  setIsSecondNumber,
  setSecondNumber,
  setOperationChoosed,
  setResult,
  setUseComma,
}) => {
  switch (operation) {
    case "+":
      setIsSecondNumber(true);
      break;

    case "-":
      setIsSecondNumber(true);
      break;

    case "/":
      setIsSecondNumber(true);
      break;

    case "*":
      setIsSecondNumber(true);
      break;

    case "c":
      if (isSecondNumber) {
        if (secondNumber.length === 0) {
          setSecondNumber([""]);
          return;
        }
        const newSecondNumber = secondNumber.slice(0, -1);
        setSecondNumber(newSecondNumber);
        return;
      }

      if (numbers.length === 0) {
        setSelectedNumber([0]);
        return;
      }

      const newNumber = numbers.slice(0, -1);
      setSelectedNumber(newNumber);
      break;

    case "del":
      setSelectedNumber([]);
      setIsSecondNumber(false);
      setSecondNumber([]);
      setOperationChoosed("");
      setResult(null);
      break;

    case "%":
      if (secondNumber !== 0) {
        const moduloSecodNumber = secondNumber / 100;
        setSecondNumber(moduloSecodNumber);

        if (numbers !== 0) {
          const moduloFirstnumber = numbers / 100;
          setSelectedNumber(moduloFirstnumber);
        }
        return;
      }
      break;

    case ".":
      if (isSecondNumber) {
        const floatSecondNumber = [...secondNumber, "."].join("");
        setUseComma(true);
        setSecondNumber(floatSecondNumber);
        return;
      }
      const floatNumber = [...numbers, "."].join("");
      setUseComma(true);
      setSelectedNumber(floatNumber);
      break;

    default:
      console.log("error");
  }
};
