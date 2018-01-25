window.onload = function () {
    var bg = new Back();
    bg.onload();
    bg.update();
    //var audio =new Audio("guile-theme")
    document.getElementById("start-button").onclick = function () {
        pauseGame();

    };

    var cn = new Coins();
    var sk = new Skater();
    var gp = new Gaps();
    var ib = new Bonus();
    var ra = new Ralph();

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyUpHandler(e) {
        //funcion bajar
        if (e.keyCode == 32 || sk.paddleY <= 175) {
            sk.downPressed = false;
            sk.upPressed = true;
           
        }
    }
    function keyDownHandler(e) {//funcion subir
        if (e.keyCode == 32 && sk.posY >= 250) {
            //la segunda condicion hace que no pueda hacer doble salto
            sk.downPressed = true;
            sk.upPressed = false;



        }
    }
    function pauseGame() {
        alert("ACCEPT TO RESUME");

    }
    function update() {
        if (sk.downPressed && sk.posY >= 150) {

            //la segunda condicion hace que no suba hasta  
            // el infinito y se queda en 150;

            sk.posY -= 9;
           //lo que hace que suba el skater

            
        }

        else if (sk.upPressed && sk.posY < 250) {
            sk.posY += 5;
           
        }

        bg.update();
        sk.draw();
        sk.score(bg.ctx)
        gp.drawGaps(bg.ctx);
        gp.update();
        gp.collision(sk, bg.ctx);
        cn.appearUpdate(bg.ctx);
        cn.achieveDetection(sk);
        cn.refill();
        ib.update(bg.ctx);
        ib.bonusUp(sk,cn);
        ib.refill();
        ra.draw(bg.ctx);
        ra.refill();
        ra.collision(sk);
        
    }

    setInterval(update, 1000/60);

}



 