function load_images() {
    
    // Enemy (Virus) Image
    enemy_image = new Image;
    enemy_image.src = "Assets/v1.png";
    
    // Player Image
    player_image = new Image;
    player_image.src = "Assets/superhero.png";
    
    // Gem Image
    gem_image = new Image;
    gem_image.src = "Assets/gemm.png";
    
}

function init() {
    // Define The Objects That We Will Have In The Game
    canvas = document.getElementById("mycanvas");
    W = 700;
    H = 400;
    canvas.width = W;
    canvas.height = H;
    
    // Create A Context Object
    pen = canvas.getContext('2d');
    
    game_over = false;
    
    e1 = {
        x: 150,
        y: 50,
        w: 60,
        h: 60,
        speed: 20
    }
    
    e2 = {
        x: 300,
        y: 150,
        w: 60,
        h: 60,
        speed: 30
    }
    
    e3 = {
        x: 450,
        y: 20,
        w: 60,
        h: 60,
        speed: 40
    }
    
    enemy = [e1, e2, e3];
    
    player = {
        x: 20,
        y: H/2,
        w: 60,
        h: 60,
        speed: 20,
        moving: false,
        health: 100
    }
    
    gem = {
        x: W-100,
        y: H/2,
        w: 60,
        h: 60
    }
    
    // Listen To Events On The Canvas
    
    // On Mousedown Move The Player
    canvas.addEventListener('mousedown', function() {
       player.moving = true; 
    });
    
    // On Mouse Release Stop The Player
    canvas.addEventListener('mouseup', function() {
       player.moving = false; 
    });
}

function isOverlap(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.w &&
   rect1.x + rect1.w > rect2.x &&
   rect1.y < rect2.y + rect2.h &&
   rect1.y + rect1.h > rect2.y) {
    return true;
    }
    return false;
}

function draw() {
    
    // Clear The Canvas Area For The Old Frame
    pen.clearRect(0,0,W,H);
    
    // Draw The Player
    pen.drawImage(player_image, player.x, player.y, player.w, player.h);
    
    // Draw The Gem
    pen.drawImage(gem_image, gem.x, gem.y, gem.w, gem.h);
    
    // Draw The Enemies
    for(let i=0; i<enemy.length; i++) {
        pen.drawImage(enemy_image, enemy[i].x, enemy[i].y, enemy[i].w, enemy[i].h);
    }
    
    // Display The Score (Player Health is Score)
    pen.fillStyle = "white";
    pen.fillText("Score: " + player.health, 10, 10);
}

function update() {
    
    // If The Player Is Moving, Increment X Value
    if(player.moving == true) {
        player.x += player.speed;
        player.health += 20;
    }
    
    // Overlap Between Player and Gem
    if(isOverlap(player, gem)){
        alert("You Won The Game !!");
        game_over = true;
        return;
    }
    
    // Overlap Between Player and Enemy
    for(let i=0; i<enemy.length; i++){
        if(isOverlap(enemy[i], player)){
            player.health -= 50;
            if(player.health < 0){
                game_over = true;
                alert("Game Over ! Your Health: " + player.health);
            }
        }
    }
    
    // Move The Box Downwards And Upwards
    // Update Each Enemy By Same Logic
    for(let i=0; i<enemy.length; i++) {
        enemy[i].y += enemy[i].speed;
        if(enemy[i].y > (H - enemy[i].h) || enemy[i].y < 0) {
            enemy[i].speed *= -1;
        }
    }
}

function gameloop() {
    if(game_over==true){
        clearInterval(f);
    }
    draw();
    update();
    console.log("In Gameloop");
}

load_images();
init();
var f = setInterval(gameloop, 100);