function Skater() {
    this.canvas = document.getElementById('fondo');
    this.ctx = this.canvas.getContext('2d');
    this.x = 30;
    this.paddleHeight = 70;
    this.posY = 250;
    this.paddleX = 50;
    this.puntos = 0;

    
}

Skater.prototype.drawPlayer = function () {
    var img = new Image();
    img.src = './images/pepe2.png';
    this.ctx.drawImage(img, this.x, this.posY,this.paddleX,this.paddleHeight);
    //this.ctx.fillText(this.posY, 20, 100)

}

Skater.prototype.draw = function () {
    
    this.drawPlayer();


}
Skater.prototype.score = function (ctx) {
    ctx.save();
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";

    ctx.fillText("Score:" + parseInt(this.puntos), 20, 40);
    ctx.restore();
    if (this.posY >= 250) {
        this.puntos += 0.1;
       
    }
}
// Skater.prototype.bend = function () {
//     this.ctx.clearRect(50, this.y, 50, 50);
//     this.ctx.fillRect(50, this.y, 50, 25);
//     console.log("bend")


// }
