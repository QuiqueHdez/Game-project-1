function Coins() {
    this.vx = 4;
    this.posX = 800;
    this.posX2 = 950;
    this.posX3 = 1100;
    this.posY = 255;
    this.random = 0;
    this.counterCoin = 0;

}

Coins.prototype.appearUpdate = function (ctx) {
    
    this.posX -= this.vx;
    this.posX2 -= this.vx;
    this.posX3 -= this.vx;

    ctx.clearRect(800, 245, 25, 25);
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.posX, this.posY, 25, 25);
    ctx.fillRect(this.posX2, this.posY, 25, 25);
    ctx.fillRect(this.posX3, this.posY, 25, 25);
    ctx.fillText("coin.x2:" + this.posX2, 400, 20)
    ctx.fillText("coin.y2:"+this.posY,400,30)
    ctx.fillText(this.counterCoin, 680, 40)
}

Coins.prototype.refill = function () {
    if (this.posX3 < -80) {
        this.posY -= this.random;
        if (this.posY < 180) {

            this.posY = 255;
        }
        this.posX = 800;
        this.posX2 = 950;
        this.posX3 = 1100;
        this.random = Math.random() * 50 + 20;


    }
}
Coins.prototype.achieve = function (skater, ctx) {
    if (skater.x + skater.paddleX >= this.posX && skater.posY <= this.posY) {
        this.counterCoin+=1;
        this.posX = -50;
        ctx.save();
        ctx.beginPath()
        ctx.fillStyle = '#FFFF00';
        ctx.font = "50px Arial"
        ctx.closePath();
        ctx.restore();
    }
    else if (skater.x + skater.paddleX >= this.posX2 && skater.posY <= this.posY) {
        this.posX2 = -50;
        console.log('ADIOOOOOOS');
    }



}
        // Coins.prototype.generateCoins=function(){
        //      var more=[];
        //      more.push(this.first,this.second);


        //  }