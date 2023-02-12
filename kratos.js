let FRAME_COUNT = 2;
const FRAME_DELAY = 100;
const JUMP_SPEED = 0.45;
const GRAVITY = 0.011;

const kratosEl = document.querySelector(".kratos");

let isJumping;
let currentFrame;
let currentFrameDelay;

export function renderKratos(delta, speedScale) {
  kratosJump();
  kratosRun(delta, speedScale);
}

export function setupKratos() {
  isJumping = false;
  currentFrame = 0;
  currentFrameDelay = 0;
}

function kratosJump() {}

function kratosRun(delta, speedScale) {
  if (isJumping) {
    kratosEl.src = "./Graphics/kratosStand.png";
    return;
  }

  if (currentFrameDelay >= FRAME_DELAY) {
    kratosEl.src = `./Graphics/kratosRun-${currentFrame}.png`;
    currentFrameDelay -= FRAME_DELAY;
    console.log(currentFrame);
    if (currentFrame == 1) {
      currentFrame = 0;
    } else {
      currentFrame = 1;
    }
  }
  currentFrameDelay += delta * speedScale;
}
