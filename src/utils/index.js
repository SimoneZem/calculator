const operations = ({ parsedArray1, parsedArray2, operationChoosed }) => {
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
  setDisplayResult,
  numbers,
  secondNumber,
  operation,
  setIsSecondNumber,
  operationChoosed,
}) => {
  console.log(">>>> ~ file: index.js ~ line 9 ~ operation", operation);
  console.log(">>>> ~ file: index.js ~ line 9 ~ numbers", numbers);
  console.log(">>>> ~ file: index.js ~ line 9 ~ secondNumber", secondNumber);

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

    case "=":
      const parsedArray1 = Number(numbers?.join(""));
      const parsedArray2 = Number(secondNumber?.join(""));
      const result = operations({
        parsedArray1,
        parsedArray2,
        operationChoosed,
      });
      setResult(result);

      break;

    default:
      console.log("error");
  }
};
