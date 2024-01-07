{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState1({ ...state }: ResourceLoadState) {
    switch (state.state) {
      case "loading":
        return console.log(`👀 ${state.state}...`);
      case "success":
        return console.log(`😃 ${state.response.body}`);
      case "fail":
        return console.log(`😱 ${state.reason}`);
    }
  }

  printLoginState1({ state: "loading" }); // 👀 loading...
  printLoginState1({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState1({ state: "fail", reason: "no network" }); // 😱 no network
}
