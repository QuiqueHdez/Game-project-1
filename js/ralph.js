function Ralph() {
    this.sizeX = 50;
    this.sizeY = 75;
    this.posX = 1500;
    this.posY = 250;
    this.vx = 4;
    this.lives = 3;

}
Ralph.prototype.draw = function (ctx,) {
    this.posX -= this.vx;
    var ralph = new Image();
    ralph.src = "./images/ralph2.png";
    ctx.drawImage(ralph, this.posX, this.posY, this.sizeX, this.sizeY);
   // ctx.fillText(this.posX, 100, 100);
   // ctx.fillText(this.posY, 100, 160);
    
    
    ctx.save();
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Lives:" + this.lives, 360, 40);
    ctx.restore();




}
Ralph.prototype.refill = function () {
    
    if (this.posX + this.sizeX < 0) {
        this.posX = 1500;
  
    }
}
Ralph.prototype.collision = function(skater){
    if (this.posX < skater.x && this.posY < skater.posY) {
        this.lives -= 1;
        this.posX = -50;
        console.log("ralph")
    }

}
