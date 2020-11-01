var hero = {
    left: 575,
    top: 700
};

var missiles = [];

var enemies = [
{ left: 100, top: -80 },
{ left: 370, top: -70 },
{ left: 420, top: -80 },
{ left: 630, top: -90 },
{ left: 990, top: -80 },
   { left: 130, top: -20 },
   { left: 930, top: -20 },
   { left: 630, top: -20 },
   { left: 830, top: 1 },

    { left: 250, top: 5 },
    { left: 370, top: 5 },
    { left: 870, top: 5 },
    { left: 550, top: 5 },
    { left: 100, top: 25 },

    { left: 300, top: 25 },

    { left: 500, top: 25 },
    { left: 600, top: 25 },

    { left: 800, top: 25 },
    { left: 900, top: 25 },
    { left: 1000, top: 25 },
    { left: 150, top: 100 },
    { left: 250, top: 60 },
    { left: 350, top: 100 },

    { left: 550, top: 70 },
    { left: 650, top: 100 },
    { left: 750, top: 100 },

    { left: 950, top: 90 },

    { left: 75, top: 175 },
    { left: 175, top: 175 },
    { left: 275, top: 175 },

    { left: 475, top: 195 },
    { left: 575, top: 175 },

    { left: 775, top: 165 },
    { left: 875, top: 175 },

    { left: 1075, top: 175 },

    { left: 225, top: 250 },
    { left: 335, top: 250 },

    { left: 565, top: 290 },
    { left: 625, top: 250 },

    { left: 805, top: 270 },
    { left: 925, top: 250 }
];

function setup() {
    createCanvas(windowWidth, windowHeight);
}


document.onkeydown = function(e) {
    if (e.keyCode === 37) {
        // Left
        hero.left = hero.left - 10;
    }
    if (e.keyCode === 39) {
        // Right
        hero.left = hero.left + 10;
    }
    if (e.keyCode === 32) {
        // Spacebar (fire)
        missiles.push({
            left: hero.left + 25,
            top: hero.top - 25
        });
        drawMissiles()
    }
    drawHero();
}


function drawHero() {
    document.getElementById('hero').style.left = hero.left + 'px';
    document.getElementById('hero').style.top = hero.top + 'px';
}

function drawMissiles() {
    document.getElementById('missiles').innerHTML = ""
    for(var i = 0 ; i < missiles.length ; i++ ) {
        document.getElementById('missiles').innerHTML += `<div class='missile1' style='left:${missiles[i].left}px; top:${missiles[i].top}px'></div>`;
    }
}

function moveMissiles() {
    for(var i = 0 ; i < missiles.length ; i++ ) {
        missiles[i].top = missiles[i].top - 20
    }
}

function drawEnemies() {
    document.getElementById('enemies').innerHTML = ""
    for(var i = 0 ; i < enemies.length ; i++ ) {
        document.getElementById('enemies').innerHTML += `<div class='enemy' style='left:${enemies[i].left}px; top:${enemies[i].top}px'></div>`;
    }
}

function moveEnemies() {
    for(var i = 0 ; i < enemies.length ; i++ ) {
        enemies[i].top = enemies[i].top + 8;
    }
}

function collisionDetection() {
    for (var enemy = 1; enemy < enemies.length; enemy++) {
        for (var missile = 0; missile < missiles.length; missile++) {
            if (
                missiles[missile].left >= enemies[enemy].left  &&
                missiles[missile].left <= (enemies[enemy].left + 50)  &&
                missiles[missile].top <= (enemies[enemy].top + 50)  &&
                missiles[missile].top >= enemies[enemy].top
            ) {
                enemies.splice(enemy, 2);
                missiles.splice(missile, 1);
            }
        }
    }
}

function gameLoop() {
    setTimeout(gameLoop, 800)
    moveMissiles();
    drawMissiles();
    moveEnemies();
    drawEnemies();
    collisionDetection();
}

gameLoop()
