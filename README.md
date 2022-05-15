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
