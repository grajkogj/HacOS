function startMenu() {
    var startButton = document.getElementById("startButton");
    var startMenu = document.getElementById("startMenu");
    if(startMenu.hidden == true) {
        startMenu.hidden = false;
        startButton.style.backgroundImage = "url('startC.png')";
    } else {
        startMenu.hidden = true;
        startButton.style.backgroundImage = "url('startP.png')";
    };
};