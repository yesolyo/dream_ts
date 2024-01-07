{
  //Enum

  //JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, THUESDAY: 1, WEDNESDAY: 2 });

  //TypeScript 숫자가 0부터 지정되며, 순차적으로 증가한다.
  type DaysOfWeek = "Monday" | "TuesDay";
  enum Days {
    Monday,
    Thuesday,
    wednesday,
    Thurseday,
    Friday,
    Satarday,
    Sunday,
  }

  console.log(Days.Thuesday);
  //enum은 가능한 사용하지 말아야한다. enum으로 변수를 지정하게 되면 어느 숫자든 지정할 수 있다. 컴파일 에러가 발생되지 않는다.
  let day: Days = Days.Satarday;
  day = Days.Thuesday;
  // day = 10;
  console.log(day);

  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Monday";
  //모바일 클라이언트와 의사소통을 할 때 enum을 사용한다.(유니온 타입이 모바일에는 없기때문에)
}
