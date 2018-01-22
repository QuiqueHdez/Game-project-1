function Coins() {
    this.canvas = document.getElementById('fondo');
    this.ctx = this.canvas.getContext('2d');
    // this.ctx.fillStyle = "#FFFF00";

    this.posX = 800;
    this.posX2 = 950;
    this.posX3 = 1100;

}
Coins.prototype.appearUpdate = function () {

    this.posX -= 4;
    this.posX2 -= 4;
    this.posX3 -= 4;
    this.ctx.clearRect(800, 245, 25, 25);
    this.first = this.ctx.fillRect(this.posX, 255, 25, 25);
    this.second = this.ctx.fillRect(this.posX2, 255, 25, 25);
    this.third = this.ctx.fillRect(this.posX3, 255, 25, 25)
}


// Coins.prototype.generateCoins=function(){
//      var more=[];
//      more.push(this.first,this.second);


//  }

