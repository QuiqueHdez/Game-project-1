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
    Skater.prototype.bend=function() {
        this.ctx.clearRect(50, this.y, 50, 50);
        this.ctx.fillRect(50, this.y, 50, 25);
        console.log("bend")
    

    }

    //

    Skater.prototype.jump = function () {
        this.y -= 10;
        if (this.y < 120) {
            this.y += 10
        }
        console.log(this.y);

    }
    Skater.prototype.drop = function () {
        this.y += 3;
       console.log("bajar")

        if (this.y > 270) {
            this.y = 270;
        }


    }


   



// Skater.prototype.update= function(){
//     this.vy += (window.gravity - this.userPull);
//     this.y += this.vy;
//     if(this.vy+this.y<270){
//         this.y=270
//     }


// }


//  window.requestAnimationFrame(Skater.prototype.updateCanvas);





    //     this.gamer = new Image();
//     this.gamer.src = 'images/pepe.jpg';

// }
// Skater.prototype.deload = function () {
//     this.ctx.drawImage(350, 50, 50);

