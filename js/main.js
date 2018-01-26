window.onload = function () {
    var debug = true;
    var bg = new Back();
    bg.onload();
    bg.update();
    var audio = new Audio("./images/Guile Theme.mp3");
    audio.play();
    audio.volume = 0.1    ;
    document.getElementById("start-button").onclick = function () {
        pauseGame();
        
    };
    audiobug = true;

    // function mute() {
    //     if (audiobug) {
    //         audio.muted = true; audio.muted = true;
    //     } else {
    //         audio.muted = false;
    //     }
    // }

    var cn = new Coins();
    var sk = new Skater();
    var gp = new Gaps();
    var ib = new Bonus();
    var ra = new Ralph();


    document.addEventListener("keydown", restart, false)
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyUpHandler(e) {
        //funcion bajar
        if (e.keyCode == 32 || sk.paddleY <= 150) {
            debug = true;
            sk.downPressed = false;
            sk.upPressed = true;

        }
    }
    function keyDownHandler(e) {//funcion subir
        if (e.keyCode == 32 && sk.posY >= 250 && debug) {
            //la segunda condicion hace que no pueda hacer doble salto
            sk.downPressed = true;
            sk.upPressed = false;



        }
    }
    function pauseGame() {
        
        alert("ACCEPT TO RESUME");

    }
    
    function update() {
        if (sk.downPressed && sk.posY >= 130 && debug) {

            //la segunda condicion hace que no suba hasta  
            // el infinito y se queda en 150;

            sk.posY -= 10;
            //lo que hace que suba el skater


        }


        else if (sk.upPressed && sk.posY < 250) {
            sk.posY += 5;

        }
        else if (sk.posY <= 130) {
            debug = false;
            sk.downPressed = false,
             sk.upPressed = true;    
                
                

        }


        bg.update();
        sk.draw();
        sk.score(bg.ctx);
        gp.drawGaps(bg.ctx);
        gp.update();
        gp.collision(sk, bg.ctx);
        cn.appearUpdate(bg.ctx);
        cn.achieveDetection(sk);
        cn.refill();
        ib.update(bg.ctx);
        ib.bonusUp(sk, cn);
        ib.refill();
        ra.draw(bg.ctx);
        ra.refill();
        ra.collision(sk);
        gameOver(bg.ctx, bg, gp, ib, ra, cn, sk);



    }

    setInterval(update, 1000 / 60);

    function gameOver(ctx, bg, gp, ib, ra, cn, sk) {
        if (ra.lives == 0 || gp.caida || cn.drunk) {
            ctx.font = "60px Arial"
            ctx.fillStyle = "black";
            ctx.fillText("GAMEOVER!!", 220, 140)
            ctx.fillText("Press enter to restart", 130, 200)

            clearInterval(update);
            bg.step = gp.vx = ra.vx = cn.vx = ib.vx = 0;
            sk.posY = -100;
            

            var fall = new Image();
            fall.src = "./images/falling-pepe.png";
            ctx.drawImage(fall, 30, 250, 110, 70);
            //var vid = document.getElementById("audio");
            audio.muted = true;

        }
    }

    function restart(e) {
        if (e.keyCode == 13) {
            document.location.reload();
        }
    }
}

