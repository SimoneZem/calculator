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
  setIsSecondNumber,
  isSecondNumber,
  numbers,
  secondNumber,
  operation,
  setSelectedNumber,
  setSecondNumber,
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
          setSecondNumber([0]);
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
      break;

    case "%":
      break;

    case ".":
      break;

    default:
      console.log("error");
  }
};
