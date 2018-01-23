function Gaps() {
    this.canvas = document.getElementById('fondo');
    this.gaps = this.canvas.getContext('2d');
    // this.gaps.fillStyle = "#FFFFFF";
    this.vx = 4;
    this.x = 1300;
    this.y = 320;
}
Gaps.prototype.drawGaps = function () {
    this.x -= this.vx;
   // this.gaps.clearRect(1300, 300, 75, 75);
    this.gaps.fillRect(this.x,  this.y, 75, 80)

}