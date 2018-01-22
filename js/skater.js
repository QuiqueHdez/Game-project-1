function Skater() {
    this.canvas = document.getElementById('fondo');
    this.ctx = this.canvas.getContext('2d');
    this.y = 270;
    this.paddleHeight = 50;
    this.paddleY = 270
    this.upPressed = false;
    this.downPressed = false;

    //(this.canvas.height - this.paddleHeight) / 2



    //this.height = this.canvas.height - 20;

   

}

// Skater.prototype.keyDownHandler = function (e) {
//     if (e.keyCode == 32) {
//         this.upPressed = true;
//     }
// }
// Skater.prototype.keyUpHandler = function (e) {
//     if (e.keyCode == 32) {
//         this.downPressed = true;

//     }



// }



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

//

Skater.prototype.jump = function () {



    // if (this.paddleY < this.canvas.height - this.paddleHeight) {
    //     this.paddleY -= 7;


    // }

    // this.y-=this.vy

    // if (this.y < 150) {
    //     console.log("tope");
    //     this.drop();
    // }
    // console.log(this.y);

}
Skater.prototype.drop = function () {

    for (i = this.paddleY; i <= 270; i += 10) {
        this.paddleY += i;
        console.log("baja follao")
    }
    console.log("bajar")

    if (this.paddleY > 270) {
        this.paddleY = 270;
    }

    //jaaj
}





