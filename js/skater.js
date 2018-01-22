function Skater() {
    this.canvas = document.getElementById('fondo');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = "#0000FF";
    this.y = 270;
    this.vy = 0;
    this.userPull = 0;


}
Skater.prototype.draw = function () {
    this.ctx.clearRect(50, this.y, 50, 50);
    this.ctx.fillRect(50, this.y, 50, 50);
    // document.onkeydown = function (e) {
    //     if (e.keyCode == 16) {
    //         this.ctx.clearRect(50, this.y, 50, 25);
    //         this.ctx.fillRect(50, this.y, 50, 25);
    //         console.log("bend")
    //     }
    // }


}
Skater.prototype.bend = function () {
    this.ctx.clearRect(50, this.y, 50, 50);
    this.ctx.fillRect(50, this.y, 50, 25);
    console.log("bend")


}

//

Skater.prototype.jump = function () {
    this.y -= 10;
    // for (i = this.y; i > 120; i += 10){
    //     this.y -= i;
    // }

     if (this.y < 150) {
         this.y += 10
     }
    console.log(this.y);

}
Skater.prototype.drop = function () {

    for (i = this.y; i <= 270; i += 10) {
        this.y += i;
        console.log("baja follao")
    }
    console.log("bajar")

    if (this.y > 270) {
        this.y = 270;
    }

    //jaaj
}





