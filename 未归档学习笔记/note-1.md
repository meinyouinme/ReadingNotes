# js 异步队列

## 解决办法1:

这是[原文链接](http://www.jb51.net/article/116597.htm)

```javascript

 var index=0,stack=[];
 function next(){
     var fn=stack[index++];
     if(typeof fn==='function') fn();
 }
 function f1(){
     setTimeout(function(){
         console.log(1);
         next();
     },3000)
 }
 function f2(){
     setTimeout(function(){
         console.log(2);
         next();
     },2000)
 }
 function f3(){
     setTimeout(function(){
         console.log(3);
         next();
     },1000)
 }
 stack.push(f1,f2,f3)
 next();

```

文章最后有一个题目：

```javascript

// 实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)
/* 输出: 
Hi! This is Hank!
*/
 
LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
/* 输出: 
Hi! This is Hank!
// 等待10秒..
Wake up after 10
Eat dinner~
*/
 
LazyMan(“Hank”).eat(“dinner”).eat(“supper”)
/* 输出: 
Hi This is Hank!
Eat dinner~
Eat supper~
*/
 
LazyMan(“Hank”).sleepFirst(5).eat(“supper”)
/* 等待5秒，输出
Wake up after 5
Hi This is Hank!
Eat supper
*/
 
// 以此类推。

```

解答如下：

```javascript

var LazyMan = function (name) {
    this.name = name;
    this.count = 0;
    this.stack = [];
    var self = this;
    this.stack.push(function () {
        console.log('Hi! this is ' + self.name);
        self.next();//匿名函数的this会指向window，这里修正指向为LazyMan
    });
};
LazyMan.prototype.sleep = function (s) {
    var self = this;
    this.stack.push(
        function () {
            setTimeout(function () {
                console.log('Wake up after ' + s);
                self.next();
            }, s * 1000)
        });
    return this;
};
LazyMan.prototype.eat = function (food) {
    var self = this;
    this.stack.push(function () {
        console.log('Eat ' + food);
        self.next();
    });
    return this;
};
LazyMan.prototype.sleepFirst = function (s) {
    var self = this;
    this.stack.splice(this.stack.length - 2, 0, function () {//前置函数插入到倒数第二的位置
        setTimeout(function () {
            console.log('Wake up after ' + s);
            self.next();
        }, s * 1000)
    });
    return this;
};
LazyMan.prototype.next = function () {
    if (this.stack.length) {
        this.stack.shift()()//弹出stack数组第一个函数并执行
    }
};
var lazyMan = new LazyMan('Hank').sleepFirst(2).sleepFirst(2).eat('dinner').sleep(1).eat('supper');
lazyMan.next()

```
