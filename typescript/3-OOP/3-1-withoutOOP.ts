{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };
  const BEANS_GRAMM_PER_SHOT: number = 7;

  let coffeBeans: number = 0;
  function makeCoffee(shots: number): CoffeCup {
    if (coffeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not enought coffee beans!");
    }
    coffeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
  coffeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
