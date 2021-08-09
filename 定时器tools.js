function getStyle(obj, name) {
    // 只写getComputedStyle,是变量，需要在作用域链中去寻找，没找到会报错
    // 加上window，getComputedStyle变成对象的属性，若无则返回undefined
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name];
    }
};

//var timmer;
// 创建执行简单动画的函数
function move(obj, attr, target, speed, callback) {
    // obj  要执行动画的对象
    // attr     执行动画的样式
    // target   执行动画的目标位置
    // speed    移动速度，正数右移，负数左移
    // callbanck    回调函数，执行完毕后执行
    clearInterval(obj.timmer);

    // 获取元素目前位置
    var currentValue = parseInt(getStyle(obj, attr));
    if (currentValue > target) {
        // 向左移，speed应为负值
        speed = -speed;
    }
    // 向执行动画的对象中添加一个timmer属性来保存它自己的定时器标识
    obj.timmer = setInterval(() => {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;
        //左移，newvalue < target   右移，newvalue > target
        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
            newValue = target;
        }
        obj.style[attr] = newValue + "px";
        if (newValue === target) {
            clearInterval(obj.timmer);

            // 动画执行完毕，调用回调函数
            // 参数包含回调函数才执行，没有则不执行
            callback && callback();
        }
    }, 30);

};