{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };
  class CoffeMachine {
    static BEANS_GRAMM_PER_SHOT: number = 7; //class level 새로 안 만들어짐
    coffeBean: number = 0; //instace(object)level 호출마다 새로 만들어짐
    constructor(coffeBean: number) {
      this.coffeBean = coffeBean;
    }
    static coffeBeans(coffeBean: number): CoffeMachine {
      return new CoffeMachine(coffeBean);
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

  CoffeMachine.coffeBeans(3);
}
