var Component = require('./Component')

module.exports = class Snake extends Component {
  constructor(color, speed) {
    super();
    this.movementSpeed = speed;
    this.color = color;
    this.size = [];
    this.lives = 3;
  }
  Update(score)
  {
    for (let i = 0; i < this.size.length-1; i++) {
      this.size[i] = this.size[i + 1];
    }

    this.size[score-1] = {x: this.x, y: this.y}
  }
  Draw(Gamespace) {
    var ctx = Gamespace.context;
    ctx.fillStyle = this.color;
  
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
  NewPos(direction, movecol) {
     switch (direction) {
       case 'right':
         this.x +=  movecol;
         break;
       case 'left':
         this.x -=  movecol;
         break;
       case 'up':
         this.y -=  movecol;
         break;
       case 'down':
         this.y +=  movecol;
         break;
       default:
         break;
    }
  }
  Intersect(){
    for(let i = 4; i < this.size.length; i++){
        if(this.size[0].x == this.size[i].x && this.size[0].y == this.size[i].y) return true
    }
    return false;
  }
}

