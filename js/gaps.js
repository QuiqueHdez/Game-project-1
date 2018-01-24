function Gaps() {
    this.maxWidth = 3300;
    this.minWidth = 1300;
    this.vx = 4;
    this.x = 1300;
    this.y = 320;
    this.sizeX = 75;
    this.sizeY = 80;

}
// Gaps.prototype.randomX = function () {

//     this.posX = Math.floor(Math.random() * (this.maxWidth - this.minWidth) + this.minWidth)


// }
// Gaps.prototype.objGaps = function () {
//     this.objSaltos = {
//         x: this.posX,
//         y: this.y,
//     }


Gaps.prototype.drawGaps = function (ctx) {
    this.x -= this.vx;
    ctx.clearRect(1300, 320, 75, 75);
    ctx.fillStyle = "#FFF"
    ctx.fillRect(this.x, this.y, 75, 80)

    ctx.save(),
    ctx.beginPath()
    ctx.fillStyle = '#fff';
    ctx.font = "18px Arial"
    ctx.fillText("x.obstaculo:" + this.x, 20, 20);
    ctx.fillText("y.obstaculo:" + this.y, 20, 40);
    ctx.closePath();
    ctx.restore();
   

}
Gaps.prototype.update = function () {
         
    
    
    if (this.x + this.sizeX - 25 < 0) {
        this.x = 1300;
        

    }
}
Gaps.prototype.collision = function (skater, ctx) {
    if (skater.x + 10 >= this.x && skater.posY + 70 >= this.y) {
        ctx.save(),
        ctx.font = '30px Arial';
        ctx.fillStyle = 'red';
        ctx.fillText('FELL', 40, 200, 700);
        ctx.restore();
  
    }
};