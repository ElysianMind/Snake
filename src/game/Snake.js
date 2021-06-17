var component = required('./Component')

class snake extends Component {
  constructor(color) {
    super();
    this.color = color;
    this.size = [];
    this.lives = 3;
  }
  Update()
  {
     var ctx = myGameArea.context;
     ctx.fillStyle = this.color;
     ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  newPos(direction, sec) {
     switch (direction) {
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

export default snake;
