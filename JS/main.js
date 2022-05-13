// control with a help of position and take coordinates 'to win'
let str;
let horizontalPosition;
let verticalPosition;
let snakeRef = document.querySelector('.snake'); 
snakeRef.style.top = '51%';
snakeRef.style.left = '51%'; 
// ===========================
// var declaration = document.styleSheets[0].cssRules[0].style;
// var value = declaration.getPropertyValue('backgroung-color');
// console.log('eeverv',value);
// ===========================

// ======Test=======
let infoTop;
let infoLeft;
snakeRef.addEventListener('click', function (e) {
  let infoTop= snakeRef.style['top'];
  console.log(infoTop);
  snakeRef.style.top = '60%';
  snakeRef.style.left = '60%';
  infoTop= snakeRef.style['top'];
  infoLeft= snakeRef.style['left'];
  console.log(infoTop);
  console.log(infoLeft);
  console.log('strange moves');
});
// =============================
document.addEventListener('keydown', function (event) {
  const key = event.key;
  console.log(key);
 switch (key) {
    case "ArrowLeft":
        str = 'Left';
        break;
    case "ArrowRight":
        str = 'Right';
        break;
    case "ArrowUp":
        str = 'Up';
        break;
    case "ArrowDown":
        str = 'Down';
        break;
  }
  // ================
  getPositionOfSnake();
  // ================
  moveSnake(str);
  // console.log(str);
  });
  // ========================

function getPositionOfSnake() {
  horizontalPosition = Number.parseInt(snakeRef.style['left']);
  verticalPosition = Number.parseInt(snakeRef.style['top']);
  console.log(horizontalPosition);
  console.log(verticalPosition);
}
// =================
function moveSnake(strWithDirection) {
  console.log(strWithDirection);
  if (strWithDirection === 'Up') {
    verticalPosition -= 1;
    snakeRef.style.top =verticalPosition+'%';
  }
  if (strWithDirection === 'Down') {
    verticalPosition += 1;
    snakeRef.style.top =verticalPosition+'%';
  }
  if (strWithDirection === 'Left') {
    horizontalPosition -= 1;
    snakeRef.style.left = horizontalPosition+'%';
  }
  if (strWithDirection === 'Right') {
    horizontalPosition += 1;
    snakeRef.style.left = horizontalPosition + '%';
  }
}
  
  // ============================
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