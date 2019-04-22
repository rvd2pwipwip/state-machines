const welcomeMachine = Machine({
  key: "Stingray Music Welcome",
  initial: "launch",
  states: {
    launch: {
      onEntry: ["loading splash"],
      on: {
        BYPASS_IP: "welcomePrison",
        LOGIN_SUCCESS: "accessMethod",
        LOGIN_FAILURE: ""
      }
    },
    accessMethod: {
      on: {
        KNOWN: "provider",
        UNKNOWN: "territory"
      }
    },
    provider: {
      on: {
        KNOWN: "providerMatch",
        UNKNOWN: ""
      }
    },
    providerMatch: {
      on: {
        MATCH: "player",
        DIFFERENT: "switchProvider"
      }
    },
    switchProvider: {
      on: {
        SWITCH_PROVIDER: "player",
        CONTINUE_PROVIDER: "player"
      }
    },
    territory: {
      on: {
        SUBSCRIPTION: "stingrayFreeSplash",
        NO_SUBSCRIPTION: "stingraySplash"
      }
    },
    loggedIn: {
      on: {
        LOG_OUT: "launch"
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
    agreement: {
      on: {
        I_ACCEPT: "player"
      }
    },
    providerSplash: {
      on: {
        CONTINUE: "player"
      }
    },
    stingrayFreeSplash: {},
    stingraySplash: {},
    player: { type: "final" }
  }
});
