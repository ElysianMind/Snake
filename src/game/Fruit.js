   const Component = require('./Component')

   module.exports = class fruit extends Component {
     constructor(color) {
       super();
       this.color = color;
     }
     Update(Gamespace) 
     {
        var ctx = Gamespace.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
   }