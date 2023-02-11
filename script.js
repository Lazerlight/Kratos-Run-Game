const MAIN_WIDTH = 200;
const MAIN_HEIGHT = 50;
const SPEED_SCALE = 0.5;
import { renderGround, setupGround } from "./ground.js";

const mainEl = document.querySelector("main");

setMainScale();
window.addEventListener("resize", setMainScale);
setupGround();
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

  lastTime = time;
  window.requestAnimationFrame(renderGame);
}
window.requestAnimationFrame(renderGame);
