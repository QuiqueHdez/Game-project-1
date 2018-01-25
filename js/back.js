function Back() {

    this.canvas = document.getElementById('fondo');
    this.ctx = this.canvas.getContext('2d');

    this.fondo = new Image();
    this.fondo.src = 'images/fondo-final-2.jpg';
    this.step = 4;
}

Back.prototype.onload = function () {
    this.ctx.drawImage(this.fondo, 0, 0);
    this.x = 0;
    this.width = fondo.width;
    this.min = 0 - this.width;

}

Back.prototype.update = function () {
    this.ctx.drawImage(this.fondo, this.x, 0);
    this.ctx.drawImage(this.fondo, this.x + this.width, 0);

    this.x -= this.step;
    if (this.x < this.min) {
        this.x = 0;

    }

};
