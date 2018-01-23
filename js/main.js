window.onload = function () {
    var bg = new Back();
    bg.onload();
    bg.update();
    document.getElementById("start-button").onclick = function () {
        startGame();

    };

    var cn = new Coins();
    var sk = new Skater();
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyUpHandler(e) {
        if (e.keyCode == 32 || sk.paddleY <= 175) {
            sk.upPressed = true;
            sk.downPressed = false;
            console.log("baja")

        }
    }
    function keyDownHandler(e) {
        if (e.keyCode == 32 && sk.paddleY >= 270) {
            //la segunda condicion hace que no pueda hacer doble salto
            sk.downPressed = true;
            sk.upPressed = false;



        }
    }
    function startGame() {
        alert("ACCEPT TO RESUME");

    }
    function update() {
        bg.update();
        sk.draw();
        cn.appearUpdate();

        if (sk.downPressed && sk.paddleY >= 170) {
            //la segunda condicion hace que no suba hasta  
            // el infinito y se quede en 170;

            sk.paddleY -= 7;

            console.log("subir")

        }

        else if (sk.upPressed && sk.paddleY < 270) {
            sk.paddleY += 5;
            console.log(sk.paddleY)
        }
   
        cn.refill();
    }

    setInterval(update, 20);





}
