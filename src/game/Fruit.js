   const Component = require('./Component')

   module.exports = class fruit extends Component {
     constructor(color) {
       super();
       this.color = color;
     }
    Update() 
    {
      this.x = Math.floor(Math.random() * 40) * 13;
      this.y = Math.floor(Math.random() * 40) * 13;
    }
    Draw(Gamespace)
    {
      var ctx = Gamespace.context;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
   }