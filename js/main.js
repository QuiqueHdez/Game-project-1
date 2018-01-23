window.onload = function () {
    var bg = new Back();
    bg.onload();
    bg.update();
    document.getElementById("start-button").onclick = function () {
        pauseGame();

    };

    var cn = new Coins();
    var sk = new Skater();
    var gp = new Gaps();
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyUpHandler(e) {//funcion bajar
        if (e.keyCode == 32 || sk.paddleY <= 175) {
            sk.downPressed = false;
            sk.upPressed = true;
            console.log("baja")

        }
    }
    function keyDownHandler(e) {//funcion subir
        if (e.keyCode == 32 && sk.paddleY >= 270) {
            //la segunda condicion hace que no pueda hacer doble salto
            sk.downPressed = true;
            sk.upPressed = false;



        }
    }
    function pauseGame() {
        alert("ACCEPT TO RESUME");

    }
    function update() {
        bg.update();
        sk.draw();
        cn.appearUpdate();
        gp.drawGaps();

        if (sk.downPressed && sk.paddleY >= 150) {
            //la segunda condicion hace que no suba hasta  
            // el infinito y se queda en 170;

            sk.paddleY -= 9;

            console.log("subir")

        }

        else if (sk.upPressed && sk.paddleY < 270) {
            sk.paddleY += 5;
            console.log(sk.paddleY)
        }

        cn.refill();
    }

    setInterval(update, 1000/60);





}
