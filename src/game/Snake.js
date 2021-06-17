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
}

module.exports = () =>{
  snake
}
