{
  //Union Types: OR

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }

  move("right");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  //function: login ->success,fail

  type SucessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SucessState | FailState;
  function login1(): LoginState {
    return {
      response: {
        body: "logged in",
      },
    };
  }

  // printLoginState(state:LoginState)
  //success->body
  //fail-> reason

  function printLoginState2(state: LoginState): void {
    if ("response" in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
