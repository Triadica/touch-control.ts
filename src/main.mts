import { type ControlStates, renderControl, startControlLoop } from "./index.mjs";

let showData = (elapsed: number, states: ControlStates, delta: ControlStates) => {
  console.log("showing", elapsed, states.leftMove, states.rightMove, states.leftA, states.rightA);
  let target = document.querySelector("pre");
  if (target) {
    target.innerText = JSON.stringify({ states: states, delta: delta }, null, 2);
  }
};

let main = () => {
  renderControl();
  startControlLoop(300, (elapsed, states, delta) => {
    showData(elapsed, states, delta);
  });
};

main();
