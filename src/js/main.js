// 封装添加事件监听程序
function addEvent(element, type, handler) {
    // 执行代码
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + type, handler);

    } else {
        element['on' + type] = handler;
    }
}
/**
 * 通过className 和其父节点获取对象
 * @param clasName
 * @param parent
 * @returns {Array}
 */
function getByClass(clasName,parent){
    var oparent=parent?document.getElementById(parent):document,
        eles=[],
        elements=oparent.getElementsByTagName('*');

    for(var i= 0;i<elements.length;i++){
        if(elements[i].className==clasName){
            eles.push(elements[i]);
        }
    }
    return eles;
}



window.onload = function () {
    var login_btn = document.getElementById('login'),
        login_box = document.getElementById('login_box'),
        close = document.getElementById('close');
    // 显示登录层函数
    function showLogin() {
        // 执行代码
        alert(1);
        login_box.setAttribute("style", "display:block");
    }

    // 隐藏登录层函数
    function hideLogin() {
        // 执行代码
        login_box.setAttribute("style", "display:none");
    }

    //点击登录按钮显示登录层
    // 执行代码
    addEvent(login_btn, 'click', showLogin);
    //点击关闭按钮隐藏登录层
    // 执行代码
    addEvent(close, 'click', hideLogin);

    var img=getByClass('img','drag')[0];
    img.onmousedown=fnDown;

    //img.onmousemove=fnMove;

}

function fnDown(event){
    event=event || window.event;
    var drag= document.getElementById('drag'),
        downX=event.clientX-drag.offsetLeft,
        downT=event.clientY-drag.offsetTop;
// 移动
    document.onmousemove=function(event){
        event = event || window.event;
        fnMove(event,downX,downT);
    }
    //// 释放鼠标
    document.onmouseup=function(){
        document.onmousemove=null;
        document.onmouseup=null;
    }

}
function fnMove(event,postX,postT){
    //event=event || window.event;
    var drag= document.getElementById('drag'),
        l=event.clientX-postX,
        t=event.clientY-postT;
    //alert(l);
    drag.style.left=l+'px';
    drag.style.top=t+'px';
}



