{
  //Array
  const fruits: string[] = ["바난", "사과"]; //readonlyt는 string[]이런 방식으로 해야한다. readonly는 불변성을 보장한다.
  const fruits1: Array<string> = ["바난", "사과"];
  function printArray(fruits: readonly string[]) {}

  //Tuple 인덱스처럼 접근할 때 가독성이 떨어진다. 권장X, interface,type alias, class를 대체해서 사용하면 좋다
  let student: [string, number];
  student = ["name", 123];
  student[0]; //name
  student[1]; //123
  const [name, age] = student;
}
