{
  //Type Assertions (안 좋다) 실행하기 전까지 에러를 확인 할 수가 없다. 정확하게 타입을 알 수 있을 때 사용한다.
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();

  console.log((result as string).length);
  console.log((<string>result).length);

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); //완전 장담해 무조건 undefind가 아니야를 사용할 때

  const button = document.querySelector("class")!; //가능하면 피하자
}
