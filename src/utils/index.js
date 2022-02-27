export const operationsToDo = ({
  operation,
  numbers,
  isSecondNumber,
  secondNumber,
  setIsSecondNumber,
}) => {
  switch (operation) {
    case "+":
      setIsSecondNumber(true);
      break;

    case "-":
      console.log(
        ">>>> ~ file: App.jsx ~ line 20 ~ operationsToDo ~ operation",
        operation
      );
      break;

    case "/":
      console.log(
        ">>>> ~ file: App.jsx ~ line 20 ~ operationsToDo ~ operation",
        operation
      );
      break;

    case "*":
      console.log(
        ">>>> ~ file: App.jsx ~ line 20 ~ operationsToDo ~ operation",
        operation
      );
      break;

    default:
      console.log("error");
  }
};
