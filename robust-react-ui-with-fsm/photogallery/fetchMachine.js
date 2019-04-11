// Available variables:
// Machine (machine factory function)
// assign (action)
// XState (all XState exports)

const fetchMachine = Machine(
  {
    id: "fetch",
    context: { attempts: 0 },
    initial: "idle",
    states: {
      idle: {
        on: { FETCH: "pending" }
      },
      pending: {
        onEntry: assign({
          attempts: ctx => ctx.attempts + 1
        }),
        after: {
          TIMEOUT: "rejected"
        },
        on: {
          RESOLVE: "fulfilled",
          REJECT: "rejected"
        }
      },
      fulfilled: {
        initial: "first",
        states: {
          first: {
            on: {
              NEXT: "second"
            }
          },
          second: {
            on: {
              NEXT: "third"
            }
          },
          third: {
            type: "final"
          }
        }
      },
      rejected: {
        initial: "can retry",
        states: {
          "can retry": {
            on: {
              "": {
                target: "failure",
                cond: "maxAttempts"
              }
            }
          },
          failure: {
            on: {
              RETRY: undefined
            },
            type: "final"
          }
        },
        on: {
          RETRY: "pending"
        }
      }
    }
  },
  {
    guards: {
      maxAttempts: ctx => ctx.attempts >= 5
    },
    delays: {
      TIMEOUT: 2000
    }
  }
);
