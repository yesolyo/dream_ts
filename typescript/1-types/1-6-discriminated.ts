{
  //discriminated는 공통적인 속성을 가지기 때문에 토대로 만든다
  type SucessState = {
    result: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SucessState | FailState;
  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in",
      },
    };
  }

  // printLoginState(state:LoginState)
  //success->body
  //fail-> reason

  function printLoginState(state: LoginState): void {
    if (state.result === "success") {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
