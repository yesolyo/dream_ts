{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };
  //public
  //private를 사용하면 외부에서 변경할수 없게 은닉할 수 있음
  //protected
  class CoffeMachine {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class level 새로 안 만들어짐
    private coffeBean: number = 0; //instace(object)level 호출마다 새로 만들어짐
    private constructor(coffeBean: number) {
      this.coffeBean = coffeBean;
    }
    static makeMachine(coffeBean: number): CoffeMachine {
      return new CoffeMachine(coffeBean);
    }
    fillCoffeeBeans(coffeBean: number) {
      if (coffeBean < 0) {
        throw new Error("0보다 작음");
      }
      this.coffeBean += coffeBean;
    }
    makeCoffe(shots: number): CoffeCup {
      if (this.coffeBean < shots * CoffeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enought coffee beans!");
      }
      this.coffeBean -= shots * CoffeMachine.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeMachine.makeMachine(32);
  maker.fillCoffeeBeans(3);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("ERROR");
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }
  const user = new User("s", "Y");
  user.age = 6;
  console.log(user);
}
