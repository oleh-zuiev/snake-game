// control with a help of position and take coordinates 'to win'
let str; //up/down/left/right
let horizontalPosition;
let verticalPosition;
let snakeContainerEl = document.querySelector(".js-snake-container");
let stopButtonRef = document.querySelector(".stop-button");
let snakeRef = document.querySelector(".snake");
let animationFrameId;
let timeOutId;
let fps = 7;
let targetForsnake;
// ----------
let coordinatesOfSnake; //it's an array
let coordinatesOfTarget; //it's an array generateTarget();
let notFirstTarget; // it's for
// ============================
snakeRef.style.top = "51%";
snakeRef.style.left = "51%";
let moveSnakeToggle = true; //is not in use
// =============================
document.addEventListener("keydown", function (event) {
  const key = event.key;
  clearTimeout(timeOutId);
  cancelAnimationFrame(animationFrameId);
  if (
    key !== "ArrowLeft" &&
    key !== "ArrowRight" &&
    key !== "ArrowUp" &&
    key !== "ArrowDown"
  ) {
    return;
  }
  switch (key) {
    case "ArrowLeft":
      str = "Left";
      break;
    case "ArrowRight":
      str = "Right";
      break;
    case "ArrowUp":
      str = "Up";
      break;
    case "ArrowDown":
      str = "Down";
      break;
  }
  getPositionOfSnake();
  animationFrameId = requestAnimationFrame(moveSnake);
});
// ========================

function getPositionOfSnake() {
  horizontalPosition = Number.parseInt(snakeRef.style["left"]);
  verticalPosition = Number.parseInt(snakeRef.style["top"]);
}
// =================
function moveSnake() {
  if (str === "Up") {
    verticalPosition -= 1;
    snakeRef.style.top = verticalPosition + "%";
  }
  if (str === "Down") {
    verticalPosition += 1;
    snakeRef.style.top = verticalPosition + "%";
  }
  if (str === "Left") {
    horizontalPosition -= 1;
    snakeRef.style.left = horizontalPosition + "%";
  }
  if (str === "Right") {
    horizontalPosition += 1;
    snakeRef.style.left = horizontalPosition + "%";
  }
  coordinatesOfSnake = readOffset(snakeRef);
  coordinatesOfTarget = readOffset(targetForsnake);
  winScore();
  checkIfSnakeTouchesBorder();
  timeOutId = setTimeout(function () {
    //throttle requestAnimationFrame to 20fps
    animationFrameId = requestAnimationFrame(moveSnake);
  }, 1000 / fps);
  moveSnakeToggle = false; //is not in use
}

// ============================
stopButtonRef.addEventListener("click", function () {
  // console.log("hooray");
  clearTimeout(timeOutId);
  cancelAnimationFrame(animationFrameId);
});
// =======================
function readOffset(el) {
  let toLeft = el.offsetLeft;
  let fromTop = el.offsetTop;
  let arrWithOffsets = [toLeft, fromTop];
  return arrWithOffsets;
}
// =====================
function generateTarget() {
  if (notFirstTarget) {
    snakeContainerEl.removeChild(targetForsnake);
  }
  let randomVertical = getRandomIntInclusive(0, 95);
  let randomHorizontal = getRandomIntInclusive(0, 95);
  targetForsnake = document.createElement("div");
  targetForsnake.style.zIndex = "-3";
  snakeContainerEl.appendChild(targetForsnake);
  targetForsnake.style.top = randomVertical + "%";
  targetForsnake.style.left = randomHorizontal + "%";
  targetForsnake.classList.add("target");
  notFirstTarget = true;
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
generateTarget();
// ====================
function winScore() {
  console.log(coordinatesOfSnake, coordinatesOfTarget);
  console.log(Math.abs(coordinatesOfSnake[0] - coordinatesOfTarget[0]));
  console.log(Math.abs(coordinatesOfSnake[1] - coordinatesOfTarget[1]));
  if (
    Math.abs(coordinatesOfSnake[0] - coordinatesOfTarget[0]) <= 19 &&
    Math.abs(coordinatesOfSnake[1] - coordinatesOfTarget[1]) <= 19
  ) {
    console.log("bingo");
    generateTarget();
  }
}
// ====================
function checkIfSnakeTouchesBorder() {
  console.log(coordinatesOfSnake);
  for (const coordinate of coordinatesOfSnake) {
    if (coordinate < 0 || coordinate > 480) {
      console.log("game over");
      gameOver();
    }
  }
}
// ====================
function gameOver() {
  clearTimeout(timeOutId);
  cancelAnimationFrame(animationFrameId);
  snakeContainerEl.innerHTML = `<div class='game-over'><p>GAME OVER</p></div>`;
}
// ======================
//   var id = null;
// function myMove() {
//   var elem = document.getElementById("myAnimation");
//   var pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//     }
//   }
// }
