//Type Inference 선언함과 동시에 문자열을 선언해서 type을 string을 추론할 수 있다.
//함수에는 any가 추론되기 때문에 정확한 타입을 명시해주는게 좋다. 결과값은 추론이 가능한다.
let text = "hello";
function print(message: string) {
  console.log(message);
}

print("hello");

function add(x: number, y: number) {
  return x + y;
}
//여기서도 타입 추론이 된다.
const result = add(1, 2);
//알아서 타입을 명시해주지만, 왠만하면 타입을 정확하게 명시하는게 좋다. 원시 타입 같은 경우에는 생략할 수 있지만, 함수의 경우에는 타입을 명시해주는게 좋다.
//void는 생략 할 수 있다. 정확한 스타일 가이드를 설정해주는게 좋다.
