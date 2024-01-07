{
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }
  // function add(a: number, b: number): number {
  //   return a + b;
  // }

  // function jsFetchNum(id) {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // function fetchNum(id: string): Promise<number> {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  //optional parameter
  function pringNum(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); //undefined
  }

  pringNum("steve");

  //Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  //Rest paramter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
}
