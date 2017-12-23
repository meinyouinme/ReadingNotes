### 让你的js暴露amd接口

参考阮一峰老师的[这篇文章](http://www.ruanyifeng.com/blog/2012/11/require_js.html)

```javascript

(function(global,factory){
    if(typeof define === 'function'&&define.amd)
        define(function(){
            return factory(global)
        })
    else
        factory(global)
}(this,function(window){
    return //这里返回你要暴露的对象
}))

```