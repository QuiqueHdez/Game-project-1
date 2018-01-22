window.onload = function () {
    var bg = new Back();
    bg.onload();
    bg.update();
    document.getElementById("start-button").onclick = function () {
        startGame();

    };

    var cn = new Coins();
    var gm = new Skater();
    function startGame() {
        alert("ACCEPT TO RESUME");

    }

    function update() {
        bg.update();
        gm.draw();
        cn.appearUpdate();
        document.onkeydown = function (e) {
            if (e.keyCode == 32) {
                propiedad = false;
                gm.jump();
            }

        }
        document.onkeyup = function (e) {
                if (e.keyCode == 32) {
                    propiedad = true;

                }
                if (propiedad) {
                    gm.drop();
                }
            }
        
        
        cn.refill();

    }


    setInterval(update, 20)

    // document.onkeydown = function (e) {
    //     if (e.keyCode == 32) {
    //       gm.jump();
    //     }
    // }



    function draw() {
        gm.draw();
    }



}
