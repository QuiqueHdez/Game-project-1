function Coins() {
    this.canvas = document.getElementById('fondo');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = "#00FF00";
    this.vx = 4;
    this.posX = 800;
    this.posX2 = 950;
    this.posX3 = 1100;
    this.posY = 255;
    this.random = 0;

}


// Coins.prototype.generateCoins=function(){
//      var more=[];
//      more.push(this.first,this.second);


//  }
Coins.prototype.refill = function () {



    if (this.posX3 < -80) {
        this.posY -= this.random;
        if (this.posY < 180) {
            
            this.posY=255;
        }
        this.posX = 800;
        this.posX2 = 950;
        this.posX3 = 1100;
        this.random = Math.random() * 50 +20;


        this.appearUpdate()
        //console.log("refill")
    }
}
Coins.prototype.appearUpdate = function () {




    this.posX -= this.vx;
    this.posX2 -= this.vx;
    this.posX3 -= this.vx;

    this.ctx.clearRect(800, 245, 25, 25);
    this.ctx.fillRect(this.posX,  this.posY, 25, 25);
    this.ctx.fillRect(this.posX2, this.posY, 25, 25);
    this.ctx.fillRect(this.posX3, this.posY, 25, 25);
    //console.log(this.posY);
}