function Skater() {
    this.canvas = document.getElementById('fondo');
    this.ctx = this.canvas.getContext('2d');
    this.x = 50;
    this.paddleHeight = 70;
    this.posY = 250;
    this.paddleX = 50;
    // this.upPressed = false;
    // this.downPressed = false;

}

Skater.prototype.drawPlayer = function () {
    var img = new Image();
    img.src = './images/pepe2.png';
    this.ctx.drawImage(img, this.x, this.posY,this.paddleX,this.paddleHeight);

    // this.ctx.beginPath();
    // this.ctx.rect(this.x, this.posY, this.paddleX, this.paddleHeight);
    // this.ctx.fillStyle = "#FF0000";
    // this.ctx.fill();
    // this.ctx.closePath();
    this.ctx.fillText(this.posY, 20, 100)

}

Skater.prototype.draw = function () {
    // this.ctx.clearRect(50, this.y,  50, this.paddleHeight);
    this.drawPlayer();


}

// Skater.prototype.bend = function () {
//     this.ctx.clearRect(50, this.y, 50, 50);
//     this.ctx.fillRect(50, this.y, 50, 25);
//     console.log("bend")


// }
