// control with a help of position and take coordinates 'to win'
let str;
let horizontalPosition;
let verticalPosition;
let stopButtonRef = document.querySelector(".stop-button");
let snakeRef = document.querySelector(".snake");
let animationFrameId;
let timeOutId;
let fps = 5;
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
  // window.cancelAnimationFrame(moveSnake);
  getPositionOfSnake();
  animationFrameId = requestAnimationFrame(moveSnake);
  // moveSnake(str);
});
// ========================

function getPositionOfSnake() {
  horizontalPosition = Number.parseInt(snakeRef.style["left"]);
  verticalPosition = Number.parseInt(snakeRef.style["top"]);
  console.log(horizontalPosition);
  console.log(verticalPosition);
}
// =================
function moveSnake() {
  console.log(str);
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
  readOffset(snakeRef);
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
  console.log("offsets:", toLeft, fromTop);
}
// =====================
function generateTarget() {
  console.log("smth");
}
// ====================
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
