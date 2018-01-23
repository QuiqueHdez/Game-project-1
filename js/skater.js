function Skater() {
    this.canvas = document.getElementById('fondo');
    this.ctx = this.canvas.getContext('2d');
    this.y = 270;
    this.paddleHeight = 50;
    this.paddleY = 270
    this.upPressed = false;
    this.downPressed = false;

}

Skater.prototype.drawPlayer = function () {
    this.ctx.beginPath();
    this.ctx.rect(50, this.paddleY, 50, this.paddleHeight);
    this.ctx.fillStyle = "#FF0000";
    this.ctx.fill();
    this.ctx.closePath();

}

Skater.prototype.draw = function () {
    // this.ctx.clearRect(50, this.y,  50, this.paddleHeight);
    this.drawPlayer();

     
}

Skater.prototype.bend = function () {
    this.ctx.clearRect(50, this.y, 50, 50);
    this.ctx.fillRect(50, this.y, 50, 25);
    console.log("bend")


}
