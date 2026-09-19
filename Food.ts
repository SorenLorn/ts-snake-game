// Food类：控制食物
class Food {
    // 食物元素
    element: HTMLElement;
    constructor() {
        // 获取页面中的food元素
        this.element = document.getElementById('food')!;
    }

    // 获取食物X坐标
    get X() {
        return this.element.offsetLeft;
    }
    // 获取食物Y坐标
    get Y() {
        return this.element.offsetTop;
    }

    // 修改食物位置
    change() {
        // 生成随机位置，一次移动10px，范围0~290
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

export default Food;
