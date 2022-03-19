export const operationsToDo = ({ operation, setIsSecondNumber }) => {
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
