// 控制类，监听键盘方向按键，管理蛇移动方向
class Control {
    // 存储当前方向
    dir: string;
    constructor() {
        this.dir = "Right";
        this.bindKeyEvent();
    }

    // 绑定键盘监听
    bindKeyEvent() {
        document.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "ArrowUp":
                    if(this.dir !== "Down") this.dir = "Up";
                    break;
                case "ArrowDown":
                    if(this.dir !== "Up") this.dir = "Down";
                    break;
                case "ArrowLeft":
                    if(this.dir !== "Right") this.dir = "Left";
                    break;
                case "ArrowRight":
                    if(this.dir !== "Left") this.dir = "Right";
                    break;
            }
        })
    }
}

export default Control;
