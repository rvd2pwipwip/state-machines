const machine = {
  green: { TIMER: "yellow" },
  yellow: { TIMER: "red" },
  red: { TIMER: "green" }
};
let currentState = "green";

// The finite state machine transition function
const transition = (currentState, action) => machine[currentState][action];

// Any side effects
const update = state => {
  currentState = state;
  document.getElementById("traffic-light").setAttribute("data-state", state);
};

document.getElementById("timer").addEventListener("click", () => {
  const nextState = transition(currentState, "TIMER");
  update(nextState);
});

// //auto lightmachine
// setInterval(() => {
//   const nextState = transition(currentState, 'TIMER');
//   update(nextState);
// }, 2000);
