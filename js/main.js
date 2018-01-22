window.onload = function () {
    var bg = new Back();
    bg.onload();
    bg.update();
    document.getElementById("start-button").onclick = function () {
        startGame();

    };

    var cn = new Coins();
    var gm = new Skater();
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
        if (e.keyCode == 32) {
            gm.downPressed = true;
            console.log("subir")
        }
    }

    function keyUpHandler(e) {
        if (e.keyCode == 32) {
            gm.upPressed = true;

        }


    }
    function startGame() {
        alert("ACCEPT TO RESUME");

    }

    function update() {
        bg.update();
        gm.draw();
        cn.appearUpdate();

        if (gm.downPressed && gm.paddleY > 170 ) {
            gm.paddleY -= 7;
            console.log("subir")
        }

        else if (gm.upPressed && gm.paddleY < 270) {
            gm.paddleY +=7;
        }
        // else {
        //     gm.paddleY += 4;
        // }

        // document.onkeydown = function (e) {
        //     if (e.keyCode == 32) {
        //         propiedad = false;
        //         gm.jump();
        //     }

        // }
        // document.onkeyup = function (e) {
        //         if (e.keyCode == 32) {
        //             propiedad = true;

        //         }
        //         if (propiedad) {
        //             gm.drop();
        //         }
        //     }
        cn.refill();
    }

    setInterval(update, 20);

    



}





    // document.onkeydown = function (e) {
    //     if (e.keyCode == 32) {
    //       gm.jump();
    //     }
    // }


