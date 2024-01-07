/**
 * Let's make a calculator 🧮
 */
type Calculate = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate(str: Calculate, a: number, b: number): number {
  switch (str) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return 5 % 2;
    default:
      throw new Error("빠짐");
  }
}
console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
