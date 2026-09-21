import {Food} from "./Food.js";
import {Snake} from "./Snake.js";

class Game{
    snake:Snake;
    food:Food;
    gameOver:boolean;

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.gameOver = false;
        this.init();
    }

    init(){
        // 绑定键盘方向事件
        document.addEventListener("keydown",this.keydownHandler.bind(this));
        // 启动游戏循环
        setInterval(this.run.bind(this),150);
    }

    // 键盘控制方向
    keydownHandler(event:KeyboardEvent){
        if(this.gameOver) return;
        switch(event.key){
            case "ArrowUp":
                this.snake.changeDir("up");
                break;
            case "ArrowDown":
                this.snake.changeDir("down");
                break;
            case "ArrowLeft":
                this.snake.changeDir("left");
                break;
            case "ArrowRight":
                this.snake.changeDir("right");
                break;
        }
    }

    run(){
        if(this.gameOver) return;
        this.snake.move();
        // 判断吃到食物
        if(this.snake.X === this.food.X && this.snake.Y === this.food.Y){
            this.food.changePos();
            this.snake.addBody();
        }
        // 撞墙/撞自身判定
        if(this.snake.checkHit()){
            this.gameOver = true;
            alert("游戏结束！");
        }
    }
}

new Game();
