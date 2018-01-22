window.onload = function () {
    var bg = new Back();
    bg.onload();
    document.getElementById("start-button").onclick = function () {
        startGame();

    };

    var cn = new Coins();
    var gm = new Skater();
    function startGame() {
        bg.update();

    }

    function update() {
        bg.update();
        gm.draw();
        cn.appearUpdate();
        document.onkeydown = function (e) {
            if (e.keyCode == 32) {
                gm.jump();
            } else if (e.keyCode == 16) {
                gm.bend();
            }
        }
        gm.drop()
;


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
