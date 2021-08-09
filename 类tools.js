// 定义一个函数向一个元素添加指定的class属性值
// obj 要添加的class属性的元素
// cn 要添加的class值
function addClass(obj, cn) {
    if (!haveClass(obj, cn)) {
        obj.className += " " + cn;
    }
};

// 删除一个元素总指定的class属性值
function removeClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    obj.className = obj.className.replace(reg, "");
};

// 判断一个元素中是否含有指定的class属性值
// 有--返回true，没有--返回false
function haveClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b"); // 正则表达式构造函数
    return reg.test(obj.className);
};

// 切换一个类，如果元素中有该类，则删除，没有则添加
function toggleClass(obj, cn) {
    if (haveClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    }
};