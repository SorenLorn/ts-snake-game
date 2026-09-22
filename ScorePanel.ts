// 计分面板类，控制分数和等级展示
class ScorePanel {
    score = 0;
    level = 1;
    scoreElement: HTMLElement;
    levelElement: HTMLElement;

    // 升级阈值，每吃10分升一级
    private readonly upScore: number;

    constructor(upScore: number = 10) {
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
        this.upScore = upScore;
    }

    // 加分方法
    addScore() {
        this.score++;
        this.scoreElement.innerText = this.score.toString();
        // 判断升级
        if (this.score % this.upScore === 0) {
            this.addLevel();
        }
    }

    // 升级方法，最高限制等级10
    addLevel() {
        if (this.level < 10) {
            this.level++;
            this.levelElement.innerText = this.level.toString();
        }
    }
}

export default ScorePanel;
