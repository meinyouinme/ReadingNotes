### show hide toggle 函数

显示、隐藏和切换函数

```javascript

var elementDisplay={}

//这个函数的作用是记录html标签的默认display
//比如div默认的display是block a标签的默认display是inline
//所以最终 elementDisplay会变成
//elementDisplay={
//    'DIV':'block',
//    'A':'inline'
//     ......
//}
//所以记录这个有什么用呢？
//就是用show方法还原dom的本来display（block,inline,inline-block）
function defaultDisplay(nodeName) {
    var element, display
    if (!elementDisplay[nodeName]) {
        element = document.createElement(nodeName)
        document.body.appendChild(element)
        display = getComputedStyle(element, '').getPropertyValue("display")
        element.parentNode.removeChild(element)
        display == "none" && (display = "block")
        elementDisplay[nodeName] = display
    }
    return elementDisplay[nodeName]
}

$.fn={
    show:function(){
        return this.each(function(){
            this.style.display==='none'&&(this.style.display='')
            if(getComputedStyle(this,'').getPropertyValue('display')==='none')
                //nodeName 属性指定节点的节点名称。
                //如果节点是元素节点，则 nodeName 属性返回标签名。
                //入股节点是属性节点，则 nodeName 属性返回属性的名称。
                //对于其他节点类型，nodeName 属性返回不同节点类型的不同名称。
                this.style.display=defaultDisplay(this.nodeName)
        })
    },
    hide:function(){
        
    },
    toggle:function(){
        
    }
}

```

关于getComputedStyle函数请看[这里]()