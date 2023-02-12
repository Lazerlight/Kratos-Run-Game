const MAIN_WIDTH = 200;
const MAIN_HEIGHT = 50;
let INCREASE = 0;
let SPEED_SCALE = 0;

import { renderGround, setupGround } from "./ground.js";

const mainEl = document.querySelector("main");
const startMessageEl = document.querySelector(".start-message");

setMainScale();
document.addEventListener("keydown", gameStart, { once: true });
window.addEventListener("resize", setMainScale);
function setMainScale() {
  let mainPixelScale;

  if (window.innerWidth / window.innerHeight < MAIN_WIDTH / MAIN_HEIGHT) {
    mainPixelScale = window.innerWidth / MAIN_WIDTH;
  } else {
    mainPixelScale = window.innerHeight / MAIN_HEIGHT;
  }

  mainEl.style.width = `${MAIN_WIDTH * mainPixelScale}px`;
  mainEl.style.height = `${MAIN_HEIGHT * mainPixelScale}px`;
}

let lastTime;
function renderGame(time) {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(renderGame);
    return;
  }
  const delta = time - lastTime;
  renderGround(delta, SPEED_SCALE);
  incSpeed(delta);
  lastTime = time;
  window.requestAnimationFrame(renderGame);
}
window.requestAnimationFrame(renderGame);

function gameStart() {
  lastTime = null;
  SPEED_SCALE = 0.5;
  INCREASE = 0.000005;
  startMessageEl.classList.add("hide");
  setupGround();
}
function incSpeed(delta) {
  SPEED_SCALE += delta * INCREASE;
}
