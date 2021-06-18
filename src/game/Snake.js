var Component = require('./Component')

module.exports = class Snake extends Component {
  constructor(color) {
    super();
    this.movementSpeed = 100;
    this.color = color;
    this.size = [];
    this.lives = 3;
  }
  Update(Gamespace, score)
  {
     var ctx = Gamespace.context;
     ctx.fillStyle = this.color;
     
    for (let i = 0; i < this.size.length-1; i++) {
       this.size[i] = this.size[i + 1];
    }

    this.size[score-1] = {x: this.x, y: this.y}
    
    for(let i = 0; i < this.size.length - 1; i++){
      ctx.fillRect(this.size[i].x, this.size[i].y, this.width, this.height);
    }

    ctx.fillRect(this.x, this.y, this.width, this.height);

    if (this.x > Gamespace.canvas.width) {
      this.x = 0;
    }
    if (this.y > Gamespace.canvas.height) {
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = Gamespace.canvas.width;
    }
    if (this.y < 0) {
      this.y = Gamespace.canvas.height;
    }

  }
  NewPos(direction, sec) {
     switch (direction) {
       case 'right':
         this.x +=  this.movementSpeed * sec;
         break;
       case 'left':
         this.x -=  this.movementSpeed * sec;
         break;
       case 'up':
         this.y -=  this.movementSpeed * sec;
         break;
       case 'down':
         this.y +=  this.movementSpeed * sec;
         break;
       default:
         break;
    }
  }
//static funtions uppercase
}


//module.exports = Snake;
