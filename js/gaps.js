function Gaps() {

    // this.gaps.fillStyle = "#FFFFFF";
    this.vx = 4;
    this.x = 1300;
    this.y = 320;
    this.sizeX = 75;
    this.sizeY = 80;
}
Gaps.prototype.drawGaps = function (ctx) {
    this.x -= this.vx;
    ctx.clearRect(1300, 320, 75, 75);
    ctx.fillStyle = "#FFF"
    ctx.fillRect(this.x, this.y, 75, 80)

    ctx.save(),
    ctx.beginPath()    
    ctx.fillStyle = '#fff';    
    ctx.fillText(this.x, 10, 10);
    ctx.fillText(this.y, 10, 20);
    ctx.closePath();
    ctx.restore();
    

}
Gaps.prototype.update = function () {
    //this.x -= this.vx;
    if (this.x +this.sizeX-25< 0) {
        this.x = 1300;

    }
}
Gaps.prototype.collision = function (skater, ctx) {
    if (skater.x + 50 >= this.x && skater.posY + 50 >= this.y) {
        ctx.save(),
        ctx.font = '30px Arial';
        ctx.fillStyle = 'red';
        ctx.fillText('FELL', 70, 70, 700);
        ctx.restore();
       // alert("YOU FELL, LOOSER!!")
        //document.location.reload();
    }
};