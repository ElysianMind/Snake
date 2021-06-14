
var fruit;
var snake;
var score = 0;
var colNum = 40;
var rowNum = 40;
var movementSpeed = 50

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    switch (keyName) {
        case 'ArrowUp':
            snake.direction = "up"
        break;
        case 'ArrowDown':
            snake.direction = "down"
        break;
        case 'ArrowLeft':
            snake.direction = "left"
        break;
        case 'ArrowRight':
            snake.direction = "right"
        break;
        default:
            break;
    }
  });

function startGame() {
    myGameArea.start();
    fruit = new component(12, 12, "green", Math.floor(Math.random() * 40)*13, Math.floor(Math.random() * 40)*13, "fruit"); 
    snake = new component(12, 12, "#234235", 0, 0, "snake");
    
}

var currentDate;

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 520;
        this.canvas.height = 520;
        this.columns = this.canvas.width / colNum;
        this.rows = this.canvas.height / rowNum; 
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        oldTimeStamp  = Date.now
        this.interval = requestAnimationFrame(updateGameArea);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function component(width, height, color, x, y, type) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y; 
    this.size = [];
    this.update = function(element){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        if(element == "snake"){
            
            for(let i = 0; i < this.size.length; i++){
                this.size[i] = this.size[i+1];
            } 

            this.size[score -1] = {x: this.x,y:this.y}
        }
        ctx.fillRect(this.x, this.y, this.width, this.height);
        if(this.x > myGameArea.canvas.width){
            this.x = 0;
        }
        if(this.y > myGameArea.canvas.height){
            this.y = 0;
        }
        if(this.x < 0 ){
            this.x = myGameArea.canvas.width;
        }
        if(this.y < 0 ){
            this.y = myGameArea.canvas.height;
        }
    }
    this.newPos = function(sec) {
    switch (this.direction) {
        case 'right':
            this.x += movementSpeed * sec;
            break;
        case 'left':
            this.x -= movementSpeed * sec;
            break;
        case 'up':
            this.y -= movementSpeed * sec; 
            break;
        case 'down':
            this.y += movementSpeed * sec;
            break;
        default:
            break;
        }
    }    

}

function updateGameArea(timestamp) {
    console.log((timestamp - oldTimeStamp) + "ms")
    secondsPassed = (timestamp - oldTimeStamp)/ 1000;
    secondsPassed = Math.min(secondsPassed, 0.1);
    myGameArea.clear();
    snake.newPos(secondsPassed);    
    snake.update("snake");
    fruit.update();

    if (snake.x == fruit.x && snake.y == fruit.y){    
        this.score++
        console.log(this.score);
        fruit.x = Math.floor(Math.random() * 40)*13;
        fruit.y = Math.floor(Math.random() * 40)*13;
    }
    oldTimeStamp = timestamp;
    requestAnimationFrame(updateGameArea)
}