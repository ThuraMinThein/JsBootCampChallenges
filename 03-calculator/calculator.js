function calculator(n1, n2, operator) {
  switch (operator) {
    case "+":
      return n1 + n2;
      break;
    case "-":
      return n1 - n2;
      break;
    case "*":
      return n1 * n2;
      break;
    case "/":
      return n1 / n2;
      break;

    default:
      break;
  }
}

module.exports = calculator;
