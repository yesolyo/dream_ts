{
  //unknown 타입이 없는 자바스크립트와 연동할 수 있기 때문에 리턴하는 타입을 모를 수 있기 때문이다.(지양)
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any
  let anything: any = 0;
  anything = "helloe";

  //void 아무런 값도 리턴하지 않을 때
  function print(): void {
    console.log("hello");
    return;
  }

  //never 아무런 값도 리턴하지 않는다. 에러 또는 무한 반복문
  function throwError(message: string): never {
    throw new Error(message);
    // 무한 반복 문
  }

  //objet 원시타입을 제외한 모든 오브젝트를 다 담을 수 있다.(안 좋다)
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
}
