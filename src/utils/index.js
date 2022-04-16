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
  setResult,
  numbers,
  secondNumber,
  operation,
  setIsSecondNumber,
  operationChoosed,
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

    default:
      console.log("error");
  }
};
