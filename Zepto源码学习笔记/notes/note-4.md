### 事件捕获与事件冒泡

详情看[这篇文章](http://www.jb51.net/article/42492.htm)

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="outer">
    <p id="inner">click me</p>
</div>
<script>
    var outer=document.getElementById('outer');
    var inner=document.getElementById('inner');
    //默认第三个参数是false 表示事件冒泡 （false可以省略）
    //所以这里先打印bar 再打印foo
    //如果手动指定第三个参数为true 则表示事件捕获 先打印foo 再打印bar
    outer.addEventListener('click',function(e){
        //e.stopPropagation();当第三个参数为true时 表示捕获 所以这句表示不会捕获（传播）即不会打印 inner
        console.log('outer')
    },false)
    inner.addEventListener('click',function(e){
        //e.stopPropagation(); 当第三个参数为false时 表示冒泡 所以这句表示不会冒泡（传播）即不会打印 outer
        console.log('inner')
    },false)
</script>
</body>
</html>


```