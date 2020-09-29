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

var closeButton = document.getElementById("closeWindow");
var windowP = document.getElementById("windowP");
var page = document.getElementById("pageFrame");

function start(app) {
    
    var title = document.getElementById("windowTitle");
    document.getElementById("windowP").className = "window";
    title.innerHTML = app;
    document.getElementById("pageFrame").src = app + ".html"
};


function endProcess() {
    document.getElementById("windowP").className = "hidden";
};


function startSearch() {
    console.log("started app: 'Search'")
};
