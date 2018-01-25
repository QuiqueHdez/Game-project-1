function Bonus() {
    this.maxPosY = 200;
    this.minPosY = 150;
    this.vx = 10;
    this.posX = 3300;
    

}
Bonus.prototype.randomY = function () {
    this.posY = Math.round(Math.random() * (this.maxPosY - this.minPosY) + this.minPosY);  

}
Bonus.prototype.bonusUp = function (skater,cn) {
    if (skater.x + skater.paddleX > this.posX && skater.x + skater.paddleX < this.posX + 55 && skater.posY < this.posY && skater.posY + skater.paddleHeight > this.posY + 25) {
        this.posX = -50;
        cn.counterCoin -= 2;
        console.log("pastillas")
    }
}
Bonus.prototype.update = function (ctx) {
    this.posX -= this.vx;
    var ibu = new Image();
    ibu.src = "./images/ibu3.png"
    ctx.drawImage(ibu,this.posX,this.posY,55,25)
    
 
}
Bonus.prototype.refill = function () {
    if (this.posX < 0) {
        this.randomY();
        this.posX = 3300;
    }
}