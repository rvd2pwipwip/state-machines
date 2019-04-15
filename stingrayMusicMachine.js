stingrayMusicMachine = {
  key: "Stingray Music",
  initial: "launching",
  states: {
    launching: {
      onEntry: ["loading splash"],
      on: {
        BYPASS_IP: "welcomePrison",
        LOGIN_SUCCESS: "loggedIn",
        LOGIN_FAILURE: "loggedOut"
      }
    },
    loggedIn: {
      on: {
        LOG_OUT: "launching"
      }
    },
    loggedOut: {
      on: {
        NOACCOUNT_AUTH: "welcomeSKY",
        ACCOUNT_AUTH: "welcomeVIA"
      }
    },
    welcomePrison: {
      on: {
        CONTINUE: "providerSplash"
      }
    },
    welcomeSKY: {
      on: {
        CONTINUE: "providerSplash"
      }
    },
    welcomeVIA: {},
    providerSplash: {}
  }
};
