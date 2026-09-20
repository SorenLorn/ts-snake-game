// Snake.ts
class Snake {
    // 蛇容器
    element: HTMLElement;
    // 蛇头
    head: HTMLElement;
    // 蛇身体（包含蛇头）
    bodies: HTMLCollection;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')! as HTMLElement;
        this.bodies = this.element.children;
    }

    // 获取蛇头X坐标
    get X() {
        return this.head.offsetLeft;
    }

    // 获取蛇头Y坐标
    get Y() {
        return this.head.offsetTop;
    }

    // 设置蛇头X坐标
    set X(value: number) {
        if (this.X === value) return;
        // 撞墙判断
        if (value < 0 || value > 290) {
            throw new Error('游戏结束，撞墙！');
        }
        // 防止蛇掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }

    // 设置蛇头Y坐标
    set Y(value: number) {
        if (this.Y === value) return;
        if (value < 0 || value > 290) {
            throw new Error('游戏结束，撞墙！');
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }

    // 增加身体
    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>');
    }

    // 身体移动
    moveBody() {
        for(let i = this.bodies.length - 1; i > 0; i--) {
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    // 判断是否撞到自己
    checkHeadBody() {
        for(let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己，游戏结束！');
            }
        }
    }
}
