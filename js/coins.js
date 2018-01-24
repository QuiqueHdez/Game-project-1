function Coins() {
    this.maxPosY = 275;
    this.minPosY = 150;
    this.vx = 4;
    this.posX = 800;
    this.posX2 = 950;
    this.posX3 = 1100;
    this.counterCoin = 0;
    this.coinColumn = 3;



}
Coins.prototype.randomY = function () {
    this.posY1 = Math.round(Math.random() * (this.maxPosY - 150) + 150);
    this.posY2 = Math.round(Math.random() * (this.maxPosY - 150) + 150);
    this.posY3 = Math.round(Math.random() * (this.maxPosY - 150) + 150);

}
Coins.prototype.arrayCoins = function () {
    this.arr = [
        {
            x: this.posX,
            y: this.posY1,

        }, {
            x: this.posX2,
            y: this.posY2,

        }, {
            x: this.posX3,
            y: this.posY3,
        }
    ]
}
Coins.prototype.achieveDetection = function (skater) {


    if (skater.x + skater.paddleX > this.arr[0].x && skater.x + skater.paddleX < this.arr[0].x + 25 && skater.posY < this.arr[0].y && skater.posY + skater.paddleHeight > this.arr[0].y + 25) {
        this.posX = -50;
        this.counterCoin += 1;
        

    } else if (skater.x + skater.paddleX > this.arr[1].x && skater.x + skater.paddleX < this.arr[1].x + 25 && skater.posY < this.arr[1].y && skater.posY + skater.paddleHeight > this.arr[1].y + 25) {
        this.posX2 = -50;
        this.counterCoin += 1;
        
    }
    else if (skater.x + skater.paddleX > this.arr[2].x && skater.x + skater.paddleX < this.arr[2].x + 25 && skater.posY < this.arr[2].y && skater.posY + skater.paddleHeight > this.arr[2].y + 25) {
        this.posX3 = -50;
        this.counterCoin += 1;
        
    }
    else if (this.counterCoin >= 10) {
        alert ("DRUNK")
    }

}


Coins.prototype.appearUpdate = function (ctx) {
    this.arrayCoins();
    this.posX -= this.vx;
    this.posX2 -= this.vx;
    this.posX3 -= this.vx;
    var beer = new Image();
    beer.src = "./images/beer.png";
    ctx.drawImage(beer, this.posX, this.posY1, 25, 25);
    ctx.drawImage(beer, this.posX2, this.posY2, 25, 25);
    ctx.drawImage(beer, this.posX3, this.posY3, 25, 25);
    ctx.clearRect(800, 245, 25, 25);
    ctx.save();
    ctx.fillStyle = "black";
    ctx.font="20px Arial"
    ctx.fillText("Beer(s): "+this.counterCoin, 680, 40)
    ctx.restore();
    // ctx.fillText("coin.x3:" + this.posX3, 400, 20)
    // ctx.fillText("coin.y3:" + this.posY3, 400, 30)
    // ctx.fillText("coin.y2:" + this.posY2, 400, 50)

}

Coins.prototype.refill = function () {
    if (this.posX3 < -80) {
        this.randomY();

        this.posX = 800;
         this.posX2 = 950;
         this.posX3 = 1100;



    }
}
