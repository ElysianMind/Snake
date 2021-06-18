module.exports = class GameArea{
  constructor(Id, width, height, color, columns, rows) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.colNum = columns;
    this.rowNum = rows;
    this.canvasId = Id;
  }
  canvas() {
    var canvas = document.getElementById( this.canvasId);
    if (canvas == void 0) { // void 0 == null == undefined
      canvas = document.createElement('canvas');
      canvas.id =  this.canvasId;
    }
    return canvas;
  }
  start() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style['background-color'] = this.color;
    this.columns = this.canvas.width / this.colNum;
    this.rows = this.canvas.height / this.rowNum;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    oldTimeStamp = Date.now();
    requestAnimationFrame(updateGameArea);
  }
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
