import {Food} from "./Food";
import {Snake} from "./Snake";
import {ScorePanel} from "./ScorePanel";
import {GameControl} from "./GameControl";

// 获取DOM
const gameDom = document.getElementById("game")!;

// 实例化所有模块
const food = new Food(gameDom);
const snake = new Snake(gameDom);
const scorePanel = new ScorePanel();
const gameControl = new GameControl(snake, food, scorePanel);

// 启动游戏
gameControl.start();
