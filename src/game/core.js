// -App.js -------------------------------------------------------------------------------------------------------------
//console.log(' %c SNAKE 2021', 'font-weight: bold; font-size: 14px;color: rgba(0,0,0,1); text-shadow: 1px 1px 0 rgb(200, 200,200)');
const Snake = require('./Snake');
const Fruit = require('./Fruit');
var fruit;
var snake;
var directions;
var score = 0;
var colNum = 40;
var rowNum = 40;

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  switch (keyName) {
    case 'ArrowUp':
      directions = 'up'
      break;
    case 'ArrowDown':
      directions = 'down'
      break;
    case 'ArrowLeft':
      directions = 'left'
      break;
    case 'ArrowRight':
      directions = 'right'
      break;
    default:
      break;
  }
});

function startGame() {
  myGameArea.start();
  fruit = new Fruit('green');
  snake = new Snake('#234235');
}

var oldTimeStamp;
var CANVAS_ID = 'my-canvas';
var myGameArea = {
  canvas: (function () {
    var canvas = document.getElementById(CANVAS_ID);
    if (canvas == void 0) { // void 0 == null == undefined
      canvas = document.createElement('canvas');
      canvas.id = CANVAS_ID;
    }
    return canvas;
  })(),
  start: function () {
    this.canvas.width = 520;
    this.canvas.height = 520;
    this.canvas.style['background-color'] = 'rgba(0,0,0,.15)';
    this.columns = this.canvas.width / colNum;
    this.rows = this.canvas.height / rowNum;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    oldTimeStamp = Date.now();
    requestAnimationFrame(updateGameArea);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function updateGameArea(timestamp) {
  //console.log((timestamp - oldTimeStamp) + "ms")
  var secondsPassed = (timestamp - oldTimeStamp) / 1000;
  secondsPassed = Math.min(secondsPassed, 0.1);
  myGameArea.clear();
  snake.NewPos(directions,secondsPassed);
  snake.Update(myGameArea, score);
  fruit.Update(myGameArea);

  if (snake.x >= fruit.x && snake.x <= (fruit.x + fruit.width) && snake.y >= fruit.y && snake.y <= (fruit.y + fruit.height)) {
    score++
    fruit.x = Math.floor(Math.random() * 40) * 13;
    fruit.y = Math.floor(Math.random() * 40) * 13;
  }
  oldTimeStamp = timestamp;
  requestAnimationFrame(updateGameArea)
}

// -App.js ----------------------------------------------------------------------------------------------------------EOF
module.exports.start = () => {
  startGame();
};
