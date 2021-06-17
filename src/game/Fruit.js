   const component = require('./Component')

   class fruit extends Component {
     constructor(color) {
       super();
       this.color = color;
     }
     Update() 
     {
        var ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
   }

module.exports = fruit
