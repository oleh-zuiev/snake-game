# snake-game

Slowing down or cancelling requestAnimationFrame()
http://www.javascriptkit.com/javatutors/requestanimationframe.shtml
The standard requestAnimationFrame runs at around 60fps under ideal conditions (or once every 16.7ms), in sync with the refresh rate of the typical monitor. If your animation requires a different frames per second (up to 60 fps) or simply doesn't require that high a level of refresh rate, you can slow it down by calling requestAnimationFrame inside setTimeout(). That way, you get the desired frame rate while reaping the benefits of requestAnimationFrame:

var adiv = document.getElementById('mydiv')
var leftpos = 0
var fps = 20
function movediv(timestamp){
setTimeout(function(){ //throttle requestAnimationFrame to 20fps
leftpos += 5
adiv.style.left = leftpos + 'px'
requestAnimationFrame(movediv)
}, 1000/fps)
}

requestAnimationFrame(movediv)
In this version of moving a DIV horizontally, we're throttling the frames per second to roughly 20, by calling requestAnimationFrame inside setTimeout() each time.

<!-- =======Multiple functions with requestAnimationFrame============== -->

As you noticed, you should call requestAnimationFrame only once per frame. It means that you need to call it once upon starting your game, and then once at the end of the same function it calls. For instance:

requestAnimationFrame(draw);
function draw() {
if (onCutScene) drawCutScene();
else if (onMainMenu) drawMainMenu();
else if (inGame) drawGame();
else if etc... //Or use a gameState variable and a switch..case
requestAnimationFrame(draw);
}
The inner functions should not call requestAnimationFrame again.

<!-- =========We can wrap result of return of function into  array========= -->
