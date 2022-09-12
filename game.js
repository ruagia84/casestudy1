let snake, food;
let score = 0;

function setup() {
   createCanvas(WIDTH, HEIGHT);
   newGame();
}

function draw() {
   background(0);
   if(!snake.isDead){      
      drawSnake();
   } else {      
      newGame()
   }
}

function drawSnake() {   
   if(frameCount % SNAKE_SPEED == 0)
   {
      snake.update();
   } 
   food.show();
   snake.show();   
   if(snake.head.x == food.x && snake.head.y == food.y){
      eatFood();
     
   }
}

function newGame() {
   snake = new Snake();
   food = new Food();  
}

function eatFood() {
   snake.length++;
   food.newFood();
   score = ++score;
   document.getElementById('score').innerHTML = "Score = "+ score;   
}

function keyPressed() {
   if (keyCode == UP_ARROW && snake.vel.y != 1) {
      snake.vel.y = -1;
      snake.vel.x = 0;
   } else if (keyCode == DOWN_ARROW && snake.vel.y != -1) {
      snake.vel.y = 1;
      snake.vel.x = 0;
   }  else if (keyCode == LEFT_ARROW && snake.vel.x != 1) {
      snake.vel.y = 0;
      snake.vel.x = -1;
   } else if (keyCode == RIGHT_ARROW && snake.vel.x != -1) {
      snake.vel.y = 0;
      snake.vel.x = 1;
   }
}

