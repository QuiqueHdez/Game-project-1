function Gaps() {
    this.maxWidth = 3300;
    this.minWidth = 1300;
    this.vx = 4;
    this.x = 1300;
    this.y = 320;
    this.sizeX = 75;
    this.sizeY = 80;
    this.caida = false;

    
}


Gaps.prototype.drawGaps = function (ctx) {
    this.x -= this.vx;
    ctx.clearRect(1300, 320, 75, 75);
    ctx.fillStyle = "#FFF"
    
    var barril = new Image();
    barril.src = "./images/barril.png"
    ctx.drawImage(barril, this.x, this.y, this.sizeX, this.sizeY);
    
    
   
   

}
Gaps.prototype.update = function () {

    if (this.x + this.sizeX - 25 < 0) {
        this.x = 1300;


    }
}


Gaps.prototype.collision = function (skater, ctx) {
   
    if (skater.x + 10 >= this.x && skater.posY + 70 >= this.y) {
        this.caida = true;

       
    }
};
