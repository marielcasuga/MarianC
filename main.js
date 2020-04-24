var robot = require("robotjs");

let mouse = robot.getMousePos ();
console.log(robot.getMousePos());

let newMouse = {x: mouse.x - 100, y: mouse.y -100};

timer();

function timer (){
    setTimeout(function(){
        robot.mouseeToggle("down");
        robot.dragMouse(newMouse.x, newMouse.y);
        robot.mouseToggle("up");
        robot.mouseClick("right");
    }, 3000)
}