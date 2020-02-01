//---------- global ----------

let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

//---------- objects ----------

var Colors = {
    red:"#e74c3c",
    pink:"#F48FB1",
    purple:"#9b59b6",
    blue:"#3498db",
    green:"#2ecc71",
    yellow:"#f1c40f",
    orange:"#f39c12"
}

class Game {

    
}

class Player {
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }

    color = Colors.red;
    size = 100;

    //----- member functions -----

    stage(positionX, positionY) {
        fill(this.color);
        noStroke();
        ellipse(positionX, positionY, this.size, this.size); 
    }
}

//---------- init ----------

var Trent = new Player(Colors.green, 200);
var Preston = new Player(Colors.blue, 100);

//---------- update ----------

function setup() {
    rectMode(CENTER);
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    Trent.stage(screenWidth / 2, screenHeight / 2);
    Preston.stage(screenWidth / 3, screenHeight / 3);
}

