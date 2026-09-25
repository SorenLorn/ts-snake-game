// 游戏控制器，整合所有类，驱动游戏主循环
import {Food} from './Food';
import {Snake} from './Snake';
import {ScorePanel} from './ScorePanel';
import {DirectionControl} from './DirectionControl';

class GameControl{
    food: Food;
    snake: Snake;
    scorePanel: ScorePanel;
    directionControl: DirectionControl;
    // 游戏定时器标识
    timer: number | null = null;
    // 游戏是否正在运行
    isRunning: boolean = false;

    constructor() {
        this.food = new Food();
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.directionControl = new DirectionControl();
        this.init();
    }

    // 初始化游戏
    init(){
        // 绑定键盘事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.startGame();
    }

    // 键盘按下回调
    keydownHandler(event: KeyboardEvent){
        this.directionControl.changeDirection(event.key);
    }

    // 游戏主循环
    startGame(){
        if(this.isRunning) return;
        this.isRunning = true;
        this.timer = window.setInterval(()=>{
            try{
                // 获取移动方向
                const dir = this.directionControl.direction;
                this.snake.move(dir);

                // 判断蛇是否吃到食物
                if(this.snake.X === this.food.X && this.snake.Y === this.food.Y){
                    // 食物刷新位置
                    this.food.changePosition();
                    // 蛇身体变长
                    this.snake.addBody();
                    // 加分
                    this.scorePanel.addScore();
                }
            }catch(err){
                // 游戏结束
                alert((err as Error).message);
                clearInterval(this.timer!);
                this.isRunning = false;
            }
        }, 300)
    }
}

// 启动游戏
new GameControl();
